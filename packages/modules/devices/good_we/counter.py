#!/usr/bin/env python3
from typing import Dict, Union

from dataclass_utils import dataclass_from_dict
from modules.common import modbus
from modules.common.component_state import CounterState
from modules.common.component_type import ComponentDescriptor
from modules.common.fault_state import ComponentInfo
from modules.common.modbus import ModbusDataType
from modules.common.store import get_counter_value_store
from modules.devices.good_we.config import GoodWeCounterSetup
from modules.devices.good_we.version import GoodWeVersion


class GoodWeCounter:
    def __init__(self,
                 modbus_id: int,
                 component_config: Union[Dict, GoodWeCounterSetup],
                 tcp_client: modbus.ModbusTcpClient_,
                 version: GoodWeVersion) -> None:
        self.__modbus_id = modbus_id
        self.component_config = dataclass_from_dict(GoodWeCounterSetup, component_config)
        self.__tcp_client = tcp_client
        self._version = version
        self.store = get_counter_value_store(self.component_config.id)
        self.component_info = ComponentInfo.from_component_config(self.component_config)

    def update(self):
        with self.__tcp_client:
            if self._version == GoodWeVersion.V_1_7 or self._version == GoodWeVersion.V_1_10:
                power_factors = [
                    val / 1000 for val in self.__tcp_client.read_holding_registers(36010,
                                                                                   [ModbusDataType.UINT_16]*3,
                                                                                   unit=self.__modbus_id)]
                exported = self.__tcp_client.read_holding_registers(
                    36015, ModbusDataType.FLOAT_32, unit=self.__modbus_id) * 1000
                imported = self.__tcp_client.read_holding_registers(
                    36017, ModbusDataType.FLOAT_32, unit=self.__modbus_id) * 1000
                powers = [
                    val * -1 for val in self.__tcp_client.read_holding_registers(36005,
                                                                                 [ModbusDataType.INT_16]*3,
                                                                                 unit=self.__modbus_id)]
                power = self.__tcp_client.read_holding_registers(
                    36008, ModbusDataType.INT_16, unit=self.__modbus_id) * -1
                frequency = self.__tcp_client.read_holding_registers(
                    36014, ModbusDataType.UINT_16, unit=self.__modbus_id) / 100
            elif self._version == GoodWeVersion.V_1_1:
                power_factors = [
                    val / 1000 for val in self.__tcp_client.read_holding_registers(36010,
                                                                                   [ModbusDataType.INT_16]*3,
                                                                                   unit=self.__modbus_id)]
                exported = self.__tcp_client.read_holding_registers(
                    36104, ModbusDataType.UINT_64, unit=self.__modbus_id) / 100
                imported = self.__tcp_client.read_holding_registers(
                    36120, ModbusDataType.UINT_64, unit=self.__modbus_id) / 100
                powers = [
                    val * -1 for val in self.__tcp_client.read_holding_registers(36005,
                                                                                 [ModbusDataType.INT_16]*3,
                                                                                 unit=self.__modbus_id)]
                power = self.__tcp_client.read_holding_registers(
                    36025, ModbusDataType.INT_32, unit=self.__modbus_id) * -1
                frequency = self.__tcp_client.read_holding_registers(
                    36014, ModbusDataType.UINT_16, unit=self.__modbus_id) / 100

        counter_state = CounterState(
            powers=powers,
            imported=imported,
            exported=exported,
            power=power,
            power_factors=power_factors,
            frequency=frequency
        )
        self.store.set(counter_state)


component_descriptor = ComponentDescriptor(configuration_factory=GoodWeCounterSetup)
