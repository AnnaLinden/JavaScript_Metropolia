'use strict';
//get DOM elem from HTML
let image = document.getElementById("target");
let triggerel = document.getElementById("trigger");

//Listen mouse events
triggerel.addEventListener("mouseover", ()=>{
  newImage();
});
triggerel.addEventListener("mouseout",()=>{
  oldImage();
});

//change image
function newImage(){
  image.src = "img/picB.jpg";
}
function oldImage(){
  image.src = "img/picA.jpg";
}
















//$('trigger').on({mouseenter: function(){
//  $('target').attr('src','img/picB.jpg');
//  }})


//$(selector).hover(inFunction,outFunction)
//,function(){}
//$('trigger').hover(function(){$('target').attr('src','img/picB.jpg');})