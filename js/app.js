


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