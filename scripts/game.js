// variaveis usadas

let board = ['','','','','','','','',''];
let playerTime = 0;
let symbols = ['o','x'];
let gamOver = false;
let conditionWin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function handleMove(position){

    if(gamOver){
        return;
    }

    if(board[position]==''){
        board[position] = symbols[playerTime];

        gamOver = isWin();


        if(!gamOver){
            if(playerTime == 0){
                playerTime = 1;
            }else{
                playerTime =0;
            }
        }    
    }

    return gamOver;
}

function isWin(){
    let pos1, pos2, pos3, sequence;
    for(let i=0; i< conditionWin.length; i++){
        sequence = conditionWin[i];
        pos1 = sequence[0];
        pos2 = sequence[1];
        pos3 = sequence[2];

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            return true;
        } 
    }
    return false;
}