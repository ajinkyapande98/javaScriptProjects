const show  = document.getElementById('clock');


function updateTime (){
 var date  = new Date();

 const hours = date.getHours();
 const minute = date.getMinutes();
 const second = date.getSeconds();
  
 show.innerText = `${hours} : ${minute} : ${second}`
}


setInterval(updateTime,1000);
