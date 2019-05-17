
// Event listener for the journal input button
document.querySelector('#bJournal').addEventListener('click', function(event){
    //get the text from the input field
    let inputData = document.querySelector("#input-journal").value;
    
    //This function returns the table want to show
    let childAppend = makeTable(inputData);
    document.querySelector('body').appendChild(childAppend);
    toggleInputTableVisibility();
    
});

//change the table to show instead of the input field
function toggleInputTableVisibility(){
    
    //hide the input and button while showing the table
    document.getElementById('input-journal').classList.add("hide");
    document.getElementById('output-journal').classList.remove("hide");
    document.getElementById('bjournal').classList.add("hide");
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