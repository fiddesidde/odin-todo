(()=>{"use strict";var t={d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{N:()=>o});const e=t=>{for(const e of t.getListItems()){const t=document.querySelector("#todos"),o=document.createElement("div");o.textContent=e.getTitle();const n=document.createElement("div");n.textContent=e.getDueDate();const d=document.createElement("div");switch(e.getPrio()){case 1:d.textContent="high";case 2:d.textContent="normal";case 3:d.textContent="low";default:d.textContent="normal"}const s=document.createElement("div");s.className="todo",s.appendChild(o),s.appendChild(n),s.appendChild(d),t.appendChild(s)}},o=[],n=(t,e,o=new Date,n=2)=>{let d=!1,s=n;const i=Math.round(1e4*Math.random()+1);return{getTitle:()=>t,getDescription:()=>e,getDueDate:()=>o,getPrio:()=>s,setPrio:t=>s=t,getId:()=>i,toggleComplete:()=>d=!d}},d=(t,e)=>{const n=((t,e)=>{const o=Math.round(1e4*Math.random()+1);let n=[];return{getName:()=>t,getDescription:()=>e,addTodoItem:t=>n.push(t),deleteTodoItem:t=>n=n.filter((e=>t!==e.getId())),getListItems:()=>n,getId:()=>o}})(t,e);return o.push(n),n},s=d("TestList","This is a list used to test stuff");for(let t=0;t<3;t++)s.addTodoItem(n(`Title${t}`,`description${t}`));d("New testList","This is a list used to test even more stuff with").addTodoItem(n("awsome thing","yes do this awsome thing","2023-01-25",1)),(()=>{for(const t of o){const n=document.querySelector("#lists"),d=document.createElement("h1");d.textContent=t.getName();const s=document.createElement("div");s.textContent=t.getDescription();const i=document.createElement("div");i.id=t.getId(),i.className="list",i.appendChild(d),i.appendChild(s),i.addEventListener("click",(t=>{document.querySelector("#todos").innerHTML="";const n=t.target.id,d=o.find((t=>t.getId()==n));e(d)})),n.appendChild(i)}})(),e(o[0])})();