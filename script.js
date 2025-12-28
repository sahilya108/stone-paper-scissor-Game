let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const winMsg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice =() =>{
    const options=["stone","paper","scissor"];
    const randIdx =Math.floor(Math.random() *3);
    return options[randIdx];
};

const playGame=(userChoice) =>{
    let userWin=true;
    //getrate computer choice
    const compChoice=genCompChoice();
   
    if(userChoice===compChoice){
        //draw
        drawGame();
    }
    else{
        
        if(userChoice==="stone"){
            //paper , scissor
            userWin =compChoice==="paper"?false:true;
        }else if(userChoice=="paper"){
            //stone,scissor
            userWin=compChoice==="scissor"?false:true;
        }else{
            //stone,paper
            userWin=compChoice==="stone"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}

//draw game
let drawGame=(()=>{
    
    winMsg.innerText="Draw..! Same choice"
    console.log("Game is draw ");
    winMsg.style.backgroundColor="#081b31";
});

//display winner

let showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        winMsg.innerText=`You Won ! Your ${userChoice} beats ${compChoice}`;
       
        userScore++;
        userScorePara.innerText=userScore;
        winMsg.style.backgroundColor="green";
    }
    else{
        winMsg.innerText=`You Lost ! Your ${userChoice} beateen by ${compChoice}`;
       
        compScore++;
        compScorePara.innerHTML=compScore;
        winMsg.style.backgroundColor="red";
    }
}

