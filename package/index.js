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

function GenerateRandomMatrix(rows, cols, min, max, decimal){
    var outputmatrix = []
    for (let i = 0; i < rows; i++){
        var row = []
        for (let j = 0; j < cols; j++){
            let randNum = Math.random() * (max - min) + min
            randNum = randNum.toFixed(decimal)
            row.push(randNum)
        }
        outputmatrix.push(row)
    }
    return outputmatrix
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

function ExportRandomRow(length, min, max, decimal, exportType, exportPath){
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

function ExportRandomCol(length, min, max, decimal, exportType, exportPath){
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

function ExportRandomMatrix(rows, cols, min, max, decimal, exportType, exportPath) {
    var output = GenerateRandomMatrix(rows, cols, min, max, decimal)
    var outputstring = ''
    var des = '' // final export destination 
    for (let i = 0; i < rows; i++) {
        var rowstring = ''
        for (let j = 0; j < cols; j++) {
            var item = `${output[i][j]} `
            rowstring = rowstring + item
        }
        outputstring = outputstring + '\n' + rowstring
    }
    exportData(outputstring, exportType, exportPath)
    return output
}

function GenerateArrayByPattern(length, offset, decimal, pattern, exportType, exportPath){
    var output = []
    var order = pattern[0]
    var coef = []
    for (let l = 0; l < order; l++) {
        if (pattern[l+1]) {
            coef.push(pattern[l+1])
        }
        else {
            coef.push(0)
        }
    }
    let Num = 1
    for (let i = 0; i < length; i++) {
        var result = 0
        var o = order
        for (let j = 0; j < coef.length; j++) {
            result = result + coef[j] * Math.pow(Num, o)
            o = o - 1
        }
        var randNum = Math.random() * ((result+offset) - (result-offset)) + (result-offset)
        randNum = randNum.toFixed(decimal)
        output.push(randNum)
        Num++
    }
    return output
}

module.exports = GenerateRandomArray, ExportRandomRow, ExportRandomCol, GenerateRandomMatrix, GenerateArrayByPattern,
ExportRandomMatrix

//testing commands
//GenerateRandomCol(7, 56, 80, 2, 'console', '.')
//console.log(GenerateRandomArray(7, 56, 80, 2));
//ExportRandomMatrix(7, 3, 56, 80, 2, 'txt', '.')
console.log(GenerateArrayByPattern(30, 0.01, 3, [2,4,0,5,5], 3, 5));
