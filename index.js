function makeSound(key){
  switch (key) {
    case "w":
      var b_audio = new Audio("./sounds/tom-1.mp3")
      break;

    case "a":
      var b_audio = new Audio("./sounds/tom-2.mp3")
      break;

    case "s":
      var b_audio = new Audio("./sounds/tom-3.mp3")
      break;

    case "d":
      var b_audio = new Audio("./sounds/tom-4.mp3")
      break;

    case "j":
      var b_audio = new Audio("./sounds/crash.mp3")
      break;

    case "k":
      var b_audio = new Audio("./sounds/kick-bass.mp3")
      break;

    case "l":
      var b_audio = new Audio("./sounds/snare.mp3")
      break;

    default:
      alert(buttonInnerHTML)
      break;
  }
  b_audio.play()
}
function whenPressed(event){
  makeSound(event.key)
  buttonAnimation(event.key)
}

function whenClicked(){
  makeSound(this.innerHTML)
  buttonAnimation(this.innerHTML)
}

function buttonAnimation(key){
  var button = document.querySelector("."+key)
  button.classList.add("pressed")
  setTimeout(function(){button.classList.remove("pressed")},80)
  
}

var drumButtons = document.querySelectorAll(".drum").length

for (var i = 0; i<drumButtons;i++)
  {
    document.querySelectorAll(".drum")[i].addEventListener("click",whenClicked)
    document.addEventListener("keydown",whenPressed)
  }

