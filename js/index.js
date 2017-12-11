setInterval(()=> {
    target.innerHTML=(new Date()).toDateString()+' : '+(new Date()).toLocaleTimeString();
},10)
setInterval(()=>{
    if(target.hidden){
        target.hidden=false;
    }else{
        target.hidden=true;
    }
},1)
document.querySelectorAll(".buttons button").forEach(el => {
  el.addEventListener("click", ev => {
    document.querySelectorAll(".buttons button, .tabs div").forEach(el => {
      el.classList.remove("active");
    });
    ev.target.classList.add("active");
    const tab = ev.target.dataset.tab;
    document.querySelectorAll(".tabs div").forEach(el => {
      if (el.dataset.tab === tab) {
        el.classList.add("active");
      }
    });
  });
});
