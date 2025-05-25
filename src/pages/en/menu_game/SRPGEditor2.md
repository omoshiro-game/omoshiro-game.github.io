---
title: Simulation RPG Editor 2
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Game tools
    url: /menu_gametool/
  - name: Simulation RPG Editor 2
    url: /menu_game/SRPGEditor2/
---

## Simulation RPG Creation Software - Simulation RPG Editor 2

Here, you can download the simulation RPG creation software "Simulation RPG Editor 2".  
We also have a collection of games made with Simulation RPG Editor 2.  

[Download Simulation RPG Editor 2](/menu_game/SRPGEditor2/#SRPGE2_DL)

[Game Collection](/menu_game/SRPGEditor2/#GAME_DL)

## Download Simulation RPG Editor 2

Games created with Simulation RPG Editor 2 can be **freely distributed** on your own website, etc.  
For details, please see the included "ゲームの配布について.html" (About Distributing Games.html). It contains very relaxed distribution terms. Commercial use is also permitted.  

|Simulation RPG Editor 2 [Download Latest Version (zip)](/soft/SRPGEditor2/SRPGEditor2.zip)|   |
|---|---|
|Version|5.25|
|Genre|Simulation RPG Creation Software|
|Number of Players|1 person|
|Software Type|Freeware (Free)|
|Operation Confirmed|Windows 10, 8, 7|
|Initial Release|2015/3/31|
|Latest Release|2019/11/9|
|Comment|**You can enjoy making simulation RPGs without any programming.** <br>It has high development efficiency and quite a bit of freedom. <br>Equipped with two battle modes: "Auto Battle" and "Manual Battle". <br>In addition to a scout function, you can incorporate random elements into character stat growth, skill acquisition, shop inventory (including the concept of stock), etc., allowing you to create games that can be played over and over again. <br>Compared to the previous version, it has evolved in almost every aspect.|

[To Top of Page](/menu_game/SRPGEditor2/#START)

---

● Update History and Downloads for Each Version

How to Read the Update History

"◆ Editor: ~" indicates updates to the editor program (Editor_v*.exe) or default data. Game behavior will not change even if you carry over data from an older version.  

"◆ Game: ~" mainly indicates updates to the game program (Game_v*.exe). If an editor program update affects the game, it will also be listed under "◆ Game: ~".  

When carrying over data from an older version, updates marked "◆ Game: ~" may change in-game behavior. (Though it rarely changes for the worse)

- [v5.25](/soft/SRPGEditor2/SRPGEditor2_v525.zip) 2019/11/9  
    ◆ Editor: Fixed a bug where, in the right-click menu of some windows like the palette window, if the mouse pointer was outside all window borders on the screen when a menu command was clicked, it wouldn't execute immediately but only when the mouse pointer next entered a window border.  

- [v5.24](/soft/SRPGEditor2/SRPGEditor2_v524.zip) 2019/8/24  
    ◆ Game: Added the ability to outline fonts in the "Database" system settings.  
    ◆ Game: Addressed an issue where font shadows would extend beyond the borders of some windows by slightly reducing font sizes, etc.  

- [v5.22](/soft/SRPGEditor2/SRPGEditor2_v522.zip) 2019/6/26  
    ◆ Other: Fixed a bug where some of the anti-virus false positive countermeasures implemented in version 5.20 were ineffective in the version 5.21 program files "Game_v*.exe", "Editor_v*.exe", and "KeyConfig_v*.exe".  

- [v5.21](/soft/SRPGEditor2/SRPGEditor2_v521.zip) 2019/6/22  
    ◆ Game: Implemented "Add shadow to text" in the "Database" system settings. If you carry over data from an older version to this version, it will be OFF, so please check it if necessary.  
    ◆ Game: The game program's (Game_v*.exe) **initial window size will now be the maximum size corresponding to the display (not exceeding display resolution) while maintaining the original aspect ratio**. Incidentally, in previous versions, the window size was "100% (640*480)".  
    ◆ Game: Fixed a bug where, when "WindowMode=1" in "System.ini", the window size from the previous session was not restored on subsequent game launches.  
    ◆ Game: The maximum window size (resolution) changeable from the system menu displayed by right-clicking the title bar has been increased from "500% (3200*2400)" to "2000% (12800*9600)". Incidentally, sizes larger than the display will not be shown in the menu.  
    ◆ Game: Implemented a feature where right-clicking outside the title bar increases the window size by one step.  
    ◆ Other: Updated the explanation for "System.ini".  
    ◆ Other, minor updates.  

- [v5.20](/soft/SRPGEditor2/SRPGEditor2_v520.zip) 2019/6/14  
    ◆ Other: Improved an issue where program files (.exe) were being falsely detected by some antivirus software. This probably doesn't mean 100% no false positives, but it should be better.  
    ◆ Other, minor updates.  

- [v5.10](/soft/SRPGEditor2/SRPGEditor2_v510.zip) 2019/6/8  
    ◆ Game: **Starting with this version, we have stopped bundling "D3DX9_43.dll", whose standalone distribution was prohibited by Microsoft, and modified the program to run without this dll.** "D3DX9_43.dll" is a program file required to run DirectX used by the game program (Game_v*.exe). Previous versions would fail to start the game without it. Embarrassingly, I was unaware that standalone distribution of the dll was prohibited by Microsoft and had been bundling "D3DX9_43.dll" until now. I apologize for the inconvenience, but it would be helpful if you could update older works to this version as well (please delete "D3DX9_43.dll").  
    ◆ Game: Fixed a bug where the required DirectX version for program startup had been raised in versions 5.00 and later. Due to this issue, in versions 5.00-5.02, the game might not run with the DirectX originally included in Windows, and the player might have needed to install (update) the DirectX runtime (specifically, install the [DirectX End-User Runtime Web Installer](https://www.microsoft.com/ja-jp/download/details.aspx?id=35)).  
    ◆ Other: Fixed a bug in "KeyConfig_v2.exe" where the up key would be continuously pressed if certain gamepads were connected. Updated as "KeyConfig_v2.1.exe". Please use "KeyConfig_v2.1.exe" from this version onwards.  

- [v5.02](/soft/SRPGEditor2/SRPGEditor2_v502.zip) 2019/6/1  
    ◆ Editor: Fixed a bug in the database "Ally Characters" and "Enemy Characters" under "Random Name List File" where loading the random name list file would fail and display "!File is invalid". If you have **saved the database even once with version 5.00 or later, this bug has likely overwritten the data with item 0 (the first random name list file), so please re-enter each data item with this version or later** to restore your previous settings. We apologize for the inconvenience.  

- [v5.01](/soft/SRPGEditor2/SRPGEditor2_v501.zip) 2019/5/31  
    ◆ Game: Fixed a bug where if the window size was changed from a maximized state using "100%" to "500%" in the system menu, and then maximized again, it would not maximize correctly.  

- [v5.00](/soft/SRPGEditor2/SRPGEditor2_v500.zip) 2019/5/26  
    ◆ Game: Added support for D-pad (POV) on XInput compatible gamepads. Works with both analog stick and D-pad.  
    ◆ Game: Fixed an issue where only the highest priority gamepad could be used. In previous versions, only the gamepad first recognized by Windows or designated as the "preferred device" in the control panel could be used, but from this version, other gamepads can also be used.  
    How to set the "preferred device" is explained [here](/menu_support/gamepad_preferred_device/).  
    ◆ Game: Implemented "Gamepad" in options. Set to "ON" if using a gamepad, "OFF" otherwise. However, **strictly speaking, this setting determines whether to perform gamepad connection detection during play. Even if "OFF", if a gamepad is connected before game startup, it will be recognized. Conversely, if "ON" without using a gamepad, connection detection will be performed at regular intervals during the game only if not connected, causing game execution speed (FPS) to become unstable. That said, connection detection is not performed during stage maps or battles where speed stability is important, so you don't need to be too concerned.**
    ◆ Other: Updated the key assignment change program **"KeyConfig.exe" to "KeyConfig_v2.exe"**. In line with this game update, it no longer requires "preferred device" settings for second and subsequent gamepads, and supports D-pads on XInput compatible gamepads. **Please use this from this version onwards.**
    ◆ Game: Fixed a bug where individual commands in the shop menu could not be hidden.  
    ◆ Other, minor updates.  

    Regarding the "issue where only the highest priority gamepad could be used," I apologize for the delayed response.  
    I hadn't noticed until now (sweat).  
    For older games, it's not uncommon for only the highest priority gamepad to be usable, and solutions can be found by googling, but I feel that the "preferred device" setting isn't very well known these days (?), so I wanted to address this sooner and I apologize for the inconvenience caused to everyone.  

- [v4.92](/soft/SRPGEditor2/SRPGEditor2_v492.zip) 2019/4/12  
    ◆ Game & Editor: Fixed a bug that might have caused improper forced termination in versions 4.90 and 4.91.  

- [v4.91](/soft/SRPGEditor2/SRPGEditor2_v491.zip) 2019/4/2  
    ◆ Editor: Fixed a bug where the main window would hide behind a non-active window (e.g., Explorer) after an automatic backup was performed.  

- [v4.90](/soft/SRPGEditor2/SRPGEditor2_v490.zip) 2019/4/1  
    ◆ Game: Fixed a bug where an exit confirmation dialog would appear even during abnormal termination (forced termination due to an exception error).  
    ◆ Editor: Implemented an automatic backup function for edit data ("data" and "e_data" folders). Backup is performed only when edit data is successfully loaded immediately after editor startup. Backup settings can be changed from Main Menu > Project > Project Options, where an explanation is also available.  
    ◆ Other: Added two backup folders to "Files (folders) that should be deleted before distribution" in "ゲームの配布について.html" (About Distributing Games.html).  
    ◆ Other, minor fixes.  

- [v4.82](/soft/SRPGEditor2/SRPGEditor2_v482.zip) 2019/1/26  
    ◆ Editor: World map background images will now be displayed in the editor as well.  

- [v4.81](/soft/SRPGEditor2/SRPGEditor2_v481.zip) 2018/12/9  
    ◆ Editor: Clearly stated in the "Sound Effects" database that Wave extension formats and compressed formats for Wave files are not supported. Also, explained as follows in the online help.  

    (Excerpt from online help below)
    **Only supports Wave files in uncompressed PCM format with Wave extension format disabled. Formats that are not like this (ADPCM, etc.) cannot be played in the game even if they can be played in the editor.**
    I don't think many people are usually conscious of Wave formats, but I feel that **just remembering "if it doesn't play on the game side, format conversion will solve it" is enough.**
    Note that format conversion is sufficiently possible with free software. For example, with "Audacity," a software beloved by the author of this software, simply importing the problematic file and re-saving it effectively converts it to a WAVE file in uncompressed PCM format with Wave extension format disabled.  

- [v4.80](/soft/SRPGEditor2/SRPGEditor2_v480.zip) 2018/7/31  
    ◆ Game: Fixed a bug where canceling or changing the initial position of an ally holding an event (e.g., by placing another ally) would cause a high probability of crashing during subsequent redeployment or actions.  
    ◆ Game: Fixed a bug where placing an ally who previously held an event onto a stage without an event would cause a high probability of crashing during placement or actions.  
    ◆ Game: Fixed a bug in the display of movable range during character movement where squares that were movable but not actionable were not displayed as part of the movable range.  

- [v4.71](/soft/SRPGEditor2/SRPGEditor2_v471.zip) 2018/6/10  
    ◆ Game: In the event action "Copy Enemy," fixed a bug where the check state of "Also copy remaining HP, remaining SP, remaining skill uses" and the execution result in the game were reversed.  
    ◆ Game: When auto-battle is enabled and "Display effect prediction window" in "Database" > "System 5" is active, fixed a bug where the display position of battling characters and terrain information would shift downwards with each battle.  

- [v4.70](/soft/SRPGEditor2/SRPGEditor2_v470.zip) 2018/4/22  
    ◆ **Changes from Beta version to Full (Stable) version.**
    ◆ Editor: In the "Skills" database, fixed a bug where trying to edit skill data for a group after "clearing" that skill group would cause a crash.  
    ◆ Other, minor fixes.  

- [v4.61β](/soft/SRPGEditor2/SRPGEditor2_v461b.zip) 2018/4/14  
    ◆ Game: KeyConfig.exe now supports English layout keyboards.  

- [v4.60β](/soft/SRPGEditor2/SRPGEditor2_v460b.zip) 2018/3/31  
    ◆ Game: On the stage map, the actionable range (one square beyond the movable range) will now be displayed in a different color from the movable range. Note, in auto-battle, even characters without attack or recovery means will be displayed as having an actionable range, but this is by design.  

- [v4.55β](/soft/SRPGEditor2/SRPGEditor2_v455b.zip) 2018/3/12  
    ◆ Game: Fixed a bug in event trigger conditions where specifying an ally with ID 64 or higher for "Target" would cause the condition check to fail.  
    ◆ Editor: Fixed an issue where the editor program (Editor_v*.exe) might receive warnings or, in the worst case, be automatically deleted by Windows or security software functions.  

- [v4.54β](/soft/SRPGEditor2/SRPGEditor2_v454b.zip) 2018/2/13  
    ◆ Game: In arena battles during training, fixed a bug where forcefully ending the battle with the V key while the post-victory message is displayed would treat the arena as uncleared even though EXP and rewards were obtained. This is a recommended update as players could exploit this to repeatedly obtain EXP and rewards that should only be obtainable on the first clear.  

- [v4.53β](/soft/SRPGEditor2/SRPGEditor2_v453b.zip) 2018/1/30  
    ◆ Game: Fixed a bug that frequently caused crashes when one or more arenas with the registration type "Can fight after defeating on stage" existed.  

- [v4.52β](/soft/SRPGEditor2/SRPGEditor2_v452b.zip) 2018/1/23  
    ◆ Game: Fixed a bug where, if arena level display was set to off, the game would crash in the scene for selecting the "Arena" type in training. Note, if data from a version earlier than 4.50β was carried over to 4.50β or later, the arena level would also be set to hidden, causing a crash even if the arena was enabled.  

- [v4.51β](/soft/SRPGEditor2/SRPGEditor2_v451b.zip) 2018/1/13  
    ◆ Game: In version 4.50β, fixed a bug where entering an "Enemy" into entry 1 in training would cause a crash.  
    ◆ Game: In version 4.50β, fixed a bug where battling an "Enemy" in training would display the loser as the winner.  
    ◆ Game: In version 4.50β, fixed a bug where the cursor might become invisible on the screen for selecting "Arena" or "Enemy" type in training.  

- [v4.50β](/soft/SRPGEditor2/SRPGEditor2_v450b.zip) 2017/12/24  
    ◆ Game: Added arena function to training. Arena is a new entry target in training. Similar to "Entry" > "Enemy", defeating an enemy on the stage map unlocks all arenas set for that enemy (you can also unlock all arenas from the start). In the "Arena" database, set the enemy character to fight, required arena level, enemy revival count, terrain, required victories, clear rewards, arena level increase on clear, etc. Unlike "Entry" > "Enemy", experience points and money are gained (by default, only on first clear). Arena level and clear flags for each arena are independent for each ally character. In "System 4" database, you can change the overall arena system settings. In "System 7" database, you can enable the "Arena" command in the training menu and change arena-related text. If data from an older version is carried over to this version, the "Arena" command will be disabled (hidden), so if you want to use the arena function, you need to enable it in "System 7" database.  
    ◆ Game: In the "Enemy Characters" database, it is now possible to set a training-specific description text separate from the enemy character's "Description" text. The one implemented this time will be displayed in training. For example, explanations of movement AI are meaningless in training without movement, so they can be hidden.  
    ◆ Game: Added "Potential" item to the "Character Status" frame in "System 5" database. Potential indicates the future prospects of a character's stats for characters with random stat growth enabled, and will be a value close to (but not equal to) the result of the formula set in "Random Stat Growth Value (Total)" in "System 1" database. By displaying potential as a status, it is now possible to assess the future prospects of ally characters in scouting.  
    ◆ Game: Added "Individual Sense" item to the "Character Status" frame in "System 5" database. Individual sense is the sum of senses increased by an ally character's random sense increase. It is not at all equal to "Random Sense Increase (Total)" in "System 1" database ("Individual Sense" is converted by "Rate" in the skill category). By displaying "Individual Sense" as a status, it is now possible to assess a character's future prospects even if various senses are hidden for characters with random skill acquisition enabled.  
    ◆ Game: Skills consumed from stock during training will now be restored after training ends.  
    ◆ Game: In training, if a battle is not decided in one go, fixed a bug where forcefully ending training with the V key during the second or subsequent battles would set the character's HP and SP to the values at the end of the previous battle. This was a bug where training could be continued with depleted HP and SP. Note, regarding stage攻略 after depletion in training, there was no major problem as there is a specification to fully recover just before.  
    ◆ Game: Fixed a bug that might have caused a crash after a battle ended in training.  
    ◆ Game: When increasing scout power with the F4 key (only active during test play), characters in the scout den's character list for whom "Regenerate characters in scout den after each stage clear" in "Ally Characters" database is enabled will now be regenerated. (To reflect the scout power after the increase).  
    ◆ Game: In the event action "Warp," fixed a bug where if "If character at warp destination, warp fails" was unchecked, the warp would fail if a character was at the warp destination. Note, if this check is removed and a character exists at the warp destination, the character will warp to the closest coordinate to the specified coordinate.  
    ◆ Game: In the "Skills" database, if "Forgotten skills return to stock" is enabled, the original specification is that skills cannot be forgotten if their usage count is reduced, but if "Confirm when 'Forgetting'" is enabled, fixed a bug where skills could be forgotten even if their usage count was reduced, and the usage count would also be restored in stock.  
    ◆ Game: In the "Help" database, fixed a bug where creating 21 or more "Headings" with the same "Parent Heading" and "Parent Heading" would cause display issues.  
    ◆ Game: In the formation menu "Help," unified the display position of headings to the top of the screen. This prevents headings with the same parent heading from going off-screen even if many are displayed.  
    ◆ Other, minor fixes.  

- [v4.20β](/soft/SRPGEditor2/SRPGEditor2_v420b.zip) 2017/11/1  
    ◆ Game: Fixed a bug where saving the game in-game would cause all reserve skills to disappear. This is a critical bug in that overwriting the game save data with the reserve skills gone is problematic, so applying this version or later is recommended for all works that have the reserve function enabled. We apologize for the inconvenience.  

- [v4.15β](/soft/SRPGEditor2/SRPGEditor2_v415b.zip) 2017/10/23  
    ◆ Game: In the event action "Acquire Skill Randomly," fixed a bug where skills within the specified rank range could not be acquired in some cases. This bug could occur if the rank range on the skill data side was 2 or more (e.g., 1 to 3).  
    ◆ Game: In training, when both parties become unable to use skills, previously it could only be ended with the V key, but now a judgment is adopted to declare the one with higher remaining HP as the winner after that round ends. If remaining HP is the same, the character who went second in that round is declared the winner.  
    ◆ Game: In the training entry screen, fixed a bug where the 9th character and beyond of a character name would go off-screen.  
    ◆ Other, minor fixes.  

- [v4.14β](/soft/SRPGEditor2/SRPGEditor2_v414b.zip) 2017/10/15  
    ◆ Game: In the random name function, fixed a bug where only names up to 8 characters long could be read correctly. It now supports up to 12 characters as per specifications.  

- [v4.13β](/soft/SRPGEditor2/SRPGEditor2_v413b.zip) 2017/9/24  
    ◆ Game: Fixed an issue where, in windowed mode and operating only with a gamepad, the display's automatic OFF setting and screensaver would activate. Depending on the execution environment, the screensaver may still activate, but this will be considered a specification.  

- [v4.12β](/soft/SRPGEditor2/SRPGEditor2_v412b.zip) 2017/8/17  
    ◆ Game: Fixed an issue where startup would fail if the sound device was disabled.  

- [v4.11β](/soft/SRPGEditor2/SRPGEditor2_v411b.zip) 2017/5/23  
    ◆ Game: Fixed a bug in version 4.10β where neither the game nor the editor could be started.  

- ~~v4.10β~~ 2017/5/17 ※Distribution suspended due to a bug preventing game and editor startup
    ◆ Game: Fixed a bug where, if terrain was changed 2 or more times with a terrain skill during battle, the character's stats in that battle could become abnormal values.  
    ◆ Other, minor fixes.  

- [v4.01β](/soft/SRPGEditor2/SRPGEditor2_v401b.zip) 2017/4/8  
    ◆ Game: In the editor, if the turn switching mode was changed from "Time" with an initial action value of 1000 or more to "Simple," fixed a bug where the attacking side's action count would increase by 1 on the game side.  

- [v4.00β](/soft/SRPGEditor2/SRPGEditor2_v400b.zip) 2017/3/23  
    ◆ Game: In manual combat, fixed a bug that could cause a crash during an enemy's normal attack. This was particularly likely to occur if skill group 2 or later was specified for "Normal Attack" in the "Class" database.  
    ◆ Game: In versions 3.91β and 3.92β, fixed a bug where returning from a stage would prevent movement from that stage's square on the world map.  
    ◆ Editor: Fixed a bug in the "Class" database for normal attack skills where the skill name of skill group 1 would be displayed even if skill group 2 or later was set. (Only the display was incorrect)

- [v3.92β](/soft/SRPGEditor2/SRPGEditor2_v392b.zip) 2017/3/5  
    ◆ Game: Re-fixed a bug where some movement AIs would not operate correctly when a character was on terrain with a movement cost greater than the character's movement power. (Not fully fixed in version 3.91β)

- [v3.91β](/soft/SRPGEditor2/SRPGEditor2_v391b.zip) 2017/2/28  
    ◆ Game: Fixed a bug where some movement AIs would not operate correctly when a character was on terrain with a movement cost greater than the character's movement power.  
    ◆ Game: Fixed a bug where, if a stage was placed at the initial position on the world map, performing "Return" on that stage would move the character to coordinates (0,0) on the world map.  

- [v3.90β](/soft/SRPGEditor2/SRPGEditor2_v390b.zip) 2017/1/22  
    ◆ Game: Display "Loading.png" image with "Loading..." text at game startup, before retrieving the save data list (immediately after pressing the decision key for "Continue" and "Save"), and also when loading stage data. When carrying over data from an older version to this version, please also move the "Loading.png" image. (If this image is missing, nothing will be displayed, but no issues will occur.)

- [v3.80β](/soft/SRPGEditor2/SRPGEditor2_v380b.zip) 2016/12/5  
    ◆ Game: Fixed a bug that could cause a crash simply by executing the event action "Learn Skill."

- [v3.70β](/soft/SRPGEditor2/SRPGEditor2_v370b.zip) 2016/12/4  
    ◆ Game: In version 3.60β, fixed a bug where if an ally was placed normally without using the event action "Place Ally," movement AI or event actions targeting that ally would not function at all or behave strangely.  

- v3.60β 2016/11/16 **※Distribution suspended due to a bug**
    ◆ Game: Fixed a bug where, when "Place Ally from Party" was used in the event action "Place Ally," the behavior of other event actions targeting that ally would become strange. For example, learning the same skill twice at once with the event action "Learn Skill" or the game becoming unprogressable were quite critical bugs.  
    ◆ Game: When auto-battle is enabled and turn switching mode is "Time," fixed a bug where the "Initial Action Value" from "System 3" database was not considered in the pre-battle effect prediction display (the display was calculated with initial action value 0), causing the displayed action count to sometimes differ from the actual action count in battle.  
    ◆ Game: Fixed a bug where BGM could not be set to "None" with the event action "Change BGM."
    ◆ Editor: Fixed a bug where trying to place a large area like 64x64 with the map chip fill function would cause a crash.  
    ◆ Editor: Fixed a bug where, during test play, right-clicking would not work when editing events on the world map, or animations would not execute when editing the database.  
    ◆ Other, minor fixes.  

- [v3.50β](/soft/SRPGEditor2/SRPGEditor2_v350b.zip) 2016/10/15  
    ◆ Game: Fixed a bug that could cause a crash when executing the three types of target settings in movement AI: "Most Effective Ally (Physical Attack Calculation)," "Most Effective Ally (Magical Attack Calculation)," and "Most Effective Ally (Physical and Magical)."
    ◆ Game: The initial cursor position in "Skill," "Quick," and "Stock" in manual combat will now be the previously selected skill.  
    ◆ Game: In the "Class" database, "Affinity Type" can now be set for the class itself. This will be the initial affinity type when no skill is equipped in manual or auto combat. I think this is an important update, especially for manual combat.  
    ◆ Game: Added "Behavior of 'None' Skill Affinity Type" to "System 2" database. If "Maintain current affinity type" is selected here, when a character uses a skill with affinity type "None," the current (pre-skill use) affinity type will be maintained. For example, if a character with class affinity type "Light" uses a skill with affinity type "None," they will maintain "Light" instead of becoming "None." This will be the default setting going forward, but if data from an older version is carried over to this version, it will be "Do not maintain current affinity type, become affinity type none," so there is no problem of behavior changing after an update.  
    ◆ Game: Display the current affinity type below the character on the manual combat battle screen.  
    ◆ Game: In the "Affinity Type" database, implemented a checkbox for whether "Symbol becomes the symbol of the used skill's category," and "Symbol" for when it's OFF. Previously, the affinity type symbol (the mark indicating affinity type at the bottom right of the character) was the category symbol of the equipped skill, but now it can be set for each affinity type.  
    ◆ Game: Added a checkbox item to "System 2" database for "Display affinity type at bottom right of character symbol." Display/hide of affinity type can be toggled at any time during the game by pressing the S key, but if "Display affinity type at bottom right of character symbol" is OFF, affinity type will always be hidden, and the S key will no longer work.  
    ◆ Game: Modified character images "Character1.png," "Character1_Color.png," "Character3.png," and "Character3_Color.png." The foot shape of the second character from the top in *_Color.png for graphic number 2 in the "Class" database was strange. The rest are minor color adjustments.  
    ◆ Editor: Up to 9999 enemy characters can now be created in the database. However, creating too many is not recommended as it may slow down editor startup, database saving, game startup, or in the worst case, cause database saving to fail.  
    ◆ Other: Corrected the explanations for S key and D key in "KeyConfig.exe," "Readme.txt," and "Readme2.txt" as they were reversed.  
    ◆ Other, minor fixes.  

- [v3.40β](/soft/SRPGEditor2/SRPGEditor2_v340b.zip) 2016/9/4  
    ◆ Game: In "System 2" database, you can now choose whether to "Enable Leader System" (forced participation of leader, display of leader mark, etc.).  
    ◆ Game: Fixed a bug where trying to view an enemy's reserve skills in training would cause a crash. Enemies do not need reserves, so viewing was made impossible.  
    ◆ Game: When leveling up a character with the "F1" "F2" keys (only active during test play), HP and SP growth will now be automatically recovered. However, they will not recover if leveled up during battle.  
    ◆ Editor: In the enemy movement AI list copy function, previously "Paste" was not possible if the source enemy and destination enemy were different, but "Paste" is now possible.  
    ◆ Editor: In the event page list and action list copy function, previously "Paste" was not possible if the source event and destination event were different, but "Paste" is now possible. (This might be an important update... I should have done it sooner.)
    ◆ Editor: Fixed an issue where using some 256-color (8bit) bitmaps would cause display problems in the editor.  

- [v3.30β](/soft/SRPGEditor2/SRPGEditor2_v330b.zip) 2016/8/14  
    ◆ Game: Fixed a bug in "System 9" of "Database" under "Character Action Menu" where unchecking and hiding menu commands other than the top and bottom ones would actually hide different menu commands.  
    ◆ Game: Fixed a bug where deleting "Party Variables" (reducing the number of data) in "Database" could cause a crash when executing some event actions. Crashes might have occurred outside of events as well.  
    ◆ Game: Implemented "Skill Name Display Time Before Action" and "Keep Skill Name Displayed Until Effect Ends" settings in "System 3" of "Database".  
    ◆ Other, minor fixes.  

- [v3.20β](/soft/SRPGEditor2/SRPGEditor2_v320b.zip) 2016/7/24  
    ◆ Game: Fixed a bug where minimizing by clicking the taskbar would accept input despite being inactive.  
    ◆ Game: Fixed a bug where the window color set in "Config" would revert after the PC resumed from sleep.  
    ◆ Game: In the event action "Acquire Skill Randomly," fixed a bug where the application would freeze during event execution if all candidate skills had a rarity of 0.  
    ◆ Editor: The upper limit for the number of data items in the "Sound Effects" database has been increased from 999 to 9999.  
    ◆ Editor: Fixed a bug in the database, etc., where data could be created exceeding the original upper limit for the number of data items by using copy & paste.  

- [v3.10β](/soft/SRPGEditor2/SRPGEditor2_v310b.zip) 2016/4/12  
    ◆ Editor: Fixed a bug where text could not be entered into the "Description" field of "Enemy Characters" in the database.  

- [v3.00β](/soft/SRPGEditor2/SRPGEditor2_v300b.zip) 2016/4/2  
    ◆ Game: In manual combat, fixed a **bug where setting "Quick" for the combat AI in "Enemy Characters" database would cause the combat AI to not operate correctly or crash**. This was also a terrible bug... I apologize.  
    ◆ Editor: In version 2.90, fixed a bug where the database window might become smaller than its intended size in some environments, potentially hiding some setting items. However, even in this version, it may become smaller than the intended size on the first launch. In this case, closing the window once and then reopening the database window will improve the size.  
    ◆ Other, minor fixes.  

- [v2.90β](/soft/SRPGEditor2/SRPGEditor2_v290b.zip) 2016/3/21  
    ◆ Game: In manual combat, fixed a **bug in the combat AI of "Enemy Characters" database where setting a skill other than skill group (skill list) 1 would cause the combat AI to not operate correctly or crash**. I believe this was a rather critical bug... I apologize.  
    ◆ Game: Fixed a bug where creating 4 or more skill groups (skill lists) in the "Skills" database, or playing "Continue" after adding a skill group, would cause a crash in the formation menu "Shop" or the event action "Add Product."
    ◆ Game: Fixed a bug where "Buying" in the formation menu "Shop" would cause a crash if the stock of all products in the shop ran out.  
    ◆ Editor: Fixed a bug where the width of windows such as "Database" might be longer or shorter than intended in some environments.  

- [v2.81β](/soft/SRPGEditor2/SRPGEditor2_v281b.zip) 2016/2/27  
    ◆ Game: Window size can now be changed from the system menu displayed by right-clicking the title bar. Selectable from "100%" up to a maximum of "500%" depending on the display size. These maintain the original aspect ratio (ratio of height to width).  
    ◆ Editor: Bundled MIDI files as BGM material in the "bgm" folder. Registered each file in the "BGM" database. Also, added "Play BGM" actions to the stage clear and game over data in the default event palette. We considered OGG for this work, but after some twists and turns, it ended up being MIDI again (lol). Music composed by [Rutigel-san](https://twitter.com/rutigel), and **copyright information is also listed in "Readme.txt" and "Readme2.txt", so if you distribute a work that plays the default songs, please copy and paste the copyright notice part from "Readme2.txt" of this version or later, or bundle "Readme2.txt" of this version or later.**
    ◆ Other, minor fixes.  

- [v2.80β](/soft/SRPGEditor2/SRPGEditor2_v280b.zip) 2016/1/23  
    ◆ Confirmed normal operation on Windows 10.  
    ◆ Editor: Added explanation for "Combat AI" in "Enemy Characters" database.  
    ◆ Other, minor fixes.  

- [v2.70β](/soft/SRPGEditor2/SRPGEditor2_v270b.zip) 2015/11/29  
    ◆ Game: Significantly improved the drawing speed of equipped skill category symbols and HP bars displayed above (in front of) character symbols in general on the formation screen and stage map screen.  
    ◆ Other: Corrected the explanations for test keys "F6" and "F7" in Readme.txt as follows:
    (Before correction)
    ・F6 ... Full status recovery for all characters
    ・F7 ... Currently invalid (In the previous work, it was "Stage Clear," but in this work, stage clear can be done from the F key menu on the stage map)
    ↓
    (After correction)
    ・F6 ... If in battle, fully recovers the status of battling allies. On the stage map, fully recovers the status of all allies.  
    ・F7 ... If in battle, sets the HP of battling allies to 1. On the stage map, sets the HP of all allies to 1.  
    ◆ Other, minor fixes.  

- [v2.62β](/soft/SRPGEditor2/SRPGEditor2_v262b.zip) 2015/10/25  
    ◆ Game: When "Random Stat Growth" in "Ally Characters" database is enabled, the base stat value (value after subtracting the random stat growth amount) sometimes did not match the "Final Value" at max level, but this has been corrected so that it matches the "Final Value." Regardless of "Random Stat Growth," the base value will be the "Final Value" at max level. Even if you play "Continue" with data from an older version in this version, the base value of max level characters will be the latest "Final Value" set in the editor.  
    ◆ Game: Fixed a bug in version 2.61β where BGM would play on next startup even if turned OFF in "Options."
    ◆ Game: Fixed an issue where HP would be displayed in the auto-battle effect prediction window even if HP was hidden in "System 5" database.  
    ◆ Editor: A dialog for selecting the battle mode will now appear on first editor startup. The aim is to have the user select it first as the game content changes significantly depending on the battle mode.  
    ◆ Editor: Display reference symbol graphics (graphics that can be displayed with "#P*." in message events, etc.) at double size (2x width and height). I think they were too small and hard to see before.  
    ◆ Editor: Corrected some text. In the test menu for the stage map in "System 8" database, it was explained as "Menu called with A key," but it was correctly "Menu called with F key."
    ◆ Other, minor fixes.  

- [v2.61β](/soft/SRPGEditor2/SRPGEditor2_v261b.zip) 2015/10/12  
    ◆ Game: Implemented "Compatible Weapon" for skills in the "Skills" database, and added "Magic Weapon" to skill "Type." This allows weapon skills to be divided into physical weapons and magic weapons. The difference between physical and magic weapons is only whether attack or magic power increases with "Effect Value," but since you can choose "Physical Weapon" or "Magic Weapon" for "Compatible Weapon" of other skills (non-equipment skills), you can, for example, create a magic weapon that changes the hit rate of only magic skills.  
    (To be honest, I myself don't like weapon skills and want to abolish them to simplify things, but it's too late now... so I thought I'd try to improve their completeness, which led to this update. I don't think there's much demand for it.)
    ◆ Game: In auto-battle, fixed a bug where the "Power" of the equipped skill displayed at the bottom right of the status window would be the sum of the character's "Attack" + skill's attack power, even if the equipped skill was a type where "Character's stats do not affect the effect." From this version, if the skill "does not affect character stats," power will no longer be displayed.  
    ◆ Other, minor fixes.  

- [v2.60β](/soft/SRPGEditor2/SRPGEditor2_v260b.zip) 2015/9/13  
    ◆ Significantly improved the specifications for special commands (such as "Open" in treasure chest events) in the character action menu. The specifications in the previous work and conventional versions had design flaws such as not being able to display multiple special commands in the action menu, but these have been resolved. From this version, multiple special commands can be displayed at once, and event actions corresponding to each special command will now be executed without problems.  
    ◆ Other, minor fixes.  

- [v2.51β](/soft/SRPGEditor2/SRPGEditor2_v251b.zip) 2015/9/5  
    ◆ Editor: In the default movement AI templates, {"Within action range" and "To nearest destination" then "Wait"} was missing from all invasion types, so this has been inserted at the beginning of the movement AI list. Without this, it would prioritize combat even when it could move to the destination, making it unintelligent for an invasion type.  

- [v2.50β](/soft/SRPGEditor2/SRPGEditor2_v250b.zip) 2015/8/30  
    ◆ Editor: Improved the accuracy of target settings "Most Effective Ally (Physical Attack Calculation)," "Most Effective Ally (Magical Attack Calculation)," and "Most Effective Ally (Physical and Magical)" for enemy movement AI in manual combat. For these three settings, the expected damage value is first calculated internally, and the action target is determined based on that. However, in the conventional specifications, there was a problem with how the expected damage value was calculated. Specifically, it was "{Enemy Attack (or Magic) - Ally Defense (or Resistance)} × Hit Rate × (1 + Critical Rate) × Elemental Resistance... (abbreviated)" (Hit Rate is 0.0 to 1.0, Critical Rate is 0.0 to 1.0), and there was a problem where if there were multiple candidate action targets and the enemy's "Attack" was less than or equal to the ally's "Defense," the expected damage value would become zero (not negative), and there would be no difference. Also, it was a specification that the skill's attack power was not considered at all. However, in this version, by comprehensively analyzing the combat AI set for the acting character, the skill's attack power is now considered, and a difference can now be made even if there are multiple candidate action targets and the enemy's "Attack" is less than or equal to the ally's "Defense."
    ◆ Editor: Along with the update to movement AI, added "In manual combat, ignore this action in the calculation to determine the action target for 'Most Effective Ally' in movement AI" to the combat AI setting items in "Enemy Characters" database. From this version, the program will comprehensively analyze the combat AI set for the acting character to determine the expected damage value, and specific actions (skills) can be ignored at that time. (This area will be explained in more detail in the help)
    ◆ Editor: Corrected the default movement AI templates. Deleted "Most Effective Ally (Physical Attack Calculation)" after "Most Effective Ally (Magical Attack Calculation)" in movement AI templates that incorporated "Most Effective Ally (Magical Attack Calculation)." In the previous work, "Most Effective Ally (Magical Attack Calculation)" had a possibility of movement AI failure if there were no usable skills, so "Most Effective Ally (Physical Attack Calculation)" was also incorporated as insurance. However, in this work, "Most Effective Ally (Magical Attack Calculation)" does not fail, so I realized "Most Effective Ally (Physical Attack Calculation)" was unnecessary and deleted it. However, the behavior in the game will not change.  
    ◆ Game & Editor: Reduced the possibility of game and editor program files (Game_v*.exe and Editor_v*.exe) being falsely detected by some security software scans. Took measures as, in the worst case, files could be deleted automatically.  
    ◆ Other, minor fixes.  

- [v2.42β](/soft/SRPGEditor2/SRPGEditor2_v242b.zip) 2015/8/13  
    ◆ Game: If BGM is MIDI, it will now be played by DirectMusic's software synthesizer. Along with this update, "Midi_DirectMusic" has been added to the environment setting file "System.ini". Setting "Midi_DirectMusic=0" will revert to the conventional playback method. However, the conventional playback method sent a GM System On instead of a GS Reset, and MIDI data for MSGS, which is the standard sound source since Windows Vista, would not play correctly if it contained GS standard tones or commands, so it is not recommended. This is also explained in System.ini.  
    ◆ Editor: Fixed a bug where, if right-clicking on the stage map deselected data in the enemy palette window, trying to "Insert" a new enemy in this state would cause a crash.  
    ◆ Other, minor fixes.  

- [v2.40β](/soft/SRPGEditor2/SRPGEditor2_v240b.zip) 2015/7/5  
    ◆ Game: Changes to "Sense" settings in "Class" database will now be reflected in "Continue" in the game (and in game save data). However, this will not be reflected for characters generated in older versions (including characters registered in the scout list). Changes to sense will only be reflected for characters generated in this version or later. Note, changes to "Stats" settings for classes and allies are originally reflected even in "Continue."
    ◆ Editor: Fixed a **bug where "Start New Game" would not progress** if, in "Ally Characters" and "Enemy Characters" database, "Random Stat Growth" was enabled, the final value of a character's stat was other than 0, and the "Stat Rate" in "System 1" database corresponding to that non-zero stat was "0.0".  
    ◆ Editor: In "Ally Characters" and "Enemy Characters" database, in the stat explanation, "※If final value is '0', it's the same as initial value (does not grow)" is stated, but "Also becomes excluded from random stat growth" is added as a supplement (this specification itself is original). By setting the final value of a stat to "0", that stat will be excluded from random stat growth. Incidentally, if you don't want the stat to grow but want to enable random stat growth, set the initial and final values to be the same.  
    ◆ Editor: Added explanation for random stat changes to "System 1" database.  
    ◆ Editor: Prevented windows in general from being closed with the Esc key. For database editing etc., there was no exit confirmation, so there was a possibility of accidents due to mistaken Esc key input.  
    ◆ Other, minor fixes.  

- [v2.30β](/soft/SRPGEditor2/SRPGEditor2_v230b.zip) 2015/6/21  
    ◆ Game: Fixed a bug where, if training was conducted continuously 2 or more times with "Required Victories" set, battles from the second time onwards would start with depleted HP and SP.  
    ◆ Editor: Added "Test Play Settings" to Main Menu > "Test Play." In "Test Play Settings," you can make settings that are only active during test play. You can disable parts of the random growth system. The test play settings for "Training" that could be set in "System" database in conventional versions have also been placed here.  
    ◆ Editor: Adopted "e_data" folder. Files that store editor setting data not directly related to the game will be saved in this "e_data" folder. You can slightly reduce the file size when distributing the game by deleting this folder.  
    ◆ Editor: Fixed a bug in "Ally Characters," "Enemy Characters" database where, when random stat growth was enabled, the reference values for various stats corresponding to the "Level" being edited were sometimes slightly incorrect.  
    ◆ Other, minor fixes.  

- [v2.20β](/soft/SRPGEditor2/SRPGEditor2_v220b.zip) 2015/6/13  
    ◆ Game: Image updates. The second character from the top in "Character1_color.png" was incompletely filled. Added symbol images to "Symbol.png."
    ◆ Game: Implemented "Help" in the database. Explanations can now be provided within the formation menu.  
    ◆ Game: **In "Ally" database, fixed a bug where random skill acquisition would not be enabled unless "Random Sense Increase" was checked. Implemented a checkbox item to determine whether to "Randomly Acquire Skills" separately from "Random Sense Increase."**
    ◆ Game: Fixed a bug in movement AI where, even if set to heal characters "within action range," the acting character would not use a healing skill on themselves under certain circumstances.  
    ◆ Game: In auto-battle, fixed a bug in movement AI when no skills set in combat AI could be used due to SP shortage, etc. Internally, it should process movement AI by setting the skill to a normal attack skill, but this was not being done.  
    ◆ Game: In auto-battle, changed the specification so that if SP is reduced by the "Manipulate Status" event action and the equipped skill becomes unusable, a normal attack skill is automatically equipped.  
    ◆ Game: Fixed a bug where some graphics would become solid green rectangles after the PC resumed from sleep, etc.  
    ◆ Editor: **The explanation of the random growth system on the right side of "System 1" database was cut off, so display the full explanation.**
    ◆ Editor: Changed the name of "Scout," a value that affects character random growth, to "Scout Power." I realized it was difficult to explain if it had the same name as "Scout" in the formation menu... Accordingly, party variable number 3 has also been renamed.  
    ◆ Editor: Changed default message settings. Changed display position from "Center" to "Bottom." Even if the character you want to talk to is brought to the center of the screen with "Move Map Cursor," the message hides the character, so I thought "Bottom" would be preferred.  
    ◆ Other, minor fixes.  

- [v2.10β](/soft/SRPGEditor2/SRPGEditor2_v210b.zip) 2015/4/4  
    ◆ Game: Effect animation "Movement" can now be made to move to set coordinates over time, like character animation. (Previously, it was fixed to instant movement.)
    ◆ Editor: Fixed a bug that caused a crash when trying to edit "Ally Characters" database under certain conditions. It might have been quite easy to trigger...  

- [v2.00β](/soft/SRPGEditor2/SRPGEditor2_v200b.zip) 2015/3/31  
    Beta version finally released!

[To Top of Page](/menu_game/SRPGEditor2/#START)[
](/menu_game/SRPGEditor2/#START)

## Game Collection

Currently, all are freeware (free).  
Only complete versions and recommended games that can be played to the end are introduced here.  

※If your gamepad (game controller) doesn't work, you may be able to resolve it with the method [here](/menu_support/gamepad_preferred_device/).  

※There are no plans to add more works.  
You might find recent games made with Simulation RPG Editor at the following links.  

- [Freem! > Simulation RPG Editor Category (Newest First)](https://www.freem.ne.jp/search/%E3%82%B7%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3RPG%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%E3%83%BC)
- [New AkuEdi BBS](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi)

Registered: 2019/3/12  

- [Unchi Senki (Poop War Chronicle)](https://www.freem.ne.jp/win/game/17157) Author: Kazuma-sama
- [Tights de Battlers (Battlers in Tights)](https://www.freem.ne.jp/win/game/19242) Author: Kazuma-sama

Registered: 2015/6/21  

- [Simuleiyu](/menu_game/Simulayu/) Author: [Anton](/)

[To Top of Page](/menu_game/SRPGEditor2/#START)