---
title: BGM | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: BGM
  url: /menu_support/srpgeditor2_help/db_bgm/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "BGM".
h1: BGM
---

<a name="TOP"></a>

## BGM Table of Contents

- [Overview](#ABOUT)
- [BGM Editing](#EDIT)


<a name="ABOUT"></a>

## Overview

Music for use in games.  
**Music files are located in the "bgm" folder.**  
**If you want to add new music files, please put them in this folder as well.**  


**Music files support Midi (.mid) and Ogg Vorbis (.ogg) formats.**  
**From the perspective of difficulty in adjusting volume, it is better to unify to one format rather than using both Midi and Ogg Vorbis in one game.**  


For Midi playback, I used Mr. Ujo's "GuruGuruSMF4.dll".  
Note that **GuruGuruSMF reportedly supports Enterbrain, RPG Maker 2000 and later loop specifications (CC#111), but Simulation RPG Editor 2 does not support them** (I think it might be possible, but I haven't tested it).  
Mr. Ujo's site: [http://gurugurusmf.migmig.net/](http://gurugurusmf.migmig.net/)  

For OggVorbis playback, I used Mr. Nomura XX's "Vox.dll".  
**There is a pause in sound during loop playback (a silent period), which will be considered a specification.** (Although it's a SimuEdi side issue, not a dll issue).  
Mr. Nomura XX's site: [http://www.nomuraz.com/denpa/](http://www.nomuraz.com/denpa/)  


[Back to top of page](#TOP)

<a name="EDIT"></a>

## BGM Editing

Database "BGM" Window

[![Screenshot of Database "BGM" Window](/menu_support/srpgeditor2_help/db_bgm/bgm.jpg)](/menu_support/srpgeditor2_help/db_bgm/bgm.jpg)

On the left side of the window is the BGM data list.  
The "New", "Clear", and "Data Count" buttons below it allow you to add new data or clear data.  

Each setting item is explained below.  

● Name  
The name of the BGM.  
It can also be made the same as the "File Name".  
It will not be displayed in the game.  

● Path  
The path to the music file.  
Please specify as a relative path.  
Music files support Midi (.mid) and Ogg Vorbis (.ogg) formats.  

● Volume (%)  
Playback volume, adjustable from 0 to 100%.  
Volume cannot be increased.  
Only effective for Ogg Vorbis (.ogg).  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_help/)

[To Help Table of Contents](../)