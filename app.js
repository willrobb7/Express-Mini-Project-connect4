const pureFunctions = require(`./pureFunctions`)
const express = require('express' )
const path = require('path')
const { response } = require('express')
const app = express()
const port = 3000

let board = pureFunctions.initJsGameboard()
let player = 0
let turnNum = 0 
let counter
let currentPlayer 
typeof turnNum

app.use(express.json())

app.post('/taketurn', (request, response) => {
    console.log(`Hello World! request is : ${JSON.stringify(request.body)}`);
    const hasWon = placeCounter(request.body.columnNum )
    response.json({
        board,
        currentPlayer,
        currentCounter,
        hasWon

    })

    if ( hasWon ) {
        board = [[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null]]
        
    }

    console.log(response.json);
})


function placeCounter (columnNum) {

    turnNum++
    
    currentPlayer = pureFunctions.setPlayer(turnNum)
    currentCounter = pureFunctions.setCounter(turnNum)
    
    let chosenCollumnJS = board[columnNum]
    let rowPosition = chosenCollumnJS.indexOf(null)
    chosenCollumnJS[rowPosition] = currentCounter
    
    return pureFunctions.checkAllPossibleWins(chosenCollumnJS, board, rowPosition)

}


app.use(express.static(path.join(__dirname, './public')));

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})

