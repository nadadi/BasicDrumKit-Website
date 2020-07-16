var buttons = document.querySelectorAll(".drum");
document.addEventListener("keydown", function(event){
  playAudio(event.key);
  buttonAnimation(event.key);
});
/*document.addEventListener("keyup", function(event){
  buttonAnimation(event.key);
})*/

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

function handleClick() {
  var innerHTML = this.innerHTML;
  playAudio(innerHTML);
  buttonAnimation(innerHTML);
}

function playAudio(character)
{
  var sound;
  switch (character) {
    case "w":
      sound = new Audio('sounds/crash.mp3');
      break;
    case "a":
      sound = new Audio('sounds/snare.mp3');
      break;
    case "s":
      sound = new Audio('sounds/kick-bass.mp3');
      break;
    case "d":
      sound = new Audio('sounds/tom-1.mp3');
      break;
    case "j":
      sound = new Audio('sounds/tom-2.mp3');
      break;
    case "k":
      sound = new Audio('sounds/tom-3.mp3');
      break;
    case "l":
      sound = new Audio('sounds/tom-4.mp3');
      break;
    default:
      console.log(character);
    }
    if(sound)
      sound.play();
}

function buttonAnimation(character)
{
  var activeButton = document.querySelector("."+character);
  if(activeButton)
  {
    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
