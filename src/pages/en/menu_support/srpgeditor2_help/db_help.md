---
title: Help | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Help
  url: /menu_support/srpgeditor2_help/db_help/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Help".
h1: Help
---

<a name="TOP"></a>

## Help Table of Contents

- [Overview](#ABOUT)
- [Help Editing](#EDIT)


<a name="ABOUT"></a>

## Overview

"Help" here refers to the "Help" section in the in-game menu.  
You can explain game systems and more in the help.  

**Help has a two-level tree structure.**  
**In the menu "Help", players first select a "Parent Heading" (1st level), and then a "Child Heading" (2nd level).**  
**Then, the "Body Text" corresponding to that "Child Heading" will be displayed.**  

[Back to top of page](#TOP)

<a name="EDIT"></a>

## Help Editing

Database "Help" Window

[![Screenshot of Database "Help" Window](/menu_support/srpgeditor2_help/db_help/help.jpg)](/menu_support/srpgeditor2_help/db_help/help.jpg)

On the left side of the window is the help data list.  
The "New", "Clear", and "Data Count" buttons below it allow you to add new data or clear data.  

Each setting item is explained below.  

● Parent Heading  
The 1st level heading in the two-level tree structure.  
**To associate multiple "Headings" (multiple help data) with one parent heading, use the same "Parent Heading".**  
  
<Example>  
Help Data 1: Parent Heading "Explanation of Menu" Heading "Status"  
Help Data 2: Parent Heading "Explanation of Menu" Heading "Stock"  

● Heading  
The 2nd level heading in the two-level tree structure.  
In the game, after selecting this heading, the help body text will be displayed.  

● Reference: #P  
**In help headings and body text, you can display symbols in the game by entering special characters "#P.*" (* is the graphic number of the symbol).  
This item is only for confirming symbol graphics and has no effect on the game regardless of the number.**  

● Body Text (Frame)  
The body text of the help when a "Heading" is selected.  
Displayed in order from the top of the data list.  
Clicking the "Insert" or "Edit" button allows you to input the body text.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_worldchip/)

[To Help Table of Contents](../)