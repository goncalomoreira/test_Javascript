function validateLine(){
    validateMatrixAndBuildErrors(to_verify,'Line');
}
// function to validate all the columns
function to_validateColumns(){
    let to_verify_columns = new Array(9);
    for (let i=0; i < to_verify_columns.length; i++){
        to_verify_columns[i] = new Array(9);
    }
    for(let i=0; i < to_verify.length; i++){
        for (j=0; j < to_verify[i].length; j++){
            to_verify_columns[j][i] = to_verify[i][j];
        }
    }
    // get the html element by id (error) 
    let errorTable = document.getElementById('sudoku_errors');

    validateMatrixAndBuildErrors(to_verify_columns,'Column');
}

function to_validateRegion(x,y){
    let to_verify_region = [];
    let xIndex = x*3;
    let yIndex = y*3;
    let errorTable = document.getElementById('sudoku_errors');
    
    for (let i = xIndex; i < xIndex + 3; i++){
        for (let j = yIndex; j < yIndex + 3; j++){
            to_verify_region.push( to_verify[i][j] );
        }
    }
    
    if (!checkAllConditions(to_verify_region)){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = `Region ${3*y + x + 1} incorrect`;
        tr.appendChild(td);
        for (let i=0; i < to_verify_region.length; i++){
            let valueData = document.createElement('td');
            valueData.innerHTML = to_verify_region[i];
            tr.appendChild(valueData);
        }
        errorTable.appendChild(tr);
    }
}

function to_validateRegions(){
    for (let i=0; i < 3; i++){

        for (let j=0; j < 3; j++){
            to_validateRegion(i,j);
        }
    }
}
// function with purpose to check the erros on sudoku
function validateMatrixAndBuildErrors(matrix,text){
    let errorTable = document.getElementById('sudoku_errors');
    for(let i=0; i < matrix.length; i++){
        if (!checkAllConditions(matrix[i])){
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.innerHTML = `${text} ${i+1} incorrect`;
            tr.appendChild(td);
            for (let j=0; j < matrix[i].length; j++){
                let dataValue = document.createElement('td');
                dataValue.innerHTML = matrix[i][j];
                tr.appendChild(dataValue);
            }
            errorTable.appendChild(tr);
        }         
    }
}
// function to check if the sudoku is correct if is correct return a message that says the sudoku is correct
function checkSudokuSuccess(){
    let errorTable = document.getElementById('sudoku_errors');
    if(!errorTable.innerHTML){
        let success = document.querySelector("p");
        success.innerHTML = 'The sudoku is correct';
    }
}