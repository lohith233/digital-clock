let Hrs=document.getElementById("Hrs");
let Sec=document.getElementById("Sec");
let Min=document.getElementById("Min"); 
setInterval(()=>{
    let currenttime=new Date();
Hrs.innerHTML=(currenttime.getHours()<10?"0":"")+currenttime.getHours();
Min.innerHTML=(currenttime.getMinutes()<10?"0":"")+currenttime.getMinutes();
Sec.innerHTML=(currenttime.getSeconds()<10?"0":"")+currenttime.getSeconds();

},1000)
