

const user = document.querySelector('.user');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
let score = document.querySelector('.score');
let result = document.querySelector('.result');

const CHOICE = ["ROCK", "PAPER","SCISSOR"];

let pCOUNT = 0;
let mCOUNT = 0;

function getComputerChoice(){
    return CHOICE[(Math.floor(Math.random() * 3))];
}

function playRound(playerSelection, computerSelection) {
    console.log('inside')
    let ps = playerSelection.toUpperCase();
    let cs = computerSelection.toUpperCase();
    if (ps === "ROCK" && cs === "SCISSOR") {
        pCOUNT++;
        result.textContent = `You Win! Rock beats Scissor`;

    } else if (ps === "PAPER" && cs === "ROCK"){
        pCOUNT++;
        result.textContent =` You Win! PAPER beats ROCK`;

    } else if(ps === "SCISSOR" && cs === "PAPER"){
        pCOUNT++;
        result.textContent =`You Win! SCISSOR beats PAPER`;

    }else if(ps === "ROCK" && cs === "SCISSOR"){
        pCOUNT++;
        result.textContent =`You Win! SCISSOR beats PAPER`;

    }
    else if(ps === cs) {
        result.textContent =`Draw`;

    } else {
        mCOUNT++;
        result.textContent =`You lose!, ${cs} beats ${ps}`;
    }
}


user.addEventListener('click',e => {
    let computer_choice = getComputerChoice();
    let player_choice = e.target.id;
    playRound(player_choice,computer_choice);
    if (mCOUNT === 5) {
        result.textContent = `You Lose! Better Luck next time`;
    } else if (pCOUNT === 5) {
        result.textContent = `You Win! :))`;
    }
});


