
// we will store the active loot arrays in here for later
let activeLoot;

// Event listener for the journal input button
document.querySelector('#bJournal').addEventListener('click', function(event){
    //get the text from the input field
    let inputData = document.querySelector("#input-journal").value;
    
    let parseRegex = /^You see: ([^:0-9]+\b) ?:? ?(\d+)?$/;

    //This function returns the table want to show
    let dataArray = parse(inputData, parseRegex);

    dataArray = isOnLootTable(dataArray);

    //sort the array by value
    dataArray = bubbleSortXDArray(dataArray, 4)

    activeLoot = dataArray;

    //giving non value items a blank value in the display
    dataArray.forEach(element => {
        if (element[4] < 1000) {
            element[4] = "";
        }
    });

    //This function returns the table want to show
    let childAppend = makeTable(dataArray);

    //add the table to the page
    addTable(childAppend, document.getElementById('output-journal'));
    //hide the journal input field
    document.getElementById('d-input-journal').classList.add("hide");
    //show the player list input field
    document.getElementById('d-input-rollem').classList.remove("hide");
    
});

// Event listener for the rollem button
document.querySelector('#bRollem').addEventListener('click', function(event){

    //get the text from the input field
    let inputData = document.querySelector("#input-rollem").value;

    //Players
    let dataArray = parse(inputData, ", ");
    let playerArray = [];

    //logic to randomly assign who gets what

    //Roll a random number for players between 1-100
    dataArray[0].forEach(element => {
        let roll = Math.floor(Math.random() * 100);
        playerArray.push([element, roll])
    });

    //Sort them by their roll
    playerArray = bubbleSortXDArray(playerArray, 1);

    //we start with highest roller and highest value item
    //we go down the list
    //then we go through the list backwards and reset

     //number of items to distribute
    let itemsLeft = activeLoot.length;
    //loop selector
    let loopA = true;
    let itemIndex = 0;

    while (itemsLeft > 0){
        if (loopA){
            for (let i = 0; i < playerArray.length; i++){
                if (itemsLeft == 0) { break; }

                //each player gets one piece of loot in order of their rolls
                playerArray[i].push(activeLoot[itemIndex][1]);
                
                //Logic to deal with item quantities
                //subtract 1 from item quantity
                activeLoot[itemIndex][2]--;

                //if nothing left then increment array
                if (activeLoot[itemIndex][2] < 1){
                    itemIndex = parseInt(itemIndex) +1;
                    itemsLeft = parseInt(itemsLeft) -1;
                }
            }
            loopA = false;
        }
        else {
            for (let x = playerArray.length-1; x >= 0; x--){
                if (itemsLeft == 0) { break; }

                //each player gets one piece of loot in order of their rolls
                playerArray[x].push(activeLoot[itemIndex][1]);

                //Logic to deal with item quantities
                //subtract 1 from item quantity
                activeLoot[itemIndex][2]--;

                //if nothing left then increment array
                if (activeLoot[itemIndex][2] < 1){
                    itemIndex = parseInt(itemIndex) +1;
                    itemsLeft = parseInt(itemsLeft) -1;
                }
            }
            loopA = true;
        }
    }


    let childAppend = makeTable(playerArray);
    addTable(childAppend, document.getElementById('output-rollem'));
    document.getElementById('d-input-rollem').classList.add("hide");
    
});

//change the table to show instead of the input field
function toggleInputTableVisibility(elementToHide){
    
    elementToHide.classList.add("hide");
}

//takes input of a 2d array to make the table from
function makeTable(dataArray){
    let newTable = document.createElement("table");

    //the next few lines set each word in the input as a separate td
    //it expects array to be a 2 dimensional array
    dataArray.forEach(element => {
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
        debugger;
        if (output[i].includes("Treasure Map") || output[i].includes("treasure map"))
        {
            let tempString = output[i];
            output[i] = tempString.split(/^You see: /);
            output[i].push("");
            output[i].push("");

            console.log(output);
        }
        else {
            let tempString = output[i];
            output[i] = tempString.split(parseRegex);
        }        
    }
    return output;
}

//Checks each item in array to make sure its on the item list and it fixes quantities
function isOnLootTable(array){
    let output = [];


   array.forEach(element => {
        //make sure there is an item
        if (element.length > 1){

            //check to see if the item is on the list
            let toAdd = false;

            //Loops through the item list looking for a match
            itemList.forEach(item =>  {
                if (element[1].toLowerCase() == item[0].toLowerCase() || element[1].toLowerCase() == item[0].toLowerCase() + " ")
                {
                    //if we find a match we want to add it
                    toAdd = true;
                    element.push(item[1]);


                    //any undfined at element[2] should be a 1 instead, they just dont have a quantity when read
                    if (element[2] == undefined || element[2] == NaN || element[2] == ""){
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
        }
   });
   return output;
}

//Adds the finished table to the page
//tbl: The new table element to use
//idToReplace: the existing element where the table should be located
function addTable(tbl, idToReplace)
{
    idToReplace.replaceWith(tbl);
}

//need to modify sort to sort a XD array based on index
function bubbleSortXDArray(arr, index){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1][index]<arr[j][index]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
 }


// Item list definition
//itemList[0] - name
//itemList[1] - value

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


/* Item list that needs REGEX setup to pull from.

^You see: (.+) : (\d+)$   This regex would match line 1
^You see: (.+)$           This regex would match line 2

args[0] = the first () capture and args[1] would be the 2nd () catpure.

Line 1 is for multiple items
Line 2 is for single items.

This raw paste could contain several single items as well such as research notes, they don't stack
thus will never have a " : #" format on them.


TEST CASES:
______________________________________

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
You see: Copper Ore Map
You see: Adeptly Drawn Fishing Map
You see: Plainly Drawn Treasure Map: Level 1

Jim, Bob, Sue, Lemy, Jake, Fox

*/
