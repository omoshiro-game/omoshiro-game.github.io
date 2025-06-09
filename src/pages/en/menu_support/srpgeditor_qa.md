---
title: Simulation RPG Editor FAQ
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Support
    url: /menu_support/
  - name: Simulation RPG Editor FAQ
    url: /menu_support/srpgeditor_qa/
keywords:
  - Simulation RPG Editor
  - Simulation RPG
  - Creation Software
  - Tool
  - Fun Game
  - Free Game
  - Game
  - Support
description: A compilation of frequently asked questions for the simulation RPG creation software "Simulation RPG Editor".
---

## Simulation RPG Editor FAQ Table of Contents

[Q. The program (.exe) won't start!](#Q1)  

[Q. The stage won't load!](#Q2)  

[Q. I can't test play! ("Cannot call game program!" is displayed)](#Q3)  

[Q. The game runs slowly (FPS in bottom right of screen is consistently below 60)](#Q4)  

[Q. "About Secondary Distribution.chm" won't open!](#Q5)  

[Q. I changed the character images, etc., but the colors are garbled.](#Q6)  

[Q. How do I change the program (.exe) icon?](#Q7)  

[Q. I captured the game screen, but the colors are garbled.](#Q8)  

## Q. The program (.exe) won't start!

A. In most cases, this is due to insufficient physical memory.  
For OS 98/Me, 128MB is desired; for OS 2000/XP, 256MB is desired. (Vista is unknown).  
Restarting your PC or closing unnecessary programs may resolve the issue.  
  
If it still won't launch despite having sufficient memory, the following possibilities may be considered:  
  
・Missing required files for launch  
If files in the "bmp" or "wave" folders are deleted or renamed, it will not be able to launch.  
However, this does not apply to files in the "back" and "convert" folders within "bmp". (They are not related to launching).  
It's also best not to tamper with files in the "data" or "user_data" folders unnecessarily.  
  
・Security software is interfering  
You need to allow Simulation RPG Editor to launch.  
The settings method varies depending on the security software.  
  
・DirectX 7 or later is not installed  
Obtain and install the latest DirectX from [here](http://support.microsoft.com/kb/179113/ja).  
  
・Video card does not support DirectX 7 or later  
Updating the video card driver to the latest version may resolve the issue.  
  
  
If it still won't launch, please provide a report file on the BBS along with a clear description of the symptoms (including error message content if any) and ask your question.  
A report file is a text file generated in the same folder as the program itself when Simulation RPG Editor launches, and it contains PC specifications, error information, and more.  
If the game program won't launch, please submit "Report_Game.txt". If the editor program won't launch, please submit "Report_Editor.txt".  

## Q. The stage won't load!

A. In most cases, this is due to insufficient physical memory.  
For OS 98/Me, 128MB is desired; for OS 2000/XP, 256MB is desired. (Vista is unknown).  
Restarting your PC or closing unnecessary programs may resolve the issue.  
  
Also, larger stages with more enemies and events placed require higher specifications.  

## Q. I can't test play! ("Cannot call game program!" is displayed)

A. You can solve this by going to the main menu's "Edit Options", unchecking "Auto acquire" for "Path to test play game program", and manually setting the game program (.exe).  

## Q. The game runs slowly (FPS in bottom right of screen is consistently below 60)

A. You may be able to solve this by opening the environment configuration file "System.ini" and lowering the value of "FrameRate".  
The explanation for "FrameRate" is provided within "System.ini".  

## Q. "About Secondary Distribution.chm" won't open!

A. CHM files are an old file format and cannot be opened on Windows Vista or later without installing "Windows Help Program (WinHlp32.exe)".  
Please download and install "Windows Help Program (WinHlp32.exe)" from the following URL:  
[http://support.microsoft.com/default.aspx?scid=kb;ja;917607](http://support.microsoft.com/default.aspx?scid=kb;ja;917607)  
  
Also, it cannot be opened even on Windows XP etc. without unblocking.  
Right-click "About Secondary Distribution.chm" -> "Properties" -> "Unblock" to open it.  

## Q. I changed the character images, etc., but the colors are garbled.

A. Games made with Simulation RPG Editor are 256 colors (8-bit color), so if the color palette is not a dedicated one and some rules are not followed, colors may be garbled or other issues may occur during gameplay. (It is possible to launch in 16-bit color windowed mode, but bitmaps will be garbled if they are not 256 colors).  
When creating or editing images, always draw with a 256-color compatible graphics tool (painting software).  
Examples of 256-color compatible graphics tools include:  
  
Software Name: EDGE2  
Author: TAKABO-sama  
URL: [http://www.tkb-soft.hmcbest.com/](http://www.tkb-soft.hmcbest.com/)  
  
For other precautions, please refer to "Using Your Own Materials" in the help file (the "Help.html" included with the software).  
Be sure to check it at least once!  

## Q. How do I change the program (.exe) icon?

A. Simulation RPG Editor itself does not have an icon changing function, but you can change the icon using an icon changing software.  
For example, there is software like this:  
  
Software Name: IconChanger  
Author: Boon-sama  
URL: [http://aboon.s33.xrea.com](http://aboon.s33.xrea.com/)  
  
Software Name: IconReset  
Author: Aru-sama  
URL: [http://www.geocities.jp/iconsetjp/](http://www.geocities.jp/iconsetjp/) (※Note: It's IconReset, not IconSet)  
  
Regarding icon files (.ico), you can create them with graphics tools like "EDGE2" introduced above, or its predecessor "EDGE", etc. (The creation method is to "Save As" and select "ICO - Icon" as the "File Type").  
*Creating icon files with "EDGE2" requires user registration (paid).  

## Q. I captured the game screen, but the colors are garbled.

A. In Simulation RPG Editor, when in fullscreen mode, the color depth is 256 colors, so attempting to capture the game screen with PrintScreen key etc. will not correctly reflect the colors.  
To capture the game screen, please use software that supports 256 colors.  
For example, there is software like this:  
  
Software Name: Winshot  
Author: WoodyBells Administrator-sama  
URL: [http://www.woodybells.com/](http://www.woodybells.com/)