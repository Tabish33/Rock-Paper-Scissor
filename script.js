let moves = ['Rock','Paper','Scissors'];

function getRandomInt(max){
  return Math.floor(Math.random() * max);
}

function computerPlay(){
  let n = getRandomInt(3);
  let choice = moves[n];
  return choice;
}

function round(player_selection, computer_selection){
  let p = player_selection.toUpperCase();
  let c = computer_selection.toUpperCase();

  if (p == c){
     alert ('Draw');
     return 'draw';
   }
  else if (p == 'ROCK' && c == 'SCISSORS'){
    alert( 'You Win this round! Rock beats Scissors!');
    return true;
  }
  else if (p == 'SCISSORS' && c == 'PAPER'){
    alert ('You Win this round! Scissors beats Paper!');
    return true;
  }
  else if (p == 'PAPER' && c == 'ROCK'){
    alert ('You Win this round! Paper beats Rock!');
    return true;
  }
  else{
    alert('You Loose this round! '+ computer_selection +' beats '+ player_selection);
    return false;
  }

}

function game(){
  let player_wins = 0;
  let computer_wins = 0;
  let turns =0 ;
  let user_choice;
  let result;

  while (turns!=5){

     computer_choice = computerPlay();

     result = round(user_choice,computer_choice);

     if (result == true) player_wins+=1;
     else{
       computer_wins+=1;
     }

  }

  if ( player_wins > computer_wins){
    alert('You Win!');
  }
  else if (player_wins < computer_wins){
    alert('You Loose!');
  }
  else{
    alert('It\'s a draw!');
  }
}

var choice = document.querySelectorAll(".option" );

choice.forEach(function(c){
  c.onclick = function(){
    
  };

});

var user_image = document.querySelector('.user');
var pic = 'boy'
user_image.onclick  = function(){
  if(pic == 'boy'){
    user_image.setAttribute('style','background-image:url("girl.jpg") ')
    pic = 'girl';
  }
  else{
    user_image.setAttribute('style','background-image:url("boy.jpg") ')
    pic = 'boy';
  }
}
