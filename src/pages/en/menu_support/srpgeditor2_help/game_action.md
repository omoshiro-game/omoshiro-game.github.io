---
title: Ally Character Movement and Actions | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Ally Character Movement and Actions
  url: /menu_support/srpgeditor2_help/game_action/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Ally Character Movement and Actions".
h1: Ally Character Movement and Actions
---

<a name="TOP"></a>

## Ally Character Movement and Actions Table of Contents

- [Overview](#ABOUT)
- [Action Menu](#MENU)

<a name="ABOUT"></a>

## Overview

Ally character control follows the flow: character selection → movement → action.  
First, position the map cursor over any ally and press the Z key to display their movement range.  
Pressing the Z key again within the movement range will move them to that position.  
After movement, the action menu will appear.  

[Back to top of page](#TOP)

<a name="MENU"></a>

## Action Menu

Action Menu Window

![Screenshot of Action Menu Window](/menu_support/srpgeditor2_help/game_action/action.jpg)

The action menu appears after an ally's movement.  
Each command is explained below.  

● Combat  
This command appears when adjacent to an enemy.  
Initiates 1-on-1 combat with the selected adjacent enemy.  
Regardless of combat mode or learned skills, **you cannot initiate combat with enemies more than 2 squares away.**  
In auto-battle, you select the skill to use in combat.  

> For details on combat, refer to ["Combat System"](../game_battle/).  

● Wait  
In manual combat, ends the action without doing anything.  
In auto-battle, selects skills to equip for the next battle.  

● Equip  
**Only effective in auto-battle.**  
Selects skills to equip for the next battle.  
**Unlike "Wait," this does not end the action,** so for example, if you want to heal with "Skill" but also change equipment, you can execute "Equip" → "Skill" in one turn.  

● Skill  
Uses skills learned by the character on the stage map.  
**Only healing skills can be used.**  
**Can only be used on yourself or adjacent characters.**  

● Stock  
Uses skills from stock on the stage map.  
**Only healing skills can be used.**  
**Can only be used on yourself or adjacent characters.**  

● Special Command (Other)  
**Special commands are commands that appear depending on events occurring on the stage map.**  
The content of command execution also varies by event.  
For example, stopping on a square with a house and selecting "Visit" might allow you to hear a story, or stopping on a square with a treasure chest and selecting "Open" might allow you to acquire a skill.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../game_battle/)

[To Help Table of Contents](../)