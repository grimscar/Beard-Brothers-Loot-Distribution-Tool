
// Event listener for the journal input button
document.querySelector('#bJournal').addEventListener('click', function(event){
    //get the text from the input field
    let inputData = document.querySelector("#input-journal").value;
    
    //This function returns the table want to show
    let childAppend = makeTable(inputData);
    
    addTable(childAppend);
    toggleInputTableVisibility();
    
});

document2.querySelector('#bRollem').addEventListener('click', function(event){
    //get the text from the input field
    let inputData2 = document2.querySelector("#output-rollem").value;
    
    //This function returns the table want to show
    let childAppend2 = makeTable(inputData2);
    
    addTable(childAppend2);
    toggleInputTableVisibility();
    
});

//change the table to show instead of the input field
function toggleInputTableVisibility(){
    
    //hide the input and button while showing the table
    //document.getElementById('input-journal').classList.add("hide");
    //document.getElementById('bJournal').classList.add("hide");
    document.getElementById('d-input-journal').classList.add("hide");
}

function toggleInputTableVisibility(){
    
    //hide the input and button while showing the table
    //document.getElementById('input-journal').classList.add("hide");
    //document.getElementById('bJournal').classList.add("hide");
    document.getElementById('d-output-rollem').classList.add("hide");
}

//takes input of a string and returns a table based on that
function makeTable(inputData){
    let newTable = document.createElement("table");
    // https://stackoverflow.com/questions/14643617/create-table-using-javascript
    
    //gets the array we are going to translate into the table
    let array = parse(inputData);

    array = isOnLootTable(array);

    //the next few lines set each word in the input as a separate td
    //it expects array to be a 2 dimensional array
    array.forEach(element => {

        //check that its on the table before adding the line
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

function makeTable(inputData2){
    let newTable2 = document2.createElement("table");
    // https://stackoverflow.com/questions/14643617/create-table-using-javascript
    
    //gets the array we are going to translate into the table
    let array2 = parse(inputData2);

    array2 = isOnLootTable(array2);

    //the next few lines set each word in the input as a separate td
    //it expects array to be a 2 dimensional array
    array2.forEach(element2 => {

        //check that its on the table before adding the line
        {
        
            newTable2.appendChild(document2.createElement("tr"));
            element2.forEach(el2 => {
                    let cell2 = document2.createElement("td");
                    let cellText2 = document2.createTextNode(el2);
                    cell.appendChild(cellText2);
                    if (cell2.textContent.length > 0){
                        newTable2.appendChild(cell2);
                    }
            })
        }
    });

    return newTable2;
}

//takes in a string and returns a 2d array based on parsing out each line as a separate row
function parse(inputData){
    //what we are returning
    let output = [];
    
    //what we are parsing against
    let parseRegex = /^You see: ([^:0-9]+\b) ?:? ?(\d+)?$/;

    // make the initial array by spliting each line
    output = inputData.split('\n');

    //go through the array and split each element into its own array based on p
    for (let i = 0; i < output.length; i++){
        let tempString = output[i];
        output[i] = tempString.split(parseRegex);
    }
    return output;
}

//takes in a string and returns a 2d array based on parsing out each line as a separate row
function parse2(inputData2){
    //what we are returning
    let output2 = [];
    
    //The regex for the Rollem
    // First () Captures Name second () captures their roll. They need to show from high roll to lowest
    let parseRollemRegex = /@(.+), \d+ ⟵ [(\d+)]1d100/;

    // make the initial array by spliting each line
    output2 = inputData2.split('\n');

    //go through the array and split each element into its own array based on p
    for (let i = 0; i < output2.length; i++){
        let tempString2 = output2[i];
        output2[i] = tempString2.split(parseRollemRegex);
    }
    return output2;
}

//Checks each item in array to make sure its on the item list and it fixes quantities
function isOnLootTable(array){
    let output = [];

   array.forEach(element => {
        //check to see if the item is on the list

        //had issue with regex capturing extra whitespace
        //put this in to clear up any errant whitespace
            itemList.forEach(item =>  {
                if (element[1] == item || element[1] == item + " ")
                {
                    if (element[2] == undefined)
                        element[2] = 1;
                    output.push(element);
                }
        });
   });
   return output;
}

//Adds the finished table to the page
function addTable(tbl)
{
    document.getElementById('output-journal').replaceWith(tbl);
}


// Item list definition

var itemList = [
    ["A Skill Mastery Orb",45000],
["Mastercrafting Diagram",60000],
["Research Materials",45000],
["Aegis Keep Cloth",12000],
["Dark Crimson Cloth",15000],
["Dark Forest Cloth",23000],
["Dark Salmon Cloth",18000],
["Darkmire Temple Cloth",12000],
["Metallic Orange Cloth",20000],
["Metallic Umber Cloth",20000],
["Mount Petram Cloth",12000],
["Powder Blush Cloth",45000],
["Powder Orchid Cloth",45000],
["Powder Peach Cloth",45000],
["Air Aspect Extract",10000],
["Artisan Aspect Extract",11000],
["Command Aspect Extract",58000],
["Earth Aspect Extract",13000],
["Eldritch Aspect Extract",45000],
["Fire Aspect Extract",15000],
["Fortune Aspect Extract",42000],
["Lyric Aspect Extract",45000],
["Poison Aspect Extract",10000],
["Shadow Aspect Extract",15000],
["Void Aspect Extract",13000],
["Water Aspect Extract",10000],
["Air Aspect Core",3000],
["Artisan Aspect Core",5000],
["Command Aspect Core",70000],
["Earth Aspect Core",5000],
["Eldritch Aspect Core",25000],
["Fire Aspect Core",10000],
["Fortune Aspect Core",24000],
["Lyric Aspect Core",32000],
["Poison Aspect Core",3000],
["Shadow Aspect Core",10000],
["Void Aspect Core",5000],
["Water Aspect Core",5000],
["Air Phylactery",3000],
["Artisan Phylactery",5000],
["Command Phylactery",15000],
["Earth Phylactery",3000],
["Eldritch Phylactery",9000],
["Fire Phylactery",5000],
["Fortune Phylactery",9000],
["Lyric Phylactery",9000],
["Poison Phylactery",3000],
["Shadow Phylactery",5000],
["Void Phylactery",3000],
["Water Phylactery",3000],
["Alchemy Skill Mastery Scroll",16],
["Animal Lore Skill Mastery Scroll",60000],
["Animal Taming Skill Mastery Scroll",65000],
["Arms Lore Skill Mastery Scroll",17],
["Begging Skill Mastery Scroll",18],
["Blacksmithy Skill Mastery Scroll",19],
["Camping Skill Mastery Scroll",20],
["Carpentry Skill Mastery Scroll",21],
["Cartography Skill Mastery Scroll",22],
["Cooking Skill Mastery Scroll",23],
["discordance skill mastery scroll",24],
["fishing skill mastery scroll",25],
["Forensic Eval Skill Mastery Scroll",26],
["Herding Skill Mastery Scroll",27],
["Inscription Skill Mastery Scroll",13000],
["Item ID Skill Mastery Scroll",28],
["Lockpicking Skill Mastery Scroll",15000],
["Lumberjacking Skill Mastery Scroll",29],
["Mining Skill Mastery Scroll",30],
["Musicianship Skill Mastery Scroll",35000],
["Peacemaking Skill Mastery Scroll",25000],
["Poisoning Skill Mastery Scroll",31],
["Provocation Skill Mastery Scroll",32],
["Remove Trap Skill Mastery Scroll",15000],
["Spirit Speak Skill Mastery Scroll",20000],
["Stealth Skill Mastery Scroll",15000],
["Tailoring Skill Mastery Scroll",33],
["Taste Id Skill Mastery Scroll",34],
["Tinkering Skill Mastery Scroll",35],
["Tracking Skill Mastery Scroll",36],
["Veterinary Skill Mastery Scroll",37],
["Plainly Drawn Fishing Map",1],
["Expertly Drawn Fishing Map",2],
["Adeptly Drawn Fishing Map",3],
["Cleverly Drawn Fishing Map",4],
["Deviously Drawn Fishing Map",5],
["Ingeniously Drawn Fishing Map",6],
["Diabolically Drawn Fishing Map",7],
["Legendarily Drawn Fishing Map",8],
["Plainly Drawn Treasure Map: Level 1",6000],
["Expertly Drawn Treasure Map: Level 2",12000],
["Adeptly Drawn Treasure Map: Level 3",18000],
["Cleverly Drawn Treasure Map: Level 4",24000],
["Deviously Drawn Treasure Map: Level 5",30000],
["Ingeniously Drawn Treasure Map: Level 6",36000],
["Diabolically Drawn Treasure Map: Level 7",42000],
["Legendarily Drawn Treasure Map: Level 8",48000],
["Dull Copper Ore Map",1],
["Shadow Ore Map",1],
["Copper Ore Map",1],
["Bronze Ore Map",1],
["Gold Ore Map",1],
["Agapite Ore Map",1],
["Verite Ore Map",1],
["Valorite Ore Map",1],
["Avarite Ore Map",1],
["Dullwood Lumber Map",9],
["Shadowwood Lumber Map",10],
["Copperwood Lumber Map",11],
["Bronzewood Lumber Map",12],
["Goldenwood Lumber Map",3000],
["Rosewood Lumber Map",6000],
["Verewood Lumber Map",9000],
["Valewood Lumber Map",12000],
["Avarwood Lumber Map",15000],
["Dullhide Skinning Map",12],
["Shadowhide Skinning Map",13],
["Copperhide Skinning Map",14],
["Bronzehide Skinning Map",15],
["Goldenhide Skinning Map",3000],
["Rosehide Skinning Map",6000],
["Verehide Skinning Map",9000],
["Valehide Skinning Map",12000],
["Avarhide Skinning Map",15000]
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
*/