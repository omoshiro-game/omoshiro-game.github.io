---
title: Status | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Status
  url: /menu_support/srpgeditor2_help/game_status/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Status".
h1: Status
---

<a name="TOP"></a> 

## Status Table of Contents

- [Understanding Status Display](#SCREEN)
- [Types of Status](#STATUS)

<a name="SCREEN"></a> 

## Understanding Status Display

You can check an ally's status by hovering the cursor over any ally in the menu "Status".  
With the status window displayed, pressing the Z key will also display the skill window.  
Similarly, on the stage map, you can check status by hovering the map cursor over enemies or allies.  

[Back to top of page](#TOP)

<a name="STATUS"></a> 

## Types of Status

Status Window

![Screenshot of Status Window](/menu_support/srpgeditor2_help/game_status/status.jpg)

This section explains each status in the status window.  
The explanation proceeds from the top left item to the bottom right item of the status window.  

● Name  
The character's name is displayed at the top left of the status window, below the character graphic.  

● Class  
Below the character's name, their class (e.g., profession) is displayed.  

● LV  
Level.  

● EX  
This is what is commonly known as experience points. For allies, **when this reaches 100, their LV increases by 1.**  
EX can be gained through combat with enemies.  
For enemies, they do not gain EX in combat and do not level up.  

● Movement  
Movement range on the stage map.  
**Classes with flight ability will display a symbol indicating flight status after their movement value.**  
Having flight ability allows moving through all terrain with a movement cost of 1.  

● Sense  
Sense is the ease of learning skills.  
**If sense is equal to or greater than the "Required Sense" for a skill in the corresponding category, you can learn it from the menu "Status" by selecting "Learn".  
Also, if random skill learning upon level up is set, it becomes a learning condition or affects the learning probability.**  

● HP  
Health or life force.  
If HP reaches 0, the character dies.  
Allies can be revived in the menu "Revive".  

● SP  
Some skills consume SP.  
Skills cannot be used if SP is insufficient.  

● Attack  
A higher value increases physical attack damage dealt.  
**The value in parentheses on the right is the value after subtracting increases from learned weapon and armor skills.** (This applies not only to "Attack" but also to "Defense" through "Agility" below).  

● Defense  
A higher value reduces physical attack damage received.  

● Magic  
A higher value increases magic attack damage dealt.  
Also, healing skills' recovery amount increases.  

● Resistance  
A higher value reduces magic attack damage received.  

● Skill  
A higher value increases the hit rate of normal attacks and some skills.  
Also, **if the skill used has a critical rate of 1 or more, a higher skill value increases the chance of a critical hit that deals double damage.  
If a skill's critical rate is 0, no critical hit will occur no matter how high skill is.**  

● Reaction  
A higher value increases evasion rate against normal attacks and some skills.  
Also, **if the opponent attacks with a skill that has a critical rate of 1 or more, a higher reaction makes it less likely to receive a critical hit.**  

● Agility  
(Depending on combat system settings) A higher value means **turns (action order) will come faster, and the number of actions may increase based on the agility difference with the opponent.**  

● Equipped Skills  
In auto-battle, equipped skills are displayed in the bottom right of the status window.  
In auto-battle, only these equipped skills are used in combat.  
"Power" is the skill's attack power plus the character's "Attack" (or "Magic").  

● Skills (Skill Window)  
The skill window displayed below the status window in the screenshot above (during skill).  
In the skill window, skills learned by the character are listed.  
To the left of the skill name, a mark indicating that it is equipped (auto-battle only) and the skill category are displayed. To the right of the skill name, SP cost or "Remaining Uses / Max Uses" is displayed.  
You can also learn, forget, or temporarily move unused skills to reserve from the skill organization menu in the menu "Status".  

> For details on the skill organization menu, refer to ["Organization Menu"](../game_organ/#SKILLORGAN).  

● Party-wide Stats  
The window at the bottom of the screen displays party-wide stats.  
Depending on settings, this includes things like current gold and scout power.  
**Scout power refers to scouting ability in the menu "Scout". Depending on the editor's settings, a higher scout power makes it easier for allies with higher abilities to appear.**  
**As allies' LV increases, scout power also increases by the same amount.**  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../game_organ/)

[To Help Table of Contents](../)