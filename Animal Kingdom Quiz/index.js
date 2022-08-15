//Detecting Button Press
for (var i = 0; i<document.querySelectorAll(".animal").length; i++) {

document.querySelectorAll(".animal")[i].addEventListener("click", function () {

  var buttonInnerHTML = this.innerHTML

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);
});

}


document.addEventListener("keydown", function(event) {

  var buttonInnerHTML = this.innerHTML;

  makeSound(event.key);

  buttonAnimation(event.key);
});



function makeSound(key) {
  switch (key) {
    case "c":
    var cat = new Audio('sounds/cat-noise.mp3');
    cat.play();
      break;

      case "d":
      var dog = new Audio('sounds/dog-barking.mp3');
      dog.play();
        break;

      case "e":
          var elephant = new Audio('sounds/elephant-sound.mp3');
          elephant.play();
            break;

      case "h":
        var horse = new Audio('sounds/horse-sound.mp3');
        horse.play();
        break;

    case "o":
      var owl = new Audio('sounds/owl.mp3');
      owl.play();
      break;

      case "p":
        var pig = new Audio('sounds/pig-sound.mp3');
        pig.play();
        break;

        case "r":
          var rooster = new Audio('sounds/rooster-sound.mp3');
          rooster.play();
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
