(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{N:()=>o});const t=e=>{for(const t of e.getListItems()){const e=document.querySelector("#todos"),o=document.createElement("div");o.className="checkbox-div";const n=document.createElement("input");t.isComplete()&&(n.checked=!0),n.type="checkbox",n.addEventListener("click",(()=>{t.toggleComplete(),console.log(t.isComplete())}));const d=document.createElement("div");d.textContent=t.getTitle();const s=document.createElement("div");s.textContent=t.getDueDate();const c=document.createElement("div");switch(t.getPrio()){case 1:c.textContent="high";case 2:c.textContent="normal";case 3:c.textContent="low";default:c.textContent="normal"}const i=document.createElement("div");i.className="todo",o.appendChild(n),i.appendChild(o),i.appendChild(d),i.appendChild(s),i.appendChild(c),e.appendChild(i)}},o=[],n=(e,t,o=new Date,n=2)=>{let d=!1,s=n;const c=Math.round(1e4*Math.random()+1);return{getTitle:()=>e,getDescription:()=>t,getDueDate:()=>o,getPrio:()=>s,setPrio:e=>s=e,getId:()=>c,toggleComplete:()=>d=!d,isComplete:()=>d}},d=(e,t)=>{const n=((e,t)=>{const o=Math.round(1e4*Math.random()+1);let n=[];return{getName:()=>e,getDescription:()=>t,addTodoItem:e=>n.push(e),deleteTodoItem:e=>n=n.filter((t=>e!==t.getId())),getListItems:()=>n,getId:()=>o}})(e,t);return o.push(n),n},s=d("TestList","This is a list used to test stuff");for(let e=0;e<3;e++)s.addTodoItem(n(`Title${e}`,`description${e}`));d("New testList","This is a list used to test even more stuff with").addTodoItem(n("awsome thing","yes do this awsome thing","2023-01-25",1)),(()=>{for(const e of o){const n=document.querySelector("#lists"),d=document.createElement("h1");d.textContent=e.getName();const s=document.createElement("div");s.textContent=e.getDescription();const c=document.createElement("div");c.id=e.getId(),c.className="list",c.appendChild(d),c.appendChild(s),c.addEventListener("click",(e=>{document.querySelector("#todos").innerHTML="";const n=e.target.id,d=o.find((e=>e.getId()==n));t(d)})),n.appendChild(c)}})(),t(o[0])})();