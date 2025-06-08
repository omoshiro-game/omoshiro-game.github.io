---
title: Stage Settings | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Stage Settings
  url: /menu_support/srpgeditor2_help/stage/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Stage Settings".
h1: Stage Settings
---


<a name="TOP"></a> 

## Stage Settings

"Stage Settings" Window

[![Screenshot of "Stage Settings" Window](/menu_support/srpgeditor2_help/stage/stage.jpg)](/menu_support/srpgeditor2_help/stage/stage.jpg)

Main Menu > "Stage" > "Stage Settings" allows you to configure stage-wide settings.  

● Stage Name  
The name of the stage.  
**It will not be displayed in the game.**  

● Width / Height  
The size of the stage.  
20x15 becomes one screen size.  

● Ally Initial Position  
You can only place allies at the position specified here.  
Position is specified from "Position Group" on the stage.  

● Background  
The background of the stage map.  
Specified from "Background" in the database.  

● BGM  
The BGM for the stage map.  
Specified from "BGM" in the database.  

● Make all enemy groups appear from start  
Whether to make all enemies appear from the start of the stage.  
**If you want to have reinforcements or ambushes appear mid-stage, set this to OFF** and then enable arbitrary groups with event action "Manipulate Enemy Group" mid-stage to make enemies appear.  

> For details on event action "Manipulate Enemy Group" and specific examples of reinforcement settings, refer to ["Event Actions"](../eventact/#OPENEMYGROUP).  

● Rewards for stage clear  
Rewards for stage clear. Includes gold acquisition, etc.  
Rewards can also be reduced based on the number of turns taken to clear the stage.  
Also, values can be changed for the first clear and subsequent clears.  

● EX gained correction (%)  
Specify the correction rate for EX gained in combat as a percentage.  
Values can be changed for the first play and subsequent plays.  

● Gold gained correction (%) for enemies  
Specify the correction rate for gold gained from enemies in combat as a percentage.  
Values can be changed for the first play and subsequent plays.  

● Display text images (Frame)  
Whether to display text images for "CLEAR!", "GAMEOVER" respectively.  
If "CLEAR!" is OFF, beware that the reward acquisition display will also be cut (only the display is affected; rewards are still acquired).  

● Victory Condition Explanation (Frame)  
Here, you set the explanation for stage clear conditions.  
**This is merely an "explanation"; the actual clear conditions must be set in an event.**  
When the "Rules" command is executed on the stage map, the explanation set here will be displayed, and processing for condition selection (when Z key is pressed) will be executed.  
The "Insert", "Edit", and "Delete" buttons are for editing the victory condition explanation list.  
Clicking "Insert" or "Edit" opens the following window.  
  

Condition Explanation Window

![Screenshot of Condition Explanation Window](/menu_support/srpgeditor2_help/stage/rule.jpg)

  
Explanation of each setting item.  
  
○ Text  
The text to display.  
  
○ Target to align cursor  
The target or coordinates for the map cursor to move to when selecting a condition.  
Can be specified by leader, enemy, position group, or coordinates (X, Y).  
For example, if "Defeat boss" is the victory condition, you might specify the boss's ID here.  
  
○ Position group to display  
The position group to highlight when selecting a condition.  
For example, if "Occupy enemy territory" is the victory condition, you might specify that territory here.  

● Defeat Condition Explanation (Frame)  
Explanation of stage defeat conditions.  
The setting method is the same as "Victory Condition Explanation".  

● Other Explanations (Special Rules, etc.) (Frame)  
Explanation of stage special rules, etc.  
If there's any information you want to convey to the player beyond victory and defeat conditions, it might be good to write it here.  
The setting method is the same as "Victory Condition Explanation".  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../posgroup/)

[To Help Table of Contents](../)