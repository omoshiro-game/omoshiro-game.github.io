---
title: Background | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Background
  url: /menu_support/srpgeditor2_help/db_back/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Background".
h1: Background
---

<a name="TOP"></a>

## Background Table of Contents

- [Overview](#ABOUT)
- [Background Editing](#EDIT)


<a name="ABOUT"></a>

## Overview


Background refers to the background, including settings like auto-scrolling.  
You specify background images etc. in Database "Background", and then select the desired background in stage or world map settings.  

**Background image files are located in the "back" folder within the "image" folder. (There are only a few.)**  
**If you want to add new background image files, please put them in this folder as well.**  

[Back to top of page](#TOP)

<a name="EDIT"></a>

## Background Editing

Database "Background" Window

[![Screenshot of Database "Background" Window](/menu_support/srpgeditor2_help/db_back/back.jpg)](/menu_support/srpgeditor2_help/db_back/back.jpg)

On the left side of the window is the background data list.  
The "New", "Clear", and "Data Count" buttons below it allow you to add new data or clear data.  

Each setting item is explained below.  

● Name  
The name of the background.  
It will not be displayed in the game.  

● Display Type  
The display type of the background.  
・Arrange map chips ... Only compatible with "Background for battles" in database "Terrain". In the battle part, **it displays many map chips corresponding to the battle terrain in a tiled manner.** This is for people who find it troublesome to prepare background images.  
・Specify by image ... Displays an arbitrary image file. **If the image size is smaller than the game screen, it displays many identical images in a tiled manner.**  
・Specify by color ... Displays a single color. This is for people who find it troublesome to prepare background images.  

● Map chip width (horizontal, vertical) (dot)  
The size of one map chip when "Display Type" is "Arrange map chips".  
Both horizontal and vertical will be displayed at 32 (dot) for normal size.  
The game screen is 640 horizontal and 480 vertical (dot), but vertical can be specified up to 640.  
If the vertical size is larger than the game screen, one large map chip will be centered on the screen, and the top and bottom of the map chip will be cut off (if scroll speed is 0).  

● Image Path  
The path to the image file when "Display Type" is "Specify by image".  
Please specify as a relative path.  

● Transparency color (R,G,B)  
Specifies the color in RGB values when "Display Type" is "Specify by color".  

● Scroll speed (horizontal, vertical)  
If you want the background to scroll automatically, specify the horizontal and vertical speeds here.  
If the width of the background image (if you want to scroll horizontally, the width) is not divisible by the speed, it may not scroll correctly.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_se/)

[To Help Table of Contents](../)