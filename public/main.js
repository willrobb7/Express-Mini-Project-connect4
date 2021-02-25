// let board
// requi
// let player = 0
// let turnNum = 0 
// let counter

// const { isNull } = require("../Express-miniP/pureFunctions")

// let currentPlayer 



let htmlBoard = [[]]
const columnOneButton = document.getElementById("column-0-button")
const columnTwoButton = document.getElementById("column-1-button")
const columnThreeButton = document.getElementById("column-2-button")
const columnFourButton = document.getElementById("column-3-button")
const columnFiveButton = document.getElementById("column-4-button")
const columnSixButton = document.getElementById("column-5-button")
const columnSevenButton = document.getElementById("column-6-button")




function initHtmlGameboard () {
    htmlBoard[0] = [document.getElementById("column-0-row-0"),document.getElementById("column-0-row-1"),document.getElementById("column-0-row-2"),document.getElementById("column-0-row-3"),document.getElementById("column-0-row-4"),document.getElementById("column-0-row-5")]
    htmlBoard[1] = [document.getElementById("column-1-row-0"),document.getElementById("column-1-row-1"),document.getElementById("column-1-row-2"),document.getElementById("column-1-row-3"),document.getElementById("column-1-row-4"),document.getElementById("column-1-row-5")]
    htmlBoard[2] = [document.getElementById("column-2-row-0"),document.getElementById("column-2-row-1"),document.getElementById("column-2-row-2"),document.getElementById("column-2-row-3"),document.getElementById("column-2-row-4"),document.getElementById("column-2-row-5")]
    htmlBoard[3] = [document.getElementById("column-3-row-0"),document.getElementById("column-3-row-1"),document.getElementById("column-3-row-2"),document.getElementById("column-3-row-3"),document.getElementById("column-3-row-4"),document.getElementById("column-3-row-5")]
    htmlBoard[4] = [document.getElementById("column-4-row-0"),document.getElementById("column-4-row-1"),document.getElementById("column-4-row-2"),document.getElementById("column-4-row-3"),document.getElementById("column-4-row-4"),document.getElementById("column-4-row-5")]
    htmlBoard[5] = [document.getElementById("column-5-row-0"),document.getElementById("column-5-row-1"),document.getElementById("column-5-row-2"),document.getElementById("column-5-row-3"),document.getElementById("column-5-row-4"),document.getElementById("column-5-row-5")]
    htmlBoard[6] = [document.getElementById("column-6-row-0"),document.getElementById("column-6-row-1"),document.getElementById("column-6-row-2"),document.getElementById("column-6-row-3"),document.getElementById("column-6-row-4"),document.getElementById("column-6-row-5")]
}

function fetchRequest( htmlBoard, columnNum) {
    console.log('fetch started');
    //create column num strring creater
    const fullUrl = `http://localhost:3000/taketurn`
    fetch(fullUrl, {
        method: 'POST',
        body: JSON.stringify({
            columnNum
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then( data => {
        console.log(data.hasWon);
        let chosenCollumnHtml = htmlBoard[columnNum]
        let rowPosition = ((data.board[columnNum]).findIndex(isNull)-1)
        console.log(rowPosition)
        if(rowPosition == -2){
            rowPosition = 5
        }
        chosenCollumnHtml[rowPosition].style.background = data.currentCounter
        
        if( data.hasWon ) {
            win()
        }
    
        disableButtonIfColumnIsFull((data.board[columnNum]), columnNum)

    })
console.log('fetch finished');

}
const isNull = (element) => element == null

function checkAllPossibleWins (chosenCollumnJS, board, rowPosition) {

    return checkHorizontalWin(board, rowPosition) || checkVerticalWin(chosenCollumnJS) || checkDiagonalWin(getDiagonalArrays(board))
}

function disableButtonIfColumnIsFull (chosenCollumn, columnNum) {
// Side effect function
    if(chosenCollumn[5] !== null){

        if (columnNum === 0) {
            columnOneButton.disabled = true
        } else if (columnNum === 1) {
            columnTwoButton.disabled = true
        } else if (columnNum === 2) {
            columnThreeButton.disabled = true
        } else if (columnNum === 3) {
            columnFourButton.disabled = true
        } else if (columnNum === 4) {
            columnFiveButton.disabled = true
        } else if (columnNum === 5) {
            columnSixButton.disabled = true
        } else if (columnNum === 6) {
            columnSevenButton.disabled = true
        }
    }
}

function disableButtons () {
    columnOneButton.disabled = true
    columnTwoButton.disabled = true
    columnThreeButton.disabled = true
    columnFourButton.disabled = true
    columnFiveButton.disabled = true
    columnSixButton.disabled = true
    columnSevenButton.disabled = true
}

function win () {
    disableButtons()
    alert(`WINNER`)
    setTimeout(resetPage(),3000)
}

function resetPage () {
    
    location.reload()
}

// board = initJsGameboard()
// board = [[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null]]
// location.reload()
initHtmlGameboard()
