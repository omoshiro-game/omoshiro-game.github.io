---
title: Character Animation | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Character Animation
  url: /menu_support/srpgeditor2_help/db_charaanime/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Character Animation".
h1: Character Animation
---

<a name="TOP"></a>

## Character Animation Table of Contents

- [Overview](#ABOUT)
- [Character Animation Editing](#EDIT)


<a name="ABOUT"></a>

## Overview

Character animation refers to character animations in combat.  
Character animations created in the database can only be set for skills, and character animations are only executed when skills are used.  

[Back to top of page](#TOP)

<a name="EDIT"></a>

## Character Animation Editing

Database "Character Animation" Window

[![Screenshot of Database "Character Animation" Window](/menu_support/srpgeditor2_help/db_charaanime/charaanime.jpg)](/menu_support/srpgeditor2_help/db_charaanime/charaanime.jpg)

On the left side of the window is the character animation data list.  
The "New", "Clear", and "Data Count" buttons below it allow you to add new data or clear data.  

Each setting item is explained below.  

● Name  
The name of the character animation.  
It will not be displayed in the game.  

● Animation (Frame)  
The content of the animation.  
Executed in order from the top of the data list.  
Clicking the "Insert" or "Edit" button displays the following window.  

Animation Window

![Animation Window Screenshot](/menu_support/srpgeditor2_help/db_charaanime/anime.jpg)

○ Frame  
Which frame graphic to display.  

○ Move X (dot)  
The character's horizontal movement amount.  
The character moves over the time specified in "Display Time".  
The movement speed at this time is "Movement Distance ÷ Display Time".  
This value is for when the skill user is an ally (character on the left side of the battle screen); if it's an enemy, the movement direction will be reversed horizontally.  
**Positive values move forward, negative values move backward.**  

○ Move Y (dot)  
The character's vertical movement amount.  
The character moves over the time specified in "Display Time".  
The movement speed at this time is "Movement Distance ÷ Display Time".  
Positive values move down, negative values move up.  

○ Display Time (1/60s)  
The time to display the "Frame".  

○ Instant Move  
Regardless of "Display Time," the character instantly moves by the amount specified in "Move X" and "Move Y."  

○ Start Effect from Here  
In skill usage animations, effects are also displayed in parallel with character animations.  
**This setting determines when the effect animation starts.**  

● Preview  
You can confirm the animation with the character's graphic set here.  
It has no effect on the game regardless of the number.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_effectanime/)

[To Help Table of Contents](../)