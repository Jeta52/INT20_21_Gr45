for (var i=0; i<=300000000; i+=1){
  var j=i;
 }
 postMessage(j);




var currentdate = new Date(); 


var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + "  "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

document.getElementById("koha").innerHTML = datetime;