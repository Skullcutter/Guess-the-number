"use strict";
let score=20;
let secretNumber=Math.trunc(Math.random()*20+1);
// console.log(secretNumber);
document.querySelector(".check").addEventListener("click",function(){
    const Guess=Number(document.querySelector('.guess').value);
    // console.log(Guess);
    if(!Guess){
        document.querySelector('.message').textContent="⛔ No Number!";

        // When Number Is Correct
    }else if(Guess==secretNumber){
        document.querySelector(".message").textContent=`🎉Correct Number`;
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector("body").style.background="#60b347";
        document.querySelector(".number").style.width="30rem";

        // When Number is to high
    }else if(Guess>secretNumber){
        if(score>1){
            document.querySelector(".message").textContent=`📈 Too High!`;
            score--;
            document.querySelector(".score").textContent=score;
        }else{
            document.querySelector(".message").textContent="😭 You lost the game!";
            document.querySelector(".score").textContent="0";
        }
        // When Number is to low
    }else if(Guess<secretNumber){
        if(score>1){
            document.querySelector(".message").textContent=`📉 Too Low!`;
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector(".message").textContent="😭 You lost the game!";
            document.querySelector(".score").textContent="0";
        }
    }
})
document.querySelector('.again').addEventListener("click",function(){
    score=20;
    document.querySelector(".message").textContent=`Start guessing...`;
    document.querySelector(".number").textContent=`?`;
    document.querySelector(".score").textContent=score;
    document.querySelector("body").style.background=`#222`;
    document.querySelector(".guess").value="";
})
