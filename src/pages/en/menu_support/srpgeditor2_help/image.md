---
title: Image Standards | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Image Standards
  url: /menu_support/srpgeditor2_help/image/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Image Standards".
h1: Image Standards
---


<a name="TOP"></a> 

## Image Standards Table of Contents

This section explains image standards.  
**Images used by both the editor and the game are in the "image" folder, while images used only by the editor are in the "e_image" folder.**  

- [General Image Standards](#standards)
- [About Image Size](#size)
- [About Character Graphic Color Change Function](#color)
- [About Default Character Images and Animations](#default)
- [Explanation of Various Images](#images)


<a name="standards"></a> 

## General Image Standards

The **image file formats available in Simulation RPG Editor 2 are BMP (.bmp) and PNG (.png), and the supported color depths are only 8-bit (256 colors) and 24-bit (16.77 million colors).**  
Other color depths might work, but they are outside the scope of operation guarantees.  
**PNGs with alpha channels were supported in the early beta versions, but ultimately, they are also outside the scope of operation guarantees.** (No particular problems occurred, but there was some concern).  

**You no longer need to worry about color palettes like in the previous work or Action Editor 4.**  
However, **only the transparency color (background color in character images, etc.) must be unified to "Transparency Color (R,G,B)" in Database "System 4".** By default, it's (0,177,0) in RGB format.  

When creating your own images, it's recommended to edit existing images rather than creating new ones.  
Most image sizes are multiples of 16 for both width and height, so **setting the grid to 8 or 16 in your graphics tool should make editing easier.**  
**In some images like "Accessory.png", unused areas are painted with a slightly bluish gray (RGB 0,96,96),** so please use that as well. (However, images corresponding to variable data in the database, such as characters and map chips, are not like that).  

[Back to top of page](#top)


<a name="size"></a> 

## About Image Size

As a rule, **you should not change the image size.**  
Please keep it the same as the default image size.  
  
**As exceptions, the size of game mode text ("GameMode.png(bmp)"), world map background ("WorldBack.png"), world chips ("WorldMapChip.png"), world events ("WorldEvent.png"), characters ("Character1~8.png", "Character1~8_color.png"), events (Event.png), symbols (Symbol.png), effects ("Effect1~8.png"), backgrounds (in "back" folder), and pictures (in "picture" folder) can be changed.**  
However, **if you change the width, please ensure the horizontal pixel count is a multiple of 4.**  
  
Also, **the maximum size that can be handled varies by video card (GPU).**  
**Keeping both width and height at 2048 or less will make it less likely for problems to occur even in older environments.**  
In older video cards, the width and height may be expanded internally to powers of 2 (256, 512, 1024, etc.) or forced to be the same (adjusted to the longer side), potentially consuming unnecessary video memory.  
Therefore, **setting the width and height to powers of 2 (256, 512, 1024, etc.) or making them the same can reduce unnecessary video memory consumption.**  
For example, for a 600x600 image, in some environments, it may be expanded internally to 1024x1024 (the power of 2 greater than or equal to 600 is 1024), resulting in nearly three times the video memory consumption (600x600 = 360000, 1024x1024 = 1048576, so about 3 times).  
*If video memory runs out, not only does performance slow down, but fonts may not render correctly, or other problems may occur. Be especially careful when drawing background images, which tend to be large.  

[Back to top of page](#top)


<a name="color"></a> 

## About Character Graphic Color Change Function

Database "Class" allows you to change character graphic colors for each class, and you can freely change which parts of the color change.  
To do this, edit the image file "Character*_color.png" ("*" is the number) with a graphics tool.  
**"Character*.png" and "Character*_color.png" are paired. Take a copy of "Character*.png", fill the parts you don't want to change color with the transparency color, and save it as "Character*_color.png".**  
**If "Character*_color.png" does not exist, the entire color will change.  
If you want to change the entire color or do not use the color change function, you can delete "Character*_color.png".**  

[Back to top of page](#top)


<a name="default"></a> 

## About Default Character Images and Animations

This is an **explanation for those who want to use the default character images as they are.**  
In this work, character images Character1~8.png are provided, and Character1~4.png already have characters drawn in them.  
**Character1~4.png are mainly human-shaped, do not carry weapons, and support "swinging" motions (2 frames: swing up → swing down).** These graphics are designed to allow the default "swing" and "thrust" character animations to be used without feeling out of place, and since no weapons are drawn, they can be used with skills and weapons that involve "swinging" or "thrusting" movements.  
  
**By the way, there is a folder called "Unused" within the "image" folder.  
It contains "CharacterA.png" and "CharacterB.png" (and images for specifying color change parts).  
These images were ultimately not adopted, but you can use them by changing their filenames to "Character5.png" and "Character6.png" etc. and replacing them.**  
**However, these images are either monster types or humanoids carrying weapons, so they will not perform the appropriate motions with the default "swing" and "thrust" character animations.**  
**In short, unlike Character1~4, the motion parts are not standardized and lack versatility.**  
That's the reason why "CharacterA.png" and "CharacterB.png" were not adopted. (Though the previous work mainly used this type).  
  
Please check the graphics for motion parts by viewing the image files directly or using the "Preview" in Database "Character Animation".  

[Back to top of page](#top)


<a name="images"></a> 

## Explanation of Various Images

Only images in the "image" folder will be explained.  
They will be explained in alphabetical order.  
  
・Accessory.png  
Contains cursors, the protagonist on the world map, HP bars, information in training, etc.  
Please play the game to learn which graphics are used in which scenes...  
**The thin line below the red mesh is the HP bar displayed above the character's symbol on the stage map.** **When the character's HP falls below 40%, the bottommost bar is displayed.**  
  
・Character1~8.png  
Characters.  
Animations can be edited in the editor.  
**You can extend the width to add frames.** **However, the width must be a multiple of 4.**  
**You can extend the height to add characters. However, up to 20 characters per image.**  
There are 8 character images, so up to 159 characters can be drawn. (No characters can be drawn in the top space of the first image, so it's 160-1 = 159).  
  
・Character1~8_color.png  
# Refer to ["About Character Graphic Color Change Function"](#color).  
  
・Debug.png  
Will not be displayed in either the editor or the game, but do not delete it.  
  
・Effect1~8.png  
Skill effects during combat.  
Animations can be edited in the editor.  
**You can extend the width to add frames.** **However, the width must be a multiple of 4.**  
**You can extend the height to add effects. However, up to 16 effects per image.**  
There are 8 effect images, so up to 127 effects can be drawn.  
  
・Event.png  
Events displayed on the stage map.  
Animations are fixed to alternating between 2 frames at regular intervals.  
**You can extend the width to add events.** **However, the width must be a multiple of 4.**  
Up to 511 can be drawn.  
  
・GameMode.png  
Game mode text on the title screen.  
**To display this image, "Display image on title screen" must be enabled in Database "System" settings.**  
**The image size can only be changed in width.** **However, the width must be a multiple of 4.**  
  
・MapChara.png  
Character symbols displayed on the screen and stage map.  
**Please draw them at the position corresponding to the character's array in "Character1~8.png".**  
Up to 159 can be drawn.  
  
・MapChip.png  
Map chips for the stage map.  
Up to 255 can be drawn.  
  
・Number.png  
Numbers used to display damage and HP recovery amount in combat.  
From top to bottom, "Miss", damage, **critical damage**, and HP recovery are displayed.  
  
・Number_b.png  
Numbers displayed small within skill category symbols.  
  
・Symbol.png  
Symbols like skill categories that can be displayed with special characters "#P0~X" in general text display.  
**You can extend the height to add symbols.**  
Any number can be drawn.  
  
・Time.png  
Used to display action order at the top of the combat screen.  
  
・Title.png  
Background of the title screen.  
  
・Window.png  
Background for all in-game windows.  
Always displayed from the top-left, regardless of window size.  
  
・Word.png  
Displayed when stage clear or game over occurs.  
  
・WorldBack.png  
Background of the world map.  
**The image size can be changed.** **However, the width must be a multiple of 4.**  
  
・WorldEvent.png  
World map events.  
The graphic on the right is for stage events after stage clear.  
**You can extend the height to add events.**  
Any number can be drawn.  
  
・WorldMapChip.png  
World map chips.  
**You can extend the height to add map chips.**  
Up to 256 can be drawn.  
  
・Loading.png  
Displayed when the game starts or when loading a save data list.  
  
・"back" folder  
Contains background images for Database "Background".  
**The image size is flexible.** **However, the width must be a multiple of 4.**  
  
・"picture" folder  
Contains images for Database "Picture".  
**The image size is flexible.** **However, the width must be a multiple of 4, and both width must be within 640 pixels, and height must be within 480 pixels.**  
  
・"Unused" folder  
# Refer to ["About Default Character Images and Animations"](#default).  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../light/)

[To Help Table of Contents](../)