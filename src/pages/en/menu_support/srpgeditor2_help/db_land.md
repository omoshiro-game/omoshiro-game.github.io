---
title: Terrain | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Terrain
  url: /menu_support/srpgeditor2_help/db_land/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Terrain".
h1: Terrain
---

<a name="TOP"></a>

## Terrain Table of Contents

- [Overview](#ABOUT)
- [Terrain Editing](#EDIT)

<a name="ABOUT"></a>

## Overview

**Terrain data created in the database becomes the map chip data used in stage editing.**  
In addition to graphics and movement cost, terrain allows you to set terrain effects in combat.  
**Terrain effects apply to both enemies and allies.**  

[Back to top of page](#top)

<a name="EDIT"></a>

## Terrain Editing

Database "Terrain" Window

[![Screenshot of Database "Terrain" Window](/menu_support/srpgeditor2_help/db_land/land.jpg)](/menu_support/srpgeditor2_help/db_land/land.jpg)

On the left side of the window is the terrain data list.  
The "New", "Clear", and "Data Count" buttons below it allow you to add new data or clear data.  

Each setting item is explained below.  

● Name  
The name of the terrain.  

● Movement Cost  
The movement points required to move through this terrain on the stage map.  

● Impassable  
Whether to make this terrain impassable on the stage map.  
If enabled, characters cannot move even if they are flight types.  

● Graphic  
The graphic of the map chip.  

● Selectable in Training  
Whether this terrain is selectable in the menu "Training".  

● Background for battles  
The background during combat.  
The background is specified from "Background" in the database.  

● Stat Correction (Frame)  
Increase/decrease values for "HP" ~ "Agility" during combat.  
If "Specify by %" is checked, you can specify the increase value as a percentage of the character's stats (including stats from weapon/armor skills, but not the attack power of equipped skills in auto-combat).  
**For "HP" and "SP", it's a percentage of the maximum value, not the current value.**  
Also, **"HP" and "SP" do not increase; they represent the recovery amount at the end of combat.**  

● Attribute Correction (%) (Frame)  
Specify the damage multiplier for each attribute as a percentage.  
100(%) means normal damage, 200 means twice the normal damage.  
Note that attribute settings themselves are configured in Database "System 4".  

● Special Effect  
Sets special effects during combat in the format: "[Effect] [Value]".  
Types of [Effect] are as follows:  
  
・"Combat Time Correction (%)" ... Corrects combat time. "Value" should be specified as a percentage of "Combat Time" in Database "System 3". **Only effective if combat's turn transition mode is "Time".**  

● Description  
The description of the terrain displayed at the bottom of the screen on the stage map. (If nothing is displayed, try pressing the A key.)  
Terrain name, movement cost, and impassability are automatically displayed, so it's a good place to write the terrain effect description.  

● Reference: #P  
**In "Description", you can display symbols in the game by entering special characters "#P.*" (* is the graphic number of the symbol).  
This item is only for confirming symbol graphics and has no effect on the game.**  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_ptvar/)

[To Help Table of Contents](../)