
// Event listener for the journal input button
document.querySelector('#bJournal').addEventListener('click', function(event){
    //get the text from the input field
    let inputData = document.querySelector("#input-journal").value;
    
    let parseRegex = /^You see: ([^:0-9]+\b) ?:? ?(\d+)?$/;
    //This function returns the table want to show
    let childAppend = makeTable(inputData, parseRegex);
    
    addTable(childAppend, document.getElementById('output-journal'));
    toggleInputTableVisibility(document.getElementById('d-input-journal'));
    
});

document.querySelector('#bRollem').addEventListener('click', function(event){
    //get the text from the input field
    let inputData = document.querySelector("#input-rollem").value;
    
    let parseRegex = /@(.+), \d+ ⟵ [(\d+)]1d100/;
    //This function returns the table want to show
    let childAppend = makeTable(inputData, parseRegex);
    
    addTable(childAppend, document.getElementById('output-rollem'));
    toggleInputTableVisibility(document.getElementById('d-input-rollem'));
});

//change the table to show instead of the input field
function toggleInputTableVisibility(elementToHide){
    
    //hide the input and button while showing the table
    //document.getElementById('input-journal').classList.add("hide");
    //document.getElementById('bJournal').classList.add("hide");
    //document.getElementById('d-input-journal').classList.add("hide");
    elementToHide.classList.add("hide");
}

//takes input of a string and returns a table based on that
function makeTable(inputData, parseRegex){
    let newTable = document.createElement("table");
    // https://stackoverflow.com/questions/14643617/create-table-using-javascript
    
    //gets the array we are going to translate into the table
    let array = parse(inputData, parseRegex);

    array = isOnLootTable(array);

    //the next few lines set each word in the input as a separate td
    //it expects array to be a 2 dimensional array
    array.forEach(element => {
        {
            newTable.appendChild(document.createElement("tr"));
            element.forEach(el => {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(el);
                    cell.appendChild(cellText);
                    if (cell.textContent.length > 0){
                        newTable.appendChild(cell);
                    }
            })
        }
    });

    return newTable;
}

//takes in a string as inputData and returns a 2d array based on the parseRegex out each line as a separate row
function parse(inputData, parseRegex){
    //what we are returning
    let output = [];

    //The regex for the Rollem
    //let parseRollemRegex = /@(.+), \d+ ⟵ [(\d+)]1d100/;
    // First () Captures Name second () captures their roll. They need to show from high roll to lowest
    
    // make the initial array by spliting each line
    output = inputData.split('\n');

    //go through the array and split each element into its own array based on p
    for (let i = 0; i < output.length; i++){
        let tempString = output[i];
        output[i] = tempString.split(parseRegex);
    }
    return output;
}

//Checks each item in array to make sure its on the item list and it fixes quantities
function isOnLootTable(array){
    let output = [];

   array.forEach(element => {
        //check to see if the item is on the list
        let toAdd = false;
        
        //Loops through the item list looking for a match
        itemList.forEach(item =>  {
            if (element[1] == item || element[1] == item + " ")
            {
                //if we find a match we want to add it
                toAdd = true;
                
                //any undfined at element[2] should be a 1 instead, they just dont have a quantity when read
                if (element[2] == undefined){
                    element[2] = 1;
                }
                
                //if the item is already on the output list, we just want to add the quantity
                output.forEach(line => {
                    if (line[1] == element[1])
                    {
                        line[2] = parseInt(line[2]) + parseInt(element[2]);
                        toAdd = false;
                    }
                });
                if (toAdd){
                    output.push(element);
                }
            }
        });
   });
   return output;
}

//Adds the finished table to the page
function addTable(tbl, idToReplace)
{
    idToReplace.replaceWith(tbl);
}


// Item list definition

var itemList = [
    "A Skill Mastery Orb",
    "Aegis Keep Cloth",
    "Dark Forest Cloth",
    "Mastercrafting Diagram",
    "Metallic Umber Cloth",
    "Mount Petram Cloth",
    "Research Materials",
    "Shimmer Evergreen Cloth",
    "Air Aspect Core",
    "Artisan Aspect Core",
    "Command Aspect Core",
    "Earth Aspect Core",
    "Eldritch Aspect Core",
    "Fire Aspect Core",
    "Fortune Aspect Core",
    "Lyric Aspect Core",
    "Poison Aspect Core",
    "Shadow Aspect Core",
    "Void Aspect Core",
    "Water Aspect Core",
    "Air Aspect Extract",
    "Artisan Aspect Extract",
    "Command Aspect Extract",
    "Earth Aspect Extract",
    "Eldritch Aspect Extract",
    "Fire Aspect Extract",
    "Fortune Aspect Extract",
    "Lyric Aspect Extract",
    "Poison Aspect Extract",
    "Shadow Aspect Extract",
    "Void Aspect Extract",
    "Water Aspect Extract",
    "Air Phylactery",
    "Artisan Phylactery",
    "Command Phylactery",
    "Earth Phylactery",
    "Eldritch Phylactery",
    "Fire Phylactery",
    "Fortune Phylactery",
    "Lyric Phylactery",
    "Poison Phylactery",
    "Shadow Phylactery",
    "Void Phylactery",
    "Water Phylactery",
    "Alchemy Skill Mastery Scroll",
    "Animal Lore Skill Mastery Scroll",
    "Animal Taming Skill Mastery Scroll",
    "Arms Lore Skill Mastery Scroll",
    "Begging Skill Mastery Scroll",
    "Blacksmithy Skill Mastery Scroll",
    "Camping Skill Mastery Scroll",
    "Carpentry Skill Mastery Scroll",
    "Cartography Skill Mastery Scroll",
    "Cooking Skill Mastery Scroll",
    "discordance skill mastery scroll",
    "fishing skill mastery scroll",
    "Forensic Eval Skill Mastery Scroll",
    "Herding Skill Mastery Scroll",
    "Inscription Skill Mastery Scroll",
    "Item ID Skill Mastery Scroll",
    "Lockpicking Skill Mastery Scroll",
    "Lumberjacking Skill Mastery Scroll",
    "Mining Skill Mastery Scroll",
    "Musicianship Skill Mastery Scroll",
    "Peacemaking Skill Mastery Scroll",
    "Poisoning Skill Mastery Scroll",
    "Provocation Skill Mastery Scroll",
    "Remove Trap Skill Mastery Scroll",
    "Spirit Speak Skill Mastery Scroll",
    "Stealth Skill Mastery Scroll",
    "Tailoring Skill Mastery Scroll",
    "Taste Id Skill Mastery Scroll",
    "Tinkering Skill Mastery Scroll",
    "Tracking Skill Mastery Scroll",
    "Veterinary Skill Mastery Scroll",
    "Plainly Drawn Fishing Map",
    "Expertly Drawn Fishing Map",
    "Adeptly Drawn Fishing Map",
    "Cleverly Drawn Fishing Map",
    "Deviously Drawn Fishing Map",
    "Ingeniously Drawn Fishing Map",
    "Diabolically Drawn Fishing Map",
    "Legendarily Drawn Fishing Map",
    "Plainly Drawn Treasure Map: Level 1",
    "Expertly Drawn Treasure Map: Level 2",
    "Adeptly Drawn Treasure Map: Level 3",
    "Cleverly Drawn Treasure Map: Level 4",
    "Deviously Drawn Treasure Map: Level 5",
    "Ingeniously Drawn Treasure Map: Level 6",
    "Diabolically Drawn Treasure Map: Level 7",
    "Legendarily Drawn Treasure Map: Level 8",
    "Dull Copper Ore Map",
    "Shadow Ore Map",
    "Copper Ore Map",
    "Bronze Ore Map",
    "Gold Ore Map",
    "Agapite Ore Map",
    "Verite Ore Map",
    "Valorite Ore Map",
    "Avarite Ore Map",
    "Dullwood Lumber Map",
    "Shadowwood Lumber Map",
    "Copperwood Lumber Map",
    "Bronzewood Lumber Map",
    "Goldenwood Lumber Map",
    "Rosewood Lumber Map",
    "Verewood Lumber Map",
    "Valewood Lumber Map",
    "Avarwood Lumber Map",
    "Dullhide Skinning Map",
    "Shadowhide Skinning Map",
    "Copperhide Skinning Map",
    "Bronzehide Skinning Map",
    "Goldenhide Skinning Map",
    "Rosehide Skinning Map",
    "Verehide Skinning Map",
    "Valehide Skinning Map",
    "Avarhide Skinning Map"
];

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

You see: A Skill Mastery Orb : 2
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


Rollem sample log:

@thespoons (Kimchi), 84 ⟵ [84]1d100
@Qvothe/I BANKSIT IRL), 66 ⟵ [66]1d100
@Orlik, 84 ⟵ [84]1d100
@Despot (Silkyslim), 1 ⟵ [1]1d100
@imp, 40 ⟵ [40]1d100
@[BB] Kuma, 55 ⟵ [55]1d100
@Lite, 91 ⟵ [91]1d100
@HappyX, 81 ⟵ [81]1d100
@Bashful/Sicario, 39 ⟵ [39]1d100
@Rem (Aerys/Vp), 29 ⟵ [29]1d100
@Weebus, 43 ⟵ [43]1d100
@rjay / Sarious, 82 ⟵ [82]1d100
@El General (Unforgiven), 1 ⟵ [1]1d100
@KoolWip, 74 ⟵ [74]1d100
@GROUCH IS BACK, 86 ⟵ [86]1d100
@ShadowStone, 'Agrias', 88 ⟵ [88]1d100
@ShadowStone, 13 ⟵ [13]1d100
@Ardaric (Jack Churchill), 'clubber', 66 ⟵ [66]1d100
@Ardaric (Jack Churchill), 'decimus', 9 ⟵ [9]1d100

*/