var numberOfinstrumentButtons = document.querySelectorAll(".instrument").length;

for (var i = 0; i < numberOfinstrumentButtons; i++) {

  document.querySelectorAll(".instrument")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

      case "z":
        var a2 = new Audio("sounds/a-2.wav");
        a2.play();
        break;

        case "x":
          var a2mute = new Audio("sounds/a-2-pmute.wav");
          a2mute.play();
          break;

        case "c":
          var d3 = new Audio("sounds/d3.wav");
          d3.play();
          break;

          case "v":
            var d3mute = new Audio("sounds/d3-pmute.wav");
            d3mute.play();
            break;

            case "b":
              var e3 = new Audio("sounds/e3.wav");
              e3.play();
              break;

              case "n":
                var e3mute = new Audio("sounds/e3-pmute.wav");
                e3mute.play();
                break;

                case "m":
                  var e2 = new Audio("sounds/e2.wav");
                  e2.play();
                  break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
