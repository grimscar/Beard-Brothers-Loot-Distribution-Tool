
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
            let cellText = document.createTextNode(el);
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


/* Item list that needs REGEX setup to pull from.

^You see: (.+) : (\d+)$   This regex would match line 1
^You see: (.+)$           This regex would match line 2

args[0] = the first () capture and args[1] would be the 2nd () catpure.

Line 1 is for multiple items
Line 2 is for single items.

This raw paste could contain several single items as well such as research notes, they don't stack
thus will never have a " : #" format on them.

You see: Poison Aspect Core : 2
You see: Void Aspect Core
You see: Water Aspect Core
You see: Fire Aspect Core
You see: Air Aspect Core : 3
You see: Earth Aspect Core
You see: Poison Aspect Core : 2
You see: Shadow Aspect Extract
You see: shadow phylactery
You see: water phylactery
You see: Command Aspect Extract
You see: Eldritch Aspect Extract
You see: Water Aspect Extract
You see: discordance skill mastery scroll
You see: fishing skill mastery scroll
You see: carpentry skill mastery scroll
You see: remove trap skill mastery scroll : 2
*/
