let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let newBtn = document.querySelector('#new');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turn = document.querySelector('#turn');

let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click', () =>{
        if(turnO){
            box.innerText = 'O';
            turnO = false;
            turn.innerText = "Turn for X";

        }
        else{
            box.innerText = 'X';
            turnO = true;
            turn.innerText = "Turn for O";
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    for(let box of boxes){
        box.disabled = true;
    }
}

const resetGame = () => {
    turnO = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msgContainer.classList.add('hide');
}

newBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);