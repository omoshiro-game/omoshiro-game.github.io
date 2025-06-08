---
title: Ally Character | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Ally Character
  url: /menu_support/srpgeditor2_help/db_friend/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Ally Character".
h1: Ally Character
---

<a name="TOP"></a>

## Ally Character Table of Contents

- [Overview](#ABOUT)
- [Ally Character Editing](#EDIT)

<a name="ABOUT"></a>

## Overview

Ally characters belong to some class.  
An ally character's abilities and growth are determined by the settings in Database "Class", "Ally Character", and "System".  
Ally characters' graphics, movement range, and sense (ease of learning skills) are inherited from their class.  
Stats such as HP, Attack, Defense, and their growth values upon level up can either directly apply the class's settings to the ally character, or the ally character can have stats with characteristics far different from the class.  
# Character growth system is explained in more detail in ["Growth System"](../growing/).  

[Back to top of page](#TOP)

<a name="EDIT"></a>

## Ally Character Editing

Database "Ally Character" Window

[![Screenshot of Database "Ally Character" Window](/menu_support/srpgeditor2_help/db_friend/friend.jpg)](/menu_support/srpgeditor2_help/db_friend/friend.jpg)

On the left side of the window is the ally character data list.  
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

● Register in Ally Shop from start  
Whether the character is registered in the scout list of the menu "Scout" from the beginning of the game.  

● Can be hired infinitely  
If this is checked, when a character is hired from the menu "Scout", a new character is immediately generated and added to the scout list.  
If the character has no random elements like random stat growth, an identical character will be replenished.  

● Cannot be discharged  
Whether it cannot be removed from the party in the menu "Discharge".  

● Random stat growth  
Whether to randomly grow stats ("HP" ~ "Agility").  
In random stat growth, **the character's individuality is not completely lost, as growth values from random stat growth are added based on the "initial value" and "final value" of the stats.**  

● Growth timing  
Growth timing when "Random stat growth" is OFF.  
Set within the range of "-10" to "10".  
Smaller values mean early bloomer types, where stats increase significantly upon level up at lower levels.  
Larger values mean late bloomer types, where stats increase significantly upon level up at higher levels.  
"0" means average, with uniform growth at all levels.  
**When "Random stat growth" is ON, this setting is invalid, and instead "Stat Growth Timing" in Database "System 1" is applied.**  

● Class  
The character's class (profession).  
Specified from "Class" in the database.  

● Level  
Initial LV.  

● "HP" ~ "Agility" "Initial Value" and "Final Value"  
"Initial Value" is the value at level 1.  
"Final Value" is the value at maximum level. (Random stat growth increases are separate).  
If "Initial Value" is "0", it adopts the "Initial Value" and "Final Value" from Database "Class". (Random stat growth increases are separate).  
If "Final Value" is "0", that stat will not grow, and random stat growth will also be disabled (no stat growth value will be distributed in random stat growth).  
  
**The "Game Value" to the left of "Initial Value" is the value after leveling up to "Level".  
The "Reference Value" to the right of "Final Value" is the value after leveling up to "Level", adopting the "Initial Value" and "Final Value" from Database "Class".  
However, both "Game Value" and "Reference Value" ignore stat increases from random stat growth.**  
**The values after level up consider "Growth Timing". If "Random stat growth" is enabled, "Stat Growth Timing" from Database "System 1" is applied, but the "Stat Growth Timing" here is random in the game, while here it's the average of min and max values.**  
**Adjusting character stats based on "Reference Value" might make game balance easier to adjust.**  

● Random sense increase  
Whether to randomly increase sense for each skill category.  
In random sense increase, character individuality is not completely lost, as sense increase values from random sense increase are added based on the sense set in the class.  

● Random skill learning  
Whether to randomly learn skills.  
Which skills are learned and with what probability depends on the skill's settings and the character's innate sense.  

● Learned Skills  
These are skills that are always learned upon level up, not randomly.  
Edit the learned skill list with the "Insert," "Edit," and "Delete" buttons.  

● Regenerate characters in Ally Shop every stage clear  
Whether to regenerate characters registered in the scout list of the menu "Scout" every time a stage is cleared.  
If this is enabled, the program will temporarily delete characters from the scout list and then regenerate them upon stage clear.  
If you have settings where scout power affects character stats and sense, it is recommended to enable this setting to ensure characters are generated with the latest possible scout power.**  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_enemy/)

[To Help Table of Contents](../)