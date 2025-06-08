---
title: Main Menu | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Main Menu
  url: /menu_support/srpgeditor2_help/menu/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Main Menu".
h1: Main Menu
---

<a name="TOP"></a>

## Main Menu Table of Contents

The menu at the top of the editor's main window is called the main menu.  
The main menu is explained below.  

- ["File"](#FILE)
- ["Edit"](#EDIT)
- ["Stage"](#STAGE)
- ["Project"](#PROJECT)
- ["Test Play"](#TESTPLAY)
- [About the Toolbar](#TOOLBAR)

<a name="FILE"></a>

## "File"

You can load and save stages.  

● Create New Stage  
Creates a new stage.  

● Open Stage  
Loads a stage from an existing file.  

● Close Stage  
Closes the currently edited stage.  

● Overwrite Save Event Palette & Overwrite Save Stage  
Overwrites and saves the event palette, and simultaneously overwrites and saves the currently edited stage without changing its filename.  

● Overwrite Save Event Palette & New Save Stage  
Overwrites and saves the event palette, and simultaneously saves the currently edited stage as a new file.  

● Overwrite Save Event Palette  
Overwrites and saves only the event palette.  

● Change Default Stage  
Specifies the default stage data from an existing file.  
**Default stage refers to the stage created when "Create New Stage" is selected.**  

[Back to top of page](#top)

<a name="EDIT"></a>

## "Edit"

Performs operations related to placed data on the stage map (map chips, enemy characters, events).  

● Undo  
Undoes the most recent operation in the stage window.  
However, **if the previous operation was performed in the enemy palette window, that operation in the enemy palette window will be undone.** (This is by design, as enemy palette data is the placement information for the stage itself, unlike map chip or event palette data.)  

● Redo  
Redoes the operation that was undone by "Undo".  

● Change Palette  
Switches the type of data to place.  

● Clear Placement Data  
"Clear All Map Chips" sets all map chips to 0.  
"Clear All Enemies" and "Clear All Events" delete all placed data.  

[Back to top of page](#top)

<a name="STAGE"></a>

## "Stage"

You can configure the currently edited stage.  

● Stage Settings  
Configures stage-wide settings, such as map size and rewards after stage clear.  

> For details, refer to ["Stage Settings"](../stage/).  

● Position Group Settings  
**Configures position groups for use in the stage, such as ally initial positions and enemy destinations.**  

> For details, refer to ["Position Group Settings"](../posgroup/).  

[Back to top of page](#top)

<a name="PROJECT"></a>

## "Project"

You can edit databases and configure system settings (other than stage data) for the entire game.  

● Database  
Edits databases for characters, skills, etc.  
Also, game system settings are configured here.  

> For details, refer to ["About the Database"](../database/).  

● Initial Event  
Edits the initial event.  
**Initial event refers to the event executed immediately after "Start New Game" is selected in the game.**  
Unlike normal event editing, some features and event actions (e.g., "Message") are restricted in initial event editing.  
Even when pasting data from the event action palette, event actions not supported by the initial event are automatically removed.  

> For details on events, refer to ["Event Placement"](../event/).  

● World Map  
Edits the world map, which serves as the game's setting.  

> For details, refer to ["World Map Editing"](../#WORLDMAP).  

● Project Options  
Configures project-wide settings.  
・"Backup edit data immediately after editor launch"  
Enabling this feature allows you to prepare for the possibility of any edit data file being corrupted.  
The "Re-backup if X hours have passed since last backup" item sets the backup frequency. If this is "0" hours, a backup will be executed every time the editor is launched.  
This backup function simply copies the "data" and "e_data" folders, where the edit data files are stored, as "data_backup" and "e_data_backup" folders. If the editor can no longer be launched in the future, first revert "e_data_backup" to "e_data". If it still cannot be launched, revert "data_backup" to "data".  

[Back to top of page](#top)

<a name="TESTPLAY"></a>

## "Test Play"

You can test play the game.  

● Test Play  
Performs test play.  
**During test play, "Test Play Settings" are applied, and the stage map test menu and test keys (F1-F8 keys) are available.**  

> For details, refer to ["About Test Play"](../testplay/).  

● Test Play Settings  
Configures test play settings.  
You can change the random skill learning system settings only during test play.  

> For details, refer to ["Test Play Settings"](../testplay_settings/).  

[Back to top of page](#top)

<a name="TOOLBAR"></a>

## About the Toolbar

The toolbar below the main menu corresponds to some of the main menu items.  

Toolbar

![Screenshot of Toolbar](/menu_support/srpgeditor2_help/menu/toolbar.png)

From left, it executes the same processes as "Create New Stage," "Open Stage," "Overwrite Save Event Palette & Overwrite Save Stage," "Undo," "Redo," "Map Chip Palette (Switch to)," "Enemy Palette," "Event Palette," and "Test Play" in the main menu.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../delete/)

[To Help Table of Contents](../)