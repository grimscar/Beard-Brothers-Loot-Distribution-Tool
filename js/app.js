
// Event listener for the journal input button
document.querySelector('#bJournal').addEventListener('click', function(event){
    switchInputToTable();
});

//change the table to show instead of the input field
function switchInputToTable(){
    //grab the two objects (table and input field)
    let inp = document.querySelector('#input-journal');
    let otb = document.querySelector('#output-journal');

    //assumes that one starts hidden
    inp.classList.toggle('hide');
    otb.classList.toggle('hide');
}