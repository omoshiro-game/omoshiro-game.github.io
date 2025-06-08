---
title: Enemy Character | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Enemy Character
  url: /menu_support/srpgeditor2_help/db_enemy/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Enemy Character".
h1: Enemy Character
---

<a name="TOP"></a>

## Enemy Character Table of Contents

- [Overview](#ABOUT)
- [Enemy Character Editing](#EDIT)
- [Battle AI Editing](#BATTLEAI)

<a name="ABOUT"></a>

## Overview

Enemy characters belong to some class.  
An enemy character's abilities and growth are determined by the settings in Database "Class", "Enemy Character", and "System".  
Similar to ally characters, enemy characters' graphics, movement range, and sense (ease of learning skills) are inherited from their class.  
Stats such as HP, Attack, Defense, and their growth values upon level up can either directly apply the class's settings to the enemy character, or the enemy character can have stats with characteristics far different from the class.  

> Character growth system is explained in more detail in ["Growth System"](../growing/).  

Enemy character movement AI settings are done in stage edit, but battle AI is set in the database.  
Enemy characters can only use skills incorporated into their battle AI and only learn skills incorporated into their battle AI, so they do not support random skill learning.  

[Back to top of page](#TOP)

<a name="EDIT"></a>

## Enemy Character Editing

Database "Enemy Character" Window

[![Screenshot of Database "Enemy Character" Window](/menu_support/srpgeditor2_help/db_enemy/enemy.jpg)](/menu_support/srpgeditor2_help/db_enemy/enemy.jpg)

On the left side of the window is the enemy character data list.  
The "New", "Clear", and "Data Count" buttons below it allow you to add new data or clear data.  

Each setting item is explained below.  

● Name  
The character's name when "Randomly determine name" is OFF.  

● Randomly determine name  
Whether the character's name is randomly selected from a "Random Name List File".  

● Random Name List File  
When "Randomly determine name" is ON, this file contains a list of candidates for the character's name.  
**This file is a plain text file, so it can be edited.**  

> For details on random name list files, refer to ["File Explanation"](../file/#RANDOMNAME).  

● Description  
**In the game, this is the enemy's description displayed below the status window.**  
It's a good place to write information about movement AI or battle AI.  

● Reference: #P  
**In "Description", you can display symbols in the game by entering special characters "#P.*" (* is the graphic number of the symbol).  
This item is only for confirming symbol graphics and has no effect on the game regardless of the number.**  

● Random stat growth  
Same as database ["Ally Character"](../db_friend/#RANDOMGROWING).  

● Growth timing  
Same as database ["Ally Character"](../db_friend/#GROWINGTIME).  

● Class  
The character's class (profession).  
Specified from "Class" in the database.  

● Level  
The character's level.  
By the way, enemies do not level up in combat.  

● Fix EX gained  
You can fix the EX (experience points) gained when defeating an enemy here.  
If not fixed, it follows the "EX Gained" formula in Database "System 2".  

● "HP" ~ "Agility" "Initial Value" and "Final Value"  
Mostly the same as database ["Ally Character"](../db_friend/#STATUS).  
The difference between allies and enemies is "Game Value" and "Reference Value".  
**The "Game Value" when "Initial Value" is "0", and "Reference Value", are values after level up that adopt the "Initial Value" and "Final Value" from the "Class" database. However, for enemies, each stat is further corrected by "Enemy Stat Correction (%) according to Class" in the "System 2" database.  
For example, this feature is useful when you want to make enemies slightly weaker than allies (and thus more numerous) even if their levels are similar.**  

● Battle AI  
Enemy character's battle AI.  
Details will be explained later.  

● Gold gained upon defeat  
Here you set party variables such as the money gained when defeating an enemy.  

[Back to top of page](#TOP)

<a name="BATTLEAI"></a>

## Battle AI Editing

Battle AI editing allows you to set combat action patterns in a list format.  
**Battle AI data directly becomes the enemy's learned skills.**  

Manual combat and auto-battle have significantly different systems.  
**In manual combat, actions are randomly determined based on "Priority Level," "Priority Value," and "Conditions" within the battle AI list.**  
**In auto-battle, actions higher in the battle AI list are simply prioritized, and the same skill is used repeatedly until SP or remaining uses run out.**  

The "Insert," "Edit," and "Delete" buttons in the "Battle AI" frame are for editing the battle AI list.  
Clicking "Insert" or "Edit" will open the following window.  

Battle AI Window

![Battle AI Window Screenshot](/menu_support/srpgeditor2_help/db_enemy/battleai.jpg)

Each setting item is explained below.  

● Action  
The action the enemy takes.  
In auto-battle, "Attack (Normal Attack)" and "Quick" are invalid.  
"Quick," which is only effective in manual combat, is an action that uses a skill once per turn without consuming a turn.  

● Used Skill  
The skill used when "Skill" or "Quick" is specified for "Action".  

● Priority Level  
In manual combat, among the battle AIs whose "Conditions" are met, only the battle AI with the highest "Priority Level" may operate.  
Invalid in auto-battle.  

● Priority Value  
In manual combat, when multiple battle AIs with the highest "Priority Level" and met "Conditions" exist, this value is used as a ratio to randomly determine which battle AI operates.  
**For example, if Skill A has a priority value of 10 and Skill B has a priority value of 20, the probability of using Skill B is twice that of Skill A.**  
Invalid in auto-battle.  

● Condition  
In manual combat, if all conditions in the condition list are met, this battle AI may operate.  
The "Insert," "Edit," and "Delete" buttons in the "Condition" frame are for editing the condition list.  
Clicking "Insert" or "Edit" will open a window for setting conditions.  
  
Conditions are set in the format: "[Target] 's [Information] is [Value] [Evaluation Method]".  
・[Target] ... Self or opponent.  
・[Information] ... Information such as HP or number of turns.  
・[Value] ... Condition value. **If [Information] is "Class" or "Terrain", specify by data number.** You can also "Specify by %".  
・[Evaluation Method] ... Evaluation method.  
  
Conditions themselves are invalid in auto-battle.  

● In manual combat, ignore this action when calculating the action target for movement AI's "Most Effective Ally".  
**In calculating the action target for movement AI's "Most Effective Ally", the program generally analyzes the character's battle AI to determine the expected damage. However, if this setting is enabled, you can make it ignore this action (not include it in the expected damage) during that analysis.**  

> For details, refer to ["Enemy Placement"](../enemy/#EFFECTIVEFRIEND).  

★★ Flow of action determination ★★  
I've explained item by item up to this point, but I think there might be parts that are hard to understand, so finally, I'll summarize the flow of action determination.  

● In manual combat  
It becomes the enemy's turn.  
↓  
The program **extracts only the battle AIs with "Action" set to "Quick" from the battle AI list.**  
↓  
From those, it extracts only the battle AIs that have enough SP and remaining uses for the action.  
↓  
From those, it extracts only the battle AIs whose "Conditions" are met.  
↓  
From those, it extracts only the battle AIs with the highest "Priority Level".  
↓  
From those, it randomly extracts just one based on the ratio of each "Priority Value".  
↓  
"Quick" activates!  
↓  
**Next, it extracts only the battle AIs whose "Action" is not "Quick" from the battle AI list.**  
↓  
From those, it extracts only the battle AIs that have enough SP and remaining uses for the action.  
**※If SP or remaining uses are insufficient for all battle AIs, it will always be a normal attack.**  
↓  
From those, it extracts only the battle AIs whose "Conditions" are met.  
**※If "Conditions" are not met for all battle AIs, it will always be a normal attack.**  
↓  
From those, it extracts only the battle AIs with the highest "Priority Level".  
↓  
From those, it randomly extracts just one based on the ratio of each "Priority Value".  
↓  
Acts (without Quick)!  

● In auto-battle  
It becomes the enemy's turn.  
↓  
The program extracts only the battle AIs whose "Action" is "Skill" from the battle AI list.  
↓  
From those, it extracts only the battle AIs that have enough SP and remaining uses for the action.  
↓  
From those, it extracts only the battle AI at the very top of the battle AI list.  
↓  
Acts!  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_skill/)

[To Help Table of Contents](../)