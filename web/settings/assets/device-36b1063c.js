import{_ as b,q as d,k as r,l as v,B as l,M as s,x as o,u as c,y as _,z as m,A as p}from"./vendor-493c2bec.js";import"./vendor-sortablejs-0b339223.js";const h={name:"DeviceEnphase",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(u,e=void 0){this.$emit("update:configuration",{value:u,object:e})}}},w={class:"device-enphase"},y={class:"small"},k=c("br",null,null,-1),V=c("a",{href:"https://developer.enphase.com/docs/quickstart.html",target:"_blank",rel:"noopener"},"Enphase-Webseite",-1);function E(u,e,t,B,x,i){const f=d("openwb-base-heading"),a=d("openwb-base-text-input"),g=d("openwb-base-select-input");return r(),v("div",w,[l(f,null,{default:s(()=>[o(" Einstellungen für Enphase Envoy / IQ Gateway "),c("span",y,"(Modul: "+_(u.$options.name)+")",1)]),_:1}),l(a,{title:"IP oder Hostname",subtype:"host",required:"","model-value":t.configuration.hostname,"onUpdate:modelValue":e[0]||(e[0]=n=>i.updateConfiguration(n,"configuration.hostname"))},{help:s(()=>[o(' Bitte geben Sie die IP-Adresse oder den Hostnamen des Enphase Envoy oder IQ Gateway an. Die Info finden Sie in Ihrem Router. Ab Werk ist der Hostname "envoy" oder "envoy.local". ')]),_:1},8,["model-value"]),l(g,{title:"Version",required:"",options:[{value:1,text:"Firmware < 7.0"},{value:2,text:"Firmware ab 7.0"}],"model-value":t.configuration.version,"onUpdate:modelValue":e[1]||(e[1]=n=>i.updateConfiguration(n,"configuration.version"))},{help:s(()=>[o(" Bitte wählen Sie die Version des Enphase Envoy oder IQ Gateway aus. Die Version 1 ist für Geräte mit einer Firmware-Version unter 7.0, die Version 2 für Geräte mit einer Firmware-Version ab 7.0. Ein angebundener Speicher wird nur bei Version 2 unterstützt. ")]),_:1},8,["model-value"]),t.configuration.version>1?(r(),m(a,{key:0,title:"Benutzer",subtype:"user","model-value":t.configuration.user,"onUpdate:modelValue":e[2]||(e[2]=n=>i.updateConfiguration(n,"configuration.user"))},null,8,["model-value"])):p("",!0),t.configuration.version>1?(r(),m(a,{key:1,title:"Kennwort",subtype:"password","model-value":t.configuration.password,"onUpdate:modelValue":e[3]||(e[3]=n=>i.updateConfiguration(n,"configuration.password"))},null,8,["model-value"])):p("",!0),t.configuration.version>1?(r(),m(a,{key:2,title:"Token",subtype:"password","model-value":t.configuration.token,"onUpdate:modelValue":e[4]||(e[4]=n=>i.updateConfiguration(n,"configuration.token"))},{help:s(()=>[o(" Wenn Benutzer und Kennwort angegeben werden, wird das Token automatisch beim Speichern abgerufen. Ebenfalls wird ein abgelaufenes Token (derzeit nach einem Jahr) automatisch erneuert."),k,o(" Wenn Sie ein Token manuell erstellen möchten, können Sie dies auf der "),V,o(" erledigen. ")]),_:1},8,["model-value"])):p("",!0)])}const S=b(h,[["render",E],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/enphase/device.vue"]]);export{S as default};