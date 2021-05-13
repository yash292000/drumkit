var numberOfButtons = document.querySelectorAll('.button');

// Adding event listener to all the buttons
for (var i=0; i<numberOfButtons.length; i++) {
  document.querySelectorAll('.button')[i].addEventListener('click', function() {
    var currentButton = this.innerHTML;
    sound(currentButton);
  })
}

// Adding sound
function sound(key) {
  switch(key) {
    case 'W':
      var audio = new Audio('sounds/w.mp3');
      audio.play();
      break;
    case 'A':
      var audio = new Audio('sounds/a.mp3');
      audio.play();
      break;
    case 'S':
      var audio = new Audio('sounds/s.mp3');
      audio.play();
      break;    
    case 'D':
      var audio = new Audio('sounds/d.mp3');
      audio.play();
      break;
    case 'J':
      var audio = new Audio('sounds/j.mp3');
      audio.play();
      break;
    case 'K':
      var audio = new Audio('sounds/k.mp3');
      audio.play();
      break;
    case 'L':
      var audio = new Audio('sounds/l.mp3');
      audio.play();
      break;
    default: 
      console.log(key);
  }
}