---
title: About Terminology | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: About Terminology
  url: /menu_support/srpgeditor2_help/word/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "About Terminology".
h1: About Terminology
---

<a name="TOP"></a> 

## About Terminology Table of Contents

- [Editor and Game](#EDITOR_GAME)
- [Main Window (Stage Window)](#MAINWINDOW)
- [Combat Mode (Manual Combat and Auto Combat)](#BATTLEMODE)
- [Unit Notation](#TANNI)
- [Palette](#PALETTE)
- [Sense](#SENSE)
- [Slots and Reserve](#SLOT_RESERVE)
- [Stock](#STOCK)
- [Quick](#QUICK)
- [Event Action](#ACTION)
- [Symbol](#SYMBOL)
- [Variables](#VAR)
- [String Variables](#STRVAR)



<a name="EDITOR_GAME"></a>

## Editor and Game

In this help, the program "Editor_v*.exe" is often referred to simply as "editor," and the program "Game_v*.exe" is often referred to simply as "game."

[Back to top of page](#top)

<a name="MAINWINDOW"></a>

## Main Window (Stage Window)

When the editor is launched, the first large window displayed is called the "main window." (It's the second window displayed on first launch.)  
Also, since stages are displayed in this window, it's also called the "stage window."  
In explanations related to stage editing, it is likely that "stage window" will be used frequently.  

[Back to top of page](#top)

<a name="BATTLEMODE"></a>

## Combat Mode (Manual Combat and Auto Combat)

**There are two types of combat modes: "Auto Combat" and "Manual Combat".**  
A dialog for selecting combat mode appears at the editor's initial launch, but **you can switch it at any time in "Combat Mode" under Main Menu > "Project" > "Database" > "System 3" tab.**  
"Manual Combat" is a mode also adopted in the previous work, where actions are selected during combat.  
In "Auto Combat", skills are equipped in advance on the stage map, and only those skills are executed in combat.  
**The combat mode changes not only combat but also the procedures for and stage map actions, enemy movement AI behavior, and useful skills, making it a completely different work. So, decide on one as early as possible.**  

[Back to top of page](#top)

<a name="TANNI"></a>

## Unit Notation

Units displayed in the editor.  
**・(1/10s) ... Unit of 1/10th of a second  
・(1/60s) ... Unit of 1/60th of a second  
・(dot) ... Dot unit  
・(chip) ... Chip unit. One square on the world map or stage map. 1 chip is 32x32 dots**  

[Back to top of page](#top)

<a name="PALETTE"></a>

## Palette

The palette in stage edit roughly plays the same role as a color palette in painting software.  
You select the data you want to place on the stage from the palette, and then place it on the stage.  

There are three types of palettes: map chip, enemy character, and event. The operation methods and specifications for each differ.  
In stage edit, only one palette window corresponding to the current palette mode will be displayed along with the stage window.  

Map chip palette data is created in Database "Terrain".  
Enemy palette data is [Database "Enemy Character"](../db_enemy/) data with movement AI set.  
Event palette data is a template for event data. Event data can be edited in the event palette window, or after placing the event on the stage. However, since the event palette is merely a template, **editing the palette data after placing an event on the stage will not be reflected in the placed data.**  
**Map chip palette and event palette are shared across all stages, but enemy character palette is independent for each stage.**  
In Action Editor 4, the common palette type is the map chip palette and event palette, and the stage palette type is the enemy character palette.  
**※In the previous work, the event palette was not shared across all stages; it was independent for each stage.**  

[Back to top of page](#top)

<a name="SENSE"></a>

## Sense

Sense is one of a character's stats, representing the ease of learning skills. (In the previous work, it was called "Skill Learning Value").  
More specifically, it becomes a learning condition when learning skills from the menu "Status" by selecting "Learn", and increases the probability of learning skills in the random skill learning function during level up.  
Sense is divided by skill category; for example, if there are two skill categories, "Fire" and "Water", sense is set for "Fire" and "Water" respectively.  

[Back to top of page](#top)

<a name="SLOT_RESERVE"></a>

## Slots and Reserve

Slots refer to the frames for skills that ally characters can use on the stage map and in combat.  
Among the skills learned by ally characters, those that cannot be used on the stage map or in combat are placed in a separate frame called the reserve.  
If you want to use a skill in reserve, you can swap skills between slots and reserve from the menu "Status".  
**When new skills are learned through level up or events, they are set in empty slots. However, if all slots are full, they go into reserve.**  
**※If reserve is disabled in Database "Skill" settings, when skills are learned while slots are full, those skills that should have been learned will not be learned. Also, if the number of skills in reserve exceeds the "Number of reserves" in Database "Skill" during skill learning, skill learning will also fail.** To prevent this, ensure that the number of reserves is sufficient if you intend to learn skills through level ups or events.  

[Back to top of page](#top)

<a name="STOCK"></a>

## Stock

Stock refers to the place where skills not yet learned by ally characters are stored.  
It might be helpful to imagine stock as magical stones that can be learned just by touching them if a qualified character touches them.  
Depending on settings, characters can also forget learned skills and return them to stock.  
Also, **like items in typical RPGs, you can directly use skills from stock without having the character learn them.**  
So, effectively, stock can be thought of as the party's entire inventory.  
However, **in auto-battle, only healing skills can be used on the stage map.**  

[Back to top of page](#top)

<a name="QUICK"></a>

## Quick

**The "Quick" command during manual combat allows using a skill once per turn without consuming a turn.**  
This allows two actions in one turn, such as "Quick" → (normal) "Skill".  
Whether a skill can be "Quick" used can be set for each skill.  
Not supported in auto-battle.  

[Back to top of page](#top)

<a name="ACTION"></a>

## Event Actions

Event actions are the contents of an event's execution, such as "Message" or "Manipulate Status".  
They are often abbreviated as "actions".  

[Back to top of page](#top)

<a name="SYMBOL"></a>

## Symbol

It might be better understood as an icon.  
Its main role is to represent skill categories displayed to the left of skill names in a space-saving manner. Additionally, you can display arbitrary symbols in event action "Message" and so on, by using "#P5." (all half-width; representing the 5th graphic in the symbol image) or similar.  
The symbol image file is "Symbol.png" in the "image" folder.  

[Back to top of page](#top)

<a name="VAR"></a>

## Variables

Variables are not "strange numbers."  
Variables are "changing numbers" or "numbers that can be changed."  
  
You can change the value of variables using event actions "Manipulate Common Variable," "Manipulate Event Variable," and "Manipulate Status."  
Also, variables can be used as information for condition evaluation, such as event appearance conditions.  
  
**For example, a common use case is like a flag, such as "treasure chest appears when switch is pressed".**  
  
<Example>  
[Switch Event] Effect (Event Action): "Manipulate Common Variable" Variable A = 1  
[Treasure Chest Event] Appearance Condition: Common Variable A is 1  

● Types of Variables  
There are common variables, event variables, and party variables.  
  
○ Common Variables  
**Variables shared across the entire game**, with 999 available.  
Common variables are initialized to 0.  
  
○ Event Variables  
**Variables independent for each event, used only within the event.**  
One event variable is provided for each event.  
Event variables are **initialized to 0 before the stage starts.**  
  
○ Party Variables  
**Party variables manage party-wide stats and some game settings, such as current gold, scout power, and difficulty.**  
However, the **actual party variables are simply common variables**, and you specify the common variable that serves as the actual variable in Database "Party Variables".  
For example, increasing gold by 100G with the event action "Manipulate Gold" is the same as increasing gold by 100G with the event action "Manipulate Common Variable".  

● Naming Common Variables  
**You can name the selected common variable by clicking the small button to the right of the common variable combo box.**  
Note that event variables cannot be named.  

[Back to top of page](#top)

<a name="STRVAR"></a>

## String Variables

String variables are variables of string type.  
Event action "Message" allows you to display the value (string) stored in a string variable.  
However, unlike normal variables, you cannot directly assign values to string variables with event actions.  
String variable values are implicitly assigned during the execution of certain event actions.  
For example, for event action "Randomly Acquire Skill", the name of the acquired skill is assigned to a string variable called "SKILL".  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../sousa/)

[To Help Table of Contents](../)