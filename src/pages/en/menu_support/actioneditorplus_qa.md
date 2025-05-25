---
title: Action Editor+ FAQ
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Support
    url: /menu_support/
  - name: Action Editor+ FAQ
    url: /menu_support/actioneditorplus_qa/
---

## Action Editor+ FAQ Table of Contents

[Q. The program (.exe) won't start!](#Q1)  

[Q. The stage won't load!](#Q2)  

[Q. Replays are not faithfully reproduced!](#Q3)  

[Q. The help file (".chm") won't open!](#Q4)  

[Q. I changed the character images, etc., but the colors are garbled.](#Q5)  

[Q. How do I change the program (.exe) icon?](#Q6)  

[Q. I captured the game screen, but the colors are garbled.](#Q7)  

## Q. The program (.exe) won't start!

A. In most cases, this is due to insufficient physical memory.  
For OS 98/Me, 128MB is desired; for OS 2000/XP, 256MB is desired. (Vista is unknown).  
Restarting your PC or closing unnecessary programs may resolve the issue.  
  
If it still won't launch despite having sufficient memory, the following possibilities may be considered:  
  
・Missing required files for launch  
If files in the "bmp" or "wave" folders are deleted or renamed, it will not be able to launch.  
It's also best not to tamper with files in the "user_data" folder unnecessarily.  
  
・Security software is interfering  
You need to allow Action Editor+ to launch.  
The settings method varies depending on the security software.  
  
・DirectX 7 or later is not installed  
Obtain and install the latest DirectX from [here](http://support.microsoft.com/kb/179113/ja).  
  
・Video card does not support DirectX 7 or later  
Updating the video card driver to the latest version may resolve the issue.  
  
  
If it still won't launch, please provide a report file "Report.txt" on the BBS along with a clear description of the symptoms (including error message content if any) and ask your question.  
"Report.txt" is a file generated in the same folder as the program itself when Action Editor+ ver2.41 or later launches, and it contains PC specifications, error information, and more.  

## Q. The stage won't load!

A. In most cases, this is due to insufficient physical memory.  
For OS 98/Me, 128MB is desired; for OS 2000/XP, 256MB is desired. (Vista is unknown).  
Restarting your PC or closing unnecessary programs may resolve the issue.  
  
Also, larger stages with more enemies and items placed require higher specifications.  

## Q. Replays are not faithfully reproduced!

A. It is a specification that replay acquisition may fail.  
In particular, replay data where the frame rate (FPS) drops below 10 during the game is almost certainly corrupted.  
Also, if the replay data version and the game version for playback are different, the possibility of faithful reproduction decreases.  
Even if the frame rate is consistently 10 or higher and the versions match, it may still not be reproducible.  

## Q. The help file (".chm") won't open!

A. CHM files are an old file format and cannot be opened on Windows Vista or later without installing "Windows Help Program (WinHlp32.exe)".  
Please download and install "Windows Help Program (WinHlp32.exe)" from the following URL:  
[http://support.microsoft.com/default.aspx?scid=kb;ja;917607](http://support.microsoft.com/kb/179113/ja)  
  
Also, it cannot be opened even on Windows XP etc. without unblocking.  
Right-click the help file -> "Properties" -> "Unblock" to open it.  

## Q. I changed the character images, etc., but the colors are garbled.

A. Action Editor+ games are 256 colors (8-bit color), so if the color palette is not a dedicated one and some rules are not followed, colors may be garbled or other issues may occur during gameplay.  
When creating or editing images, always draw with a 256-color compatible graphics tool (painting software).  
Examples of 256-color compatible graphics tools include:  
  
Software Name: EDGE2  
Author: TAKABO-sama  
URL: [http://www.tkb-soft.hmcbest.com/](http://www.tkb-soft.hmcbest.com/)  
  
For other precautions, please refer to "Using Your Own Materials" in the help file (the "Edit.chm" included with the software).  
Be sure to check it at least once!  

## Q. How do I change the program (.exe) icon?

A. Action Editor+ itself does not have an icon changing function, but you can change the icon using an icon changing software.  
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

A. In Action Editor+, the color depth is 256 colors, so attempting to capture the game screen with PrintScreen key etc. will not correctly reflect the colors.  
To capture the game screen, please use software that supports 256 colors.  
For example, there is software like this:  
  
Software Name: Winshot  
Author: WoodyBells Administrator-sama  
URL: [http://www.woodybells.com/](http://www.woodybells.com/)