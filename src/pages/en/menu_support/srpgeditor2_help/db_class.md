---
title: Class | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Class
  url: /menu_support/srpgeditor2_help/db_class/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Class".
h1: Class
---

<a name="TOP"></a>

## Class Table of Contents

- [Overview](#ABOUT)
- [Class Editing](#EDIT)

<a name="ABOUT"></a>

## Overview

Class refers to a character's profession.  
A character's abilities and growth are determined by the settings in Database "Class", "Ally Character" ("Enemy Character"), and "System".  
Character graphics, movement range, and sense (ease of learning skills) are set in the class.  
Stats such as HP, Attack, Defense, and their growth values upon level up can either directly apply the class's settings to the character, or the character can have stats with characteristics far different from the class.  
# Character growth system is explained in more detail in ["Growth System"](../growing/).  

[Back to top of page](#TOP)

<a name="EDIT"></a>

## Class Editing

Database "Class" Window

[![Screenshot of Database "Class" Window](/menu_support/srpgeditor2_help/db_class/class.jpg)](/menu_support/srpgeditor2_help/db_class/class.jpg)

On the left side of the window is the class data list.  
The "New", "Clear", and "Data Count" buttons below it allow you to add new data or clear data.  

Each setting item is explained below.  

● Name  
The name of the class.  

● Graphic  
Graphic.  

● Scale (%)  
Graphic scale.  
100% means normal size, but it might lack impact.  
It's set to 200% by default.  

● Hue, Saturation, Brightness  
You can change the hue, saturation, and brightness of the graphic by dragging the sliders.  
If you want the exact colors of the image, set all three to "0".  
The range to which these color settings apply varies for each graphic.  
**For default character images, skin color does not change.**  

> For details on character graphic color changes, refer to ["Image Standards"](../image/#color).  

● Movement  
Movement range.  

● Flight  
Presence or absence of flight ability.  
**Classes (characters) with flight ability will have a flight mark after their movement range.**  
Having flight ability makes the movement cost of all terrain 1, except for impassable terrain.  

● EX Correction (%)  
**Corrects the EX gained at the end of combat.**  
Specify the value as a percentage of "EX Gained" in Database "System 2".  

● Max Level  
Maximum LV.  

● "HP" ~ "Agility" "Initial Value" and "Final Value"  
"Initial Value" is the value at level 1.  
"Final Value" is the value at MAX level. (Random stat growth increases are separate).  
If "Final Value" is "0", that stat will not grow, and random stat growth will also be disabled (no stat growth value will be distributed in random stat growth).  
However, whether this setting is actually reflected in the character depends on the settings in Database "Ally Character" and "Enemy Character".  

● Sense  
Sense refers to the ease of learning skills in each skill category.  
If sense is equal to or greater than the "Required Sense" for a skill in the corresponding category, you can learn it from the "Status" menu by selecting "Learn", and you can also randomly learn skills upon level up.  
More precisely, the actual sense is the sum of this value and the increase value from the random sense increase function, which can be set in Database "System 1".  

● Attribute Resistance (%)  
Specify resistance for each attribute as a percentage.  
100(%) means normal damage, 200 means double normal damage.  
Note that attribute settings themselves are configured in Database "System 4".  

● Slot  
A slot is a frame for setting skills.  
**Normally, slots are fixed per skill group, but by checking "Use unique slot for this class" under "Edit" > "Use unique slot for this class", you can set different slots for each class.**  
*This will not be reflected unless "Number of Slots and Category Limit" is enabled in the skill group settings of Database "Skill".  

● Normal Attack  
Normal attack skill.  
A normal attack in manual combat is a skill activated with the "Attack" command.  
**Normal attacks in manual combat ignore usage count and SP cost settings, so they can be used infinitely.**  
**Normal attack skills are the first skills all characters learn in auto-combat. If an equipped skill becomes unusable due to insufficient SP etc. at the end of combat, it automatically switches to the normal attack skill.  
If "No normal attack (Auto-combat only)" is ON, the normal attack skill will not be learned.**  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_friend/)

[To Help Table of Contents](../)