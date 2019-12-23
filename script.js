/* 
Pseudocode
Start by adding an event listener to each square. DONE
With each click on a square, we will add a class and change the innerHTML to either X or O depending on the turn. DONE
With each click on a square, the player changes. DONE
Keep track of # moves. DONE

Once a square has been clicked and changed, it cannot be clicked and changed again. ???

A player wins if/when:
- all squares in a row are the same
- all squares in a column are the same
- box 1, box 5, box 9 are the same
- box 3, box 5, box 7 are the same

If all boxes are clicked and none of the above apply, then there is no winner.

*/

let playerX = true;
let playerO = false;
let moves = 9;

let squares = document.querySelectorAll('.square')
console.log(squares)

let reset = document.querySelector('#reset')
console.log(reset)

squares.forEach(square => {
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
    } else if (playerO & moves > 0) {
        this.classList.add('playerO')
        this.innerHTML = 'O'
        playerO = false
        playerX = true
        moves -= 1
        console.log(moves)
    }    
}

reset.addEventListener('click', resetGame)

function resetGame() {
    squares.forEach(square => {
        square.classList.remove('playerX')
        square.classList.remove('playerO')
        square.innerHTML = ''
    })
    playerX = true
    playerO = false
    moves = 9
    console.log(`Reset. Moves: ${moves}, PlayerX: ${playerX}, PlayerO: ${playerO}`)
}