document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){

    if(handleMove(event.target.id)){
        setTimeout(() => {
            alert("Fim de jogo - jogador "+ (playerTime+1) +" venceu");
        },10);
    }
    updateSquare(event.target.id);
} 



function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}