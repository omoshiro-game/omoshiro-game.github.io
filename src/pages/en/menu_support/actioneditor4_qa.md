---
title: Action Editor 4 FAQ
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Support
    url: /menu_support/
  - name: Action Editor 4 FAQ
    url: /menu_support/actioneditor4_qa/
---

<a name="START"></a>

## Action Editor 4 FAQ Table of Contents

[Q. The program (.exe) won't start!](#Q1)  

[Q. The stage won't load!](#Q2)  

[Q. Replays are not faithfully reproduced!](#Q3)  

[Q. I changed the character images, etc., but the colors are garbled.](#Q4)  

[Q. How do I change the program (.exe) icon?](#Q5)  

[Q. I captured the game screen, but the colors are garbled.](#Q6)  

[Q. How do I correctly use shot images from v2.18β and earlier in v2.21β and later?](#Q7)  

[Q. Can I play mp3 files as BGM?](#Q8)  

[Q. When editing character data, etc., incomplete windows are sometimes displayed, or it stops functioning correctly. Closing the window then gives an "Failed to destroy window!" error.](#Q9)  

[Q. MIDI files won't play.](#Q10)  

<a name="Q1"></a>

## Q. The program (.exe) won't start!

A. The following possibilities are considered:  
  
・Missing required files for launch  
If bitmap files or other files used by the game are missing, it will not be able to launch.  
Some files may not display an error message.  
  
・Security software is interfering  
You need to allow Action Editor 4 to launch.  
The settings method varies depending on the security software.  
  
・Video card does not support DirectX 9.0c or later  
Updating the video card driver may resolve the issue.  
  
・DirectX 9.0c or later is not installed  
Please update DirectX using [DirectX End-User Runtime Web Installer](https://www.microsoft.com/ja-jp/download/details.aspx?id=35).  
However, for modern PCs (as of June 2019), DirectX updates are usually not necessary.  
  
・Abnormal termination occurred in the previous play  
If the game program (including test play) terminated abnormally (crashed) in the previous execution, the next launch may be regarded as a duplicate launch and fail.  
For test play, restarting the editor or terminating the process from Task Manager (deleting "Game_v*.exe" in the "Processes" tab) may fix it.  
Alternatively, restart your OS.  
  
  
If it still doesn't launch, please provide a report file on the BBS along with a clear description of the symptoms (including error message content if any) and ask your question.  
A report file is a file generated in the same folder as the program itself when Action Editor 4 launches. It is output as "Report_Game.txt" when the game launches and "Report_Editor.txt" when the editor launches.  
The report file contains PC specifications, error information, and more.  

[Back to top of page](#START)

<a name="Q2"></a>

## Q. The stage won't load!

A. The following possibilities may be considered:  
  
・Insufficient computer specifications  
Especially if physical memory is insufficient, stage loading may fail.  
As stated in the Readme, the recommended operating environment is 512MB or more for Windows XP, and 1GB or more for Vista or 7.  
Restarting your PC or closing unnecessary programs may resolve the issue.  
Also, larger stages with more enemies and items placed require higher specifications.  
  
・Missing required files  
If bitmap files or other files used in the stage are missing, the stage cannot be loaded.  
Some files may not display an error message.  

[Back to top of page](#START)

<a name="Q3"></a>

## Q. Replays are not faithfully reproduced!

Please refer to [About Replays > Replays May Not Be Faithfully Reproduced](/menu_support/actioneditor4_help/replay/#ERROR).  

[Back to top of page](#START)

<a name="Q4"></a>

## Q. I changed the character images, etc., but the colors are garbled.

A. With default settings, bitmap color depth is 256 colors (8-bit). If the color palette is not a dedicated one and some rules are not followed, color distortion or other issues may occur during gameplay.  
When creating or editing images, please draw them with a 256-color compatible graphics tool (painting software).  
Examples of 256-color compatible graphics tools include:  
  
Software Name: EDGE2  
Author: TAKABO-sama  
URL: [http://takabosoft.com/edge2/](http://takabosoft.com/edge2/)  
  
For other precautions, please refer to the help.  

[Back to top of page](#START)

<a name="Q5"></a>

## Q. How do I change the program (.exe) icon?

A. Action Editor 4 itself does not have an icon changing function, but you can change the icon using an icon changing software.  
For example, there is software like this:  
  
Software Name: IconReset  
Author: Aru-sama  
URL: [https://softaro.net/File/IconReset.html](https://softaro.net/File/IconReset.html)  
  
With IconReset, you can also change the icons in the title bar and taskbar.  
To briefly describe the procedure: Launch IconReset → Specify the program file (.exe) by opening it (or drag and drop) → Double-click the icon displayed in IconReset → Specify the icon file (.ico).  
Regarding icon files (.ico), you can create them with graphics tools like "EDGE2" introduced above, or its predecessor "EDGE", etc. (The creation method is to "Save As" and select "ICO - Icon" as the "File Type").  
Creating icon files with "EDGE2" requires user registration (paid).  

[Back to top of page](#START)

<a name="Q6"></a>

## Q. I captured the game screen, but the colors are garbled.

A. If you played in DirectDraw mode with an 8-bit (256-color) screen, trying to capture the game screen with PrintScreen key etc. will not correctly reflect the colors.  
To capture the game screen, please use software that supports 256 colors.  
For example, there is software like this:  
  
Software Name: Winshot  
Author: WoodyBells Administrator-sama  
URL: [http://www.woodybells.com/](http://www.woodybells.com/)  

[Back to top of page](#START)

<a name="Q7"></a>

## Q. How do I correctly use shot images from v2.18β and earlier in v2.21β and later?

A. From v2.21, the standard for shot image "Shot.bmp" changed.  
The top-leftmost shot (shot number 0) in "Shot.bmp" could no longer be specified in the editor.  
This means that using shot images conforming to v2.18 and earlier standards in v2.21 and later will shift the graphics by 1.  
  
To correctly use shot images conforming to v2.18 and earlier standards in v2.21 and later, you must modify the "Shot.bmp" image itself.  
Specifically, you need to move all shot types down by one, leaving number 0 empty, as shown below.  
  
v2.18 and earlier → v2.21 and later  
![](/menu_support/actioneditor4_qa/Shot_v218.png)　![](/menu_support/actioneditor4_qa/Shot_v221.png)  
v2.18 and earlier → v2.21 and later  
  
Sorry for the trouble.  

[Back to top of page](#START)

<a name="Q8"></a>

## Q. Can I play mp3 files as BGM?

A. Unfortunately, mp3 format is not supported.  
However, it supports OggVorbis (.ogg) format, so you can convert mp3 to ogg using software like CDex and use it.  
  
For details on OggVorbis (.ogg), please refer to the "Ogg Village" website below.  
[http://oggvorbis.fc2web.com/](http://oggvorbis.fc2web.com/)  
  
For downloading and Japanese localization of CDex, please refer to the following:  
CDex Download: [http://cdexos.sourceforge.net/?q=download](http://cdexos.sourceforge.net/?q=download)  
CDex Japanese Localization: [http://homepage2.nifty.com/moto-h/hissori.html](http://homepage2.nifty.com/moto-h/hissori.html)  

[Back to top of page](#START)

<a name="Q9"></a>

## Q. When editing character data, etc., incomplete windows are sometimes displayed, or it stops functioning correctly. Closing the window then gives an "Failed to destroy window!" error.

A. I believe this is due to insufficient system resources.  
Launching many applications makes this problem more likely to occur.  
Similar problems may occur even outside of character data editing.  
  
You can reduce the occurrence of errors by increasing resources according to the page below (for WinXP).  
[http://www.dougamanual.com/blog/123/709/e3349.html](http://www.dougamanual.com/blog/123/709/e3349.html)  
*Please be careful not to accidentally change unrelated values.  

[Back to top of page](#START)

<a name="Q10"></a>

## Q. MIDI files won't play.

A. If MIDI files play in music players like Windows Media Player but not in Action Editor 4, please check if the "MIDI" or "SW Synthesizer" volume in Volume Control is set to 0.  
A common scenario is that after playing a MIDI file once in Windows Media Player and then pausing it, the "MIDI" or "SW Synthesizer" volume in Volume Control drops to 0. If you then play Action Editor 4 in this state, MIDI will not play (which seems to be a MediaPlayer specification).  

[Back to top of page](#START)