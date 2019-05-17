# Project Goals

Paste raw data from journal.txt in and prase the items and quantities from it. For example below

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

-------------------------------------------------------------------------------

In addition we need to paste in loot rolls from Discord which as examples are below.

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

What we ned to do is grab the Name of the Roller and their Roll. We have the added complexity if an officer rolls for another player. 


@rjay / Sarious, 82 ⟵ [82]1d100                         <-- This is a player rolling for themselves
@Ardaric (Jack Churchill), 'decimus', 9 ⟵ [9]1d100      <-- This is an officer rolling for someone else. In this example Ardaric (Jack Churchill) rolled for Deciums

-------------------------------------------------------------------------------

The GUI Webapp

Goal would be to have two fields a user can dump this into and hit a button that will then display The loot and how many of each item we have. So it produces a loot table basically.

ItemList.json resources
/*
Reference Material
http://stewd.io/javascript/06-1-databases.html
https://www.youtube.com/watch?v=iiADhChRriM

This area here contains all of our items in arrays of Type:Item
*/