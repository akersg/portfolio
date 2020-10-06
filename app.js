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

function checkWin(winningCombos, movesArray) {
  for (let i = 0; i < winningCombos.length; i++) {
    let count = 0
    for (let j = 0; j < winningCombos[i].length; j++) { 
      if (movesArray.includes(winningCombos[i][j])){
        count++
        if(count === 3){
        alert("WINNER!");
        return true;
        }
      }
    }
  }
  return false;
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
        
      const xHasWon = checkWin(winningCombos, xMove)
      const oHasWon = checkWin(winningCombos, oMove)

      });
})
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




