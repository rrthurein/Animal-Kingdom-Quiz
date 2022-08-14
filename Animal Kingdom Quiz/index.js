var numberOfAnimalButtons = document.querySelectorAll(".animal").length

for (var i = 0; i<numberOfAnimalButtons; i++){

document.querySelectorAll(".animal")[i].addEventListener("click", function (){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

});

}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);
});



function makeSound(key) {
  switch (key) {
    case "w":
    var crash = new Audio('sounds/cat-noise.mp3');
    crash.play();
      break;

    case "a":
      var kickBass = new Audio('sounds/dog-barking.mp3');
      kickBass.play();
        break;

      case "s":
          var snare = new Audio('sounds/Duck-quack.mp3');
          snare.play();
            break;

      case "d":
        var tom1 = new Audio('sounds/horse-sound.mp3');
        tom1.play();
        break;

    case "j":
      var tom2 = new Audio('sounds/owl.mp3');
      tom2.play();
      break;

      case "k":
        var tom3 = new Audio('sounds/pig-sound.mp3');
        tom3.play();
        break;

        case "l":
          var tom4 = new Audio('sounds/rooster-sound.mp3');
          tom4.play();
          break;
    default: console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");}, 100
  )

}
