var canvas = document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
ctx.font="30px Comic Sans MS";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("Tulip Handtied/ Wrapping", canvas.width/2, canvas.height/2);

function detyraArgetuese(){
  let answer = document.forms["detyra"]["answer"].value;

  if(answer == ""){
    alert("Ploteso fushen!");
    return false;
  }else if(answer != 22){
    alert("Nuk eshte pergjigja e sakte. Provoni perseri!")
  }else{
    alert("E sakte!")
  }
}

var images = ['./images/flowershop.jpg','./images/shopi1.png', './images/shopi2.png'];
var imagesGreenhouse = ['./images/greenhouse.jpg','./images/sera1.png', './images/sera2.png'];
var imagesWrapp = ['./images/wrappings.jpg','./images/wrap1.png', './images/wrap2.png'];

function displayImage(x) {
    document.getElementById("flowersshop").src = images[x];
    document.getElementById("greenhouse").src = imagesGreenhouse[x];
    document.getElementById("wrapp").src = imagesWrapp[x];
}

function startTimer() {
    var x = 0;
    displayImage(x);
    setInterval(function() {
        x = x + 1 >= images.length ? 0 : x + 1;
        displayImage(x);
    }, 2000);
}