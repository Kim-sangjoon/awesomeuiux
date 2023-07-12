"use strict";(self.webpackChunksampleapp=self.webpackChunksampleapp||[]).push([[668],{36314:function(e,t,o){o.d(t,{Z:function(){return P}});var r=o(4942),n=o(60916),l=o(54695),i=o(72791),a=o(28182),c=o(82466),s=o(94419),d=o(21217),u=o(93457),f=o(86083),v=o(78519),p=o(85080),b=o(51184),h=o(45682),m=o(80184),Z=["component","direction","spacing","divider","children","className","useFlexGap"],S=(0,p.Z)(),w=(0,u.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}});function x(e){return(0,f.Z)({props:e,name:"MuiStack",defaultTheme:S})}function g(e,t){var o=i.Children.toArray(e).filter(Boolean);return o.reduce((function(e,r,n){return e.push(r),n<o.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(n)})),e}),[])}var y=function(e){var t=e.ownerState,o=e.theme,n=(0,l.Z)({display:"flex",flexDirection:"column"},(0,b.k9)({theme:o},(0,b.P$)({values:t.direction,breakpoints:o.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=(0,h.hB)(o),a=Object.keys(o.breakpoints.values).reduce((function(e,o){return("object"===typeof t.spacing&&null!=t.spacing[o]||"object"===typeof t.direction&&null!=t.direction[o])&&(e[o]=!0),e}),{}),s=(0,b.P$)({values:t.direction,base:a}),d=(0,b.P$)({values:t.spacing,base:a});"object"===typeof s&&Object.keys(s).forEach((function(e,t,o){if(!s[e]){var r=t>0?s[o[t-1]]:"column";s[e]=r}}));n=(0,c.Z)(n,(0,b.k9)({theme:o},d,(function(e,o){return t.useFlexGap?{gap:(0,h.NA)(i,e)}:{"& > :not(style) ~ :not(style)":(0,r.Z)({margin:0},"margin".concat((n=o?s[o]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n])),(0,h.NA)(i,e))};var n})))}return n=(0,b.dt)(o.breakpoints,n)};var C=o(66934),B=o(31402),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,o=void 0===t?w:t,r=e.useThemeProps,c=void 0===r?x:r,u=e.componentName,f=void 0===u?"MuiStack":u,p=o(y),b=i.forwardRef((function(e,t){var o=c(e),r=(0,v.Z)(o),i=r.component,u=void 0===i?"div":i,b=r.direction,h=void 0===b?"column":b,S=r.spacing,w=void 0===S?0:S,x=r.divider,y=r.children,C=r.className,B=r.useFlexGap,M=void 0!==B&&B,P=(0,n.Z)(r,Z),k={direction:h,spacing:w,useFlexGap:M},W=(0,s.Z)({root:["root"]},(function(e){return(0,d.Z)(f,e)}),{});return(0,m.jsx)(p,(0,l.Z)({as:u,ownerState:k,ref:t,className:(0,a.Z)(W.root,C)},P,{children:x?g(y,x):y}))}));return b}({createStyledComponent:(0,C.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}}),useThemeProps:function(e){return(0,B.Z)({props:e,name:"MuiStack"})}}),P=M},43896:function(e,t,o){o.d(t,{Z:function(){return w}});var r=o(4942),n=o(1048),l=o(32793),i=o(72791),a=o(28182),c=o(94419),s=o(95080),d=o(14036),u=o(31402),f=o(66934),v=o(75878),p=o(21217);function b(e){return(0,p.Z)("MuiTab",e)}var h=(0,v.Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),m=o(80184),Z=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],S=(0,f.ZP)(s.Z,{name:"MuiTab",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.label&&o.icon&&t.labelIcon,t["textColor".concat((0,d.Z)(o.textColor))],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})((function(e){var t,o,n,i=e.theme,a=e.ownerState;return(0,l.Z)({},i.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},a.label&&{flexDirection:"top"===a.iconPosition||"bottom"===a.iconPosition?"column":"row"},{lineHeight:1.25},a.icon&&a.label&&(0,r.Z)({minHeight:72,paddingTop:9,paddingBottom:9},"& > .".concat(h.iconWrapper),(0,l.Z)({},"top"===a.iconPosition&&{marginBottom:6},"bottom"===a.iconPosition&&{marginTop:6},"start"===a.iconPosition&&{marginRight:i.spacing(1)},"end"===a.iconPosition&&{marginLeft:i.spacing(1)})),"inherit"===a.textColor&&(t={color:"inherit",opacity:.6},(0,r.Z)(t,"&.".concat(h.selected),{opacity:1}),(0,r.Z)(t,"&.".concat(h.disabled),{opacity:(i.vars||i).palette.action.disabledOpacity}),t),"primary"===a.textColor&&(o={color:(i.vars||i).palette.text.secondary},(0,r.Z)(o,"&.".concat(h.selected),{color:(i.vars||i).palette.primary.main}),(0,r.Z)(o,"&.".concat(h.disabled),{color:(i.vars||i).palette.text.disabled}),o),"secondary"===a.textColor&&(n={color:(i.vars||i).palette.text.secondary},(0,r.Z)(n,"&.".concat(h.selected),{color:(i.vars||i).palette.secondary.main}),(0,r.Z)(n,"&.".concat(h.disabled),{color:(i.vars||i).palette.text.disabled}),n),a.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},a.wrapped&&{fontSize:i.typography.pxToRem(12)})})),w=i.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiTab"}),r=o.className,s=o.disabled,f=void 0!==s&&s,v=o.disableFocusRipple,p=void 0!==v&&v,h=o.fullWidth,w=o.icon,x=o.iconPosition,g=void 0===x?"top":x,y=o.indicator,C=o.label,B=o.onChange,M=o.onClick,P=o.onFocus,k=o.selected,W=o.selectionFollowsFocus,R=o.textColor,T=void 0===R?"inherit":R,E=o.value,N=o.wrapped,I=void 0!==N&&N,F=(0,n.Z)(o,Z),j=(0,l.Z)({},o,{disabled:f,disableFocusRipple:p,selected:k,icon:!!w,iconPosition:g,label:!!C,fullWidth:h,textColor:T,wrapped:I}),L=function(e){var t=e.classes,o=e.textColor,r=e.fullWidth,n=e.wrapped,l=e.icon,i=e.label,a=e.selected,s=e.disabled,u={root:["root",l&&i&&"labelIcon","textColor".concat((0,d.Z)(o)),r&&"fullWidth",n&&"wrapped",a&&"selected",s&&"disabled"],iconWrapper:["iconWrapper"]};return(0,c.Z)(u,b,t)}(j),z=w&&C&&i.isValidElement(w)?i.cloneElement(w,{className:(0,a.Z)(L.iconWrapper,w.props.className)}):w;return(0,m.jsxs)(S,(0,l.Z)({focusRipple:!p,className:(0,a.Z)(L.root,r),ref:t,role:"tab","aria-selected":k,disabled:f,onClick:function(e){!k&&B&&B(e,E),M&&M(e)},onFocus:function(e){W&&!k&&B&&B(e,E),P&&P(e)},ownerState:j,tabIndex:k?0:-1},F,{children:["top"===g||"start"===g?(0,m.jsxs)(i.Fragment,{children:[z,C]}):(0,m.jsxs)(i.Fragment,{children:[C,z]}),y]}))}))},39124:function(e,t,o){o.d(t,{Z:function(){return K}});var r,n=o(29439),l=o(4942),i=o(1048),a=o(32793),c=o(72791),s=(o(78457),o(28182)),d=o(94419),u=o(40536),f=o(66934),v=o(31402),p=o(13967),b=o(83199);function h(){if(r)return r;var e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),r="reverse",e.scrollLeft>0?r="default":(e.scrollLeft=1,0===e.scrollLeft&&(r="negative")),document.body.removeChild(e),r}function m(e,t){var o=e.scrollLeft;if("rtl"!==t)return o;switch(h()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function Z(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var S=o(40162),w=o(17602),x=o(80184),g=["onChange"],y={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var C=o(7883),B=o(11883),M=o(95080),P=o(75878),k=o(21217);function W(e){return(0,k.Z)("MuiTabScrollButton",e)}var R=(0,P.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),T=["className","slots","slotProps","direction","orientation","disabled"],E=(0,f.ZP)(M.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.orientation&&t[o.orientation]]}})((function(e){var t=e.ownerState;return(0,a.Z)((0,l.Z)({width:40,flexShrink:0,opacity:.8},"&.".concat(R.disabled),{opacity:0}),"vertical"===t.orientation&&{width:"100%",height:40,"& svg":{transform:"rotate(".concat(t.isRtl?-90:90,"deg)")}})})),N=c.forwardRef((function(e,t){var o,r,n=(0,v.Z)({props:e,name:"MuiTabScrollButton"}),l=n.className,c=n.slots,f=void 0===c?{}:c,b=n.slotProps,h=void 0===b?{}:b,m=n.direction,Z=(0,i.Z)(n,T),S="rtl"===(0,p.Z)().direction,w=(0,a.Z)({isRtl:S},n),g=function(e){var t=e.classes,o={root:["root",e.orientation,e.disabled&&"disabled"]};return(0,d.Z)(o,W,t)}(w),y=null!=(o=f.StartScrollButtonIcon)?o:C.Z,M=null!=(r=f.EndScrollButtonIcon)?r:B.Z,P=(0,u.Z)({elementType:y,externalSlotProps:h.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:w}),k=(0,u.Z)({elementType:M,externalSlotProps:h.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:w});return(0,x.jsx)(E,(0,a.Z)({component:"div",className:(0,s.Z)(g.root,l),ref:t,role:null,ownerState:w,tabIndex:null},Z,{children:"left"===m?(0,x.jsx)(y,(0,a.Z)({},P)):(0,x.jsx)(M,(0,a.Z)({},k))}))})),I=o(89683);function F(e){return(0,k.Z)("MuiTabs",e)}var j=(0,P.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),L=o(98301),z=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],A=function(e,t){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild},H=function(e,t){return e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild},X=function(e,t,o){for(var r=!1,n=o(e,t);n;){if(n===e.firstChild){if(r)return;r=!0}var l=n.disabled||"true"===n.getAttribute("aria-disabled");if(n.hasAttribute("tabindex")&&!l)return void n.focus();n=o(e,n)}},D=(0,f.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[(0,l.Z)({},"& .".concat(j.scrollButtons),t.scrollButtons),(0,l.Z)({},"& .".concat(j.scrollButtons),o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile),t.root,o.vertical&&t.vertical]}})((function(e){var t=e.ownerState,o=e.theme;return(0,a.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&(0,l.Z)({},"& .".concat(j.scrollButtons),(0,l.Z)({},o.breakpoints.down("sm"),{display:"none"})))})),Y=(0,f.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:function(e,t){var o=e.ownerState;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})((function(e){var t=e.ownerState;return(0,a.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})})),O=(0,f.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:function(e,t){var o=e.ownerState;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})})),G=(0,f.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:function(e,t){return t.indicator}})((function(e){var t=e.ownerState,o=e.theme;return(0,a.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create()},"primary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.primary.main},"secondary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})})),V=(0,f.ZP)((function(e){var t=e.onChange,o=(0,i.Z)(e,g),r=c.useRef(),n=c.useRef(null),l=function(){r.current=n.current.offsetHeight-n.current.clientHeight};return(0,S.Z)((function(){var e=(0,b.Z)((function(){var e=r.current;l(),e!==r.current&&t(r.current)})),o=(0,w.Z)(n.current);return o.addEventListener("resize",e),function(){e.clear(),o.removeEventListener("resize",e)}}),[t]),c.useEffect((function(){l(),t(r.current)}),[t]),(0,x.jsx)("div",(0,a.Z)({style:y,ref:n},o))}),{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),q={},$=c.forwardRef((function(e,t){var o=(0,v.Z)({props:e,name:"MuiTabs"}),r=(0,p.Z)(),f="rtl"===r.direction,S=o["aria-label"],g=o["aria-labelledby"],y=o.action,C=o.centered,B=void 0!==C&&C,M=o.children,P=o.className,k=o.component,W=void 0===k?"div":k,R=o.allowScrollButtonsMobile,T=void 0!==R&&R,E=o.indicatorColor,j=void 0===E?"primary":E,$=o.onChange,K=o.orientation,U=void 0===K?"horizontal":K,J=o.ScrollButtonComponent,Q=void 0===J?N:J,_=o.scrollButtons,ee=void 0===_?"auto":_,te=o.selectionFollowsFocus,oe=o.slots,re=void 0===oe?{}:oe,ne=o.slotProps,le=void 0===ne?{}:ne,ie=o.TabIndicatorProps,ae=void 0===ie?{}:ie,ce=o.TabScrollButtonProps,se=void 0===ce?{}:ce,de=o.textColor,ue=void 0===de?"primary":de,fe=o.value,ve=o.variant,pe=void 0===ve?"standard":ve,be=o.visibleScrollbar,he=void 0!==be&&be,me=(0,i.Z)(o,z),Ze="scrollable"===pe,Se="vertical"===U,we=Se?"scrollTop":"scrollLeft",xe=Se?"top":"left",ge=Se?"bottom":"right",ye=Se?"clientHeight":"clientWidth",Ce=Se?"height":"width",Be=(0,a.Z)({},o,{component:W,allowScrollButtonsMobile:T,indicatorColor:j,orientation:U,vertical:Se,scrollButtons:ee,textColor:ue,variant:pe,visibleScrollbar:he,fixed:!Ze,hideScrollbar:Ze&&!he,scrollableX:Ze&&!Se,scrollableY:Ze&&Se,centered:B&&!Ze,scrollButtonsHideMobile:!T}),Me=function(e){var t=e.vertical,o=e.fixed,r=e.hideScrollbar,n=e.scrollableX,l=e.scrollableY,i=e.centered,a=e.scrollButtonsHideMobile,c=e.classes,s={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",n&&"scrollableX",l&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",a&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,d.Z)(s,F,c)}(Be),Pe=(0,u.Z)({elementType:re.StartScrollButtonIcon,externalSlotProps:le.startScrollButtonIcon,ownerState:Be}),ke=(0,u.Z)({elementType:re.EndScrollButtonIcon,externalSlotProps:le.endScrollButtonIcon,ownerState:Be});var We=c.useState(!1),Re=(0,n.Z)(We,2),Te=Re[0],Ee=Re[1],Ne=c.useState(q),Ie=(0,n.Z)(Ne,2),Fe=Ie[0],je=Ie[1],Le=c.useState({start:!1,end:!1}),ze=(0,n.Z)(Le,2),Ae=ze[0],He=ze[1],Xe=c.useState({overflow:"hidden",scrollbarWidth:0}),De=(0,n.Z)(Xe,2),Ye=De[0],Oe=De[1],Ge=new Map,Ve=c.useRef(null),qe=c.useRef(null),$e=function(){var e,t,o=Ve.current;if(o){var n=o.getBoundingClientRect();e={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:m(o,r.direction),scrollWidth:o.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}if(o&&!1!==fe){var l=qe.current.children;if(l.length>0){var i=l[Ge.get(fe)];0,t=i?i.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},Ke=(0,I.Z)((function(){var e,t,o=$e(),r=o.tabsMeta,n=o.tabMeta,i=0;if(Se)t="top",n&&r&&(i=n.top-r.top+r.scrollTop);else if(t=f?"right":"left",n&&r){var a=f?r.scrollLeftNormalized+r.clientWidth-r.scrollWidth:r.scrollLeft;i=(f?-1:1)*(n[t]-r[t]+a)}var c=(e={},(0,l.Z)(e,t,i),(0,l.Z)(e,Ce,n?n[Ce]:0),e);if(isNaN(Fe[t])||isNaN(Fe[Ce]))je(c);else{var s=Math.abs(Fe[t]-c[t]),d=Math.abs(Fe[Ce]-c[Ce]);(s>=1||d>=1)&&je(c)}})),Ue=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).animation;void 0===t||t?function(e,t,o){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},l=r.ease,i=void 0===l?Z:l,a=r.duration,c=void 0===a?300:a,s=null,d=t[e],u=!1,f=function(){u=!0};d===o?n(new Error("Element already at target position")):requestAnimationFrame((function r(l){if(u)n(new Error("Animation cancelled"));else{null===s&&(s=l);var a=Math.min(1,(l-s)/c);t[e]=i(a)*(o-d)+d,a>=1?requestAnimationFrame((function(){n(null)})):requestAnimationFrame(r)}}))}(we,Ve.current,e,{duration:r.transitions.duration.standard}):Ve.current[we]=e},Je=function(e){var t=Ve.current[we];Se?t+=e:(t+=e*(f?-1:1),t*=f&&"reverse"===h()?-1:1),Ue(t)},Qe=function(){for(var e=Ve.current[ye],t=0,o=Array.from(qe.current.children),r=0;r<o.length;r+=1){var n=o[r];if(t+n[ye]>e){0===r&&(t=e);break}t+=n[ye]}return t},_e=function(){Je(-1*Qe())},et=function(){Je(Qe())},tt=c.useCallback((function(e){Oe({overflow:null,scrollbarWidth:e})}),[]),ot=(0,I.Z)((function(e){var t=$e(),o=t.tabsMeta,r=t.tabMeta;if(r&&o)if(r[xe]<o[xe]){var n=o[we]+(r[xe]-o[xe]);Ue(n,{animation:e})}else if(r[ge]>o[ge]){var l=o[we]+(r[ge]-o[ge]);Ue(l,{animation:e})}})),rt=(0,I.Z)((function(){if(Ze&&!1!==ee){var e,t,o=Ve.current,n=o.scrollTop,l=o.scrollHeight,i=o.clientHeight,a=o.scrollWidth,c=o.clientWidth;if(Se)e=n>1,t=n<l-i-1;else{var s=m(Ve.current,r.direction);e=f?s<a-c-1:s>1,t=f?s>1:s<a-c-1}e===Ae.start&&t===Ae.end||He({start:e,end:t})}}));c.useEffect((function(){var e,t=(0,b.Z)((function(){Ve.current&&(Ke(),rt())})),o=(0,w.Z)(Ve.current);return o.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t),Array.from(qe.current.children).forEach((function(t){e.observe(t)}))),function(){t.clear(),o.removeEventListener("resize",t),e&&e.disconnect()}}),[Ke,rt]);var nt=c.useMemo((function(){return(0,b.Z)((function(){rt()}))}),[rt]);c.useEffect((function(){return function(){nt.clear()}}),[nt]),c.useEffect((function(){Ee(!0)}),[]),c.useEffect((function(){Ke(),rt()})),c.useEffect((function(){ot(q!==Fe)}),[ot,Fe]),c.useImperativeHandle(y,(function(){return{updateIndicator:Ke,updateScrollButtons:rt}}),[Ke,rt]);var lt=(0,x.jsx)(G,(0,a.Z)({},ae,{className:(0,s.Z)(Me.indicator,ae.className),ownerState:Be,style:(0,a.Z)({},Fe,ae.style)})),it=0,at=c.Children.map(M,(function(e){if(!c.isValidElement(e))return null;var t=void 0===e.props.value?it:e.props.value;Ge.set(t,it);var o=t===fe;return it+=1,c.cloneElement(e,(0,a.Z)({fullWidth:"fullWidth"===pe,indicator:o&&!Te&&lt,selected:o,selectionFollowsFocus:te,onChange:$,textColor:ue,value:t},1!==it||!1!==fe||e.props.tabIndex?{}:{tabIndex:0}))})),ct=function(){var e={};e.scrollbarSizeListener=Ze?(0,x.jsx)(V,{onChange:tt,className:(0,s.Z)(Me.scrollableX,Me.hideScrollbar)}):null;var t=Ae.start||Ae.end,o=Ze&&("auto"===ee&&t||!0===ee);return e.scrollButtonStart=o?(0,x.jsx)(Q,(0,a.Z)({slots:{StartScrollButtonIcon:re.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:Pe},orientation:U,direction:f?"right":"left",onClick:_e,disabled:!Ae.start},se,{className:(0,s.Z)(Me.scrollButtons,se.className)})):null,e.scrollButtonEnd=o?(0,x.jsx)(Q,(0,a.Z)({slots:{EndScrollButtonIcon:re.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:ke},orientation:U,direction:f?"left":"right",onClick:et,disabled:!Ae.end},se,{className:(0,s.Z)(Me.scrollButtons,se.className)})):null,e}();return(0,x.jsxs)(D,(0,a.Z)({className:(0,s.Z)(Me.root,P),ownerState:Be,ref:t,as:W},me,{children:[ct.scrollButtonStart,ct.scrollbarSizeListener,(0,x.jsxs)(Y,{className:Me.scroller,ownerState:Be,style:(0,l.Z)({overflow:Ye.overflow},Se?"margin".concat(f?"Left":"Right"):"marginBottom",he?void 0:-Ye.scrollbarWidth),ref:Ve,onScroll:nt,children:[(0,x.jsx)(O,{"aria-label":S,"aria-labelledby":g,"aria-orientation":"vertical"===U?"vertical":null,className:Me.flexContainer,ownerState:Be,onKeyDown:function(e){var t=qe.current,o=(0,L.Z)(t).activeElement;if("tab"===o.getAttribute("role")){var r="horizontal"===U?"ArrowLeft":"ArrowUp",n="horizontal"===U?"ArrowRight":"ArrowDown";switch("horizontal"===U&&f&&(r="ArrowRight",n="ArrowLeft"),e.key){case r:e.preventDefault(),X(t,o,H);break;case n:e.preventDefault(),X(t,o,A);break;case"Home":e.preventDefault(),X(t,null,A);break;case"End":e.preventDefault(),X(t,null,H)}}},ref:qe,role:"tablist",children:at}),Te&&lt]}),ct.scrollButtonEnd]}))})),K=$}}]);
//# sourceMappingURL=668.c33a64c7.chunk.js.map