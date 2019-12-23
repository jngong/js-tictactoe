/* 
Pseudocode
Start by adding an event listener to each square.
With each click on a square, we will add a class and change the innerHTML to either X or O depending on the turn.
With each click on a square, the player changes.
Once a square has been clicked and changed, it cannot be clicked and changed again.
A player wins if/when:
- all squares in a row are the same
- all squares in a column are the same
- box 1, box 5, box 9 are the same
- box 3, box 5, box 7 are the same
If all boxes are clicked and none of the above apply, then there is no winner
*/

let playerX = true;
let playerO = false;

let squares = document.querySelectorAll('.square')
console.log(squares)

squares.forEach(square => {
    square.addEventListener('click', assignClass)
})

function assignClass() {
    if (playerX) {
        this.classList.add('playerX')
        this.innerHTML = 'X'
        playerX = false
        playerO = true
    } else if (playerO) {
        this.classList.add('playerO')
        this.innerHTML = 'O'
        playerO = false
        playerX = true
    }    
}