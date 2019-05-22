# Creating your Journal.txt file

http://forums.uooutlands.com/index.php?threads/how-to-record-your-journal.533/

Follow that guide on how to enable logging which currently only works with the Steam Client.
ClassicUO will have this ability soon, I'll try to keep this updated once it goes live.

After you have your journal.txt file export setup. Gather all the loot to be handed out in a central
easy to access area. Left click each item 1 time so it generates the line "You see: Fire Aspect Core"
as example in your journal. Once you have clicked each item go open the journal.txt file and you're
ready to move on.

Go to the loot tool found at https://grimscar.github.io/Beard-Brothers-Loot-Distribution-Tool/ and you
will simply paste all the data from the text file and click on the import journal button.

This will display a table as in example below:

| Item Name | Quantity | Value |
|---|---|---|
| Fire Aspect Core | 3 | 3000 |
| Fire Aspect Extract | 1 | 10000 |

Below a new field will appear and this is where you input each member that should be rolling for loot.
The proper syntax it will be looking for is:

| Name1, Name2, Name3 |
|---|

You can have names as long as you want and with spaces too:

| Name One, Name Two, Name Three |
|---|

A comma then a space is the trigger to split names apart so bear that in mind. Once you have your whole
member list typed in click on the Handout the loots button to let the magic happen!

Each member will have a 1d100 randomly assigned to them. They'll be sorted from highest roll to lowest
then loot will be distributed from highest value to lowest value in snake fashion.

So for example if Bob Tom and Sue rolled.

| Bob | 100 |
|---|---|
| Tom | 50 |
| Sue | 33 |

Bob would get item1, Tom item 2, Sue Item 3 and 4, Tom item 5, Bob Item 6 and 7 ect...

If you see any errors there is a error submit feedback button at the bottom of the app please let us
know how we can improve the tool!
