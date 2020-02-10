let p1Btn = document.querySelector('#p1');
let p2Btn = document.querySelector("#p2");
let h1 = document.querySelector('h1');
let p1D = document.querySelector("#p1Display");
let p2D = document.querySelector('#p2Display');
let reset = document.querySelector('#resetBtn');
let gameOver = false;
let winningScore = 5;
let numInput = document.querySelector("#setScore");
let p = document.querySelector('p');
let winningScoreDisplay = document.querySelector("p span");
let p1Score = 0;
let p2Score = 0;

p1Btn.addEventListener('click', function() {
  if (!gameOver) {
    p1Score++;
      if(p1Score === winningScore) {
        p1D.classList.add("winner");
        gameOver = true;
        alert("Player 1 is the Winner!")
      }
    p1D.textContent = p1Score;
  }
})

p2Btn.addEventListener('click', function()  {
  if (!gameOver) {
    p2Score++;
      if(p2Score === winningScore) {
        p2D.classList.add("winner");
        gameOver = true;
        alert("Player 2 is the Winner!")
      }
    p2D.textContent = p2Score;
  }
})

reset.addEventListener('click', function() {
  resetScore();
})

const resetScore = () => {
  p1Score = 0;
  p1D.textContent = 0;
  p1D.classList.remove('winner');
  p2Score = 0;
  p2D.textContent = 0;
  p2D.classList.remove('winner');
  gameOver = false;
  numInput.value = "";
}

// change event will run any time the value changes
numInput.addEventListener("change", function() {
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  resetScore();
})



