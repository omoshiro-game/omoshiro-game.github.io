---
title: Sound Effect | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Sound Effect
  url: /menu_support/srpgeditor2_help/db_se/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Sound Effect".
h1: Sound Effect
---

<a name="TOP"></a>

## Sound Effect Table of Contents

- [Overview](#ABOUT)
- [Sound Effect Editing](#EDIT)


<a name="ABOUT"></a>

## Overview

Sound effects for use in games.  
**All sound effect files are located in the "wave" folder.**  
**If you want to add new sound effect files, please put them in this folder as well.**  


**Only Wave (.wav) files are supported.**  
**Only Wave files in uncompressed PCM format with disabled Wave extensible format are supported; other formats (such as ADPCM) will not play in the game even if they can be played in the editor.**  
Few people normally pay attention to the Wave format, but **it's good to remember that "if it doesn't play in the game, converting the format will likely solve it."**  
This format conversion is perfectly possible with free software; for example, with "Audacity", a software favored by this software's author, simply importing the problematic file and re-saving it will effectively convert it to an uncompressed PCM Wave file with disabled Wave extensible format. 


[Back to top of page](#TOP)

<a name="EDIT"></a>

## Sound Effect Editing

Database "Sound Effect" Window

[![Screenshot of Database "Sound Effect" Window](/menu_support/srpgeditor2_help/db_se/se.jpg)](/menu_support/srpgeditor2_help/db_se/se.jpg)

On the left side of the window is the sound effect data list.  
The "New", "Clear", and "Data Count" buttons below it allow you to add new data or clear data.  

Each setting item is explained below.  

● Name  
The name of the sound effect.  
It can also be made the same as the "File Name".  
It will not be displayed in the game.  

● Path  
The path to the sound effect file.  
Please specify as a relative path.  
Sound effect files only support Wave (.wav) format.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_bgm/)

[To Help Table of Contents](../)