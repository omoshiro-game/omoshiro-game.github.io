---
title: Test Play Settings | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Test Play Settings
  url: /menu_support/srpgeditor2_help/testplay_settings/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Test Play Settings".
h1: Test Play Settings
---


<a name="TOP"></a> 

## Test Play Settings

From the main menu, select "Test Play" > "Test Play Settings" to open a window for changing test play settings.  

"Test Play Settings" Window

![Screenshot of "Test Play Settings" Window](/menu_support/srpgeditor2_help/testplay_settings/settings.jpg)

Each setting item is explained below.  

● Path to Test Play Game Program (Frame)  
The location of the game program (Game_v*.exe) to launch during test play.  
**Normally, checking "Auto acquire" should be fine.**  
If an error dialog "Could not call game program!" or similar appears when running test play, uncheck "Auto acquire" and then use the "Browse" button to specify the game program.  

● Disable Random Stat Growth  
Whether to disable random stat growth in test play.  
Enabling this will be the same as disabling "Random Stat Growth" for all characters in Database "Ally Character" and "Enemy Character" settings.  
May be useful for balancing class and character stats themselves.  

● Disable Random Sense Increase  
Whether to disable random sense increase in test play.  
Enabling this will be the same as disabling "Random Sense Increase" for all characters in Database "Ally Character" settings.  
May be useful for balancing class sense itself.  

● Random Skill Learning  
Settings for random skill learning in test play.  
Select one from the following:  
  
- No change in test play ... No change in test play.  
- **Learn all possible skills ... If the conditions required to learn a skill (sense, etc.) are met and the learning probability is not 0%, all such skills will be learned.** This might be good for balancing individual skills.  
- Disable random skill learning ... Disables random skill learning. This is the same as disabling "Random Skill Learning" for all characters in Database "Ally Character" settings. May be useful for balancing character's own learned skills.  

● Skill learning level in random skill learning  
Settings for skill learning level in random skill learning during test play.  
Select one from the following:  
  
・No change in test play ... No change in test play.  
・Learn at mid-point of min and max learning levels (sense also affects) ... Learns at a level midway between the minimum and maximum values of the skill's "Learn LV" formula.  
・Learn at min learning level (sense also affects) ... Learns at the minimum level of the skill's "Learn LV" formula.  
・Learn at max learning level (sense also affects) ... Learns at the maximum level of the skill's "Learn LV" formula.  

● Training  
Settings for the menu "Training" in test play.  
Select one from the following:  
  
・No change in test play ... No change in test play.  
・Can train ... Even if the menu "Training" is hidden and unselectable in the editor settings, it can be selected in test play. Mainly useful for checking skill effects.  
・Can fight all enemies ... Even if the menu "Training" is hidden and unselectable in the editor settings, it can be selected in test play. Furthermore, all "enemies" and "arenas" can be selected. **Mainly useful for checking skill effects and enemy battle AI.**  
・Can fight all enemies and arena level becomes max ... Even if the menu "Training" is hidden and unselectable in the editor settings, it can be selected in test play. Furthermore, all "enemies" and "arenas" can be selected, and all allied characters' arena levels are also overwritten to maximum, so you can challenge all "enemies" and "arenas".  

[Back to top of page](#TOP)

---

  

[To Help Table of Contents](../)