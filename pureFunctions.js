function setPlayer (turnNum) {
    let newPlayer 
    if (turnNum % 2){
        newPlayer = 1
    } else if ((turnNum+1) % 2) {
        newPlayer = 2
    }
    return newPlayer

}

function setCounter (turnNum) {
    let newCounter 
    if (turnNum % 2){
        newCounter = "Red"
    } else if ((turnNum+1) % 2) {
        newCounter = "Yellow"
    }
    return newCounter

}

const isNull = (element) => element == null

function createRow (board, rowPosition) {
    let row = []

    for (i=0; i < board.length; i++){
        row.push(board[i][rowPosition])
    }
    return row
}

function checkDiagonalWin (libraryOfDiagonals) {

    for (let i = 0; i < libraryOfDiagonals.length; i++) {
        const currentDiagonal = libraryOfDiagonals[i];
        for (let j = 0; j < currentDiagonal.length; j++) {
            if (currentDiagonal[j] !== null && currentDiagonal[j] === currentDiagonal[j+1] && currentDiagonal[j+1] === currentDiagonal[j+2] && currentDiagonal[j+2] === currentDiagonal[j+3]){
                return true
            }  
        }
    }
}

function checkVerticalWin(chosenCollumnJS) {

    for (let i = 0; i < chosenCollumnJS.length; i++) {
        if (chosenCollumnJS[i] !== null && chosenCollumnJS[i] === chosenCollumnJS[i+1] && chosenCollumnJS[i+1] === chosenCollumnJS[i+2] && chosenCollumnJS[i+2] === chosenCollumnJS[i+3]){
            return true
        }  
    }
    return false

}

function checkAllPossibleWins (chosenCollumnJS, board, rowPosition) {
    if (checkHorizontalWin(board, rowPosition)) {
        return true
    } else if (checkVerticalWin(chosenCollumnJS)) {
        return true
    } else if (checkDiagonalWin(getDiagonalArrays(board))) {
        return true
    }
}

function initJsGameboard () {

    return [[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null]]
}

function checkHorizontalWin (board, rowPosition) {

    let row = createRow(board, rowPosition)

    for ( i = 0; i < row.length; i++) {
        if (row[i] !== null && row[i] === row[i+1] && row[i+1] === row[i+2] && row[i+2] === row[i+3]){
            return true
        }  
    }
    return false
}

function getDiagonalArrays (board) {
// console.log(board[0][3])
    let diagonalOne = [(board[0][3]),(board[1][2]), (board[2][1]), (board[3][0]) ]
    let diagonalTwo = [(board[0][4]),(board[1][3]), (board[2][2]), (board[3][1]), (board[4][0]) ]
    let diagonalThree = [(board[0][5]),(board[1][4]), (board[2][3]), (board[3][2]), (board[4][1]) ,  (board[5][0]) ]
    let diagonalFour = [(board[1][5]),(board[2][4]), (board[3][3]), (board[4][2]), (board[5][1]) ,  (board[6][0]) ]
    let diagonalFive = [(board[2][5]),(board[3][4]), (board[4][3]), (board[5][2]), (board[6][1]) ]
    let diagonalSix = [(board[3][5]),(board[4][4]), (board[5][3]), (board[6][2])]
    let diagonalSeven = [(board[0][2]),(board[1][3]), (board[2][4]), (board[3][5])]
    let diagonalEight = [(board[0][1]),(board[1][2]), (board[2][3]), (board[3][4]), (board[4][5]) ]
    let diagonalNine = [(board[0][0]),(board[1][1]), (board[2][2]), (board[3][3]), (board[4][4]), (board[5][5]) ]
    let diagonalTen = [(board[1][0]),(board[2][1]), (board[3][2]), (board[4][3]), (board[5][4]), (board[6][5]) ]
    let diagonalEleven = [(board[2][0]),(board[3][1]), (board[4][2]), (board[5][3]), (board[6][4])]
    let diagonalTwelve = [(board[3][0]),(board[4][1]), (board[5][2]), (board[6][3])]
    let libraryOfDiagonals = [diagonalOne,diagonalTwo,diagonalThree, diagonalFour, diagonalFive, diagonalSix, diagonalSeven,diagonalEight,diagonalNine,diagonalTen,diagonalEleven, diagonalTwelve]
    return libraryOfDiagonals
}

module.exports= {setPlayer, checkAllPossibleWins, initJsGameboard, setCounter, isNull, createRow, checkDiagonalWin, checkVerticalWin, checkHorizontalWin, getDiagonalArrays}