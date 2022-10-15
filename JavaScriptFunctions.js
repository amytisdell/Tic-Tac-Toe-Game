

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


//Player 1 Basic Turns: 

gameButton0.addEventListener('click', () =>  {
    gameButton0.innerText = ("X");
    document.getElementById("0").disabled = true;
    player1Array.push("0")
})

//Computer Basic Turns:

let ComputerTurn = Math.floor(Math.random()*gameSquares.length);
let computerSelection = gameSquares[ComputerTurn];
computerSelection.innerText = ("O");
computerSelection.disabled = true;
for (var i = 0; i < gameSquares.length; i++) { 
    if ( gameSquares[i] == gameSquares[ComputerTurn]) { 
        gameSquares.splice(i, 1); 
    }}
computerArray.push(gameSquares[ComputerTurn].value)
console.log(gameSquares)


// a full turn: 

gameButton0.addEventListener('click', () =>  {
    gameButton0.innerText = ("X");
    document.getElementById("0").disabled = true;
    player1Array.push("0")
    let ComputerTurn = Math.floor(Math.random()*gameSquares.length);
    let computerSelection = gameSquares[ComputerTurn];
    computerSelection.innerText = ("O");
    computerSelection.disabled = true;
    for (var i = 0; i < gameSquares.length; i++) { 
    if ( gameSquares[i] == gameSquares[ComputerTurn]) { 
        gameSquares.splice(i, 1); 
    }};
    computerArray.push(gameSquares[ComputerTurn]);
    console.log(gameSquares);
    console.log(player1Array);
    console.log(computerArray);
})


//extracting values (X or O):

// let zero = document.getElementById("0").value;
// let one = document.getElementById("1").value;
// let two = document.getElementById("2").value;
// let three = document.getElementById("3").value;
// let four = document.getElementById("4").value
// let five = document.getElementById("5").value;
// let six = document.getElementById("6").value;
// let seven = document.getElementById("7").value;
// let eight = document.getElementById("8").value;

gameButton0.addEventListener('click', () =>  {
    gameButton0.innerText = ("X");
    document.getElementById("0").disabled = true;
    player1Array.push("0")
    let ComputerTurn = Math.floor(Math.random()*gameSquares.length);
    let computerSelection = gameSquares[ComputerTurn];
    computerSelection.innerText = ("O");
    computerSelection.disabled = true;
    for (var i = 0; i < gameSquares.length; i++) { 
    if ( gameSquares[i] == gameSquares[ComputerTurn]) { 
        gameSquares.splice(i, 1); 
    }};
    computerArray.push(gameSquares[ComputerTurn]);
    console.log(gameSquares);
    console.log(player1Array);
    console.log(computerArray);
})




//Possible Player Clicks: 

// gameButton0.addEventListener('click', () => {
//     gameButton0.innerHTML = ("X");
//     gameSquares.splice(1,zero);
// }); 

// gameButton1.addEventListener('click', () => {
//     gameButton1.innerHTML = ("X")
//     gameSquares.splice();
// }); 

// gameButton2.addEventListener('click', () => {
//     gameButton2.innerHTML = ("X");
//     gameSquares.splice();
// }); 

// gameButton3.addEventListener('click', () => {
//     gameButton3.innerHTML = ("X");
//     gameSquares.splice();
// }); 

// gameButton4.addEventListener('click', () => {
//     gameButton4.innerHTML = ("X");
//     gameSquares.splice()
// }); 

// gameButton5.addEventListener('click', () => {
//     gameButton5.innerHTML = ("X");
//     gameSquares.splice();
// }); 

// gameButton6.addEventListener('click', () => {
//     gameButton6.innerHTML = ("X");
//     gameSquares.splice();
// }); 

// gameButton7.addEventListener('click', () => {
//     gameButton7.innerHTML = ("X");
//     gameSquares.splice();
// }); 

// gameButton8.addEventListener('click', () => {
//     gameButton8.innerHTML = ("8");
//     gameSquares.splice()
// }); 




//Winning Info: 

// // if ((zero == "X") && (one == "X") && (two == "X")) {
// //     console.log("Player 1 Wins!") }
// // } else if ((3 == "X") && (4 == "X") && (5 == "X")) {
// //     console.log("Player 1 Wins!")
// // } else if ((6 == "X") && (7 == "X") && (8 == "X")) {
// //     console.log("Player 1 Wins!")
// // } else if ((0 == "X") && (3 == "X") && (6 == "X")) {
// //     console.log("Player 1 Wins!")
// // } else if ((1 == "X") && (4 == "X") && (7 == "X")) {
// //     console.log("Player 1 Wins!")
// // } else if ((2 == "X") && (5 == "X") && (8 == "X")) {
// //     console.log("Player 1 Wins!")
// // } else if ((0 == "X") && (4 == "X") && (8 == "X")) {
// //     console.log("Player 1 Wins!")
// //} else if ((2 == "X") && (4 == "X") && (6 == "X")) {
// //     console.log("Player 1 Wins!")
// //} else if ((zero == "O") && (one == "O") && (two == "O")) {
// //     console.log("Computer Wins!") }
// // } else if ((3 == "O") && (4 == "O") && (5 == "O")) {
// //     console.log("Computer Wins!")
// // } else if ((6 == "O") && (7 == "O") && (8 == "O")) {
// //     console.log("Computer Wins!")
// // } else if ((0 == "") && (3 == "O") && (6 == "O")) {
// //     console.log("Computer Wins!")
// // } else if ((1 == "O") && (4 == "O") && (7 == "O")) {
// //     console.log("Computer Wins!")
// // } else if ((2 == "O") && (5 == "O") && (8 == "O")) {
// //     console.log("Computer Wins!")
// // } else if ((0 == "O") && (4 == "O") && (8 == "O")) {
// //     console.log("Computer Wins!")
// // } else if ((2 == "O") && (4 == "O") && (6 == "O")) {
// //     console.log("Computer Wins!")
// //} else {
// //     console.log("It's a tie!")
// //