const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');

let speed = 7;

// Game Loop
function drawGame() {
    clearScreen();
    setTimeout(drawGame, 1000/ speed);

}

function clearScreen() {
    ctx.fillStyle = "black";
    
}

drawGame();