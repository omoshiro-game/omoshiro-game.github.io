---
title: Effect Animation | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Effect Animation
  url: /menu_support/srpgeditor2_help/db_effectanime/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Effect Animation".
h1: Effect Animation
---

<a name="TOP"></a>

## Effect Animation Table of Contents

- [Overview](#ABOUT)
- [Effect Animation Editing](#EDIT)

<a name="ABOUT"></a>

## Overview

Effect animation refers to the animation of skill effects in combat.  
Effect animations created in the database can only be set for skills, and effect animations are only executed when skills are used.  

[Back to top of page](#TOP)

<a name="EDIT"></a>

## Effect Animation Editing

Database "Effect Animation" Window

[![Screenshot of Database "Effect Animation" Window](/menu_support/srpgeditor2_help/db_effectanime/effectanime.jpg)](/menu_support/srpgeditor2_help/db_effectanime/effectanime.jpg)

On the left side of the window is the effect animation data list.  
The "New", "Clear", and "Data Count" buttons below it allow you to add new data or clear data.  

Each setting item is explained below.  

● Name  
The name of the effect animation.  
It will not be displayed in the game.  

● Animation (Frame)  
The content of the animation.  
Executed in order from the top of the data list.  
Clicking the "Insert" or "Edit" button displays the following window.  

Animation Window

![Animation Window Screenshot](/menu_support/srpgeditor2_help/db_effectanime/anime.jpg)

○ Frame  
Which frame graphic to display.  

○ Move X (dot)  
The effect's horizontal movement amount.  
The effect moves over the time specified in "Display Time".  
The movement speed at this time is "Movement Distance ÷ Display Time".  
**If the skill's target is an enemy (character on the right side of the battle screen), positive values move right, negative values move left.  
If the skill's target is an ally, the movement direction will be reversed horizontally.**  

○ Move Y (dot)  
The effect's vertical movement amount.  
The effect moves over the time specified in "Display Time".  
The movement speed at this time is "Movement Distance ÷ Display Time".  
Positive values move down, negative values move up.  

○ Display Time (1/60s)  
The time to display the "Frame".  

○ Instant Move  
Regardless of "Display Time," the effect instantly moves by the amount specified in "Move X" and "Move Y."  

● Preview  
You can confirm the animation with the effect's graphic set here.  
It has no effect on the game regardless of the number.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_picture/)

[To Help Table of Contents](../)