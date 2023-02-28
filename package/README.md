# randgenMatrix-npm-pakcage (under development)

## randgenMatrix
Generate array or matrix of random number with specified range, size, decimal, and export to txt or csv file. 

## Installation
> npm install randgenmatrix

## Usage
### GenerateRandomArray
Generate an array of random number. `min` and `max` specifies the range, `length` specifies the number of elements, `decimal` specifies the number of digits to be saved after decimal point.
    
> GenerateRandomArray(length, min, max, decimal)

Example: 
> GenerateRandomCol(7, 56, 80, 2)

Returns: 
> (7) ['79.11', '67.02', '65.51', '70.45', '75.17', '76.71', '62.92']

### GenerateRandomMatrix
Generate an array of random number. `min` and `max` specifies the range, `rows` specifies the number of elements in a row, `cols` specifies the number of elements in a cols, `decimal` specifies the number of digits to be saved after decimal point.

> GenerateRandomMatrix(rows, cols, min, max, decimal)

Example: 
> GenerateRandomMatrix(7, 3, 56, 80, 2)

Returns: 
> [Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3)]
Each array is a row. 

> console.log(GenerateRandomMatrix(7, 3, 56, 80, 2)[0])
Access the first row. 

Returns: 
> (3) ['64.75', '64.67', '64.01']