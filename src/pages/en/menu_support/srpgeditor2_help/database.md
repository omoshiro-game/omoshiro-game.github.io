---
title: About the Database | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: About the Database
  url: /menu_support/srpgeditor2_help/database/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "About the Database".
h1: About the Database
---

<a name="TOP"></a>

## About the Database

The database contains data used throughout the game, such as classes (professions), characters, and skills.  
You can edit the database by going to Main Menu -> "Project" -> "Database".  
System settings, such as changing battle mode or displaying/hiding menu commands, are also configured here.  

**※Some setting items (especially the list of selectable items displayed in pull-downs) depend on the database. For example, the "Class" in the "Ally Character" database.**  
**However, they depend on the database *before* saving. For example, if you add Warrior and Mage to the "Class" database and then try to specify Warrior or Mage in "Class" for the "Ally Character" database *without saving*, neither will be displayed.**  
**In such cases, press the "Apply" button in the bottom right of the window. Pressing the "Apply" button will temporarily save the database and update the text of the setting items.**  
Of course, the "OK" button also works, but it requires the extra step of reopening the database window.  

**※The referencer (e.g., "Class" in Database "Ally Character") only holds the database number. Therefore, if the referenced data is deleted or its order is changed, altering the database number, the data specified in the referencer will also be swapped.**  
Exercise caution when deleting or reordering data.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_class/)

[To Help Table of Contents](../)