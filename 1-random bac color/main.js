let $ = document;

// let colorArray = ['red', 'green', 'blue', 'yellow','gold','orange'];
// let randomColorindex ;

// setInterval(function(){
//     randomColorindex = Math.floor(Math.random() * colorArray.length);

//     $.body.style.backgroundColor =colorArray[randomColorindex];
// },5000)

//////////////////////////////////////////////////////////////////
//روش دوم

let redV, greenV, blueV;

setInterval(function () {
  redV = Math.floor(Math.random() * 255);
  greenV = Math.floor(Math.random() * 255);
  blueV = Math.floor(Math.random() * 255);

  $.body.style.backgroundColor =
    "rgb(" + redV + "," + greenV + "," + blueV + ")";
}, 100);
