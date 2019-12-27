/* 
Pseudocode
Start by adding an event listener to each square. DONE
With each click on a square, we will add a class and change the innerHTML to either X or O depending on the turn. DONE
With each click on a square, the player changes. DONE
Keep track of # moves. DONE

Once a square has been clicked and changed, it cannot be clicked and changed again. DONE

A player wins if/when:
- all squares in a row are the same
- all squares in a column are the same
- box 1, box 5, box 9 are the same
- box 3, box 5, box 7 are the same

If all boxes are clicked and none of the above apply, then there is no winner.

*/

//define all variables - track players, number of moves, access DOM elements
let player1 = true;
let player2 = false;
let moves = 9;

let squares = document.querySelectorAll('.square')
console.log(squares)

let reset = document.querySelector('#reset')
console.log(reset)

let message = document.querySelector('.message')
console.log(message)

let body = document.querySelector('body')

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let box3 = document.querySelector('#box3')
let box4 = document.querySelector('#box4')
let box5 = document.querySelector('#box5')
let box6 = document.querySelector('#box6')
let box7 = document.querySelector('#box7')
let box8 = document.querySelector('#box8')

let scoreBoard = document.createElement('div')
scoreBoard.innerHTML = ''
body.append(scoreBoard);

let totalWinsX = 0;
let totalWinsO = 0;

function markSquare() {
    if (player1 === true && player2 === false) {
        this.classList.add('playerX')
        this.innerHTML = 'X'
        player1 = false
        player2 = true
        moves -= 1
        message.innerHTML = 'Player 2: Your turn! Choose a square for O.'
        this.removeEventListener('click', markSquare)
        checkWinner();
        console.log(`${moves} and player1: ${player1} and player2: ${player2}`)
    } else {
        this.classList.add('playerY')
        this.innerHTML = 'O'
        player2 = false
        player1 = true
        moves -= 1
        message.innerHTML = 'Player 1: Now you go. Choose a square to mark X.'
        this.removeEventListener('click', markSquare)
        checkWinner();
        console.log(`${moves} and player1: ${player1} and player2: ${player2}`)
    } 
}

function checkWinner() {
    switch(true) {
        case box1.classList.contains('playerX') && box2.classList.contains('playerX') && box3.classList.contains('playerX'): 
        xWins();
        break; 
        case box1.classList.contains('playerY') && box2.classList.contains('playerY') && box3.classList.contains('playerY'): 
        oWins();
        break;
        case box4.classList.contains('playerX') && box5.classList.contains('playerX') && box6.classList.contains('playerX'): 
        xWins();
        break; 
        case box4.classList.contains('playerY') && box5.classList.contains('playerY') && box6.classList.contains('playerY'): 
        oWins();
        break;
        case box7.classList.contains('playerX') && box8.classList.contains('playerX') && box9.classList.contains('playerX'): 
        xWins();
        break; 
        case box7.classList.contains('playerY') && box8.classList.contains('playerY') && box9.classList.contains('playerY'): 
        oWins();
        break;
        case box1.classList.contains('playerX') && box4.classList.contains('playerX') && box7.classList.contains('playerX'): 
        xWins();
        break; 
        case box1.classList.contains('playerY') && box4.classList.contains('playerY') && box7.classList.contains('playerY'): 
        oWins();
        break;
        case box2.classList.contains('playerX') && box5.classList.contains('playerX') && box8.classList.contains('playerX'): 
        xWins();
        break; 
        case box2.classList.contains('playerY') && box5.classList.contains('playerY') && box8.classList.contains('playerY'): 
        oWins();
        break;
        case box3.classList.contains('playerX') && box6.classList.contains('playerX') && box9.classList.contains('playerX'): 
        xWins();
        break; 
        case box3.classList.contains('playerY') && box6.classList.contains('playerY') && box9.classList.contains('playerY'): 
        oWins();
        break;
        case box1.classList.contains('playerX') && box5.classList.contains('playerX') && box9.classList.contains('playerX'): 
        xWins();
        break; 
        case box1.classList.contains('playerY') && box5.classList.contains('playerY') && box9.classList.contains('playerY'): 
        oWins();
        break;
        case box3.classList.contains('playerX') && box5.classList.contains('playerX') && box7.classList.contains('playerX'): 
        xWins();
        break; 
        case box3.classList.contains('playerY') && box5.classList.contains('playerY') && box7.classList.contains('playerY'): 
        oWins();
        break;
        default:
            if (moves === 0) {
                alert('Sorry, nobody won. Clear the board and play again.');
                message.innerHTML = '';
            }
    }
}

function displayScore() {
    message.innerHTML = ''
    scoreBoard.innerHTML = ''
    scoreBoard.innerHTML = `Player X Wins: ${totalWinsX} &mdash; &mdash; &mdash; Player O Wins: ${totalWinsO}.`
    console.log(`player X wins: ${totalWinsX}, player O wins: ${totalWinsO}`)
}

function xWins() {
    totalWinsX++
    alert('Congratulations Player X. You win!');
    displayScore()
    player1 = true
    player2 = false
}

function oWins() {
    totalWinsO++
    alert('Congratulations Player O. You win!');
    displayScore()
    player1 = false
    player2 = true
}

function newGame() {

    if (player1 === true) {
        message.innerHTML = 'Player 1 goes first. Choose a square for X.'
    } else {
        message.innerHTML = 'Player 2 goes first. Choose a square for O'
    }  
    
    squares.forEach(square => {
        square.addEventListener('click', markSquare)
    })

}

function resetGame() {
    moves = 9

    squares.forEach(square => {
        square.removeEventListener('click', markSquare)
        square.classList.remove('playerX')
        square.classList.remove('playerY')
        square.innerHTML = ''
    })
    
    console.log(`Reset Game. Moves: ${moves}, Player1: ${player1}, Player2: ${player2}`)
    newGame();
}

reset.addEventListener('click', resetGame)

newGame();

