---
title: Combat System | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Combat System
  url: /menu_support/srpgeditor2_help/game_battle/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Combat System".
h1: Combat System
---

<a name="TOP"></a>




## Combat System Table of Contents

- [Combat Rules](#RULE)
- [Understanding the Combat Screen (Manual Combat)](#SCREEN)
- [Combat Menu (Manual Combat)](#MENU)
- [Understanding the Combat Screen (Auto Combat)](#SCREEN_AUTO)

<a name="RULE"></a>

## Combat Rules

Combat is a 1-on-1 battle between the initiating side (the one who initiated combat on the stage map) and the defending side (the one who was attacked).  
If a character takes damage from an attack and their HP reaches 0, that character dies. If an ally dies, they are added to the revival list in the menu "Revive".  
If the battle is not decided within the specified combat time or number of actions, the battle ends with both sides surviving, and you return to the stage map.  

Other systems and specifications vary depending on the combat mode and turn transition mode settings.  

> For combat mode and turn transition mode settings, refer to [Database "System 3"](../db_system/#BATTLESYSTEM).  

● Time System  
If Turn Transition Mode is "Time", combat has a concept of time.  
As time passes, both sides accumulate action values, and when those action values reach a certain point, one action can be taken.  
The speed at which action values accumulate depends on the difference in "Agility" between the two sides.  

● EX Acquisition  
Allied characters gain EX (experience points) after combat ends.  
Finishing off an enemy grants significantly more EX than usual.  
When EX reaches 100, the character levels up and scout power increases simultaneously.  

[Back to top of page](#top)

<a name="SCREEN"></a>

## Combat Screen (Manual Combat)

Combat Screen (Manual Combat)

![Screenshot of Combat Screen (Manual Combat)](/menu_support/srpgeditor2_help/game_battle/manual.png)

This is the combat screen when combat mode is manual combat.  
Regardless of position on the stage map, the left side will always be your allies, and the right side will be enemies.  

The numbered areas in the screenshot above are explained below.  

● 1. Status Window  
A window displaying the character's stats.  
**The values in parentheses are those from before combat started and before receiving terrain effects. (They are not values before learning weapon or armor skills).**  

● 2. Combat Menu Window  
This window appears when it's your ally's turn.  
From here, you input combat commands like "Attack" and "Skill".  

<a id="TIMEBAR"></a>

● 3. Time Bar  
Combat time and character action order are displayed on this time bar.  
**The orange line represents the current time**, and when this line reaches the right edge, combat ends.  
**The blue line represents ally turns, and the red line represents enemy turns.**  
You can also manipulate time with skills.  

<a id="LANDINFO"></a>

● 4. Terrain Effect Window  
A window displaying terrain effects.  
**Terrain effects affect both enemies and allies.**  
You can also use terrain skills to change terrain mid-combat.  

● 5. Compatibility Type *Not displayed in screenshot*  
Only characters with compatibility types will have a symbol representing their compatibility type displayed below the character.  
Examples of compatibility types include water types being strong against fire types, increasing hit rate by 20%, etc.  
In manual combat, the class's compatibility type is applied at the start of combat, and the compatibility type changes by using a skill with a compatibility type set during combat.  
If the compatibility type changes during combat, it reverts to the original (class's) compatibility type after combat ends.  

[Back to top of page](#top)

<a name="MENU"></a>

## Combat Menu (Manual Combat)

The combat menu commands in manual combat are the following 4:  

● Attack  
Normal attack.  
Actually uses the skill set for normal attacks.  
Pressing the Z key once displays damage, hit rate, and critical rate.  
There are no SP consumption or usage count limitations.  

● Skill  
Selects and uses one of the skills learned by the character.  
Depending on the skill, pressing the Z key once displays damage, hit rate, and critical rate.  
Some skills consume SP or have usage count limitations.  

● Quick  
Selects and uses one of the "Quick" usable skills learned by the character.  
**"Quick" allows using a skill once per turn without consuming a turn.**  
For example, you can perform two actions in one turn, like "Quick" → "Skill".  

● Stock  
Selects and uses one skill from stock (skills not learned by the character).  
Depending on settings, anyone can use it, or it may be unusable if the required sense is not present.  
There are also types that disappear after one use, like typical RPG items.  

[Back to top of page](#TOP)

<a name="SCREEN_AUTO"></a>

## Combat Screen (Auto Combat)

Combat Screen (Auto Combat)

![Screenshot of Combat Screen (Auto Combat)](/menu_support/srpgeditor2_help/game_battle/auto.png)

This is the combat screen when combat mode is auto-combat.  
Regardless of position on the stage map, the left side will always be your allies, and the right side will be enemies.  

The numbered areas in the screenshot above are explained below.  

● 1. Action Information Window  
A window displaying character action information.  
This is the same as what is displayed when initiating an attack from the ally side on the stage map.  

● 2. Time Bar  
Same as [Manual Combat](#TIMEBAR).  

● 3. Terrain Effect Window  
Same as [Manual Combat](#LANDINFO).  

[Back to top of page](#TOP)

---

  

[To Help Table of Contents](../)