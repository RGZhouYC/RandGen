function GenerateRandomArray(length, min, max, decimal){
    var output = []
    for (let i = 0; i < length; i++) {
        let randNum = Math.random() * (max - min) + min
        randNum = randNum.toFixed(decimal)
        output.push(randNum)
    }
    return output
}

function GenerateRandomRow(length, min, max, decimal, exportType, exportPath){
    var output = GenerateRandomArray(length, min, max, decimal)
    console.log(output)
}

function GenerateRandomCol(length, min, max, decimal, exportType, exportPath){
    var output = GenerateRandomArray(length, min, max, decimal)
    console.log(output)
}

function GenerateRandomMetrix(rows, cols, min, max, decimal, exportType, exportPath){

}

function GenerateByPattern(){

}

GenerateRandomCol(7, 56, 80, 2, 4, 5)
module.exports = GenerateRandomArray, GenerateRandomRow, GenerateRandomCol, GenerateRandomMetrix, GenerateByPattern