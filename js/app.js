
// Event listener for the journal input button
document.querySelector('#bJournal').addEventListener('click', function(event){
    //get the text from the input field
    let inputData = document.querySelector("#input-journal").value;
    
    //This function returns the table want to show
    let childAppend = makeTable(inputData);

    toggleInputTableVisibility();
    
});

//change the table to show instead of the input field
function toggleInputTableVisibility(){
    
    //grab the two objects (table and input field)
    let inp = document.querySelector('#input-journal');
    let otb = document.querySelector('#output-journal');

    //assumes that one starts hidden
    inp.classList.toggle('hide');
    otb.classList.toggle('hide');
}

function makeTable(str){
    let newTable = document.createElement("table");
    // https://stackoverflow.com/questions/14643617/create-table-using-javascript
    
    //stand in until we get regex
    //the next few lines set each word in the input as a separate td
    let array = str.split(" ");
    array.forEach(element => {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(element);
        cell.appendChild(cellText);
        newTable.appendChild(cell);
    });

    return newTable;
}