let moves = ['rock','paper','scissor'];

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
     return 'draw';
   }
  else if (p == 'ROCK' && c == 'SCISSOR'){
    return true;
  }
  else if (p == 'SCISSOR' && c == 'PAPER'){
    return true;
  }
  else if (p == 'PAPER' && c == 'ROCK'){
    return true;
  }
  else{
    return false;
  }

}

function game(user_choice){

  let result;
  computer_choice = computerPlay();

  result = round(user_choice,computer_choice);

  if (result == true) player_wins+=1;
  else{
       computer_wins+=1;
  }
}

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

var choice = document.querySelectorAll(".option" );
var score = document.querySelector(".score" );
let player_wins = 0;
let computer_wins =0 ;
var no_of_games= 0;
var html_color = document.querySelector('html');

choice.forEach(function(c){

  c.onclick = function(e){
    html_color.setAttribute('style','background: linear-gradient(#001f4d,#4d94ff);')
    var audio = document.querySelector('.pop');
    audio.play();
    var user_choice=  e.target.firstChild.innerHTML;
    game(user_choice);
    score.innerHTML = player_wins + " : " + computer_wins;
    no_of_games +=1;
    end_game();
  }});


function end_game(){
  if(no_of_games == 5){

    if( player_wins > computer_wins){
      score.innerHTML = 'You Win!';
      var win_audio =  document.querySelector('.win');
      win_audio.play();
      html_color.setAttribute('style','background: linear-gradient(#004d1a,#33ff77);');
    }
    else if( player_wins < computer_wins){
      score.innerHTML= 'You Loose!';
      var win_audio =  document.querySelector('.loose');
      win_audio.play();
      html_color.setAttribute('style','background: linear-gradient(#661400,#ff704d);');
    }
    else{
      score.innerHTML = 'It\'s a Draw!';
    }
    player_wins = 0;
    computer_wins =0 ;
    no_of_games= 0;
  }
}

var reset = document.querySelector('.reset');
reset.onclick = function(){
  var audio = document.querySelector('.pop');
  audio.play();
  player_wins = 0;
  computer_wins =0 ;
  no_of_games= 0;
  score.innerHTML = '0 : 0';
  html_color.setAttribute('style','background: linear-gradient(#001f4d,#4d94ff);')

}
