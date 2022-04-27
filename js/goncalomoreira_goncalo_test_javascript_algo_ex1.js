// verify the size of table
const to_verify = new Array(9);
for ( let i=0 ; i < to_verify.length ; i++){
    to_verify[i] = new Array(9);
}

// fuction to load the data inside the table and turn it in 2dimensions
function loadDataTable() {
    for ( let i in array_number ){
        let line = array_number[i].split(" ");
        // Return string into integer  
        for ( let j in line ){
            to_verify[i][j] = parseInt( line[j] );
        }
    }
}
// function to create the table in 2d (line,column), first we get the id of the table, after this we use the for to loop the function to create the table row and table data
function createTable() {
    let table = document.getElementById('sudoku_game');

    for (let i=0; i < to_verify.length; i++){
        let tr = document.createElement('tr');
        
        for (let j=0; j < to_verify[i].length; j++){
            let td = document.createElement('td');
            td.innerHTML = to_verify[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


