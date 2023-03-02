const error = new Audio("error.mpeg");
const gameOver = new Audio("gameOver.mp3");
const success = new Audio("success.mpeg");

let secretNumber = Math.floor(Math.random()*20)+1;

let score = 5;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent = "No Number..lol!";

        error.play();

    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = "Correct Number!";
        
        document.querySelector('body').style.background = "green";
        document.querySelector('.number-box').style.width = "300px"
        document.querySelector('.number').textContent = secretNumber;

        success.play();
        success.loop = true;

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }else if(guess > secretNumber){

        if(score > 1){
        document.querySelector('.message').textContent = "Too High!";
        score--;
        document.querySelector('.score').textContent = score;

        error.play();

        }else{
            document.querySelector('.message').textContent = "You Lost the game!";
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.background = "red";
        document.querySelector('.number').textContent = secretNumber;

            gameOver.play();
        }
        
    }else if(guess < secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = "Too Low!";
        score--;
        document.querySelector('.score').textContent = score;

        error.play();

        }else{
            document.querySelector('.message').textContent = "You Lost the game!";
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.background = "red";
        document.querySelector('.number').textContent = secretNumber;

            gameOver.play();
            gameOver.loop = true;
        }
    }
})

const again = document.querySelector('#again').addEventListener('click', function(){
    score = 5;

    secretNumber = Math.floor(Math.random()*20)+1;

    document.querySelector('.number').textContent = "?";

    document.querySelector('body').style.background = "rgb(19, 7, 55)";

   document.querySelector('.guess').value = '';

   document.querySelector('.message').textContent = "Start Guessing...";

   document.querySelector('.score').textContent = 0;

   success.pause();

   gameOver.pause();

})