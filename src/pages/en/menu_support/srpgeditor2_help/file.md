---
title: File Explanation | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: File Explanation
  url: /menu_support/srpgeditor2_help/file/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "File Explanation".
h1: File Explanation
---

<a name="TOP"></a> 

## File Explanation

Explains the files in Simulation RPG Editor 2.  
  
- "Editor_v*.exe" ... Editor program (* is the version).  
- "Game_v*.exe" ... Game program.  
- "KeyConfig.exe" ... Program to change key assignments.  
- "System.ini" ... Game's environment configuration file. Open with a text editor and edit if necessary.  
- "Readme.txt" ... Document for game creators (you).  
- "Readme2.txt" ... Readme document (template) for game distribution.  
- **"About Game Distribution.html" ... Contains terms and conditions to follow when distributing games.**  
- "Vox.dll" ... Required for OggVorbis (.ogg) playback. Do not delete even if you don't play ogg files.  
- "GuruGuruSMF4.dll" ... Required for midi playback. Do not delete even if you don't play midi files. Midi will play without this file, but issues may occur depending on the playback environment and midi files.  
- "Report_Editor.txt" ... Debug report file generated when the editor starts.  
- "Report_Game.txt" ... Debug report file generated when the game starts.  
- "Online Help" ... Just an internet shortcut. Links to Simulation RPG Editor 2's help.  
- "Download Latest Version & Game Collection" ... Just an internet shortcut. Links to Simulation RPG Editor 2's download page.  
- "Download Sample Game" ... Just an internet shortcut. Links to Simulation RPG Editor 2 sample game's download page.  
- "Simulation RPG Editor 2 Author's Site" ... Just an internet shortcut. Links to the author's site.  
  
Other files are explained by folder.  
I don't think you need to remember what's stored in each file, except for those that have been color-coded.  
  
● "data" folder  
Edit data.  
This folder is generated when the editor or game starts for the first time.  
  
- "EventActionPlt.dat" ... Event action palette data.  
- "EventPlt.dat" ... Event palette data.  
- "GValInfo.dat" ... Common variable name data.  
- "MoveAITemplate.dat" ... Movement AI template data.  
  
○ "database" folder  
- "Class.dat" ... Database "Class" data.  
- "Friend.dat" ... Database "Ally Character" data.  
- "Enemy.dat" ... Database "Enemy" data.  
- "Arena.dat" ... Database "Arena" data.  
- "Skill.dat" ... Database "Skill" data.  
- "CompatiType.dat" ... Database "Compatibility Type" data.  
- "Land.dat" ... Database "Terrain" data.  
- "PartyVal.dat" ... Database "Party Variables" data.  
- "CharaAnim.dat" ... Database "Character Animation" data.  
- "EffectAnim.dat" ... Database "Effect Animation" data.  
- "Picture.dat" ... Database "Picture" data.  
- "Back.dat" ... Database "Background" data.  
- "Sound.dat" ... Database "Sound Effect" data.  
- "Bgm.dat" ... Database "BGM" data.  
- "WorldMap.dat" ... Database "World Chip" and World Map data.  
- "System.dat" ... Database "System (1~X)" data.  
- "StartEvent.dat" ... "Initial Event" data.  
  
○ "plt" folder  
Default save destination when saving event palette to a file (.plt).  
  
○ "stg"  
**This folder contains stage files "~.stg2".**  
  
○ "random_name"  
**This folder contains name list files for randomly generating character names.**  
Characters with "Randomly determine name" ON will have their names randomly determined from these files.  
This file is a plain text file (.txt) and **is editable.**  
When editing, please follow the rules below.  
  
- **Filename must be "RandomName[number]_*.txt"**  
**[number] is the name list file number starting from 000. It must be 3 digits, and continue in order from the first one: 000, 001, 002...**  
The "*" part can be anything. Choose a clear name.  
**For example, "RandomName000_Youfuu_Male.txt".**  
- One name per line  
- Name length up to 12 characters  
  
● "default" folder  
Default edit data.  
**When the editor launches for the first time, this folder is copied as the "data" folder.**  
Please do not modify it, just in case.  
  
● "data_backup" folder  
Backup of the "data" folder.  
Backup settings can be changed in "Project" > "Project Options" from the main menu.  
  
● "e_data" folder  
This folder is generated when the editor or game starts for the first time.  
- "EditConfig.dat" ... Environment configuration data for the entire editor. For example, the path to the default stage.  
- "TestPlay.dat" ... "Test Play Settings" data.  
- "SheetSize.dat" ... Information related to the size of some windows.  
  
● "e_data_backup" folder  
Backup of the "e_data" folder.  
Backup settings can be changed in "Project" > "Project Options" from the main menu.  
  
● "user_data" folder  
Contains game save data and settings data files.  
This folder is generated when the editor or game starts for the first time.  
**Deleting this folder will reset all save data and option settings.**  
**Even if you delete the entire folder, a new "user_data" folder will be automatically created the next time the game starts, so there's no problem.**  
  
- "SaveData**.dat" ... Game save data. "**" is the save data number, and you can delete only specific save data by looking at this number.  
- "Option.dat" ... Option settings data.  
- "Window.dat" ... Data storing the window position and size at the time of the last game exit. The program first reads this file to restore the previous window position and size.  
- "KeyConfig.dat" ... KeyConfig.exe's setting data.  
  
● "image" folder  
Contains images (.png) used by both the editor and the game.  

> For image standards, refer to ["Image Standards"](../image).  
  
● "e_image" folder  
Contains images (.bmp) used only by the editor.  
It also contains program file (*.exe) icon images, but changing them will not change the program icon.  
  
● "bgm" folder  
Music used in the game.  
Supports Midi (.mid) and OggVorbis (.ogg) formats.  
It is recommended to put your own files in this folder as well.  

> For how to register files as assets, refer to [Database "BGM"](../db_bgm).  
  
● "wave" folder  
Sound effects used in the game.  
**Only PCM wave format is supported; other formats (such as ADPCM) will not play in the game even if they play in the editor.**  
It is recommended to put your own files in this folder as well.  

> For how to register files as assets, refer to [Database "Sound Effect"](../db_se).  
  
● "csv" folder  
Empty by default, but if you export an Excel-editable CSV file from the database, the file will be saved in this folder.  
CSV files can be edited in Excel and loaded into the database. (Always edit with Excel).  

> For details on CSV files and Excel usage, refer to ["Interoperability with Excel"](../csv).  

[Back to top of page](#top)

---

 
[To Help Table of Contents](../)