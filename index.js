//chek for key touch or clicked 
var n = document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() { 
        var button = this.innerHTML;
        makeSound(button);
        buttonAnimation(button);
        changeBgPhoto();
    });
}

 
// for keyboar eventlistener
document.addEventListener("keydown",function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
 changeBgPhoto();
}
)


function makeSound(key1) {
    switch (key1) {
        case "w":
             var tom1 = new Audio("yamate-kudesai.mp3");
             tom1.play();
            break;

        case "a":
             var tom2 = new Audio("kill4.mp3");
             tom2.play();
            break;

        case "s":
             var tom3 = new Audio("hentai-orgasm1.mp3");
             tom3.play();
            break;

        case "d":
             var tom4 = new Audio("how-noughty.mp3");
             tom4.play();
            break;

        case "j":
             var snare = new Audio("yes-daddy.mp3");
             snare.play();
            break;

        case "k":
             var crash = new Audio("anime-ahh.mp3");
             crash.play();
            break;

        case "l":
             var kickBass = new Audio("Munna.mp3");
             kickBass.play();
            break;
    
        default:
            break;
    }
}

//Animation
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}

function changeBgPhoto(){
 
    document.getElementById("t1").style.backgroundImage = "url(t_1.jpg)";
    document.getElementById("t2").style.backgroundImage = "url(kill.jpg)";
    document.getElementById("t3").style.backgroundImage = "url(t3.jpg)";
    document.getElementById("t4").style.backgroundImage = "url(t4.jpg)";

    document.getElementById("yd").style.backgroundImage = "url(yd.jpg)";
    document.getElementById("ah").style.backgroundImage = "url(aahh.jpg)";

    document.getElementById("m").style.backgroundImage = "url(munna1.jpg)";
    document.getElementById("title").textContent = "Drum kit for hentai lovers like you 😉";
    
}