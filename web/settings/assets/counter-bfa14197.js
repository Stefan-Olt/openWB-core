import{_ as c,q as n,k as d,l as u,B as o,M as s,x as a,u as l,y as p}from"./vendor-72da2ec6.js";import"./vendor-sortablejs-bc651bf7.js";const _={name:"DeviceKostalSEMCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},m={class:"device-kostal-sem-counter"},f={class:"small"};function h(e,t,g,b,v,w){const r=n("openwb-base-heading"),i=n("openwb-base-alert");return d(),u("div",m,[o(r,null,{default:s(()=>[a(" Einstellungen für Kostal Smart Energy Meter oder TQ EM 410 Zähler "),l("span",f,"(Modul: "+p(e.$options.name)+")",1)]),_:1}),o(i,{subtype:"info"},{default:s(()=>[a(" Diese Komponente ist nur richtig, wenn der Zähler NICHT direkt am Wechselrichter (Kostal Plenticore) angeschlossen ist und daher separat abgefragt werden muss. ")]),_:1})])}const x=c(_,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/kostal_sem/counter.vue"]]);export{x as default};