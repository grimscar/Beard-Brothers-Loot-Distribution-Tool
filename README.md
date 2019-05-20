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

# Loot Handling

Loot will be ordered highest value to lowest value and it will show up idealing in this order:

| Value | Item Name | Quantity |
|---|---|---|
| An item | 25000 | 5 |
| A cheaper item | 2500 | 2 |
| the cheapest item | 1000 | 13 |

People will be entered manually with this format:

Name1, Name2, Name3, Name4.

They will get a random number assigned to them and rank highest to lowest example:

|Dice Example|
|---|
| Name3, 88 |
| Name2, 84 |
| Name4, 15 |
| Name1, 1 |

Then loot is going to be handed out giving out all the highest valued items first.
Loot is given round-robin fashion till all of the loot is gone.

| Order Example|
|---|
| Item 1 > Name3 |
| Item 2 > Name2 |
| Item 3 > Name4 |
| Item 4 > Name1 |
| Item 5 > Name1 |
Item 6 > Name4
Item 7 > Name2
Item 8 > Name3
Item 9 > Name3
ect.....

In the example we had above Item1 - Item5 would all be "An Item" because those 5 are the highest value. Item 6 and Item 7 would be the "A cheaper item" then the last 13 items would be "The Cheapest Item"

Though for items of value < 1001 those items will be randomly handed out (they don't follow the highest to lowest value rule) **This is just a feature to build into

# For Regex


Login confirm on UO Outlands
Welcome to Ultima Online!
Welcome Grims!
Server requested to negotiate features.
You have accepted the request, some features may be unavailable.
Sanjeev: all release
You see: Riva the mage
You see: s n o w
DELPHI: Triggered
You see: DELPHI
You see: Ingmar the banker
a llama: (bonded)
You see: a llama
You see: Nello De Ntocca
Necro: [Recruit, RAGE]
You see: Necro
You see: Edna the Town Crier
You see: Liadan the scribe
Alex Trebek: [Recruit, gLc]
You see: Alex Trebek
You see: PicSix
Gxnqe: Triggered
You see: Lord Gxnqe
a horse: (tame)
You see: a horse
Sanjeev: [Recruit, N-C]
You see: Sanjeev
You see: Taoist
You see: TRipsixK
Hot Mess: Animal Affinity
You see: Hot Mess
a nightmare: (bonded)
You see: a nightmare
B: (bonded)
You see: B
W: (bonded)
You see: W
You see: Uber Driver
a horse: (tame)
You see: a horse
a: (bonded)
You see: a
Hevonen: (tame)
You see: Hevonen
You see: Jenna Marie
a hind: (tame)
You see: a hind
a great hart: (tame)
You see: a great hart
You see: Garrett the mage
You see: Lil Dex
You see: Simon Phoenix
a great hart: (tame)
You see: a great hart
a cave bear: (tame)
You see: a cave bear
a great hart: (tame)
You see: a great hart
zzzz: (bonded)
You see: zzzz
a cave bear: (tame)
You see: a cave bear
a great hart: (tame)
You see: a great hart
a cave bear: (tame)
You see: a cave bear
a great hart: (tame)
You see: a great hart
a great hart: (tame)
You see: a great hart
NiceGank: (tame)
You see: NiceGank
You see: Tamma the banker
Ornstein: [Wanderer, CFC]
You see: Ornstein
Casty: (bonded)
You see: Casty
Jumpy: (bonded)
You see: Jumpy
Hoppy: (bonded)
You see: Hoppy
E: (bonded)
You see: E
H: (bonded)
You see: H
a familiar: (bonded)
You see: a familiar
a familiar: (bonded)
You see: a familiar
a familiar: (bonded)
You see: a familiar
a rock guar: (bonded)
You see: a rock guar
O: (bonded)
You see: O
a familiar: (bonded)
You see: a familiar
NiuBi: (bonded)
You see: NiuBi
ChaoDiao: (bonded)
You see: ChaoDiao
You see: Xochitl
a pack llama: (tame)
You see: a pack llama
You see: Waylin
You see: Killik
d: (tame)
You see: d
You see: Alodie the banker
You see: Jett Black
a pack llama: (tame)
You see: a pack llama
Taoist: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
You see: Tamma the banker
Grims: Items: 108/125
Grims: Total Weight: 5,424
You see: bag
You see: (32 items, 134 stones)
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: gold coin : 5969
You see: exceptional shadow iron platemail chest
You see: [mastercrafted by Walmart]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
You see: exceptional shadow iron platemail gloves
You see: [mastercrafted by Walmart]
Taoist: all release
Nello De Ntocca: *focuses aggression*
You see: a dirty thief
You see: Nello De Ntocca
You see: Fortune Aspect Extract
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
You see: Lyric Aspect Extract
You see: Eldritch Aspect Core : 2
You see: Eldritch Aspect Core : 2
You see: Void Aspect Core
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
You see: arcane essence : 544
Ornstein: [Wanderer, CFC]
You see: Ornstein
You see: research materials
You see: (double-click to research)
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Water Aspect Core
You see: Fire Aspect Core
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: carpentry skill mastery scroll
You see: (used to increase a player's skill cap for a skill by 1)
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: item id skill mastery scroll
You see: (used to increase a player's skill cap for a skill by 1)
You see: Famaziine
You see: Nello De Ntocca
You see: an arcane scroll : 8
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: recall scroll : 3
Sanjeev: all release
You see: dark rust cloth
You see: (hue 2807)
Ornstein: [Wanderer, CFC]
You see: Ornstein
Ornstein: vendor buy bank guards
You see: XeroLocke
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: all release
AshPokemons: Domesticator
AshPokemons: [NBK]
You see: AshPokemons
You see: Nello De Ntocca
You see: a dirty thief
You see: XeroLocke
Lekwid: [Veteran, RAGE]
You see: Lekwid
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Lekwid: bank
an earth elemental: (summoned)
You see: an earth elemental
Armuz: [Cosechadores de Almas, CDA]
You see: Armuz
Ingmar: Your gold balance is 137,285.
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
You see: Kelsier
Taoist: all release
Nello De Ntocca: *focuses aggression*
Kelsier: Por Ort Grav [Lightning]
an earth elemental: (summoned)
You see: an earth elemental
You see: Alfern Augusta
Sanjeev: all release
You see: Nello De Ntocca
You see: Lana Rhoades
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
You see: Alfern Augusta
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
You see: XeroLocke
Nello De Ntocca: *focuses aggression*
Baba Yetu: [NVOS, DoK][C]
You see: Baba Yetu
an earth elemental: (summoned)
You see: an earth elemental
Baba Yetu: [NVOS, DoK][C]
You see: Baba Yetu
You see: Calaena
Baba Yetu: [NVOS, DoK][C]
You see: Baba Yetu
You see: Nello De Ntocca
Taoist: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
You see: Calaena
Sanjeev: all release
You see: Calaena
You see: Kurt Jernmann
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
You see: XeroLocke
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: all release
Woah Gaming: Transmuter
You see: Lord Woah Gaming
Woah Gaming: vendor buy the bank guards so we can redcu and recsu away so i can stable my horse in Fallax veramocor malum
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Woah Gaming: Transmuter
You see: Lord Woah Gaming
Sanjeev: all release
You see: Lana Rhoades
Nello De Ntocca: *focuses aggression*
Lana Rhoades: bank
Taoist: all release
You see: Nello De Ntocca
Sanjeev: all release
Ingmar: Your gold balance is 84,130.
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
You see: a dirty thief
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: a dirty thief
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
Lana Rhoades: 2'
You see: Nello De Ntocca
Sanjeev: all release
Lana Rhoades: Kal Ort Por [Recall]
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: XeroLocke
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Sanjeev: all release
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
Taoist: all release
Sanjeev: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Instrument Kaj
Lamorak: Monster Hunter Initiate
You see: Lord Lamorak
Nello De Ntocca: *focuses aggression*
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Xorakk
Sanjeev: all release
a mystic llama has completed the achievement: Prospector (Basic).
You see: XeroLocke
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: a dirty thief
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
We Frasson: Legendary Scribe
You see: We Frasson
Sanjeev: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Ingmar: I have placed a check in your bank box for the amount of 40,000
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
Nello De Ntocca: *focuses aggression*
You see: XeroLocke
Lamorak: Monster Hunter Initiate
You see: Lord Lamorak
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Zugug
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
The world will save in 15 seconds.
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
The world is saving, please wait.
World save complete. The entire process took 3.1 seconds.
You see: Nello De Ntocca
Sanjeev: all release
You see: Veronika Rodrig
Kelsier: Kal Ort Por [Recall]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Lamorak: Monster Hunter Initiate
You see: Lord Lamorak
You see: a dirty thief
Taoist: all release
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Lamorak: Monster Hunter Initiate
You see: Lord Lamorak
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
You see: XeroLocke
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Kuma: [Beard Brother, BB]
You see: Kuma
Ingmar: Your gold balance is 602,309.
Taoist: all release
Dirt Wolf: Treasure Hunter
Dirt Wolf: [Keep Digging, SOF]
You see: Dirt Wolf
You see: Nordramien Knox
Dirt Wolf: Kal Ort Por [Recall]
Ingmar: I have placed a check in your bank box for the amount of 600,000
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Sanjeev: all release
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
You see: Nello De Ntocca
You see: a dirty thief
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
You see: Garz The Tamer
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Aldery: Landowner
You see: Aldery
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Ingmar: Your gold balance is 322,573.
Taoist: all release
Ingmar: I have placed a check in your bank box for the amount of 76,000
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Instrument Kaj
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
Ingmar: Your gold balance is 114,107.
an earth elemental: (summoned)
You see: an earth elemental
You see: a dirty thief
Sanjeev: all release
You see: XeroLocke
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Kelsier
Taoist: all release
Sanjeev: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Headson: [Commander, PAX]
You see: Headson
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Ingmar: Your gold balance is 130,529.
Taoist: all release
You see: a dirty thief
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: a dirty thief
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Alodie: I have placed a check in your bank box for the amount of 350,000
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Alodie: I have placed a check in your bank box for the amount of 150,000
You see: StimpToo
a pack llama: (tame)
You see: a pack llama
You see: a dirty thief
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
You see: Instrument Kaj
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Instrument Kaj
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: a dirty thief
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: all release
Lekwid: [Veteran, RAGE]
You see: Lekwid
You see: XeroLocke
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Double Donger: [Non-Consensual, N-C]
You see: Double Donger
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Sanjeev: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
You see: Nello De Ntocca
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Garz The Tamer
Nello De Ntocca: *focuses aggression*
Double Donger: [Non-Consensual, N-C]
You see: Double Donger
Taoist: all release
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
You see: Veronika Rodrig
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
You see: Nello De Ntocca
Double Donger: [Non-Consensual, N-C]
You see: Double Donger
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Double Donger: Bank
You see: a dirty thief
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Taoist: all release
Felgar: Tradesman Initiate
You see: Felgar
You see: Garz The Tamer
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Double Donger: [Non-Consensual, N-C]
You see: Double Donger
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
You see: a dirty thief
Taoist: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
You see: Garz The Tamer
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Ingmar: Your gold balance is 130,529.
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: a dirty thief
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
It begins to rain.
an earth elemental: (summoned)
You see: an earth elemental
Kelsier: Kal Ort Por [Recall]
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: all release
Ingmar: Your gold balance is 322,573.
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
You see: L U C H A
Nello De Ntocca: *focuses aggression*
Taoist: all release
Evil Dead: Landowner
Evil Dead: [End of Days, SOF]
You see: Evil Dead
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Nello De Ntocca: *focuses aggression*
You see: L U C H A
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Kelsier
You see: Kelsier
You see: Nello De Ntocca
You see: Veronika Rodrig
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: XeroLocke
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
The world will save in 15 seconds.
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: XeroLocke
You see: Nello De Ntocca
Sanjeev: all release
The world is saving, please wait.
World save complete. The entire process took 3.1 seconds.
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Baba Yetu: [NVOS, DoK][C]
You see: Baba Yetu
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Baba Yetu: [NVOS, DoK][C]
You see: Baba Yetu
Taoist: all release
You see: Henrik Sexington
Ougguloli: [Recruit, 1CE]
You see: Ougguloli
Nello De Ntocca: *focuses aggression*
Scum Scribbler: [Double Apron, dA]
You see: Scum Scribbler
an earth elemental: (summoned)
You see: an earth elemental
Abigail Whistler: [Silver, NAS]
You see: Abigail Whistler
Baba Yetu: [NVOS, DoK][C]
You see: Baba Yetu
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
You see: a dirty thief
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
You see: Nello De Ntocca
Special Jack: [Private, Syn]
You see: Special Jack
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
Taoist: all release
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
You see: Honey Badger
Honey Badger: bank
[Guild][ShadowStone]: Phenoxx up
You see: Nello De Ntocca
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Henrik Sexington
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Honey Badger
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Taoist: all release
You see: Honey Badger
You see: a dirty thief
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
Taoist: all release
Sanjeev: all release
You see: XeroLocke
You see: Nello De Ntocca
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
You see: Kelsier
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: Undelicious
You see: a dirty thief
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
Taoist: all release
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
You see: Nello De Ntocca
Taoist: all release
You see: Nello De Ntocca
Alex Trebek: [Recruit, gLc]
You see: Alex Trebek
Mauhulakh has completed the achievement: Triggered (Advanced).
You see: Undelicious
Sanjeev: all release
Ramza Beoulve has completed the achievement: 'Guardian of The Mausoleum (Basic)'.
Your guild's prestige has increased by 0.08
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
AshPokemons: Domesticator
AshPokemons: [NBK]
You see: AshPokemons
You see: a dirty thief
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Ingmar: Your gold balance is 137,285.
[Guild][ShadowStone]: Gratz!!
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Your guild's prestige has increased by 0.01
You see: Nello De Ntocca
Dyara: Top Eventsman
Dyara: [LoD]
You see: Lady Dyara
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
Dwarin: Monster Hunter Initiate
Dwarin: [Knight Sergeant, Sir.]
You see: Dwarin
Xurzeria: (bonded)
You see: Xurzeria
a water drake: (bonded)
You see: a water drake
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
Dwarin: Monster Hunter Initiate
Dwarin: [Knight Sergeant, Sir.]
You see: Dwarin
Xurzeria: (bonded)
You see: Xurzeria
a water drake: (bonded)
You see: a water drake
You see: Nello De Ntocca
Liadan: Shhhh!
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
a water drake: (bonded)
You see: a water drake
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Xurzeria: (bonded)
You see: Xurzeria
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
Sanjeev: all release
You see: Nello De Ntocca
You see: a dirty thief
Nello De Ntocca: *focuses aggression*
You see: PIPER
Nello De Ntocca: *focuses aggression*
You see: PIPER
Jingo has completed the achievement: Savant (Basic).
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Undelicious
You see: PIPER
You see: XeroLocke
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: ClunkyDaMule
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Luminous: Legendary Tinker
You see: Luminous
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
You see: Undelicious
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Luminous: Legendary Tinker
You see: Luminous
You see: Foxy Bloodknife
Nello De Ntocca: *focuses aggression*
Taoist: all release
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
[Alliance][ShadowStone]: [BB] BODY BLOCKED
You see: XeroLocke
You see: a dirty thief
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: XeroLocke
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
Luminous: Legendary Tinker
You see: Luminous
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Ingmar: Your gold balance is 317,573.
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: all release
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Foxy Bloodknife
You see: a dirty thief
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Foxy Bloodknife
You see: Nello De Ntocca
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Nello De Ntocca: *focuses aggression*
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
You see: a dirty thief
The world will save in 15 seconds.
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
Alodie: Your gold balance is 36,193.
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
Syfer: (bonded)
You see: Syfer
BigBullocks: (bonded)
You see: BigBullocks
ChinoXL: [Private, Syn]
You see: ChinoXL
You see: Kelsier
Ingmar: Your gold balance is 130,529.
The world is saving, please wait.
World save complete. The entire process took 3.1 seconds.
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
Sanjeev: all release
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Scum Scribbler: [Double Apron, dA]
You see: Scum Scribbler
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Taoist: all release
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
Sanjeev: all release
You see: Waylin
a pack llama: (tame)
You see: a pack llama
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Sanjeev: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
You see: Nello De Ntocca
[Guild][Sicario]: INFERNO MINI EVERYONE
[Guild][Sicario]: JUST UP
Taoist: all release
[Alliance][ShadowStone]: [BB] INFERNO MINI
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
[Alliance][ShadowStone]: [BB] INFERNO MINI
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
[Alliance][Weenie]: [BB] dont engage Oderous Obungu, VIP guild. hes with us
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
Nello De Ntocca: *focuses aggression*
[Alliance][Weenie]: [BB] dont engage Oderous Obungu, VIP guild. hes with us
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Sanjeev: all release
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: a dirty thief
Sanjeev: all release
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Alex Trebek: [Recruit, gLc]
You see: Alex Trebek
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
You see: Valeska
Samy: (bonded)
You see: Samy
Poimandres: Monster Hunter Initiate
You see: Poimandres
You see: Badass
Ane: (bonded)
You see: Ane
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Tamma: Your gold balance is 5,892.
an earth elemental: (summoned)
You see: an earth elemental
You see: Badass
You see: XeroLocke
You see: a dirty thief
Sanjeev: all release
Scum Scribbler: [Double Apron, dA]
You see: Scum Scribbler
Tamma: I have placed a check in your bank box for the amount of 120,000
Taoist: all release
Killion: [Veteran, gLc]
You see: Killion
Tamma: Your gold balance is 548,412.
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Killion: [Veteran, gLc]
You see: Killion
an earth elemental: (summoned)
You see: an earth elemental
You see: Valeska
Sanjeev: all release
You see: Nello De Ntocca
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Taoist: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Bretta
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Tam al'Thor: [Officer, Path]
You see: Tam al'Thor
Taoist: all release
Nello De Ntocca: *focuses aggression*
You see: Nimious
You see: Nello De Ntocca
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Thalamencephalon: [It Burns When I PvP, PwN]
You see: Thalamencephalon
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
Tam al'Thor: [Officer, Path]
You see: Tam al'Thor
Sanjeev: all release
[Alliance][Instinct]: [BB] Gala lod i think inc tamer
Tam al'Thor: [Officer, Path]
You see: Tam al'Thor
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
You see: a dirty thief
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Enkil Kemet: [Officer, RAGE]
You see: Enkil Kemet
an earth elemental: (summoned)
You see: an earth elemental
Ominous: (tame)
You see: Ominous
Sanjeev: all release
KamA The Poor: [., ToN]
You see: KamA The Poor
[Alliance][Trap Queen]: [SUP] trap queen louie and big d and trippy otw
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Enkil Kemet: [Officer, RAGE]
You see: Enkil Kemet
Ominous: (tame)
You see: Ominous
Edna: I feel sorry for thee. Here is some gold.
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
KamA The Poor: [., ToN]
You see: KamA The Poor
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Taoist: all release
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Tam al'Thor: [Officer, Path]
You see: Tam al'Thor
Tam al'Thor: [Officer, Path]
You see: Tam al'Thor
KamA The Poor: [., ToN]
You see: KamA The Poor
Nello De Ntocca: *focuses aggression*
Tam al'Thor: [Officer, Path]
You see: Tam al'Thor
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
Joao de Prata: Monster Hunter Initiate
Joao de Prata: [Sepultura, RiP]
You see: Joao de Prata
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Sorceress Razell
an earth elemental: (summoned)
You see: an earth elemental
KamA The Poor: [., ToN]
You see: KamA The Poor
Gxnqe: Triggered
You see: Lord Gxnqe
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
Gxnqe: Triggered
You see: Lord Gxnqe
Nello De Ntocca: *focuses aggression*
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Lana Rhoades
Lana Rhoades: bank
You see: Nello De Ntocca
KamA The Poor: [., ToN]
You see: KamA The Poor
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Riva: I feel sorry for thee. Here is some gold.
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
You see: Nello De Ntocca
Taoist: all release
Riva: I have already given gold to thee today!
Joao de Prata: Monster Hunter Initiate
Joao de Prata: [Sepultura, RiP]
You see: Joao de Prata
an earth elemental: (summoned)
You see: an earth elemental
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
Riva: I have already given gold to thee today!
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: a dirty thief
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Taoist: all release
Joao de Prata: Monster Hunter Initiate
Joao de Prata: [Sepultura, RiP]
You see: Joao de Prata
Sanjeev: all release
You see: Nello De Ntocca
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Joao de Prata: Monster Hunter Initiate
Joao de Prata: [Sepultura, RiP]
You see: Joao de Prata
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
[Alliance][ShadowStone]: [BB] LOD here
You see: a dirty thief
You see: Garrett the mage
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Taoist: all release
Nello De Ntocca: *focuses aggression*
dr.Dre: [Acolyte, EMP]
You see: dr.Dre
an earth elemental: (summoned)
You see: an earth elemental
You see: Liadan the scribe
You see: Nello De Ntocca
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
[Alliance][Sheebus]: [BB] whoa gaming on boss
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Snooter
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
dr.Dre: [Acolyte, EMP]
You see: dr.Dre
dr.Dre: [Acolyte, EMP]
You see: dr.Dre
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
Hairless Maiden: Domesticator
Hairless Maiden: [Diamond, NAS]
You see: Hairless Maiden
LaWisp: (bonded)
You see: LaWisp
Puff: (bonded)
You see: Puff
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: XeroLocke
Abigail Whistler: [Silver, NAS]
You see: Abigail Whistler
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
The world will save in 15 seconds.
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Varbu'Gnarg
Taoist: all release
[Alliance][ShadowStone]: [BB] Mini going downin 30 seconds
Sanjeev: all release
The world is saving, please wait.
World save complete. The entire process took 3.1 seconds.
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Killion: [Veteran, gLc]
You see: Killion
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
[Alliance][ShadowStone]: [BB] Blue in here
Sanjeev: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
You see: a dirty thief
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
dr.Dre: [Acolyte, EMP]
You see: dr.Dre
Sanjeev: all release
You see: Nello De Ntocca
You see: Feeblemind
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Your guild's prestige has increased by 3
Sanjeev: all release
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Armuz: [Cosechadores de Almas, CDA]
You see: Armuz
[Alliance][Sheebus]: [BB] im an idiot
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: XeroLocke
Taoist: all release
You see: Nello De Ntocca
Kru'gugl: [Grunt, Orcs]
You see: Kru'gugl
Sanjeev: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
You see: Varbu'Gnarg
You see: Nello De Ntocca
[Alliance][ShadowStone]: [BB] nice guys
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Sanjeev: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Nello De Ntocca: *focuses aggression*
[Guild][Instinct]: LOD INC
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
DELPHI: *hiking to destination*
DELPHI: *hiking to destination*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
DELPHI: *hiking to destination*
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
DELPHI: *hiking to destination*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
DELPHI: *hiking to destination*
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: a dirty thief
[Alliance][Instinct]: [BB] pample
Sanjeev: all release
[Alliance][Instinct]: [BB] I'm good
[Alliance][Instinct]: [BB] :)
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Lana Rhoades
You see: Nello De Ntocca
[Guild][Mako]: mako
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Sanjeev: all release
You see: a dirty thief
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Hot Mess has completed the achievement: Zoology (Intermediate).
[Alliance][ShadowStone]: [BB] I MADE IT OUT
You see: a dirty thief
[Alliance][Sheebus]: [BB] safe
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: Varbu'Gnarg
[Guild][Janix]: out
Sanjeev: all release
[Alliance][Instinct]: [BB] I'm invis
You see: Nello De Ntocca
You see: a dirty thief
[Alliance][ShadowStone]: [BB] Loot in top-left bag in GH
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
[Guild][Mako]: cant leave for 56 min
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
[Alliance][We Trippy Mane]: [SUP] gj
[Guild][Mako]: 5 min
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
an earth elemental: (summoned)
You see: an earth elemental
You see: a dirty thief
[Guild][Mako]: trade me
[Guild][Sheebus]: you safe?
Nello De Ntocca: *focuses aggression*
You see: Lana Rhoades
[Alliance][Instinct]: [BB] soon as I can get out I'm off
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Taoist: all release
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
[Guild][Instinct]: we get token?
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
[Guild][Sammaii]: wish i coudl have helped
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
[Guild][Mako]: k kuma got loot
You see: Nello De Ntocca
You see: Lana Rhoades
[Guild][Sicario]: yeah got the token
Nello De Ntocca: *focuses aggression*
[Guild][Instinct]: fuck yea
You see: Nello De Ntocca
You see: XeroLocke
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Riva: You have nothing I would be interested in.
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Riva: You have nothing I would be interested in.
Nello De Ntocca: *focuses aggression*
Garrett: You have nothing I would be interested in.
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
[Guild][Mako]: ya im fine, ill be back soon
You see: a dirty thief
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: all release
You see: Nello De Ntocca
You see: XeroLocke
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
EZslay: [my dog has huge balls, Gent]
You see: EZslay
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Druss Kulle
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
You see: Jett Black
You see: XeroLocke
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Generic Miner
Nordramien Knox: bank
Taoist: all release
Nello De Ntocca: *focuses aggression*
You see: Lana Rhoades
Lana Rhoades: bank
You see: Waylin
a pack llama: (tame)
You see: a pack llama
You see: Nello De Ntocca
Lana Rhoades: Kal Ort Por [Recall]
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: Nello De Ntocca
Magoti: [Sandals with Socks, Gent]
You see: Magoti
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
You see: Bear Trap Tim
You see: Nello De Ntocca
b: (tame)
You see: b
d: (tame)
You see: d
a: (tame)
You see: a
e: (tame)
You see: e
c: (tame)
You see: c
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
c: (tame)
You see: c
Yrsa Odinsdottir: [Unsalted, VKNG]
You see: Yrsa Odinsdottir
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: a dirty thief
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Castro: [Private, Syn]
You see: Castro
Nello De Ntocca: *focuses aggression*
The world will save in 15 seconds.
Taoist: all release
Nello De Ntocca: *focuses aggression*
You see: Othede
a husk crab: (bonded)
You see: a husk crab
a scarab: (bonded)
You see: a scarab
feiht a mi: [Recruit, RAGE]
You see: feiht a mi
You see: Generic Miner
Nello De Ntocca: *focuses aggression*
The world is saving, please wait.
World save complete. The entire process took 3.1 seconds.
Castro: [Private, Syn]
You see: Castro
chacha: (bonded)
You see: chacha
aboogie: (bonded)
You see: aboogie
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
StephCurry: (bonded)
You see: StephCurry
CharlesBarkley: (bonded)
You see: CharlesBarkley
You see: Kelsier
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Liadan: Shhhh!
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
You see: Generic Miner
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Sorceress Razell
Taoist: all release
Kru'gugl: [Grunt, Orcs]
You see: Kru'gugl
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
You see: Othede
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
Taoist: all release
You see: Sorceress Razell
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
You see: tails
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Yrsa Odinsdottir: [Unsalted, VKNG]
You see: Yrsa Odinsdottir
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: tails
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Baba Yetu: [NVOS, DoK][C]
You see: Baba Yetu
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Yrsa Odinsdottir: *hiking to destination*
an earth elemental: (summoned)
You see: an earth elemental
Yrsa Odinsdottir: *hiking to destination*
Yrsa Odinsdottir: *hiking to destination*
Taoist: all release
You see: Nello De Ntocca
Hepatitis has completed the achievement: Domestication (Master).
Yrsa Odinsdottir: *hiking to destination*
Yrsa Odinsdottir: *hiking to destination*
You see: tails
Nello De Ntocca: *focuses aggression*
Nello De Ntocca: *focuses aggression*
Scurvy Sally: Legendary Explorer
You see: Lady Scurvy Sally
Taoist: all release
Alodie: I have placed a check in your bank box for the amount of 48,000
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
You see: Druss Kulle
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
The murderer known as Marwyyn has repented for their crimes.
Hot Mess: Animal Affinity
You see: Hot Mess
You see: Waylin
Taoist: all release
Hot Mess: bank
Hot Mess: bank
You see: Waylin
a pack llama: (tame)
You see: a pack llama
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
a nightmare: (bonded)
You see: a nightmare
Taoist: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nature Boy
You see: Lethal Dose
You see: Kaiesis
You see: Nerapas
Liadan: Shhhh!
Gxnqe: Triggered
You see: Lord Gxnqe
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
Nello De Ntocca: *focuses aggression*
You see: Lethal Dose
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: Nello De Ntocca
[Alliance][Guardian of Oss]: [SUP] You guys get the token?
Tamma: I have placed a check in your bank box for the amount of 45,000
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Dad has completed the achievement: Artificers Enclave Initiate.
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
You see: Jesterman
You see: Lethal Dose
Tamma: Your gold balance is 97.
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Taoist: all release
You see: Nello De Ntocca
[Guild][Ramza Beoulve]: i have Banned Tamer bot running at prev bank asking for spare coins
You see: a dirty thief
dr.Dre: [Acolyte, EMP]
You see: dr.Dre
Nordramien Knox: [Bronze, NAS]
You see: Nordramien Knox
[Guild][Ramza Beoulve]: plz donate to the cause
Hot Mess: Kal Ort Por [Recall]
Riva: I will teach thee all I know, if paid the amount in full.  The price is: 500
Riva: For less I shall teach thee less.
Taoist: all release
Riva: Let me show thee something of how this is done.
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
You see: Nello De Ntocca
You see: a dirty thief
You see: Undelicious
Taoist: all release
Bedbug: [Recruit, TRSH]
You see: Bedbug
c: (tame)
You see: c
a: (tame)
You see: a
d: (tame)
You see: d
b: (tame)
You see: b
e: (tame)
You see: e
Schmorty: Boss Slayer
Schmorty: [Emissary, rekt]
You see: Schmorty
an earth elemental: (summoned)
You see: an earth elemental
You see: Xorakk
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
You see: Jesterman
You see: Nello De Ntocca
Dang Lin-Wang: [NBK]
You see: Dang Lin-Wang
Dang Lin-Wang: bank
Nello De Ntocca: *focuses aggression*
Undelicious: *hiking to destination*
Undelicious: *hiking to destination*
Dang Lin-Wang: Des Mani [Weaken]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Undelicious: *hiking to destination*
Nello De Ntocca: *focuses aggression*
Dang Lin-Wang: balance
Ingmar: Your gold balance is 15,223.
Undelicious: *hiking to destination*
Gxnqe: Triggered
You see: Lord Gxnqe
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Undelicious: *hiking to destination*
Taoist: all release
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
an earth elemental: (summoned)
You see: an earth elemental
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Dang Lin-Wang: Kal Ort Por [Recall]
Nello De Ntocca: *focuses aggression*
Double Donger: [Non-Consensual, N-C]
You see: Double Donger
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Black Sub: Tradesman Dignitary
You see: Black Sub
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Black Sub: Tradesman Dignitary
You see: Black Sub
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Black Sub: Tradesman Dignitary
You see: Black Sub
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
[Guild][Mako]: vigor good, ty
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Queen MG
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Black Sub: Tradesman Dignitary
You see: Black Sub
You see: Xorakk
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: Nello De Ntocca
You see: Generic Miner
Nello De Ntocca: *focuses aggression*
Double Donger: [Non-Consensual, N-C]
You see: Double Donger
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
The world will save in 15 seconds.
Taoist: all release
You see: TheCollector
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
The world is saving, please wait.
World save complete. The entire process took 3.1 seconds.
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Double Donger: [Non-Consensual, N-C]
You see: Double Donger
Taoist: all release
You see: Nello De Ntocca
Syfer: (bonded)
You see: Syfer
BigBullocks: (bonded)
You see: BigBullocks
ChinoXL: [Private, Syn]
You see: ChinoXL
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
You see: XeroLocke
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Double Donger: [Non-Consensual, N-C]
You see: Double Donger
Taoist: all release
dabbadoo: (bonded)
You see: dabbadoo
Diddledick McGee: [Probation, rekt]
You see: Diddledick McGee
Ozzborne: (bonded)
You see: Ozzborne
Sharonn: (bonded)
You see: Sharonn
Ozy: (bonded)
You see: Ozy
Tila: [TRSH]
You see: Tila
Nello De Ntocca: *focuses aggression*
Taoist: all release
Diddledick McGee: [Probation, rekt]
You see: Diddledick McGee
dabbadoo: (bonded)
You see: dabbadoo
yabba: (bonded)
You see: yabba
Death Elemental: Legendary Domesticator
Death Elemental: [O.G., SOF]
You see: Death Elemental
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Hot Mess: Animal Affinity
You see: Hot Mess
a nightmare: (bonded)
You see: a nightmare
Taoist: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
Qvothe: [Beard Brother, BB]
You see: Qvothe
Qvothe: [Beard Brother, BB]
You see: Qvothe
Qvothe: [Beard Brother, BB]
You see: Qvothe
You see: Nello De Ntocca
Hadeon has completed the achievement: Cartographer (Basic).
You see: Nello De Ntocca
Qvothe: [Beard Brother, BB]
You see: Qvothe
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: a dirty thief
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
newvendorEAST: (bonded)
You see: newvendorEAST
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
newvendorEAST: (bonded)
You see: newvendorEAST
You see: Nello De Ntocca
Gorduf: [Gruntee, Orcs]
You see: Gorduf
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Double Donger: [Non-Consensual, N-C]
You see: Double Donger
Taoist: all release
Nello De Ntocca: *focuses aggression*
Ron Swanson: [RAWR]
You see: Ron Swanson
Ron Swanson: Bank
an earth elemental: (summoned)
You see: an earth elemental
You see: XeroLocke
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
newvendorEAST: (bonded)
You see: newvendorEAST
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
ChinoXL: [Private, Syn]
You see: ChinoXL
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
newvendorEAST: (bonded)
You see: newvendorEAST
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
You see: Otto Mann
Nello De Ntocca: *focuses aggression*
Scurvy Sally: Legendary Explorer
You see: Lady Scurvy Sally
You see: Khalil
You see: Khalil
You see: XeroLocke
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
You see: Khalil
Taoist: all release
You see: Nello De Ntocca
You see: Otto Mann
You see: XeroLocke
You see: Queen MG
King of Harts: Triggered
King of Harts: [King of the Ring, SOF]
You see: King of Harts
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
The murderer known as Burger King has repented for their crimes.
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Nello De Ntocca: *focuses aggression*
ChinoXL: [Private, Syn]
You see: ChinoXL
You see: Nello De Ntocca
Taoist: all release
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Tam: [Veteran, RAGE]
You see: Tam
Taoist: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
King of Harts: Triggered
King of Harts: [King of the Ring, SOF]
You see: King of Harts
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
dr.Dre: [Acolyte, EMP]
You see: dr.Dre
You see: a dirty thief
You see: a woods man
You see: Nello De Ntocca
You see: Queen MG
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: Queen MG
You see: Bruzzer
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
You see: Bruzzer
You see: Nello De Ntocca
You see: Queen MG
You see: Nello De Ntocca
Abigail Whistler: [Silver, NAS]
You see: Abigail Whistler
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Ozzborne: (bonded)
You see: Ozzborne
Sharonn: (bonded)
You see: Sharonn
Ozy: (bonded)
You see: Ozy
Tila: [TRSH]
You see: Tila
You see: Lyron
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an ancient earth elemental: (summoned)
You see: an ancient earth elemental
Woah Gaming: Transmuter
You see: Lord Woah Gaming
Taoist: all release
an ancient earth elemental: (summoned)
You see: an ancient earth elemental
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
You see: Otto Mann
Woah Gaming: Transmuter
You see: Lord Woah Gaming
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an ancient earth elemental: (summoned)
You see: an ancient earth elemental
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: all release
A Faction Flashpoint will begin in 9 minutes 59 seconds.
You see: Nello De Ntocca
You see: Nello De Ntocca
You see: Lyron
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Otto Mann
You see: Big Green One
Nello De Ntocca: *focuses aggression*
You see: Big Green One
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
The world will save in 15 seconds.
You see: Garrett the mage
You see: Ralphye Morley
a drake: (tame)
You see: a drake
a drake: (tame)
You see: a drake
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
The world is saving, please wait.
World save complete. The entire process took 3.3 seconds.
Ingmar: Your gold balance is 378,776.
an ancient earth elemental: (summoned)
You see: an ancient earth elemental
Woah Gaming: Transmuter
You see: Lord Woah Gaming
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an ancient earth elemental: (summoned)
You see: an ancient earth elemental
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Woah Gaming: Transmuter
You see: Lord Woah Gaming
an ancient earth elemental: (summoned)
You see: an ancient earth elemental
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Amabel
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Artichart: [Veteran, RAGE]
You see: Artichart
You see: Nello De Ntocca
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
You see: a dirty thief
You see: Amabel
You see: fireball wand of lesser monstrous slaying
You see: (22 uses remaining)
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Kelsier: Kal Ort Por [Recall]
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
Nello De Ntocca: *focuses aggression*
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
You see: Nello De Ntocca
StephCurry: (bonded)
You see: StephCurry
CharlesBarkley: (bonded)
You see: CharlesBarkley
You see: Kelsier
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: all release
You see: a dirty thief
Nello De Ntocca: *focuses aggression*
Kelsier: Kal Ort Por [Recall]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
You see: Undelicious
Taoist: all release
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
You see: Alfern Augusta
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nelek: Artificer Initiate
Nelek: [dA]
You see: Nelek
You see: Nello De Ntocca
Taoist: all release
You see: Lana Rhoades
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Ralphye Morley
a drake: (tame)
You see: a drake
a drake: (tame)
You see: a drake
a water elemental: (summoned)
You see: a water elemental
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
You see: XeroLocke
Taoist: all release
You see: Nello De Ntocca
Lana Rhoades: bank
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Your Grandma: Legendary Tailor
Your Grandma: [UO: Publish 16, AvC]
You see: Your Grandma
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: XeroLocke
You see: Nello De Ntocca
You see: a dirty thief
Taoist: all release
Tamma: I have placed a check in your bank box for the amount of 25,000
an earth elemental: (summoned)
You see: an earth elemental
Lana Rhoades: Kal Ort Por [Recall]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
Lamorak: Monster Hunter Initiate
You see: Lord Lamorak
Lamorak: Monster Hunter Initiate
You see: Lord Lamorak
You see: Nello De Ntocca
You see: Forager
a flamehound: (bonded)
You see: a flamehound
a corpse eater: (bonded)
You see: a corpse eater
a flamehound: (bonded)
You see: a flamehound
a corpse eater: (bonded)
You see: a corpse eater
a flamehound: (bonded)
You see: a flamehound
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: greasy phil
Lamorak: Monster Hunter Initiate
You see: Lord Lamorak
Your Grandma: Legendary Tailor
Your Grandma: [UO: Publish 16, AvC]
You see: Your Grandma
Your Grandma: Legendary Tailor
Your Grandma: [UO: Publish 16, AvC]
You see: Your Grandma
You see: Forager
a flamehound: (bonded)
You see: a flamehound
a corpse eater: (bonded)
You see: a corpse eater
a flamehound: (bonded)
You see: a flamehound
a corpse eater: (bonded)
You see: a corpse eater
a flamehound: (bonded)
You see: a flamehound
Your Grandma: bank
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Your Grandma: An Lor Xen [Invisibility]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: Nello De Ntocca
You see: Forager
a flamehound: (bonded)
You see: a flamehound
a corpse eater: (bonded)
You see: a corpse eater
a flamehound: (bonded)
You see: a flamehound
a corpse eater: (bonded)
You see: a corpse eater
a flamehound: (bonded)
You see: a flamehound
You see: Nello De Ntocca
You see: SirBoof
You see: Forager
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
Your Grandma: Kal Ort Por [Recall]
Nelek: Artificer Initiate
Nelek: [dA]
You see: Nelek
You see: FizzleSticks
You see: Nello De Ntocca
a corpse eater: *looks calmed*
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
You see: a dirty thief
You see: Alfern Augusta
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
You see: EMrebmemeR
You see: Alfern Augusta
You see: greasy phil
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Alex Trebek: [Recruit, gLc]
You see: Alex Trebek
Taoist: all release
Lamorak: Monster Hunter Initiate
You see: Lord Lamorak
chacha: (bonded)
You see: chacha
aboogie: (bonded)
You see: aboogie
Castro: [Private, Syn]
You see: Castro
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Ferra: [Sepultura, RiP]
You see: Ferra
You see: greasy phil
a corpse eater: (bonded)
You see: a corpse eater
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Castro: [Private, Syn]
You see: Castro
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
chacha: (bonded)
You see: chacha
aboogie: (bonded)
You see: aboogie
You see: greasy phil
a pack llama: (tame)
You see: a pack llama
Taoist: all release
You notice Nelek attempting to peek into Castro's belongings.
You see: XeroLocke
Qvothe: [Beard Brother, BB]
You see: Qvothe
Qvothe: bank i ban thee guards
Nello De Ntocca: *focuses aggression*
Woah Gaming: Transmuter
You see: Lord Woah Gaming
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
You see: FizzleSticks
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
You see: greasy phil
You see: Nello De Ntocca
MajesticTool: Monster Hunter Dignitary
MajesticTool: [LoD]
You see: MajesticTool
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: greasy phil
Taoist: all release
You see: SirBoof
Tamma: I have placed a check in your bank box for the amount of 5,000
You see: FizzleSticks
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
A Faction Flashpoint for Pulma has begun!
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
You see: greasy phil
a pack llama: (tame)
You see: a pack llama
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Maximinus
Scum Scribbler: [Double Apron, dA]
You see: Scum Scribbler
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Maximinus
Scum Scribbler: [Double Apron, dA]
You see: Scum Scribbler
You see: greasy phil
[Guild][Sicario]: CAVERNAM MINI
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Black Sub: Tradesman Dignitary
You see: Black Sub
Taoist: all release
You see: FizzleSticks
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Black Sub: Tradesman Dignitary
You see: Black Sub
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Ralphye Morley
Nello De Ntocca: *focuses aggression*
a drake: (tame)
You see: a drake
a drake: (tame)
You see: a drake
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Ferra: [Sepultura, RiP]
You see: Ferra
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: XeroLocke
Nello De Ntocca: *focuses aggression*
The world will save in 15 seconds.
an earth elemental: (summoned)
You see: an earth elemental
[Alliance][Leebus]: [BB] cav mini cav mini
You see: Nello De Ntocca
[Alliance][Leebus]: [BB] lots of cams
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
You see: Ralphye Morley
a drake: (tame)
You see: a drake
a drake: (tame)
You see: a drake
Liadan: Shhhh!
[Alliance][Leebus]: [BB] expect a fight
Taoist: all release
The world is saving, please wait.
World save complete. The entire process took 3.2 seconds.
You see: Lana Rhoades
You see: Ralphye Morley
a drake: (tame)
You see: a drake
a drake: (tame)
You see: a drake
You see: Nello De Ntocca
Lana Rhoades: bankbank
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Badass
You see: Nello De Ntocca
You see: Generic Miner
Alodie: I have placed a check in your bank box for the amount of 10,000
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Peter Gozinyeh: Domesticator
You see: Peter Gozinyeh
You see: Nello De Ntocca
You see: XeroLocke
Hot Mess: Animal Affinity
You see: Hot Mess
a nightmare: (bonded)
You see: a nightmare
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Ferra: [Sepultura, RiP]
You see: Ferra
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Lana Rhoades
Taoist: all release
You see: Generic Miner
a pack horse: (tame)
You see: a pack horse
a pack horse: (tame)
You see: a pack horse
a pack llama: (tame)
You see: a pack llama
a pack horse: (tame)
You see: a pack horse
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
You see: Lana Rhoades
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
You see: Badass
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: bank
an earth elemental: (summoned)
You see: an earth elemental
Peter Gozinyeh: Domesticator
You see: Peter Gozinyeh
Taoist: all release
Nello De Ntocca: *focuses aggression*
You see: Badass
You see: Nello De Ntocca
Tamma: I have placed a check in your bank box for the amount of 45,000
Nello De Ntocca: *focuses aggression*
You see: a dirty thief
Alex Trebek: [Recruit, gLc]
You see: Alex Trebek
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
You see: Dimetap
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
You see: Lana Rhoades
an earth elemental: (summoned)
You see: an earth elemental
[Alliance][Instinct]: [BB] washedup sup?
Nello De Ntocca: *focuses aggression*
You see: Dimetap
You see: Nello De Ntocca
Peter Gozinyeh: Domesticator
You see: Peter Gozinyeh
You see: Nello De Ntocca
John Blaze: Guardian of Cavernam
John Blaze: [Drunken Officer, DI]
You see: Lord John Blaze
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
You see: Dimetap
You see: a dirty thief
Black Sub: Tradesman Dignitary
You see: Black Sub
You see: Dimetap
You see: Nello De Ntocca
You see: EMrebmemeR
a horse: (tame)
You see: a horse
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Lamorak: Monster Hunter Initiate
You see: Lord Lamorak
Nello De Ntocca: *focuses aggression*
You see: Bailuobo
Ferra: [Sepultura, RiP]
You see: Ferra
a: (bonded)
You see: a
Lamorak: Monster Hunter Initiate
You see: Lord Lamorak
Ferra: [Sepultura, RiP]
You see: Ferra
You see: Nello De Ntocca
You see: Nello De Ntocca
You see: EMrebmemeR
a horse: (tame)
You see: a horse
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
EMrebmemeR: o
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
You see: Nello De Ntocca
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
You see: Nello De Ntocca
Taoist: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
You see: XeroLocke
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: TheCollector
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
You see: EMrebmemeR
a horse: (tame)
You see: a horse
You see: Nello De Ntocca
Taoist: all release
[Alliance][Sheebus]: [BB] Cav mini up, rekt showing up
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Gxnqe: Triggered
You see: Lord Gxnqe
Nello De Ntocca: *focuses aggression*
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Dang Lin-Wang: [NBK]
You see: Dang Lin-Wang
Dang Lin-Wang: bank
You see: Bailuobo
a: (bonded)
You see: a
You see: Nello De Ntocca
You see: Nello De Ntocca
Dang Lin-Wang: Kal Ort Por [Recall]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
TheCollector: *hiking to destination*
TheCollector: *hiking to destination*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
TheCollector: *hiking to destination*
TheCollector: *hiking to destination*
TheCollector: *hiking to destination*
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Ferra: [Sepultura, RiP]
You see: Ferra
Nello De Ntocca: *focuses aggression*
Ferra: [Sepultura, RiP]
You see: Ferra
Taoist: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
[Alliance][Instinct]: [BB] Are sups reds coming to cav mini?
Taoist: all release
[Alliance][Jatun]: [SUP] yeah we are working on it
You see: Nello De Ntocca
[Alliance][Sheebus]: [BB] 50%
Nello De Ntocca: *focuses aggression*
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
You see: a dirty thief
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
Nello De Ntocca: *focuses aggression*
Gxnqe: Triggered
You see: Lord Gxnqe
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Black Sub: Tradesman Dignitary
You see: Black Sub
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
Black Sub: Tradesman Dignitary
You see: Black Sub
a water elemental: (summoned)
You see: a water elemental
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: a dirty thief
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
The world will save in 15 seconds.
You see: Nello De Ntocca
Taoist: all release
The world is saving, please wait.
World save complete. The entire process took 3.1 seconds.
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Scum Scribbler: [Double Apron, dA]
You see: Scum Scribbler
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Scum Scribbler: [Double Apron, dA]
You see: Scum Scribbler
Taoist: all release
Scum Scribbler: [Double Apron, dA]
You see: Scum Scribbler
dr.Dre: [Acolyte, EMP]
You see: dr.Dre
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
John Blaze: Guardian of Cavernam
John Blaze: [Drunken Officer, DI]
You see: Lord John Blaze
a bonfire wisp: (tame)
You see: a bonfire wisp
It begins to rain.
You see: Inheritance
an earth elemental: (summoned)
You see: an earth elemental
Alodie: I have placed a check in your bank box for the amount of 43,000
You see: Nello De Ntocca
Taoist: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Ferra: [Sepultura, RiP]
You see: Ferra
BrasilComS: (tame)
You see: BrasilComS
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: XeroLocke
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
[Alliance][Peabody]: [PREV]  8-9 BLUES INCOMING
Taoist: all release
[Alliance][Peabody]: [PREV] REKYT AND LOD
Nello De Ntocca: *focuses aggression*
Nello De Ntocca: *focuses aggression*
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
[Alliance][A Silver Serpent]: [BB] 10 blues, LoD and Rekt
You see: Nello De Ntocca
You see: Bailuobo
a: (bonded)
You see: a
Taoist: all release
TrammaLicious: Animal Affinity
TrammaLicious: [Officer, 1CE]
You see: TrammaLicious
Alodie: I have placed a check in your bank box for the amount of 95,000
You see: Bailuobo
a: (bonded)
You see: a
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Gxnqe: Triggered
You see: Lord Gxnqe
You see: Bailuobo
a: (bonded)
You see: a
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Gxnqe: Triggered
You see: Lord Gxnqe
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: Nello De Ntocca
Taoist: all release
You see: Bruzzer
You see: Nello De Ntocca
You see: Nello De Ntocca
Butter: [Half Apron, dA]
You see: Butter
a horse: (tame)
You see: a horse
Liadan: Shhhh!
M'yuk: [Pug, Orcs]
You see: M'yuk
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
M'yuk: [Pug, Orcs]
You see: M'yuk
Butter: [Half Apron, dA]
You see: Butter
Taoist: all release
You see: Nello De Ntocca
You see: Wargath
[Guild][Rehls]: where is the action
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
Hot Mess: Animal Affinity
You see: Hot Mess
You see: Bruzzer
[Guild][Rehls]: where you guys at
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
El Diablo Blanco: [Beard Brother, BB]
You see: El Diablo Blanco
[Guild][Rehls]: damn no time to type?
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Lamont: Legendary Chef
You see: Lamont
You see: Nello De Ntocca
El Diablo Blanco: [Beard Brother, BB]
You see: El Diablo Blanco
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: XeroLocke
You see: Nello De Ntocca
You see: a grave digger
You see: a grave digger
Lamont: Legendary Chef
You see: Lamont
an earth elemental: (summoned)
You see: an earth elemental
Lamont: Legendary Chef
You see: Lamont
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
You see: a grave digger
Lamont: Legendary Chef
You see: Lamont
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: a grave digger
You see: Nello De Ntocca
You see: a grave digger
Taoist: all release
Sir-Temporis: [Recruit, Syn]
You see: Sir-Temporis
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Lamont: Legendary Chef
You see: Lamont
Sir-Temporis: [Recruit, Syn]
You see: Sir-Temporis
an earth elemental: (summoned)
You see: an earth elemental
Your guild's prestige has increased by 3
You see: Nello De Ntocca
Lamont: Legendary Chef
You see: Lamont
Taoist: all release
Lamont: Legendary Chef
You see: Lamont
Lamont: Legendary Chef
You see: Lamont
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
[Guild][Rehls]: where you guys at...
Ralph Lauren: Legendary Tailor
Ralph Lauren: [Proselyte, Amyr]
You see: Ralph Lauren
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Lamont: Legendary Chef
You see: Lamont
You see: Bailuobo
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
Sir-Temporis: [Recruit, Syn]
You see: Sir-Temporis
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Peperino: [Cosechadores de Almas, CDA]
You see: Peperino
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
Ralph Lauren: Legendary Tailor
Ralph Lauren: [Proselyte, Amyr]
You see: Ralph Lauren
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
[Guild][Rehls]: where you guys att
an earth elemental: (summoned)
You see: an earth elemental
You see: Matthias
[Guild][Sarious]: cav
Gxnqe: Triggered
You see: Lord Gxnqe
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
[Guild][Sarious]: greys around
You see: Wargath
[Guild][Sarious]: mini just dropped
Taoist: all release
You see: Nello De Ntocca
The world will save in 15 seconds.
You see: Nello De Ntocca
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
The world is saving, please wait.
World save complete. The entire process took 3.1 seconds.
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
You see: a dirty thief
Taoist: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Matthias
You see: Matthias
an earth elemental: (summoned)
You see: an earth elemental
You see: Matthias
You see: Nello De Ntocca
Liadan: Shhhh!
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Taoist: all release
Nit'sud: banco
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: all release
You see: Bruzzer
You see: Bruzzer
Nello De Ntocca: *focuses aggression*
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Bruzzer
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
John Blaze: Guardian of Cavernam
John Blaze: [Drunken Officer, DI]
You see: Lord John Blaze
You see: Nello De Ntocca
a bonfire wisp: (bonded)
You see: a bonfire wisp
[Guild][Sicario]: i've put loot into the chest. gotta afk for 30 mins.
StephCurry: (bonded)
You see: StephCurry
CharlesBarkley: (bonded)
You see: CharlesBarkley
You see: Kelsier
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Matthias
Taoist: all release
Ingmar: I have placed a check in your bank box for the amount of 25,000
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
You see: Matthias
You see: Druss Kulle
You see: Nello De Ntocca
You see: Matthias
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Liadan: Shhhh!
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Taoist: all release
GINI: (bonded)
You see: GINI
You see: Smokey Mc
Asbestos Pie: [Member, LoD]
You see: Asbestos Pie
a skeletal dragon: (bonded)
You see: a skeletal dragon
Naga'Bah: Legendary Tailor
Naga'Bah: [Gukka, Amyr]
You see: Naga'Bah
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Asbestos Pie: [Member, LoD]
You see: Asbestos Pie
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Druss Kulle
Taoist: all release
Alodie: I have placed a check in your bank box for the amount of 30,000
an earth elemental: (summoned)
You see: an earth elemental
You see: Druss Kulle
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
You see: a dirty thief
mino: Tradesman Initiate
You see: mino
an earth elemental: (summoned)
You see: an earth elemental
a pack llama: (tame)
You see: a pack llama
a pack llama: (tame)
You see: a pack llama
a pack llama: (tame)
You see: a pack llama
a pack llama: (tame)
You see: a pack llama
a pack llama: (tame)
You see: a pack llama
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Kelsier
StephCurry: (bonded)
You see: StephCurry
CharlesBarkley: (bonded)
You see: CharlesBarkley
a water elemental: (summoned)
You see: a water elemental
Transpocalypse: [Officer, SF]
You see: Transpocalypse
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Naga'Bah: Legendary Tailor
Naga'Bah: [Gukka, Amyr]
You see: Naga'Bah
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: all release
Tamma: Thou hast withdrawn 60,000 gold.
You see: Nello De Ntocca
You see: Druss Kulle
an earth elemental: (summoned)
You see: an earth elemental
[Guild][Orlik]: sup guys
mino: Tradesman Initiate
You see: mino
Taoist: all release
a pack llama: (tame)
You see: a pack llama
a pack llama: (tame)
You see: a pack llama
a pack llama: (tame)
You see: a pack llama
a pack llama: (tame)
You see: a pack llama
a pack llama: (tame)
You see: a pack llama
You see: Matthias
You see: Nello De Ntocca
You see: Nello De Ntocca
Transpocalypse: [Officer, SF]
You see: Transpocalypse
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: [Recruit, N-C]
You see: Sanjeev
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Alodie: Your gold balance is 20,369.
Taoist: all release
You see: Smokey Mc
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
a skeletal dragon: (bonded)
You see: a skeletal dragon
GINI: (bonded)
You see: GINI
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
You see: Nello De Ntocca
mino: Tradesman Initiate
You see: mino
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a pack llama: (tame)
You see: a pack llama
a pack llama: (tame)
You see: a pack llama
a pack llama: (tame)
You see: a pack llama
a pack llama: (tame)
You see: a pack llama
a pack llama: (tame)
You see: a pack llama
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Transpocalypse: [Officer, SF]
You see: Transpocalypse
Sanjeev: all release
MajesticTool: Monster Hunter Dignitary
MajesticTool: [LoD]
You see: MajesticTool
MajesticTool: Monster Hunter Dignitary
MajesticTool: [LoD]
You see: MajesticTool
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: all release
Alodie: Your gold balance is 56,463.
You see: Nello De Ntocca
MajesticTool: Monster Hunter Dignitary
MajesticTool: [LoD]
You see: MajesticTool
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
You see: a dirty thief
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Sanjeev: all release
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Taoist: all release
You see: Lana Rhoades
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Smokey Mc
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Bailuobo
Transpocalypse: [Officer, SF]
You see: Transpocalypse
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
You see: Bailuobo
Taoist: all release
Bailuobo: Bank Vendor Buy Guards
MajesticTool: Monster Hunter Dignitary
MajesticTool: [LoD]
You see: MajesticTool
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
MajesticTool: Monster Hunter Dignitary
MajesticTool: [LoD]
You see: MajesticTool
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
The world will save in 15 seconds.
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
MajesticTool: Monster Hunter Dignitary
MajesticTool: [LoD]
You see: MajesticTool
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
The world is saving, please wait.
World save complete. The entire process took 3.1 seconds.
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
You see: Kelsier
StephCurry: (bonded)
You see: StephCurry
CharlesBarkley: (bonded)
You see: CharlesBarkley
Taoist: all release
MajesticTool: Monster Hunter Dignitary
MajesticTool: [LoD]
You see: MajesticTool
Sanjeev: all release
You see: Bailuobo
MajesticTool: Monster Hunter Dignitary
MajesticTool: [LoD]
You see: MajesticTool
Ingmar: Your gold balance is 689,161.
You see: chami-
an earth elemental: (summoned)
You see: an earth elemental
Transpocalypse: [Officer, SF]
You see: Transpocalypse
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Bailuobo
an earth elemental: (summoned)
You see: an earth elemental
a: (bonded)
You see: a
Sanjeev: all release
Taoist: all release
You see: Nello De Ntocca
You see: Druss Kulle
You see: Lethal Dose
chacha: (bonded)
You see: chacha
aboogie: (bonded)
You see: aboogie
Castro: [Private, Syn]
You see: Castro
Mugen: [Puck Head, Syn]
You see: Mugen
Alodie: I have placed a check in your bank box for the amount of 52,000
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: a dirty thief
You see: Lethal Dose
You see: Nello De Ntocca
Taoist: all release
You see: Druss Kulle
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
whytewalker: (bonded)
You see: whytewalker
AegonSnow: (bonded)
You see: AegonSnow
DanySnow: (bonded)
You see: DanySnow
purplewalker: (bonded)
You see: purplewalker
Generic Fox: Domesticator
Generic Fox: [Sgt. , SOF]
You see: Generic Fox
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Transpocalypse: [Officer, SF]
You see: Transpocalypse
Beastro: [Private, Syn]
You see: Beastro
Taoist: all release
Generic Fox: Domesticator
Generic Fox: [Sgt. , SOF]
You see: Generic Fox
whytewalker: (bonded)
You see: whytewalker
AegonSnow: (bonded)
You see: AegonSnow
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
Tamma: I have placed a check in your bank box for the amount of 25,000
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
a wyvern hatchling: (bonded)
You see: a wyvern hatchling
danktank: (bonded)
You see: danktank
You see: chami-
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Mugen: [Puck Head, Syn]
You see: Mugen
You see: Nello De Ntocca
Double Donger: [Non-Consensual, N-C]
You see: Double Donger
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: chami-
a pack horse: (tame)
You see: a pack horse
a wyvern hatchling: (bonded)
You see: a wyvern hatchling
Sanjeev: all release
You see: Nello De Ntocca
Taoist: all release
Double Donger: [Non-Consensual, N-C]
You see: Double Donger
a wyvern hatchling: (bonded)
You see: a wyvern hatchling
a wyvern hatchling: (bonded)
You see: a wyvern hatchling
a wyvern hatchling: (bonded)
You see: a wyvern hatchling
Ingmar: I have placed a check in your bank box for the amount of 25,000
You see: Kelsier
StephCurry: (bonded)
You see: StephCurry
CharlesBarkley: (bonded)
You see: CharlesBarkley
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
[Alliance][A Silver Serpent]: [BB] Silver is me
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
[Alliance][SupScribeNow]: [SUP] COOL
Nello De Ntocca: *focuses aggression*
You see: chami-
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Gxnqe: Triggered
You see: Lord Gxnqe
a wyvern hatchling: (bonded)
You see: a wyvern hatchling
a pack horse: (tame)
You see: a pack horse
[Guild][Anllela Sagra]: Jonny Cash coming toward you
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
[Alliance][A Silver Serpent]: [BB] 2nd BB red...the other was my other alt :)
You see: Garrett the mage
Sanjeev: all release
You see: Nello De Ntocca
Taoist: all release
You see: Nello De Ntocca
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
Mugen: [Puck Head, Syn]
You see: Mugen
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Mugen: [Puck Head, Syn]
You see: Mugen
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Taoist: all release
Double Donger: [Non-Consensual, N-C]
You see: Double Donger
Gugnar the Tall: [Shepherd, VKNG]
You see: Gugnar the Tall
Mugen: Kal Ort Por [Recall]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: FizzleSticks
You see: Nello De Ntocca
Taoist: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
Og the Great: [Non-Consensual, N-C]
You see: Og the Great
You see: Nello De Ntocca
You see: Garrett the mage
Ehh: (bonded)
You see: Ehh
You see: Canadian Bacon
Og the Great: [Non-Consensual, N-C]
You see: Og the Great
You see: Nello De Ntocca
Double Donger: [Non-Consensual, N-C]
You see: Double Donger
Sanjeev: all release
You see: Nello De Ntocca
You see: Lyron
Taoist: all release
csimp: (tame)
You see: csimp
asimp: (tame)
You see: asimp
afbeetle: (bonded)
You see: afbeetle
bsimp: (tame)
You see: bsimp
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Double Donger: [Non-Consensual, N-C]
You see: Double Donger
Patrick Duprat: [Sepultura, RiP]
You see: Patrick Duprat
DELPHI: Triggered
You see: DELPHI
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Darkman Deathsin
Ingmar: I have placed a check in your bank box for the amount of 5,000
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
D SoNyA: Domesticator
You see: D SoNyA
You see: Valeska
You see: Lyron
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
You see: Canadian Bacon
[Guild][Anllela Sagra]: i have reserch mats
Ehh: (bonded)
You see: Ehh
Taoist: all release
Sanjeev: all release
You see: Sekhzerul
You see: Nello De Ntocca
DELPHI: *hiking to destination*
You see: Nello De Ntocca
DELPHI: *hiking to destination*
DELPHI: *hiking to destination*
You see: Bruzzer
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
DELPHI: *hiking to destination*
Ingmar: I have placed a check in your bank box for the amount of 83,000
[Guild][Anllela Sagra]: going for the gate
DELPHI: *hiking to destination*
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
a wyvern hatchling: (bonded)
You see: a wyvern hatchling
a pack horse: (tame)
You see: a pack horse
You see: chami-
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Bagpipes: [Non-Consensual, N-C]
You see: Bagpipes
Nello De Ntocca: *focuses aggression*
You see: Jenna Marie
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Taoist: all release
You see: Nello De Ntocca
You see: Alplax
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
HorseA: (tame)
You see: HorseA
HorseB: (tame)
You see: HorseB
You see: Nello De Ntocca
Dyara: Top Eventsman
Dyara: [LoD]
You see: Lady Dyara
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Amina: Legendary Domesticator
You see: Amina
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Smokey Mc
You see: XeroLocke
Sanjeev: all release
You see: chami-
a wyvern hatchling: (bonded)
You see: a wyvern hatchling
a pack horse: (tame)
You see: a pack horse
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Kelsier
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
a wyvern hatchling: (bonded)
You see: a wyvern hatchling
StephCurry: (bonded)
You see: StephCurry
CharlesBarkley: (bonded)
You see: CharlesBarkley
a wyvern hatchling: (bonded)
You see: a wyvern hatchling
Tamma: Your gold balance is 138,150.
Taoist: all release
[Guild][Deadeye Darrel]: so jack does that mean we will have a pk side
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
You see: Valeska
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
[Guild][A Silver Serpent]: rekt brought the evil out in me
GINI: (bonded)
You see: GINI
You see: Smokey Mc
Nello De Ntocca: *focuses aggression*
John Blaze: Guardian of Cavernam
John Blaze: [Drunken Officer, DI]
You see: Lord John Blaze
a skeletal dragon: (bonded)
You see: a skeletal dragon
a bonfire wisp: (bonded)
You see: a bonfire wisp
[Guild][A Silver Serpent]: :)
[Guild][A Silver Serpent]: brb
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
You see: Kriptus
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Kriptus
a lemura: (bonded)
You see: a lemura
a phoenix: (bonded)
You see: a phoenix
Taoist: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Kriptus
Nello De Ntocca: *focuses aggression*
You see: a dirty thief
Sanjeev: all release
[Guild][Kuma]: if rekt has lunk bb should have blunk
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
[Guild][Instinct]: RRS
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
[Guild][Instinct]: Rapid response squad
[Guild][ShadowStone]: BBLUNK
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Sanjeev: all release
Taoist: all release
[Guild][Deadeye Darrel]: well let me know im down
Nello De Ntocca: *focuses aggression*
[Guild][El Trauco]: call it ShrineBotz SB
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
[Guild][Instinct]: lol
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
[Guild][Rehls]: gotta be for boss fighting only
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nit'sud: [Pug, Orcs]
You see: Nit'sud
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
[Guild][Instinct]: oh for sure
Taoist: all release
[Guild][Kuma]: Generic Red Guild
You see: Nello De Ntocca
[Guild][Instinct]: I'm not gonna go out pking
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
[Guild][Deadeye Darrel]: thats fine
[Guild][El Trauco]: Shrinebot420
[Guild][Instinct]: no wa
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Smokey Mc
Sanjeev: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
Sanjeev: all release
A Faction Struggle (Mounts Allowed) will begin in 29 minutes 59 seconds. Faction bases may be accessed via green moongates near each town bank. Type [Faction to view more details.
Woah Gaming: Transmuter
You see: Lord Woah Gaming
You see: Nello De Ntocca
Dre: Legendary Connoisseur
Dre: [LoD]
You see: Dre
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
Sanjeev: all release
Taoist: all release
You see: L U C H A
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
Taoist: all release
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
DELPHI: Triggered
You see: DELPHI
[Guild][Ramza Beoulve]: boat sinking is sea pvp
You see: Nello De Ntocca
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Dre: Legendary Connoisseur
Dre: [LoD]
You see: Dre
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
[Guild][Ramza Beoulve]: totally fair
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: all release
You see: StamedUp
c: (tame)
You see: c
b: (tame)
You see: b
d: (tame)
You see: d
a: (tame)
You see: a
e: (tame)
You see: e
You see: Bear Trap Tim
You see: Ambrosia
L: (bonded)
You see: L
B: (bonded)
You see: B
[Guild][Anllela Sagra]: I looted Research Mats off a corpse so...Sowweey
Sanjeev: all release
Taoist: all release
You see: Big Green One
You see: Nello De Ntocca
You see: StamedUp
You see: Ambrosia
L: (bonded)
You see: L
B: (bonded)
You see: B
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
Sanjeev: all release
You see: a dirty thief
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
The world will save in 15 seconds.
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
Bedbug: [Recruit, TRSH]
You see: Bedbug
Garrett: I will teach thee all I know, if paid the amount in full.  The price is: 102
Garrett: For less I shall teach thee less.
c: (tame)
You see: c
a: (tame)
You see: a
d: (tame)
You see: d
b: (tame)
You see: b
e: (tame)
You see: e
The world is saving, please wait.
World save complete. The entire process took 3.1 seconds.
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Exploder: [Recruit, TRSH]
You see: Exploder
Taoist: all release
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Bear Trap Tim
c: (tame)
You see: c
b: (tame)
You see: b
d: (tame)
You see: d
a: (tame)
You see: a
e: (tame)
You see: e
You see: Nello De Ntocca
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Nello De Ntocca
Exploder: [Recruit, TRSH]
You see: Exploder
Jocef: Legendary Explorer
Jocef: [Platinum, NAS]
You see: Jocef
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Milamber: Triggered
Milamber: [Muscle, rekt]
You see: Milamber
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Staples
Tamma: Your gold balance is 845,822.
Ingmar: I have placed a check in your bank box for the amount of 19,458
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Ingmar: I have placed a check in your bank box for the amount of 19,458
Ingmar: I have placed a check in your bank box for the amount of 19,458
Sanjeev: all release
You see: Nello De Ntocca
Ingmar: I have placed a check in your bank box for the amount of 19,458
Ingmar: I have placed a check in your bank box for the amount of 19,458
Ingmar: I have placed a check in your bank box for the amount of 19,458
Ingmar: I have placed a check in your bank box for the amount of 19,458
Ingmar: I have placed a check in your bank box for the amount of 19,458
Ingmar: I have placed a check in your bank box for the amount of 19,458
Exploder: [Recruit, TRSH]
You see: Exploder
Ingmar: I have placed a check in your bank box for the amount of 19,458
Ingmar: I have placed a check in your bank box for the amount of 19,458
You see: Nello De Ntocca
Ingmar: I have placed a check in your bank box for the amount of 19,458
Ingmar: I have placed a check in your bank box for the amount of 19,458
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Big Green One
You see: Staples
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Nello De Ntocca
Taoist: all release
Sanjeev: all release
Schaef has completed the achievement: Alchemist (Epic).
an earth elemental: (summoned)
You see: an earth elemental
Tamma: Your gold balance is 805,822.
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Taoist: all release
You see: Nello De Ntocca
It begins to rain.
Sanjeev: all release
You see: Raam the Bastard
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Curley Jefferson: [Crack Smith, dA]
You see: Curley Jefferson
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Sanjeev: all release
You see: Smokey Mc
a llama: (bonded)
You see: a llama
You see: Nello De Ntocca
Smokey Mc: *focuses aggression*
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Smokey Mc: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Smokey Mc: *focuses aggression*
You see: Nello De Ntocca
Taoist: all release
Smokey Mc: *focuses aggression*
Sanjeev: all release
MajesticClown: [Member, LoD][C]
You see: MajesticClown
an earth elemental: (summoned)
You see: an earth elemental
MajesticClown: [Member, LoD][C]
You see: MajesticClown
[Alliance][Jack Churchill]: [BB] Sup, can I come in?  :)
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Smokey Mc: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
a water elemental: (summoned)
You see: a water elemental
Smokey Mc: *focuses aggression*
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Smokey Mc: *focuses aggression*
Smokey Mc: *focuses aggression*
Alodie: Your gold balance is 466,769.
You see: Nello De Ntocca
Taoist: all release
Smokey Mc: *focuses aggression*
Smokey Mc: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Sorceress Razell
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
You see: Staples
Woah Gaming: Transmuter
You see: Lord Woah Gaming
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
DELPHI: *hiking to destination*
DELPHI: *hiking to destination*
Taoist: all release
DELPHI: *hiking to destination*
an earth elemental: (summoned)
You see: an earth elemental
DELPHI: *hiking to destination*
Woah Gaming: Transmuter
You see: Lord Woah Gaming
DELPHI: *hiking to destination*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Gugnar the Tall: [Shepherd, VKNG]
You see: Gugnar the Tall
Taoist: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
You see: a dirty thief
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
MajesticClown: [Member, LoD][C]
You see: MajesticClown
You see: Merritt
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
You see: Staples
Taoist: all release
You see: Nello De Ntocca
Sanjeev: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Sanjeev: all release
You see: Nello De Ntocca
Sanjeev: all release
You see: Nello De Ntocca
Taoist: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Dirt Wolf: Treasure Hunter
Dirt Wolf: [Keep Digging, SOF]
You see: Dirt Wolf
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Gugnar the Tall: [Shepherd, VKNG]
You see: Gugnar the Tall
You see: a dirty thief
You see: Kelsier
StephCurry: (bonded)
You see: StephCurry
CharlesBarkley: (bonded)
You see: CharlesBarkley
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Ingmar: I have placed a check in your bank box for the amount of 90,000
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
a llama: (bonded)
You see: a llama
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Sanjeev: all release
Taoist: all release
Nello De Ntocca: *focuses aggression*
Dirt Wolf: Treasure Hunter
Dirt Wolf: [Keep Digging, SOF]
You see: Dirt Wolf
Curley Jefferson: [Crack Smith, dA]
You see: Curley Jefferson
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
Curley Jefferson: [Crack Smith, dA]
You see: Curley Jefferson
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: a male feminist
You see: Staples
You see: Nello De Ntocca
Kuma: [Beard Brother, BB]
You see: Kuma
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: a male feminist
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Nello De Ntocca
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Kuma: [Beard Brother, BB]
You see: Kuma
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: a male feminist
You see: Nello De Ntocca
Taoist: all release
You see: Lechon Kawali
StephCurry: (bonded)
You see: StephCurry
CharlesBarkley: (bonded)
You see: CharlesBarkley
You see: Kelsier
Sanjeev: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
You see: Killik
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
You see: Rico deSchwan
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Kelsier
StephCurry: (bonded)
You see: StephCurry
CharlesBarkley: (bonded)
You see: CharlesBarkley
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Exploder: [Recruit, TRSH]
You see: Exploder
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: all release
Exploder: [Recruit, TRSH]
You see: Exploder
an earth elemental: (summoned)
You see: an earth elemental
You see: XeroLocke
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
Ingmar: Your gold balance is 2,821,061.
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Taoist: all release
You see: Nello De Ntocca
You see: a male feminist
You see: Ylana
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Saphira: (bonded)
You see: Saphira
Tam: [Veteran, RAGE]
You see: Tam
Viserion: (bonded)
You see: Viserion
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Exploder: [Recruit, TRSH]
You see: Exploder
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Don West: [GEM MINT TEN, 1CE][C]
You see: Don West
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: all release
Nello De Ntocca: *focuses aggression*
The world will save in 15 seconds.
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
The world is saving, please wait.
World save complete. The entire process took 3.3 seconds.
Taoist: all release
a water elemental: (summoned)
You see: a water elemental
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
John Blaze: Guardian of Cavernam
John Blaze: [Drunken Officer, DI]
You see: Lord John Blaze
Nello De Ntocca: *focuses aggression*
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: all release
Sanjeev: all release
You see: a dirty thief
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Psalms: [Friar, Sir.]
You see: Psalms
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
You see: XeroLocke
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Wiki NPC: [Non-Consensual, N-C]
You see: Wiki NPC
Nello De Ntocca: *focuses aggression*
You see: Frieden
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Taoist: all release
John Blaze: Guardian of Cavernam
John Blaze: [Drunken Officer, DI]
You see: Lord John Blaze
Steely: (bonded)
You see: Steely
a lemura: (bonded)
You see: a lemura
a bonfire wisp: (bonded)
You see: a bonfire wisp
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Kuma: [Beard Brother, BB]
You see: Kuma
Nello De Ntocca: *focuses aggression*
Tamma: Your gold balance is 207,261.
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Gxnqe: Triggered
You see: Lord Gxnqe
Curley Jefferson: [Crack Smith, dA]
You see: Curley Jefferson
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Taoist: all release
Sanjeev: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Nello De Ntocca
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Jack Churchill: Backstabber
Jack Churchill: [Twisted Beard, BB]
You see: Jack Churchill
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Kuma: [Beard Brother, BB]
You see: Kuma
Wiki NPC: [Non-Consensual, N-C]
You see: Wiki NPC
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Wiki NPC: [Non-Consensual, N-C]
You see: Wiki NPC
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Taoist: all release
Wiki NPC: [Non-Consensual, N-C]
You see: Wiki NPC
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
You see: Rico deSchwan
Og the Great: [Non-Consensual, N-C]
You see: Og the Great
Gxnqe: Triggered
You see: Lord Gxnqe
Sanjeev: all release
You see: Nello De Ntocca
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Vrox: [BB]
You see: Vrox
You see: Nello De Ntocca
Taoist: all release
You see: Raam the Bastard
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Sanjeev: all release
A S H E N: Triggered
A S H E N: [Muscle, rekt][F]
You see: A S H E N
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Nello De Ntocca
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
Curley Jefferson: [Crack Smith, dA]
You see: Curley Jefferson
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Curley Jefferson: [Crack Smith, dA]
You see: Curley Jefferson
You see: Lethal Dose
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Lethal Dose
You see: Nello De Ntocca
Taoist: all release
You see: Nello De Ntocca
You see: a dirty thief
Sanjeev: all release
[Guild][El Trauco]: someone want to come to petram
You see: Rico deSchwan
[Guild][El Trauco]: kill th is annoying red with me
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Bagpipes: [Non-Consensual, N-C]
You see: Bagpipes
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
[Guild][El Trauco]: at earths
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
ItzPewbae: (bonded)
You see: ItzPewbae
Pubee: (bonded)
You see: Pubee
Pube: [rekt]
You see: Pube
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
Baba Yetu: [NVOS, DoK][C]
You see: Baba Yetu
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Sanjeev: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
You see: a dirty thief
Sanjeev: all release
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Dang Lin-Wang: [NBK]
You see: Dang Lin-Wang
Dang Lin-Wang: bank
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Dang Lin-Wang: Kal Ort Por [Recall]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Taoist: all release
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
a shieldmaiden: [Deadman Isle]   [Skeleton, Crew]
You see: a shieldmaiden
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Dirt Wolf: Treasure Hunter
Dirt Wolf: [Keep Digging, SOF]
You see: Dirt Wolf
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Stella Rain
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Psalms: [Friar, Sir.]
You see: Psalms
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Liadan: Shhhh!
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Toshinori has completed the achievement: Guardian of Pulma (Epic). [First Player on Server to Complete Achievement]
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Psalms: [Friar, Sir.]
You see: Psalms
Ducky: Adventurer Initiate
Ducky: [Recruit, PROC]
You see: Ducky
Taoist: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Dang Lin-Wang: [NBK]
You see: Dang Lin-Wang
Sanjeev: all release
Dang Lin-Wang: bank
Headson: [Commander, PAX]
You see: Headson
Dang Lin-Wang: In Nox [Poison]
Mauhulakh: Triggered
Mauhulakh: [Grunt, Ork]
You see: Mauhulakh
Dang Lin-Wang: check 250000
Ingmar: You do not have that much gold in your bank currently.
Dang Lin-Wang: check 25000
Ingmar: I have placed a check in your bank box for the amount of 25,000
Mauhulakh: Triggered
Mauhulakh: [Grunt, Ork]
You see: Mauhulakh
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Dang Lin-Wang: Kal Ort Por [Recall]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Devin Townsend has completed the achievement: Domestication (Basic).
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Sanjeev: all release
Taoist: all release
Mauhulakh: Triggered
Mauhulakh: [Grunt, Ork]
You see: Mauhulakh
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Ducky: Adventurer Initiate
Ducky: [Recruit, PROC]
You see: Ducky
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
The world will save in 15 seconds.
Taoist: all release
Sanjeev: all release
Headson: [Commander, PAX]
You see: Headson
You see: Nello De Ntocca
You see: Liadan the scribe
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
The world is saving, please wait.
World save complete. The entire process took 3.2 seconds.
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Psalms: [Friar, Sir.]
You see: Psalms
Mauhulakh: Triggered
Mauhulakh: [Grunt, Ork]
You see: Mauhulakh
Taoist: all release
Vash TheStampede: Hardened Veteran
Vash TheStampede: [Humanoid Typhoon, rekt][F]
You see: Vash TheStampede
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
Sanjeev: all release
Dirt Wolf: Treasure Hunter
Dirt Wolf: [Keep Digging, SOF]
You see: Dirt Wolf
Dirt Wolf: bank
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Dirt Wolf: Kal Ort Por [Recall]
Pube: [rekt]
You see: Pube
ItzPewbae: (bonded)
You see: ItzPewbae
Pubee: (bonded)
You see: Pubee
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Frieden
Sanjeev: all release
Dirt Wolf: Kal Ort Por [Recall]
Checho: [Guildmaster, CDA]
You see: Checho
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Pube: [rekt]
You see: Pube
ItzPewbae: (bonded)
You see: ItzPewbae
Pubee: (bonded)
You see: Pubee
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Headson: [Commander, PAX]
You see: Headson
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
You see: a dirty thief
Ingmar: Your gold balance is 28,868.
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Checho: [Guildmaster, CDA]
You see: Checho
ItzPewbae: (bonded)
You see: ItzPewbae
Pubee: (bonded)
You see: Pubee
Pube: [rekt]
You see: Pube
Sanjeev: all release
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
[Guild][Exio]: whats goin on
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
You see: Stella Rain
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
Checho: [Guildmaster, CDA]
You see: Checho
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Delta of Baja
[Guild][Deadly Sins]: consfearacy are you around
Nello De Ntocca: *focuses aggression*
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
You see: Nello De Ntocca
The Shrine of Honesty has fallen to corruption!
Skynyrd: [Non-Consensual, N-C]
You see: Skynyrd
Taoist: all release
Sanjeev: all release
You see: Snooter
an earth elemental: (summoned)
You see: an earth elemental
You see: Stella Rain
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Pube: [rekt]
You see: Pube
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nit'sud: [Pug, Orcs]
You see: Nit'sud
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
The Dank Nugget: [Yabba Dabba Doo, SOF]
You see: The Dank Nugget
Taoist: all release
Pube: [rekt]
You see: Pube
ItzPewbae: (bonded)
You see: ItzPewbae
Pubee: (bonded)
You see: Pubee
Dang Lin-Wang: [NBK]
You see: Dang Lin-Wang
Sanjeev: all release
Dang Lin-Wang: balance
Ingmar: Your gold balance is 537.
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Dang Lin-Wang: bank
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Pube: [rekt]
You see: Pube
Edna: The Shrine of Honesty has fallen to corruption!
Pube: [rekt]
You see: Pube
ItzPewbae: (bonded)
You see: ItzPewbae
Pubee: (bonded)
You see: Pubee
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
Dang Lin-Wang: Kal Ort Por [Recall]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
You see: Frieden
Pube: [rekt]
You see: Pube
ItzPewbae: (bonded)
You see: ItzPewbae
Pubee: (bonded)
You see: Pubee
Taoist: all release
ByaKuyA: [Veteran, RAGE]
You see: ByaKuyA
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Ducky: Adventurer Initiate
Ducky: [Recruit, PROC]
You see: Ducky
You see: a dirty thief
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
[Guild][Sarious]: shrien out poast ha fallen
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Pube: [rekt]
You see: Pube
You see: Nello De Ntocca
ItzPewbae: (bonded)
You see: ItzPewbae
Pubee: (bonded)
You see: Pubee
Sanjeev: all release
You see: Nello De Ntocca
Taoist: all release
Edna: The Shrine of Honesty has fallen to corruption!
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Pube: [rekt]
You see: Pube
ItzPewbae: (bonded)
You see: ItzPewbae
Pubee: (bonded)
You see: Pubee
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
ByaKuyA: [Veteran, RAGE]
You see: ByaKuyA
You see: The Wench
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: a dirty thief
ByaKuyA: [Veteran, RAGE]
You see: ByaKuyA
Ducky: Adventurer Initiate
Ducky: [Recruit, PROC]
You see: Ducky
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Psalms: [Friar, Sir.]
You see: Psalms
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Sanjeev: all release
You see: The Wench
You see: Nello De Ntocca
You see: Frieden
Nello De Ntocca: *focuses aggression*
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Edna: The Shrine of Honesty has fallen to corruption!
You see: Nello De Ntocca
Taoist: all release
Pube: [rekt]
You see: Pube
an earth elemental: (summoned)
You see: an earth elemental
ItzPewbae: (bonded)
You see: ItzPewbae
Pubee: (bonded)
You see: Pubee
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Pube: [rekt]
You see: Pube
Bedbug: [Recruit, TRSH]
You see: Bedbug
ItzPewbae: (bonded)
You see: ItzPewbae
Pubee: (bonded)
You see: Pubee
c: (tame)
You see: c
d: (tame)
You see: d
e: (tame)
You see: e
a: (tame)
You see: a
b: (tame)
You see: b
You see: a dirty thief
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
spirit island: [jorge, lost]
You see: spirit island
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
The murderer known as Spooki has repented for their crimes.
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Edna: The Shrine of Honesty has fallen to corruption!
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Frieden
Sanjeev: all release
You see: Nello De Ntocca
A Faction Struggle (Mounts Allowed) for Prevalia Central has begun! Type [Faction to view more details.
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Sanjeev: all release
Taoist: all release
Headson: [Commander, PAX]
You see: Headson
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
a shieldmaiden: [Deadman Isle]   [Skeleton, Crew]
You see: a shieldmaiden
You see: FizzleSticks
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
a shieldmaiden: [Deadman Isle]   [Skeleton, Crew]
You see: a shieldmaiden
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Nello De Ntocca: *focuses aggression*
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Salazarr: (bonded)
You see: Salazarr
Casper: (bonded)
You see: Casper
Artichart: [Veteran, RAGE]
You see: Artichart
Edna: The Shrine of Honesty has fallen to corruption!
Taoist: all release
You see: Frieden
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
Sanjeev: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Kal Vas Xen Nox: [Member, LoD]
You see: Kal Vas Xen Nox
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: all release
Cynical Siren has completed the achievement: Triggered (Basic).
an earth elemental: (summoned)
You see: an earth elemental
IDoTheWork: [Workwork, CPH]
You see: IDoTheWork
a pack llama: (tame)
You see: a pack llama
a pack llama: (tame)
You see: a pack llama
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Big Green One
You see: Big Green One
You see: Nello De Ntocca
Barry Allen: Seasoned Veteran
Barry Allen: [The Flash, 1CE][C]
You see: Barry Allen
IDoTheWork: [Workwork, CPH]
You see: IDoTheWork
a pack llama: (tame)
You see: a pack llama
a pack llama: (tame)
You see: a pack llama
spirit island: [jorge, lost]
You see: spirit island
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Edna: The Shrine of Honesty has fallen to corruption!
Kal Vas Xen Nox: [Member, LoD]
You see: Kal Vas Xen Nox
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: FizzleSticks
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Barry Allen: Seasoned Veteran
Barry Allen: [The Flash, 1CE][C]
You see: Barry Allen
Sanjeev: all release
Deez Nutz: Hardened Soldier
Deez Nutz: [Meet the Twins, SOF][C]
You see: Deez Nutz
You see: Merritt
MERKED: (bonded)
You see: MERKED
an earth elemental: (summoned)
You see: an earth elemental
could be Wes: [PROC][O]
You see: could be Wes
Barry Allen: Seasoned Veteran
Barry Allen: [The Flash, 1CE][C]
You see: Barry Allen
You see: Merritt
could be Wes: [PROC][O]
You see: could be Wes
You see: Big Green One
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
a shieldmaiden: [Deadman Isle]   [Skeleton, Crew]
You see: a shieldmaiden
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
another sandwich has completed the achievement: Transmutation (Basic).
N Peppa: Legendary Scribe
N Peppa: [Offister, NBK]
You see: N Peppa
Edna: The Shrine of Honesty has fallen to corruption!
You see: Lethal Dose
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Lethal Dose
Sanjeev: all release
LODSTYLE: [Administrator, LoD][C]
You see: LODSTYLE
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Arsen II: Legendary Chef
Arsen II: [rekt][O]
You see: Arsen II
BBcowards: (bonded)
You see: BBcowards
LODSTYLE: [Administrator, LoD][C]
You see: LODSTYLE
LODSTYLE: [Administrator, LoD][C]
You see: LODSTYLE
LODSTYLE: [Administrator, LoD][C]
You see: LODSTYLE
The world will save in 15 seconds.
Taoist: all release
LODSTYLE: [Administrator, LoD][C]
You see: LODSTYLE
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Barry Allen: Seasoned Veteran
Barry Allen: [The Flash, 1CE][C]
You see: Barry Allen
Checho: [Guildmaster, CDA]
You see: Checho
Nello De Ntocca: *focuses aggression*
The world is saving, please wait.
World save complete. The entire process took 3.1 seconds.
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
You see: spl dmg
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Edna: The Shrine of Honesty has fallen to corruption!
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Gxnqe: Triggered
You see: Lord Gxnqe
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Epi: Hardened Soldier
Epi: [On The Phone Loud AF, LUNK][C]
You see: Epi
Sanjeev: all release
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Always Strapped: [SOF][C]
You see: Always Strapped
Barry Allen: Seasoned Veteran
Barry Allen: [The Flash, 1CE][C]
You see: Barry Allen
You see: Cobrinha
Vile Punkbeach: [Officer, 1CE][C]
You see: Vile Punkbeach
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Always Strapped: [SOF][C]
You see: Always Strapped
You see: Cobrinha
Vile Punkbeach: [Officer, 1CE][C]
You see: Vile Punkbeach
Barry Allen: Seasoned Veteran
Barry Allen: [The Flash, 1CE][C]
You see: Barry Allen
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
Deez Nutz: Hardened Soldier
Deez Nutz: [Meet the Twins, SOF][C]
You see: Deez Nutz
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Goetia: Seasoned Soldier
Goetia: [LoD][C]
You see: Goetia
Sanjeev: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Cobrinha
Tam: [Veteran, RAGE]
You see: Tam
You see: Nello De Ntocca
Goetia: Seasoned Soldier
Goetia: [LoD][C]
You see: Goetia
You see: Cobrinha
the pale rider: Seasoned Soldier
You see: the pale rider
Mikhail Bakunin: [Anarchy, A][O]
You see: Mikhail Bakunin
Link-uog: [c2w][O]
You see: Link-uog
Amateur Hour: [Anarchy, A][O]
You see: Amateur Hour
Peaches: [one of the, boyz][O]
You see: Peaches
Nello De Ntocca: *focuses aggression*
Edna: The Shrine of Honesty has fallen to corruption!
the pale rider: Seasoned Soldier
You see: the pale rider
[Guild][El Trauco]: bunch of rekt petram 3, daerik ridable etc
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Amateur Hour: [Anarchy, A][O]
You see: Amateur Hour
Mikhail Bakunin: [Anarchy, A][O]
You see: Mikhail Bakunin
You see: Nello De Ntocca
Taoist: all release
Sanjeev: all release
MajesticClown: [Member, LoD][C]
You see: MajesticClown
A S H E N: Triggered
A S H E N: [Muscle, rekt][O]
You see: A S H E N
Vash TheStampede: Hardened Veteran
Vash TheStampede: [Humanoid Typhoon, rekt][O]
You see: Vash TheStampede
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Grims: That is out of my line of sight.
an earth elemental: (summoned)
You see: an earth elemental
Nit'sud: [Pug, Orcs]
You see: Nit'sud
[Guild][El Trauco]: i took off i got too much loot to stick around
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Vash TheStampede: Hardened Veteran
Vash TheStampede: [Humanoid Typhoon, rekt][O]
You see: Vash TheStampede
Taoist: all release
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Nello De Ntocca
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Ducky: Adventurer Initiate
Ducky: [Recruit, PROC]
You see: Ducky
Taoist: all release
Edna: The Shrine of Honesty has fallen to corruption!
Sanjeev: all release
You see: a dirty thief
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Taoist: all release
Sanjeev: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: all release
You see: Lethal Dose
You see: Nello De Ntocca
Taoist: all release
You see: Julia
You see: Lethal Dose
You see: Re-Red
could be Wes: [PROC][O]
You see: could be Wes
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Goetia: Seasoned Soldier
Goetia: [LoD][C]
You see: Goetia
Always Strapped: [SOF][C]
You see: Always Strapped
You see: MindYourBiscuits
LODSTYLE: [Administrator, LoD][C]
You see: LODSTYLE
Sanjeev: all release
Goetia: Seasoned Soldier
Goetia: [LoD][C]
You see: Goetia
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nello De Ntocca: *focuses aggression*
Edna: The Shrine of Honesty has fallen to corruption!
Taoist: all release
You see: Bloodless
an earth elemental: (summoned)
You see: an earth elemental
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Garrett the mage
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
You see: Bloodless
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nit'sud: [Pug, Orcs]
You see: Nit'sud
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
Radical Feminist: [Veteran, PEC][O]
You see: Radical Feminist
Sanjeev: all release
You see: Nello De Ntocca
Taoist: all release
Nello De Ntocca: *focuses aggression*
You see: Dom Pedro
LODSTYLE: [Administrator, LoD][C]
You see: LODSTYLE
A S H E N: Triggered
A S H E N: [Muscle, rekt][O]
You see: A S H E N
Vash TheStampede: Hardened Veteran
Vash TheStampede: [Humanoid Typhoon, rekt][O]
You see: Vash TheStampede
an earth elemental: (summoned)
You see: an earth elemental
Ariana Grande: Legendary Blacksmith
Ariana Grande: [BreakUpWithUrGirlfriend, PEC][O]
You see: Ariana Grande
Nello De Ntocca: *focuses aggression*
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Nello De Ntocca
Taoist: all release
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Edna: The Shrine of Honesty has fallen to corruption!
You see: Azaz'el
Sir Kruber: [Sweet Roll, TRSH][C]
You see: Sir Kruber
BeanoOo: Hardened Strategist
BeanoOo: [Low Class White , TRSH][C]
You see: BeanoOo
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
LODSTYLE: [Administrator, LoD][C]
You see: LODSTYLE
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Bacacay
You see: MindYourBiscuits
Always Strapped: [SOF][C]
You see: Always Strapped
Taoist: all release
Nello De Ntocca: *focuses aggression*
You see: Bear Trap Tim
c: (tame)
You see: c
b: (tame)
You see: b
d: (tame)
You see: d
a: (tame)
You see: a
e: (tame)
You see: e
Sanjeev: all release
Liadan: Shhhh!
You see: Nello De Ntocca
Baba Yetu: [NVOS, DoK][C]
You see: Baba Yetu
Goetia: Seasoned Soldier
Goetia: [LoD][C]
You see: Goetia
Sir Kruber: [Sweet Roll, TRSH][C]
You see: Sir Kruber
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Merritt
A S H E N: Triggered
A S H E N: [Muscle, rekt][O]
You see: A S H E N
Link-uog: [c2w][O]
You see: Link-uog
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
a horse: (tame)
You see: a horse
Re-Red: *hiking to destination*
Re-Red: *hiking to destination*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
A S H E N: Triggered
A S H E N: [Muscle, rekt][O]
You see: A S H E N
Re-Red: *hiking to destination*
Taoist: all release
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Re-Red: *hiking to destination*
You see: Merritt
an earth elemental: (summoned)
You see: an earth elemental
LODSTYLE: [Administrator, LoD][C]
You see: LODSTYLE
You see: Azaz'el
Re-Red: *hiking to destination*
Sanjeev: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Always Strapped: [SOF][C]
You see: Always Strapped
You see: MindYourBiscuits
A S H E N: Triggered
A S H E N: [Muscle, rekt][O]
You see: A S H E N
You see: Dom Pedro
A S H E N: Vas Ort Flam [Explosion]
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
Sanjeev: all release
Edna: The Shrine of Honesty has fallen to corruption!
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
You see: MindYourBiscuits
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
an earth elemental: (summoned)
You see: an earth elemental
the pale rider: Seasoned Soldier
You see: the pale rider
Sanjeev: all release
Dom Pedro: Kal Xen [Summon Creature]
You see: MindYourBiscuits
an earth elemental: (summoned)
You see: an earth elemental
A S H E N: Triggered
A S H E N: [Muscle, rekt][O]
You see: A S H E N
Taoist: all release
Amateur Hour: [Anarchy, A][O]
You see: Amateur Hour
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Liadan: Shhhh!
You see: Nello De Ntocca
You see: Ylana
Sanjeev: all release
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Nit'sud: [Pug, Orcs]
You see: Nit'sud
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
Einar Magnhild: [Recruit, TRSH][C]
You see: Einar Magnhild
Arsen II: Legendary Chef
Arsen II: [rekt][O]
You see: Arsen II
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Psalms: [Friar, Sir.]
You see: Psalms
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
a water elemental: (summoned)
You see: a water elemental
Taoist: all release
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Taoist: all release
You see: Nello De Ntocca
You see: Bear Trap Tim
c: (tame)
You see: c
b: (tame)
You see: b
d: (tame)
You see: d
a: (tame)
You see: a
e: (tame)
You see: e
The Dank Nugget: [Yabba Dabba Doo, SOF]
You see: The Dank Nugget
Edna: The Shrine of Honesty has fallen to corruption!
You see: Nello De Ntocca
Sanjeev: all release
You see: Nello De Ntocca
Taoist: all release
You see: Ylana
You see: a dirty thief
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Sanjeev: all release
Strike: (bonded)
You see: Strike
Steely: (bonded)
You see: Steely
John Blaze: Guardian of Cavernam
John Blaze: [Drunken Officer, DI]
You see: Lord John Blaze
a bonfire wisp: (bonded)
You see: a bonfire wisp
Nello De Ntocca: *focuses aggression*
an earth elemental: (summoned)
You see: an earth elemental
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Taoist: all release
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
You see: Nello De Ntocca
Sanjeev: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
AshPokemons: Domesticator
You see: AshPokemons
Taoist: Kal Vas Xen An Flam [Summon Water Elemental]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Ingmar: Your gold balance is 146,975.
Taoist: all release
AshPokemons: Domesticator
You see: AshPokemons
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
an earth elemental: (summoned)
You see: an earth elemental
Edna: The Shrine of Honesty has fallen to corruption!
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
Link-uog: [c2w][O]
You see: Link-uog
Link-uog: [c2w][O]
You see: Link-uog
[Guild][Ungoliant]: uhhh classic UO doesnt have razor or anything attached now?
You see: Nello De Ntocca
Ghangis Khan: Artificer Associate
Ghangis Khan: [Timmy the Trammie, DnT]
You see: Ghangis Khan
a: (bonded)
You see: a
t: (bonded)
You see: t
You see: Spriggan
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Sanjeev: all release
Deez Nutz: Hardened Soldier
Deez Nutz: [Meet the Twins, SOF][C]
You see: Deez Nutz
[Guild][Jack Churchill]: go to forums
You see: Bacacay
[Guild][Jack Churchill]: they have a fix
AshPokemons: Domesticator
You see: AshPokemons
[Guild][I BANKSIT IRL]: it does. a lot of people are having that issue. id search in the classic uo discord
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Deez Nutz: Hardened Soldier
Deez Nutz: [Meet the Twins, SOF][C]
You see: Deez Nutz
You see: Bacacay
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Sir Kruber: [Sweet Roll, TRSH][C]
You see: Sir Kruber
Link-uog: [c2w][O]
You see: Link-uog
a llama: (tame)
You see: a llama
Peaches: [one of the, boyz][O]
You see: Peaches
Mikhail Bakunin: [Anarchy, A][O]
You see: Mikhail Bakunin
You see: Cobrinha
You see: Nello De Ntocca
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Nello De Ntocca: *focuses aggression*
Edna: The Shrine of Honesty has fallen to corruption!
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
You see: Garrett the mage
Nello De Ntocca: *focuses aggression*
Taoist: bank
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
You see: Liadan the scribe
Sanjeev: all release
Ingmar: Your gold balance is 279,522.
The Dank Nugget: [Yabba Dabba Doo, SOF]
You see: The Dank Nugget
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Mugen has completed the achievement: Shrine Boss Slayer (Basic).
Your guild's prestige has increased by 4
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
Edna: The Shrine of Honesty has fallen to corruption!
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Nit'sud: [Pug, Orcs]
You see: Nit'sud
You see: Taoist
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
The world will save in 15 seconds.
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
Epi: Hardened Soldier
Epi: [On The Phone Loud AF, LUNK][C]
You see: Epi
You see: Merritt
Fly Agaric: [Officer, Path][O]
You see: Fly Agaric
Radical Feminist: [Veteran, PEC][O]
You see: Radical Feminist
The world is saving, please wait.
World save complete. The entire process took 3.2 seconds.
Gugnar the Tall: [Shepherd, VKNG]
You see: Gugnar the Tall
Sanjeev: all release
You see: Azaz'el
Barry Allen: Seasoned Veteran
Barry Allen: [The Flash, 1CE][C]
You see: Barry Allen
Epi: Hardened Soldier
Epi: [On The Phone Loud AF, LUNK][C]
You see: Epi
You see: Merritt
Edna: The Shrine of Honesty has fallen to corruption!
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
You see: Nello De Ntocca
Epi: Hardened Soldier
Epi: [On The Phone Loud AF, LUNK][C]
You see: Epi
You see: Merritt
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Gxnqe: Triggered
You see: Lord Gxnqe
Tamma: I have placed a check in your bank box for the amount of 18,000
an earth elemental: (summoned)
You see: an earth elemental
[Guild][Exio]: weebs come up
Gugnar the Tall: [Shepherd, VKNG]
You see: Gugnar the Tall
Barry Allen: Seasoned Veteran
Barry Allen: [The Flash, 1CE][C]
You see: Barry Allen
You see: Nello De Ntocca
Barry Allen: Seasoned Veteran
Barry Allen: [The Flash, 1CE][C]
You see: Barry Allen
chacha: (bonded)
You see: chacha
aboogie: (bonded)
You see: aboogie
Castro: [Private, Syn]
You see: Castro
Sanjeev: all release
Barry Allen: Seasoned Veteran
Barry Allen: [The Flash, 1CE][C]
You see: Barry Allen
You see: Azaz'el
You see: Nello De Ntocca
Nello De Ntocca: *focuses aggression*
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Barry Allen: Seasoned Veteran
Barry Allen: [The Flash, 1CE][C]
You see: Barry Allen
You see: Azaz'el
You see: Nello De Ntocca
You see: Lethal Dose
Barry Allen: Seasoned Veteran
Barry Allen: [The Flash, 1CE][C]
You see: Barry Allen
Sanjeev: all release
Nit'sud: [Pug, Orcs]
You see: Nit'sud
Barry Allen: Seasoned Veteran
Barry Allen: [The Flash, 1CE][C]
You see: Barry Allen
an earth elemental: (summoned)
You see: an earth elemental
Wiki NPC: [Non-Consensual, N-C]
You see: Wiki NPC
BeanoOo: Hardened Strategist
BeanoOo: [Low Class White , TRSH][C]
You see: BeanoOo
Sir Kruber: [Sweet Roll, TRSH][C]
You see: Sir Kruber
Angalor: Seasoned Soldier
Angalor: [Officer, Path][O]
You see: Angalor
Peaches: [one of the, boyz][O]
You see: Peaches
You see: Bacacay
Barry Allen: Seasoned Veteran
Barry Allen: [The Flash, 1CE][C]
You see: Barry Allen
[Guild][Exio]: leebus where you go
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
[Guild][Leebus]: i left
Sanjeev: all release
Nello De Ntocca: *focuses aggression*
Edna: The Shrine of Honesty has fallen to corruption!
[Guild][Leebus]: got my ankhs
[Guild][Exio]: i grabbed your shit
You see: Nello De Ntocca
Dirt Wolf: Treasure Hunter
Dirt Wolf: [Keep Digging, SOF]
You see: Dirt Wolf
[Guild][Leebus]: oh
Wiki NPC: [Non-Consensual, N-C]
You see: Wiki NPC
Dirt Wolf: Kal Ort Por [Recall]
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
Cap Barbanera: Domesticator
You see: Cap Barbanera
[Guild][Leebus]: ill take the wire, dont need the rest lol
an earth elemental: (summoned)
You see: an earth elemental
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Bacacay
You see: Bacacay
You see: Nello De Ntocca
[Guild][Exio]: yeah thats why i grabbed it lol
You see: Nello De Ntocca
Michael E Bolton: [End of Days, SOF]
You see: Michael E Bolton
[Guild][Leebus]: gh?
Sanjeev: all release
[Guild][Exio]: yeah
El Trauco has completed the achievement: 'Transmutation (Advanced)'.
Your guild's prestige has increased by 0.08
Nit'sud: [Pug, Orcs]
You see: Nit'sud
StephCurry: (bonded)
You see: StephCurry
CharlesBarkley: (bonded)
You see: CharlesBarkley
You see: Kelsier
Cap Barbanera: Domesticator
You see: Cap Barbanera
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
Evil Dead: Landowner
Evil Dead: [End of Days, SOF]
You see: Evil Dead
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Edna: The Shrine of Honesty has fallen to corruption!
You see: Nello De Ntocca
Salty Soldier: [Ratman, RAT]
You see: Salty Soldier
Sanjeev: all release
Salty Soldier: [Ratman, RAT]
You see: Salty Soldier
[Guild][Leebus]: need a comm phyl exio?
Sir Kruber: [Sweet Roll, TRSH][C]
You see: Sir Kruber
Vash TheStampede: Hardened Veteran
Vash TheStampede: [Humanoid Typhoon, rekt][O]
You see: Vash TheStampede
A S H E N: Triggered
A S H E N: [Muscle, rekt][O]
You see: A S H E N
Salazarr: (bonded)
You see: Salazarr
Casper: (bonded)
You see: Casper
[Guild][Exio]: yeah i lost mine
Wiki NPC: [Non-Consensual, N-C]
You see: Wiki NPC
Artichart: [Veteran, RAGE]
You see: Artichart
[Guild][Exio]: and my book
A S H E N: Triggered
A S H E N: [Muscle, rekt][O]
You see: A S H E N
Nello De Ntocca: *focuses aggression*
[Guild][Exio]: just now
A S H E N: Triggered
A S H E N: [Muscle, rekt][O]
You see: A S H E N
Sanjeev: all release
Sir Kruber: [Sweet Roll, TRSH][C]
You see: Sir Kruber
[Guild][Jack Churchill]: I got a command
[Guild][Jack Churchill]: and a book
Vash TheStampede: Hardened Veteran
Vash TheStampede: [Humanoid Typhoon, rekt][O]
You see: Vash TheStampede
[Guild][Jack Churchill]: meet at GH
an earth elemental: (summoned)
You see: an earth elemental
[Guild][Leebus]: ill bring you a phyl
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Guerrilla: [Ape Shit, SOF][C]
You see: Guerrilla
You see: Nello De Ntocca
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
Guerrilla: [Ape Shit, SOF][C]
You see: Guerrilla
a beef elemental: [rekt]
You see: a beef elemental
You see: Nello De Ntocca
Cap Barbanera: Domesticator
You see: Cap Barbanera
a water drake: (bonded)
You see: a water drake
a skeletal dragon: (bonded)
You see: a skeletal dragon
a beef elemental: [rekt]
You see: a beef elemental
Castro: [Private, Syn]
You see: Castro
Guerrilla: [Ape Shit, SOF][C]
You see: Guerrilla
You see: Nello De Ntocca
a beef elemental: [rekt]
You see: a beef elemental
[Guild][Jack Churchill]: supreme or eminently?
Sanjeev: all release
Edna: The Shrine of Honesty has fallen to corruption!
an earth elemental: (summoned)
You see: an earth elemental
[Guild][Exio]: lost an emin
Nit'sud: [Pug, Orcs]
You see: Nit'sud
[Guild][Exio]: but ill take either lol
Sir Kruber: [Sweet Roll, TRSH][C]
You see: Sir Kruber
A S H E N: Triggered
A S H E N: [Muscle, rekt][O]
You see: A S H E N
Vash TheStampede: Hardened Veteran
Vash TheStampede: [Humanoid Typhoon, rekt][O]
You see: Vash TheStampede
[Guild][Leebus]: oh i have a bunch of emin
Fly Agaric: [Officer, Path][O]
You see: Fly Agaric
You see: a dirty thief
Fly Agaric: [Officer, Path][O]
You see: Fly Agaric
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Vash TheStampede: Hardened Veteran
Vash TheStampede: [Humanoid Typhoon, rekt][O]
You see: Vash TheStampede
an earth elemental: (summoned)
You see: an earth elemental
Sanjeev: all release
You see: Nello De Ntocca
[Guild][Jack Churchill]: I won't be using it for a while
[Guild][Jack Churchill]: ...:)
You see: Nello De Ntocca
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
Nello De Ntocca: *focuses aggression*
Salty Soldier: [Ratman, RAT]
You see: Salty Soldier
Salty Soldier: [Ratman, RAT]
You see: Salty Soldier
an earth elemental: (summoned)
You see: an earth elemental
Michael E Bolton: [End of Days, SOF]
You see: Michael E Bolton
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
Sanjeev: all release
Michael E Bolton: [End of Days, SOF]
You see: Michael E Bolton
Guerrilla: [Ape Shit, SOF][C]
You see: Guerrilla
Sanjeev: all release
a beef elemental: [rekt]
You see: a beef elemental
Peaches: [one of the, boyz][O]
You see: Peaches
Nello De Ntocca: *focuses aggression*
A S H E N: Triggered
A S H E N: [Muscle, rekt][O]
You see: A S H E N
Vash TheStampede: Hardened Veteran
Vash TheStampede: [Humanoid Typhoon, rekt][O]
You see: Vash TheStampede
Edna: The Shrine of Honesty has fallen to corruption!
Fly Agaric: [Officer, Path][O]
You see: Fly Agaric
the pale rider: Seasoned Soldier
You see: the pale rider
Peaches: [one of the, boyz][O]
You see: Peaches
Sanjeev: Kal Vas Xen Ylem [Summon Earth Elemental]
an earth elemental: (summoned)
You see: an earth elemental
You see: Nello De Ntocca
A S H E N: Triggered
A S H E N: [Muscle, rekt][O]
You see: A S H E N
MerknardoDaVinci: [FNG, SOF][C]
You see: MerknardoDaVinci
BeanoOo: Hardened Strategist
BeanoOo: [Low Class White , TRSH][C]
You see: BeanoOo
an earth elemental: (summoned)
You see: an earth elemental
You see: Big Green One
could be Wes: [PROC][O]
You see: could be Wes
Sanjeev: all release
You see: Azaz'el
[Guild][Ungoliant]: this is going to sound real dumb... but it won't let me edit the file says im not owner of it or adm
You see: Nello De Ntocca
[Guild][Leebus]: where you at exio
Nello De Ntocca: *focuses aggression*
You see: Big Green One
You see: Nello De Ntocca
Vash TheStampede: Hardened Veteran
Vash TheStampede: [Humanoid Typhoon, rekt][O]
You see: Vash TheStampede
You see: Cobrinha
[Guild][Exio]: my house
Fly Agaric: [Officer, Path][O]
You see: Fly Agaric
Amateur Hour: [Anarchy, A][O]
You see: Amateur Hour
the pale rider: Seasoned Soldier
You see: the pale rider
You see: Chizzzay
You see: Big Green One
A S H E N: Triggered
A S H E N: [Muscle, rekt][O]
You see: A S H E N
Sanjeev: all release
Peaches: [one of the, boyz][O]
You see: Peaches
the pale rider: Seasoned Soldier
You see: the pale rider
[Guild][Orlik]: fortune ext and fortune phy from ank :P
Ralph Lauren: Legendary Tailor
Ralph Lauren: [Proselyte, Amyr]
You see: Ralph Lauren
Ingmar: Your gold balance is 45,254.
an earth elemental: (summoned)
You see: an earth elemental
