# randgenMatrix-npm-pakcage (under development)

## randgenMatrix
Generate array or matrix of random number with specified range, size, decimal, and export to txt or csv file. 

## Installation
    > npm install randgenMatrix

## Usage
### GenerateRandomArray
Generate an array of random number. min and max specifies the range, length specifies the number of elements, decimal specifies the number of digits to be saved after decimal point.
    
    > GenerateRandomArray(length, min, max, decimal)

Example: 
    > GenerateRandomCol(7, 56, 80, 2)

returns: 
    > ['79.11', '67.02', '65.51', '70.45', '75.17', '76.71', '62.92']