


/**
 * Parser functions
 * takes in input in the first text box and sets up the table with the values seen
 * in the source
 */

document.querySelector('#nButton').addEventListener('click', function(event){
    document.querySelector('#num').innerHTML += 1;
    switchInputToTable();
});

function switchInputToTable(){
    let inp = document.querySelector('#input-field');
    let otb = document.querySelector('#output-table');

    inp.classList.toggle('hide');
    otb.classList.toggle('hide');
}