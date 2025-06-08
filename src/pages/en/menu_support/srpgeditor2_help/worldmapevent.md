---
title: World Map Event Placement | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: World Map Event Placement
  url: /menu_support/srpgeditor2_help/worldmapevent/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "World Map Event Placement".
h1: World Map Event Placement
---



<a name="TOP"></a> 

## World Map Event Placement Table of Contents

There are only three types of events on the world map: "Stage," "Path," and "Wall," and you cannot configure them in great detail.

- [Event Placement](#PUT)
- [About Event Palette](#PALETTE)
- [Event Editing](#SET)

<a name="PUT"></a> 

## Event Placement

To place events, first switch the palette mode to Event Palette.  
To switch, select "Edit" -> "Change Palette" -> "Event" from the menu at the top of the world map window.  
Then the following window will be displayed.  

World Map Event Palette Window

![Screenshot of World Map Event Palette Window](/menu_support/srpgeditor2_help/worldmapevent/worldevent.jpg)

To place events, click on the event you want from the event palette.  
Then click on the world map to place the event.  

Right-clicking on the world map will bring up the following menu.  

Right-Click Menu

![Screenshot of Right-Click Menu](/menu_support/srpgeditor2_help/worldmapevent/popupmenu.png)

● Edit  
Edits the selected event.  

● Cut / Copy / Paste  
Performs "Cut," "Copy," and "Paste" operations on the selected event.  
You can also copy an event placed on the world map and paste that data into the event palette.  

● Create New  
Creates a new event at the selected position.  
Regardless of which data is selected in the event palette window, the event will be default (minimal) data.  

● Delete  
Deletes the selected event.  

[Back to top of page](#TOP)

<a name="PALETTE"></a> 

## About Event Palette

Event palette data is merely a template for event data.  
**Note that editing event palette data does not affect already placed events.**  
Having frequently used events readily available on the event palette can improve event placement efficiency.  

Explanation of each setting item in the event palette window.  

● Edit if placed  
If this is checked, when placing an event with a click, if an event already exists at the cursor position, it will enter editing of the existing event (instead of placing a new event).  

● Edit immediately before placement  
If this is checked, when placing an event with a click, it will enter event editing before placing the event.  

● Auto-assign Stage Number  
**If this is checked and you place an event, a stage number not yet used on the world map will be automatically assigned.**  

● Event List (Template) (Frame)  
List of event data.  
You can edit this list using the "Insert," "Edit," "Delete," and "Data Count" buttons, or by right-clicking.  

[Back to top of page](#TOP)

<a name="SET"></a> 

## Event Editing

When you "Edit" an event on the world map, or click the "Insert" or "Edit" button in the event palette, the following window appears.  

Event Data Window

![Screenshot of Event Data Window](/menu_support/srpgeditor2_help/worldmapevent/worldeventdata.jpg)

Event data editing is done in this window.  
Explanation of each setting item.  

● Event Name  
The name of the event.  
**It will not be displayed in the game.**  

● Page List  
The list on the left side of the window is the page list.  
All setting items explained after this page list (all setting items within the "Page Data" frame) are collectively called a page, or event page, and one event can have multiple pages.  
When an event has multiple pages, clicking on any page in the page list allows you to edit that page.  
The "Insert" and "Delete" buttons at the top of the page list, or right-clicking, allow you to edit the page list.  

● Appearance Condition  
Conditions for the event to appear.  
**If the appearance conditions for multiple pages are met, only the page with the lowest page number (the page at the very top of the page list) will appear.**  
Explanation of each setting item in the appearance conditions is as follows:  

○ Stage  
If the stage with the number set here is cleared, the event appears.  
If "0", there are no stage conditions.  

○ Variable Condition  
A condition using common variables.  

● Graphic  
The graphic of the event.  
However, if "Event Type" is not "Stage", or after stage clear, a different graphic (the right side of image file "WorldEvent.png") will be displayed.  

● Event Type  
The content of the event.  
・Stage ... Loads and plays a stage.  
・Path ... Makes the event's position passable, **regardless of map chips**.  
・Wall ... Makes the event's position impassable, **regardless of map chips**.  

● Stage Name  
The title of the stage displayed when challenging the stage.  

● Stage  
Specifies the path to the stage file to load.  

● Variation  
Variation is a feature that changes common variables before the stage starts.  
For example, for a single stage data, it can be used to present Route A and Route B as separate stages by changing the common variable "Route".  
Of course, there's no need to duplicate stage files.  
Instead of using variations, you could create a mechanism to choose between Route A and Route B within the stage, but variations offer the advantage of separately recording stage clear information (flags).  

● Stage Number  
**Internally, the program provides 999 flags (1-999) to manage whether each stage has been cleared.  
Here, please specify which of these numbers corresponds to the current stage.**  
Basically, **as long as the numbers don't overlap for each stage, there should be no problem.** (If "Auto-assign Stage Number" is checked in the event palette window, the numbers will almost certainly not overlap.)  
There's also a technique where you intentionally specify the same number for multiple stages to make "clearing one stage automatically clear the other".  

● Passable even if not cleared  
Whether it's passable even if the stage is not cleared.  

● Playable even after clear  
Whether the stage can be played again even after clearing it once.  

● Game Clear  
Whether to consider the stage clear as a game clear.  
・Do not ... Does not count as a game clear.  
・Start 2nd Playthrough ... **All stages revert to uncleared, and the protagonist returns to the initial position.**  
・Return to title ... Counts as a game clear and returns to the title screen.  

[Back to top of page](#TOP)

---

  

[To Help Table of Contents](../)