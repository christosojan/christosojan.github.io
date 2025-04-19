import{u,r as c,f as C,j as e,A as W,g as h,B as r,I as y,L as j,D as L,h as A,F as z,i as D,k as K,l as N,m as q,n as R,o as O,p as M,q as p,s as o,G as f,t as E,v as T,w as H,x as V,y as _,S as F,z as G,E as U,H as Z,J as I,K as Q,M as $}from"./mui.js";import{M as J,D as X,L as Y,K as ee,C as te,a as ne,P as B,b as P,E as oe,c as se,G as re}from"./icons.js";import{C as ie}from"./index.js";import{R as ae}from"./react_typed.js";function le(s){const{children:t}=s,l=C({disableHysteresis:!0,threshold:100}),d=i=>{const a=(i.target.ownerDocument||document).querySelector("#back-to-top-anchor");a&&a.scrollIntoView({block:"center"})};return e.jsx(O,{in:l,children:e.jsx(r,{onClick:d,role:"presentation",sx:{position:"fixed",bottom:16,right:16,zIndex:1e3},component:"div",children:t})})}function ce(s){const{children:t}=s,l=C({disableHysteresis:!0,threshold:0});return t?c.cloneElement(t,{elevation:l?4:0,sx:{backgroundColor:l?"#333":"transparent",transition:"background-color 0.3s ease"}}):null}function de(){const s=u(),[t,l]=c.useState(!1),{setTheme:d}=c.useContext(ie),i=C({disableHysteresis:!0,threshold:0}),a=m=>{const n=document.getElementById(m.toLowerCase());n&&n.scrollIntoView({block:"start"})},x=()=>{l(m=>!m)},v=()=>{localStorage.getItem("themeMode")==="light"?d("dark"):d("light")},g=["About","Work","Contact"],k=e.jsxs(r,{onClick:x,role:"navigation","aria-hidden":!t,children:[e.jsx(y,{color:"inherit","aria-label":"close navigation drawer",edge:"start",sx:{m:1},children:e.jsx(te,{})}),e.jsx(D,{}),e.jsx(r,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"},component:"div",children:e.jsx(K,{children:g.map((m,n)=>e.jsx(N,{disablePadding:!0,children:e.jsx(q,{sx:{textAlign:"center"},onClick:()=>a(m),"aria-describedby":`Navigate to ${m}`,component:"a",children:e.jsx(R,{primary:m})})},n))})})]});return e.jsxs(c.Fragment,{children:[e.jsx(ce,{children:e.jsx(W,{component:"nav",position:"fixed","aria-describedby":"Navbar",children:e.jsxs(h,{children:[e.jsx(r,{sx:{mr:2,display:{sm:"none"},flexGrow:1,justifyContent:"start"},component:"div",children:e.jsx(y,{color:"inherit","aria-label":"open navigation drawer",edge:"start",onClick:x,children:e.jsx(J,{sx:{color:s.palette.mode=="light"?i?"white":"black":"white"}})})}),e.jsx(r,{component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"},alignItems:"center"}}),e.jsx(r,{sx:{display:{xs:"none",sm:"block"}},component:"div",children:g.map(m=>e.jsx(j,{sx:{color:s.palette.mode=="light"?i?"common.white":"common.black":"common.white",px:1,"&:hover":{textDecorationThickness:2,textUnderlineOffset:6}},underline:"hover",component:"button",variant:"button",onClick:()=>a(m),"aria-describedby":`Navigate to ${m}`,children:m},m))}),e.jsx(r,{component:"div",sx:{ml:2},children:e.jsx(y,{color:"inherit",onClick:v,id:"theme-switch","aria-label":"switch theme",children:localStorage.getItem("themeMode")==="light"?e.jsx(X,{sx:{color:i?"white":"black"}}):e.jsx(Y,{sx:{color:"white"}})})})]})})}),e.jsx(L,{variant:"temporary",open:t,onClose:x,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",maxWidth:"320px",width:"100%"}},"aria-describedby":"navigation drawer for mobile devices","aria-hidden":!t,role:"navigation",children:k}),e.jsx(h,{id:"back-to-top-anchor"}),e.jsx(le,{"aria-describedby":"button for scroll back to top",children:e.jsx(A,{title:"Scroll back to top",arrow:!0,children:e.jsx(z,{size:"medium",placement:"left",children:e.jsx(ee,{})})})})]})}const me="/img/restaurantChatbot.jpg",xe="/img/msa.jpg",he="/img/homepoint.jpg",pe="/img/portfolio.jpg",ue="/img/headshot.png",ge=["Software Engineer","Full Stack Developer","Python Developer"],fe="I'm a Software Engineer based in Kerala, India, with a passion for building robust, user-centric, and scalable software systems. My focus areas include full-stack web development, cloud-based DevOps practices, and intelligent systems leveraging AI/ML, among others. In the past, I’ve collaborated with enterprise software teams during internships, where I contributed to chatbot development, API integrations, and software testing. I’ve also independently developed several projects and contributed to open-source software. As a fast learner with a passion for technology, I'm eager to grow, collaborate, and contribute to building innovative and impactful solutions in dynamic professional environments.",be=[{institution:"Indian Institute of Information Technology Kottayam",degree:"Bachelor of Technology, Computer Science and Engineering",location:"Pala, Kerala, India",date:"2020 - 2024"},{institution:"Bhavan's Varuna Vidyalaya Thrikkakara",degree:"Higher Secondary School",location:"Kochi, Kerala, India",date:"2020"},{institution:"Bhavan's Adarsha Vidyalaya Kakkanad",degree:"Secondary School",location:"Kochi, Kerala, India",date:"2018"}],ye=[{company:"SunTec Business Solutions",location:"Trivandrum, Kerala, India",role:"Project Intern",duration:"Feb 2024 - Aug 2024",skills:["Linux","SQL","RESTful APIs","Kubernetes","Docker","Openshift"],description:"Contributed to enhancing software reliability by developing automated regression test suites and integrating them into the CI/CD pipeline, collaborating with cross-functional teams. Responsible for maintaining and optimizing the testing environment to ensure smooth and efficient deployment cycles. Proficiently balanced manual and automated testing techniques, maintaining consistent quality throughout the development lifecycle."},{company:"IBS Software",location:"Kochi, Kerala, India",role:"Project Trainee",duration:"May 2023 - July 2023",skills:["Python","Rasa","NLP","Restful APIs"],description:"Developed a Rasa-based chatbot capable of handling over 100 frequently asked questions and integrated it with the Aerodatabox API for real-time flight status updates. Built a custom chatbot widget using jQuery and Materialize CSS to enable seamless user interaction. Implemented a system to archive conversation history using Firebase Cloud Firestore, enhancing data persistence and traceability."}],je=[{image:pe,title:"Portfolio Website",description:"Fully responsive professional portfolio website highlighting technical expertise and significant achievements adhering to Web Content Accessibility Guidelines (WCAG) standards.",link:"/",skills:["React","Material UI","Vite"]},{image:me,title:"Restaurant Chatbot",description:"Developed a conversational chatbot capable of addressing customer inquiries, handling table reservations, and food orders. Integrated capabilities to manage both domain-specific and general queries.",link:"https://github.com/christosojan/Gus",skills:["Python","Rasa","NLP"]},{image:xe,title:"Multimodal Sentiment Analysis",description:"Implemented Deep Fusion Multimodal Residual (DFMR) for Multimodal Sentiment Analysis in native Indian languages, combining text, audio, and video data to improve accuracy of sentiment analysis.",link:"https://github.com/christosojan/MSA_in_Indian_Languages",skills:["Python","Tensorflow","Keras"]},{image:he,title:"Household Services Application",description:"Developed a Multi-user Web Application to connect service professionals with customers. Implemented admin monitoring, user authentication, service booking and review systems.",link:"https://github.com/christosojan/HomePoint",skills:["Flask","SQLite","Bootstrap"]}],S={linkedin:"https://www.linkedin.com/in/christo-sojan",github:"https://github.com/christosojan"};function ve(){const s=u(),l=M(s.breakpoints.down("sm"))?s.spacing(7):s.spacing(8),d=i=>{const a=document.getElementById(i.toLowerCase());a&&a.scrollIntoView({block:"start"})};return e.jsx(c.Fragment,{children:e.jsxs(p,{component:"section",sx:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",marginTop:"-"+l,backgroundImage:s.palette.mode=="dark"?"linear-gradient(135deg,rgb(0, 0, 0),rgb(39, 61, 84),rgb(39, 98, 152))":"linear-gradient(135deg,rgb(255, 255, 255), rgb(255, 244, 202), rgb(255, 202, 141))",backgroundSize:"cover",backgroundPosition:"center"},disableGutters:!0,maxWidth:!0,children:[e.jsxs(r,{sx:{textAlign:"center",padding:0,backgroundColor:"transparent"},children:[e.jsx(o,{variant:"h2",component:"h1",className:s.palette.mode=="dark"?"caption-dark":"caption-light",sx:{fontWeight:"bold",textTransform:"uppercase"},"aria-describedby":"Name",children:"Christo Sojan"}),e.jsx(o,{variant:"h4",component:"p",sx:{fontWeight:"450",color:"text.secondary"},"aria-describedby":"Title",children:e.jsx(ae,{strings:ge,typeSpeed:100,loop:!0,backSpeed:20,showCursor:!0,"aria-describedby":"Typing animation showing roles: Software Development Engineer related roles"})})]}),e.jsx(r,{component:"div",className:"scroll-down",id:"scrollDown",sx:{position:"absolute",bottom:s.spacing(2),transform:"translateX(-50%)"},children:e.jsx(A,{title:"Scroll Down",children:e.jsx(y,{color:"inherit","aria-describedby":"Button to scroll down to next section",onClick:()=>d("about"),children:e.jsx(ne,{fontSize:"large"})})})})]})})}function ke(){const s=u(),t=M(s.breakpoints.down("sm"));return e.jsxs(c.Fragment,{children:[e.jsx(h,{id:"about",disableGutters:!0}),e.jsxs(p,{disableGutters:!0,component:"section",sx:{px:{xs:6,sm:8},py:{xs:6,sm:8},alignContent:"center",justifyContent:"center"},children:[e.jsx(o,{variant:"h6",component:"p",sx:{fontWeight:"normal",textAlign:"center",color:"text.secondary"},children:"Get To Know More"}),e.jsx(o,{variant:"h4",component:"h2",gutterBottom:!0,sx:{fontWeight:"bold",color:"text.primary",textAlign:"center",mb:{xs:2,sm:4}},children:"About Me"}),e.jsxs(f,{container:!0,rows:{md:2,lg:1},flexDirection:{xs:"column",lg:"row"},sx:{justifyContent:"center",alignItems:"center"},children:[e.jsx(f,{size:{md:12,lg:5},children:e.jsx(r,{component:"div",sx:{marginTop:{xs:0,md:0},ml:{xs:0,lg:10},marginBottom:{xs:0},justifyContent:{xs:"center",lg:"start"},alignItems:"center",display:"flex"},children:e.jsx("img",{height:t?200:300,width:"fit-content",src:ue,alt:"Photograph of Christo Sojan",className:"headshot"})})}),e.jsx(f,{size:{md:12,lg:7},children:e.jsx(r,{component:"div",sx:{textAlign:{xs:"center",md:"left"},padding:{xs:1,sm:0},mr:{xs:0,lg:10},mt:{xs:3,md:5,lg:0}},children:e.jsx(o,{variant:"body1",component:"p",sx:{color:"text.secondary",textAlign:{xs:"center",lg:"left"},px:{xs:0,sm:6,md:12,lg:0}},children:fe})})})]})]})]})}function we(){const s=u();return e.jsxs(c.Fragment,{children:[e.jsx(h,{id:"education",disableGutters:!0,variant:"dense"}),e.jsxs(p,{disableGutters:!0,component:"section",sx:{display:"flex",px:{xs:6,sm:8},py:{xs:6,sm:8},flexDirection:"column",minWidth:"100%"},children:[e.jsx(o,{variant:"h4",component:"h2",gutterBottom:!0,sx:{fontWeight:"bold",textAlign:"center",justifyContent:"center",color:"text.primary",mb:{xs:2,sm:4}},children:"Education"}),be.map((t,l)=>e.jsx(E,{sx:{display:"flex",mx:{xs:0,lg:15},p:{xs:2,sm:3},my:.25,borderWidth:2,"&:hover":{backgroundColor:s.palette.mode==="dark"?"grey.800":"grey.200",boxShadow:"10"}},variant:"outlined",component:"article",children:e.jsx(r,{component:"div",sx:{flexGrow:1,pl:{xs:0,sm:2}},children:e.jsxs(T,{sx:{p:0,"&:last-child":{paddingBottom:0},flex:"1 0 auto"},children:[e.jsx(o,{variant:"h6",component:"p",children:t.institution}),e.jsx(o,{variant:"subtitle1",component:"p",gutterBottom:!0,children:t.degree}),e.jsxs(r,{sx:{display:"flex",alignItems:"center"},component:"div",children:[e.jsx(B,{sx:{fontSize:20}})," ",e.jsx(o,{variant:"body1",component:"p",children:t.location})]}),e.jsxs(r,{sx:{display:"flex",alignItems:"center"},component:"div",children:[e.jsx(P,{sx:{fontSize:16,mx:.2}})," ",e.jsx(o,{variant:"body1",component:"p",children:t.date})]})]})})},l))]})]})}function Ie(){const s=u(),[t,l]=c.useState(!1),d=i=>(a,x)=>{l(x?i:!1)};return e.jsxs(c.Fragment,{children:[e.jsx(h,{id:"experience",disableGutters:!0,variant:"dense"}),e.jsxs(p,{disableGutters:!0,component:"section",sx:{display:"flex",px:{xs:6,sm:8},py:{xs:6,sm:8},flexDirection:"column",minWidth:"100%"},children:[e.jsx(o,{variant:"h6",component:"p",sx:{fontWeight:"normal",textAlign:"center",color:"text.secondary"},children:"Explore My"}),e.jsx(o,{variant:"h4",component:"h2",gutterBottom:!0,sx:{fontWeight:"bold",textAlign:"center",justifyContent:"center",color:"text.primary",mb:{xs:2,sm:4}},children:"Experience"}),e.jsx(r,{sx:{mx:{xs:0,lg:15}},component:"div",children:ye.map((i,a)=>e.jsxs(H,{expanded:t==="panel"+a,onChange:d("panel"+a),sx:{display:"flex",flexDirection:"column",borderWidth:2,"&:hover":{backgroundColor:s.palette.mode==="dark"?"grey.800":"grey.200",boxShadow:"10"},px:{xs:0,sm:2}},variant:"outlined",component:"article",children:[e.jsx(V,{expandIcon:e.jsx(oe,{}),"aria-controls":"panel"+a+"content",id:"panel"+a+"header",children:e.jsxs(r,{sx:{my:1,flexGrow:1},component:"div",children:[e.jsx(o,{variant:"h6",component:"p",children:i.role}),e.jsx(o,{variant:"subtitle1",gutterBottom:!0,component:"p",children:i.company}),e.jsxs(r,{sx:{display:"flex",alignItems:"center"},component:"div",children:[e.jsx(B,{sx:{fontSize:20}})," ",e.jsx(o,{variant:"body1",component:"p",children:i.location})]}),e.jsxs(r,{sx:{display:"flex",alignItems:"center"},component:"div",children:[e.jsx(P,{sx:{fontSize:16,mx:.2}})," ",e.jsx(o,{variant:"body1",component:"p",children:i.duration})]})]})}),e.jsx(_,{children:e.jsxs(r,{component:"div",children:[e.jsx(o,{variant:"body1",component:"p",children:i.description}),e.jsx(F,{direction:"row",spacing:1,sx:{my:2,flexWrap:"wrap"},useFlexGap:!0,children:i.skills.map(x=>e.jsx(G,{label:x},x))})]})})]},a))})]})]})}function Ce(){const s=u();return e.jsxs(c.Fragment,{children:[e.jsx(h,{id:"work",disableGutters:!0,variant:"dense"}),e.jsxs(p,{disableGutters:!0,component:"section",sx:{display:"flex",px:{xs:6,sm:8},py:{xs:6,sm:8},flexDirection:"column",minWidth:"100%"},children:[e.jsx(o,{variant:"h6",component:"p",sx:{fontWeight:"normal",textAlign:"center",color:"text.secondary"},children:"Browse My Recent"}),e.jsx(o,{variant:"h4",component:"h2",gutterBottom:!0,sx:{fontWeight:"bold",textAlign:"center",justifyContent:"center",color:"text.primary",mb:{xs:2,sm:4}},children:"Projects"}),e.jsx(f,{container:!0,spacing:{xs:1,lg:2},columns:{xs:4,sm:8,md:12},sx:{justifyContent:"center",px:{md:0,lg:10}},children:je.map(t=>e.jsx(f,{size:{xs:4,sm:4},component:"article",children:e.jsx(E,{sx:{height:"100%","&:hover":{backgroundColor:s.palette.mode==="dark"?"grey.800":"grey.100",boxShadow:"10"}},variant:"outlined",children:e.jsxs(j,{href:t.link,target:"_blank",rel:"noopener noreferrer",underline:"none",color:"inherit",sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsx(U,{component:"img",alt:"Title image of Project",height:"140",image:t.image}),e.jsx(D,{}),e.jsxs(T,{sx:{justifyItems:"center",flexGrow:1,display:"flex",flexDirection:"column",px:3},children:[e.jsx(o,{gutterBottom:!0,variant:"h6",component:"p",textAlign:"center",children:t.title}),e.jsx(o,{variant:"body2",component:"p",sx:{color:"text.secondary",px:.5,height:"auto",overflow:"hidden",flexGrow:1},textAlign:"center",children:t.description}),e.jsx(F,{direction:"row",spacing:1,sx:{mt:2,flexWrap:"wrap",justifyContent:"center"},useFlexGap:!0,children:t.skills.map(l=>e.jsx(G,{label:l},l))})]})]})})},t.title))})]})]})}function Se(){const[s,t]=c.useState(""),[l,d]=c.useState(""),[i,a]=c.useState(""),[x,v]=c.useState("none"),g=n=>{document.getElementById("contact-name").readOnly=n,document.getElementById("contact-email").readOnly=n,document.getElementById("contact-message").readOnly=n,document.getElementById("submit").disabled=n,v(n?"block":"none")},k=async n=>{console.log("Sending Message"),g(!0);try{(await fetch("https://script.google.com/macros/s/AKfycbw1tEtE0wp-3oq-T-6K6zi6-na6Tzakf0HqGTNs2FONvlxGO491lZkuLXamGkZo8SY-/exec",{method:"POST",body:new FormData(n)})).ok?(alert("Message sent successfully"),console.log("Message sent successfully"),n.reset()):(console.error("Failed to send message"),alert("Failed to send message"))}catch(b){console.error("Error: ",b)}g(!1)},m=n=>{n.preventDefault();const b=document.forms["contact-form"],w=n.target.email.value;if(w!=="")if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(w))d("");else return d("Email is invalid"),n.target.email.focus(),!1;return n.target.checkValidity()===!1?(n.target.name.value===""?(t("Name is required"),n.target.name.focus()):n.target.email.value===""?(d("Email is required"),n.target.email.focus()):n.target.message.value===""&&(a("Message is required"),n.target.message.focus()),!1):(k(b),!0)};return e.jsxs(c.Fragment,{children:[e.jsx(h,{id:"contact",disableGutters:!0,variant:"dense"}),e.jsxs(p,{disableGutters:!0,component:"section",sx:{display:"flex",mb:8,px:{xs:6,sm:8},py:{xs:6,sm:8},flexDirection:"column",minWidth:"100%"},children:[e.jsx(o,{variant:"h6",component:"p",sx:{fontWeight:"normal",textAlign:"center",color:"text.secondary"},children:"Get in Touch"}),e.jsx(o,{variant:"h4",component:"h2",gutterBottom:!0,sx:{fontWeight:"bold",textAlign:"center",justifyContent:"center",color:"text.primary",mb:{xs:2,sm:4}},children:"Contact Me"}),e.jsx(r,{component:"form",noValidate:!0,onSubmit:m,id:"contact-form","aria-describedby":"Contact Form",children:e.jsxs(Z,{sx:{width:"100%",maxWidth:"500px",display:"flex",justifySelf:"center"},children:[e.jsx(I,{id:"contact-name",label:"Name",variant:"filled",title:"Name",name:"name",sx:{my:1},autoComplete:"off",required:!0,error:!!s,helperText:s,onChange:n=>{n.target.value===""?t("Name is required"):t("")}}),e.jsx(I,{id:"contact-email",variant:"filled",label:"Email",name:"email",title:"Email",sx:{my:1},autoComplete:"off",required:!0,error:!!l,helperText:l,onChange:n=>{n.target.value===""?d("Email is required"):d("")}}),e.jsx(I,{id:"contact-message",name:"message",title:"Message",label:"Message",multiline:!0,maxRows:4,variant:"filled",sx:{my:1},autoComplete:"off",required:!0,error:!!i,helperText:i,onChange:n=>{n.target.value===""?a("Message is required"):a("")}}),e.jsx(Q,{variant:"outlined",type:"submit",size:"large",sx:{mt:2,borderWidth:"2px",color:"text.primary",borderColor:"text.primary","&:hover":{borderColor:"text.primary",backgroundColor:"text.primary",color:"background.paper",transition:"background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease"}},id:"submit",children:e.jsx("span",{children:"Submit"})}),e.jsx(r,{sx:{height:4,width:"100%",py:2},children:e.jsx($,{id:"progress-loader",sx:{display:x},"aria-describedby":"Progress Loader","aria-hidden":x==="block"?"false":"true"})})]})}),e.jsxs(r,{sx:{justifyContent:"center",alignItems:"center",mt:4},component:"div",children:[e.jsx(o,{variant:"body1",component:"p",sx:{fontWeight:"normal",textAlign:"center",color:"text.secondary"},children:"Feel free to follow me on"}),e.jsxs(r,{sx:{display:"flex",justifyContent:"center",alignItems:"center",mt:1},component:"div",children:[e.jsx(o,{variant:"body1",component:"p",sx:{fontWeight:"bold",textAlign:"center",color:"text.primary",mx:1},children:e.jsxs(j,{href:S.linkedin,target:"_blank",rel:"noopener noreferrer",color:"inherit",underline:"hover",sx:{display:"flex",alignItems:"center","&:hover":{color:"text.secondary",transition:"color 0.3s ease",textDecorationThickness:2,textUnderlineOffset:4}},children:[e.jsx(se,{sx:{mr:.2}})," LinkedIn"]})}),e.jsx(o,{variant:"body1",component:"p",sx:{fontWeight:"bold",textAlign:"center",color:"text.primary",mx:1},children:e.jsxs(j,{href:S.github,target:"_blank",rel:"noopener noreferrer",color:"inherit",underline:"hover",sx:{display:"flex",alignItems:"center","&:hover":{color:"text.secondary",transition:"color 0.3s ease",textDecorationThickness:2,textUnderlineOffset:4}},children:[e.jsx(re,{sx:{mr:.4}})," Github"]})})]})]})]})]})}function Ae(){const s=new Date().getFullYear();return e.jsx(c.Fragment,{children:e.jsx(p,{disableGutters:!0,sx:{backgroundColor:"#333",color:"white",py:{xs:2,sm:5},px:{xs:2,sm:10,md:20,lg:30},minWidth:"100%",mx:0},component:"footer",children:e.jsx(r,{component:"div",sx:{textAlign:{xs:"center",sm:"left"},display:"flex",alignContent:"center",justifyContent:"center"},children:e.jsxs(o,{variant:"body1",component:"p",children:["© ",s," ","Christo Sojan",". All rights reserved."]})})})})}const Ge=function(){return e.jsxs(c.Fragment,{children:[e.jsx(de,{}),e.jsx(ve,{}),e.jsx(ke,{}),e.jsx(we,{}),e.jsx(Ie,{}),e.jsx(Ce,{}),e.jsx(Se,{}),e.jsx(Ae,{})]})};export{Ge as default};
