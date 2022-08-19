var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var wins = 0;
var losses = 0;

function setLossesText(){
    lose.textContent = losses
    localStorage.getItem
}

startButton.addEventListener("click", function(){
    var timeLeft = 10;
    
    
    var timeInterval = setInterval(function (){
        timerElement.innerHTML = timeLeft;

        timeLeft -= 1;
        if (timeLeft <= -1){
            clearInterval(timeInterval);
            timerElement.innerHTML = "time is up!"
            losses++
            localStorage.setItem("lose", losses)
            setLossesText();
            
        } 

    
    }, 1);
})


