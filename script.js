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
let playerX = true;
let playerO = false;
let moves = 9;

let squares = document.querySelectorAll('.square')
console.log(squares)

let reset = document.querySelector('#reset')
console.log(reset)

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let box3 = document.querySelector('#box3')
let box4 = document.querySelector('#box4')
let box5 = document.querySelector('#box5')
let box6 = document.querySelector('#box6')
let box7 = document.querySelector('#box7')
let box8 = document.querySelector('#box8')
let box9 = document.querySelector('#box9')


function newGame() {
    playerX = true
    playerO = false
    moves = 9
    
    squares.forEach(square => {
        square.classList.remove('playerX')
        square.classList.remove('playerO')
        square.innerHTML = ''
        square.addEventListener('click', assignClass)
    })
    
    function assignClass() {
        if (playerX && moves > 0) {
            this.classList.add('playerX')
            this.innerHTML = 'X'
            playerX = false
            playerO = true
            moves -= 1
            console.log(moves)
            this.removeEventListener('click', assignClass)
        } else if (playerO && moves > 0) {
            this.classList.add('playerO')
            this.innerHTML = 'O'
            playerO = false
            playerX = true
            moves -= 1
            console.log(moves)
            this.removeEventListener('click', assignClass)
        }
        console.log(`Player X: ${playerX}, Player O: ${playerO}`)    
        checkWinner();
    }
    console.log(`Reset. Moves: ${moves}, PlayerX: ${playerX}, PlayerO: ${playerO}`)
}

function checkWinner() {
    switch(true) {
        case box1.classList.contains('playerX') && box2.classList.contains('playerX') && box3.classList.contains('playerX'): 
        console.log(`player X wins`);
        break; 
        case box1.classList.contains('playerO') && box2.classList.contains('playerO') && box3.classList.contains('playerO'): 
        console.log(`player O wins`);
        break;
        case box4.classList.contains('playerX') && box5.classList.contains('playerX') && box6.classList.contains('playerX'): 
        console.log(`player X wins`);
        break; 
        case box4.classList.contains('playerO') && box5.classList.contains('playerO') && box6.classList.contains('playerO'): 
        console.log(`player O wins`);
        break;
        case box7.classList.contains('playerX') && box8.classList.contains('playerX') && box9.classList.contains('playerX'): 
        console.log(`player X wins`);
        break; 
        case box7.classList.contains('playerO') && box8.classList.contains('playerO') && box9.classList.contains('playerO'): 
        console.log(`player O wins`);
        break;
        case box1.classList.contains('playerX') && box4.classList.contains('playerX') && box7.classList.contains('playerX'): 
        console.log(`player X wins`);
        break; 
        case box1.classList.contains('playerO') && box4.classList.contains('playerO') && box7.classList.contains('playerO'): 
        console.log(`player O wins`);
        break;
        case box2.classList.contains('playerX') && box5.classList.contains('playerX') && box8.classList.contains('playerX'): 
        console.log(`player X wins`);
        break; 
        case box2.classList.contains('playerO') && box5.classList.contains('playerO') && box8.classList.contains('playerO'): 
        console.log(`player O wins`);
        break;
        case box3.classList.contains('playerX') && box6.classList.contains('playerX') && box9.classList.contains('playerX'): 
        console.log(`player X wins`);
        break; 
        case box3.classList.contains('playerO') && box6.classList.contains('playerO') && box9.classList.contains('playerO'): 
        console.log(`player O wins`);
        break;
        case box1.classList.contains('playerX') && box5.classList.contains('playerX') && box9.classList.contains('playerX'): 
        console.log(`player X wins`);
        break; 
        case box1.classList.contains('playerO') && box5.classList.contains('playerO') && box9.classList.contains('playerO'): 
        console.log(`player O wins`);
        break;
        case box3.classList.contains('playerX') && box5.classList.contains('playerX') && box7.classList.contains('playerX'): 
        console.log(`player X wins`);
        break; 
        case box3.classList.contains('playerO') && box5.classList.contains('playerO') && box7.classList.contains('playerO'): 
        console.log(`player O wins`);
        break;
        default:
            if (moves === 0) {
                console.log('no winner')
            }
        }
        
    }
    
    reset.addEventListener('click', newGame)

    newGame();