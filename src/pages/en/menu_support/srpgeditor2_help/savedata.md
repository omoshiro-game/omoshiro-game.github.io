---
title: Game Save Data and Reflection of Setting Changes when Resuming from "Continue" | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Game Save Data and Reflection of Setting Changes when Resuming from "Continue"
  url: /menu_support/srpgeditor2_help/savedata/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Game Save Data and Reflection of Setting Changes when Resuming from "Continue"".
h1: Game Save Data and Reflection of Setting Changes when Resuming from "Continue"
---


<a name="TOP"></a> 

## Game Save Data and Reflection of Setting Changes when Resuming from "Continue" Table of Contents

- [Save Data Content](#contents)
- [About Reflection of Setting Changes when Resuming from "Continue"](#reflection)

<a name="contents"></a> 

## Save Data Content

Game save data primarily consists of the following data:  
  
・Ally data  
・Scout list character data (character data displayed in "Scout")  
・Revival list character data (character data displayed in "Revive")  
・Other party-wide data (money, scout, stock, etc.)  
・Shop goods (skill data numbers)  
・Training settings, playable enemies  
・Config settings  
・Clear information for each stage  
・Common variables  
・BGM numbers for each scene  
  
You probably don't need to memorize them all, but...  

[Back to top of page](#TOP)

<a name="reflection"></a> 

## About Reflection of Setting Changes when Resuming from "Continue"

There's something you need to be aware of when resuming a game from "Continue".  
After saving the game once, if you then change settings in the editor, such as in Database "Ally Character", and resume playing from "Continue", **changes to some settings will not be reflected in ally characters that were generated before the setting change. (This includes ally characters that were added to the scout list or regenerated before the setting change).**  
Some setting changes made in the editor do not extend to ally characters in the game's save data.  
However, **class and ally character stats and class sense are specially reflected in ally characters generated before the setting change**, so balancing should be easy.  
**Only some setting items are not reflected** in ally characters generated before the setting change; **specifically, these are:**  
  
- **Database "Class": Skill for "Normal Attack"**  
- **Database "Ally Character": "Growth Timing" and stats, and almost all other items except those two ("Name", "Class", "Learned Skills", etc.)**  
- **Database "System 1": All items in the "Random Ability Up" frame**  
  
For stats, the [Growth System](../growing/) page explains that "stats are actually managed divided into base values and individual values". In this case, it's the individual values that are not reflected by editor setting changes.  
Base values are grown from scratch with the latest editor settings each time save data is loaded from "Continue", but individual values cannot be handled this way due to their randomness.  
This only applies to ally characters generated *before* the setting change; characters generated *after* the setting change will be reflected even when playing from "Continue".  
**Of course, if you play from "New Game", all characters will be reflected. If you're unsure when you changed settings in the editor, starting from "New Game" is the safest bet.**  

Here's an example:  
  
(1) In the editor, set Ally A's HP to 100 and name to Yashiyu.  
↓  
(2) In the game, add Ally A to the party and save data.  
↓  
(3) In the editor, change Ally A's HP to 120 and name to Ozzy. Also add Fire to learned skills.  
↓  
(4) In the game, select "Continue" and load save data from (2).  
  
In this scenario, the setting change for ally character stats is reflected, so HP becomes 120.  
However, name and learned skill settings are not reflected, so the name remains Yashiyu, and Fire is not added to learned skills.  
  
Note that, apart from the setting items listed above, if there are any other settings that are not reflected from the editor when resuming from "Continue" (there might be some), to reflect them, you will need to select "New Game" and start the game from the beginning again.  

[Back to top of page](#TOP)

---

  
[To Help Table of Contents](../)