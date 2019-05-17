
// Event listener for the journal input button
document.querySelector('#bJournal').addEventListener('click', function(event){
    //get the text from the input field
    let inputData = document.querySelector("#input-journal").value;
    
    //This function returns the table want to show
    let childAppend = makeTable(inputData);
    document.getElementById('output-journal').replaceWith(childAppend);

    toggleInputTableVisibility();
    
});

//change the table to show instead of the input field
function toggleInputTableVisibility(){
    
    //hide the input and button while showing the table
    document.getElementById('input-journal').classList.add("hide");
    //document.getElementById('output-journal').classList.remove("hide");
    document.getElementById('bJournal').classList.add("hide");
}

//takes input of a string and returns a table based on that
function makeTable(str){
    let newTable = document.createElement("table");
    // https://stackoverflow.com/questions/14643617/create-table-using-javascript
    
    //stand in until we get regex
    let array = str.split(" ");

    //array for testing
    array = [
        ['a', 'b', 'c', 'd'],
        [1, 2, 3, 4],
        ['apple', 'cat', 'fox', 'tree']
    ]

    //the next few lines set each word in the input as a separate td
    //it expects array to be a 2 dimensional array
    array.forEach(element => {
        newTable.appendChild(document.createElement("tr"));
        element.forEach(el => {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(element);
            cell.appendChild(cellText);
            newTable.appendChild(cell);
        })
    });

    return newTable;
}

function addTable(tbl)
{
    let divE = document.querySelector(".data-section").querySelector('table').firstChild;

}

/**
 * if i < 1 then no # quantity displayed
 * 
 * import -> if no # then quantity +1
 * else quantity + #
 * 
 */