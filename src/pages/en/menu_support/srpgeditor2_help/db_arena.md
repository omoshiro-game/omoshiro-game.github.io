---
title: Arena | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Arena
  url: /menu_support/srpgeditor2_help/db_back/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Arena".
h1: Arena
---

<a name="TOP"></a>

## Arena Table of Contents

- [Overview](#ABOUT)
- [Arena Editing](#EDIT)


<a name="ABOUT"></a>

## Overview

Arena is a target for entry in the編成 menu "Training". (Only effective for "Entry 2").  
Arenas, like "Enemy" in the training menu's "Entry", engage in combat with enemy characters. However, they differ from "Entry" > "Enemy" in that stock use can be prohibited, terrain and required wins rules can be fixed per arena data, and clear rewards can be set.  
Only allied characters can challenge arenas.  
Note that the conditions for challenging an arena, **arena level and clear flags for each arena, are independent for each allied character.**  

[Back to top of page](#TOP)

<a name="EDIT"></a>

## Arena Editing

Database "Arena" Window

[![Screenshot of Database "Arena" Window](/menu_support/srpgeditor2_help/db_arena/arena.jpg)](/menu_support/srpgeditor2_help/db_arena/arena.jpg)

On the left side of the window is the arena data list.  
The "New", "Clear", and "Data Count" buttons below it allow you to add new data or clear data.  

Each setting item is explained below.  

● Arena Name  
The title of the arena displayed in the training arena list.  

● Same as enemy name  
Whether to use the enemy's name specified in "Enemy Character" for "Arena Name".  

● Registration Type  
The timing at which it is registered in the training arena list.  

● Required Arena Level  
The arena level required for an ally character to challenge the arena.  
If 0, anyone can challenge unconditionally.  

● Enemy Character  
The enemy character to fight.  
Specified from "Enemy Character" in the database.  

● Number of Revivals  
The number of times the enemy's HP, SP, and remaining skill uses fully recover and they re-engage in combat after being defeated.  
Ally characters (arena challengers) only get 1 win count for every additional defeat equal to this number of revivals.  
EX gained and "Gold Gained" set for enemy characters are multiplied by the number of revivals. (If 1 revival, gain 2 times).  
Note that **when reviving and re-engaging in combat, the enemy always gets the first turn.**  

● Terrain  
The terrain where combat takes place.  
Specified from "Enemy Character" in the database.  
**In training other than arena, "Random" terrain can be specified, but not in arena.**  

● Required Wins  
Which side wins first determines the winner of the training.  
*If you have set the system to consume skills after arena combat (carry over remaining uses), "Required Wins" is recommended to be "1". This is because HP, SP, and remaining skill uses fully recover when one battle's outcome is decided and the next battle starts, so ultimately, only the skill consumption state of the last battle can be carried over.*  

● Clear Reward  
Sets party variables such as money gained when clearing an arena.  

● Arena Level Gained  
The arena level that increases when clearing an arena.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_skill/)

[To Help Table of Contents](../)