import{I as f,c as t,a3 as y,a4 as M,W as V,M as n,f as W,K as C,j as o,B as a,T as k,D as _,$ as h}from"./index-DwTab_5X.js";import{D as H}from"./Delete-DkwO9RIL.js";const F=f("file-success",!0,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M30 4L40 14",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M17 29L23 34L32 23",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),b=f("inbox-out",!1,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M4 30L9 6H39L44 30",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M4 30H14.9091L16.7273 36H31.2727L33.0909 30H44V43H4V30Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M18 20L24 14L30 20",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M24 26V14",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),U={__name:"UploaderFieldUse",props:y({multiple:{type:Boolean,required:!1,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const r=e,l=M(e,"modelValue"),{t:c}=V(),m=i=>{const s=l.value.indexOf(i);l.value.splice(s,1)},L=async()=>{try{(await window.pywebview.api.open_file_dialog(r.multiple)).forEach(s=>{h.success(c("components.workspace.uploaderFieldUse.upload_success",{file:s})),l.value.push(s),!r.multiple&&l.value.length>1&&l.value.splice(0,1)})}catch(i){console.log(i),h.error(c("components.workspace.uploaderFieldUse.upload_failed"))}};return(i,s)=>{const d=n("a-button"),w=n("a-typography-text"),v=n("a-list-item-meta"),j=n("a-list-item"),x=n("a-list"),g=n("a-flex");return W(),C(g,{vertical:""},{default:o(()=>[t(d,{type:"dashed",block:"",onClick:L},{icon:o(()=>[t(a(b))]),default:o(()=>[k(" "+_(a(c)("components.workspace.uploaderFieldUse.upload")),1)]),_:1}),t(x,{"data-source":l.value},{renderItem:o(({item:u})=>[t(j,null,{actions:o(()=>[t(d,{type:"text",onClick:B=>m(u)},{icon:o(()=>[t(a(H),{fill:"#ff4d4f"})]),_:2},1032,["onClick"])]),default:o(()=>[t(v,null,{title:o(()=>[t(w,null,{default:o(()=>[k(_(u),1)]),_:2},1024)]),avatar:o(()=>[t(a(F))]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"])]),_:1})}}};export{U as _};
