---
title: Action Editor 4
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Game Creation Software
    url: /menu_gametool/
  - name: Action Editor 4
    url: /menu_game/ActionEditor4/
Keywords:
     - Game production
     - Creation
     - Action game
     - Shooting game
     - Action Editor
     - Action Editor 4
description: You can download the action game production software "Action Editor 4" for free.  You can also create shooting games and puzzle games. Anyone can easily and happily make it.
---

<a name="START"></a>

## Action Game Creation Software Action Editor 4 

Here you can download the action game creation software "Action Editor 4".  
There is also a collection of games created with Action Editor 4.  
  
[To Action Editor 4 Download](#AE4_DL)  
  
[To Game Collection](#GAME_DL)  

<a name="AE4_DL"></a>

## Action Editor 4 Download 

**Games created with Action Editor 4 can be freely distributed on your own website, etc.**  
For details, please refer to the included "About Game Distribution.html" (formerly "About Secondary Distribution.html").  

|Action Editor 4 [Download Latest Version (zip)](/soft/ActionEditor4/ActionEditor4.zip)|   |
|---|---|
|Version|10.20|
|Genre|Action Game Creation Software|
|Players|1|
|Software Type|Freeware (Free)|
|Confirmed compatibility|Windows 10, 8, 7, Vista, XP|
|Initial Release|2008/9/26  |
|Latest Release|2020/12/24  |
|Comment|The latest in the Action Editor series.  <br>You can happily create 2D action games **without programming**.  <br>It offers high development efficiency and a good degree of freedom.  <br>**Not only action games, but also action RPGs, shooting games, puzzle games, etc., can be created.**|

[Back to top of page](#START)

---

● Update History and Download for Each Version

How to Read Update History

"◆Editor: ~" indicates updates to the editor program (Editor_v*.exe) or default data. Game behavior will not change even if old version data is migrated.  
  
"◆Game: ~" primarily indicates updates to the game program (Game_v*.exe). Even if the editor program is updated, if it affects the game, it belongs to "◆Game: ~".  
  
When migrating old version data, if there are updates labeled "◆Game: ~", game behavior may change (may happen occasionally).  

- [v10.20](/soft/ActionEditor4/ActionEditor4_v1020.zip) 2020/12/24  
    ◆Game: Fixed a bug where trying to display character variables with the "Message" command from an item would cause a crash.  
    ◆Game: Fixed a bug where assigning X and Y coordinates to a character with the "Status Manipulation" command would not move it to the correct position.  
    ◆Game: Fixed a bug where return values were not assigned correctly when the left operand was "Status" in the "Status Manipulation" command.  
    
- [v10.10](/soft/ActionEditor4/ActionEditor4_v1010.zip) 2020/9/26  
    ◆Other: Fixed some parts of a bug where KeyConfig.exe was sometimes flagged as a threat by certain antivirus software.  
    *This fix is still incomplete, and there are still elements that cause false positives. I want to provide a more problem-free version next, but I don't know if it will work. Explaining the reason for releasing it in an incomplete form would be lengthy, so I will omit it...  
      
    **※Added on 2020/10/6**  
    In conclusion, this false positive issue could not be fully resolved.  
    When scanning KeyConfig.exe from "Action Editor 4" versions 9.67 to 10.00 (during this period, the filename was "KeyConfig_v2.12.exe") with OPSWAT (https://metadefender.opswat.com/) using multi-scan (simultaneous scan with 38 antivirus engines),  
    ・Kaspersky  
    ・RocketCyber  
    ・Filseclab  
    from these 3 companies' antivirus engines falsely detected a threat.  
    Among these, Kaspersky was fixed in version 10.10 so it wouldn't falsely detect.  
    For the remaining 2 companies, I inquired by attaching samples via email.  
    RocketCyber replied that "the latest engine did not falsely detect it. Please wait until OPSWAT adopts the latest engine." As of October 6, 2020, re-scanning with OPSWAT still detected a threat, so it seems it will still take time.  
    I inquired Filseclab on September 29, 2020, but have not yet received a reply...  
    Honestly, I feel I've done all I can about this issue at this point.  
    If you are still experiencing false positive detections, please inquire with the company providing the detecting engine (it will mostly be in English). I believe inquiries are possible even if you are not a developer.  
    I apologize for the inconvenience.  
    
- [v10.00](/soft/ActionEditor4/ActionEditor4_v1000.zip) 2020/7/2  
    ◆Game: The "Display Picture" command can now set vertical and horizontal scaling separately.  
    ◆Game: Implemented horizontal and vertical flip functions for the "Display Picture" command.  
    
- [v9.97](/soft/ActionEditor4/ActionEditor4_v997.zip) 2020/3/9  
    ◆Game: Implemented a setting to fix the save destination to number 1 without displaying the save destination selection window when "Start New Game" is selected in Story Mode. If you wish to use this, please go to Main Menu > "Project" > "System" > "2" tab > "Auto-save Initial Settings" and select "Save destination fixed to #1, auto-save always ON". On the title screen, if no save data exists, only "Start New Game" will be displayed and "Continue" will be hidden. Conversely, if save data exists, only "Continue" will be displayed. Also, the "Save" and "Auto-save" commands will no longer be displayed in the World Map menu.  
    
- [v9.96](/soft/ActionEditor4/ActionEditor4_v996.zip) 2019/11/9  
    ◆Editor: Fixed a bug in some window right-click menus (e.g., palette window) where clicking a menu command when the mouse pointer is outside the frame of all on-screen windows would not execute immediately, but only when the mouse pointer re-entered the window frame.  
    
- [v9.95](/soft/ActionEditor4/ActionEditor4_v995.zip) 2019/10/26  
    ◆Game: Fixed a bug introduced in version 9.91 where sound effects for damage invalidation would play when shots with 0 power or 0 impact hit. By specification, it should only play when damage or impact is invalidated by character's defense or invincibility for shots with power 1 or more or non-zero impact, so it was fixed accordingly.  
    ◆Game: Fixed a bug where selecting choices with key input was possible when a message with choices was displayed during replay playback.  
    
- [v9.94](/soft/ActionEditor4/ActionEditor4_v994.zip) 2019/10/2  
    ◆Game: In version 9.93, the game program file (Game_v*.exe) and editor program file (Editor_v*.exe) remained at version 9.92, so they were updated again.  
    
- [v9.93](/soft/ActionEditor4/ActionEditor4_v993.zip) 2019/10/1  
    ◆Game: Fixed a bug in versions 9.91 and 9.92 where changes to "Support symbol image display" in "System" settings were not saved.  
    
- [v9.92](/soft/ActionEditor4/ActionEditor4_v992.zip) 2019/9/21  
    ◆Game: Changed the clear mark for challenge mode in the top right of the default "Accessory.bmp" image from a "○" character to a star. This was changed because the traditional "○" character would float when fonts had shadows or borders.  
    ◆Other: Updated "About Game Distribution.html". Added a link to the online help [About Packaging](/en/menu_support/actioneditor4_help/packaging/).  
    
- [v9.91](/soft/ActionEditor4/ActionEditor4_v991.zip) 2019/8/24  
    ◆Game: In "System" settings, text can now have borders.  
    ◆Game: Implemented "Minimum damage reducible by defense power" in "System" settings. For example, setting this to 1 means that even if defense power is higher than collision/shot power, 1 damage will still be taken. It's also possible to specify as a percentage of collision/shot power.  
    ◆Game: Implemented "Minimum impact reducible by impact resistance" in "System" settings. For example, setting this to 1 means that even if impact resistance is higher than collision/shot impact, 1 (hbl) knockback will still occur. It's also possible to specify as a percentage of collision/shot impact.  
    ◆Game: In "System" settings, a sound effect can now be set for when damage is invalidated by defense or invincibility. Also, **"Damage Invalidated.wav" has been included as a sound effect asset**. If you are migrating data from an old version to this version, "Damage.wav" will be set to play even when damage is invalidated, so please change it to "Damage Invalidated.wav" if necessary.  
    ◆Other: Small updates.  
    
- [v9.88](/soft/ActionEditor4/ActionEditor4_v988.zip) 2019/8/10  
    From this version, it has changed from beta version to official version (stable version).  
    ◆Game: Fixed a bug in version 9.87β where the return value of the "Warp" command was incorrect. It should have been 2 on warp failure, but it was 1.  
    ◆Editor: Implemented a checkbox "Prevent a bug that occurs in some environments where 'when test playing without saving common palette and stage changes, the game hides behind the editor'" in Project Options. Checking this prevents the bug, but it will disable automatic saving during test play, forcing manual saving.  
    
- [v9.87β](/soft/ActionEditor4/ActionEditor4_v987b.zip) 2019/8/1  
    ◆Game: In "Wave (Horizontal)" and "Wave (Vertical)" character effects, when "Start Width" or "End Width" is 0, the wave height now changes smoothly. The previous specification had long wave pause times (easier to see with "Loop Execution"), so it's slightly improved. If you still feel the wave pause time is long, try changing the width from 0 to 1, etc.  
    ◆Editor: Fixed a bug in version 9.80β and later where trying to set a "Warp" command for an item or edit an item that already had a "Warp" command set would cause a crash.  
    
- [v9.86β](/soft/ActionEditor4/ActionEditor4_v986b.zip) 2019/7/28  
    ◆Game: Fixed a bug in version 9.10 and later where character-specific bmp images with widths other than 512 pixels would display with shifted frames. Originally, character-specific bmp images were fixed to 512 pixels wide, but from version 9.10, they secretly supported other widths... no, they were supposed to, but in reality, only the editor supported it, and the game side still assumed images were 512 pixels wide, using the same specifications as versions below 9.10 to determine which frames to display. This caused frames to display shifted when images with widths other than 512 were used, but this has now been fixed. Along with this fix, a setting "Apply behavior from versions 9.85β and earlier when displaying character-specific bmp images with widths other than 512 pixels" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    ◆Game: Formally supported character-specific bmp images with widths other than 512 pixels. Both the width and height of the images must be multiples of 32 (since the character itself is a multiple of 32 in both width and height, there should be no problem if drawn normally).  
    ◆Game: In "BGM" of Option Mode, volume can now be adjusted in 8 steps from 0 to 7. The traditional BGM "ON" volume corresponds to "7", meaning BGM volume can now be lowered. "SE" has 11 steps from 0 to 10, but "BGM" has 8 steps from 0 to 7 for a reason.  
    ◆Game: In "SE" of Option Mode, volumes 4 and above are slightly lowered.  
    ◆Game: Fixed a bug in versions 9.66 and later where, when drawing mode was DirectDraw, the drawing area would be 640x480 even if the window size was not 640x480 (100%) at game launch. DirectDraw itself is no longer recommended, and although this bug could be resolved by simply moving the window slightly, it was an annoying bug that often occurred right after initial launch, so it was fixed.  
    
- [v9.85β](/soft/ActionEditor4/ActionEditor4_v985b.zip) 2019/7/24  
    ◆Game: Fixed a bug where, when a message with choices was displayed with "#R*Set Choices" checked in the "Message" command and the display type was not "Display until advance key is pressed", the cursor would display during the display of other messages with choices. Note that choices will not appear unless "Display until advance key is pressed" is selected, which is by design.  
    ◆Game: Flow variables can now be used in the "Arrange" command.  
    ◆Game: "Block Summon" and "Character Summon" commands can now retrieve the actual number of summons as a return value. If the summon destination is outside the stage, block summons fail and are not counted in the summon count, but character summons do not fail and are counted (because characters may move from outside to inside the stage after being summoned).  
    ◆Game: "Message" command can now display character variable and flow variable values. Note that flow variables need to be specified by variable number, like "#f1." or "#f2.", not by alphabet, and automatic updating is not supported.  
    ◆Game: Default cursor position settings for choices in "Message" command can now use character variable and flow variable values as conditions. Flow variables need to be specified by variable number, like "f1" or "f2", not by alphabet.  
    ◆Editor: In "Execute Code" command, "rA" and "rB" (flow variables A, B) are now recognized as "fA" and "fB". Since "f" is used for displaying flow variables in the "Message" command, "fA" and "fB" are now recommended for "Execute Code" as well, for consistency.  
    ◆Editor: In "Execute Code" command, added an explanation in the editor that decimal places are truncated during calculations and that division by zero is not allowed. This is important, but was only explained in help until now.  
    ◆Other: Small updates.  
    
- [v9.82β](/soft/ActionEditor4/ActionEditor4_v982b.zip) 2019/7/17  
    ◆Game: Fixed a bug in versions 9.80β and 9.81β where auto-save for replays would fail if the stage was cleared without ever opening the pause menu (without ever pressing the space key) in the next playthrough after one death.  
    
- [v9.81β](/soft/ActionEditor4/ActionEditor4_v981b.zip) 2019/7/16  
    ◆Game: In version 9.80β, **the name of the return value assignment destination ("Return Value (A,B)" which can be specified in "Status Manipulation" etc.) was changed from "Return Value (A,B)" to "Flow Variable (A,B)".** This was done because it's more understandable to call it "Flow Variable" as it can be used like a variable. Just as character variables are independent for each character, flow variables are independent for each flow (one flow has one Flow Variable A and one Flow Variable B).  
    ◆Game: In version 9.80β, the specification of assigning 0 to unrelated flow variables when assigning a return value to a flow variable for commands with return values was stopped. For example, in the case of warp, when 1 (success) or 2 (failure) was assigned to Flow Variable A, 0 was also assigned to the unrelated Flow Variable B. From this version, the value of Flow Variable B will not be changed. Along with this fix, a checkbox "Apply behavior from versions 9.80β when assigning command return values to flow variables" was implemented in the system settings. **If you are migrating data from version 9.80β to this version, this setting will be enabled, so it is recommended to uncheck it if possible.**  
    ◆Game: Fixed a bug where attempting to receive a command's return value in an item's "Effect" would cause a crash.  
    ◆Game: **Implemented flow variables in items to allow them to receive return values.** The command list of "Effect" when an item is acquired is considered as one flow, and flow variables were implemented for items.  
    ◆Game: Fixed a bug where variables would not display even if attempting to display them immediately after choice text, like "#R1.#S1.", in the "Message" command.  
    ◆Editor: Fixed a bug where assigning to "rA" or "rB" (Flow Variables A, B) as the assignment destination in the "Execute Code" command would cause an error.  
    ◆Other: Small updates.  
    
- [v9.80β](/soft/ActionEditor4/ActionEditor4_v980b.zip) 2019/7/13  
    ◆Game: Implemented choice function in "Message" command.  
    ◆Game: Implemented command return values. A return value is a numerical representation of the command's execution result, which can be used by assigning it to a variable with the "Status Manipulation" command, etc. The following commands support return values:  
      
    ・Flow Operation  
    Return Value A: 1 if operation succeeded, 2 if operation failed  
      
    ・Message  
    Return Value A: Player's chosen option  
      
    ・Warp  
    Return Value A: 1 if warp succeeded, 2 if warp failed  
      
    ・Set Target  
    Return Value A: 1 if target exists, 2 if target does not exist  
    Return Value B: 1 if target changed, 2 if target remained the same  
      
    ・Status Manipulation  
    Return Value A: 1 if operation succeeded, 2 if operation failed  
    Return Value B: Amount of value change  
      
    ・Status Manipulation 2  
    Return Value A: 1 if operation succeeded, 2 if operation failed  
      
    ・Disappearance  
    Return Value A: Number of characters disappeared  
    Return Value B: Number of shots disappeared  
      
    Added [Return Value Explanation](/en/menu_support/actioneditor4_help/word/#RETURN) to the help.  
      
    ◆Game: Fixed a bug where the F2 key, which saves the previous play as a replay file, would save the latest play instead of the previous one (F1 and F2 keys were identical). This bug occurred in versions 9.50 to 9.67.  
    ◆Game: Fixed a bug where the four flow timings implemented in version 9.00 ("When damage received (if received damage is 1 or more)", "When impact received (if received impact is 1 or more or -1 or less)", "When damage dealt by attack (if dealt damage is 1 or more)", "When impact dealt by attack (if dealt impact is 1 or more or -1 or less)") did not support the "Target character involved in timing" setting.  
    ◆Game: Fixed a bug where selecting a save data from versions below 9.20 after playing a replay file from version 9.20 or higher in replay mode would sometimes fail to load with "Stage could not be loaded." Note that even if this bug occurred, loading was possible by restarting the game.  
    ◆Game: Implemented "Allow replay saving" checkbox in Stage Settings. For example, for opening or ending stages, unchecking this can reduce unnecessary replay files (especially with the auto-save function).  
    ◆Game: Fixed a bug where text like "Press Space key to quit" or "Press F3 key to register in ranking" would display at the bottom of the screen in stages played before the title screen ("FreeStage=" in "System.ini").  
    ◆Game: Slightly lengthened the display animation for messages that "Display until advance key is pressed", and for 0.2 seconds after display, disable input from the message advance key (Z key). This is a countermeasure against accidentally skipping messages when mashing the Z key in fast-paced games.  
    ◆Game: Resolved an issue where long world names and high score display text on the world map would overlap with the ranking window display.  
    
- [v9.67](/soft/ActionEditor4/ActionEditor4_v967.zip) 2019/6/26  
    ◆Other: Fixed a bug where some of the antivirus false positive countermeasures implemented in version 9.64 for game program files (Game_v*.exe), editor program files (Editor_v*.exe), and KeyConfig_v*.exe were disabled in version 9.66. (Though not necessarily the cause), it seems to have been falsely detected... Sorry.  
    
- [v9.66](/soft/ActionEditor4/ActionEditor4_v966.zip) 2019/6/22  
    ◆Game: Implemented "Add text shadow" in "System" settings. If you are migrating data from an old version to this version, it will be OFF, so please check it if necessary.  
    ◆Game: Implemented "Display in front of character" checkbox in "Execute Effect" command. Unchecking this allows displaying effects behind characters, which was not possible in previous versions.  
    ◆Game: Game program (Game_v*.exe) **window size at first launch will be the maximum size appropriate for the display (not exceeding display resolution) while maintaining the original aspect ratio**. By the way, in previous versions, the window size was "100% (640*480)".  
    I had a memory that an aspect ratio-preserving scaling function (200%~) was implemented in version 8.71 to make the window size automatically adjust to the maximum size appropriate for the display, but it seems it was actually 100%...  
    ◆Game: Fixed a bug where, when "WindowMode=1" was set in "System.ini", the window size from the previous session was not reproduced on subsequent game launches.  
    ◆Game: The maximum window size (resolution) changeable from the system menu displayed by right-clicking the title bar has been changed from "500% (3200*2400)" to "2000% (12800*9600)". Note that sizes larger than the display will not be shown in the menu.  
    ◆Game: Implemented a feature to increase the window size by one step (+100%) by right-clicking anywhere outside the title bar.  
    ◆Game: Fixed a bug in versions 9.30 and later where Alt+Tab key would not switch to other apps during fullscreen, and a bug where returning to the game after switching apps once during fullscreen would not restore correctly.  
    ◆Editor: Added the following text to the editor's explanation for the bitmap conversion tool:  
    //////////////////////////////////////////////////  
    ☆If you set "Bitmap Color Depth" to "16.77 million colors (24bit) without color palette" in the system settings, it will no longer depend on a color palette, so this conversion process is not necessary.  
    //////////////////////////////////////////////////  
    I previously saw comments like "I hate having to reduce the colors of images drawn in full color in AcEdi4," but as mentioned, **changing the "Bitmap Color Depth" in the system settings eliminates the need for color reduction (no conversion needed with the bitmap conversion tool)** for full-color images. This specification has been in place since the early versions, but it might have been unclear due to insufficient explanation...  
    ◆Editor: Fixed a bug where, when checking "Same as filename" for data names in database general, if the filename contained the character "ソ", the data name would become corrupted. It might have also happened with characters other than "ソ".  
    ◆Other: Updated "System.ini" explanation.  
    ◆Other: Added 3 Story Mode stages as reference stages.  
    ◆Other: Small updates.  
    
- [v9.64](/soft/ActionEditor4/ActionEditor4_v964.zip) 2019/6/14  
    From this version, it has changed from beta version to **official version (stable version).**  
    ◆Other: Improved the issue where program files (.exe) were falsely detected by some antivirus software. While it may not be 100% eliminated, I believe it has improved.  
    ◆Other: Small updates.  
    
- [v9.63β](/soft/ActionEditor4/ActionEditor4_v963b.zip) 2019/6/5  
    ◆Game: Fixed a bug in versions 9.60β and later where, when "Gamepad" in options was "ON", returning to the world map after clearing a stage in Story Mode would cause a crash.  
    ◆Game: Fixed a bug in versions 9.60β and later where the DirectX version required to launch the program was increased. This bug caused versions 9.60β to 9.62β not to run with the DirectX originally installed in Windows, possibly requiring game players to install (update) the DirectX runtime (specifically, [DirectX End-User Runtime Web Installer](https://www.microsoft.com/ja-jp/download/details.aspx?id=35) needed to be installed).  
    ◆Game: In "System" settings, increased the character limit for in-game text in "System 4" and "System 5" by about 0-4 characters. There were other texts I wanted to increase more, but this is the limit.  
    ◆Other: Fixed a bug in "KeyConfig_v2.exe" where pressing the up key continuously would occur if certain gamepads were connected. Updated as "KeyConfig_v2.1.exe". Please use "KeyConfig_v2.1.exe" from this version onwards.  
    
- [v9.62β](/soft/ActionEditor4/ActionEditor4_v962b.zip) 2019/6/1  
    ◆Editor: Fixed a bug in the bitmap conversion tool of versions 9.50β and later where specifying a folder (multiple files) by drag-and-drop would cause the conversion to fail.  
    
- [v9.61β](/soft/ActionEditor4/ActionEditor4_v961b.zip) 2019/5/31  
    ◆Game: Fixed a bug where maximizing the window and then selecting "100%" to "500%" from the system menu to change the window size, then maximizing again, would not maximize correctly.  
    ◆Game: Fixed a bug in Replay Mode's pause menu where transitioning to the next replay via "Next Replay" would sometimes not change the BGM.  
    ◆Editor: Fixed a bug where changes to "Replay Auto Save Type" and "Replay Playback Order Type" in "System" settings would revert on next launch.  
    ◆Other: Small updates.  
    
- [v9.60β](/soft/ActionEditor4/ActionEditor4_v960b.zip) 2019/5/26  
    ◆Game: Supported D-pad (POV) of XInput compatible gamepads. Works with both analog stick and D-pad.  
    ◆Game: Fixed a bug where only the gamepad with the highest priority could be used. In previous versions, only the gamepad recognized first by Windows or specified as "Preferred Device" in the control panel could be used, but from this version, other gamepads can also be used.  
    How to set "Preferred Device" is explained [here](/en/menu_support/gamepad_preferred_device/).  
    ◆Game: Implemented "Gamepad" in options. Set to "ON" if using a gamepad, "OFF" otherwise. However, strictly speaking, this setting determines whether to detect gamepad connection during play, and even if "OFF", the gamepad will be recognized if connected before game launch. Conversely, if "ON" is selected when not using a gamepad, connection detection will be performed at regular intervals only when disconnected, causing the game's execution speed (FPS) to become unstable. That said, connection detection is not performed during action scenes where stable speed is crucial, so there's no need to be overly concerned.  
    ◆Other: Key assignment change program **"KeyConfig.exe" updated as "KeyConfig_v2.exe"**. This update corresponds to the game update, so "Preferred Device" settings are not needed for 2nd and subsequent gamepads, and it supports D-pads of XInput compatible gamepads. **Please use this one from this version onward.**  
    ◆Other: Small updates.  
      
    Regarding the "bug where only the gamepad with the highest priority could be used," I apologize for the delay in addressing it.  
    I hadn't noticed it until now (sweat).  
    It's not uncommon for old games to only use the highest priority gamepad, so searching online usually provides solutions. However, I feel that "Preferred Device" settings aren't widely known these days, so I wanted to address it sooner, and I apologize for any inconvenience caused.  
    
- [v9.51β](/soft/ActionEditor4/ActionEditor4_v951b.zip) 2019/5/16  
    ◆Game: Fixed a bug where, even if "Only when stage cleared" was set for replay auto-save, all plays were saved.  
    
- [v9.50β](/soft/ActionEditor4/ActionEditor4_v950b.zip) 2019/5/12  
    This update includes many changes, so it will be a **beta version**.  
    ◆Game: Added "Replay Auto Save" to game options. You can choose from "Do not auto save," "Only when stage cleared," and "Save all." **"Save all" saves the replay up to that point not only when the stage is cleared or you make a mistake, but also when you select "Quit," "Retry," or "Return to map" from the pause menu (it will not save if you close with the ESC key or the "X" button in the top right of the window).** Note that it is not automatically saved during test play.  
    ◆Game: Replay mode's file selection changed from an Explorer-like dialog to a Challenge Mode-like UI, and a playlist (continuous playback) system was implemented. Along with this, **scrollbars were added to the image file "Accessory.bmp" at coordinates (64,16) 16x16 and (80,16) 16x16**. A point to note is that **subfolders are no longer displayed.** You can revert to 9.30 or earlier by checking "Use Explorer-style file selection dialog from versions 9.30 and earlier when selecting files in Free Mode and Replay Mode, and when manually saving replays" in "System" settings, but it does not support playlists. Although the 9.30 or earlier file selection dialog has advantages such as supporting subfolders, **for players unfamiliar with Action Editor 4's specifications, 9.50 or later might be easier to understand and playback with replay playlists might be more comfortable.**  
    ◆Game: Free mode's file selection also changed from an Explorer-like dialog to a Challenge Mode-like UI, similar to replay mode. Here too, **subfolders are no longer displayed.**  
    ◆Game: Added "Replay Playback Order" to game options. You can choose from "Sort Order," "Sort Order & Stage Clear Only," and "Repeat Same Replay." This allows you to play replays in the order of the replay mode playlist or play only replays that have cleared the stage.  
    ◆Game: When saving replays in worlds consisting of multiple stages, stage numbers will now be appended to the replay filenames.  
    ◆Game: Changed the structure of replay file names. For automatic saves, if the stage is cleared, "_CLEAR_" will be added to the end of the file name. This is primarily to enable the "Sort Order & Stage Clear Only" function in the game's options.  
    ◆Game: Renewed the dialog for manual replay saving with F1/F2 keys. In this dialog, you will choose to save as either "Replay data with stage cleared (append '_CLEAR_' to filename)" or "Replay data without stage cleared". You can revert to the 9.30 or earlier dialog in "System" settings, but it is not recommended.  
    ◆Game: Implemented "Replay File Name Composition" in "Project" > "System". You can choose whether the replay file name includes [Stage File Name] or [Stage Name].  
    ◆Game: Implemented "Append '_CLEAR_' to filename on auto-save" checkbox in "Stage Clear" command. Usually, ON should be fine. **Its use case would be, for example, if you set the "Stage Clear" command to "When died" flow timing, and "you want to record high scores etc. even on death, but don't want it treated as a stage clear."** In this case, by not appending "_CLEAR_" during replay auto-save, it can be saved as a replay file that hasn't cleared the stage.  
    ◆Game: Added "Replay Message Auto Advance Seconds" to game options. This function automatically advances messages and pictures that display until the Z key is pressed in replay playback, after a specified number of seconds. Note that you can still advance messages with the Z key regardless of this setting.  
    ◆Game: Description text can now be displayed at the bottom of the game's option mode screen. You can set this from the option menu frame in Main Menu "Project" > "System".  
    ◆Game: Added "Next Replay", "Previous Replay", and "Select Replay" to the pause menu. These are menu commands only selectable in replay mode.  
    ◆Game: **Pause function (pause menu) can no longer be turned OFF in replay mode.** There is a checkbox "Space key for pause (pauses and calls up menu)" in "Project" > "System", but even if this is unchecked, the pause function now exceptionally works in replay mode and the pause menu appears. This is a deliberate specification because the replay mode exclusive pause menu is convenient.  
    ◆Game: Replay files will now be saved with read-only attribute. To prevent easy modification of update times, as sorting in the replay playback list recommends sorting by update time, a countermeasure was implemented.  
    ◆Game: In Challenge Mode world selection, pressing the up key from World 1 will move to the last world, and pressing the down key from the last world will move to World 1.  
    ◆Game: Replay files can no longer be loaded in Free Mode (replay files contained stage data, so it was a specification that only that part could be loaded). Rather than "cannot be loaded," it seems that even in previous versions, an error like "(File attempted to load) is corrupted" would appear, effectively preventing loading... From this version, replay files will not even be displayed on the Free Mode stage file selection screen.  
    ◆Other: Added "How to Operate" and "About Replays" sections to the included "Readme2.txt". Editing this might be easier for distribution.  
    ◆Other: Added the following technique to the included "About Game Distribution.html" and the online help's option menu:  
    /////////////////////////////////////////////////////////////  
    **If you want to change the default option settings when distributing the game, do not delete the entire "user_data" folder where the game's save data files are located. Instead, set the desired default options, then delete all files in the "user_data" folder EXCEPT "Option.dat" (and then distribute that).**  
    /////////////////////////////////////////////////////////////  
    ◆Other: Slightly updated the included "System.ini".  
    ◆Other: Updated minor details.  
      
    With this update, [About Replays](/en/menu_support/actioneditor4_help/replay/) has been added to the online help.  
    The section "Replays May Not Be Faithfully Reproduced" within it is not directly related to this update, but it was added as it hadn't been properly explained in the help before, so I apologize for the belated addition.  
      
    Note that if you are migrating data from an old version to this version, the newly added options "Replay Auto Save", "Replay Playback Order", and "Replay Message Auto Advance Seconds" will be hidden. Also, "Use Explorer-style file selection dialog from versions 9.30 and earlier when selecting files in Free Mode and Replay Mode, and when manually saving replays" in the system settings will be enabled (though not recommended). Other settings are also configured to behave as similarly as possible to previous versions. Therefore, if you wish to use the newly implemented features, you will need to change various settings in Main Menu "Project" > "System".  
    
- [v9.30](/soft/ActionEditor4/ActionEditor4_v930.zip) 2019/4/15  
    From this version, it has changed from beta version to official version (stable version).  
    ◆Game: **Fixed a bug where the application would freeze when performing operations like deleting or copy-pasting files in the file selection dialog displayed in Free Mode, Replay Mode, or when saving replays.**  
    ◆Other: Added a note to the environment configuration file "System.ini" explaining why fullscreen mode (WindowMode=0) is not recommended (fullscreen has always been discouraged). The main reason it's not recommended is that when a file selection dialog appears in Free Mode, Replay Mode, or when saving replays, switching applications with Alt+Tab etc. can prevent normal restoration.  
    ◆Other: Fixed minor details.  
      
    I had thought that many games had replay features disabled for a while, but perhaps the first bug (freezing when deleting files, etc.) was the cause... I myself have recorded countless replays but was slow to notice.  
    I apologize for the inconvenience, but it might be better for all works that have replay features enabled to update to this version or higher, or disable the replay features.  
    I sincerely apologize for the trouble caused.  
    
- [v9.22β](/soft/ActionEditor4/ActionEditor4_v922b.zip) 2019/4/12  
    ◆Game & Editor: Fixed a bug in versions 9.20β and 9.21β where crashing immediately after saving a replay. Also, it might have crashed improperly at times other than right after saving a replay, but that's also fixed in this version.  
    
- [v9.21β](/soft/ActionEditor4/ActionEditor4_v921b.zip) 2019/4/2  
    ◆Editor: Fixed a bug in version 9.20β where clearing a stage in single-stage test play would terminate the game.  
    
- [v9.20β](/soft/ActionEditor4/ActionEditor4_v920b.zip) 2019/4/1  
    ◆Game: Implemented "Execute Auto-save" in "Stage Clear" command.  
    The following explanation is an excerpt from the help.  
    ///////////////  
    Checking this allows saving mid-world in worlds composed of multiple stages.  
    "Auto-save ON" must be set in the Story Mode World Map menu.  
    *When resuming mid-world (playing from the 2nd stage onwards) via "Continue", if the stage file for the resuming stage has been deleted or its filename changed, stage loading will fail, not only making further world progression impossible but also preventing return to the world map. Especially **when updating a work already published online, be careful not to delete stage files from the 2nd stage onwards or change their filenames.**  
    ///////////////  
    ◆Game: In "System" Story Mode settings, implemented "Auto-save upon clearing each stage in multi-stage worlds". Checking this will auto-save upon stage clear in every stage of the game. Even if the "Stage Clear" command's auto-save setting is disabled, this setting takes precedence, so auto-save will occur.  
    ◆Game: Discouraged using "Return to Title" in "Game Clear" setting of World Map events. The reason for discouragement is that returning to the title screen eliminates save opportunities, and if auto-save is enabled upon stage clear in a multi-stage world (depending on settings), it might become impossible to return to the world map.  
    ◆Game: Fixed a bug where a termination confirmation dialog would appear even during abnormal termination (crash due to exception error).  
    ◆Editor: Implemented automatic backup function for edit data ("data" and "e_data" folders). Backup is performed only when edit data is successfully loaded immediately after editor launch. Backup settings can be changed from Main Menu "Project" > "Project Options", where explanations are also provided.  
    ◆Other: Added two backup folders to "Files (folders) that should probably be deleted before distribution" in "About Secondary Distribution.html".  
    ◆Other: Renamed "About Secondary Distribution.html" to "About Game Distribution.html" (clearer name).  
    ◆Other: Fixed minor details.  
      
    **This time, as it's an update related to game save data, I decided to release it as a beta version due to the concern that a fatal bug might cause more inconvenience than usual.**  
    I haven't done anything overly complex, but I'm thinking of the worst-case scenario.  
    
- [v9.14](/soft/ActionEditor4/ActionEditor4_v914.zip) 2018/12/9  
    ◆Editor: Explicitly state in the database "Sound Effect" that Wave files do not support Wave extensible format or compressed formats. Also, explain as follows in the online help:  
      
    (Excerpt from online help)  
    **Only Wave files in uncompressed PCM format with disabled Wave extensible format are supported; other formats (such as ADPCM) will not play in the game even if they can be played in the editor.**  
    Few people normally pay attention to the Wave format, but **it's good to remember that "if it doesn't play in the game, converting the format will likely solve it."**  
    This format conversion is perfectly possible with free software; for example, with "Audacity", a software favored by this software's author, simply importing the problematic file and re-saving it will effectively convert it to an uncompressed PCM Wave file with disabled Wave extensible format.  
    
- [v9.13](/soft/ActionEditor4/ActionEditor4_v913.zip) 2018/9/21  
    Fixed a bug where the behavior of commands using targets, such as "Guided Movement," would become abnormal (e.g., movement target) if the following conditions were met:  
      
    ・The command's target is an enemy ("Control" is "Computer").  
    ・The protagonist moved instantly to a distant location using a "Warp" command, etc.  
    ・Due to the above movement, the target's position changed from on-screen to off-screen, causing the action condition to change from true to false.  
      
    This bug occurred at least with "Guided Movement" and "Shots" with "Movement Type" set to "Guide to Target."  
    It is unconfirmed whether it occurred with all commands using targets, but it should be fixed in this version if it did.  
    Along with this fix, a setting "Apply behavior from versions 9.12 and earlier for commands using targets when the protagonist moves instantly with warp, etc." was implemented in the system settings. When migrating data from version 9.12 and earlier to this version, this setting is enabled.  
    
- [v9.12](/soft/ActionEditor4/ActionEditor4_v912.zip) 2018/7/5  
    ◆Game: Fixed a bug where if the distance between two block characters, or between a block character and a normal block, was approximately the same as the width of the hit detection target character, and that character tried to move horizontally into that space, it would sometimes get crushed to death. However, depending on the protagonist's settings (especially scaling) and block placement, there might still be cases of getting crushed to death. I apologize, but this will be considered a specification. Along with this fix, a setting "Apply behavior from versions 9.11 and earlier for crush detection when the distance between two block characters, or between a block character and a normal block, is approximately the same as the width of the hit detection target character" was implemented in the system settings. When migrating data from versions 9.11 and earlier to this version, this setting is enabled.  
    ◆Game: Fixed a bug where if a character with 0 SP had its Max SP changed by the "Execute Code" command, its SP would recover by 1.  
    ◆Game: Fixed a bug where changing Max SP with the "Execute Code" command would cause the SP bar displayed above the character's head to become corrupted. The SP bar itself no longer appears when Max SP is changed. (It now has the same specification as the "Status Manipulation" command).  
    
- [v9.11](/soft/ActionEditor4/ActionEditor4_v911.zip) 2018/6/4  
    ◆Editor: Fixed a bug in version 9.10 where if there was data with an unset "Path" in the database "Character Specific BMP", the editor would crash immediately after launching or when returning to stage edit after saving the database.  
    
- [v9.10](/soft/ActionEditor4/ActionEditor4_v910.zip) 2018/5/26  
    ◆Editor: Significantly reduced memory usage for character-specific BMPs for giant characters (4x or more). This makes overall editor operations lighter and more stable. The larger and more numerous the images, the lighter the operations will be compared to old versions. Also, character-specific BMP loading became slightly faster, so editor startup is also faster.  
    
- [v9.05](/soft/ActionEditor4/ActionEditor4_v905.zip) 2018/4/14  
    ◆Game: KeyConfig.exe now supports English keyboards.  
    
- [v9.04](/soft/ActionEditor4/ActionEditor4_v904.zip) 2018/1/28  
    ◆Game: Fixed a bug where, when restarting a flow after pausing it with the "Flow Operation" command, the animation would not pause/restart in sync (the animation would terminate instead of pausing, which was a bug). Along with this fix, a setting "Apply behavior from versions 9.03 and earlier for flow pause/resume in "Flow Operation" command" was implemented in the system settings. When migrating data from versions 9.03 and earlier to this version, this setting is enabled.  
      
    <Reason for Fix>  
    Execution times for performance-related commands like "Execute Animation," "Message," "Execute Effect," "Execute Character Effect," "Execute Screen Effect," "Display Picture," and "Change Screen Color" are displayed in "P-0(*)" format. ("*" is the duration of the effect).  
    In previous specifications, commands with execution times displayed in this format were supposed to be processed independently of the flow after command execution started (e.g., the effect would not end even if the flow ended).  
    Therefore, in previous versions, I personally thought "it's strange for animations to pause along with flow pauses," so animations would terminate instead of pausing. (Meaning, animations would not resume even if the flow resumed).  
    However, after receiving a pointer on the BBS and investigating, I realized that only animations were an exception.  
    For example, only animations would terminate along with the end of the flow.  
    Given these circumstances, it was decided to treat animations as an exception and modify them to pause along with flow pauses.  
    
- [v9.03](/soft/ActionEditor4/ActionEditor4_v903.zip) 2017/9/24  
    ◆Game: Fixed a bug where the display auto-OFF setting and screen saver would activate when in windowed mode and operating only with a gamepad. Depending on the execution environment, the screen saver might still activate, but this will be considered a specification.  
    ◆Game: Fixed a bug in the "Arrange" command where changing the graphic number of a character-specific bmp for "Change Graphic" command would not work beyond 120.  
    ◆Editor: Fixed a bug where character or item graphics were not transparent when block graphics were specified.  
    
- [v9.02](/soft/ActionEditor4/ActionEditor4_v902.zip) 2017/8/17  
    ◆Game: Fixed a bug where the game would fail to launch if the sound device was disabled.  
    ◆Other: Fixed minor details.  
    
- [v9.01](/soft/ActionEditor4/ActionEditor4_v901.zip) 2017/7/24  
    ◆Game: In version 9.00, fixed a bug where the "Arrange" command would fail when targeting the following parameters:  
    ・Change Direction: Sound Effect  
    ・Jump: Sound Effect  
    ・Block Summon: Block  
    ・Character Summon: Character  
    ・Item Summon: Item  
    ・Acquire Item: Item  
    ・Execute Character Effect: Character Effect  
    ・Execute Screen Effect: Screen Effect  
    ・Play Sound Effect: Sound Effect  
    ・Play BGM: BGM  
    
- [v9.00](/soft/ActionEditor4/ActionEditor4_v900.zip) 2017/7/23  
    ◆Game: Fixed a bug in versions 8.40 and later where walking characters would sometimes have abnormal impact direction and speed when receiving vertical impact while in the air. Along with this fix, a setting "Apply behavior from versions 8.96 and earlier for vertical impact on walking characters" was implemented in the system settings. When migrating data from versions 8.96 and earlier to this version, this setting is enabled.  
    ◆Game: Added the following types to character flow "Timing":  
    ・"When damage received (if received damage is 1 or more)"  
    ・"When impact received (if received impact is 1 or more or -1 or less)"  
    ・"When damage dealt by attack (if dealt damage is 1 or more)"  
    ・"When impact dealt by attack (if dealt impact is 1 or more or -1 or less)"  
      
    In previous versions' timings "When damage received", "When impact received", "When damage dealt by attack", and "When impact dealt by attack", if the "power" or "impact" set for the attacking character or shot was not 0, the corresponding flow would execute even if the damage was invalidated by the attacked character's "defense" or "impact resistance", or invincibility. Therefore, new timings that are only effective when actual damage or impact is received have been added.  
    ◆Game: The "Arrange" command now supports the following parameters:  
    ・Change Direction: Sound Effect  
    ・Jump: Sound Effect  
    ・Shot: Sound Effect, Effect, Acquired Item  
    ・Sword: Sound Effect, Effect, Acquired Item  
    ・Block Summon: Block, Sound Effect  
    ・Character Summon: Character, Sound Effect  
    ・Item Summon: Item, Sound Effect  
    ・Status Manipulation: Variable (left operand), Constant Value, Variable (right operand)  
    ・Acquire Item: Item  
    ・Execute Effect: Effect  
    ・Execute Character Effect: Character Effect  
    ・Execute Screen Effect: Screen Effect  
    ・Display Picture: Picture  
    ・Play Sound Effect: Sound Effect  
    ・Play BGM: BGM  
    ◆Editor: Increased the upper limit of data count for database "Picture" from 999 to 9999.  
    ◆Other: Fixed minor details.  
      
    Also, functions related to coordinate acquisition implemented in version 8.90 were released as beta versions, but from this version, the "β" is removed and it is considered a stable version.  
    
- [v8.96β](/soft/ActionEditor4/ActionEditor4_v896b.zip) 2017/4/22  
    ◆Game: In the "Warp" command, target coordinates can now be set in dot units.  
    ◆Game: In "Status Condition" for flow basic conditions, and in "Warp" and "Status Manipulation" commands, when setting "Y-coordinate" as "absolute coordinate" or "screen coordinate", "Giant Character Coordinate Position" can now be determined. This allows choosing whether to set the coordinate of the giant character's center, or the coordinate of the character's mid-bottom (same as the center of a non-giant character).  
    ◆Game: Fixed a bug where changing a character's X or Y coordinate with the "Status Manipulation" and "Execute Code" commands would cause it to shift right or down from its original position. Along with this fix, a setting "Apply behavior from versions 8.90 and earlier for X and Y coordinate changes by "Status Manipulation" or "Execute Code" commands on giant characters" was implemented in the system settings. When migrating data from version 8.90 to this version, this setting is enabled.  
    ◆Game: In the "Execute Code" command, in previous versions, assigning (=) a Y-coordinate to a giant character would make that assigned value the character's center coordinate. From this version, if it's a walking character, it will be assigned to the character's mid-bottom coordinate, and if it's a flying character, it will be assigned to the character's center coordinate (same as "Warp" in 8.90 and earlier). In other words, only the behavior for walking characters changes. Along with this fix, a setting "Apply behavior from versions 8.90 and earlier for Y-coordinate changes by "Execute Code" commands on giant walking characters" was implemented in the system settings. When migrating data from version 8.90 to this version, this setting is enabled.  
    ◆Game: Fixed a bug in "Warp" command of versions 8.22 and later where specifying warp position by screen coordinates would cause it to shift slightly downwards from its original position. Along with this fix, a setting "Apply behavior from versions 8.22 to 8.90 for warp position to "screen coordinates" in "Warp" command on giant characters" was implemented in the system settings. When migrating data from versions 8.22 to 8.90 to this version, this setting is enabled.  
    ◆Game: In "Message," "Display Picture," and "Display Effect" commands, added "Specify by screen coordinates (specify center)" and "Specify by stage coordinates (specify center)" for display position. Previously, when specifying display position by screen or stage coordinates, you had to specify the top-left coordinate of the message or picture, but with this update, you can now specify the center coordinate as well.  
    ◆Editor: Fixed a bug in previous versions where, when migrating data with Action Editor 4 updates, even in cases where the game's behavior should not change by specification, it might change due to the update. However, the source of the migration must be this version (8.96) or later. The bug fixed this time relates to the state of checkboxes in the "Compatibility" frame from "System 7" tab onwards in Main Menu "Project" > "System" (settings for reverting to pre-bugfix behavior). When migrating data with an update, the program implicitly checks the "Compatibility" frame to prevent game behavior from changing (without the game creator's permission) due to the update. However, there was a possibility that it might not implicitly check even in cases where it should. Explaining this in detail would be very long and likely inaccurate, so I will omit a detailed explanation. Note that even if this issue occurred, it was possible to revert to the old version's behavior by reviewing the checkboxes in the "Compatibility" frame.  
    ◆Other: Fixed minor details.  
    
- [v8.90β](/soft/ActionEditor4/ActionEditor4_v890b.zip) 2017/3/2  
    ◆Game: In "Status Manipulation" command, "X-coordinate" and "Y-coordinate" of self and target can now be acquired and set. Setting coordinates (assignment "=") simply executes the "Warp" command internally, so the behavior is the same as warp. For example, if the warp target character is a block-hitting type, the command will fail if there is a block at the warp destination.  
    ◆Game: Along with the above update, added the following to "Execute Code" command status (character):  
    　・"x_rel" ... X-coordinate (relative coordinate)  
    　・"x_abs" ... X-coordinate (absolute coordinate)  
    　・"x_scr" ... X-coordinate (screen coordinate)  
    Y-coordinate also supported similarly.  
    ◆Game: "Status Condition" in appearance conditions and flow basic conditions also supports "X-coordinate" and "Y-coordinate" of self and target.  
    ◆Game: In "Warp" command, when specifying target coordinates, now only X-coordinate or Y-coordinate can be specified.  
    ◆Other: Fixed minor details.  
      
    This update was quite bold, so I'm worried about bugs...  
    It will be released as a beta version for a while.  
    
- [v8.81](/soft/ActionEditor4/ActionEditor4_v881.zip) 2017/1/30  
    ◆Game: Fixed a critical bug in version 8.80 where using the "FreeStage" setting in "System.ini" to move to the title after clearing the specified stage would cause crashes in stages other than "FreeStage". Also, the ranking function is disabled for this "FreeStage".
- [v8.80](/soft/ActionEditor4/ActionEditor4_v880.zip) 2017/1/22  
    ◆Game: Displays "Loading..." text image "Loading.bmp" at game startup and during stage data loading. If you are migrating data from an old version to this version, please also move the "Loading.bmp" image. (Even if this image is missing, nothing will be displayed, but no bugs will occur).  
    ◆Game: In "System" settings, the stage specified in "FreeStage" in "System.ini" can now move to the title screen after being cleared. This allows for introductory cinematics before the title display.  
    
- [v8.79](/soft/ActionEditor4/ActionEditor4_v879.zip) 2017/1/8  
    ◆Game: In "Execute Animation" command, the specified animation can now be terminated.  
    
- [v8.78](/soft/ActionEditor4/ActionEditor4_v878.zip) 2016/12/10  
    ◆Editor: Fixed a bug in stage editing where, after opening the right-click menu in the palette window, copying a range of objects on the stage with right-drag and then trying to place them would result in the placed content being different from what was copied. This bug occurred from version 8.76.  
    
- [v8.77](/soft/ActionEditor4/ActionEditor4_v877.zip) 2016/9/4  
    ◆Editor: Fixed a bug where some 256-color (8bit) bitmaps would display incorrectly in the editor.  
    
- [v8.76](/soft/ActionEditor4/ActionEditor4_v876.zip) 2016/7/9  
    ◆Game: In stage settings, separated background scroll speed into scroll speed according to player character movement and auto-scroll speed. By the way, in previous versions, when auto-scroll was enabled, the value set in "Horizontal (or Vertical) Scroll Speed" would become the auto-scroll speed, but the scroll speed according to player character movement was fixed at 1.0.  
    ◆Editor: In menu mode, one of the operation modes when right-clicking inside the palette window (the dotted square icon in the top right of the palette window, the mode for copying and pasting palette data), you can now also copy placed blocks, characters, and items with a right-click. (You can then "paste" them into the palette.)  
    
- [v8.75](/soft/ActionEditor4/ActionEditor4_v875.zip) 2016/5/29  
    ◆Game: Fixed a bug where if "Allow continuous execution by holding down" was disabled for flow key conditions other than "Always", the key condition would sometimes only activate once. Along with this fix, a setting "Apply behavior from versions 8.73 and earlier for key condition evaluation when "Allow continuous execution by holding down" is disabled" was implemented in the system settings. When migrating data from versions 8.73 and earlier to this version, this setting is enabled.  
    ◆Editor: Increased the upper limit of data count for database "Sound Effect" from 999 to 9999.  
    ◆Editor: Fixed a bug in databases etc. where copy & paste could create data exceeding the actual data count limit.  
    
- [v8.73](/soft/ActionEditor4/ActionEditor4_v873.zip) 2016/3/21  
    ◆Editor: Fixed a bug in some environments where the width of windows like "Database" would sometimes be longer or shorter than intended.  
    
- [v8.71](/soft/ActionEditor4/ActionEditor4_v871.zip) 2016/2/27  
    ◆Game: Window size can now be changed from the system menu displayed by right-clicking the title bar. From "100%", up to "500%" can be selected depending on the display size. These maintain the original aspect ratio (ratio of height to width).  
    ◆Editor: In movement commands other than "Circular Move", when "Execution Time" and "Distance" are specified, movement speed is calculated as "Distance (dot)" ÷ "Execution Time". If this speed is outside the range of -600 to 600, a speed limit will be applied and the actual movement distance will be shorter than the specified "Distance". This will be considered a specification. Game behavior remains unchanged from previous versions.  
    
- [v8.70](/soft/ActionEditor4/ActionEditor4_v870.zip) 2016/1/23  
    ◆Confirmed normal operation on Windows 10.  
    ◆Editor: Fixed a bug in some environments where windows like "Database" would extend vertically more than intended, potentially hiding "OK" buttons etc. off-screen.  
    ◆Game: Fixed a bug where a character's "Status Condition 3" might not activate if the condition was met for only an instant in certain circumstances. Specifically, when a character with "On Block" condition set jumped onto a jump block and their feet immediately left the block, there was a high probability that the "On Block" condition would not activate. Along with this fix, a setting "Apply behavior from versions 8.60 and earlier for certain "Status Condition 3" evaluations on characters" was implemented in the system settings. When migrating data from versions 8.60 and earlier to this version, this setting is enabled.  
    ◆Game: Fixed a bug where the behavior of pressing both "←" and "→" arrow keys (default) differed between when "Play game with this setting" in "KeyConfig.exe" was disabled and enabled, so it was unified as follows: when both "←" and "→" are pressed, both inputs are ignored. The same applies to "↑" and "↓".  
    
- [v8.60](/soft/ActionEditor4/ActionEditor4_v860.zip) 2015/11/29  
    ◆Game: Implemented "Character Drawing Type" in Database "System 1". There are two types of character drawing: "Speed Priority" and "Compatibility Priority", and you select one. "Compatibility Priority" is the same drawing type as versions 8.54 and earlier.  
    **With "Speed Priority", overall drawing may become faster (lighter) in the action part as the number of characters on screen increases.** However, this also depends on character settings and circumstances (e.g., "Graphics", "Z-coordinate", character effects).  
    **A disadvantage of "Speed Priority" is that the depth relationship of characters (Z-coordinate, foreground or background) may differ from previous versions up to 8.54. In particular, when some character effects are executed, characters with the same "Z-coordinate" will be displayed at the very back, which is a specification. (It can be somewhat controlled by adjusting the character's "Z-coordinate" setting.)**  
    "Speed Priority" only supports Direct3D mode. To set the drawing mode to Direct3D, set "Direct3D=1" in the environment configuration file "System.ini". When Direct3D is disabled (DirectDraw), "Speed Priority" is not applied, and specifications like execution speed and character depth relationships remain unchanged from versions 8.54 and earlier.  
    Note that **the default and recommended setting is "Speed Priority." However, if you are migrating data from an old version to this version, it will initially be "Compatibility Priority."**  
    ◆Game: Fixed a bug where if "System.ini" was set to "Direct3D=2" and the game was launched, it could sometimes not be exited with the "ESC" key.  
    ◆Editor: Updated explanation of drawing speed estimation in Database "Character Effect". Removed drawing speed estimation itself for all except "Lens" and "Blur".  
    ◆Other: Along with the implementation of "Character Drawing Type", the default setting of "System.ini" was changed to "Direct3D=1". In versions 8.54 and earlier, a dialog would appear to select the drawing mode immediately after game launch with "Direct3D=2", but in future versions, the game will launch in Direct3D mode without that dialog.  
    
- [v8.54](/soft/ActionEditor4/ActionEditor4_v854.zip) 2015/11/3  
    ◆Game: **Fixed a bug in versions 6.56 and later where a block character with flying OFF carrying a character would easily separate from the block character immediately after falling from a normal block when moving left or right.** Along with this fix, a setting "Apply behavior from versions 6.56 to 8.44 for block characters carrying characters moving left or right and falling from blocks" was implemented in the system settings. When migrating data from versions 6.56 to 8.44 to this version, this setting is enabled.  
    Upon investigation, the initial version where the bug occurred, 6.56, was released on 2010/7/22... While it feels belated, I believe there's a demand for this fix, so I reverted to the correct behavior.  
    ◆Game: **Fixed a bug where the protagonist's "Jump" command height would be slightly lower than the specified "height". If "height" was 7hbl, it was about 4 dots lower; if "height" was 20hbl, it was about 16 dots lower.** Along with this fix, a setting "Apply behavior from versions 8.44 and earlier for protagonist's "Jump" command height" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    I don't remember if this was originally a specification... I couldn't have just not noticed it until now, and the fix isn't that difficult, so was it a specification? Anyway, I found it concerning so I fixed it.  
    ◆Game: Fixed a bug where if the protagonist's flow had a "Jump" command where "height cannot be adjusted by key" followed by an extremely short-executing command like "Status Manipulation" at the end of the command list, and this was executed constantly with "Always" timing to make it jump continuously, the jump "height" would become higher than the set value. Along with this fix, a setting "Apply behavior from versions 8.44 and earlier for jumps when the protagonist's flow has a "Jump" command where "height cannot be adjusted by key" followed by an extremely short-executing command at the end of the command list" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    ◆Game: Fixed a bug where if an enemy's flow had a "Jump" command followed by an extremely short-executing command like "Status Manipulation" at the end of the command list, and this was executed constantly with "Always" timing to make it jump continuously, there would be a delay between landing and the next jump. Along with this fix, a setting "Apply behavior from versions 8.44 and earlier for jumps when an enemy's flow has a "Jump" command followed by an extremely short-executing command at the end of the command list" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    
- [v8.44](/soft/ActionEditor4/ActionEditor4_v844.zip) 2015/10/12  
    ◆Game: When "WindowMode=0" (fullscreen) and "Midi_DirectMusic=1" (DirectMusic enabled) in the environment configuration file "System.ini", the application would minimize when the file selection dialog appeared in Free Mode or Replay Mode. Therefore, DirectMusic is now forcibly disabled in fullscreen mode, effectively behaving the same as "Midi_DirectMusic=0". Along with this update, the explanation for "System.ini" was also updated.  
    
- [v8.43](/soft/ActionEditor4/ActionEditor4_v843.zip) 2015/8/30  
    ◆Game & Editor: Reduced the possibility of game and editor program files (Game_v*.exe and Editor_v*.exe) being falsely detected by some security software. This was a countermeasure against the worst-case scenario of files being deleted automatically.  
    
- [v8.42](/soft/ActionEditor4/ActionEditor4_v842.zip) 2015/7/28  
    ◆Game: When BGM is MIDI, it will now be played by DirectMusic software synthesizer. Along with this update, "Midi_DirectMusic" is added to the environment configuration file "System.ini". Setting "Midi_DirectMusic=0" will revert to the traditional playback method. However, the traditional playback method sent GM System On instead of GS Reset, and standard sound sources in Windows Vista and later, MSGS, would not play correctly if there were GS standard tones or commands, so it is deprecated. This is also explained in System.ini.  
    ◆Game: Fixed a bug where if multiple "Impact" enabled shots hit a non-flying character simultaneously, it could sometimes be blown vertically beyond the set impact value. Along with this fix, a setting "Apply behavior from versions 8.40 and earlier when multiple impact shots hit simultaneously" was implemented in the system settings. When migrating data from versions 8.40 and earlier to this version, this setting is enabled.  
    ◆Editor: Stopped closing all windows with Esc key. For example, when editing the database, there was no confirmation, so there was a possibility of accidental termination due to mistaken Esc key input.  
    ◆Other: Fixed minor details.  
    
- [v8.40](/soft/ActionEditor4/ActionEditor4_v840.zip) 2015/5/4  
    ◆Readme file: Added "About Game Distribution". (Slight) measure to encourage viewing "About Secondary Distribution.html" when distributing games.  
    ◆Other: Fixed minor details.  
    
- [v8.39](/soft/ActionEditor4/ActionEditor4_v839.zip) 2015/4/19  
    ◆Game: The pause with space key in action part can now be disabled.  
    ◆Game: Fixed a bug where, under specific conditions, when a non-block character touched a block character, an incorrect position correction would occur, causing it to be crushed to death or warped. Along with this fix, a setting "Apply behavior from versions 8.37 and earlier for position correction when a non-block character touches a block character" was implemented in the system settings. When migrating data from versions 8.37 and earlier to this version, this setting is enabled.  
    ◆Game: Slightly adjusted the display position of some parenthesis symbols ()｛｝. Fixed because the spacing between characters was too different on left and right when enclosing something in parentheses. However, this adjustment is only for the recommended font "MS P Gothic".  
    ◆Editor: Fixed a bug in the "Execute Code" command where trying to set a formula that divides by a variable would trigger a division by zero error dialog and prevent completion of the setting.  
    ◆Editor: Fixed a bug in editing some data lists (e.g., flow conditions or command lists) where, if multiple data were selected and a new data was attempted to be inserted and then canceled with "X" or "Cancel", all previously selected commands would be deleted.  
    ◆Other: Fixed minor details.  
    
- [v8.37](/soft/ActionEditor4/ActionEditor4_v837.zip) 2015/2/10  
    ◆Game: Fixed a bug in versions 8.36 and earlier where checking "Fail if block-hitting enemy (protagonist) exists at summon destination" in "Block Summon" command would cause summon to fail even if a flying character that passes through blocks was present. Along with this fix, a setting "Apply behavior from versions 8.36 and earlier for "Block Summon" command when "Fail if block-hitting enemy (protagonist) exists at summon destination" is enabled" was implemented in the system settings. When migrating data from versions 8.36 and earlier to this version, this setting is enabled.  
    ◆Game: The termination confirmation dialog was still in Japanese even when "English=1" was set in the environment configuration file "System.ini", so it was changed to English.  
    ◆Other: Fixed minor details.  
    
- [v8.36](/soft/ActionEditor4/ActionEditor4_v836.zip) 2015/1/11  
    ◆Game: Fixed a bug where, even if "Support symbol image display" was disabled in system settings, large size text in title menu, challenge mode stage select screen, and options screen would be improperly replaced by symbols.  
    ◆Editor: In the explanation for "Support symbol image display" in system settings, added a note "Not supported for a very small number of large size texts." "A very small number of large size texts" specifically refers to the large size text in the title menu, challenge mode stage select screen, and options screen. These cannot be replaced by symbols.  
    ◆Other: Fixed minor details.  
    
- [v8.35](/soft/ActionEditor4/ActionEditor4_v835.zip) 2014/12/24  
    ◆Game: Implemented game exit confirmation. No confirmation for test play or fullscreen.  
    ◆Game: Fixed a bug in "Straight Move" command where, if "Direction" was "Top Right" or "Bottom Right", and even a slight "Angle" was applied, it would move in the opposite horizontal direction.  
    
- [v8.34](/soft/ActionEditor4/ActionEditor4_v834.zip) 2014/12/7  
    ◆Game: Fixed a bug in system settings where "Share lives across Story Mode" disabled prevented initial lives from being set to infinity in Story Mode.  
    ◆Editor: Fixed a bug where, when checking "Same as filename" for "Name" in database "Character Specific BMP" and "Effect" data, if the folder name in "Path" contained certain full-width characters like "ん", that folder would be included in the name. For example, if the image path was ".\bmp\うーん\image.bmp", the data name would become "うーん\image.bmp". It should correctly be "image.bmp" since it's "Same as filename".  
    
- [v8.33](/soft/ActionEditor4/ActionEditor4_v833.zip) 2014/11/2  
    ◆Game: Fixed a bug in versions 8.17 to 8.32 where, if a picture's "Display Position" was "Display at this character's center" or "Display at protagonist's center", the picture would follow the character (move similarly if the character moved). While the bugged version might be more convenient, it's not good for behavior to change with updates, so I reverted it to 8.16 and earlier. Along with this fix, a setting "Apply behavior from versions 8.17 to 8.32 when picture's "Display Position" is "Display at this character's center" or "Display at protagonist's center"" was implemented in the system settings. When migrating data from versions 8.17 to 8.32 to this version, this setting is enabled.  
    ◆Other: Fixed minor details.  
    
- [v8.32](/soft/ActionEditor4/ActionEditor4_v832.zip) 2014/10/18  
    ◆Game: Fixed a bug where, when summoning walking characters or block-hitting flying characters with "Character Summon" command, summoning would fail if there was a block at the destination, and also sometimes fail even when attempting to summon just barely outside the block's hit area.  
    
- [v8.31](/soft/ActionEditor4/ActionEditor4_v831.zip) 2014/10/12  
    ◆Game: Added "Still Animation" to animation settings for movement commands. For example, it should be useful when you want to realize pseudo-gravity or wind with the straight move command. By the way, the traditional "none" animation is not a still animation, but a setting to not change the animation (it might have been misunderstood...).  
    ◆Game: Fixed a bug in version 8.29 where the number of data in database "Sword Type" would forcibly become the upper limit of 128. The original default data was 2, so the 3rd and subsequent items were unnecessary data. If version 8.29 was launched, including cases where data was migrated from versions older than 8.29, Sword Type should now have 128 items, so please manually delete unnecessary data from the database.  
    ◆Game: Fixed position correction when "Scale" was changed mid-stage for flying characters. Especially improved situations where flying characters shrinking would cause their hit detection to shift slightly downwards, making them more prone to being crushed by blocks. Separately, implemented countermeasures against immediate crushing after scaling (not guaranteed to prevent entirely). Along with this fix, a setting "Apply behavior from versions 8.29 and earlier for position correction when "Scale" is changed mid-stage for flying characters" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    ◆Game: Fixed a bug where, when an item scaled up a character, the character's hit detection against items would temporarily become larger the moment it scaled up, sometimes causing it to acquire items from a distance. The greater the character's size change, the more likely it was to acquire items from further away.  
    
- [v8.29](/soft/ActionEditor4/ActionEditor4_v829.zip) 2014/9/6  
    ◆Game: Fixed a bug where, when walking from a block with "Acquired Item" set to a jump block with "Acquired Item" set without jumping or falling, the character would jump but not acquire the "Acquired Item."  
    
- [v8.28](/soft/ActionEditor4/ActionEditor4_v828.zip) 2014/8/23  
    ◆Game: Fixed a bug where, if "Allow manual replay saving with F1/F2 keys" was unchecked in system settings, the result of "Random Number" in "Status Manipulation" command would be the same every time. The version where this bug started (unconfirmed) is unknown.  
    ◆Game: Fixed a bug where extremely large characters (e.g., 100x) moving off-stage would sometimes cause a crash.  
    ◆Game: Fixed a bug where the game would rarely fail to launch in some environments.  
    ◆Game: Fixed a bug in version 8.25 where the window image "Window.bmp" would no longer display correctly in DirectDraw mode with 256 colors.  
    ◆Editor: Fixed a bug in databases etc. where adding data with the "New" button would cause the selected data in the list and the data in the input form to not match.  
    ◆Editor: Fixed a bug where the sword type number specified in the "Sword" command was off by 1 (starting from 0).  
    ◆Editor: Fixed a bug where selecting sword types 129 and higher in "Sword" command would cause a crash.  
    ◆Editor: Limited the number of creatable data in database "Sword Type" to 128. In this version and later, sword types 129 and higher cannot be loaded and will be automatically deleted from the database.  
    ◆Other: Fixed minor bugs.  
    
- [v8.27](/soft/ActionEditor4/ActionEditor4_v827.zip) 2014/7/5  
    ◆Game: Fixed a bug where, if "Reset after death" was checked in stock settings in "System" settings, the stock data should have been reset and the player data placed on the stage should have been used for the next play, but in reality, the stock data was not reset and the player data from the start of that stage was used. Although unconfirmed, this bug likely occurred from 2.47β. Along with this fix, a setting "Apply behavior from versions 8.25 and earlier for "Reset after death" in stock" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    
- [v8.25](/soft/ActionEditor4/ActionEditor4_v825.zip) 2014/6/29  
    ◆Game: Fixed a bug where even if transparency color was used in the window image "Window.bmp", windows displayed by the message command would not be transparent. I felt the need to fix this as meshing it could make it look semi-transparent.  
    ◆Editor: Fixed a bug in database editing etc. where simultaneously left-clicking and right-clicking on a listbox that displays a pop-up menu on right-click could cause the editor to crash or the pop-up menu to not display correctly.  
    ◆Editor: Increased the upper limit of data count for common palette and stage palette from 999 to 9999.  
    ◆Other: Fixed minor details.  
    
- [v8.24](/soft/ActionEditor4/ActionEditor4_v824.zip) 2014/1/19  
    ◆Game: Fixed a bug in version 8.23 where symbol images would display in the "Ranking Registration Name" option.  
    
- [v8.23](/soft/ActionEditor4/ActionEditor4_v823.zip) 2014/1/18  
    ◆Game: Fixed a bug where, even if "Support symbol image display" was ON in system settings, symbol images could not be displayed using lowercase alphabets on the title screen, options screen, world map screen, and challenge stage selection screen. Conversely, if you update a game that uses lowercase alphabets on the above settings/screens to this version, the lowercase alphabets will automatically be replaced by symbol images. If this happens, I suggest either unchecking "Support symbol image display" in system settings, changing lowercase alphabets to uppercase, or changing them to full-width lowercase (F9 key).  
    ◆Editor: Fixed a bug in the world map chip window where scrolling the window would cause the selected map chip and its display to no longer match.  
    
- [v8.22](/soft/ActionEditor4/ActionEditor4_v822.zip) 2013/12/15  
    ◆Game: In the "Warp" command, the warp position when specified with "Absolute Coordinates" (← referring to stage coordinates) or "Screen Coordinates" has been changed as follows:  
      
    <Before Change>  
    "Absolute Coordinates": The character's mid-bottom becomes the specified coordinate (same as initial position when placed at that coordinate in the editor).  
    "Screen Coordinates": The character's top-left becomes the specified coordinate (same as messages, effects, pictures specified with "Stage Coordinates" and "Screen Coordinates").  
      
    ↓  
      
    <After Change>  
    "Absolute Coordinates": If the warping character's flight is OFF, the character's mid-bottom becomes the specified coordinate (same as initial position when placed at that coordinate in the editor). If the warping character's flight is ON, the character's center becomes the specified coordinate.  
    "Screen Coordinates": If the warping character's flight is OFF, the character's mid-bottom becomes the specified coordinate (same as initial position when placed at that coordinate in the editor). If the warping character's flight is ON, the character's center becomes the specified coordinate. ← Unified with "Absolute Coordinates".  
      
    It was a difficult decision, but this is how it was done.  
    What's confusing is that when messages, effects, and pictures are specified by "Stage Coordinates" and "Screen Coordinates", their top-left becomes the specified coordinate.  
    It's a bit late, but please get used to it... I think this is easier to use.  
    Along with this specification change, a setting "Apply behavior from versions 8.21 and earlier for "Warp" command specified with "Absolute Coordinates" and "Screen Coordinates"" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    
- [v8.21](/soft/ActionEditor4/ActionEditor4_v821.zip) 2013/12/1  
    ◆Game: In the Story Mode settings of "System Settings", implemented a checkbox to "Start game with auto-save ON after selecting save file when starting from scratch". It is ON by default, but it will be OFF when migrating data from an old version to this version.  
    ◆Game: Fixed a bug in charge move and guided move commands where, if both the moving character and the target character for movement had "Sync with auto-scroll" ON, their movement speed would become abnormal under certain circumstances, resulting in them disappearing off-stage instantly.  
    ◆Other: Added "How to delete save data" to Readme.txt and Readme2.txt. This was reluctantly added because if you want to start the game with auto-save ON, you can't start if there's no free save data. (It would be better if you could delete it from the game itself!)  
    
- [v8.20](/soft/ActionEditor4/ActionEditor4_v820.zip) 2013/10/20  
    ◆Game: In "Status Manipulation 2" command's "Flight" state toggle, implemented "Position Memory" and "Crush Avoidance" checkboxes. Checking "Crush Avoidance" will revert the character's position to the memorized position if there's a possibility of being crushed. For example, it's safe to use when you want to temporarily (for a short time) make a walking character fly (collide with blocks). If you switch from flight OFF to flight ON (collide with blocks), the hit detection range against blocks becomes smaller, and if the character is then crushed by a block when switching back to flight OFF, this function can prevent it.  
    Example: For a character with flight OFF → Flight ON (Position Memory ON) → Flight Movement (Psycho Crusher etc.) → Flight OFF (Crush Avoidance ON)  
    *However, while it prevents crushing reliably, the character's position will revert even with a slight possibility of crushing.  
      
    Especially when scaling up characters, the difference in hit detection range against blocks between flight ON (colliding with blocks) and flight OFF becomes larger, making crushing more likely in unexpected situations. So, this function might be useful.  
    It can be safely executed not only when switching from walking to flying, but also from "Flying (collides with blocks)" → "Flying (passes through blocks)" → "Flying (collides with blocks)", etc.  
    
- [v8.19](/soft/ActionEditor4/ActionEditor4_v819.zip) 2013/9/30  
    ◆Game: Changed the behavior of "Status Condition" and "Status Manipulation/Code Execution" when the number of lives (remaining lives) is ∞ (infinity) as follows:  
      
    <Before Change>  
    ・Status Condition (left operand "Remaining Lives"): Always false  
    ・Status Condition (right operand "Remaining Lives"): Evaluated as 0  
    ・Status Manipulation / Code Execution (left operand "Remaining Lives"): Always fails (infinite lives cannot be changed)  
    ・Status Manipulation / Code Execution (right operand "Remaining Lives"): Calculated as 0  
      
    ↓  
      
    <After Change>  
    ・Status Condition (left operand "Remaining Lives"): Evaluated as 100 ← Set to 100, which is the upper limit of lives (99) + 1  
    ・Status Condition (right operand "Remaining Lives"): Evaluated as 100  
    ・Status Manipulation / Code Execution (left operand "Remaining Lives"): Always fails (infinite lives cannot be changed) ← This one remains unchanged  
    ・Status Manipulation / Code Execution (right operand "Remaining Lives"): Calculated as 100  
      
    **Even in games where the number of lives is not set to ∞, the number of lives automatically becomes ∞ during single-stage test play, so caution might be necessary.**  
    Along with this specification change, a setting "Apply behavior from versions 8.18 and earlier when "Remaining Lives" is specified in "Status Condition" and "Status Manipulation/Code Execution" while lives are ∞" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    ◆Editor: Fixed a bug where the "Clear" button in database "World Chip" did not function.  
    
- [v8.18](/soft/ActionEditor4/ActionEditor4_v818.zip) 2013/9/15  
    ◆Game: Fixed a bug in version 8.17 where the position correction was incorrect when a character hit a block character. This led to the implementation of a checkbox "Apply behavior from versions 8.16 and earlier for position correction when character hits block character" in the system settings, but this setting was not reflected. Also, if data from versions 8.16 and earlier was saved with the 8.17 editor, then when running this version's editor with that data, this checkbox will be unchecked (resulting in the behavior after the bug fix). If there are any issues, please check it.  
    ◆Game: Fixed a bug where switching protagonist character from Flight OFF → Flight ON → Flight OFF would sometimes cause "On Block" detection for the protagonist in Flow's Status Condition 3 to fail. Along with this fix, a setting "Apply behavior from versions 8.17 and earlier for "On Block" detection for protagonist in Flow's Status Condition 3" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    ◆Game: Fixed a bug where specifying a non-existent (deleted later in database) character-specific bmp in the "Change Graphic" command would cause a crash in the game. Also, ensure that the "Arrange" command does not result in a non-existent character-specific bmp.  
    ◆Editor: Fixed a bug in "Status Condition 2" of Flow's Basic Conditions where the display of "System" "Horizontal Scroll" and "Vertical Scroll" selection items and their display in the basic condition list was incorrect, and attempting to edit them after creation would sometimes cause a crash.  
    ◆Editor: Fixed a bug where the Tab key's movement order was incorrect when editing item data.  
    ◆Editor: Changed the default setting for "Overwrite Stage Save after Action Editor 4 Version Up" in Project Options from "Move old version stage files to 'old_ver' folder" to "Delete old version stage files". The reason for this belated change is that I feel it's not serving as a backup function...  
    ◆Editor: Added "Jungle_A" as default data to database "BGM". The file itself existed for a long time but was forgotten to be added to the database...  
    ◆Other: Fixed minor details.  
    
- [v8.17](/soft/ActionEditor4/ActionEditor4_v817.zip) 2013/8/5  
    ◆Game: Fixed a bug where, under specific circumstances, the position correction was incorrect when a character hit a block character. In the worst case, characters could die from being considered "sandwiched" even when they weren't. Along with this fix, a setting "Apply behavior from versions 8.16 and earlier for position correction when character hits block character" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    ◆Game: Fixed a bug where messages and pictures would sometimes display slightly off their original position.  
    
- [v8.16](/soft/ActionEditor4/ActionEditor4_v816.zip) 2013/7/21  
    ◆Editor: Fixed a bug in databases and flow settings etc. where, when selecting data in a list, attempting to switch to another data while displaying the right-click menu would cause the data in the form to remain unchanged from before the switch, and editing it in that state (without closing the menu) would overwrite the data from before the switch.  
    ◆Editor: Fixed a bug in the "Message" command where "Display Position" could not be set beyond 20 (bl) horizontal and 15 (bl) vertical, even when "Specify by Stage Coordinates" was selected.  
    
- [v8.15](/soft/ActionEditor4/ActionEditor4_v815.zip) 2013/7/7  
    ◆Editor: Fixed a bug where BGM volume would revert to 100% when switching BGM data in database "BGM".  
    
- [v8.14](/soft/ActionEditor4/ActionEditor4_v814.zip) 2013/6/23  
    ◆Game: Implemented "Volume" in database "BGM".  
    Volume can now be adjusted for each song.  
    ◆Game: Midi playback has stabilized.  
    In previous Midi playback, there were cases where it would not play correctly depending on the playback environment.  
    **I used "GuruGuruSMF4.dll" (GuruGuruSMF) for Midi playback. Without the "GuruGuruSMF4.dll" file included in this version (no error will occur), Midi will play using the traditional method instead of GuruGuruSMF. In this case, the per-song volume adjustment mentioned above will also not function.  
    **Note that GuruGuruSMF is said to support Enterbrain, RPG Maker 2000 and later loop specifications (CC#111), but Action Editor 4 does not support them (it might be possible, but no operation checks have been done).  
    ◆Game: Fixed a bug where, outside of stage parts, if the same BGM number in the database was played consecutively as "Loop Playback OFF → Loop Playback ON", "Loop Playback ON → Loop Playback OFF", or "Loop Playback OFF → Loop Playback OFF", it would not restart playback (playback position would not return to the beginning).  
    The most likely scenario was "Loop Playback OFF in Title → Play same BGM in World Map or Challenge Stage Select". In this case, the BGM would not restart playback in the World Map or Challenge Stage Select.  
    I usually have BGM OFF, so I was late to notice this...  
    
- [v8.13](/soft/ActionEditor4/ActionEditor4_v813.zip) 2013/5/21  
    ◆Editor: Fixed a bug in character flow's basic conditions "Status Condition" where, after setting the left operand to a character variable and the right operand to a common variable or stage variable 9 or higher, re-editing this data would cause the right operand's variable number to become 1. It's fine if you don't press "OK" with the variable still at 1 when re-editing, but it was a dangerous bug that could unknowingly change the variable to 1 if you pressed "OK".  
    
- [v8.12](/soft/ActionEditor4/ActionEditor4_v812.zip) 2013/5/6  
    ◆Game: Implemented "World Chip" (world map chips) in the database. This allows adding world map chips. Also, the previous fixed settings of impassable for upper rows and passable for lower rows can now be set per map chip.  
    ◆Game: Updated World Map chip image file "WorldMapChip.bmp". Extended size to allow drawing up to 75 map chips. Furthermore, changed line color from black to brown. In the database's (for confirmation) graphics, the background is black, so changing to brown makes it easier to see. If you are migrating data from an old version and using "WorldMapChip.bmp" as is, please try to replace it. Otherwise, it will blend with the background and be hard to see.  
    ◆Game: Updated World Map event image file "WorldEvent.bmp". Extended size to allow drawing up to 15 events. To be precise, it was previously possible to add more by extending the image vertically, but I think it was not officially supported (probably).  
    
- [v8.11](/soft/ActionEditor4/ActionEditor4_v811.zip) 2013/4/24  
    ◆Editor: Fixed a bug in versions 8.03 and later where illegal memory access could occur when editing character data or other tab-switching windows like "Database" on Windows 8. This could potentially lead to a blue screen and PC rebooting automatically. Even if you haven't experienced any issues with Windows 8 and versions 8.03 or later, please update to this version.  
    ◆Editor: Fixed a bug in "Change Graphic" command where specifying character-specific bmp number 120 or higher would cause the graphic number to revert to 119 when re-editing the command.  
    ◆Editor: Fixed a bug where the display position of some graphics in the editor (e.g., character graphics in the database) would depend on the OS design settings, causing them to be slightly shifted from their original position in many environments.  
    
- [v8.09](/soft/ActionEditor4/ActionEditor4_v809.zip) 2013/3/1  
    ◆Game: Fixed a bug in versions 8.03 and later where, if a protagonist character on a block with "Action" set to "Move Left" or "Move Right" transitioned to another block without jumping or falling, it would ignore the "Action" of the destination block and continue moving, sometimes causing a crash. This is a critical bug, I think. If you migrated data from versions before 8.03 to versions 8.03 or later, the "Compatibility" setting in the system settings will automatically be enabled, so there's no problem. However, if you started creating with versions 8.03 or later, this bug should occur, so please update to this version.  
    
- [v8.08](/soft/ActionEditor4/ActionEditor4_v808.zip) 2013/2/17  
    ◆Game: Fixed a bug where, when a character took an upward impact and hit a block character (not a normal block) with its head, the impact speed would not be invalidated, causing it to bounce back with force. Along with this fix, a setting "Apply behavior from versions 8.07 and earlier when character takes upward impact and hits block character with head" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    ◆Game: Fixed a bug where, if a protagonist character moved from a "Jump Prohibited" block to a block character without jumping or falling, the jump prohibition state would sometimes not be released until the character left that block character.  
    ◆Game: Fixed a bug where, if a large sword (width 320 or more) was swung outwards from the edge of the stage, the sword's position would be shifted. The larger the sword, the more it would shift.  
    
- [v8.07](/soft/ActionEditor4/ActionEditor4_v807.zip) 2013/1/27  
    ◆Game: Fixed a bug in "Set Target" command where the "Faction" condition was ignored when targeting a "child character" (conditional).  
    ◆Other: Fixed minor details.  
    
- [v8.06](/soft/ActionEditor4/ActionEditor4_v806.zip) 2013/1/20  
    ◆Editor: Fixed a bug in versions 7.90 and later where, when editing block palette data, switching blocks with the "←" or "→" buttons would sometimes cause the "Action" to revert to default values for data where "Action" was not "None".  
    
- [v8.05](/soft/ActionEditor4/ActionEditor4_v805.zip) 2013/1/19  
    ◆Game: Fixed a bug in "Ground Return Move" command where it wouldn't return if speed was negative. Along with this, implemented "Apply behavior from versions 8.04 and earlier for "Ground Return Move" command when speed is negative" in system settings. If migrating data from an old version to this version, this will be checked.  
    ◆Editor: Fixed a bug on Windows 8 where, after displaying tab "4" (Flow) in character data editing, then moving to another tab (e.g., tab 3), then switching characters with the "←" or "→" buttons in the top right, and then returning to tab 4, the bottom of the window would be cut off, hiding the "OK" button and other elements when displaying the flow edit window from "Change Flow" command → "Flow Settings" in item data editing "Effect" (command list).  
    ◆Editor: Corrected an incomplete explanation of the "Stage Clear" command added in version 8.04.  
    ◆Other: Fixed minor details.  
    
- [v8.04](/soft/ActionEditor4/ActionEditor4_v804.zip) 2012/12/23  
    ◆Game: Fixed a bug on Windows 8 where the application would freeze in the file selection dialog for Free Mode and Replay Mode.  
    ◆Game: Fixed a bug in World Map event (World) settings where, if "Game Clear" was set to "Start 2nd Playthrough" and 2nd Playthrough onwards was played, World 0 would become uncleared. By specification, World 0 should be displayed in blue on the World Map as cleared from the start, but it would become red in 2nd Playthrough onwards. Note that if World 0 is cleared in this bugged state, or if save data is loaded with this version or later, all World 0 will revert to blue.  
    ◆Editor: Added notes on precautions when specifying the next stage to play by "path" in the "Stage Clear" command. (Game behavior has not changed).  
    ◆Other: Fixed minor details.  
    
- [v8.03](/soft/ActionEditor4/ActionEditor4_v803.zip) 2012/12/11  
    ◆Game: Fixed a bug where the protagonist character's fall speed would be too fast when descending from some blocks with "Action" or "Acquired Item" set. Along with this fix, a setting "Apply behavior from versions 7.92 and earlier for protagonist's fall (gravity) after descending from some blocks with "Action" or "Acquired Item" set" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    ◆Editor: Fixed a bug on Windows 8 where the vertical height of tab-switching windows like character data editing and "Database" would extend beyond their intended height, making "OK" buttons etc. difficult to press.  
    
- [v7.92](/soft/ActionEditor4/ActionEditor4_v792.zip) 2012/10/23  
    ◆Game: Fixed a bug where sound effects would play off-screen even when "Do not play if user is off-screen" was checked for sound effects in the "Jump" command.  
    
- [v7.91](/soft/ActionEditor4/ActionEditor4_v791.zip) 2012/10/7  
    ◆Game: Fixed a bug where, in the "Disappearance" command, trying to make child or subordinate shots disappear would sometimes cause a crash if the target of the shots to disappear was the parent character (shot user) and certain conditions were involved. Specifically, if a default palette Belphegor (a character that shoots shots targeting itself) was summoned, and the summoner tried to make "child or subordinate characters and grandchild or subordinate shots" disappear, it would crash.  
    ◆Game: Fixed a bug in character and flow distance conditions where, if "Display even if not appearing" was enabled for range display, the range line would not follow scrolling or would not display at all if the character was not yet visible.  
    ◆Editor: Fixed a bug in editing character or item stage palette data where, when moving from data A, which inherits from common palette, to data B, which does not inherit, using the "←" or "→" buttons in the top right of the window, checkboxes in the inheritance settings for each item would become checked.  
    ◆Other: Fixed minor details.  
    
- [v7.90](/soft/ActionEditor4/ActionEditor4_v790.zip) 2012/9/27  
    ◆Editor: Fixed a bug in character palette data editing where, after displaying tab 4 and then moving to another tab (e.g., tab 3), then switching characters using the "←" or "→" buttons in the top right, and then returning to tab 4, some settings in tab 4 for the character before the switch (e.g., flow "ID" and "Timing") would be copied. If "OK" is pressed in this state, the data will be overwritten, and more importantly, there's a possibility of not noticing it, so I think it's a dangerous bug. I apologize for the inconvenience, but please update to this version as soon as possible. I am truly sorry.  
    
- [v7.86](/soft/ActionEditor4/ActionEditor4_v786.zip) 2012/9/8  
    ☆Again, it has changed from beta version to full version (stable version). It just means the "β" notation is gone, with no deeper meaning.  
    ◆Editor: Fixed a bug where switching palettes would change the palette edit mode (right-click behavior) in the palette window.  
    
- [v7.85β](/soft/ActionEditor4/ActionEditor4_v785b.zip) 2012/8/19  
    ◆Editor: Since placing player characters in fill mode may cause a crash, this is now prevented.  
    
- [v7.84β](/soft/ActionEditor4/ActionEditor4_v784b.zip) 2012/7/21  
    ◆Editor: Fixed a bug in "Character Summon" command where, even though character "Faction" only goes up to 7, 8 could be specified. Playing the game with faction 8 would cause a crash.  
    ◆Editor: Fixed a bug on Windows Vista and Windows 7 where the horizontal scrollbar would be hidden by the status bar only on initial launch.  
    ◆Editor: Fixed a bug in the main window etc. where shrinking the width to make the menu bar two lines would hide the horizontal scrollbar or cause layout issues.  
    ◆Editor: Fixed a bug where the palette window would stretch vertically slightly each time the editor was restarted, a stage was created, or a stage was opened. I thought I fixed it in 7.80β, but for some reason it wasn't done, so I fixed it again.  
    ◆Editor: Fixed a bug on Windows Vista and Windows 7 where the horizontal scrollbar would be hidden by the status bar only on initial launch.  
    ◆Editor: Fixed a bug in "Arrange" command etc. where, under certain conditions, the dropdown list of a combo box would behave strangely, making it difficult to select items.  
    ◆Other: Fixed minor details.  
    
- [v7.83β](/soft/ActionEditor4/ActionEditor4_v783b.zip) 2012/6/10  
    ◆Game: Fixed a bug where, if multiple messages were displayed, and one of them (not the last one displayed) was replaced by setting a Message ID and "Pause" was enabled, it would sometimes crash.  
    ◆Game: Fixed a bug in single-stage play (specified by FreeStage in System.ini) or single-stage test play where, if the played stage's filename ended with "-1" (e.g., "stage-1.stg4_***"), common variables would not revert to their pre-play values on the second clear, and would instead be carried over to the next play.  
    ◆Game: Fixed a bug where, if "Reverse speed if character direction changes mid-execution" was checked in the straight move command and movement direction was set to "specify target coordinates," "Reverse speed if character direction changes mid-execution" would be incorrectly applied even though it should be disabled in the game. Along with this, implemented "Apply behavior from versions 7.82 and earlier for straight move command when movement direction is set to "specify target coordinates"" in system settings. If migrating data from an old version to this version, this will be checked.  
    ◆Game: Background no longer moves when paused with space key.  
    ◆Game: Fixed a bug where using a sound effect (.wav) with no waveform data (0 seconds) could potentially cause a crash. Users who create and use "silent.wav" or similar might want to replace it with this version.  
    ◆Game & Editor: All files with a higher version than Action Editor 4's program (executable file) will no longer be usable. Originally, using higher version files was not considered, but since it could happen and potentially lead to unexpected bugs, from this version onwards, file loading will always fail.  
    For example, if you update Action Editor 4 from version 7.83 to 7.84, save data, then revert to 7.83, the files will not be usable.  
    ◆Editor: Fixed a bug in database general data lists and character flow lists where pressing "Ctrl+V" while holding the left mouse button would cause a crash.  
    ◆Editor: Fixed a bug in character editing's "Basic Animation Set" where moving the mouse out of the list frame while holding the left mouse button would cause a crash.  
    ◆Other: Fixed minor details.  
    
- [v7.82β](/soft/ActionEditor4/ActionEditor4_v782b.zip) 2012/5/18  
    ◆Game: Fixed a bug where the picture ID could not be changed in the "Arrange" command.  
    ◆Game: Fixed a bug in the "Warp" command where warping during scrolling would cause the warp position to shift slightly. Along with this fix, a setting "Apply behavior from versions 7.81 and earlier for warp during scrolling" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    ◆Game: Fixed a bug in multi-stage worlds where the background of the next stage would briefly display during stage transitions.  
    
- [v7.81β](/soft/ActionEditor4/ActionEditor4_v781b.zip) 2012/4/27  
    ◆Game: Fixed a bug where, when a character took an upward impact and hit a block with its head, the impact speed would not be invalidated, causing it to bounce back with force. Along with this fix, a setting "Apply behavior from versions 7.80 and earlier when character takes upward impact and hits block with head" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    ◆Editor: Fixed a bug where closing the "Play BGM" command edit window with "X" would not stop the BGM.  
    
- [v7.80β](/soft/ActionEditor4/ActionEditor4_v780b.zip) 2012/4/22  
    ◆Game: In movement commands with "Input Direction" (movement and shots), the behavior when pressing both "↓" and "↑" keys or both "←" and "→" keys changed from version 7.78β (this was not written in update history), but for "Input Direction" movement commands, it reverted to the behavior before 7.78β.  
    I fixed it because I didn't like how it would move forward when pressing "↓" and "↑" keys at the same time.  
    The behavior when pressing "↓" and "↑" keys simultaneously in "Input Direction" movement commands is as follows:  
      
    ・Before 7.77β: No movement  
    ・7.78β and 7.79β: Moves forward  
    ・7.80β: No movement (reverted to before 7.77β)  
      
    For replay playback, it will now behave according to the replay file's version, so it will play correctly regardless of version.  
    ◆Editor: Fixed a bug where multiple player characters could be placed after performing "Undo".  
    ◆Editor: Fixed a bug where the palette window would stretch vertically slightly each time the editor was restarted, a stage was created, or a stage was opened.  
    
- [v7.79β](/soft/ActionEditor4/ActionEditor4_v779b.zip) 2012/4/1  
    ◆Editor: Default data fix. Added "If SP is 1 or more" to the basic conditions of the flow for the protagonist's C key shot (costs 1 SP). This fixed a bug where shots could be fired repeatedly with the C key even when SP was 0. Similarly, fixed items that change C key actions.  
      
    Why did the shot (costs 1 SP) fire repeatedly with the C key even when SP was 0, despite the flow group having an SP condition in previous versions?  
    The reason is explained in the help.  
      
    Excerpt from help ↓  
    ////////////////////////////////////////  
    **※If multiple flows in the same group have the same key condition and "Allow continuous execution by holding down" is disabled, flows other than the topmost flow may execute regardless of "Basic Conditions".** This is because, to avoid "continuous execution by holding down a key", the program disables key condition activation once it activates until the key condition becomes false. During this disabled state of key condition activation, another flow (other than the topmost flow in the same group) may execute.  
    Here's an example:  
      
    <Example>  
    [Flow A] Group: a Basic Condition: SP 0 or less Key Condition: "C" pressed Command: Play Sound Effect (Error Sound)  
    [Flow B] Group: a Basic Condition: none Key Condition: "C" pressed Command: Shot, Status Manipulation (My SP -1)  
      
    The above is the setting for a shot that consumes 1 SP, also configured for the default protagonist. Assume Flow A and Flow B have exactly the same key conditions.  
    **If the user's SP is 0 during the game and the C key is pressed, it might seem like only Flow A should execute since Flow A and Flow B are in the same group, but actually, if the C key is mashed, Flow B might execute instead of Flow A for the reason mentioned earlier.** It's problematic if a shot can be fired even when SP is 0.  
    If you want to resolve this issue, please set the condition properly for Flow B as shown below:  
      
    [Flow A] Group: a Basic Condition: SP 0 or less Key Condition: "C" pressed Command: Play Sound Effect (Error Sound)  
    [Flow B] Group: a Basic Condition: **SP 1 or more** Key Condition: "C" pressed Command: Shot, Status Manipulation (My SP -1)  
    ////////////////////////////////////////  
      
    I really wanted to fix the program, but I couldn't do anything even after spending over 30 hours, so I made it a specification. Please understand.  
    
- [v7.78β](/soft/ActionEditor4/ActionEditor4_v778b.zip) 2012/3/11  
    ◆Game: Fixed a bug where, even if "Do not use move animation" was unchecked in movement commands, a unique move animation would still be enabled if "Move Animation" was not "None".  
    ◆Game: Fixed a bug in versions 7.73β to 7.77β where, if "Guided Move" command was used with "Prevent Sway" and "Inertia Enabled", after moving to the target's position, the character would move at the same speed as the target and lose inertia.  
    ◆Game: Fixed a bug where assigning gamepad directional keys to action keys in "KeyConfig.exe" would not make those keys work in the game.  
    ◆Editor: Added a note in the editor regarding a bug where, if "Parallel Execution" is OFF and "Move until target coordinates reached" is enabled in the "Straight Move" command, subsequent animations (e.g., animation during shot execution) are shifted, but this is a specification.  
    
- [v7.77β](/soft/ActionEditor4/ActionEditor4_v777b.zip) 2012/2/27  
    ◆Game: Fixed a bug in version 7.76β where shot and summon launch positions were abnormal. For example, a right-facing flying character firing a shot outside the edge of the stage would have the shot appear from the left edge of the screen. I believe this is a pretty fatal bug, so users of version 7.76β are kindly requested to update.  
    
- [v7.76β](/soft/ActionEditor4/ActionEditor4_v776b.zip) 2012/2/24  
    ◆Game: Fixed a bug in versions 7.73β to 7.75β where flying characters would sometimes display shifted by 1 dot left or up.  
    
- [v7.75β](/soft/ActionEditor4/ActionEditor4_v775b.zip) 2012/2/17  
    ◆Game: Fixed a bug in flow key conditions where, if multiple conditions were set and "Allow continuous execution by holding down" was enabled, continuous execution would sometimes not occur even if the last condition's key was held down.  
    
- [v7.74β](/soft/ActionEditor4/ActionEditor4_v774b.zip) 2012/2/12  
    ◆Game: Fixed a bug in version 7.73β where walking characters would shake when auto-scrolling (especially when scroll speed was not a multiple of 10) outside the stage's edge.  
    
- [v7.73β](/soft/ActionEditor4/ActionEditor4_v773b.zip) 2012/2/6  
    ◆Game: Fixed a bug where characters would sometimes shake when "Sync with Auto-scroll" was enabled during auto-scrolling (especially when the scroll speed was not a multiple of 10).  
    ◆Game: Fixed a bug where "Disable Horizontal (Vertical) Movement" in "Straight Move" command was not reflected at all. Along with this fix, a setting "Apply behavior from versions 7.72 and earlier for "Straight Move" command when "Disable Horizontal (Vertical) Movement" is enabled" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    ◆Editor: Fixed a bug where writing code to assign a value to a constant or invalid string in the "Execute Code" command would cause a crash when "OK" was pressed.  
    ◆Other: Fixed minor details.  
    
- [v7.72β](/soft/ActionEditor4/ActionEditor4_v772b.zip) 2012/1/30  
    **※Due to major feature expansions and additions in version 7.70, all versions from 7.70 onwards have been reverted to beta. Until the "β" notation is removed, they may contain many bugs.**  
    ◆Game: Fixed a bug where using the "Sword" command in versions 7.70 and 7.71 would sometimes cause a crash.  
    ◆Game: Fixed a bug where using a wave file in a format other than PCM (e.g., ADPCM format) for sound effects could potentially cause a crash during the game. In previous versions, formats other than PCM were not considered, so there was a possibility of trying to read non-PCM formats as PCM, leading to access to invalid memory regions. This has been fixed. The inability to play formats other than PCM remains unchanged. Along with this, the help has been updated to state that only PCM format waves can be played. By the way, the editor can play formats other than PCM, but this will be considered a specification.  
    
- [v7.71β](/soft/ActionEditor4/ActionEditor4_v771b.zip) 2012/1/22  
    ◆Game: Fixed a bug where enabling "Auto-update" in "Message" command would cause a crash under specific conditions.  
    Specifically, when a non-pause message like "Display until stage ends" (let's call this Message A) was displayed with "Auto-update" showing a variable, and then immediately after changing that variable's value with "Status Manipulation" etc. (in the command list, right below it), a pause-type message like "Display until advance key is pressed" (let's call this Message B) was displayed. In this situation, if the number of digits in the variable changed with "Status Manipulation" etc., causing Message A's width to change, it would crash after Message B ended. It would not crash if the message width did not change even if the digits changed.  
    ◆Editor: Fixed a bug in the Disappearance command where "Target" being "Character" or "Shot" would prevent "Target Range" and "Target Faction" from being specified. This bug only occurred in version 7.70. By the way, it is by design that "Target Range" and "Target Faction" cannot be specified for targets other than "Character" and "Shot".  
    
- [v7.70β](/soft/ActionEditor4/ActionEditor4_v770b.zip) 2012/1/19  
    ◆Game: The number of targets has increased to 4: "Target 1" to "Target 4". **The target from old versions will be inherited as "Target 1".**  
    ◆Game: In "Set Target" command, parent character and child character can now be selected as "Target". The one who creates the shot or character is the "parent", and the one created is the "child".  
    ◆Game: Implemented "Attack". If "Attack" is enabled in "Shot", "Sword", "Character Summon" commands, a notification (timing occurs) will be sent to the parent character when the shot or summoned character hits. Added three new timings to flow: "When damage dealt by attack", "When impact dealt by attack", and "When attack hits".  
    ◆Game: Implemented "Target character involved in timing" in flow settings. For example, for "When damage received" timing, the character that dealt damage becomes the target. Also, if that character (or shot or sword) is an attack, the parent character becomes the target.  
    ◆Game: Flow "Flow Operation" command can now operate on targets' flows.  
    ◆Game: Flow "Flow Operation" command can now set conditions. The flow will only operate if this condition is met.  
    ◆Game: "Disappearance" command can now make child or subordinate characters and shots disappear. "Child or subordinate" means not only characters you summoned (children), but also characters and shots summoned by those children (grandchildren).  
    ◆Game: Implemented "Exists" (whether it exists) in "Status Condition 3".  
    ◆Game: If a character or shot is hit during "continuous damage invincibility time" (which can be changed in "Stage Settings"), the flow timing "When hit by character" will no longer trigger.  
    ◆Game: When characters with set collision damage or impact (Character A, Character B) collide, the process used to be: Character A takes damage -> Character A's "When damage received" timing triggers -> Character B takes damage -> Character B's "When damage received" timing triggers. This has been changed to: Character A takes damage -> Character B takes damage -> Character A's "When damage received" timing triggers -> Character B's "When damage received" timing triggers. The same applies to impact. Along with this fix, a setting "Apply behavior from versions 7.59 and earlier for "When damage received" and "When impact received" timings" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    ◆Game: If a shot with no effect (no damage, impact, or item acquisition) hits a character, it will now hit instead of passing through (an "Effect" will occur and the shot will disappear). Along with this fix, a setting "Apply behavior from versions 7.59 and earlier when a shot with absolutely no effect hits" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    ◆Game: Fixed a bug where summoning a character whose "Straight Move" command specified "Relative Coordinates from Placement Position" for its movement target would cause the movement target to be greatly shifted and the movement direction to become incorrect.  
    ◆Game: Fixed a bug where, when "Straight Move" command specified "Relative Coordinates from Placement Position" for its movement target, the character's "Initial Position Offset" was not considered in that "Placement Position" (initial position/summon position). In previous versions, it was a relative coordinate from a position ignoring "Initial Position Offset". Along with this fix, a setting "Apply behavior from versions 7.59 and earlier when "Straight Move" command specifies "Relative Coordinates from Placement Position" for its movement target" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    
- [v7.59](/soft/ActionEditor4/ActionEditor4_v759.zip) 2011/9/30  
    ◆Game: Fixed a bug where executing the "Disappearance" command when flow timing was "When damage received" or "When died" would cause a crash if attempting to make the shot that damaged (or killed) the character with that flow disappear.  
    ◆Game: Implemented "Variation" in World Map events. Variation changes common variables before the world starts. For example, it can be used to present normal and hard modes as different worlds for one world (stage) by changing the "Difficulty" common variable. Of course, there's no need to duplicate stage files.  
    Instead of using variations, you could create a mechanism to choose between normal and hard modes within the stage (which is often seen in existing games), but variations offer the advantage of separately recording information like clear status, high scores, and rankings.  
    ◆Game: In system settings, "Return to map from pause menu in worlds that have been cleared once" can now be selected. This is from the menu called up by the space key, not the menu on death.  
    
- [v7.54](/soft/ActionEditor4/ActionEditor4_v754.zip) 2011/8/9  
    ◆Game: Increased the number of common variables and stage variables from 255 to 999.  
    
- [v7.53](/soft/ActionEditor4/ActionEditor4_v753.zip) 2011/7/29  
    ◆Game: Fixed a bug where, when running in Direct3D and fullscreen, pressing the Windows key in some environments would cause a crash... or so I intended (unconfirmed as the bug is not reproducible).  
    
- [v7.52](/soft/ActionEditor4/ActionEditor4_v752.zip) 2011/7/21  
    ◆Game: Fixed a bug in "Execute Code" command where, in an expression with two or more operators excluding "=", the calculation result of the leftmost operator excluding "=" would become the result of the entire expression. Along with this fix, a setting "Apply behavior from versions 7.51 and earlier for "Execute Code" command" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled. Please disable it (uncheck it) if you want the calculation result to be correct.  
      
    This is a serious issue, so I will explain it with an example.  
    To reiterate, a bug existed in all previous versions of the "Execute Code" command where, in an expression with two or more operators excluding "=", the calculation result of the leftmost operator excluding "=" would become the result of the entire expression.  
      
    For example,  
      
    If the expression is "hp = 1 + 2 + 3", the result of the leftmost "1 + 2" = 3 becomes the result of the entire expression. By specification, HP should be 6, but it was 3.  
      
    If the expression is "hp = 1 + 2 * 3", the multiplication "2 * 3" is calculated first, then "1 + 6", so in this case, a correct result was obtained. "hp = 1 + (2 + 3)" also had no problem for the same reason.  
      
    **In short, expressions where the leftmost operator (excluding "=") was calculated last in the entire expression yielded correct results. Otherwise, the left operand was generally assigned an incorrect result.**  
      
    That concludes the explanation.  
    The damage caused by this bug may be quite significant.  
    Actually, upon investigating the support BBS logs, I found that a bug report was submitted in November 2009, but it seems I forgot to fix it... Why is it always such serious bugs...  
    I deeply apologize, including for the significant delay in fixing it.  
    I am truly sorry.  
    
- [v7.51](/soft/ActionEditor4/ActionEditor4_v751.zip) 2011/7/17  
    ◆Game: Fixed a bug where characters with "Computer" control would not jump immediately after stage start or summon if they were even slightly in the air (feet off the ground). To be more specific, the bug was that jumping was impossible if the character was even slightly in the air. At the very beginning of a stage, characters are technically in the air, so even if they appear to be standing, they are actually in the air, preventing them from jumping.  
    ◆Editor: In stage scrolling with the mouse wheel, holding down the Ctrl key while moving the wheel now allows vertical scrolling (if "Vertical direction" was set in stage options, it will now scroll in the opposite, horizontal direction).  
    ◆Other: Fixed minor details.  
    
- [v7.50](/soft/ActionEditor4/ActionEditor4_v750.zip) 2011/7/11  
    ◆Game: Fixed a bug where "Set Target" command could not change target to "Closest Character" of "All Factions". This bug occurred from version 7.47. Especially if you migrated data from versions older than 7.47 to 7.47 or 7.49, the damage is likely significant, so please update to this version.  
    
- [v7.49](/soft/ActionEditor4/ActionEditor4_v749.zip) 2011/7/10  
    ◆Game: Fixed a bug in "Computer" controlled characters where, if they hit their head on a block while jumping and landed immediately, multiple jumps would occur for a single jump command execution. Also, for "Computer" controlled characters, when starting a jump command while in the air, previously jumps would sometimes be delayed after landing, but from this version, jumps will reliably fail when starting a jump command while in the air. Along with this fix, a setting "Apply behavior from versions 7.47 and earlier for "Computer" controlled characters' jumps" was implemented in the system settings. When migrating data from an old version to this version, this is enabled.  
    ◆Game: Fixed a bug where executing straight movement with "Input Direction" would crash if no directional key had been pressed since the game started. This bug would never occur if a directional key was set in the key conditions.  
    
- [v7.47](/soft/ActionEditor4/ActionEditor4_v747.zip) 2011/6/17  
    ◆Game: Distance conditions in appearance conditions and flow basic conditions can now display their range.  
    ◆Game: Implemented "Character Variable Condition" in "Set Target" command.  
    ◆Game: In "Set Target" command, implemented an option to not change target if no matching candidate exists (target does not become invalid).  
    ◆Editor: Fixed a bug in stage editing where quickly rolling the mouse wheel would cause the scrollbar to move significantly in the opposite direction (due to the mouse?).  
    ◆Editor: Scrollbars can now be moved with the mouse wheel in the palette window.  
    ◆Other: Fixed minor details.  
    
- [v7.44](/soft/ActionEditor4/ActionEditor4_v744.zip) 2011/5/12  
    ◆Game: Fixed a bug where continuously executing a flow with "Always" timing under certain conditions would cause a slight delay (0.1/60 seconds to 0.9/60 seconds) in restart. The restart of the flow is especially likely to be delayed if a command that does not directly specify execution time in 1/10s or 1/60s units, such as a movement command specified by "Speed and Distance", is at the end of the command list. Along with this fix, a setting "Apply behavior from versions 7.34 and earlier for continuous flow execution" was implemented in the system settings. When migrating data from an old version to this version, this setting is enabled.  
    
- [v7.34](/soft/ActionEditor4/ActionEditor4_v734.zip) 2011/4/3  
    ◆Game: Implemented "Disappearance" command. "Disappearance" allows making all characters or shots of a specified faction disappear.  
    
- [v7.33](/soft/ActionEditor4/ActionEditor4_v733.zip) 2011/3/29  
    ◆Game: Fixed a bug where specifying "Vertical", "Front Y", or "Back Y" in distance conditions would make the condition less likely to be met in the upward direction if the target character was a walking character (or more precisely, a character whose hit detection "Position" was "Below Character"). For example, with default hit detection, the range for the condition to be met was 7-8 dots narrower than specified. Along with this fix, implemented whether to "Apply behavior from versions 7.32 and earlier for "Vertical", "Front Y", "Back Y" in distance conditions" in system settings. If migrating data from an old version to this version, this will be checked.  
    ◆Game: Increased execution speed of character effect and screen effect "Mosaic" when screen color depth is 32bit. However, it became slightly rougher...  
    
- [v7.32](/soft/ActionEditor4/ActionEditor4_v732.zip) 2011/3/21  
    ◆Game: Implemented "Arrange" command. "Arrange" allows editing the settings of the next command to be executed using variables.  
    ◆Game: Implemented "Loop" command. "Loop" allows repeating a specified range for a specified number of times.  
    ◆Game: Implemented "Instant Display", which displays for only 1/60th of a second, in "Message" and "Display Picture" commands.  
    ◆Game: Fixed a bug where the display position of pictures in "Display Picture" command would shift slightly from its original position due to stage scrolling.  
    ◆Game: Fixed a bug where executing "Execute Animation" command from an item would sometimes not perform animation correctly.  
    ◆Game: Fixed a bug in "Charge Move" command where the "Angle" would be abnormal. Along with this, implemented whether to "Apply behavior from versions 7.22 and earlier for "Charge Move" command when "Angle" is not 0" in system settings. If migrating data from an old version to this version, this will be checked.  
    
- [v7.22](/soft/ActionEditor4/ActionEditor4_v722.zip) 2011/2/7  
    ◆Game: In the "Stage Clear" command, the next stage can now be specified by an arbitrary stage "path".  
    ◆Game: Fixed a bug where executing "Warp" command from an item in "Input Direction" would cause a crash.  
    ◆Game: Fixed a bug where walking characters could not warp diagonally when executing "Warp" command in "Input Direction". Along with this, implemented "Apply behavior from versions 7.20 and earlier for warp in "Input Direction" on walking characters" in system settings. If migrating data from an old version to this version, this will be checked.  
    ◆Game: Fixed a bug where "Status Condition" in appearance conditions and flow execution conditions would sometimes crash under specific conditions.  
    ◆Game: Fixed a bug where some character effects and screen effects would not end if configured to have no change from start to end (e.g., Burst, Start Position 32, End Position 32).  
    ◆Editor: Increased the number of creatable data in database "Sword Type" to 999. It was previously up to 99.  
    ◆Editor: Fixed a bug where "Start Strength" of character effect "Blur" could not be set to anything other than "1".  
    
- [v7.20](/soft/ActionEditor4/ActionEditor4_v720.zip) 2011/1/20  
    ◆Editor: Enabled dual-launching of the editor program.  
    
- [v7.19](/soft/ActionEditor4/ActionEditor4_v719.zip) 2010/12/1  
    ◆Game: Fixed a bug in some Windows Vista/7 environments where, when running in fullscreen mode other than 8bit (256 colors), the file selection dialog displayed in Free Mode or Replay Mode would not fully display, hiding the OK button etc. This bug likely occurred from version 6.80.  
    
- [v7.09](/soft/ActionEditor4/ActionEditor4_v709.zip) 2010/11/21  
    ◆Editor: Relocated all settings in "Compatibility" frame of System settings to a new tab. This narrows the window height, making "OK" buttons etc. less likely to be hidden even in low-resolution environments.  
    
- [v7.08](/soft/ActionEditor4/ActionEditor4_v708.zip) 2010/11/15  
    ◆Editor: Changed the notation of execution time for performance-related commands like "Message", "Execute Animation", "Execute Effect", "Execute Character Effect", "Execute Screen Effect", "Display Picture", "Change Screen Color". Instead of "P-0", the execution time is now expressed in parentheses. For example, an effect with an execution time of 3 would have been displayed as "P-3 Execute Effect" in previous versions, but will now be "P-0(3) Execute Effect". Game behavior remains completely unchanged, so please rest assured.  
    
- [v6.98](/soft/ActionEditor4/ActionEditor4_v698.zip) 2010/11/9  
    ◆Game: In "Distance Condition" for character appearance conditions and flow basic conditions, distance can now be finely adjusted in dot units.  
    
- [v6.97](/soft/ActionEditor4/ActionEditor4_v697.zip) 2010/10/29  
    ◆Game: Fixed a bug where flows with timing "Before stage start" would execute even if the character's appearance conditions were not met. Along with this, implemented "Apply behavior from versions 6.96 and earlier for flows with timing "Before stage start" (execute flows with timing "Before stage start" even if character's appearance conditions are not met)" in system settings. If migrating data from an old version to this version, this will be checked.  
    
- [v6.96](/soft/ActionEditor4/ActionEditor4_v696.zip) 2010/10/22  
    ◆Game: If launched in Direct3D mode with VSync enabled (System.ini "VSync=0" or higher), and the screen refresh rate (FPS with VSync enabled) cannot be set to 60 for some reason, VSync will automatically be disabled and FPS will be set to 60. However, if VSync is disabled, rendering becomes rough and speed becomes unstable.  
    ◆Editor: Fixed a bug where, when editing the world map and then trying to close the window or exit without saving, selecting "Yes" in the overwrite confirmation dialog would not save it.  
    
- [v6.95](/soft/ActionEditor4/ActionEditor4_v695.zip) 2010/10/14  
    ◆Game: Fixed a bug in movement commands other than "Circular Move" where if "Specify Speed and Distance" type had a negative "Speed", the speed would not be reflected correctly. Along with this, implemented "Apply behavior from versions 6.94 and earlier for movement commands other than "Circular Move" when "Specify Speed and Distance" type has a negative "Speed"" in system settings. If migrating data from an old version to this version, this will be checked.  
    
- [v6.94](/soft/ActionEditor4/ActionEditor4_v694.zip) 2010/10/8  
    ◆Changed from beta version to full version. No file updates, just the "β" notation removed.  
    
- [v6.94β](/soft/ActionEditor4/ActionEditor4_v694b.zip) 2010/10/1  
    ◆Game: Transparency color for the status window image "StatusWindow.bmp" at the top of the screen is now effective.  
    
- [v6.93β](/soft/ActionEditor4/ActionEditor4_v693b.zip) 2010/9/24  
    ◆Game: Fixed a bug in pausing messages where, even if "Display Window" was disabled, the window would briefly display when the message appeared.  
    
- [v6.92β](/soft/ActionEditor4/ActionEditor4_v692b.zip) 2010/9/17  
    ◆Game: Fixed a bug where if the title and options used the same BGM, the BGM would stop when returning to the title from options. This bug occurred from version 6.80.  
    ◆Game: Implemented "is a multiple of" and "is not a multiple of" in variable conditions and status conditions for appearance conditions and flow basic conditions.  
    ◆Game: Group can now be set even when "Range" in character action conditions is "Full Range". By the way, even in previous versions, group could be set for "Full Range" after placing characters on the stage. This was a bug, but it's now a specification in this version.  
    ◆Editor: Fixed a bug in database "Sword Type" settings where "Invert if right-facing" would be automatically checked for "Sword Position X" each time an attempt was made to edit sword position.  
    ◆Editor: Widened the appearance condition list box. This allows viewing longer condition statements.  
    ◆Other: Fixed minor details.  
    
- [v6.91β](/soft/ActionEditor4/ActionEditor4_v691b.zip) 2010/9/10  
    ◆Game: Window maximization is now possible in windowed mode.  
    ◆Game: Updated environment configuration file "System.ini". In Direct3D mode, "WindowMode=2" allows running in a resizable window.  
    ◆Game: In windowed mode, the window position and size will now be remembered upon game exit and carried over to the next launch. By the way, window position and size information is saved in a file named "Window.dat" in the "user_data" folder. You can delete this file when distributing.  
    
- [v6.90β](/soft/ActionEditor4/ActionEditor4_v690b.zip) 2010/9/4  
    ◆Game: Fixed a bug where, if a character's hit detection width was extremely close to the width of a path (between two blocks) made of block-hitting blocks, and that character moved left and touched a block, it would be considered crushed between blocks and die. This bug occurred from version 6.77.  
    
- [v6.80β](/soft/ActionEditor4/ActionEditor4_v680b.zip) 2010/9/3  
    ◆Game: When switching screens between Title, World Map, Challenge Stage Select, and Options, if BGM does not change, it will no longer restart from the beginning of the song.  
    ◆Game: Fixed an issue in Direct3D mode with windowed mode where it would not prompt for overwrite confirmation when overwriting replay files.  
    ◆Game: In some environments, Direct3D mode is slightly lighter.  
    
- [v6.79β](/soft/ActionEditor4/ActionEditor4_v679b.zip) 2010/8/31  
    ◆Game: The "Stage Clear" command can now forcibly change the protagonist's initial position and direction in the next stage.  
    
- [v6.77β](/soft/ActionEditor4/ActionEditor4_v677b.zip) 2010/8/27  
    ◆Game: Fixed a bug where, when a character jumped onto a block from the right, if they pressed the right side of the block and jumped, the jump trajectory would sometimes be canceled mid-air, causing them to land on the block (especially common with giant characters). It took a long time to notice this bug because the behavior was somewhat natural even before the fix. Along with this, implemented "Apply behavior from versions 6.76 and earlier for block landing detection" in system settings. If migrating data from an old version to this version, this will be checked.  
    
- [v6.76β](/soft/ActionEditor4/ActionEditor4_v676b.zip) 2010/8/21  
    ◆Editor: Flows can now have memos.  
    
- [v6.75β](/soft/ActionEditor4/ActionEditor4_v675b.zip) 2010/8/15  
    ◆Game: Added "English" to the environment configuration file "System.ini". Setting "English=1" will display texts that cannot be changed in the editor (mainly dialog texts) in English. If you wish to distribute to English-speaking regions, please refer to [How to Make it English-friendly?](/en/menu_support/actioneditor4_help/english/).  
    ◆Game: In "Shot", "Block Summon", "Character Summon", and "Item Summon", when formation is "Lightning" or "Encircle", "Target" (target) can now be chosen from "Target", "Protagonist", "Self".  
    ◆Game: In system settings, the text for "Ranking Registration" in the option menu can now be changed.  
    ◆Editor: Changed "Acquired Score" in "Status Condition" and "Status Manipulation" commands to "Score acquired upon defeat". Only the notation changed.  
    
- [v6.70β](/soft/ActionEditor4/ActionEditor4_v670b.zip) 2010/8/4  
    ◆Game: Fixed a bug in key conditions where, if conditions like Z・Z・Z (Z key 3 times) were set for consecutive identical keys, the condition would sometimes activate with fewer key presses, or would be easier to activate than intended. Along with this, implemented "Apply behavior from versions 6.68 and earlier for key condition evaluation" in system settings. By the way, if migrating data from an old version to this version, this setting is enabled. Uncheck it if you want the original behavior. This can also be resolved in previous versions by inserting "Action Key Neutral" between keys.  
    ◆Game: In fullscreen mode, when "Bpp=0" is set in the environment configuration file "System.ini", the number of colors can now be changed. This is located in "System.ini" frame's "Actual color depth when 'Screen Color Depth (Bpp)' is '0' in fullscreen" in system settings.  
    ◆Editor: Increased the upper limit of "Ease of input for multiple conditions" in key conditions from "10" to "15".  
    ◆Editor: Fixed a bug in the "Execute Code" command where an invalid use of operators could sometimes cause a crash.  
    
- [v6.68β](/soft/ActionEditor4/ActionEditor4_v668b.zip) 2010/7/30  
    ◆Editor: Added the following note to the "Jump" command settings. (The jump behavior itself has not changed).  
    *A jump whose "height can be adjusted by key" accepts jump key input until the height reaches "max jump". If the flow ends before the height reaches "max jump" (if the last command in the command list ends), height cannot be adjusted by the jump key thereafter.  
    ◆Other: Fixed minor details.  
    
- [v6.67β](/soft/ActionEditor4/ActionEditor4_v667b.zip) 2010/7/25  
    ◆Editor: Fixed a bug in the previous version where the second and subsequent test plays would result in a duplicate launch error.  
    
- [v6.66β](/soft/ActionEditor4/ActionEditor4_v666b.zip) 2010/7/23  
    ◆Game: Updated "Accessory.bmp" image (size and other standards unchanged). Made it so that the protagonist being a character other than Yashiyu in Story Mode doesn't feel out of place. The old image is in the "Unused" folder within the "bmp" folder, so revert it if there's any problem.  
    ◆Game: Fixed a bug in Direct3D mode where, if a character had a "Shot" graphic assigned, the graphic would face left even when the character faced right. This bug occurred from version 6.36.  
    ◆Game: In character appearance conditions and flow execution conditions, distance conditions can now be set based on the distance to the target.  
    ◆Editor: Fixed a bug where, if a right-facing character had a shot graphic assigned, the graphic would not face right in the editor.  
    ◆Editor: Removed the note for "Jump" command in the previous version: "※For 'height adjustable by key', if 'allow continuous execution by holding down' is not enabled in key conditions, height cannot be adjusted until just before reaching max jump." This was a misunderstanding. Height can be adjusted normally even without enabling "allow continuous execution by holding down."  
    ◆Other: Fixed minor details.  
    
- [v6.56β](/soft/ActionEditor4/ActionEditor4_v656b.zip) 2010/7/22  
    ◆Game: Fixed a bug in DirectDraw mode where, if a character was assigned a "Shot" graphic, the graphic would turn completely black when the character faced right. This bug only occurred in versions 6.36 and 6.46.  
    ◆Game: Fixed a bug in stages with two or more block characters where, if a block character had "When ridden by protagonist" or "When ridden by character" set as its flow execution timing, and a character transitioned to a different block character without jumping or falling significantly from the ridden state, the destination block character's flow would not execute or would execute with a delay. By the way, when moving from a normal block to a block character, the flow executed normally.  
    ◆Game: Fixed a bug where, if "Support symbol image display" was enabled in "System" settings, symbol image display would also apply to ranking registration names.  
    ◆Game: Blocks with "Display in front of character" enabled will now be displayed in front of backgrounds with "Display in front of character" enabled. This is more natural, though belated.  
    ◆Editor: Fixed a bug where, if a right-facing character had a shot graphic assigned, the graphic would not face right in the editor.  
    ◆Editor: In the "Jump" command, added a note: "※For 'height adjustable by key', if 'allow continuous execution by holding down' is not enabled in key conditions, height cannot be adjusted until just before reaching max jump." Game jump behavior has not changed. **← This was a misunderstanding. Height can be adjusted normally even without enabling "allow continuous execution by holding down."**  
    ◆Other: Fixed minor details.  
    
- [v6.46β](/soft/ActionEditor4/ActionEditor4_v646b.zip) 2010/7/17  
    ◆Game: Fixed a bug in version 6.36 where giant characters and giant shots were not displayed correctly at the edge of the screen.  
    ◆Game: Fixed a bug where, if a flow with key conditions was added via "Change Flow" command from an item, input before item acquisition would also be considered, potentially causing the flow to execute automatically immediately after item acquisition.  
    ◆Game: Implemented "Apply behavior from versions 6.16 and earlier for block summons (if a block's appearance condition 'Disable Block Summon' is not met, block summon to that square fails)" in system settings.  
    
- [v6.36β](/soft/ActionEditor4/ActionEditor4_v636b.zip) 2010/7/15  
    ◆Game: In Direct3D mode, game startup and stage loading are faster.  
    ◆Game: In Direct3D mode, VRAM and other resource usage is reduced.  
    ◆Game: Implemented "Pass through block characters" in shot settings. When migrating data from an old version to this version, "Pass through block characters" will have the same setting as "Pass through characters". For example, if it passes through characters, it will also pass through block characters. In short, game behavior will not change even if old version data is migrated, so rest assured.  
    ◆Game: Fixed a bug where character effect "Rotate (Depth)" would display incorrectly when a character with a character-specific bmp for giant characters (4x or more) was set to a size smaller than the bmp (e.g., set to 4x when it was a 9x bmp).  
    ◆Editor: Fixed a bug in palette data "Move Data" where moving data would reverse the order.  
    ◆Editor: Fixed a bug in palette data "Move Data" range specification where setting the start number greater than the end number would cause a crash.  
    ◆Editor: Fixed a bug where, when setting character or item graphics to "character-specific bmp" 120 or higher, the graphic number would automatically change during data switching etc.  
    ◆Editor: Fixed some notations.  
    
-   
    ★From here onwards (version 6.36β and later), "◆Game" updates will be listed before "◆Editor" updates. (To make more important game updates stand out.)  
      
      
    
- [v6.26β](/soft/ActionEditor4/ActionEditor4_v626b.zip) 2010/7/8  
    ◆Game: Further improved Direct3D mode operation on single-core CPU environments from version 6.16. It now runs at the original frame rate (FPS60) even with vertical synchronization enabled. As a result, flickering and stuttering have been resolved. Along with this, the specification adopted in the previous version 6.16, "When 'VSync=2' (default setting) in System.ini and CPU is single-core, vertical synchronization is disabled internally in the program," has been stopped, reverting to 6.06 and earlier (if "VSync=2", vertical synchronization is enabled in all environments).  
    ◆Game: Fixed a bug in Direct3D mode of version 6.16 where the mouse cursor would not display in the file selection dialog that appears immediately after starting Free Mode or Replay Mode. This bug only occurred in version 6.16.  
    ◆Game: Fixed a bug in DirectDraw mode of versions 5.76 and later where trying to display messages or pictures would cause a crash in extremely low-spec environments.  
    ◆Game: Fixed a bug where block summon would fail for squares containing blocks with "Disable Block Summon (Do not allow changes by block summon)" enabled, even if the appearance conditions for those blocks were not yet met. "Disable Block Summon" is a block setting (effective when the block is appearing), so it was fixed.  
    ◆Game: In Story Mode (World Map), total score will now be recalculated immediately after loading Story Mode save data (immediately after selecting a file with "Continue"). The program acquires high scores from all stages existing on the World Map immediately after loading data and sums them to calculate the total score.  
    For example, if you start a new game, get a score of 100 in Stage A, and save when the total score is 100. Then, in the editor, you delete Stage A from the World Map. In this case, loading the previous data from "Continue" will result in a total score of 0.  
    By the way, in previous versions, only the high score of the same stage (updated score) was added to the total score immediately after stage clear, so even if a stage was later deleted from the World Map, its high score would not be subtracted from the total score.  
    ◆Other: Fixed minor details.  
    
- [v6.16β](/soft/ActionEditor4/ActionEditor4_v616b.zip) 2010/7/6  
    ◆Game: Fixed a bug where, when screen color depth was 8bit, crashing could occur during scene transitions. This was a graphics-related issue, and crashes were more likely with more images used in the game.  
    ◆Game: Fixed a bug in Direct3D mode where executing character effects "Lens", "Transparency", "Mosaic", "Blur" would cause abnormal display results in some environments. I thought I fixed it in Ver6.06, but it wasn't fixed at all.  
    ◆Game: Fixed a bug in Direct3D mode where, if launched with vertical synchronization disabled ("VSync=0" in System.ini) and in windowed mode, it would run slowly (FPS in bottom right of screen would be low) on single-core CPU systems.  
    Also, when vertical synchronization is enabled in Direct3D mode, the original frame rate is not achieved on single-core CPUs, so when launched with "VSync=2" (default setting) in System.ini, vertical synchronization is now disabled internally if the CPU is single-core.  
    In short, it now runs at the original frame rate (FPS60) even in windowed mode on single-core CPU environments (however, the screen flickers and speed is slightly unstable).  
    ◆Game: Fixed a bug in Direct3D mode where, when screen color depth was 16bit, transparency would fail in character effect "Lens".  
    ◆Other: Fixed minor details.  
    
- [v6.06β](/soft/ActionEditor4/ActionEditor4_v606b.zip) 2010/6/29  
    ◆Game: Fixed a bug in Direct3D mode where simultaneously executing multiple character effects like "Lens," "Transparency," "Mosaic," and "Blur" would cause abnormal display results in some environments. For example, nothing might be displayed, it might flicker, or unrelated graphics might appear.  
    ◆Game: Fixed a bug in character effect "Lens" where setting "Offset" to anything other than 0 would shift the entire character's display position.  
    ◆Game: In Direct3D mode, invincible effect is now effective even when character effects "Lens," "Mosaic," and "Blur" are active.  
    ◆Game: Drawing of message windows etc. is slightly lighter in Direct3D mode.  
    ◆Game: Improved performance when executing character effect "Transparency" during a screen effect in Direct3D mode.  
    ◆Game: Fixed a bug where, if the execution environment did not support Direct3D, it would automatically switch to DirectDraw mode when trying to launch in Direct3D mode, but would crash if the screen color depth was 16bit.  
    ◆Other: Fixed minor details.  
    
- [v5.96β](/soft/ActionEditor4/ActionEditor4_v596b.zip) 2010/6/14  
    ◆Editor: Horizontal width of numerical input edit boxes is slightly wider. This makes numbers less likely to be hidden.  
    ◆Editor: Fixed a bug in single-stage test play where, if the stage was cleared and then played from the beginning again, some stage states (like stage scroll state) would sometimes not be initialized.  
    ◆Game: Fixed a bug in Direct3D mode where, in some environments, transparency would fail (transparency color would turn green). This bug only occurred in versions 5.76 and 5.86.  
    ◆Game: Implemented "HP and SP bar color change conditions *common to protagonist and enemies*" in "System" settings.  
    ◆Other: Fixed minor details.  
    
- [v5.86β](/soft/ActionEditor4/ActionEditor4_v586b.zip) 2010/6/6  
    ◆Game: **Overall drawing processing in Direct3D mode is lighter.** Specifically, drawing of blocks, items, shots, effects, messages, small stage backgrounds, "Split", "Wave", "Circle" in character effects and screen effects, and world map chips and events has become faster.  
    ◆Game: Fixed a bug where if a shot's "vs. Character" hit detection was set to anything other than the default value (16x16), the shot's graphic would shift to the top-left. The hit detection position (absolute coordinates relative to the graphic, not relative to the character) has not changed.  
    ◆Game: Fixed a bug where, if "D3D_FontCache=1" (default is "D3D_FontCache=0") was set in the environment configuration file "System.ini" and executed, and then in fullscreen mode, if "Alt" + "Tab" keys were used to minimize once and then re-played, alphanumeric lowercase letters would be replaced by symbol graphics even though "Support symbol image display" was disabled in system settings.  
    ◆Game: When relaunching, now you can choose whether to restart the program.  
    ◆Other: Fixed minor details.  
    
- [v5.76β](/soft/ActionEditor4/ActionEditor4_v576b.zip) 2010/5/30  
    ◆Editor: Prompts for file backup in "About Secondary Distribution.html".  
    ◆Game: Updated environment configuration file "System.ini". Added three new settings: "D3D_FontCache", "DD_FontCache", and "DD_VideoStretch". All are options that affect game execution speed.  
    ◆Game: In DirectDraw mode, drawing of effects when scaled (drawing when "Allow Scaling" is checked in database "Effect" settings) is lighter.  
    ◆Game: In DirectDraw mode, drawing of messages and pictures is lighter.  
    ◆Game: In DirectDraw mode, font drawing (e.g., instant message command execution, status window text display) is lighter.  
    ◆Game: Fixed a bug in DirectDraw mode fullscreen where background graphic recovery could sometimes fail on the world map screen. For example, if it was minimized with Alt+Tab etc. once and then resumed, the background might turn green.  
    ◆Game: Fixed a bug in Direct3D mode where, when launched with 32bit color depth, window frames and font colors would sometimes appear abnormal (often turning black) in some environments.  
    ◆Other: Fixed minor details.  
    
- [v5.66β](/soft/ActionEditor4/ActionEditor4_v566b.zip) 2010/5/21  
    ◆Edit: Changed setting item "Stop when target coordinates reached" in straight move command to "Execute until target coordinates reached". Only the notation in the editor changed.  
    ◆Game: Fixed a bug where stage clear sound effects would not play. If you don't want them to play, leave the "Stage Clear" path blank in "System" settings.  
    ◆Game: Fixed a bug in Direct3D mode where if bitmap sizes were improperly changed or drawing-related settings were improper, garbage or unrelated graphics could be drawn.  
    ◆Game: Fixed a bug in message commands where, if display position was set to "Display above this character" or "Display above protagonist", messages would sometimes display with vertical wobble.  
    ◆Game: Increased precision of "Prevent Sway" in straight move command.  
    ◆Game: Fixed a bug where, when executing warp command with warp position specified by screen coordinates consecutively, the warp character's display position would shift slightly if the stage scrolled.  
    ◆Game: Fixed a bug where if background image loading failed or the innermost background was a transparent background image, background rendering would become abnormal.  
    ◆Game: When loading data from versions 2.84 and earlier (before Direct3D mode implementation), invincible effect will now be set to not execute (the checkbox "Execute invincible effect" in Main Menu "System" > "1" tab will be unchecked). This is belated, but.  
    ◆Other: Fixed minor details.  
    
- [v5.56β](/soft/ActionEditor4/ActionEditor4_v556b.zip) 2010/5/17  
    ◆Edit: Fixed a bug in database "Animation Set" and "Animation" settings where selecting the last data item "-------------" would cause a crash.  
    ◆Game: Implemented "Update Interval (1/60s)" (update check interval when "Auto Update" is enabled) in message command.  
    ◆Game: Fixed a bug in "Auto Update" of message command where drawing content would be updated even when variables hadn't changed, causing unnecessary slowdown.  
    ◆Game: Fixed a bug where the "interval" of lightning shots would not be reflected at all for shots with "Lightning" formation and "angle offset" of "0". Along with this, implemented "Apply behavior from versions 5.54 and earlier for shots with 'Lightning' formation" in system settings. By the way, if migrating data from an old version to this version, this setting is enabled (checked). Uncheck it if you want the lightning shot interval.  
    ◆Other: Fixed minor details.  
    
- [v5.54β](/soft/ActionEditor4/ActionEditor4_v554b.zip) 2010/5/14  
    ◆Edit: Fixed a bug in database "Animation Set" and "Animation" settings where the sample image number would change automatically under specific conditions.  
    ◆Game: Implemented "Auto Update (responds to variable changes)", "Display Window", "Clear Message", "Message ID (replace with message of same ID)", "Follow Screen (position does not change with scrolling)" in message command.  
    ◆Game: Implemented "Picture ID (replace with message of same ID)", "Follow Screen (position does not change with scrolling)" in picture command.  
    ◆Game: Fixed a bug in shots with "Spread", "Explosion", or "Encircle" formations where, if the movement type was "Straight", "Wave", "Fall", or a "Targeting" or "Guiding" type with no target, and the shot speed was negative, it would not move in the opposite direction.  
    ◆Game: Fixed a bug in World Map where, if you opened the menu on an uncleared stage that was "Passable even if not cleared", it would automatically transition to the stage after closing the menu.  
    ◆Game: Updated environment configuration file "System.ini". "ShowFps=2" now allows displaying FPS with no window and small text.  
    ◆Other: Fixed minor details.  
    
- [v5.44β](/soft/ActionEditor4/ActionEditor4_v544b.zip) 2010/4/21  
    ◆Editor: Fixed a bug where some 24-bit bitmaps could not be loaded.  
    ◆Game: Fixed a bug in "Charge Move" command where setting an angle would cause it to move in the opposite horizontal direction (compared to setting an angle for straight move or shots).  
    
- [v5.43β](/soft/ActionEditor4/ActionEditor4_v543b.zip) 2010/4/19  
    ◆Editor: Fixed a bug where, after copying a flow containing "Block Summon," "Character Summon," "Item Summon," or "Acquire Item" commands that specified stage palette data, then changing stages (creating a new stage or loading another stage), pasting the copied flow would cause a crash if the stage palette data in the destination stage did not exist.  
    ◆Editor: Fixed a bug where, after reducing the number of data in database "Basic Animation Set" from 2 or more to 1, returning to stage editing would cause a crash under specific conditions. This was an extremely dangerous bug where, once this happened (if you didn't launch with this version), the editor would no longer be able to launch from the next time. I apologize for the great inconvenience.  
    
- [v5.33β](/soft/ActionEditor4/ActionEditor4_v533b.zip) 2010/4/16  
    ◆Game: Fixed a bug where the ranking registration name input dialog would not display in Direct3D mode.  
    ◆Game: Fixed a bug where, during 1UP processing after stage clear, it could sometimes be impossible to properly exit or minimize the application.  
    ◆Game: Fixed a bug where, under certain conditions, condition evaluation would occur multiple times per frame.  
    Along with this, a setting "Apply behavior from versions 5.23 and earlier for flow execution condition evaluation (conditions are evaluated multiple times per frame under specific conditions)" was implemented in the system settings.  
    By the way, if you are migrating data from an old version to this version, this setting is enabled (checked). If you had no problems with versions 5.23 and earlier, you can leave it checked, but if you have any issues and want to uncheck it, you should thoroughly test its behavior during test play.  
    Please note that unchecking this may cause flow execution with one or more conditions set to be delayed by one frame compared to versions 5.23 and earlier. Depending on the stage, this one-frame delay might change the flow execution order, significantly altering the subsequent development (especially for flows without a "Group" set).  
    
- [v5.23β](/soft/ActionEditor4/ActionEditor4_v523b.zip) 2010/4/9  
    ◆Game: Implemented "Angle" in "Charge Move" command.  
    ◆Game: Invincible effect speed can now be changed in system settings.  
    ◆Game: Fixed a bug in Direct3D mode fullscreen where shot graphics (textures) for blocks, characters, and items would fail to restore, resulting in green rectangles being drawn. This occurs, for example, when minimizing with Alt+Tab etc. and then resuming.  
    ◆Game: Increased font size slightly because some font shapes would break in "Message" commands etc.  
    ◆Game: Fixed a bug where message advance sound would not play.  
    
- [v5.13β](/soft/ActionEditor4/ActionEditor4_v513b.zip) 2010/4/2  
    ◆Editor: Fixed a bug where "Target Character ID" in "Set Target" command could not be set to "99".  
    ◆Editor: In "Change Screen Color" command, displays "※When Direct3D is enabled, changing screen color will drastically slow down screen effect execution."  
    ◆Game: Direct3D mode startup is slightly faster.  
    
- [v5.12β](/soft/ActionEditor4/ActionEditor4_v512b.zip) 2010/3/26  
    ◆Game: Fixed a bug where minimizing DirectDraw mode fullscreen with "Alt" + "Tab" keys etc. would cause a crash. It was not completely fixed in version 5.01.  
    
- [v5.11β](/soft/ActionEditor4/ActionEditor4_v511b.zip) 2010/3/19  
    ◆Editor: Fixed a bug in "Status Condition 2" of appearance conditions and flow basic conditions where, when "Scale" was a condition, if "x100" was set, the displayed size in the condition list would be one size larger than set, and it would crash.  
    ◆Game: Changed character effect "Burst" content from 8-split to 4-split. This significantly lightens effect drawing.  
    ◆Game: Added "Roughness" parameter to character effects "Wave (Horizontal)", "Wave (Vertical)", "Circle", and screen effects "Wave (Horizontal)", "Wave (Vertical)", "Circle". Higher "Roughness" makes wave and circle shapes more jagged, but makes them lighter. When migrating data from old versions to this version, "Roughness" for each effect is set to "2", making them render rougher (and lighter) than in old versions.  
    ◆Game: When performing character effects "Wave (Horizontal)", "Wave (Vertical)", "Circle", and screen effects "Wave (Horizontal)", "Wave (Vertical)", "Circle" on giant characters, the larger the character, the rougher the wave and circle shapes become, but they also become lighter.  
    ◆Game: When overwriting replay files in Direct3D mode and windowed mode, for some reason the overwrite confirmation dialog is hidden, so checking for overwrite is stopped altogether (this is due to my lack of ability. I apologize).  
    ◆Game: Fixed a bug in DirectDraw mode 8bit screen where, if "Change Screen Color" command was executed "Revert to original color" without ever changing the screen color, the screen would turn dark.  
    ◆Other: Fixed minor details.  
    
- [v5.01β](/soft/ActionEditor4/ActionEditor4_v501b.zip) 2010/3/12  
    ◆Editor: Fixed a bug in environments with more than 2GB of system memory where the upper limit value for stage size changes in "Stage Settings" would display as a negative value.  
    ◆Game: Implemented "Reset after death" in "System 3" stock settings. Enabling "Reset after death" will apply the protagonist's settings from stage data in the next play when the protagonist dies.  
    ◆Game: Fixed a bug in Direct3D mode 16bit screen where some images were not transparent correctly.  
    ◆Game: Fixed a bug in Direct3D mode 16bit screen where simultaneously executing "Execute Screen Effect" and "Change Screen Color" commands would prevent screen colors from changing.  
    ◆Game: Fixed a bug in Direct3D mode where, when using some fonts like "MS PMincho", full-width spaces in messages would cause a crash. By the way, there was no problem with the default "MS P Gothic".  
    ◆Game: In Direct3D mode, font rendering is more stable even in environments with low VRAM.  
    ◆Game: World map screen operation is lighter.  
    ◆Game: Fixed a bug in DirectDraw mode fullscreen where minimizing with Alt+Tab etc. would cause a crash.  
    ◆Game: Fixed a bug in DirectDraw mode where, when running with 16bit or 32bit screen, character effect "Color Change" would change to a different color than specified.  
    ◆Game: Fixed a bug in DirectDraw mode where fonts in status window and message window would flicker in some environments.  
    ◆Other: Fixed minor details.  
    
- [v4.91β](/soft/ActionEditor4/ActionEditor4_v491b.zip) 2010/3/5  
    ◆Editor: In the explanation for "Bitmap Format" in "System 3" of system settings, added: "※If using 16.77 million colors (24bit) and setting transparency color to something other than (0,177,0), please repaint pixels at (0,0) and (0,8) in "Palette.bmp" image file to transparency color. Otherwise, transparency may fail."  
    ◆Editor: Default data fix. Disabled "When screen is 256 colors (8bit), execute color animation (invincible color changes rapidly)" in "System 1". Set windowed mode as default in "System.ini" settings in "System 6" ("WindowMode=1").  
    ◆Game: Direct3D mode can now launch with 16bit screen.  
    ◆Game: In DirectDraw mode, 24bit (16.77 million color) bitmaps can now also launch with 16bit screen. (However, it takes time to launch).  
    ◆Game: Updated environment configuration file "System.ini". Set windowed mode as default ("WindowMode=1"). Significantly updated explanations.  
    ◆Other: Fixed minor details.  
    
- [v4.81β](/soft/ActionEditor4/ActionEditor4_v481b.zip) 2010/2/12  
    ◆Editor: Fixed a bug where attempting to load a stage file from a drive different from the one where Action Editor 4 is located would fail.  
    ◆Editor: Fixed a bug in database editing where, even if "Same as filename" was checked for data names, some filenames would result in a different name than the filename.  
    ◆Game: Fixed a bug where attempting to make a target disappear with the "Status Manipulation 2" command would cause a crash under certain conditions.  
    ◆Game: Fixed a bug where attempting to load stage files or replay files from a drive different from the one where Action Editor 4 is located would cause a crash or freeze.  
    ◆Game: Fixed a bug in screen effect "Scale" where the center would shift (not scaled around protagonist) under certain conditions.  
    ◆Game: In World Map, fixed a bug where the protagonist would always face forward when returning to the map from the World Map menu.  
    ◆Other: Fixed minor details.  
    
- [v4.71β](/soft/ActionEditor4/ActionEditor4_v471b.zip) 2010/2/5  
    ◆Editor: Fixed a bug where right-double-clicking outside the stage size (especially bottom-right) would cause a crash.  
    ◆Editor: Changed explanation for "Circular Move" command from "※0 degrees is 12 o'clock on a clock" to "※If rotation direction is counter-clockwise, 0 degrees is directly above the character. If clockwise, 0 degrees is directly below the character."  
    ◆Game: Fixed a bug in "Circular Move" command where a negative "Speed (increase angle)" value would not function correctly.  
    ◆Game: Fixed a bug where setting a non-existent character-specific bmp number for character's "Graphic" would cause a crash.  
    ◆Game: Fixed a bug where, if multiple key conditions were set for one flow, the key conditions would sometimes not activate under certain circumstances. (Updating to this version may make commands easier to input).  
    ◆Game: Fixed a bug where "Execution Type" and "Loop Execution" were not stocked in character effect stock. (Only character effect type was stocked).  
    
- [v4.61β](/soft/ActionEditor4/ActionEditor4_v461b.zip) 2010/1/29  
    ◆Editor: Fixed a bug where, after an abnormal termination in test play, the editor would not allow another test play due to being treated as a duplicate launch unless restarted.  
    ◆Editor: Fixed a bug where pressing test play shortcut keys (F5, F7, etc.) for even a short duration would cause a duplicate launch error.  
    ◆Editor: Fixed a bug where if stage data was not changed at all, but stage variable names were changed in palette data editing, the stage variable names would not be saved when attempting to save stage data.  
    ◆Editor: Fixed a bug where, after changing the world map size and then closing the world map edit without saving the changes, trying to edit the world map again would revert the size.  
    ◆Editor: Default data fix. Disabled "Color" selection from option menu. (Because it doesn't function in Direct3D mode).  
    ◆Game: Setting "Direct3D=2" in environment configuration file "System.ini" will now display a drawing mode selection at game launch. This will be the default setting.  
    ◆Game: Fixed a bug where if a character had an effect set for "Body Collision Effect" and that effect was then deleted from the database, it would sometimes crash during gameplay under certain conditions.  
    ◆Game: Fixed a bug where characters would not die immediately even if their HP reached 0 with the "Status Manipulation" command.  
    ◆Other: Fixed minor details.  
    
- [v4.51β](/soft/ActionEditor4/ActionEditor4_v451b.zip) 2010/1/22  
    ◆Game: In Direct3D mode, fixed a bug where simple color drawing (drawing other than images or text) would sometimes not work correctly in some environments? (Unconfirmed as the bug is not reproducible).  
    ◆Game: Reduced VRAM usage by making default character images "Character1~8.bmp" and "Player01.bmp" the minimum necessary size. Also reduced the size of background image "Space2.bmp".  
    Especially in Direct3D mode, some video cards would internally expand the width or height of textures (images) to powers of 2. So, from this version, character image widths are set to 512 (power of 2) to prevent unnecessary VRAM consumption. For example, if the character image's original width was 640, the program would expand it to 1024 internally, consuming about twice as much VRAM as a 512-width image.  
    ◆Game: Fixed a bug in Direct3D mode where simultaneously executing "Execute Screen Effect" and "Change Screen Color" commands would cause the entire screen to become distorted.  
    ◆Game: Changed content of report file (Report_Game.txt).  
    ◆Other: Fixed minor details.  
    
- [v4.41β](/soft/ActionEditor4/ActionEditor4_v441b.zip) 2010/1/15  
    ◆Game: Fixed a bug in Direct3D mode where drawing would not be displayed correctly on some video cards.  
    ◆Game: In Direct3D mode, even with insufficient VRAM, drawing will now be somewhat normal (though it will be heavy and some effects will be disabled).  
    
- [v4.31β](/soft/ActionEditor4/ActionEditor4_v431b.zip) 2010/1/8  
    ◆Game: Fixed a bug where checking "Pause" in "Execute Effect" command and executing it would cause a crash.  
    ◆Game: Fixed a bug where simultaneously drawing two or more pictures in Direct3D mode would cause a crash.  
    
- [v4.21β](/soft/ActionEditor4/ActionEditor4_v421b.zip) 2010/1/6  
    ◆Game: Changed content of report file (Report_Game.txt).  
    ◆Other: Fixed minor details.  
    
- [v4.20β](/soft/ActionEditor4/ActionEditor4_v420b.zip) 2009/12/29  
    ◆Game: Direct3D mode can now launch normally even in single-core CPU environments.  
    ◆Game: Fixed a bug where, after playing a stage with a frame rate other than 60, the frame rate would not revert to 60 after the stage ended.  
    ◆Game: Updated System.ini. Vertical synchronization ("VSync") can now be set ON/OFF in Direct3D mode. It also newly states that "if vertical synchronization is not disabled, stages with frame rates other than 60 will not run at normal speed" and "disabling vertical synchronization may cause slowdowns or abnormal rendering in single-core CPU environments".  
    ◆Other: Fixed minor details.  
    
- [v4.10β](/soft/ActionEditor4/ActionEditor4_v410b.zip) 2009/12/27  
    ◆Game: Direct3D mode can no longer be launched if the CPU is not multi-core, as it becomes extremely slow on single-core CPU environments. If launched on a single-core CPU environment, Direct3D will be disabled. (Support for single-core CPUs in Direct3D will be considered later.)  
    
- [v4.00β](/soft/ActionEditor4/ActionEditor4_v400b.zip) 2009/12/25  
    ◆Editor: Fixed a bug in Windows 7 where the client area would be narrower than intended.  
    ◆Editor: Updated explanation of drawing speed in character effects and screen effects.  
    ◆Game: Implemented "Invincible Effect" in character settings.  
    ◆Game: Implemented "Execute Invincible Effect" in system settings.  
    ◆Game: Can now draw with Direct3D.  
    Previously, DirectDraw, an older technology, was used for drawing processing, but from this version, drawing with Direct3D is possible.  
    Direct3D can better utilize the video card's performance, so drawing processing becomes faster than before. (However, "Lens", "Mosaic", and "Blur" in character effects, and "Lens" and "Mosaic" in screen effects have become slower...)  
    In particular, screen flickering that can occur on Windows Vista and Windows 7 (depending on System.ini settings) is also eliminated.  
      
    To enable Direct3D, set "Direct3D=1" in the environment configuration file "System.ini" and run. (It is set to "Direct3D=1" by default).  
      
    However, I apologize, but Direct3D only supports 32bit (16.77 million color) screens.  
    Since it does not support 8bit (256 color) screens, if you played with an old version on an 8bit screen and migrate your data to this version to use Direct3D, the following limitations will occur:  
      
    ・Invincible color animation (palette animation) will no longer function.  
    ・Colors will no longer change with the "Color" option.  
      
    These are almost the same as the limitations of traditional 16bit and 32bit screens, but the "Change Screen Color" command is realized with Direct3D. (The "Change Screen Color" command now functions under 32bit screen mode, which was previously impossible).  
    Note that there are no problems with the bitmap format remaining 8bit (256 colors), and there is no need to change the bitmap format due to this update.  
      
    Additionally, regarding invincible color animation for characters, an alternative called "Invincible Effect" has been provided. If Invincible Effect is enabled, when a character is invincible (even if not using invincible colors), the character glows at regular intervals, making it easier to tell if they are invincible by appearance.  
    By the way, if you are migrating data from an old version to this version, the invincible effect will always be "white".  
    If you wish to disable the invincible effect for any reason (e.g., "uncool", "too bright"), simply uncheck "Execute invincible effect" in Main Menu "Project" > "System" > "1".  
      
    ◆Game: Significantly updated System.ini. Added "Direct3D" setting. "VSync=3" abolished.  
    Note that 32bit (16.77 million color) screen is the default from this version onwards. (Because Direct3D only supports 32bit).  
    **If you want to run with the traditional default setting = 8bit (256 color) screen, please rewrite "Direct3D=0" and "Bpp=0" (or "Bpp=8") in System.ini and launch the game.**  
      
    ◆Game: Fixed a bug where, when launched with 8bit (256 colors) screen on Windows Vista and later OS, the file selection dialog displayed in Free Mode and Replay Mode would display incorrectly.  
    With this update, file lists no longer suddenly hide.  
    However, on Windows 7, in 8bit screen mode, the confirmation dialog when overwriting replay files turns completely black like this, hiding the text:  
    ![](/menu_game/ActionEditor4/ss01.jpg)  
    I am very sorry, but I was unable to fix this bug with my abilities. (I've given up.)  
    Please understand.  
      
    ◆Game: Added "When screen is 256 colors (8bit), execute color animation (invincible color changes rapidly)" to system settings.  
    ◆Game: Slightly adjusted the color of invincible characters in bitmaps "Character1~5.bmp" and "Player01.bmp". (I intended to make it look natural even if color animation is disabled).  
    ◆Other: Fixed minor details.  
    
- [v2.84β](/soft/ActionEditor4/ActionEditor4_v284b.zip) 2009/8/19  
    ◆Game: Fixed a bug in the small bar displayed above a character's head when SP changes, where the bar representing Max HP would be displayed instead of the bar representing Max SP (the result is the same if default image has gray for both HP and SP).  
    
- [v2.83β](/soft/ActionEditor4/ActionEditor4_v283b.zip) 2009/8/14  
    ◆Editor: Fixed a bug where attempting to change common palette and stage palette data count simultaneously would cause a crash.  
    ◆Game: Fixed a bug in some environments where pressing Esc or Alt+F4 while paused in a message command would stop the game instead of exiting.  
    ◆Game: Fixed a bug where horizontally auto-scrolling a background image with a width other than 640 or vertically auto-scrolling a background image with a height other than 480 would not loop correctly.  
    
- [v2.73β](/soft/ActionEditor4/ActionEditor4_v273b.zip) 2009/8/7  
    ◆Game: Fixed a bug where, when a character with a giant character specific bmp graphic (e.g., Spilit from default palette) had its "Scale" item set to a value different from the specific bmp's size and character effect "Rotate A" was executed, it would not draw correctly. This bug only occurred in v2.71 and v2.72.  
    
- [v2.72β](/soft/ActionEditor4/ActionEditor4_v272b.zip) 2009/7/31  
    ◆Game: In system settings, whether "When a character dies due to 'Status Manipulation' or 'Code Execution' commands, execute death effect and play death sound effect" can now be selected.  
    ◆Game: Fixed a bug where "Defense" could not be stocked.  
    ◆Other: Fixed minor details.  
    
- [v2.71β](/soft/ActionEditor4/ActionEditor4_v271b.zip) 2009/7/24  
    ◆Game: Fixed a bug where executing character effect "Rotate (Depth)" on block and item graphics would cause a crash.  
    ◆Game: Fixed a bug where, even if a key condition was not set in the protagonist's flow and jump was executed (no height change based on key press time), it would not jump on block characters.  
    ◆Game: If no stage background is set, a solid black background will be displayed.  
    ◆Game: Fixed a bug where executing character effect "Rotate A (speed priority for giant characters)" on a giant character at the edge of the screen would change the character's display position.  
    ◆Game: Significantly increased execution speed of character effect "Rotate A (speed priority for giant characters)" on giant characters.  
    ◆Game: Fixed a bug where pausing during play and saving it as a replay would sometimes cause that replay to not play correctly.  
    
- [v2.61β](/soft/ActionEditor4/ActionEditor4_v261b.zip) 2009/7/16  
    ◆Editor: Fixed a bug where graphics for data 161 and above would sometimes not display in the palette window.  
    ◆Game: Fixed a bug where giant flying characters would shift slightly downwards from their initial position.  
    I made it so that they grow upwards, just like walking characters.  
    Also, to maintain compatibility, implemented "Apply behavior from versions 2.60 and earlier for initial position changes when giant flying characters are created (initial position shifts downward as size increases)" in system settings. This is automatically enabled when loading old version data.  
    
- [v2.60β](/soft/ActionEditor4/ActionEditor4_v260b.zip) 2009/7/10  
    ◆Editor: Fixed a bug where, after reducing the number of palette data, attempting to edit a flow that referenced the reduced data (e.g., "○○ Summon" or "Acquire Item" commands) would cause a crash.  
    ◆Editor: Added notes on execution speed to database "Character Effect" and "Screen Effect".  
    ◆Game: Fixed a bug where characters that had been targeted at least once would sometimes crash upon death. This was more likely to occur in stages with many characters or shots.  
    ◆Game: Fixed a bug where "Rotate A (speed priority for giant characters)" and "Rotate B (drawing precision priority for giant characters)" were swapped in database "Character Effect".  
    ◆Game: Fixed the bottom-left of the title image "Title.bmp" that wasn't filled.  
    ◆Game: Fixed a bug in "Straight Move" command where, for right-facing flying characters, inputting diagonally forward would move them diagonally backward.  
      
    ◆Editor: Removed system setting "Apply shot image standard from versions 2.18 and earlier".  
    This feature was implemented along with the change in the shot image "Shot.bmp" standard from v2.21.  
    Originally, it was implemented to allow using shot images from v2.18 and earlier as they were, but in reality, it had no effect, and using shot images conforming to v2.18 and earlier standards in v2.21 and later would shift the graphics by 1.  
    It was difficult to fix the shifted numbering now, and after much deliberation, I concluded that it was best to eliminate this feature altogether.  
      
    In hindsight, if the standard hadn't been changed, no one would have been inconvenienced.  
    I apologize for the great inconvenience caused by this bug.  
      
    ☆ For how to correctly use shot images conforming to v2.18 and earlier standards in v2.21 and later, please refer to [here](/en/menu_support/actioneditor4_qa/#Q7).  
      
    ◆Other: Fixed minor details.  
    
- [v2.49β](/soft/ActionEditor4/ActionEditor4_v249b.zip) 2009/7/3  
    ◆Game: Fixed a bug where additional angle by clone value in "Straight Move" command did not function.  
    ◆Game: Fixed a bug where, when the frame rate was not 60, the effective duration of a shot's "existence time" would remain the same as when the frame rate was 60.  
    
- [v2.48β](/soft/ActionEditor4/ActionEditor4_v248b.zip) 2009/6/26  
    ◆Editor: In stage editing, reversed the direction of mouse wheel scrolling.  
    ◆Editor: In the main window, F5 key now performs "Test Play", and F7 key performs "Test Play Entire Game".  
    ◆Game: Fixed a bug where, even if the protagonist's "Vision" was set to "Circular in front of character", it would actually be square.  
    ◆Game: Fixed a bug in database "Screen Effect" "Vibration" where it would not vibrate if the result of "Number of Vibrations ÷ Execution Time" was too small.  
    ◆Game: In database "Screen Effect" "Scale", resolved an issue where the protagonist would be displayed in the center even when at the edge of the stage's scrollable area. Also significantly increased execution speed.  
    ◆Other: Fixed minor details.  
    
- [v2.47β](/soft/ActionEditor4/ActionEditor4_v247b.zip) 2009/6/19  
    ◆Editor: In database "Basic Animation Set" "Flying" and "Flying Move", "Frame offset when flying" is now considered in the sample graphic display.  
    ◆Editor: Fixed a bug where horizontal and vertical width display in database "Sword Type" was reversed.  
    ◆Game: In bitmap "Character1", the first frame of invincible graphics for Thunder User, Dark User, Ancient Mage, and Legendary Mage (← default data names) were not painted with invincible color, so they were repainted.  
    ◆Game: Fixed a bug where replays where some stage settings (e.g., "Auto-scroll Speed") were changed mid-stage would not be reproduced correctly.  
    ◆Game: Initializing a stage for the second time or later is now faster. (Waiting time for replaying after death or "Retry" is shorter).  
    ◆Other: Fixed minor details.
- [v2.37β](/soft/ActionEditor4/ActionEditor4_v237b.zip) 2009/6/12  
    ◆Game: Fixed a bug in "Status Manipulation" command's random number setting where setting A to a value greater than B for generating a random number from "A to B (left value to right value)" would cause a crash.
- [v2.27β](/soft/ActionEditor4/ActionEditor4_v227b.zip) 2009/6/5  
    ◆Game: Fixed a bug in Challenge Mode where the ranking window would display even when ranking settings were disabled.
- [v2.26β](/soft/ActionEditor4/ActionEditor4_v226b.zip) 2009/5/22  
    ◆Editor: Fixed a bug where "Appearance Condition" and "Basic Condition" in flow "Status Condition 2" had insufficient display.  
    ◆Game: Fixed a bug where "At least one key is true" setting in flow's "Key Condition" would not function correctly.

---

● Further older versions available for download  
Versions older than 2.26 were previously released on a blog called "Omoshiro Game Blog 2", but that blog was closed due to security issues, so I am re-releasing them here. (However, the release dates and update contents are not listed).  
  
[v2.25β](/soft/ActionEditor4/ActionEditor4_v225b.zip)  
[v2.23β](/soft/ActionEditor4/ActionEditor4_v223b.zip)  
[v2.22β](/soft/ActionEditor4/ActionEditor4_v222b.zip)  
[v2.21β](/soft/ActionEditor4/ActionEditor4_v221b.zip)  
[v2.18β](/soft/ActionEditor4/ActionEditor4_v218b.zip)  
[v2.17β](/soft/ActionEditor4/ActionEditor4_v217b.zip)  
[v2.16β](/soft/ActionEditor4/ActionEditor4_v216b.zip)  
[v2.15β](/soft/ActionEditor4/ActionEditor4_v215b.zip)  
[v2.14β](/soft/ActionEditor4/ActionEditor4_v214b.zip)  
[v2.12β](/soft/ActionEditor4/ActionEditor4_v212b.zip)  
[v2.06β](/soft/ActionEditor4/ActionEditor4_v206b.zip)  
[v1.97β](/soft/ActionEditor4/ActionEditor4_v197b.zip)  
[v1.94β](/soft/ActionEditor4/ActionEditor4_v194b.zip)  
[v1.89β](/soft/ActionEditor4/ActionEditor4_v189b.zip)  
[v1.87β](/soft/ActionEditor4/ActionEditor4_v187b.zip)  
[v1.85β](/soft/ActionEditor4/ActionEditor4_v185b.zip)  
[v1.83β](/soft/ActionEditor4/ActionEditor4_v183b.zip)  
[v1.82β](/soft/ActionEditor4/ActionEditor4_v182b.zip)  
[v1.80β](/soft/ActionEditor4/ActionEditor4_v180b.zip)  
[v1.78β](/soft/ActionEditor4/ActionEditor4_v178b.zip)  
[v1.77β](/soft/ActionEditor4/ActionEditor4_v177b.zip)  
~~v1.76β~~  
~~v1.75β~~  
~~v1.74β~~  
[v1.72β](/soft/ActionEditor4/ActionEditor4_v172b.zip)  
[v1.71β](/soft/ActionEditor4/ActionEditor4_v171b.zip)  
[v1.70β](/soft/ActionEditor4/ActionEditor4_v170b.zip)  
[v1.66β](/soft/ActionEditor4/ActionEditor4_v166b.zip)  
[v1.65β](/soft/ActionEditor4/ActionEditor4_v165b.zip)  
[v1.64β](/soft/ActionEditor4/ActionEditor4_v164b.zip)  
[v1.62β](/soft/ActionEditor4/ActionEditor4_v162b.zip)  
[v1.60β](/soft/ActionEditor4/ActionEditor4_v160b.zip)  
[v1.59β](/soft/ActionEditor4/ActionEditor4_v159b.zip)  
[v1.56β](/soft/ActionEditor4/ActionEditor4_v156b.zip)  
[v1.55β](/soft/ActionEditor4/ActionEditor4_v155b.zip)  
[v1.54β](/soft/ActionEditor4/ActionEditor4_v154b.zip)  
~~v1.53β~~  
[v1.52β](/soft/ActionEditor4/ActionEditor4_v152b.zip)  
[v1.50β](/soft/ActionEditor4/ActionEditor4_v150b.zip)  
[v1.49β](/soft/ActionEditor4/ActionEditor4_v149b.zip)  
[v1.48β](/soft/ActionEditor4/ActionEditor4_v148b.zip)  
[v1.47β](/soft/ActionEditor4/ActionEditor4_v147b.zip)  
[v1.46β](/soft/ActionEditor4/ActionEditor4_v146b.zip)  
[v1.45β](/soft/ActionEditor4/ActionEditor4_v145b.zip)  
[v1.44β](/soft/ActionEditor4/ActionEditor4_v144b.zip)  
[v1.43](/soft/ActionEditor4/ActionEditor4_v143.zip)  
[v1.42](/soft/ActionEditor4/ActionEditor4_v142.zip)  
[v1.40](/soft/ActionEditor4/ActionEditor4_v140.zip)  

[Back to top of page](#START)[  
](#START)

<a name="GAME_DL"></a>

## Game Collection 

Almost all are freeware (free).  
  
Here, I only introduce recommended games that are complete versions or can be played to the end.  
There are other recommended games, such as trial versions posted on [New AcEdi BBS](http://ae4directory.web.fc2.com/index.html).  
  
If you encounter any issues or slowdowns during play, you may be able to resolve them by [downloading the latest version of Action Editor 4](#AE4_DL) and replacing only the program file "Game_v***.exe" (*** is the version) and the environment configuration file "System.ini".  
*However, for most games, running with the latest program version is not recommended. It's possible for new bugs to emerge, so consider updating the program to the latest version as a last resort. Also, back up your old version data before playing with the latest version.  

*If your gamepad (game controller) doesn't work, you may be able to fix it using [this method](/en/menu_support/gamepad_preferred_device/).  

- [To General Audience Games](#GAME_DL_G)
- [To Adult Games (18+)](#GAME_DL_A)


<a name="GAME_DL_G"></a>

### General Audience Games

*No more works are planned to be added here.  
For recent Action Editor games, you might find them via the following links.  

- [Freem! > Action Editor Category (Newest First)](https://www.freem.ne.jp/search/%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%E3%83%BC)  
- [Free Game Mugen > Action Editor Category (Not Newest First)](https://freegame-mugen.jp/genre/action_editor.html)  
    
- [New AcEdi BBS](http://ae4directory.web.fc2.com/index.html)  

Registered: 2019/3/12 **(This time there are many, so genres are also written)**  

- [Vivid Twinkler -Cage of Ice and Fire-](https://www.freem.ne.jp/win/game/16653) Author: Nubabison-sama **ACT**  
- [War Princess Thousand Horsemen Chronicle](https://www.freem.ne.jp/win/game/18375) Author: Shigeking-sama **SLG**  
- [Beast Rider](https://www.freem.ne.jp/win/game/19205) Author: Minami Karasu-sama **STG**  
- [King Martin's Magic War Chronicle](https://www.freem.ne.jp/win/game/16928) Author: Minami Karasu-sama **ACT**  
- [Consciousness STAND UP](https://www.freem.ne.jp/win/game/17359) Author: Shigeking-sama **ACT**  
- [Fire Minolem](http://gasejj.wa-sanbon.com/game.html) Author: J.J.-sama **SLG**  
- [Kemono Friends Sand Star Legend](https://tears-game.jimdofree.com/games/%E3%81%91%E3%82%82%E3%81%AE%E3%83%95%E3%83%AC%E3%83%B3%E3%82%BA-%E7%A0%82%E3%81%AE%E6%98%9F%E4%BC%9D%E8%AA%AC/) Author: TEARs-sama **ACT**  
- [Secunda Second](https://www.freem.ne.jp/win/game/18432) Author: IBU-sama **STG**  
- [Monster Rip](https://www.freem.ne.jp/win/game/8659) Author: Minami Karasu-sama **ACT**  
- [Boss Battle Complex Zero](https://www.freem.ne.jp/win/game/19251) Author: IN-sama **ACT**  
- [Bullet Hell Fantastic Dreamer ~ An Ephemeral Diary](https://www.freem.ne.jp/win/game/19123) Author: SHO Games-sama **STG**  
- [Aishe-san's Running Eve](https://www.freem.ne.jp/win/game/19154) Author: Rila Icicle-sama **ACT**  
- [On-chan's Buriburi Great Adventure](https://www.freem.ne.jp/win/game/17217) Author: Onchan-man-sama **ACT**  
- [Emiri's Heart-Pounding Bakery](https://www.freem.ne.jp/win/game/18136) Author: Merufisu World-sama **ACT**  
- [Dread Red Dragon](https://www.freem.ne.jp/win/game/14903) Author: Shigeking-sama **ACT**  
- [Enri Kuri](https://freegame-mugen.jp/action/game_6780.html) Author: Hamuro-sama **ACT**  
- [Pyromancer STG](https://www.freem.ne.jp/win/game/12864) Author: Minami Karasu-sama **STG**  
- [Scarab Kid](https://www.freem.ne.jp/win/game/18656) Author: Minami Karasu-sama **ACT**  
- [Karano Hako](https://www.freem.ne.jp/win/game/17669) Author: IBU-sama **STG**  
- [Tori](https://www.freem.ne.jp/win/game/14581) Author: Solid-sama **ACT**  
- [RE: Stage 1 Complex](https://www.freem.ne.jp/win/game/16290) Author: IN-sama **ACT**  
- [Ninpū Project ~Ten Ninjas~](https://www.freem.ne.jp/win/game/14379) Author: Arata-dō-sama **ACT**  
- [Ninpū Project II ~Ninja's Rampage~](https://www.freem.ne.jp/win/game/18455) Author: Arata-dō-sama **ACT**  
- [Blue Fencer](https://www.freem.ne.jp/win/game/18189) Author: Raimonoya-sama **ACT**  
- [Nekoba 10th Anniversary Collaborative STG](https://www.freem.ne.jp/win/game/18190) Author: Raimonoya-sama **STG**  
- [Explosive Slime Shooting!](https://www.freem.ne.jp/win/game/16052) Author: Solid-sama **STG**  
- [Giant Cutter](https://www.freem.ne.jp/win/game/10544) Author: Minami Karasu-sama **STG**  
- [Ninja Mission Makai Road](https://www.freem.ne.jp/win/game/6692) Author: Minami Karasu-sama **STG**  
- [1st Boss Complex -GAMEHERO CROSSOVER-](https://www.freem.ne.jp/win/game/14754) Author: IN-sama **ACT**  
- [Dynamic Drillman](https://www.freem.ne.jp/win/game/15211) Author: IN-sama **ACT**  
- [Kerori Colorin](https://www.freem.ne.jp/win/game/7224) Author: Minami Karasu-sama **Puzzle**  
- [Sōjin Hakuma Den ~Snow Princess blooming in Summer~](https://www.freem.ne.jp/win/game/19637) Author: SHO Games-sama **STG**  
- [Tekoteko Story](https://www.freem.ne.jp/win/game/16181) Author: Toraaisu-sama **ACT**  
- [LARUA 2](https://www.freem.ne.jp/win/game/17279) Author: GUROS-sama **ACT**  
- [Guru Don!](https://www.freem.ne.jp/win/game/10200) Author: Aizawa Nanamine-sama **ACT**  
- [T/A Touhou Alternative](https://www.freem.ne.jp/win/game/14350) Author: Raimonoya-sama **STG**  
- [U〃yuuee￡`⊂re)→￡ヽ](https://www.freem.ne.jp/win/game/14359) Author: Merufisu World-sama **ACT**  
- [Spear Ball's Watermelon Splitting](https://www.freem.ne.jp/win/game/15601) Author: Rila Icicle-sama **ACT**  
- [Hakonde! Sukusuku Friends](https://tears-game.jimdofree.com/games/%E3%81%AF%E3%81%93%E3%82%93%E3%81%A7-%E3%81%99%E3%81%8F%E3%81%99%E3%81%8F%E3%83%95%E3%83%AC%E3%83%B3%E3%82%BA/) Author: TEARs-sama **ACT**  
- [Gorgeous Udon Pachi](https://www.freem.ne.jp/win/game/15014) Author: Shigeking-sama **ACT**  
- [Limiter Minute](https://www.freem.ne.jp/win/game/15353) Author: IBU-sama **STG**  
- [OVER MIND](http://www.freem.ne.jp/win/game/14440) Author: IBU-sama **STG**  
- [Marisa and Alice's Cookie Game](http://gasejj.wa-sanbon.com/game.html) Author: J.J.-sama **ACT**  
- [Aegis Kingdom Story](https://www.freem.ne.jp/win/game/13178) Author: Toraaisu-sama **SLG**  
- [Sōjin Eigetsu Roku ~Legend of Autumnal Tints~](https://www.freem.ne.jp/win/game/18588) Author: SHO Games-sama **STG**  
- [Eden Rebirth](https://www.freem.ne.jp/win/game/15075) Author: IBU-sama **ACT**  
- [Kemono Friends Welcome to Japari Park](https://tears-game.jimdofree.com/games/%E3%81%91%E3%82%82%E3%81%AE%E3%83%95%E3%83%AC%E3%83%B3%E3%82%BA-%E3%82%88%E3%81%86%E3%81%93%E3%81%9D%E3%82%B8%E3%83%A3%E3%83%91%E3%83%AA%E3%83%91%E3%83%BC%E3%82%AF%E3%81%B8/) Author: TEARs-sama **ACT**  
- [Eel Attack! ~Eel's Stress Relief Method~](https://www.freem.ne.jp/win/game/15962) Author: Shinkai Life-sama **STG**  
- [Tuna Craftsman ~Single-mindedly Gripping Tuna~](https://www.freem.ne.jp/win/game/15033) Author: Toraaisu-sama **ACT**  
- [STAR TRAVELER](https://www.freem.ne.jp/win/game/14008) Author: Fugashii-sama **STG**  
- [Ikinuki Default Action 2](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=186) Author: Yashifan-sama **ACT**  
- [Knight Act](https://www.freem.ne.jp/win/game/14405) Author: Rodriguez-sama **ACT**  
- [Helmet-ko](https://www.freem.ne.jp/win/game/16170) Author: Oshida-sama **ACT**  
- [3 brothers](https://www.freem.ne.jp/win/game/18922) Author: marillengine-sama **Horror**  
- [Onakin Cannon](https://www.freem.ne.jp/win/game/12986) Author: IN-sama **STG**  
- [Hope for the Fetus](https://freegame-mugen.jp/action/game_7424.html) Author: Hamu Manju-sama **ACT**  
- [Watatsuyo!](https://www.freem.ne.jp/win/game/14675) Author: Kamotori-sama **ACT**  
- [Sōjin Onryōden ~Nightmare of Spiritual Mansion~](https://www.freem.ne.jp/win/game/18446) Author: SHO Games-sama **STG**  
- [Sōjin Tenka Tan ~Empyreal Fantasia~](https://www.freem.ne.jp/win/game/17303) Author: SHO Games-sama **STG**  
- [Hari Tsukai](https://www.freem.ne.jp/win/game/17108) Author: Cuso-sama **Puzzle**  
- [Boku no Communication](https://www.freem.ne.jp/win/game/13256) Author: IN-sama **ADV**  
- [Alien vs Moai](https://www.freem.ne.jp/win/game/7102) Author: Minami Karasu-sama **ACT**  
- [Hero STG Legend I ~Eternal Verities ver.1.05~](https://www.freem.ne.jp/win/game/14724) Author: Solid-sama **STG**  
- [Beefsteak Mix-chan's Great Adventure](https://www.freem.ne.jp/win/game/19605) Author: Ankoku no Gomibako-sama **ACT**  
- [DEFOS](http://gomibaking.seesaa.net/article/453253103.html) Author: Ankoku no Gomibako-sama **STG**  
- [Vivid Twinkler!](https://www.freem.ne.jp/win/game/13415) Author: Nubabison-sama **STG**  
- [Amore D'arcegno](https://www.freem.ne.jp/win/game/13931) Author: Tototo-sama **STG**  
- [Fast Draw Battle Game](https://www.freem.ne.jp/win/game/19252) Author: Kata Saburo-sama **ACT**  
- [Yashiyu's Breathing Shooting](https://www.freem.ne.jp/win/game/18933) Author: Ankoku no Gomibako-sama **STG**  
- [Fierce Battle! Indomitable Papuri-chan](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=248&trview=18) Author: Hamu Manju-sama **ACT**  
- [Oyuki Who Lost Her Light Eats Hamburgers ~Yuki-nyan and Trial~](https://www.freem.ne.jp/win/game/15278) Author: Gureshin-sama **ACT**  
- [LARUA](https://www.freem.ne.jp/win/game/14572) Author: GUROS-sama **ACT**  
- [SCORPIO](https://www.freem.ne.jp/win/game/17720) Author: Kamotori-sama **STG**  
- [Okina-chan's Game -PickPocket-](https://freegame-mugen.jp/action/game_7673.html) Author: Konayuki-sama **ACT**  
- [Zakorion](https://www.freem.ne.jp/win/game/12878) Author: IN-sama **ACT**  
- [Tenko and Momo](https://www.freem.ne.jp/win/game/11848) Author: Iroha-sama **Puzzle**  
- [Collapse Curse Lasifaden](https://www.freem.ne.jp/win/game/14770) Author: UjaB-sama **ACT**  
- [Stylish Shadow Man](https://www.freem.ne.jp/win/game/13596) Author: IN-sama **ACT**  
- [Okigae Tenko](https://www.freem.ne.jp/win/game/12959) Author: Iroha-sama **ACT**  
- [Twintale](https://ameblo.jp/bsc-pcclub/entry-12330453127.html) Author: Hanoi-sama **ACT**  
- [Halloween Smash! (Tentative)](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=248&trview=104) Author: Burst Lunar-sama **ACT**  
- [Girl's Battle ~To save the family~](https://www.freem.ne.jp/win/game/16471) Author: Marginalce-sama **ACT**  
- [Yashiyu's Handgun ∞](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=179) Author: Ankoku no Gomibako-sama **ACT**  
- [Mochi Man Running!](https://www.freem.ne.jp/win/game/17497) Author: Ankoku no Gomibako-sama **ACT**  
- [Onsen Gal vs. Aliens](https://www.freem.ne.jp/win/game/14109) Author: ZATTA-sama **ACT**  
- [Trick or THREAT! Halloween Threat](https://www.freem.ne.jp/win/game/18793) Author: IBU-sama **STG**  
- [Nigeru Geru Game](https://www.freem.ne.jp/win/game/11286) Author: Kata Saburo-sama **ACT**  
- [Before Yonta-san Comes](https://www.freem.ne.jp/win/game/8140) Author: Jin-saku-sama **Horror**  
- [Chainsaw Man The ACT](https://freegame-mugen.jp/action/game_7762.html) Author: Konayuki-sama **ACT**  
- [Kemono Friends Oil Nurikko](https://www.freem.ne.jp/win/game/17969) Author: Namanukemeko-sama **Puzzle**  
- [Utsuyatsu](http://cinertia.blog.fc2.com/blog-entry-9.html) Author: C no Hito-sama **STG**  
- [Yashiyu's Bomber Badminton](https://www.freem.ne.jp/win/game/16589) Author: 5T (justAknife)-sama **ACT**  
- [Real Death Game](https://freegame-mugen.jp/action/game_7578.html) Author: Konayuki-sama **ACT**  
- [Panic Dungeon](https://www.freem.ne.jp/win/game/14964) Author: Rodriguez-sama **ACT**  
- [Yashiyu's Fantastic Extremely Difficult Action](https://www.freem.ne.jp/win/game/19651) Author: 5T (justAknife)-sama **ACT**  
- [One-Man Stress](https://www.freem.ne.jp/win/game/17051) Author: Cuso-sama **Puzzle**  
- [Sugino Mito Guides Participants Game](https://freegame-mugen.jp/action/game_7258.html) Author: Konayuki-sama **ACT**  
- [Yashiyu's Basic Action New](https://www.freem.ne.jp/win/game/15484) Author: 5T (justAknife)-sama **ACT**  
- [Whip Negi Birthday](https://www.freem.ne.jp/win/game/15512) Author: Light-sama **ACT**  
- [Bell☆Pachi](https://freegame-mugen.jp/puzzle/game_7657.html) Author: Hamu Manju-sama **Puzzle**  
- [Onee-san to Isso!](https://freegame-mugen.jp/action/game_7248.html) Author: Konayuki-sama **ACT**  
- [Fudou King's Interesting Game (lol)](http://dragonyamiyona.yumenogotoshi.com/homupe/game/hudouou/top.html) Author: Dragon Hacker-sama **ACT**  
- [SASUKE -ACTION EDITOR-](https://www.freem.ne.jp/win/game/15799) Author: 5T (justAknife)-sama **ACT**  
- [SPECTER](https://freegame-mugen.jp/shooting/game_6221.html) Author: Konayuki-sama **STG**  
- [Code:D MadGear](https://www.freem.ne.jp/win/game/18153) Author: Onihime-sama **ACT**  
- [Yashiyu SASUKE 3rd Tournament Early Spring 2017](https://www.freem.ne.jp/win/game/14299) Author: 5T (justAknife)-sama **ACT**  
- [Yashiyu and the False Demon King](https://www.freem.ne.jp/win/game/14521) Author: 5T (justAknife)-sama **ACT**  
- [Kerokero Kero](https://www.freem.ne.jp/win/game/8451) Author: Iroha-sama **Puzzle**  
- [Momiji Musou](https://www.freem.ne.jp/win/game/15140) Author: Iroha-sama **ACT**  
- [Rampaging Sanae-san](https://www.freem.ne.jp/win/game/13511) Author: Iroha-sama **ACT**  
- [Yashiyu Challenges the Path to Fighting King 2](https://www.freem.ne.jp/win/game/18960) Author: Irosma RPG Production Committee-sama **ACT**  
- [Kirby 52](https://freegame-mugen.jp/action/game_6617.html) Author: Rusi-sama **ACT**  
- [Kipa Kipa 3](http://www.freem.ne.jp/win/game/14855) Author: Yapayapa-sama **STG**  
- [Bellbell Paradise! Hard ver](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=248&trview=132) Author: Yapayapa-sama **ACT**  
- [Yashiyu's Irosma Adventure](https://www.freem.ne.jp/win/game/18822) Author: Irosma RPG Production Committee-sama **ACT**  
- [Serval-chan's Bell Dodging](https://freegame-mugen.jp/action/game_7608.html) Author: d-sama **ACT**  
- [SIMPLE LIFE](https://www.freem.ne.jp/win/game/19459) Author: Shigeking-sama **ACT**  
- [Jinao Island Capture Story](https://www.freem.ne.jp/win/game/17100) Author: Two-sama **ACT**  
- [Hyper Mario-esque 3](https://freegame-mugen.jp/action/game_7737.html) Author: Sety-sama **ACT**  
- [Hyper Mario-esque 2](https://freegame-mugen.jp/action/game_7540.html) Author: Sety-sama **ACT**  
- [Good Luck Papuri-chan!](https://www.freem.ne.jp/win/game/15354) Author: Yapayapa-sama **ACT**  
- [Good Luck Papuri-chan! 3](https://www.freem.ne.jp/win/game/15613) Author: Yapayapa-sama **STG**  
- [BARRAGE UNIVERSE](https://www.freem.ne.jp/win/game/17276) Author: Nuaa-sama **ACT**  
- [COLLECTING JEWELS](https://www.freem.ne.jp/win/game/17496) Author: Nuaa-sama **ACT**  
- [Hitobito-kun's Lets Go! Action](https://www.freem.ne.jp/win/game/18477) Author: Lithium Games-sama **ACT**  
- [Yashiyu's Great Adventure 2](https://www.freem.ne.jp/win/game/11244) Author: Yaiyu-sama **ACT**  
- [Xmas tree ~I want to decorate this tree with wonderful things~](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=248&trview=120) Author: UjaB-sama **ACT**  
- [Kaban-chan's Jump Heaven](https://freegame-mugen.jp/action/game_6052.html) Author: Konayuki-sama **ACT**  
- [Made in Maid The Out of Heaven](https://www.freem.ne.jp/win/game/19453) Author: Dengen Kizou.MIN-sama **ACT**  
- [Build and Crush 2](https://www.freem.ne.jp/win/game/17967) Author: Dengen Kizou.MIN-sama **Puzzle**  
- [SUPRA YASYUI](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=248&trview=25) Author: Li-sama **ACT**  
- [Fleeing in School!](https://www.freem.ne.jp/win/game/16092) Author: Yaiyu-sama **ACT**  
- [Yashiyu Sports](https://www.freem.ne.jp/win/game/13054) Author: Yaiyu-sama **ACT**  
- [Yaniyu Race](https://www.freem.ne.jp/win/game/13322) Author: Yaiyu-sama **ACT**  
- [Rejiyashi World XX](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=160) Author: Saiumi-sama **STG**  
- [Small Room Sake](http://hiyokko.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=173) Author: Saiumi-sama **ACT**  
- [Game That Shortens Your Life By 10 Years](http://www.mediafire.com/file/uboutw9i3q0w6rm/10shrink_ver1.05.zip) Author: Pablian-sama **ACT**  
- [Shadow World](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=248&trview=3) Author: dyyosi-sama **ACT**  
- [Kaze-Yu](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=248&trview=62) Author: Tsurupage Maru-sama **ACT**  

Registered: 2016/12/31  

- [Bean Sprout Story](http://gasejj.wa-sanbon.com/game.html) Author: [J.J.-sama](http://gasejj.wa-sanbon.com/)  
- [Run! Mono-kun](http://www.freem.ne.jp/win/game/12843) Author: [IBU-sama](https://www.freem.ne.jp/brand/6843)  
- [Rope Action Ninja: Black Skull of the Reversed Nation](https://www.freem.ne.jp/win/game/13609) Author: [Namanukemeko-sama](https://www.freem.ne.jp/brand/7134)  
- [Fly! Momo-chan VS Flying Student Council](http://www.freem.ne.jp/win/game/11865) Author: [Tototo-sama](http://tototoworld.web.fc2.com/)  
- [Colortype](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=72) Author: [Rutlδ-sama](http://derutadaiki.ko-me.com/)  
- [Axe Throwing Girl](http://www.freem.ne.jp/win/game/12399) Author: [Oshida-sama](http://woshida.web.fc2.com/)  
- [Eveblock!](http://ux.getuploader.com/hasutya_game/download/31/EP1.zip) Author: [Hasutya-sama](http://hasutya.web.fc2.com/index.html)  
- [MessageBottle](http://ujab.web.fc2.com/m_bottle.html) Author: [UjaB-sama](http://ujab.web.fc2.com/)  
- [Villagers and Splitting Yashiyu](http://www.freem.ne.jp/win/game/13407) Author: [5T (justAknife)-sama](http://www.freem.ne.jp/brand/6225)  
- [MegaBuro](http://gasejj.wa-sanbon.com/game.html) Author: [J.J.-sama](http://gasejj.wa-sanbon.com/)  
- [W.A.T.C.H.Z.E.R.O ~Watch Zero~](http://www.freem.ne.jp/win/game/13308) Author: [Arata-dō-sama](http://allansinho2000.blog.fc2.com/)  
- [MONOCHROMEDOTES the diary](https://www.freem.ne.jp/win/game/14117) Author: [GOLDEN'S-sama](https://www.freem.ne.jp/brand/7327)  
- [Space Soldier Y-05 "Kai"](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=144) Author: @-sama  
- [Legend of Yashiyu Gaiden: Ninja](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=115) Author: Saiumi-sama  
- [Agore's Diary](http://ujab.web.fc2.com/ago-ru.html) Author: [UjaB-sama](http://ujab.web.fc2.com/)  
- [Everlasting Summer World and Evil Spirits of Otherworld](http://www.freem.ne.jp/win/game/12948) Author: [Two-sama](http://www.freem.ne.jp/brand/6740)  
- ~~Hunger-type Space Drifting Paper Bag Johnny~~ Author: ~~Clarichid-sama~~  
- [Yashiyu Boss Battle](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=155) Author: dyyosi-sama  

Registered: 2016/6/12  

- [Momohime](http://www.freem.ne.jp/win/game/6438) Author: [Omizu-sama](http://www.freem.ne.jp/brand/2817)  
- [Touhou Nekobageki](http://leimon.web.fc2.com/tohong/index.htm) Author: [Raimonoya-sama](http://leimon.web.fc2.com/)  
- [Stage 1 Complex](http://www.freem.ne.jp/win/game/11768) Author: [IN-sama](https://twitter.com/blackgoosenext)  
- [Puzzle Yashiyu's Story](http://garibone.blog.fc2.com/blog-entry-71.html) Author: [Garibone-sama](https://twitter.com/garibone0128)  
- [DODGE UPGRADE](http://www.freem.ne.jp/win/game/9786) Author: [IN-sama](https://twitter.com/blackgoosenext)  
- [Rolpan Senpai](http://www.freem.ne.jp/win/game/11294) Author: [Merufisu World-sama](http://579085.web.fc2.com/index.html)  
- [Jorei-san](https://www.freem.ne.jp/win/game/11438) Author: [coolstep-sama](https://www.freem.ne.jp/brand/1593)  
- [Daifuku -Daifuku-](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=25) Author: Solid-sama  
- [Eltitnu](http://www.freem.ne.jp/win/game/11616) Author: [Chuzume-sama](https://www.freem.ne.jp/brand/2958)  
- [Broken Banana Clip Just Wanted to Sing of Ordinary Happiness](http://tototoworld.web.fc2.com/banana.html) Author: [Tototo-sama](http://tototoworld.web.fc2.com/)  
- [Action Editor 4 Unofficial Sample Game](http://www.freem.ne.jp/win/game/11337) Author: [marupon-sama](http://www.freem.ne.jp/brand/6135)  
- [Tamaru de GO!](http://www.freem.ne.jp/win/game/10511) Author: [Merufisu World-sama](http://579085.web.fc2.com/index.html)  
- [GO!GO!HERO!](http://www.freem.ne.jp/win/game/10846) Author: [Shigeking-sama](http://shigekingx.web.fc2.com/)  
- [World Fallen into Darkness](http://ujab.web.fc2.com/yamioti.html) Author: [UjaB-sama](http://ujab.web.fc2.com/)  
- [Lunatics' Banquet](http://ujab.web.fc2.com/kyoujin.html) Author: [UjaB-sama](http://ujab.web.fc2.com/)  
- [Desire 2](http://www.freem.ne.jp/win/game/10759) Author: [Sole-sama](https://www.freem.ne.jp/brand/5062)  
- [Like Default](http://www.freem.ne.jp/win/game/10570) Author: [Chuzume-sama](https://www.freem.ne.jp/brand/2958)  
- [Easter Egg Hunter](http://www.freem.ne.jp/win/game/11517) Author: [IN-sama](https://twitter.com/blackgoosenext)  
- [X'mas WAR](http://www.freem.ne.jp/win/game/10785) Author: [IN-sama](https://twitter.com/blackgoosenext)  
- [Hero STG Legend II ~Nuisance Square~](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=84) Author: Solid-sama  
- [Rui Game 3](http://www.freem.ne.jp/win/game/8831) Author: [Merufisu World-sama](http://579085.web.fc2.com/index.html)  
- [HALLOWEEN BLOCK](http://www.freem.ne.jp/win/game/10376) Author: [IN-sama](https://twitter.com/blackgoosenext)  
- [Donran Ukitsune](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=26) Author: C no Hito-sama  
- [W.A.T.C.H2~Watch2~](http://www.freem.ne.jp/win/game/10445) Author: [Arata-dō-sama](http://allansinho2000.blog.fc2.com/)  
- [W.A.T.C.H~Watch~](http://www.freem.ne.jp/win/game/10117) Author: [Arata-dō-sama](http://allansinho2000.blog.fc2.com/)  
- [NIGHTMARE SURVIVOR](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=75) Author: [Miser-sama](http://spirea3cross.wix.com/citadel)  
- [Mass Attack!! ~Calculate Master~](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=92) Author: Solid-sama  
- [Yashiyu Virtual World](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=63) Author: [Gomibako-sama](http://gomibaking.seesaa.net/)  
- [Yashiyu vs. Demon](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=89) Author: [Gomibako-sama](http://gomibaking.seesaa.net/)  

Registered: 2015/7/19  

- [Moomoo's Action 3](https://sites.google.com/site/akusyonngemuyamumu/mumunoakushon3) Author: [mumimumi-sama](https://sites.google.com/site/akusyonngemuyamumu/home)  
- [TOFU ADVENTURE](http://www.freem.ne.jp/win/game/8751) Author: [studioBYP-sama](http://studiobyp.wix.com/index)  
- [Floral symphony Complete Version](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=44) Author: [Rila Icicle-sama](http://iciclerab.sakura.ne.jp/)  
- [Lamenting Paradise](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=46) Author: [Naru-sama](http://naaaaaru.blog.fc2.com/)  
- [Belladonna](http://www.freem.ne.jp/win/game/8210) Author: [Hage-sama](http://www.freem.ne.jp/brand/4729)  
- [50 -FIFTY-](http://www.freem.ne.jp/win/game/8934) Author: Aizawa-san-sama  
- [Future Orchestra Groovio](http://www.freem.ne.jp/win/game/8982) Author: [coolstep-sama](https://www.freem.ne.jp/brand/1593)  
- [Full Moon in Thorn Valley](http://www.freem.ne.jp/win/game/8625) Author: [Hage-sama](http://www.freem.ne.jp/brand/4729)  
- [After School Exorcist Kaede-chan](http://www.freem.ne.jp/win/game/8220) Author: [Oshida-sama](http://woshida.web.fc2.com/)  
- ~~Tiger Cat Field~~ Author: [Hoshi no Moto-sama](http://www.freem.ne.jp/brand/3216)  
- [Demon Emperor Slayer Sword](http://ujab.web.fc2.com/matei.html) Author: [UjaB-sama](http://ujab.web.fc2.com/)  
- [Trial Sealer](http://dragonyamiyona.yumenogotoshi.com/homupe/game/huin/top.html) Author: [Dragon Hacker-sama](http://dragonyamiyona.yumenogotoshi.com/)  
- [Fruit of Bewilderment Dreaming After School](http://hiyokko.sakura.ne.jp/TOF2014kaijo.html) Author: Muteppan-sama  
- [Indigo Legend](http://hiyokko.sakura.ne.jp/TOF2014kaijo.html) Author: [JIN-sama](http://www.freem.ne.jp/brand/2878)  
- [Rooftop! ~My Bento Plan~ [Retake Version]](http://www.freem.ne.jp/win/game/10302) Author: [Toraaisu-sama](http://www.freem.ne.jp/brand/5263)  
- [YS2 (Yashiyu Shooting)](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=196) Author: Neko Mute-sama  
- [City Assault Humanoid Weapon Gaianner α.ver (Prototype 1)](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=270) Author: GGGG-sama  
- [CORE ZERO](http://www.freem.ne.jp/win/game/8103) Author: [Itansha-sama](http://www.amigo2.ne.jp/~t-rex/)  
- [Time Killer Game Version 2](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=290) Author: [Hatarakanai Byoushin-sama](http://hatarake-byoshin.hateblo.jp/)  
- [Spring-kun](http://hatarake-byoshin.hateblo.jp/entry/2015/06/06/094801) Author: [Hatarakanai Byoushin-sama](http://hatarake-byoshin.hateblo.jp/)  
- [Extreme Laziness](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=2) Author: [Hatarakanai Byoushin-sama](http://hatarake-byoshin.hateblo.jp/)  
- [Desire](http://www.freem.ne.jp/win/game/8907) Author: [Sole-sama](https://www.freem.ne.jp/brand/5062)  
- [Sheep and Cat](http://www.freem.ne.jp/win/game/8330) Author: [Hoshi no Moto-sama](http://www.freem.ne.jp/brand/3216)  
- [Ikinuki Defo-Act](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=26) Author: [Yashifan-sama](http://blog.livedoor.jp/yuu_lampay/)  
- [Demon King Defeating Shooting](http://hiyokko.sakura.ne.jp/TOF2014kaijo.html) Author: [Kamiya-sama](http://ueumimagatoro.web.fc2.com/)  
- [Rumaribi Hariri](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=45) Author: 3-sama  
- [Orina Series Chapter 2: Ms. Apple Army's Counterattack](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=36) Author: [Marginalce-sama](http://magearus.sitemix.jp/)  
- [I_WANNA_BE_THE_ACTION_EDITOR](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=284) Author: Altur Ride-sama  

Registered: 2014/12/14  

- [Tiger Cat Hero](http://www.freem.ne.jp/win/game/7431) Author: [Hoshi no Moto-sama](http://www.freem.ne.jp/brand/3216)  
- [Tiger Cat Skyer](http://www.freem.ne.jp/win/game/5495) Author: [Hoshi no Moto-sama](http://www.freem.ne.jp/brand/3216)  
- [Invincible Escorter](http://www.freem.ne.jp/win/game/6443) Author: [Yamipaseri-sama](http://yamipaseri.blog.fc2.com/)  
- [Hero of Fur](http://www.freem.ne.jp/win/game/6224) Author: [Fuyaramo-sama](http://www.freem.ne.jp/brand/3560)  
- [Silver Ninja](http://www.freem.ne.jp/win/game/6491) Author: [meta-sama](http://usumeta.exblog.jp/)  
- [Beta Blade](http://www.freem.ne.jp/win/game/7767) Author: [meta-sama](http://usumeta.exblog.jp/)  

Registered: 2014/10/29  

- [Spinning Burst](http://www.freem.ne.jp/win/game/7738) Author: [coolstep-sama](https://www.freem.ne.jp/brand/1593)  
- [Yuusei no Solferium 1 Kai](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=262) Author: [Neo Namazu-sama](http://osakanacatfish.jimdo.com/)  
- [Yashiyu and Dream Dream](http://ueumimagatoro.web.fc2.com/dreamdream.html) Author: [Kamiya-sama](http://ueumimagatoro.web.fc2.com/)  
- [Orina Series Chapter 1](http://magearus.sitemix.jp/game02.htm) Author: [Marginalce-sama](http://magearus.sitemix.jp/)  
- [Minazuki Ringo ~Legend of the Strongest Female Ninja~](http://www.freem.ne.jp/win/game/6857) Author: [Arata-dō-sama](http://allansinho2000.blog.fc2.com/)  
- [Miniature Squadron Deformer Rangers](http://www.freem.ne.jp/win/game/6897) Author: [Arata-dō-sama](http://allansinho2000.blog.fc2.com/)  
- [Delta's Adventure: Revenge of the Former Demon King](http://magearus.sitemix.jp/game01.htm) Author: [Marginalce-sama](http://magearus.sitemix.jp/)  
- [Ars's Adventure Side Story: Brutal Play Legend](http://magearus.sitemix.jp/game01.htm) Author: [Marginalce-sama](http://magearus.sitemix.jp/)  
- [Wandering Gunman](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=235) Author: YUK-sama  

Registered: 2014/5/31  

- [PANDARA ~Pandara~ (Paid, Trial Available)](http://www.dlsite.com/home/work/=/product_id/RJ127994.html) Author: [Raimonoya-sama](http://leimon.web.fc2.com/)  

Registered: 2014/5/25  

- [Magnerillon](https://www.freem.ne.jp/win/game/6338) Author: [coolstep-sama](https://www.freem.ne.jp/brand/1593)  
- [Captain Robinson](http://www.freem.ne.jp/win/game/6735) Author: [Oshida-sama](http://woshida.web.fc2.com/)  
- [1 Technique 1 Goal](http://hatarake-byoshin.hateblo.jp/entry/2014/05/03/084228) Author: [Hatarakanai Byoushin-sama](http://hatarake-byoshin.hateblo.jp/)  
- [YS (Yashiyu Shooting)](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=195) Author: Nneko-sama  
- [Ars's Adventure II: Mystery Dragon and 7 Orbs](http://magearus.sitemix.jp/game.htm) Author: [Marginalce-sama](http://magearus.sitemix.jp/)  
- [Girl and Sweet Spring ~Spring~](http://hatarake-byoshin.hateblo.jp/entry/2014/04/01/093635) Author: [Hatarakanai Byoushin-sama](http://hatarake-byoshin.hateblo.jp/)  

Registered: 2014/2/23  

- [Sengoku Mubou](https://www.freem.ne.jp/win/game/6305) Author: [Shigeking-sama](http://shigekingx.web.fc2.com/)  
- [Moomoo's Action 2](https://sites.google.com/site/akusyonngemuyamumu/mumunoakushon2) Author: [mumimumi-sama](https://sites.google.com/site/akusyonngemuyamumu/home)  
- [Eveblock S](http://hasutya.web.fc2.com/game/EveProckSuper/top.html) Author: [Hasucha-sama](http://hasutya.web.fc2.com/)  
- [CaraCuriCarnival](http://stcworks.web.fc2.com/game.htm) Author: [Zarusoba-sama](http://stcworks.web.fc2.com/)  
- [Ars's Adventure I: Revival of the Evil God and Father's Mystery](http://magearus.sitemix.jp/game.htm) Author: [Marginalce-sama](http://magearus.sitemix.jp/)  
- [Space Soldier Y-05](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=161) Author: Omame-kun-sama  
- [Action Editor + TC](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=148) Author: Rejiyashi Ninja Author-sama  

Registered: 2013/12/30  

- [Brian's Adventure ~Castle of Illusion~](http://www.freem.ne.jp/win/game/5828) Author: [Otoka-sama](http://otokamgarage.web.fc2.com/)  
- [Monster Buster 1.5](http://www.freem.ne.jp/win/game/5653) Author: Omizu-sama  
- [TANKO](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=88) Author: Namanukemeko-sama  
- [Fudo's Ambition](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=130) Author: [Naru-sama](https://twitter.com/naa_ru)  
- [Colorful☆Shooting](http://www.freem.ne.jp/win/game/5636) Author: Zazabone-sama  
- [Yashiyu's Retro Action](http://hatarake-byoshin.hateblo.jp/entry/2013/10/25/202012) Author: [Hatarakanai Byoushin-sama](http://hatarake-byoshin.hateblo.jp/)  
- [Yashiyu's Variety Game](http://ueumimagatoro.web.fc2.com/yashibara.html) Author: [Kamiya-sama](http://ueumimagatoro.web.fc2.com/)  
- [Moomoo's Super Action Game](http://hiyokko.sakura.ne.jp/tof_kari.html) Author: [mumimumi-sama](https://sites.google.com/site/akusyonngemuyamumu/home)  
- [★★★★★](http://www.freem.ne.jp/win/game/5792) Author: Fuon-sama  
- [Spirit Kuri](http://www.freem.ne.jp/win/game/5925) Author: JIN-sama  
- [Trick or Treat](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=114) Author: [Garibone-sama](http://garibone.blog.fc2.com/)  

Registered: 2013/9/22  

- [Shrine Story ~Prologue~](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=68) Author: Shrine Regular All-Stars-sama  
- [Daryashi's Counterattack](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=342) Author: [Asatsuki-sama](http://asatsuki.blog-fps.com/)  
- [Magic Stone and Evil Spirits](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=6) Author: Kouki-sama  
- [Pendii](http://www.freem.ne.jp/win/game/5442) Author: [Oshida-sama](http://woshida.web.fc2.com/)  
- [Yashiyu's Absurdity](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=12) Author: JIN-sama  
- [Challenge Only Yashiyu's Shooting Gradius Edition ☆](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=318) Author: Omame-kun-sama  
- [Tategami Yuusha Den Gaiden -BulletHell Challenger-](http://threesgame.web.fc2.com/games_5.html) Author: [Tategami Yuusha Den Production Committee-sama](http://threesgame.web.fc2.com/index.html)  
- [Dangerous Guy](https://www.vector.co.jp/soft/winnt/game/se504737.html) Author: [coolstep-sama](http://rakusuta.web.fc2.com/)  
- [Inishie](http://comcell1.web.fc2.com/games/walkthru/inishie_readme.html) Author: [Tonya-sama](https://twitter.com/_xxxdugong)  
- [Eveblock 2](http://hasutya.web.fc2.com/game/EveProck2/top.html) Author: [Hasucha-sama](http://hasutya.web.fc2.com/)  
- [Onmyouji Yashiyu](http://yasifan.web.fc2.com/innyousi.html) Author: [Onmyouji Yashiyu Production Committee-sama](http://yasifan.web.fc2.com/)  
- ~~Dalliyu~~ Author: ~~dosugoge-sama~~  
- [Defence the Earth](http://hiyokko.sakura.ne.jp/tof_kari.html) Author: [Robozaru-sama](http://robrabo.gg-blog.com/)  
- [super Obese bros.](http://hiyokko.sakura.ne.jp/tof_kari.html) Author: [Namazu-sama](http://osakanacatfish.jimdo.com/)  
- [Robot-kun Saves the World](http://hiyokko.sakura.ne.jp/tof_kari.html) Author: Muteppan-sama  

Registered: 2013/7/15  

- [Card Eliminater](http://www.geocities.jp/flatk_fullswitch/ce.html) Author: [K_-sama](http://www.geocities.jp/flatk_fullswitch/index.html)  

Registered: 2013/6/30  

- [Legend of Yashiyu Made in AcEdi](http://dragonyamiyona.yumenogotoshi.com/homupe/game/lyRPG/top.html) Author: [Dragon Hacker-sama](http://dragonyamiyona.yumenogotoshi.com/)  
- [Gekioko Punpunmaru FROM AKUEDHI](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=195) Author: Chuzume-sama  
- [Moomoo's Action](https://sites.google.com/site/akusyonngemuyamumu/iide) Author: [mumimumi-sama](https://sites.google.com/site/akusyonngemuyamumu/home)  
- [Boxing to the Ring](http://hspboxinggame.blogspot.jp/2013/06/blog-post.html) Author: [Sandbag-sama](http://www7a.biglobe.ne.jp/~BOXCITY/m/src/)  
- [Kunoichi Momiji](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=208) Author: JIN-sama  
- [Monochrome Great Adventure](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=210) Author: JIN-sama  
- [Rockman VS Yashiyu](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=180) Author: No Farther-sama  

Registered: 2013/4/29  

- [Monster Buster](http://www.freem.ne.jp/win/game/4861) Author: Omizu-sama  
- [Weapon Shop Akane](http://www.freem.ne.jp/win/game/4343) Author: Biririn-sama  
- [Fruit Panic](http://www.freem.ne.jp/win/game/4756) Author: Biririn-sama  
- [Lunatics' Banquet ~Sword's Lament~](http://www.freem.ne.jp/win/game/4977) Author: [UjaB-sama](http://ujab.web.fc2.com/)  
- [Garden of Gold](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=93) Author: [Naru-sama](http://twitter.com/naa_ru)  
- [Ball Defense](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=73) Author: Kouki-sama  
- [mono-](http://www.freem.ne.jp/win/game/4971) Author: [Itansha-sama](http://www.amigo2.ne.jp/~t-rex/)  
- [ActionEditorDrums2](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=57) Author: [Asatsuki-sama](http://asatsuki.blog-fps.com/)  
- [iiii](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=149) Author: [Meccani-sama](http://blog.goo.ne.jp/mini4-dangan)  

Registered: 2012/12/31  

- [TOWER DEFENDER](http://dragonyamiyona.yumenogotoshi.com/homupe/game/td/top.html) Author: [Dragon Hacker-sama](http://dragonyamiyona.yumenogotoshi.com/)  
- [NO NAME HERO'S ~SECOND SEASON~](http://dragonyamiyona.yumenogotoshi.com/homupe/game/nnh2/nnh2.html) Author: [Dragon Hacker-sama](http://dragonyamiyona.yumenogotoshi.com/)  
- [Eve*Block](http://hasutya.web.fc2.com/game/portal.html) Author: [Hasucha-sama](http://hasutya.web.fc2.com/index.html)  
- [Lunatics' Banquet ~Chaos and Evil Justice~](http://www.freem.ne.jp/win/game/4387) Author: [UjaB-sama](http://ujab.web.fc2.com/)  
- [Robozaru vs. Demon World Alliance](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=16) Author: [Robozaru-sama](http://robrabo.gg-blog.com/)  
- [Royal Hero ~Chapter 1~](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=17) Author: [Robozaru-sama](http://robrabo.gg-blog.com/)  
- [THE SHOOTING](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=18) Author: [Robozaru-sama](http://robrabo.gg-blog.com/)  
- [Waterfall of legend](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=9) Author: Taki no Nushi-sama  
- [Galaxy Marc](http://ameblo.jp/rusisi/entry-11264231802.html) Author: [Lucy-sama](http://profile.ameba.jp/rusisi/)  
- [YASHIYU BROS.](http://materialfactory.ikaduchi.com/game/YBros/) Author: [Asatsuki-sama](http://asatsuki.blog-fps.com/)  
- [Yashiyu's Bullet Hell](http://ueumimagatoro.web.fc2.com/yashidan.html) Author: [Kamiya-sama](http://ueumimagatoro.web.fc2.com/)  

Registered: 2012/10/20  

- [Tategami Yuusha Den II -Immortal Cave Explorers-](http://threesgame.web.fc2.com/games_4.html) Author: [3Sthrees-sama](http://threesgame.web.fc2.com/index.html)  
- [Kyoma](http://garibone.blog.fc2.com/blog-entry-28.html) Author: [Garibone-sama](http://garibone.blog.fc2.com/)  

Registered: 2012/9/16  

- [Shikakui Yatsu 4](https://www.vector.co.jp/soft/winnt/game/se499360.html) Author: [coolstep-sama](http://rakusuta.web.fc2.com/)  
- [Small Great War](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=279) Author: Nob-sama  

Registered: 2012/7/22  

- [Ryūsei Boushitsukai](http://ux.getuploader.com/knoll/download/2/%E7%AB%9C%E6%98%9F%E5%BF%98%E5%A4%B1%E7%95%8C.zip) Author: Knoll-sama  
- [Yashiyu Boss The Fighting](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=230) Author: ZERO★ZERO-sama  
- [JEWEL BREAKER](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=229) Author: Muteppan-sama  
- [Action Max](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=227) Author: PontaroZ-sama  
- [Default Character's 50 Floor Dungeon](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=219) Author: Kouki-sama  
- [Stealth](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=197) Author: NEET Byoushin-sama  
- [Jigoku Lucky](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=195) Author: ZERO★ZERO-sama  

Registered: 2012/5/31  

- [THE SOGEKI](http://www5.hp-ez.com/hp/rapsibu/sogeki) Author: [Pork-sama](http://www5.hp-ez.com/hp/rapsibu/page1)  

Registered: 2012/5/25  

- [Shooting](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=170) Author: Nob-sama  
- [Open the Door to the Top Floor](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=96) Author: Sakukyabe-sama  
- [ZEKIMES Blue](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=57) Author: ZERO★ZERO-sama  
- [Marine Treasure](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=35) Author: ZERO★ZERO-sama  

Registered: 2012/4/5  

- [Great Explosion Battle Brothers Bomber Battle Brothers](http://hasutya.web.fc2.com/game/portal.html) Author: [Hasucha-sama](http://hasutya.web.fc2.com/index.html)  
- [Yashiyu's Best(?) Action](http://yasifan.web.fc2.com/bestaction.html) Author: [Yashifan-sama](http://yasifan.web.fc2.com/)  
- [LANCE GANCE REVOLUTION](http://dragonyamiyona.yumenogotoshi.com/homupe/game/lar/lar.html) Author: [Dragon Hacker-sama](http://dragonyamiyona.yumenogotoshi.com/)  
- [The Block World!](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=26) Author: Shinbunshi-sama  
- [Breaker](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=16)Author: ZERO★ZERO
- [Yash and the battle of time](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=45)Author: Good luck
- [Yasir's journey](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=398)Author: Oxiride

Registered: Before 4/5/2012

- ~~すしげったー~~Author:~~coolstep様~~
- [Ultimate! VS Yasille Family](http://yasifan.web.fc2.com/kyuukyoku.html)Author:[Mr. Yashifan](http://yasifan.web.fc2.com/)
- [Shining Vega](http://www1.axfc.net/uploader/Li/so/121435)Author: Leaf-sama
- [Youma Ninpocho](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=332)Author: Hisashi-sama
- [WHITE CRISIS](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=311)Author: Nob
- [RainForce](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=290)Author: Mr. Altl Ryde
- [Iasi～yu action!](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=38)Author: Oxiride
- [Touhou Genyuumu](http://thexr.ho-zuki.com/)Author:[Five-layer washing machine](http://thexr.ho-zuki.com/)
- [Super Kunoichi Murasaki](http://leimon.web.fc2.com/superk/)Author:[Mr. Reimonya](http://leimon.web.fc2.com/)
- [The second vertical scrolling legend](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=272)Author: Orange hat child
- [It's the default character! All together!](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=267)Author: The northernmost hilloppy
- [Brave Gorseph](http://woshida.web.fc2.com/golsef.html)Author:[Mr. Woshida](http://woshida.web.fc2.com/)
- [Revenge of Dark Yasir Very Easy Version](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=299)Author: Garibone
- [Pokemon barrage](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=260)Author: Zazabon
- [Monster quest](http://www.freem.ne.jp/game/win/g03569.html)Author:[Iwawo Kobo](http://53751241.at.webry.info/)
- [Lion man](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=258)Author: Mr. Eshikohan
- [Seven people fight to the death](http://ujab.web.fc2.com/sevenhumanbr.html)Author:[Mr. Uja B](http://ujab.web.fc2.com/)
- [Operation-STG](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=243)Author:[Mr. Altru Ryde](http://arutoru.blog46.fc2.com/)
- [Sealed secret](http://dragonyamiyona.yumenogotoshi.com/homupe/game/ss/ss.html)Author:[Dragon hacker](http://dragonyamiyona.yumenogotoshi.com/)
- [Machine Shock V2](http://www.freem.ne.jp/game/win/g03456.html)Author:[Mr. Otokam](http://otokamgarage.web.fc2.com/)
- [Simpler World](http://threesgame.web.fc2.com/games_3.html)Author:[Dear 3Sthrees](http://threesgame.web.fc2.com/index.html.html)
- [Yashiyu's ordinary action](https://www.freem.ne.jp/win/game/3415)Author:[Mr. Lutigel](https://www.freem.ne.jp/brand/974)
- [Demons Castle](https://www.freem.ne.jp/win/game/3420)Author:[Mr. Otokam](http://otokamgarage.web.fc2.com/)
- ~~夢巡り~~Author:~~ぴけぴけ様~~
- ~~ちょっとしかくいやつ~~Author:~~coolstep様~~
- ~~アルバとラス~~Author:[Mr. Reimonya](http://leimon.web.fc2.com/)
- [Alpha Plus](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=192)Author:[Mr. Altru Ryde](http://arutoru.blog46.fc2.com/)
- [Phantom Thief Brain](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=189)Author: Kinokosaikyou
- [StickMan FightTime](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=191)Author: Yashifan
- [Legendary Dandelion RE](https://www.freem.ne.jp/win/game/3349)Author:[Lady Lila Icicle](http://iciclerab.sakura.ne.jp/)
- [Green runner](https://leimonz.itch.io/gr)Author:[Mr. Reimonya](http://leimon.web.fc2.com/)
- ~~もっとしかくいやつ~~Author:~~coolstep様~~
- [Barrage of Vs machines](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=151)Author:[Mr. Altru Ryde](http://arutoru.blog46.fc2.com/)
- [Destroy xie jiao!](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=166)Author: Kouki
- [Muscle festival](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=147)Author: Phantom Y
- [Battle Phase](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=105)Author:[Mr. Altru Ryde](http://arutoru.blog46.fc2.com/)
- [Legendary clubman](http://dragonyamiyona.yumenogotoshi.com/homupe/game/denkon/top.html)Author:[Dragon hacker](http://dragonyamiyona.yumenogotoshi.com/)
- [Aquedius](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=351)Author: Nob
- [Traveler Yasir](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=55)Author:[Mr. Akameshi](http://akamesiblog.blog22.fc2.com/)
- [ARMORD WARRIOR](https://www.freem.ne.jp/win/game/3052)Author:[Mr. Otokam](http://otokamgarage.web.fc2.com/)
- ~~しかくいやつ~~Author:~~coolstep様~~
- [Simple shooter](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=45)Author: Nob
- [vs default character Danmaku 2 (easy)](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=104)Author: The northernmost hilloppy
- [ANOTHER SHOGATSU](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=36)Author: Phantom Y
- [Hunters](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=20)Author: Gonta
- ["My City" Chapter 1](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=23)Author:[Dear Giko](http://gikogame.jugem.jp/)
- [Stickman action](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=19)Author:[Mr. Altru Ryde](http://arutoru.blog46.fc2.com/)
- [Rusbel](http://woshida.web.fc2.com/rusbell.html)Author:[Mr. Woshida](http://woshida.web.fc2.com/)
- ~~evolution sword~~Author:~~coolstep様~~
- [vs. Barrage of default characters](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=52&trview=416)Author: The northernmost hilloppy
- [The Legend of Yasir ～Ruler of Time～](http://tonyation.web.fc2.com/games/loy_tr/loy_tr_gamepage1.html)Author:[Mr. Tonya](https://twitter.com/_xxxdugong)
- [Legend of Hero Yashiyu](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=52&trview=371)Author: Yashifan
- [AIRFORCE2](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=52&trview=360)Author: The Two Wings of the Hawk
- [Mourning Village Gaiden Ikaikan](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=52&trview=357)Author: Mr. Nar
- [Broken lol](http://mashigi.jimdo.com/%E3%82%B2%E3%83%BC%E3%83%A0%E7%BD%AE%E3%81%8D%E5%A0%B4/%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%E3%83%BC/)Author:[Mr. Mashigi](http://mashigi.jimdo.com/)
- [Captive Hero, Escape (hard version also available)](http://ux.getuploader.com/bohsuke/)Author:[Mr. Bosuke Fuzuki](http://id6.fm-p.jp/358/bohsukegame/)
- [A story of Taro Sato's bravery](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=52&trview=273)Author: Soryu-sama
- ~~GATE　GUARDIANS~~Author:~~TRiC’L TiCk ～ とりくる ちっく ～様~~
- [Fake ○O](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=52&trview=232)Author:[@Atmaak-sama](http://www.geocities.jp/ayatoyuna/sin/)
- [kasu dreamland](http://www15.atwiki.jp/kasuking/pages/33.html)Author:[Dear kasu](http://www15.atwiki.jp/kasuking/)
- [Journey to Recapture the Demon King 2](http://u9.getuploader.com/x328zca7)Author:[God-damaged dragon](http://z820cc.blog71.fc2.com/)
- [kasu action game 1.02](http://www15.atwiki.jp/kasuking/pages/20.html)Author:[Dear kasu](http://www15.atwiki.jp/kasuking/)
- [Noah's Ark](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=52&trview=167)Author: Zazabon
- [Monkey's nest](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=52&trview=55)Author: Mr. Tekko
- [AIRFORCE](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=52&trview=49)Author: The Two Wings of the Hawk
- [Frustrated stick R](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=47&trview=244)Author:[Mr. Rage Abe](http://fass.mad.buttobi.net/dl.html)
- [Ciliciaction ～Arnima's Ambition～](http://www.freegameclassic.com/comment.php?id=1007)Author:[Mr. Otokam](http://otokamgarage.web.fc2.com/)
- [Recool 2](http://53751241.at.webry.info/201010/article_3.html)Author:[Iwawo Kobo](http://53751241.at.webry.info/)
- [Angel of the hope+](http://www.freem.ne.jp/game/win/g02633.html)Author:[Dear WATER*WORLD](http://world.so.land.to/)
- [Koma Full (15 years old, paid trial version available)](http://maniax.dlsite.com/work/=/product_id/RJ060975.html)Author:[Mr. Reimonya](http://leimon.web.fc2.com/)
- [Comaful hard! ( *15 prohibited, paid)](http://www.dlsite.com/home/work/=/product_id/RJ077252.html)Author:[Mr. Reimonya](http://leimon.web.fc2.com/)
- [Sadie](http://woshida.web.fc2.com/sadie.html)Author:[Mr. Woshida](http://woshida.web.fc2.com/)
- [Hari Tsuki Ninja Namayakimaru](http://woshida.web.fc2.com/namayakemaru.html)Author:[Mr. Woshida](http://woshida.web.fc2.com/)
- [Buoy Adventure](http://www.freegameclassic.com/comment.php?id=0910)Author:~~凍夜 wintry shade様~~
- [KNIGHT GIRL](http://www.freegameclassic.com/comment.php?id=0808)Author:[Mr. Otokam](http://otokamgarage.web.fc2.com/)
- [Standing Hair Hero Legend -Start of Legend-](http://threesgame.web.fc2.com/games_2.html)Author:[Dear 3S](http://threesgame.web.fc2.com/index.html)
- [Recool](http://www.freem.ne.jp/game/win/g02444.html)Author:[Iwawo Kobo](http://53751241.at.webry.info/)
- [Brian's Adventures 2009](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=52&trview=123)Author:[Mr. Otokam](http://otokamgarage.web.fc2.com/)
- [NO NAME HERO, S](http://dragonyamiyona.yumenogotoshi.com/homupe/game/nnh/nnh.html)Author:[Dragon hacker](http://dragonyamiyona.yumenogotoshi.com/)
- [Sambellina and big left hand](http://thumbelina.ehoh.net/)Author:[1-nomon-sama](http://leimon.web.fc2.com/)
- [Untitled 2](http://tonyation.web.fc2.com/games/ut2/ut2_gamepage1.html)Author:[Mr. Tonya](https://twitter.com/_xxxdugong)
- [Requester Yashiyu](http://threesgame.web.fc2.com/games_1.html)Author:[Dear 3S](http://threesgame.web.fc2.com/index.html)
- [PESADILLA](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=47&trview=232)Author: Mr. Nar
- [Monster violet](http://woshida.web.fc2.com/violet.html)Author:[Mr. Woshida](http://woshida.web.fc2.com/)
- [Untitled](http://tonyation.web.fc2.com/games/ut/ut_gamepage1.html)Author:[Mr. Tonya](https://twitter.com/_xxxdugong)
- [Be my sword! ( Freeware version)](https://www.vector.co.jp/soft/winnt/game/se476758.html)Author:[Mr. Reimonya](http://leimon.web.fc2.com/)
- [Be my sword! ( Paid )](http://home.dlsite.com/work/=/product_id/RJ059281.html)Author:[Mr. Reimonya](http://leimon.web.fc2.com/)
- [Waken Arcade](https://www.vector.co.jp/soft/winnt/game/se481731.html)Author:[Mr. Reimonya](http://leimon.web.fc2.com/)
- [MACHINE SHOCK](https://www.freem.ne.jp/win/game/2249)Author:[Mr. Otokam](http://otokamgarage.web.fc2.com/)
- [Dark Night History ～Dark history in the dark night～](http://dragonyamiyona.yumenogotoshi.com/homupe/game/dnh/dnh.html)Author:[Dragon hacker](http://dragonyamiyona.yumenogotoshi.com/)
- [Yashiyu legend](http://www.geocities.jp/ayatoyuna/sin/Yassilleden.html)Author:[@Atmaak-sama](http://www.geocities.jp/ayatoyuna/sin/)

<a name="GAME_DL_A"></a>

### Adult games (18 bans)

*There are no plans to add any more works.  
If you're looking for a recent action editor game, you might want to search using the link below.

- [DLSite (R18) Search for "Action Editor" (newest first)](https://www.dlsite.com/maniax/fsr/=/language/jp/sex_category%5B0%5D/male/keyword/%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%E3%83%BC/per_page/30/without_order/1/page/1/order/release_d)  
    ↑simply keyword searching in "Action Editor". It seems that not all games in the Action Editor series are hits, and only games that include keywords such as "work content" are hits.

Registered: 3/12/2019

- [Seekers of pig iron (charges apply). Trial version available](https://www.dlsite.com/maniax/work/=/product_id/RJ204720.html)Author: Tsukiton-sama
- [A song that invites the devil (for a fee). Trial version available](https://www.dlsite.com/maniax/work/=/product_id/RJ210287.html)Author: Mr. Toukamaruhodo
- [Wandering City (charges apply). Trial version available](https://www.dlsite.com/maniax/work/=/product_id/RJ176271.html)Author: Tsukiton-sama
- [Dot picture mini game Ninja Girl Attack (paid). Trial version available](https://www.dlsite.com/maniax/work/=/product_id/RJ196207.html)Author: ZG-F
- [Succubus Encirclement (surcharge). Trial version available](https://www.dlsite.com/maniax/work/=/product_id/RJ179999.html)Author: Reimonya-sama
- [It's summer, swimsuit! Succubus action! ( Paid )](https://www.dlsite.com/maniax/work/=/product_id/RJ180747.html)Author: Reimonya-sama
- [THE sanctions (charges apply). Trial version available](https://www.dlsite.com/maniax/work/=/product_id/RJ241111.html)Author: Doriane
- [THE underwear recapture (charges apply). Trial version available](https://www.dlsite.com/maniax/work/=/product_id/RJ230451.html)Author: Doriane
- [Breastfeeding Saint Milk Pudding (charges apply). Trial version available](https://www.dlsite.com/maniax/work/=/product_id/RJ126289.html)Author: blue fountain
- [ARUSLANE (charges apply). Trial version available](https://www.dlsite.com/maniax/work/=/product_id/RJ205914.html)Author: Kojirasein
- [Exorcist of disgrace (charges apply). Trial version available](https://www.dlsite.com/maniax/work/=/product_id/RJ186911.html)Author: UNDER HILL
- [Breastfeeding Holy Princess ～Adult Milk Pudding～ Charges apply. Trial version available](https://www.dlsite.com/maniax/work/=/product_id/RJ137517.html)Author: blue fountain

Registered: 6/12/2016

- [Damned, Kill me!! ～Psst, kill! The Story of the Orc and the Female Knight～ (Charges apply). Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ164325.html)Author:[Mr. Tokatamaruhodo](https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG25716.html)
- [Ethereal LegioN (surcharge). Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ151500.html)Author:[Acid Ton-sama](http://www.dlsite.com/maniax/circle/profile/=/maker_id/RG27842.html)
- [Barrage! ( Paid. Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ145229.html)Author:[Acid Ton-sama](http://www.dlsite.com/maniax/circle/profile/=/maker_id/RG27842.html)
- [Psyka (charges apply). Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ149844.html)Author:[Dear hibana](http://www.dlsite.com/maniax/circle/profile/=/maker_id/RG28876.html)

Registered: 19/7/2015

- [Megaton＝Rage (charges apply). Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ142456.html)Author:[Mr. Twelve Soft](http://b.dlsite.net/RG15652/)
- [Slime Soldier ～Squid the female alien with mucus and die in agony!! ～(Paid. Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ125758.html)Author:[Mr. Reimonya](https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG03680.html)

Registered: 31/5/2014

- [Ries_z Action PLUS (surcharge). Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ088592.html)Author:[Mr. Twelve Soft](http://b.dlsite.net/RG15652/)

Registered: 27/5/2014

- [Seinalmonohe (charges apply). Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ132648/?unique_op=af)Author:[Mr. Tokatamaruhodo](https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG25716.html)

Registered: 22/9/2013

- [Sister Kunoichi Murasaki Kai (charges apply)](http://www.dlsite.com/maniax/work/=/product_id/RJ119148.html)Author:[Mr. Reimonya](https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG03680.html)

Registered: Before 4/5/2012

- [Sister Kunoichi Murasaki (charges apply). Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ079102)Author:[Mr. Reimonya](https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG03680.html)

[Go to the top of this page](#START)