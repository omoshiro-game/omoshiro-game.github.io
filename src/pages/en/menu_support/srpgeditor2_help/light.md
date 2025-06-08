---
title: How to Improve Performance? | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: How to Improve Performance?
  url: /menu_support/srpgeditor2_help/light/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "How to Improve Performance?".
h1: How to Improve Performance?
---


<a name="TOP"></a> 

## How to Improve Performance? Table of Contents

- [Understanding Performance Load and Processing Time](#FPS)
- [How to Shorten Enemy Thinking Time](#MOVEAI)
- [Other Solutions for Slow Performance](#OTHERS)

## Understanding Performance Load and Processing Time

I will teach you how to know "how heavy is it now?" and "how much time is currently being spent on processing (calculations and display)?"  

First, open the environment configuration file "System.ini" and set "ShowFps=1" or "ShowFps=2".  
This will display "FPS○○(□□)" in the top left of the game screen.  
"FPS" (FramesPerSecond) refers to the frame rate, or "how many times the screen is updated per second?".  
Normally (with default FPS settings), if this value is consistently around 60, it is considered normal and feels smooth.  
Conversely, if the FPS drops below 60, performance is heavy, and character movements become choppy.  
In short, by looking at the FPS, you can numerically determine whether the game is running slowly.  

**Furthermore, pay attention to the number in parentheses displayed after the FPS mentioned earlier.  
This is actually the processing time per frame in the game, called "MSPF" (MilliSecondPerFrame) (strictly speaking, it's the average over the latest 16 frames).  
A higher MSPF means slower processing speed, and if this value exceeds a certain point, the FPS will start to drop.  
Normally, FPS will start to drop when MSPF reaches 17 or higher.  
In short, by looking at MSPF, you can tell how soon performance will become heavy.**  

[Back to top of page](#top)

## How to Shorten Enemy Thinking Time

Depending on the enemy's movement AI settings and the stage map situation, the enemy's thinking time before moving can become unusually long.  
**Here's how to shorten thinking time:**  

・Narrow the stage map.  
・Change map chips with high movement cost to low-cost or impassable map chips. (Surprisingly effective).  
・If movement AI's [Target] is "Closest Ally", "Closest Enemy", or "Closest Destination", change it to another target. (These three are particularly heavy).  
・If movement AI's [Target] is "Closest Ally", reduce the number of participating allies.  
・If movement AI's [Target] is "Closest Enemy", reduce the number of enemies.  
・If movement AI's [Target] is "Closest Destination", reduce the number of position data points in the destination (position group).  

[Back to top of page](#top)

## Other Solutions for Slow Performance

This section explains the causes of slow game performance and how to address them.  

● Background image is too small  
If "Background" data is set to "Specify by image" in the database, **too small a background image will slow down drawing speed.**  
If the image size is smaller than the game screen, many identical images will be displayed tiled, but if too small, drawing efficiency decreases.  
In this case, increasing the background image size or changing the setting to not use an image will improve performance.  

● Drawing area is too large  
In resizable windowed mode ("WindowMode=2" in "System.ini"), enlarging the window will slow down drawing speed.  
In this case, simply making the window smaller will improve performance.  
For a guaranteed solution for users, the only option is arguably to set "WindowMode=1" in "System.ini" and abandon resizable windows.  
"WindowMode=0" (fullscreen) should also be light, but it's not recommended in this work.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../english/)

[To Help Table of Contents](../)