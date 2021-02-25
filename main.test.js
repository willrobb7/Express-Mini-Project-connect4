const pureFunctions = require(`./pureFunctions`)

test('setPlayer will return player 1 if the number of turns is odd', () => {
    //arrange
    let turnNum = 1
    let expectedOutput = 1

    //act
    let evenTurnNumberSetPlayerToOne = pureFunctions.setPlayer(turnNum)

    //assert
    expect(evenTurnNumberSetPlayerToOne).toStrictEqual(expectedOutput)
})

test('setPlayer will return player 2 if the number of turns is even', () => {
    //arrange
    let turnNum = 0
    let expectedOutput = 2

    //act
    let evenTurnNumberSetPlayerToOne = pureFunctions.setPlayer(turnNum)

    //assert
    expect(evenTurnNumberSetPlayerToOne).toStrictEqual(expectedOutput)
})

test('setCounter will return a string of red if the number of turns is odd / player 1 is active', () => {
    //arrange
    let turnNum = 1
    let expectedOutput = 'Red'

    //act
    let evenTurnNumberSetPlayerToOne = pureFunctions.setCounter(turnNum)

    //assert
    expect(evenTurnNumberSetPlayerToOne).toStrictEqual(expectedOutput)
})

test('setCounter will return a string of yellow if the number of turns is even / player 2 is active', () => {
    //arrange
    let turnNum = 2
    let expectedOutput = 'Yellow'

    //act
    let evenTurnNumberSetPlayerToOne = pureFunctions.setCounter(turnNum)

    //assert
    expect(evenTurnNumberSetPlayerToOne).toStrictEqual(expectedOutput)
})


test('isNull will return false if the value of the element is not null', () => {
    //arrange 
    let element = "Red"
    let expectedOutput = false

    //act
    let elementSetToRed = pureFunctions.isNull(element)

    //assert
    expect(elementSetToRed).toStrictEqual(expectedOutput)
})

test('isNull will return true if the value of the element is null', () => {
    //arrange 
    let element = null
    let expectedOutput = true

    //act
    let elementSetToRed = pureFunctions.isNull(element)

    //assert
    expect(elementSetToRed).toStrictEqual(expectedOutput)
})

test('createRow will create an array of all of the inputs in a chosen row', () => {
    let rowPosition = 2
    let board = [[null,null,'red',null,null,null],[null,null,'yellow',null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null]]
    let expectedOutput = ['red','yellow', null, null, null, null, null]
    //act
    let createdRow = pureFunctions.createRow(board, rowPosition)

    expect(createdRow).toStrictEqual(expectedOutput)
    
})

test('checkVerticalWin returns false when there are not four of the same counters in a row (vertically)',() => {
    //arrange 
    let chosenCollumnJS = ["Red","Yellow","Red","Yellow","Red","Yellow"]
    //act
    let returnedValue = pureFunctions.checkVerticalWin(chosenCollumnJS)
    //assert 
    expect(returnedValue).toStrictEqual(false)
})

test('checkVerticalWin returns true when there are four of the same counters in a row (vertically)',() => {
    //arrange 
    let chosenCollumnJS = ["Red","Red","Red","Red","Yellow","Yellow"]
    //act
    let returnedValue = pureFunctions.checkVerticalWin(chosenCollumnJS)
    //assert 
    expect(returnedValue).toStrictEqual(true)
})

test('checkVerticalWin returns false when there are four values of null in a row (vertically)',() => {
    //arrange 
    let chosenCollumnJS = [null,null,null,null,"Red","Yellow"]
    //act
    let returnedValue = pureFunctions.checkVerticalWin(chosenCollumnJS)
    //assert 
    expect(returnedValue).toStrictEqual(false)
})

test('checkHorizontalRow returns false when there are not four of the same counters in a row (horizontally)',() => {
    //arrange 
    let board = [[null,null,'red',null,null,null],[null,null,'red',null,null,null],[null,null,'yellow',null,null,null],[null,null,'yellow',null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null]]
    //act
    let returnedValue = pureFunctions.checkHorizontalWin(board,2)
    //assert 
    expect(returnedValue).toStrictEqual(false)
})

test('checkHorizontalRow returns true when there are four of the same counters in a row (horizontally)',() => {
    //arrange 
    let board = [[null,null,'red',null,null,null],[null,null,'red',null,null,null],[null,null,'red',null,null,null],[null,null,'red',null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null]]
    //act
    let returnedValue = pureFunctions.checkHorizontalWin(board,2)
    //assert 
    expect(returnedValue).toStrictEqual(true)
})

test('checkHorizontalRow returns false when there are four null counters in a row (horizontally)',() => {
    //arrange 
    let board = [[null,null,'red',null,null,null],[null,null,'red',null,null,null],[null,null,'red',null,null,null],[null,null,'red',null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null]]
    //act
    let returnedValue = pureFunctions.checkHorizontalWin(board,1)
    //assert 
    expect(returnedValue).toStrictEqual(false)
})

