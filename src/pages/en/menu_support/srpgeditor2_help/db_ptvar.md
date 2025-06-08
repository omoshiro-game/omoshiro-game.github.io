---
title: Party Variables | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Party Variables
  url: /menu_support/srpgeditor2_help/db_ptvar/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Party Variables".
h1: Party Variables
---

<a name="TOP"></a>

## Party Variables Table of Contents

- [Overview](#ABOUT)
- [Party Variable Editing](#EDIT)


<a name="ABOUT"></a>

## Overview

**Party variables manage party-wide stats and some game settings, such as current gold, scout power, and difficulty.**  
However, the **actual party variables are simply common variables**, and you specify the common variable that serves as the actual variable in Database "Party Variables".  
For example, increasing gold by 100 with the event action "Manipulate Gold" is the same as increasing the common variable specified by the event action "Manipulate Common Variable" by 100.  

[Back to top of page](#TOP)

<a name="EDIT"></a>

## Party Variable Editing

Database "Party Variables" Window

[![Screenshot of Database "Party Variables" Window](/menu_support/srpgeditor2_help/db_ptvar/ptvar.jpg)](/menu_support/srpgeditor2_help/db_ptvar/ptvar.jpg)

On the left side of the window is the party variable data list.  
The "New", "Clear", and "Data Count" buttons below it allow you to add new data or clear data.  

Each setting item is explained below.  

● Name  
The name of the party variable.  

● Common Variable  
Specifies the common variable that serves as the actual party variable.  

● Lower Limit, Upper Limit  
The range of the party variable's value.  

● Unit  
The character representing the unit displayed to the right of the party variable's numerical value.  

● Display as party status in window at bottom of screen  
Whether to display this party variable as party status in the wide horizontal window at the bottom of the screen.  
**It is a specification that if too many party variables are displayed, they will not fit on the screen.**  

● Display as save data information during game save/load  
When selecting save data in "Continue" from the title screen or "Save" in the menu, whether to display this party variable as save data information.  
**It is a specification that if too many party variables are displayed, they will not fit on the screen.**  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_charaanime/)

[To Help Table of Contents](../)