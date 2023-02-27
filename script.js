console.log("TicTacToe")
let turn= "X"  //initial turn
let isgameover = false;
//to change the turn...
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}

//to check win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.playerTurn').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true;
            document.querySelector('.imgWin').getElementsByTagName('img')[0].style.width = "240px"
        }

    })
}
// Game logic
/*take class=box; and use array
so that we can use forEach*/
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', ()=>{
    if(boxtext.innerText === ''){
        boxtext.innerText = turn;
        turn = changeTurn();
        checkWin();
        if (!isgameover){
            document.getElementsByClassName("playerTurn")[0].innerText = "Turn for " + turn;
        }
        
    }
  })
})
//functioning reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("playerTurn")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgWin').getElementsByTagName('img')[0].style.width = "0px"
})