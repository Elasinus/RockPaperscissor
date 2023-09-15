const CHOICE = ["ROCK", "PAPER","SCISSOR"];
let pCOUNT = 0;
let mCOUNT = 0;
function getComputerChoice(){
    return CHOICE[(Math.floor(Math.random() * 3))];
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toUpperCase();
    let cs = computerSelection.toUpperCase();
    if (ps === "ROCK" && cs === "SCISSOR") {
        pCOUNT++;
        return "You Win! Rock beats Scissor";

    } else if (ps === "PAPER" && cs === "ROCK"){
        pCOUNT++;
        return "You Win! PAPER beats ROCK";
    } else if(ps === "SCISSOR" && cs === "PAPER"){
        pCOUNT++;
        return "You Win! SCISSOR beats PAPER";
    } else if( ps === cs){
        return "Draw";
    } else {
        mCOUNT++;
        return "You Lose!";
        
    }
}

function main(){
    for(i=0;i<5;i++){
        let machine = getComputerChoice();
        let user = prompt("Enter the option: ");
        playRound(user,machine);
    }
    if (pCOUNT > mCOUNT) {
        alert("You win!")
    }else{
        alert("You Lose!");
    }
}
main();