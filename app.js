// NOUGHTS AND CROSSES 
// RESET WHEN FINISHED 
// EXTRA - Scoreboard
// EXTRA - Best of 5 Option
// PLAYED ON A GRID OF 3 SQUARES X 3 SQUARES
// PLAYER ONE = X
// PLAYER TWO = O
// PLAYER ONE AND PLAYER TWO TAKE TURNS ADDING THEIR SYMBOL (X or O) INTO EMPTY SQUARES.
// FIRST PLAYER TO GET 3 OF THEIR SYMBOLS IN A ROW (UP, DOWN, ACROSS OR DIAGONALLY) WINS.
// IF ALL 9 SQUARES ARE FILLED, AND NO ROW IS FILLED BY THE SAME SYMBOL. ITS A DRAW.

let clicks = 0
const cells = document.querySelectorAll(".cell");
let xMove = [];
let oMove = [];
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

document.getElementById("grid").addEventListener("click", function (event) {
    clicks = (clicks || 0) + 1;
    console.log(clicks);
});
function restart(){
    window.location.reload();
}

cells.forEach (cell => {
    cell.addEventListener("click", (event) => {
        if ((event.target.innerHTML === ("")) && (clicks % 2 == 0)) {
            event.target.innerHTML = "X";
            xMove.push(Number(event.target.id));
        } else if ((event.target.innerHTML === ("")) && (clicks % 2 == 1)) {
            event.target.innerHTML = "O";
            oMove.push(Number(event.target.id));
        }
        console.log(xMove);
        console.log(oMove);
        
      for (let i = 0; i < winningCombos.length; i++) {
        let count = 0
        for (let j = 0; j < winningCombos[i].length; j++) { 
          if (xMove.includes(winningCombos[i][j])){
            count++
            if(count === 3){
            alert("X WINS!");
            window.location.reload();
            }
          }
        }
      }
      for (let i = 0; i < winningCombos.length; i++) {
        let count = 0
        for (let j = 0; j < winningCombos[i].length; j++) { 
          if (oMove.includes(winningCombos[i][j])){
            count++
            if(count === 3){
            alert("O WINS!");
            window.location.reload();
            }
          }
        }
      }
    });
})
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




