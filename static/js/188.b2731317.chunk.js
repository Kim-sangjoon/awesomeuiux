"use strict";(self.webpackChunksampleapp=self.webpackChunksampleapp||[]).push([[188],{9167:function(e,s,n){var o=n(9439),t=n(2791),i=n(3400),r=n(6151),l=n(5351),c=n(9823),d=n(184);s.Z=function(e){var s=e.code,n=(0,t.useState)(!1),x=(0,o.Z)(n,2),a=x[0],m=x[1],h=function(){m(!0)},u=function(e,s){"slickaway"!==s&&m(!1)},j=(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(i.Z,{size:"small","aria-label":"close",color:"inherit",onClick:u,children:(0,d.jsx)(c.Z,{fontSize:"small"})})});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.Z,{variant:"contained",size:"small",sx:{position:"absolute",right:"1px",bottom:"1px",backgroundColor:"#000",color:"#fff",boxShadow:"none",borderTopLeftRadius:"5px",borderTopRightRadius:"0px",borderBottomRightRadius:"4px",borderBottomleftRadius:"0px",textTransform:"initial","&:hover":{backgroundColor:"#000"}},onClick:function(){try{if(navigator.clipboard)navigator.clipboard.writeText(s).then((function(){console.log("https\uc5d0\uc11c \ud074\ub9bd\ubcf4\ub4dc \ubcf5\uc0ac \uc131\uacf5!!!")})),h();else{if(!document.queryCommandSupported("copy"))return alert("\ucf54\ub4dc\ubcf5\uc0ac \uae30\ub2a5\uc774 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800 \uc785\ub2c8\ub2e4!");var e=document.createElement("textarea");e.value=s,e.style.top=0,e.style.left=0,e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),console.log("http\uc5d0\uc11c \ud074\ub9bd\ubcf4\ub4dc \ubcf5\uc0ac \uc131\uacf5"),h()}}catch(n){console.error("error",n)}},children:"Copy"}),(0,d.jsx)(l.Z,{open:a,autoHideDuration:4e3,onClose:u,message:"\ucf54\ub4dc\ubcf5\uc0ac!! [Ctrl + V]\ub85c \uc6d0\ud558\ub294 \uacf3\uc5d0 \ubd99\uc5ec\ub123\uae30 \ud558\uc138\uc694.",action:j})]})}},8188:function(e,s,n){n.r(s);var o=n(9439),t=n(1413),i=n(2791),r=n(6934),l=n(5527),c=n(4554),d=n(6151),x=n(4663),a=n(1889),m=n(9124),h=n(3896),u=n(6314),j=n(3594),p=n(9167),f=n(184),Z=(0,r.ZP)(l.Z)((function(e){var s=e.theme;return(0,t.Z)((0,t.Z)({backgroundColor:"dark"===s.palette.mode?"#1A2027":"#fff"},s.typography.body2),{},{padding:s.spacing(1),color:s.palette.text.secondary})})),b={border:"1px solid #ddd",boxShadow:"none",height:"400px",overflowY:"auto",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",backgroundColor:"rgb(243, 246, 249)"},g={border:"1px solid #ddd",boxShadow:"none",height:"400px",backgroundColor:"rgb(29, 31, 33)",overflowY:"auto"},G={Box:c.Z,Button:d.Z,Toolbar:x.Z,Grid:a.ZP,Paper:l.Z,Tabs:m.Z,Tab:h.Z,Stack:u.Z,Item:Z},w="<Box sx={{ flexGrow: 1 }}>\n    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>\n    {Array.from(Array(6)).map((_, index) => (\n        <Grid item xs={2} sm={4} md={4} key={index}>\n            <Item>xs=2</Item>\n        </Grid>\n    ))}\n    </Grid>\n</Box>\n",v="<Box sx={{ flexGrow: 1 }}>\n    <Grid container spacing={2}>\n        <Grid item xs={6}>\n            <Item>xs=6</Item>\n        </Grid>\n        <Grid item xs={6}>\n            <Item>xs=6</Item>\n        </Grid>\n    </Grid>\n</Box>\n",I="<Box sx={{ flexGrow: 1 }}>\n    <Grid container spacing={2}>\n        <Grid item xs={4}>\n            <Item>xs=4</Item>\n        </Grid>\n        <Grid item xs={4}>\n            <Item>xs=4</Item>\n        </Grid>\n        <Grid item xs={4}>\n            <Item>xs=4</Item>\n        </Grid>\n    </Grid>\n</Box>\n",C="<Box sx={{ flexGrow: 1 }}>\n    <Grid container spacing={2}>\n        <Grid item xs={3}>\n            <Item>xs=3</Item>\n        </Grid>\n        <Grid item xs={3}>\n            <Item>xs=3</Item>\n        </Grid>\n        <Grid item xs={3}>\n            <Item>xs=3</Item>\n        </Grid>\n        <Grid item xs={3}>\n            <Item>xs=3</Item>\n        </Grid>\n    </Grid>\n</Box>\n";s.default=function(e){i.useEffect((function(){E()}),[]);var s=i.useState(!1),n=(0,o.Z)(s,2),t=n[0],r=n[1],l=function(){r(!t)},d=i.useState(0),u=(0,o.Z)(d,2),y=u[0],k=u[1],T=document.body.offsetWidth;console.log("\uac00\ub85c\uc0ac\uc774\uc988",T);var P=T>900?520:933,B=T>900?1053:1882,N=T>900?1567:2816,S=i.useRef(null),z=function(){var e=window.scrollY;console.log("\ud604\uc7ac\uc88c\ud45c"+e),0===e?document.getElementsByClassName("top-button")[0].classList.remove("show"):document.getElementsByClassName("top-button")[0].classList.add("show"),e>90?(S.current.classList.add("fixed"),e>0&&e<P?k(0):e>P&&e<B?k(1):e>B&&e<N?k(2):e>N&&k(3)):e<90&&S.current&&S.current.classList.remove("fixed")};function E(){window.scrollTo({top:0,behavior:"smooth"})}return i.useEffect((function(){var e=setInterval((function(){window.addEventListener("scroll",z)}),100);return function(){clearInterval(e),window.removeEventListener("scroll",z)}}),[]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c.Z,{className:"contentboxwrap",children:[(0,f.jsx)(x.Z,{}),(0,f.jsxs)(c.Z,{children:[(0,f.jsx)("h1",{children:"\ub808\uc774\uc544\uc6c3"}),(0,f.jsxs)(m.Z,{className:"contentTab",ref:S,value:y,variant:"scrollable",scrollButtons:"auto",onChange:function(e,s){0===s?window.scrollTo({top:1,behavior:"smooth"}):1===s?window.scrollTo({top:P+1,behavior:"smooth"}):2===s?window.scrollTo({top:B+1,behavior:"smooth"}):3===s&&window.scrollTo({top:N+1,behavior:"smooth"})},sx:{backgroundColor:"rgb(255 255 255 / 60%)"},children:[(0,f.jsx)(h.Z,{label:"\ubd84\ud560 \uc0d8\ud50c"}),(0,f.jsx)(h.Z,{label:"2\ubd84\ud560"}),(0,f.jsx)(h.Z,{label:"3\ubd84\ud560"}),(0,f.jsx)(h.Z,{label:"4\ubd84\ud560"})]}),(0,f.jsxs)(c.Z,{className:"tab-item",children:[(0,f.jsx)("h2",{children:"\ubd84\ud560 \uc0d8\ud50c(\ubc18\uc751\ud615)"}),(0,f.jsx)("p",{className:"contText",children:"\ub808\uc544\uc544\uc6c3 \ucef4\ud3ec\ub10c\ud2b8"}),(0,f.jsx)(c.Z,{sx:{flexGrow:1},children:(0,f.jsx)(a.ZP,{container:!0,spacing:2,children:(0,f.jsxs)(j.nu,{code:w,scope:G,children:[(0,f.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,f.jsxs)(Z,{sx:b,children:[(0,f.jsx)(j.i5,{}),(0,f.jsx)(j.IF,{})]})}),(0,f.jsxs)(a.ZP,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,f.jsx)(Z,{sx:g,children:(0,f.jsx)(j.uz,{})}),(0,f.jsx)(p.Z,{onClick:l,code:w})]})]})})})]}),(0,f.jsxs)(c.Z,{className:"tab-item",children:[(0,f.jsx)("h2",{children:"2\ubd84\ud560"}),(0,f.jsx)("p",{className:"contText",children:"2\ubd84\ud560 \ub808\uc774\uc544\uc6c3"}),(0,f.jsx)(c.Z,{sx:{flexGrow:1},children:(0,f.jsx)(a.ZP,{container:!0,spacing:2,children:(0,f.jsxs)(j.nu,{code:v,scope:G,children:[(0,f.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,f.jsxs)(Z,{sx:b,children:[(0,f.jsx)(j.i5,{}),(0,f.jsx)(j.IF,{})]})}),(0,f.jsxs)(a.ZP,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,f.jsx)(Z,{sx:g,children:(0,f.jsx)(j.uz,{})}),(0,f.jsx)(p.Z,{onClick:l,code:v})]})]})})})]}),(0,f.jsxs)(c.Z,{className:"tab-item",children:[(0,f.jsx)("h2",{children:"3\ubd84\ud560"}),(0,f.jsx)("p",{className:"contText",children:"3\ubd84\ud560 \ub808\uc774\uc544\uc6c3"}),(0,f.jsx)(c.Z,{sx:{flexGrow:1},children:(0,f.jsx)(a.ZP,{container:!0,spacing:2,children:(0,f.jsxs)(j.nu,{code:I,scope:G,children:[(0,f.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,f.jsxs)(Z,{sx:b,children:[(0,f.jsx)(j.i5,{}),(0,f.jsx)(j.IF,{})]})}),(0,f.jsxs)(a.ZP,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,f.jsx)(Z,{sx:g,children:(0,f.jsx)(j.uz,{})}),(0,f.jsx)(p.Z,{onClick:l,code:I})]})]})})})]}),(0,f.jsxs)(c.Z,{className:"tab-item",children:[(0,f.jsx)("h2",{children:"4\ubd84\ud560"}),(0,f.jsx)("p",{className:"contText",children:"4\ubd84\ud560 \ub808\uc774\uc544\uc6c3"}),(0,f.jsx)(c.Z,{sx:{flexGrow:1},children:(0,f.jsx)(a.ZP,{container:!0,spacing:2,children:(0,f.jsxs)(j.nu,{code:C,scope:G,children:[(0,f.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,f.jsxs)(Z,{sx:b,children:[(0,f.jsx)(j.i5,{}),(0,f.jsx)(j.IF,{})]})}),(0,f.jsxs)(a.ZP,{item:!0,xs:12,md:6,sx:{position:"relative"},children:[(0,f.jsx)(Z,{sx:g,children:(0,f.jsx)(j.uz,{})}),(0,f.jsx)(p.Z,{onClick:l,code:C})]})]})})})]}),(0,f.jsx)(c.Z,{className:"bottom-last"})]}),(0,f.jsx)(c.Z,{className:"top-button",onClick:E,children:"TOP"})]})})}}}]);
//# sourceMappingURL=188.b2731317.chunk.js.map