from typing import Type, Union

from modules.common import lovato
from modules.common import mpm3pm
from modules.common import sdm


def kit_counter_version_factory(
        version: int) -> Type[Union[mpm3pm.Mpm3pm, lovato.Lovato, sdm.Sdm630]]:
    if version == 0:
        return mpm3pm.Mpm3pm
    elif version == 1:
        return lovato.Lovato
    elif version == 2:
        return sdm.Sdm630
    else:
        raise ValueError("Version "+str(version) + " unbekannt.")


def kit_inverter_version_factory(
        version: int) -> Type[Union[mpm3pm.Mpm3pm, lovato.Lovato, sdm.Sdm630, sdm.Sdm120]]:
    if version == 0:
        return mpm3pm.Mpm3pm
    elif version == 1:
        return lovato.Lovato
    elif version == 2:
        return sdm.Sdm630
    elif version == 3:
        return sdm.Sdm120
    else:
        raise ValueError("Version "+str(version) + " unbekannt.")


def kit_bat_version_factory(version: int) -> Type[Union[mpm3pm.Mpm3pm, sdm.Sdm630, sdm.Sdm120]]:
    if version == 0:
        return mpm3pm.Mpm3pm
    elif version == 1:
        return sdm.Sdm120
    elif version == 2:
        return sdm.Sdm630
    else:
        raise ValueError("Version "+str(version) + " unbekannt.")
