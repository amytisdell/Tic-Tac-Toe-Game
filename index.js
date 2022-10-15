
//GameButtons
const gameButton0 = document.getElementById("0");
const gameButton1 = document.getElementById("1");
const gameButton2 = document.getElementById("2");
const gameButton3 = document.getElementById("3");
const gameButton4 = document.getElementById("4");
const gameButton5 = document.getElementById("5");
const gameButton6 = document.getElementById("6");
const gameButton7 = document.getElementById("7");
const gameButton8 = document.getElementById("8");

//array of game squares open
const gameSquares = [gameButton0, gameButton1, gameButton2, gameButton3, gameButton4, 
    gameButton5, gameButton6, gameButton7, gameButton8]; 

// Reset Button 
function clearBoard () {
    document.getElementsByClassName("container").innerHTML=""; 
    const gameSquares = [gameButton0, gameButton1, gameButton2, gameButton3, gameButton4, 
        gameButton5, gameButton6, gameButton7, gameButton8]
}

document.getElementById("clearBoard").addEventListener("click", () => {
    clearBoard(); 
    console.log(gameSquares);
});

//Checking each player's scores 
function checkPlayer1Scores() {
    if ((gameButton0.innerText == ("X")) && (gameButton1.innerText == ("X")) && (gameButton2.innerText == ("X"))) {
        document.getElementById("winner").innerText="Player 1 Wins!";
        document.getElementById("currentPlayer").innerText="";
        player1Wins = true; 
        throw new Error
    } else if ((gameButton3.innerText == ("X")) && (gameButton4.innerText == ("X")) && (gameButton5.innerText == ("X"))) {
        document.getElementById("winner").innerText="Player 1 Wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        player1Wins = true; 
        throw new Error
    } else if ((gameButton6.innerText == ("X")) && (gameButton7.innerText == ("X")) && (gameButton8.innerText == ("X"))) {
        document.getElementById("winner").innerText="Player 1 Wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        player1Wins = true; 
        throw new Error
    } else if ((gameButton0.innerText == ("X")) && (gameButton3.innerText == ("X")) && (gameButton6.innerText == ("X"))) {
        document.getElementById("winner").innerText="Player 1 Wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        player1Wins = true; 
        throw new Error
    } else if ((gameButton1.innerText == ("X")) && (gameButton4.innerText == ("X")) && (gameButton7.innerText == ("X"))) {
        document.getElementById("winner").innerText="Player 1 Wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        player1Wins = true; 
        throw new Error
    } else if ((gameButton2.innerText == ("X")) && (gameButton5.innerText == ("X")) && (gameButton8.innerText == ("X"))) {
        document.getElementById("winner").innerText="Player 1 Wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        player1Wins = true; 
        throw new Error
    } else if ((gameButton0.innerText == ("X")) && (gameButton4.innerText == ("X")) && (gameButton8.innerText == ("X"))) {
        document.getElementById("winner").innerText="Player 1 Wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        player1Wins = true; 
        throw new Error
    } else if ((gameButton2.innerText == ("X")) && (gameButton4.innerText == ("X")) && (gameButton6.innerText == ("X"))) {
        document.getElementById("winner").innerText="Player 1 Wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        player1Wins = true; 
        throw new Error
    }
}


function checkComputerScores() {
    if ((gameButton0.innerText == ("O")) && (gameButton1.innerText == ("O")) && (gameButton2.innerText == ("O"))) {
        document.getElementById("winner").innerText="Computer wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        let computerWins = true; 
        throw new Error;
    } else if ((gameButton3.innerText == ("O")) && (gameButton4.innerText == ("O")) && (gameButton5.innerText == ("O"))) {
        document.getElementById("winner").innerText="Computer wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        let computerWins = true; 
        throw new Error;
    } else if ((gameButton6.innerText == ("O")) && (gameButton7.innerText == ("O")) && (gameButton8.innerText == ("O"))) {
        document.getElementById("winner").innerText="Computer wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        let computerWins = true; 
        throw new Error;
    } else if ((gameButton0.innerText == ("O")) && (gameButton3.innerText == ("O")) && (gameButton6.innerText == ("O"))) {
        document.getElementById("winner").innerText="Computer wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        let computerWins = true; 
        throw new Error;
    } else if ((gameButton1.innerText == ("O")) && (gameButton4.innerText == ("O")) && (gameButton7.innerText == ("O"))) {
        document.getElementById("winner").innerText="Computer wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        let computerWins = true; 
        throw new Error;
    } else if ((gameButton2.innerText == ("O")) && (gameButton5.innerText == ("O")) && (gameButton8.innerText == ("O"))) {
        document.getElementById("winner").innerText="Computer wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        let computerWins = true; 
        throw new Error;
    } else if ((gameButton0.innerText == ("O")) && (gameButton4.innerText == ("O")) && (gameButton8.innerText == ("O"))) {
        document.getElementById("winner").innerText="Computer wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        let computerWins = true; 
        throw new Error;
    } else if ((gameButton2.innerText == ("O")) && (gameButton4.innerText == ("O")) && (gameButton6.innerText == ("O"))) {
        document.getElementById("winner").innerText="Computer wins!";
        document.getElementById("currentPlayer").innerText=""
        document.getElementsByClassName("gameButton card btn").disabled=true;
        let computerWins = true; 
        throw new Error;
    }
}

//game buttons 
gameButton0.addEventListener('click', () =>  {
    gameButton0.innerText = ("X");
    document.getElementById("0").disabled = true;
    let index0 = gameSquares.indexOf(gameButton0);
    if (index0 > -1) { 
    gameSquares.splice(index0, 1)};
    checkPlayer1Scores();
    computerMove();
});

gameButton1.addEventListener('click', () =>  {
    gameButton1.innerText = ("X");
    document.getElementById("1").disabled = true;
    let index1 = gameSquares.indexOf(gameButton1);
    if (index1 > -1) { 
    gameSquares.splice(index1, 1)};
    checkPlayer1Scores();
    computerMove();
})

gameButton2.addEventListener('click', () =>  {
    gameButton2.innerText = ("X");
    document.getElementById("2").disabled = true;
    let index2 = gameSquares.indexOf(gameButton2);
    if (index2 > -1) { 
    gameSquares.splice(index2, 1)};
    checkPlayer1Scores();
    computerMove();
})

gameButton3.addEventListener('click', () =>  {
    gameButton3.innerText = ("X");
    document.getElementById("3").disabled = true;
    let index3 = gameSquares.indexOf(gameButton3);
    if (index3 > -1) { 
    gameSquares.splice(index3, 1)};
    checkPlayer1Scores();
    computerMove();
})

gameButton4.addEventListener('click', () =>  {
    gameButton4.innerText = ("X");
    document.getElementById("4").disabled = true;
    let index4 = gameSquares.indexOf(gameButton4);
    if (index4 > -1) { 
    gameSquares.splice(index4, 1)};
    checkPlayer1Scores();
    computerMove();
})

gameButton5.addEventListener('click', () =>  {
    gameButton5.innerText = ("X");
    document.getElementById("5").disabled = true;
    let index5 = gameSquares.indexOf(gameButton5);
    if (index5 > -1) { 
    gameSquares.splice(index5, 1)};
    checkPlayer1Scores();
    computerMove();
})

gameButton6.addEventListener('click', () =>  {
    gameButton6.innerText = ("X");
    document.getElementById("6").disabled = true;
    let index6 = gameSquares.indexOf(gameButton6);
    if (index6 > -1) { 
    gameSquares.splice(index6, 1)};    
    checkPlayer1Scores();
    computerMove();
})

gameButton7.addEventListener('click', () =>  {
    gameButton7.innerText = ("X");
    document.getElementById("7").disabled = true;
    let index7 = gameSquares.indexOf(gameButton7);
    if (index7 > -1) { 
    gameSquares.splice(index7, 1)};  
    checkPlayer1Scores(); 
    computerMove();
})

gameButton8.addEventListener('click', () =>  {
    gameButton8.innerText = ("X");
    document.getElementById("8").disabled = true;
    let index8 = gameSquares.indexOf(gameButton8);
    if (index8 > -1) { 
    gameSquares.splice(index8, 1)}; 
    checkPlayer1Scores();
    computerMove();
})

function computerMove() {
    if (gameSquares.length > 0) {
        document.getElementById("currentPlayer").innerText="Computer's Turn!";
    } else {
        document.getElementById("currentPlayer").innerText="It's a tie!";
        throw new Error;
    }; 
    setTimeout(turn, 1000)
    function turn() {
    if (gameSquares.length > 0) {
    let computerTurn = Math.floor(Math.random()*gameSquares.length);
    let computerSelection = gameSquares[computerTurn];
    computerSelection.innerText = ("O");
    computerSelection.disabled = true;
    for (var i = 0; i < gameSquares.length; i++) { 
    if (gameSquares[i] == gameSquares[computerTurn]) { 
        let indexC = gameSquares.indexOf(gameSquares[i]);
        if (indexC > -1) { 
        gameSquares.splice(indexC, 1)};    
    }};
    checkComputerScores(); 
    setTimeout(playerBanner, 150);
    function playerBanner () {
    document.getElementById("currentPlayer").innerText="Player 1's Turn!"
    }
}
}}
