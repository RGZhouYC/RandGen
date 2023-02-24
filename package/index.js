const fs = require('fs');

function GenerateRandomArray(length, min, max, decimal){
    var output = []
    for (let i = 0; i < length; i++) {
        let randNum = Math.random() * (max - min) + min
        randNum = randNum.toFixed(decimal)
        output.push(randNum)
    }
    return output
}

// will be made to be a private utility later
function exportData(source, exportType, exportPath) {
    switch(exportType){
        case 'console':
            console.log(source)
        case 'txt':
            des = exportPath + '/output.txt'
            fs.writeFile(des, source, err => {
                if (err) {
                  console.error(err);
                }
            })
            break
        case 'cvs':
            des = exportPath + '/output.cvs'
            fs.writeFile(des, source, err => {
                if (err) {
                  console.error(err);
                }
            })
            break
    }
}

function GenerateRandomRow(length, min, max, decimal, exportType, exportPath){
    var output = GenerateRandomArray(length, min, max, decimal)
    var outputstring = ''
    var des = '' // final export destination 
    for (let i = 0; i < length; i++){
        var item = `${output[i]} `
        outputstring = outputstring + item
    } 
    exportData(outputstring, exportType, exportPath)
    return output
}

function GenerateRandomCol(length, min, max, decimal, exportType, exportPath){
    var output = GenerateRandomArray(length, min, max, decimal)
    var outputstring = ''
    var des = '' // final export destination 
    for (let i = 0; i < length; i++){
        var item = `${output[i]}\n`
        outputstring = outputstring + item
    } 
    exportData(outputstring, exportType, exportPath)
    return output
}

function GenerateRandomMetrix(rows, cols, min, max, decimal, exportType, exportPath){

}

function GenerateByPattern(){

}

//testing commands
//GenerateRandomCol(7, 56, 80, 2, 'console', '.')
//console.log(GenerateRandomArray(7, 56, 80, 2));
module.exports = GenerateRandomArray, GenerateRandomRow, GenerateRandomCol, GenerateRandomMetrix, GenerateByPattern