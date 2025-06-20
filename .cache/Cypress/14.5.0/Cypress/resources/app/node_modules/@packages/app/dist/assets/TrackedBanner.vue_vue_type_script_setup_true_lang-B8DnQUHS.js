import{d as p,i as h,o as i,n as w,p as S,a as _,K as c,aI as x,al as l,h as m,b3 as k,ab as y,B as $,A as b,aH as I,c as P,ae as D,C as M,w as j}from"./index-C9bkuwCU.js";import{M as T,O as L,Q as E}from"./index.es-BJqHzGu1.js";const O=p({__name:"CodeTag",props:{bg:{type:Boolean}},setup(t){return(a,d)=>(i(),h("code",{class:w(["font-medium rounded-[4px] mx-[4px] px-[8px] pb-0 text-[14px] leading-[24px] inline-block",{"bg-gray-50":!t.bg}])},[S(a.$slots,"default")],2))}}),C={style:{"min-width":"16px","min-height":"16px"},width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},V=_("path",{d:"M15 8L1 1L3 8L1 15L15 8Z",fill:"#D0D2E0",class:"icon-light"},null,-1),q=_("path",{d:"M3 8L1 15L15 8L1 1L3 8ZM3 8H6",stroke:"#1B1E2E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon-dark"},null,-1),Q=[V,q];function A(t,a){return i(),h("svg",C,Q)}const R={name:"cy-paper-airplane_x16",render:A},Z=p({__name:"TrackedBanner",props:{bannerId:null,hasBannerBeenShown:{type:Boolean},eventData:null},setup(t){const a=t;c`
query TrackedBanner_ProjectState {
  currentProject {
    id
    savedState
  }
}
`,c`
mutation TrackedBanner_SetProjectState($value: String!) {
  setPreferences(type: project, value: $value) {
    ...TestingPreferences
    ...SpecRunner_Preferences
    currentProject {
      id
      savedState
    }
  }
}
`,c`
mutation TrackedBanner_recordBannerSeen($campaign: String!, $messageId: String!, $medium: String!, $cohort: String) {
  recordEvent(campaign: $campaign, messageId: $messageId, medium: $medium, cohort: $cohort)
}
`;const d=x({query:T}),g=l(L),f=l(E),u=m(k()),s=m(!0);y(()=>{!a.hasBannerBeenShown&&a.eventData&&B(a.eventData)}),$(()=>s.value,async e=>{e||await r("dismissed")}),b(async()=>{await r("lastShown")});async function r(e){const n=d.data.value?.currentProject?.savedState?.banners??{};I.set(n,[a.bannerId,e],Date.now()),await g.executeMutation({value:JSON.stringify({banners:n})})}function B({campaign:e,medium:n,cohort:o}){f.executeMutation({campaign:e,messageId:u.value,medium:n,cohort:o||null})}async function v(){await r("dismissed")}return(e,n)=>(i(),P(D,M({modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=o=>s.value=o)},e.$attrs),{default:j(()=>[S(e.$slots,"default",{dismiss:v,bannerInstanceId:u.value})]),_:3},16,["modelValue"]))}});export{R as S,Z as _,O as a};
