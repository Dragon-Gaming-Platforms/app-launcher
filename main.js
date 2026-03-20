let installedApps=[];let openApps=[];let z=1;
fetch('apps.json').then(r=>r.json()).then(d=>{
 d.sections.forEach(s=>s.apps.forEach(a=>{if(a.preinstalled)installedApps.push(a);}));
 renderDesktop();
});

function renderDesktop(){
 const d=document.getElementById('desktop');d.innerHTML='';
 installedApps.forEach((app,i)=>{
  const div=document.createElement('div');
  div.className='icon';
  div.style.left=(20+i*90)+'px';
  div.style.top='20px';
  div.innerHTML=`<img src="${app.icon}"><br>${app.title}`;
  div.onclick=()=>openWindow(app);
  d.appendChild(div);
 });
}

function openWindow(app){
 const w=document.createElement('div');
 w.className='window';
 w.style.left='100px';w.style.top='100px';
 w.style.zIndex=++z;
 w.innerHTML=`<div class="titlebar">
 <span>${app.title}</span>
 <button onclick="this.closest('.window').remove()">X</button>
 </div>
 <iframe src="${app.src}"></iframe>`;
 document.body.appendChild(w);
}
