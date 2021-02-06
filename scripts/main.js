// main.js


function adjustVolumnIcon(value){
    x=value;
if( x<=100 && x>=67){
    document.getElementById("volume-image").src="./assets/media/icons/volume-level-3.svg";
}else if (x>=34 && x<=66){
    document.getElementById("volume-image").src="./assets/media/icons/volume-level-2.svg";
}else if(x>=1 && x<=33){
    document.getElementById("volume-image").src="./assets/media/icons/volume-level-1.svg";
}else{
    document.getElementById("volume-image").src="./assets/media/icons/volume-level-0.svg";
}
};


function hornSound(e){

    var vol = document.getElementById("horn-sound");
    if(vol.volume == 0){
        e.preventDefault();
        var x= document.getElementById("horn-sound");
        x.disabled = true;
    }else{
        e.preventDefault();
        var x= document.getElementById("horn-sound");
        x.play();   
    }
     
}

document.getElementById("honk-btn").addEventListener("click",hornSound);




document.getElementById("volume-number").addEventListener("change",function(event){
  
    value = event.target.value;
   document.getElementById("volume-slider").value = value;

  var vol = document.getElementById("horn-sound");
  vol.volume = value*0.01;
   
    adjustVolumnIcon(value);

   

});



document.getElementById("volume-slider").addEventListener("input",function (event){
  
    //alert("hello");

   value = event.target.value;

   document.getElementById("volume-number").value = value;
 
   var vol = document.getElementById("horn-sound");
   vol.volume = value*0.01;

    adjustVolumnIcon(value);

  
 });



 document.getElementById("radio-air-horn").addEventListener("click",function (){

    document.getElementById("sound-image").src="./assets/media/images/air-horn.svg";

    document.getElementById("horn-sound").src="./assets/media/audio/air-horn.mp3";
    

    
});

document.getElementById("radio-car-horn").addEventListener("click",function (){

    document.getElementById("sound-image").src="./assets/media/images/car.svg";

    document.getElementById("horn-sound").src="./assets/media/audio/car-horn.mp3";

   
});
    

document.getElementById("radio-party-horn").addEventListener("click",function (){

    document.getElementById("sound-image").src="./assets/media/images/party-horn.svg";

    document.getElementById("horn-sound").src="./assets/media/audio/party-horn.mp3";

  

});





