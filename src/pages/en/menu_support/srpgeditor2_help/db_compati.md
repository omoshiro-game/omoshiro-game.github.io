---
title: Compatibility Type | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Compatibility Type
  url: /menu_support/srpgeditor2_help/db_compati/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Compatibility Type".
h1: Compatibility Type
---

<a name="TOP"></a>

## Compatibility Type Table of Contents

- [Overview](#ABOUT)
- [Compatibility Type Editing](#EDIT)

<a name="ABOUT"></a>

## Overview

The compatibility type set for a skill determines its compatibility with opponents (and their skills).  
Compatibility creates advantages and disadvantages in combat.  
For example, a water-type skill can be strong against a fire-type skill, increasing hit rate by 20%, etc.  
You can easily implement rock-paper-scissors relationships like Sword → Axe → Spear → Sword → ..., or half damage if the compatibility type is the same as the opponent.  

Compatibility types are supported in both auto-battle and manual combat.  
In auto-battle, compatibility is simply determined by the equipped skill.  
**In manual combat, the compatibility type is only effective from when the character activates a skill until their next turn.**  
For example, after using a fire skill, fire damage might be halved.  

[Back to top of page](#TOP)

<a name="EDIT"></a>

## Compatibility Type Editing

Database "Compatibility Type" Window

[![Screenshot of Database "Compatibility Type" Window](/menu_support/srpgeditor2_help/db_compati/compati.jpg)](/menu_support/srpgeditor2_help/db_compati/compati.jpg)

On the left side of the window is the compatibility type data list.  
The "New", "Clear", and "Data Count" buttons below it allow you to add new data or clear data.  

Each setting item is explained below.  

● Name  
The name of the compatibility type.  
**It will not be displayed in the game.**  

● Compatibility (Frame)  
The content of the compatibility type.  
Clicking the "Insert" or "Edit" button displays the following window.  

Compatibility Effect Window

![Screenshot of Compatibility Effect Window](/menu_support/srpgeditor2_help/db_compati/compati_2.jpg)

Compatibility is set in the format: "[Compatibility Type] to [Target] [Correction Method] [Correction Value]".  
Types of [Correction Method].  
**・"=" ... Assigns [Correction Value] to [Target].**  
・"+" ... Adds [Correction Value] to [Target].  
・"-" ... Subtracts [Correction Value] from [Target].  
・"×" ... Multiplies [Target] by [Correction Value].  
・"÷" ... Divides [Target] by [Correction Value].  
**・"÷ X Remainder" ... Divides [Target] by [Correction Value] and takes the remainder.**  
**・"X %" ... Calculates [Correction Value] as a percentage of [Target]. For example, if [Correction Value] is "50 (%)", [Target] (result) becomes half of its original value.**  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_land/)

[To Help Table of Contents](../)