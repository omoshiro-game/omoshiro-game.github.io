---
title: Action editor 4
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Game tools
    url: /menu_gametool/
  - name: Action editor 4
    url: /menu_game/ActionEditor4/
---

<a name="START"></a>

## Action game tool Action Editor 4 
 
Here you can download the action game creation software "Action Editor 4".  
There is also a collection of games made by Action Editor 4.  

[Download Action Editor 4](#AE4_DL)  

[Go to game collection](#GAME_DL)  

<a name="AE4_DL"></a>
 
## Download Action Editor 4 
 
**Games created with Action Editor 4 can be easily distributed on your own website, etc.**  
For details, please see the included "About game distribution.html" (formerly "About secondary distribution.html").

|Action Editor 4 [Download the latest version (zip)](/soft/ActionEditor4/ActionEditor4.zip) | |
|---|---|
|Version|10.20|
|Genre|Action game tool|
|Target number|1 person|
|Software type|Free software (free)|
|Operation Check|Windows10,8,7,Vista,XP|
|Initial version released|26/9/2008|
|Latest version released|2020/12/24|
|Comments|This is the latest work in the Action Editor series.   <br>**No programming required** You can enjoy creating 2D action games.   <br>There is high development efficiency and a certain degree of freedom.   <br>**In addition to action games, we can also create action RPGs, shooting games, puzzle games, etc.**. |

[Go to the top of this page](#START)

---

● Update history and downloads for each version

How to view update history

"◆Editor:～" is an update of the editor program (Editor_v*.exe) and default data. Even if you carry over the data from the previous version, the behavior during the game will not change.

"◆game:～" is mainly an update for the game program (Game_v*.exe). Even if the editor program has been updated, if it affects the game, it belongs to "◆Game:～".

If you carry over data from an older version, an update with "◆game:～" may change the behavior during the game (it may happen from time to time).

- [v10.20](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v1020.zip) 24/12/2020  
    ◆Game: Fixed a bug that would force quit when trying to display character variables from an item using the "Message" command.  
    ◆Game: Fixed a bug where the "Manipulate status" command could not be moved to the normal position even if the character's X and Y coordinates were substituted.  
    ◆Game: Fixed a bug where the return value was not assigned correctly when the left side of the "Status operation" command was "Status".
    
- [v10.10](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v1010.zip) 26/9/2020  
    ◆Others: Fixed some bugs that caused KeyConfig.exe to be considered a threat in some antivirus software.  
    *this fix is still incomplete, and there are still some elements that could cause it to be detected correctly. I would like to provide a more problem-free version in the next version, but I don't know if it will work. I won't go into too much detail once I tell you why I'm releasing it in an incomplete form...
    
    ***Added on 10/6/2020**  
    In conclusion, we were unable to completely resolve this false positive issue.  
    KeyConfig.exe from "Action Editor 4" version 9.67～10.00 (the filename is "KeyConfig_v2.12.exe" at this time) is converted to OPSWAT ("KeyConfig_v2.12.exe")[https://metadefender.opswat.com/](https://metadefender.opswat.com/) (multi-scanning (scanning all at once with 38 different antivirus engines))  
    ・kaspersky  
    RocketCyber  
    ・filseclab  
    Threats were detected incorrectly using antivirus engines provided by three companies.  
    Of these, Kaspersky has fixed it so that it does not receive false positives in version 10.10.  
    I sent an email to inquire about the remaining two companies, attaching specimens.  
    From RocketCyber: "No false positives on modern engines. We received a response saying, "Please wait until OPSWAT adopts the latest engine". As of October 6, 2020, a re-examination with OPSWAT detected a threat, so it looks like it will still take some time.  
    I contacted Filseclab on September 29, 2020, but have not received a reply yet...  
    To be honest, I feel like I’ve done everything I can on this issue at this point.  
    If you are still having trouble with false positives, try contacting the company that provides the engine you want to detect (although this will be in English). I think you can contact us even if you are not a developer.  
    We apologize for any inconvenience caused.
    
- [v10.00](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v1000.zip) 2/7/2020  
    ◆game: the "Show picture" command will allow you to set the magnification vertically and horizontally separately.  
    ◆Game: Implemented left-right and upside-down functions with the "Show Picture" command.
    
- [v9.97](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v997.zip) 3/9/2020  
    ◆Game: Implemented a setting to fix the save destination as number 1 without displaying a window to select the save destination that appears when "From the beginning" is selected in story mode. If you want to use this, go to the "Project" ＞ "System" ＞ "2" tab from the main menu and select "Autosave initial settings" and set "Save destination to 1, always on Autosave". On the title screen, if save data does not exist, only "from the beginning" will be displayed and "from next" will be hidden. Conversely, if save data exists, only "Continue" will be displayed. Also, the "Save" and "AutoSave" commands will no longer appear in the World Map menu.
    
- [v9.96](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v996.zip) 9/11/2019  
    ◆Editor: Fixed a bug where clicking a menu command in the right-click menu of some windows, such as palette windows, with the mouse pointer outside the window frame of all windows on the screen would not execute immediately, but would only execute the next time the mouse pointer entered the window frame.
    
- [v9.95](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v995.zip) 26/10/2019  
    ◆Game: Fixed a bug in version 9.91 where a damage nullification sound effect would be played when a shot with 0 power or 0 impact was hit. According to the specifications, when a shot with a power of 1 or more or a non-impact of 0 hits, it will only be played when damage or impact is nullified by the character's defense power or invincibility, so we fixed it that way.  
    ◆Games: Fixed a bug that allowed users to change their choice by keystroke when a message with a choice was displayed during replay playback.
    
- [v9.94](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v994.zip) 2/10/2019  
    ◆Game: re-updated at version 9.93 because the game program file (Game_v*.exe) and editor program file (Editor_v*.exe) remained at version 9.92.
    
- [v9.93](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v993.zip) 1/10/2019  
    ◆Game: Fixed a bug in versions 9.91 and 9.92 where changes to "Support displaying symbol images" in "System" settings were not saved.
    
- [v9.92](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v992.zip) 21/9/2019  
    ◆game: default image "Accessory.bmp", change the clear mark in challenge mode in the upper right corner of the image from the "○" character to a star. The conventional "○" character floats when adding shadows or edges to the font, so we changed it.  
    ◆Others: "About game distribution.html" update. Online help["About packaging."](http://localhost:4321/menu_support/actioneditor4_help/packaging/)Added link to.
    
- [v9.91](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v991.zip) 24/8/2019  
    ◆Games: "system" settings now allow you to border fonts.  
    ◆Game: Implemented "lower limit of damage that can be reduced with defense power" in "system" settings. For example, if you set this to 1, you will receive 1 damage even if your defense power is higher than the power of a ramming or shot. It is also possible to specify it as a % of the power of the ramming or shot.  
    ◆Game: Implemented "lower limit of impact that can be reduced by impact resistance" in "System" settings. For example, if you set this to 1, 1 (hbl) will be blown away even if the impact resistance is higher than the impact of a ramming or shot. It is also possible to specify it as a % of the impact of the ramming or shot.  
    ◆game: in the settings of the "System" you will be able to set sound effects when damage is nullified by defense or invincibility. Also, that**"Damage disabled.wav" is included as a sound effect material**. If you carried over from the previous version to this version, "Damage.wav" will be played even when damage is disabled, so change it to "Damage disabled.wav" if necessary.  
    ◆Other, small updates.
    
- [v9.88](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v988.zip) 10/8/2019  
    This version became the beta version → official version (stable version).  
    ◆Game: fixed a bug in version 9.87.beta where the return value of the "warp" command was incorrect. When the warp failed, it was 1 even though it had to be 2.  
    ◆Editor: Implemented a check item in project options to prevent the issue that occurs in some environments where the game is hidden behind the editor when test playing without saving common palette and stage changes. Checking this will prevent the same problem, but automatic saving will no longer be performed during test play, and manual saving will be forced.
    
- [v9.87.beta.](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v987b.zip) 1/8/2019  
    ◆Game: In the character effects "Waves (horizontal)" and "Waves (vertical)", the wave height changes smoothly when the "Start width" or "End width" is 0. The conventional specifications have a long wave rest time (it is easier to understand if you run it back and forth), so we have made some improvements. If you still feel that the wave still has a long resting time, change the width from 0 to 1.  
    ◆Editor: Fixed a bug in versions 9.80-beta and later that would cause the device to kill if an attempt was made to set a "warp" command on an item or edit an item that already had a "warp" command.
    
- [v9.86.beta.](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v986b.zip) 28/7/2019  
    ◆Game: Fixed a bug where, starting with version 9.10, if an image with a width other than 512 pixels was used in the database "Character-only BMP", the frames would appear shifted. Originally, the width of character-specific BMP images was fixed at 512, but starting with version 9.10, it secretly supported widths other than 512...no, I thought I did, but In reality, it was only supported by the editor, and the game had the same specifications as versions less than 9.10, and the frames to be displayed were determined on the assumption that the image was 512 wide. This caused the frames to appear shifted when using images with a width other than 512, but we have now fixed this. Along with this modification, we have implemented "Display when using character-specific BMP images with a width other than 512 pixels applies the behavior of version 9.85 or earlier" to the system settings. This setting is enabled if you carried data from an older version over to this one.  
    ◆Game: Officially supports character-specific bmp images with widths other than 512 pixels. The width and height of the image should both be multiple of 32 (the size of the character itself is a multiple of 32 both horizontally and vertically, so there is no problem if you draw it normally).  
    ◆game: the "BGM" in option mode allows the volume to be adjusted in 8 steps of 0～7. Since the volume of the traditional BGM "ON" is equivalent to "7", it means that the BGM volume can now be lowered." "SE" has 11 stages of 0～10, while "BGM" has 8 stages of 0～7 for some reason.  
    ◆game: "SE" in option mode, above 4 volume drops a bit.  
    ◆Game: Fixed a bug where when drawing mode was DirectDraw in versions 9.66 and later, the drawing range was 640×480 even when the window size was not 640×480 (100%) at game startup. DirectDraw itself is no longer recommended, and although it was a bug that could be resolved by moving the window even slightly, it was a bug that was likely to occur immediately after the first startup and give a bad impression, so we fixed it.
    
- [v9.85.beta.](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v985b.zip) 24/7/2019  
    ◆Game: If you check "#R*Set options" in the "Messages" command and set the display type to "Show until progress key is pressed", the cursor will be displayed while displaying a message with other options. Fixed a bug where this would occur. Note that by design, you will not have any options unless you set it to "Display until the progress key is pressed".  
    ◆Game: Allows you to use flow variables with the "Arrange" command.  
    ◆Game: You will be able to obtain the actual number of summons using the return values of the "Block Summon" and "Character Summon" commands. If the summon destination is outside the stage, block summoning will fail and will not be counted in the number of summons When summoning a character, the summoning does not fail and is counted in the number of summons (this specification is used because if the character moves after being summoned, there is a possibility that it will enter the stage from outside the stage).  
    ◆Game: You will be able to display the values of character variables and flow variables with the "Message" command. Note that flow variables must be specified by variable number rather than alphabetical characters, such as "#f1." and "#f2.", and that automatic updates are not supported.  
    ◆game: the setting of the default cursor position for the choices in the "Message" command, which can be made conditional on the values of character and flow variables. Flow variables must be specified by variable number, not alphabetical, such as "f1" or "f2".  
    ◆editor: with the "execute code" command, the flow variable is "rA" "rB" but it also becomes recognized with "fA" "fB" " In the display of flow variables in the "Message" command, it is "f", so in order to unify it with that, we recommend "fA" and "fB" for "code execution" from now on.  
    ◆editor: explain in the editor that with the "execute code" command, decimal places must be truncated and division by 0 must not be performed during the calculation process. It's important to note that until now I've only explained it in help.  
    ◆Other, small updates.
    
- [v9.82.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v982b.zip) 17/7/2019  
    ◆Game: Fixed a bug in versions 9.80beta and 9.81beta that would cause the replay to fail autosave if the stage was cleared without displaying the pause menu once (without pressing the space key once) on the next play after one death.
    
- [v9.81 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v981b.zip) 16/7/2019  
    ◆Game: in version 9.80.beta, the name of the ** command return assignment destination ("return value (A, B)", which can be specified in "status manipulation", etc.) is changed to "flow variable (A, B)" instead of "return value (A, B)". **This can be used in the same way as a variable, so it would be easier to understand if it were called a "flow variable". Just as character variables are independent for each character, flow variables are also independent for each flow (there is one flow variable A and one B for each flow).  
    ◆Game: in version 9.80.beta, the specification that 0 is also assigned to unrelated flow variables when assigning a return value to a flow variable with a command corresponding to the return value is discontinued. For example, in the case of warp, when 1 (success) or 2 (failure) was assigned to flow variable A, 0 was also assigned to unrelated flow variable B at the same time, but starting with this version, the value of flow variable B remains unchanged. With this modification, we implemented a check item in the system settings that says "Assignment of the return value of a command to a flow variable applies the behavior of version 9.80beta".**If you carry over 9.80beta data to this version, this setting is enabled, so we recommend unchecking it if possible**I will.  
    ◆Game: Fixed a bug where the game would force quit when trying to receive the return value of a command using an item's "effect".  
    ◆Game: **Implement flow variables on items so that they can receive return values. **We implemented flow variables for items as well, considering the command list of "effects" during item retrieval to be one flow.  
    ◆game: fixed a bug in the "Message" command where the variable was not displayed when trying to display it immediately after the choice character, as in "#R1.#S1.".  
    ◆Editor: Fixed a bug that caused an error when assigning "rA" and "rB" (flow variables A and B) to the "Execute code" command.  
    ◆Other, small updates.
    
- [v9.80 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v980b.zip) 13/7/2019  
    ◆Game: Implemented choice functionality in "message" commands.  
    ◆Game: Implemented return value of command. The return value is the numerical value of the command execution result, which can be used by assigning it to a variable using the "Status manipulation" command. The following commands correspond to the return value.
    
    Flow operations  
    Return value A: 1 if the operation succeeds, 2 if the operation fails
    
    ·message  
    Return value A: The player's chosen choice
    
    Warp  
    Return value A: 1 if warp succeeds, 2 if warp fails
    
    Target settings  
    Return value A: 1 if target is present, 2 if target is not present  
    Return value B: 1 if the target is changed, 2 if the target remains
    
    -Status manipulation  
    Return value A: 1 if the operation succeeds, 2 if the operation fails  
    Return value B: Amount of change in value
    
    ・Status operation 2  
    Return value A: 1 if the operation succeeds, 2 if the operation fails
    
    ·extinction  
    Return value A: Number of characters disappearing  
    Return value B: Number of shots disappearing
    
    Also for help[Explanation of return values](/menu_support/actioneditor4_help/word/#RETURN)Added.
    
    ◆Game: There is a function to save the previous play as a replay file using the F2 key, but a bug was fixed that saved the latest play instead of the previous one (the F1 and F2 keys were the same). This was a bug that occurred in version 9.50～9.67.  
    ◆Game: Timing of flows implemented in version 9.00: "When you receive damage (damage received is 1 or more)", "When you receive impact (impact received is 1 or more or -1 or less)", "When you deal damage with an attack (damage dealt is 1 or more)", Fixed a bug where four types of "when impact is given in an attack (impact is 1 or more or -1 or less)" did not support the setting "target characters involved in timing".  
    ◆Game: Fixed a bug where after playing a replay file with version 9.20 or higher in replay mode, if you select save data with version 9.20 or lower in "Continue", the game might fail to load with "Stage cannot be loaded". Note that if you encountered this bug, you could load it by restarting the game.  
    ◆Game: Implemented "Allow saving replays" check item in stage settings. For example, if you uncheck this check for opening and ending stages (especially with the autosave replay function), you can reduce unnecessary replay files.  
    ◆Game: Fixed a bug where text such as "Space key to register" or "F3 key to register for ranking" was displayed at the bottom of the screen on the stage played before the title screen ("FreeStage=" in "System.ini").  
    ◆Game: Make the display of a type of message that "displays until the progress key is pressed" a little longer, and make it impossible to accept input of the message progress key (Z key) for 0.2 seconds after display. This is a countermeasure against games where you repeatedly press the Z key, as you will often accidentally skip messages.  
    ◆Game: Eliminates the problem that if the event's "world name" and high score display a large number of characters on the world map, the ranking window display will overlap with those characters.
    
- [v9.67](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v967.zip) 26/6/2019  
    ◆Others: Fixed a bug in the version 9.66 program files "Game_v*.exe", "Editor_v*.exe", and "KeyConfig_v*.exe" that disabled some of the antivirus software false positive measures taken in version 9.64.( This is not necessarily the cause, but it seems that it was actually detected incorrectly. .. .. sorry.
    
- [v9.66](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v966.zip) 22/6/2019  
    ◆Game: Implemented "shadowing characters" in "system" settings. If you carry over data from an older version to this version, it will be turned off, so please check it if necessary.  
    ◆Game: Implemented a "display before character" check item in the "Execute effect" command. If you uncheck this check, you can display the effect deep inside the character, which was not possible in the previous version.  
    ◆Games: of the game program (Game_v*.exe)**The window size at the first startup remains the original aspect ratio and becomes the maximum size that corresponds to the display (does not exceed the display resolution)**. .. By the way, in the traditional version, the window size is "100% (640)_480)".  
    I already remember version 8.71, which implemented an enlargement function ～200% that maintained the original aspect ratio, and specified the maximum size according to the display, but it seems that it was actually 100%...  
    ◆Game: Fixed a bug where the window size at the end of the previous game was not reproduced when starting the game for the second and subsequent times when "WindowMode=1" was set in "System.ini".  
    ◆Game: The maximum window size (resolution) that can be changed from the system menu that appears when you right-click the title bar is "500% (3200)_2400)" to "2000%(12800*9600)". By the way, sizes larger than the display are not displayed in the menu.  
    ◆Game: Implemented a function that allows the window size to be one step (+100%) larger than the current size by right-clicking on anything other than the title bar.  
    ◆Game: Fixed a bug in version 9.30 and later where you could not switch to another app using the Alt+Tab key while in full screen, and a bug where you could not return normally after switching apps once during full screen.  
    ◆Editor: Added the following sentence to the explanation on the bitmap conversion tool editor.  
    ////////////////////////////////////////////////  
    ☆If you set the "number of colors in the bitmap" to "16.77 million colors (24-bit) without color palette" in the system settings, it will no longer depend on the color palette, so this conversion process is not necessary  
    ////////////////////////////////////////////////  
    I've seen comments like "Aquedi 4 has to reduce the color of images drawn in full color (I don't like it)", but it looks like this ** If you change the "number of colors in the bitmap" in the system settings, there will be no need to reduce the color of full-color images (no conversion is required with the bitmap conversion tool)**. It's been this specification since the earliest versions, but it may have been confusing due to a lack of explanation...  
    ◆Editor: Fixed a bug where, when checking "Make same as file name" in the data names of databases in general, the data names would become strange if the file name contained the character "so"." It might have been no good for anything other than "so".  
    ◆Others: Updated explanation of "System.ini".  
    ◆Others: Three stages in story mode have been added as reference stages.  
    ◆Other, small updates.
    
- [v9.64](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v964.zip) 14/6/2019  
    This version to beta version → **It has become the official version (stable version).**  
    ◆Others: Improved the issue where program files (.exe) were incorrectly detected by some antivirus software. This doesn't mean it's 100% free of false positives, but I think it's better.  
    ◆Other, small updates.
    
- [v9.63.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v963b.zip) 5/6/2019  
    ◆Game: Fixed a bug that caused the game to kill when the optional "gamepad" was "ON" in version 9.60 beta or later, and when returning to the world map after clearing a stage in story mode.  
    ◆Game: Fixed a bug where the DirectX version required to start the program was increased in version 9.60 beta or later. Due to this bug, versions 9.60beta～9.62beta did not work with DirectX originally included in Windows, and the game player side may need to install (update) the DirectX runtime (specifically) [DirectX End User Runtime Web Installer](https://www.microsoft.com/ja-jp/download/details.aspx?id=35) had to be installed).  
    ◆Game: In the "System" settings, increase the upper limit on the number of characters in in-game text in "System 4" and "System 5" by about 0～4 characters. Some texts I would have liked to see more of, but this is the limit.  
    ◆Other: Fixed a bug where the up key would continue to be entered when some gamepads were connected in "KeyConfig_v2.exe"." Updated as KeyConfig_v2.1.exe". From this version, use "KeyConfig_v2.1.exe".
    
- [v9.62.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v962b.zip) 1/6/2019  
    ◆Editor: Fixed a bug in bitmap conversion tools starting with version 9.50, where conversion would fail if a folder (multiple files) was specified using drag and drop.
    
- [v9.61 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v961b.zip) 31/5/2019  
    ◆Game: Fixed a bug where the window was not maximized correctly when the window was maximized again by selecting "100%" ～ "500%" in the system menu.  
    ◆Game: Fixed a bug where the BGM may not change when transitioning to the next replay using the replay mode pause menu "Next Replay".  
    ◆Editor: Fixed a bug where changing the text of "Type of "Autosave Replay" and "Type of "Replay Playback Order" in "System" settings would cause the message to return the next time it was started.  
    ◆Other, small updates
    
- [v9.60 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v960b.zip) 26/5/2019  
    ◆Game: Compatible with XInput compatible gamepad D-pad (POV). It works with either the analog stick or the D-pad.  
    ◆Game: Fixed a bug where only the gamepad with the highest priority could be used. In previous versions, you could only use a gamepad that Windows initially recognized or designated as a "preferred device" from the Control Panel, but starting with this version, you can use any other gamepad.  
    How to set up "Preferred Device"[Here](http://localhost:4321/menu_support/gamepad_preferred_device/)It is explained in.  
    ◆Game: Implemented "gamepad" as an option. Turn on the gamepad if you want to use it, or turn it off if not. However, strictly speaking, this setting determines whether the gamepad is connected during play, and even if it is "OFF", the gamepad will be recognized if it is connected before the game starts. Conversely, if you do not use the gamepad but set it to "ON", the speed of game execution (FPS) will become unstable because connection checks will be made at regular intervals during the game only if the game is not connected. That said, in action scenes where speed stability is important, connection verdicts are not performed, so you don't have to be that nervous.  
    ◆Other: key reassignment program**Update "KeyConfig.exe" as "KeyConfig_v2.exe"**. In line with this game update, no "priority device" settings are required for the second and subsequent gameplay, and the D-pad supports XInput-compatible gameplay.**Please use this from this version.**  
    ◆Other, small updates.
    
    We apologize for the delay in responding to the issue of "a glitch that allowed only the highest priority gamepad to be used.".  
    I didn't notice it until now (sweat)  
    It's not uncommon for older games to only allow the use of gamepads with the highest priority, so you can google them and find a solution, but the settings for "priority devices" aren't that well known these days (?) I was concerned, so I would have liked to have responded sooner, and I apologize for the inconvenience. I'm sorry.
    
- [v9.51 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v951b.zip) 16/5/2019  
    ◆Game: Fixed a bug where all plays would be saved even if set to "only when clearing a stage" in automatic replay save.
    
- [v9.50 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v950b.zip) 12/5/2019  
    There are many updates this time**Beta version**It becomes.  
    ◆Games: added "Replay Autosave" to the game’s options." You can choose from "Do not autosave", "Only when clearing a stage", or "Save all".**"Save All" saves replays not only when clearing a stage or making a mistake, but also when you select "Shuryou", "Retry", or "Return to map" from the pause menu (ESC key or window). (It will not be saved if you close it with "×" in the top right corner).**It should be noted that it is not autosaved during test play.  
    ◆Game: Replay mode file selection changes from Explorer-like dialog to Challenge mode-like UI, and a system with playlists (play through) is implemented. Along with this is an image file**16 from coordinates (64,16) of "Accessory.bmp"_16, coordinates (80,16) to 16_Scrollbar added at 16**Was done. As a caveat,**Subfolders and below are no longer displayed.**You can also revert to 9.30 or earlier by checking "Use Explorer-like file selection dialog for versions 9.30 and earlier when selecting files for free mode and replay mode, and manually saving replays" in the "System" settings, but playback lists are not supported. The file selection dialog before 9.30 also has some advantages, such as support for subfolders**For players who don't know the specifications of Action Editor 4, I think it's easier to understand after 9.50 and it's more comfortable to play with a replay playlist.**  
    ◆Game: Like replay mode, file selection in free mode changes from an explorer-like dialog to a challenge mode-like UI. Also here**Subfolders and below are no longer displayed.**  
    ◆Game: Added "Replay Playback Order" to game options." You can choose from "Sort order", "Sort order & stage clear only", and "Repeat the same replay". It is now possible to play replays in the order of the replay mode playlist, or to play only replays that have cleared the stage.  
    ◆Games: When saving replays in a world made up of multiple stages, the stage number will be added to the replay file name.  
    ◆Game: Changed the structure of replay file names. In the case of autosave, when clearing the stage, the file name is prefixed with "_CLEAR_The letters "are added. This is mainly a change to realize the operation of the game option "Sort order & stage clear only" in "Replay playback order".  
    ◆Game: Renew the dialog when manually saving replays using the F1 and F2 keys. In this dialog, select "Save as stage cleared replay data" (at the end of the file name, select "Save as stage cleared replay data")_CLEAR_You will need to select either "Add" or "Save as replay data without clearing the stage" to save. " You can also revert to dialogs from 9.30 or earlier in the "System" settings, but this is deprecated.  
    ◆Game: "Project" ＞ Implemented "Configuration of Replay File Names" in "System". You can choose to include [stage file name] or [stage name] in the replay file name.  
    ◆game: "stage clear" command with "autosave replay at end of file name"_CLEAR_Implemented the "Add characters" check item. I think it's usually fine to turn it on.**The use of OFF is, for example, when the flow timing is set to the "stage clear" command "when death occurs", and "I want to record high scores even at death, but I don't want it to be treated as a stage clear." Case**So, in this case during autosave of the replay "_CLEAR_By not adding the "character", you can save it as a replay file that has not cleared the stage.  
    ◆Game: Added "Replay message autoprogress seconds" to game options. It autoprogresses messages and pictures of the type that appear until the Z key is pressed in a specified number of seconds during replay playback. Note that you can also advance messages using the Z key regardless of this setting.  
    ◆Game: The game's option mode will now display explanatory text at the bottom of the screen. It can be set from the options menu frame of the main menu "Project" ＞ "System".  
    ◆Game: Added "Next replay", "Previous replay", and "Replay selection" to the pause menu. These are menu commands that can only be selected in replay mode.  
    ◆Games:**In replay mode, the pause function (pose menu) cannot be turned off.**There is a check item called "Pause with space key (pause and call menu)" in "Project" ＞ "System", but even if you uncheck this check, the pause will work in replay mode as an exception. The pause menu is now displayed. The pause menu limited to replay mode is convenient, so I purposely chose this specification.  
    ◆Game: Replay files will now be saved with read-only attributes. We recommended the update date and time order for sorting replay playlists, so we took measures to prevent the update date and time from being easily rewritten.  
    ◆Game: World selection in challenge mode allows you to move from world 1 position ↑key to last world, last world to↓ key to world 1.  
    ◆Game: Replay files cannot be read in free mode (replay files contain stage data, so only that part can be read). Rather than not being able to load it, it seems that even in the previous version, the error "(the file I tried to load) is corrupted" appeared and it was not possible to load it. From this version onwards, replay files will not even be displayed on the free mode stage file selection screen.  
    ◆Others: Added items "How to operate" and "About replay" to the included "Readme2.txt". It may be easier to edit this when distributing.  
    ◆Others: We have listed the following techniques in the included "About game distribution.html" and in the options menu of the online help.  
    /////////////////////////////////////////////////////////////  
    **If you want to change the optional default settings during game distribution, do not delete the entire "user_data" folder with game save data files, but optionally set it to the default settings and then delete any files in the "user_data" folder other than "Option.dat" (distribute it).**  
    /////////////////////////////////////////////////////////////  
    ◆Others: Subtle update of the included "System.ini".  
    ◆Other details updated.
    
    With this update, online help is now available["About replay."](http://localhost:4321/menu_support/actioneditor4_help/replay/)Added.  
    This update has nothing to do with the section "Replays may not be reproduced faithfully", but I added it because I haven't explained it properly in Help before, so I'm sorry for the inconvenience.
    
    If you carry over data from an older version to this version, the newly added options "Replay autosave", "Replay playback order", and "Replay message autoprogress seconds" will be hidden. and when selecting files for "Free mode and Replay mode" in the system settings Use the Explorer-like file selection dialog version 9.30 or earlier when manually saving replays is also enabled (though not recommended). The other settings also behave as unchanged as possible from the previous version, so if you want to use the functions implemented this time, you will need to change various settings in "Project" ＞ "System" from the main menu.
    
- [v9.30](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v930.zip) 15/4/2019  
    This version became the beta version → official version (stable version).  
    ◆Games:**A dialog for selecting files in free mode, replay mode, and when saving replays will be displayed, but this dialog has been fixed to a bug where the app freezes when deleting, copying and pasting files, or otherwise performing operations**。  
    ◆Others: Describe the reason why full screen mode (WindowMode=0) is deprecated in the environment configuration file "System.ini" (though full screen has been deprecated for some time). The main reason for its depletion is that a dialog for selecting a file will be displayed in free mode, replay mode, and when saving replies, but if you switch apps using Alt+Tab, etc. at this time, you will not be able to return to normal.  
    ◆Other details corrected.
    
    I've always thought that a relatively large number of games had the replay function disabled, but I wonder if the first bug (freezing due to file deletion, etc.) was the cause. .. .. I've taken countless replays myself, but I've noticed it late.  
    We apologize for the inconvenience, but for all works that have the replay function enabled, it may be better to update to this version or disable the replay function.  
    We apologize for any inconvenience caused.
    
- [v9.22.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v922b.zip) 12/4/2019  
    ◆Game & Editor: Fixed a bug that forced termination immediately after saving a replay in versions 9.20beta and 9.21beta. Also, it may have been possible to force close the site illegally, except immediately after saving the replay, but this version fixes that as well.
    
- [v9.21 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v921b.zip) 2/4/2019  
    ◆Editor: Fixed a bug in version 9.20beta that caused the game to end when a stage was cleared during test play of a single stage.
    
- [v9.20.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v920b.zip) 1/4/2019  
    ◆Game: Implemented "Run Autosave" on the "Stage Clear" command.  
    The following commentary is taken from the help.  
    ///////////////  
    If this is checked, you can save in the middle of the world in a world made up of multiple stages.  
    It must be set to "Auto Save ON" in the settings of the World Map menu in Story Mode.  
    *When restarting from the middle of the world with "Continue" (playing the second and subsequent stages), if the file of the stage to be restarted is deleted or the file name has been changed, the stage will fail to load Not only will it be impossible to conquer more worlds, but you will also not be able to return to the world map. Especially**If you have already published your work on the Internet and are upgrading it, do not delete the stage files after the second stage and do not change the file name**Be careful.  
    ///////////////  
    ◆Game: Implemented "autosave every time a stage is cleared in a world consisting of multiple stages" in the story mode settings of "System". If checked, this will result in autosaves on stage clearing for any stage featured in the game Even if the autosave setting of the "Clear stage" command is disabled, this setting takes precedence and is therefore autosaved.  
    ◆Game: "Return to title" is deprecated in "Game clear" for world map events. The reason for its depletion is that if you return to the title, you will no longer have a chance to save, and if you are autosaved when clearing a stage in a world consisting of multiple stages, you will never be able to return to the world map (depending on the settings).  
    ◆Game: Fixed a bug where an exit confirmation dialog would appear even when the game ended abnormally (forced termination due to an exception error).  
    ◆editor: implemented automatic backup of edited data ("data" and "e_data" folders). The backup is performed only when the edit data is successfully loaded immediately after starting the editor. You can change the backup settings from the main menu "Projects" ＞ "Project Options", and there you will find an explanation.  
    ◆Others: Added two backup folders to "Files (folders) that should be deleted before distribution" in "About secondary distribution.html".  
    ◆Others: Renamed the file name of "About secondary distribution.html" to "About game distribution.html" (this is easier to understand).  
    ◆Other details corrected.
    
    **Since this is an update related to game save data, we decided to make it a beta version based on the idea that a fatal bug might cause more trouble than usual.**  
    I didn’t do anything that complicated, but in the worst case scenario.
    
- [v9.14](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v914.zip) 9/12/2018  
    ◆Editor: Specify in the database "Sound Effects" that the Wave file does not support Wave extension format or compression format. The online help also explains the following.
    
    (extracted from online help below)  
    **If the Wave extension format only supports Wave files in invalid and uncompressed PCM format, and in other formats (such as ADPCM), even if you can play them in an editor, you won't be able to play them in games.**  
    I don't think there are many people who are aware of the Wave format on a regular basis**Just remember, ''If it doesn't play on the game side, you can solve it by converting the format.''**I feel like it.  
    Note that free software is sufficient to convert the format, for example, in the case of the software "Audacity" used by the author of this software, simply importing the problematic file and resaving it will disable the Wave extension format. It is essentially converted into an uncompressed PCM format WAVE file.
    
- [v9.13](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v913.zip) 21/9/2018  
    Fixed a bug in commands that use targets, such as "guided movement", where command behavior (moving targets, etc.) would become strange if the following conditions were met.
    
    The target of the command is the enemy (the "operation" is the "computer")  
    -The main character instantly moved to a remote location using a "warp" command  
    ・Due to the above movement, the target's position changed from inside the screen to outside the screen, and the action conditions were changed from being met to not being met
    
    At least this bug was present in the "Shot" with "Guided Move" and "Move Type" "Guide to Target".  
    It is unconfirmed whether this occurred in all commands that use the target, but even if it did, it should have been fixed in this version.  
    Along with this modification, we implemented "Command behavior using the target when the main character moves instantly, such as by warp, applies behavior from version 9.12 or earlier" in the system settings. This setting is enabled if you carried over data from version 9.12 or earlier to this version.
    
- [v9.12](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v912.zip) 5/7/2018  
    ◆Game: Fixed a bug where when the distance between two block characters or a block character and a normal block is about the same as the width of the character to be hit, if a character enters between them and tries to move left or right, they may be crushed to death. However, depending on the main character’s setting (especially the giant size) and the placement of blocks, there are cases where they are crushed to death. I'm sorry, but I'll make this a specification. Along with this modification, the system settings are changed to ''Apply the behavior of versions 9.11 and earlier to crush-to-death detection when the distance between two block characters, or a block character and a normal block, is about the same as the width of the character to be hit.''” has been implemented. This setting is enabled if you carried over data from version 9.11 or earlier to this version.  
    ◆Game: Fixed a bug where SP would be restored by 1 if the maximum SP was changed with the "Execute Code" command for characters with SP 0.  
    ◆Game: Fixed a bug where the length of the SP bar displayed above the character's head would be incorrect if the maximum SP was changed using the "Execute Code" command. The SP bar itself no longer appears when changing the maximum SP. (" It now has the same specifications as the "Manipulate Status" command)
    
- [v9.11](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v911.zip) 6/4/2018  
    ◆Editor: Fixed a bug in version 9.10 where if data with "path" not set in the database "Character-only BMP", it would be forcibly terminated immediately after starting the editor or when returning to stage edit after saving the database.
    
- [v9.10](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v910.zip) 26/5/2018  
    ◆Editor: Memory usage of character-specific bmp ("×4" or higher) for giant characters has decreased dramatically. This makes the editor in general lighter or more stable. The larger and more images, the lighter the operation will be than the previous version. Also, the loading of character-specific bmp has become a little faster, so the editor has started faster.
    
- [v9.05](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v905.zip) 14/4/2018  
    ◆Game: KeyConfig.exe also supports English keyboard layout.
    
- [v9.04](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v904.zip) 28/1/2018  
    ◆Game: Fixed a bug where when restarting a flow after pausing with the "Manipulate flow" command, the anime would not pause or resume in conjunction with it (the anime ended instead of pausing). was a bug). Along with this modification, we implemented "Pause and resume flow behavior in the "Manipulate flow" command applies the behavior of versions 9.03 and earlier" in the system settings. This setting is enabled if you carried over data from version 9.03 or earlier to this version.
    
    ＜Reason for the amendment＞  
    The execution time of production commands such as "Execute anime", "Message", "Execute effects", "Execute character effects", "Execute screen effects", "Display picture", and "Change screen color" is "P-0" (_)" format.("_"is the time of the production)  
    In the previous specification, we intended to guarantee that commands whose execution time is displayed in this format will be processed separately from the flow after command execution starts (for example, the production will not end even if the flow ends).  
    So, in the previous version, the anime ended instead of pausing, probably because I myself thought, ''It's strange to pause the anime in time for the flow pause.'' ( In other words, even if you restart the flow, the anime will not restart  
    However, when we received your feedback on BBS and investigated it, we realized that anime is an exception.  
    For example, only anime ends when the flow ends.  
    Due to these circumstances, we decided to treat anime as an exception and modify it so that anime is also temporarily suspended in line with the temporary suspension of flow.
    
- [v9.03](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v903.zip) 24/9/2017  
    ◆Game: Fixed an issue where the display's automatic OFF setting and screensaver would activate when operating in window mode and using only the gamepad. The screensaver may still work depending on the execution environment, but I will specify it.  
    ◆Game: Fixed a bug where when changing the graphic number of the character-specific bmp in the "Change graphics" command with the "Arrange" command, it could not be changed after number 120.  
    ◆Editor: Fixed a bug where the block graphic was not transparent if specified in the character or item.
    
- [v9.02](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v902.zip) 17/8/2017  
    ◆Game: Fixed a bug where startup would fail if the sound device was disabled.  
    ◆Other details corrected.
    
- [v9.01](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v901.zip) 24/7/2017  
    ◆Game: Fixed a bug in version 9.00 where the "arrange" command would cause the arrangement to fail if the following parameters were targeted.  
    -Reorientation: sound effects  
    Jump: Sound effects  
    Block summon: Block  
    ・Character summon: Character  
    Item summon: Item  
    ・Obtaining items: Items  
    ・Execution of character effects: Character effects  
    ・Execute screen effect: Screen effect  
    -Play sound effects: Sound effects  
    ・BGM playback: BGM
    
- [v9.00](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v900.zip) 23/7/2017  
    ◆Game: Fixed a bug in versions 8.40 and later where the direction and speed of impact could become strange if a walking character was subjected to a vertical impact while in the air. With this modification, we implemented "Longitudinal impact on walking characters applies behavior from version 8.96 and earlier" to the system settings. This setting is enabled if you carried over data from versions prior to 8.96 to this version.  
    ◆Game: Added the following types to character flow "timing".  
    ・"When damaged (damage received is 1 or more)"  
    "When you receive an impact (the impact you receive is 1 or more or -1 or less)"  
    ・"When dealing damage with an attack (the damage dealt is 1 or more)"  
    "When you give an impact with an attack (the impact you receive is 1 or more or -1 or less)"
    
    In the case of the conventional timing "when receiving damage", "when receiving impact", "when inflicting damage with attack", and "when delivering impact with attack", the "power" set for the attacking character or shot is If the "impact" is other than 0 Since there was an issue where the flow of the corresponding timing would be executed even if the damage was nullified due to the "defense power" or "impact resistance" of the attacked side, or invincibility, the flow of the corresponding timing would be executed even if the damage was nullified due to the "defense power" or "impact resistance" of the attacked side, or the invincibility state. We have added a new timing that is valid only when.  
    ◆Game: the "Arrange" command now supports the following parameters as well.  
    -Reorientation: sound effects  
    Jump: Sound effects  
    Shots: sound effects, effects, acquisition items  
    Sword: sound effects, effects, acquisition items  
    -Block summon: block, sound effect  
    -Character summon: character, sound effects  
    Item summon: Item, sound effect  
    -Status manipulation: variables (left-hand side), constant values, variables (right-hand side)  
    ・Obtaining items: Items  
    ・Execute effect: Effect  
    ・Execution of character effects: Character effects  
    ・Execute screen effect: Screen effect  
    ・Picture display: Picture  
    -Play sound effects: Sound effects  
    ・BGM playback: BGM  
    ◆Editor: The upper limit on the number of data in the database "picture" will be changed from 999 to 9999.  
    ◆Other details corrected.
    
    Also, starting with version 8.90, which implemented functions related to obtaining coordinates, it was released as a beta version, but starting with this version, the "beta" is removed to make it a stable version.
    
- [v8.96 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v896b.zip) 22/4/2017  
    ◆game: in the ‘warp’ command, the target coordinates can now be set in dots.  
    ◆Game: When setting the "Y coordinate" to "absolute coordinates" or "screen coordinates" using the "status conditions" in the basic flow conditions and the "warp" and "status operation" commands, the "coordinate position of the giant character" is You will be able to decide. You can choose to set the coordinates of the center of the character that has become gigantic, or the coordinates of the bottom center of the character (same as the center of the character when it has not become gigantic).  
    ◆Game: Fixed a bug where characters would be shifted to the right or down from their original positions when their X and Y coordinates were changed using the "Manipulate status" and "Execute code" commands. Along with this modification, we implemented "Changing X and Y coordinates by "manipulating status" or "executing code" command on an enlarged character applies the behavior of version 8.90" in the system settings. If you carried over data from version 8.90 to this version, this setting is enabled.  
    ◆Game: In the "Execute Code" command, in previous versions, when you assigned the Y coordinate to a gigantic character (＝), the assigned value became the character's center coordinate, but from this version, if it is a walking character, the coordinates below the center of the character, If it is a flying character, it will be assigned to the character's center coordinates (the specifications will be the same as "warp" before 8.90). That is, only the behavior relative to the walking character changes. Along with this modification, we have implemented "Changing the Y coordinate by the "Execute code" command for a walking giant character applies the behavior of version 8.90" in the system settings. If you carried over data from version 8.90 to this version, this setting is enabled.  
    ◆Game: Fixed a bug in the "warp" command starting with version 8.22 where specifying the warp position in screen coordinates would cause it to shift slightly below the original position. Along with this modification, we implemented "Apply version 8.22～8.90 behavior to warp position to "screen coordinates" in "warp" command for "giant characters" in system settings. If you carried over data from version 8.22～8.90 to this version, this setting is enabled.  
    ◆Game: Added "Specify by screen coordinates (specify center)" and "Specify by stage coordinates (specify center)" to the display position in the "Message", "Display picture", and "Display effect" commands. When specifying the display position using screen coordinates and stage coordinates, previously you had to specify the upper left coordinates of a message or picture, but with this update, you will also be able to specify the center coordinates.  
    ◆Editor: Fixed a bug in the previous version that could cause the in-game behavior to change even if the update did not change the in-game behavior when carrying over data with the Action Editor 4 update. However, the takeover "ex" must be from this version (8.96) or later. The bug we fixed this time has something to do with the status of the check item in the "Compatibility" box after the "System 7" tab in the "Projects" ＞ "System" section of the main menu (setting whether to return to the behavior before the bug was fixed). doing. When passing data in an update, the program implicitly checks the "Compatibility" box so that the update does not change the behavior during the game (without the game author's permission), but even in cases where it should be implicitly checked by the specifications, it could not be entered. It would be very long to explain this in detail, and I probably won't be able to convey it accurately, so I won't explain it in detail. Even if this problem occurred, it would have been possible to revert to the previous version by reviewing the check items in the "Compatibility" frame.  
    ◆Other details corrected.
    
- [v8.90 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v890b.zip) 2/3/2017  
    ◆Game: The "X coordinate" and "Y coordinate" of yourself and the target can now be obtained and set in the "Status manipulation" command. The configuration of coordinates (assignment "＝") is identical in behavior to warp, since inside it only executes the "warp" command. For example, if the character to be warped is a type that hits a block, the command will fail if there is a block at the warp destination.  
    ◆Game: the following has been added to the status (characters) of the "Execute code" command with the above update.  
    ・"x_rel" ... X coordinates (relative coordinates)  
    ・"x_abs" ... X coordinates (absolute coordinates)  
    ・"x_scr" ... X coordinates (screen coordinates)  
    Y coordinates are also supported.  
    ◆Games: "status conditions" in appearance conditions and basic flow conditions also correspond to the "X and Y coordinates" of yourself and the target.  
    ◆game: when specifying target coordinates in the "warp" command, it will now be possible to specify only one of X or Y coordinates.  
    ◆Other details corrected.
    
    I updated it quite boldly this time, so I'm worried about bugs...  
    We will release it as a beta version for a while.
    
- [v8.81](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v881.zip) 30/1/2017  
    ◆Game: Fixed a fatal bug that caused the game to be forcibly terminated at a stage other than "FreeStage" when using the function implemented in version 8.80 of "System.ini" that moves the game to the title after clearing the stage specified in "FreeStage". Also, this "FreeStage" disables the ranking function.
    
- [v8.80](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v880.zip) 22/1/2017  
    ◆Game: Displays an image "Loading.bmp" with "Loading..." characters when starting the game or loading stage data. If you want to transfer data from an older version to this version, please also move the image "Loading.bmp".( Even without this image, nothing will be displayed and the problem will not occur  
    ◆Game: In the "System" settings, you will be able to move to the title after clearing the stage specified by "FreeStage" in "System.ini". Now it is possible to create a performance before the title is displayed.
    
- [v8.79](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v879.zip) 1/8/2017  
    ◆Game: The "Run Anime" command will now be able to exit the specified anime.
    
- [v8.78](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v878.zip) 10/12/2016  
    ◆Editor: Fixed a bug in stage editing where, after issuing a right-click menu in the palette window, right-dragging an object on the stage to copy a range, and when trying to place it, the placement was different from the one copied. This was a bug that started with version 8.76.
    
- [v8.77](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v877.zip) 9/4/2016  
    ◆Editor: Fixed an issue where the display in the editor would be incorrect if some 256 color (8bit) bitmaps were used.
    
- [v8.76](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v876.zip) 7/9/2016  
    ◆Game: In the stage settings, the scrolling speed of the stage background is divided into scrolling speed and autoscrolling speed depending on the movement of the player character. By the way, in the previous version, when autoscroll is enabled, the value set for "horizontal (or vertical) scroll speed" becomes the autoscroll speed, but the scroll speed is fixed at 1.0 according to the player character's movement. was.  
    ◆Editor: Menu mode, one of the operation modes when right-clicking in the palette window (dotted square icon at the top right of the palette window). In this mode of copying and pasting palette data, you can now right-click and copy block character items that have already been placed on the stage ( You can "paste" it onto a palette
    
- [v8.75](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v875.zip) 29/5/2016  
    ◆Game: Fixed a bug where if "Allow continuous execution by pushing" was disabled in a key condition for flows whose timing was other than "always", the key condition could only hold once. Along with this modification, we have implemented "Conditional determination when "Allow continuous execution by pushing and holding" is disabled in the flow key condition applies the behavior of versions 8.73 and earlier" to the system settings. This setting is enabled if you carried over data from version 8.73 or earlier to this version.  
    ◆Editor: The upper limit of the number of data in the database "Sound Effects" will be changed from 999 to 9999.  
    ◆Editor: Fixed a bug where data could be created in databases, etc. using copy and paste beyond the original data limit.
    
- [v8.73](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v873.zip) 21/3/2016  
    ◆Editor: Fixed a bug where the width of windows such as "Database" may be longer or shorter than originally in some environments.
    
- [v8.71](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v871.zip) 27/2/2016  
    ◆Game: Right-clicking on the title bar will allow you to change the window size from the system menu that appears." You can select from 100% to up to 500% depending on the display size. These maintain their original aspect ratio (length to width ratio).  
    ◆Editor: If you specify "execution time" and "distance" in a movement command other than "circle movement", the movement speed is determined by "distance (dot)" ÷ "execution time", but We will explain and warn you that when this speed is outside the -600～600 range, a speed limit will be applied and the travel distance will be shorter than the specified "distance". This will be a specification. The behavior on the game side is the same as the previous version.
    
- [v8.70](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v870.zip) 23/1/2016  
    ◆We were able to confirm normal operation on Windows 10.  
    ◆Editor: Fixed a bug in some environments where windows such as "Database" would extend more vertically than they should, which could cause "OK" buttons to be hidden off-screen.  
    ◆Game: Fixed a bug in some "Status Condition 3" where the condition may not actually hold if it holds for a moment. In particular, when a character with the condition ''riding on a block'' rode on a jump block and immediately left the block, there was a high possibility that the condition ''riding on a block'' would not hold. Along with this fix, we have implemented "Some "Status Condition 3" condition judgments on characters apply behavior from version 8.60 and earlier" to the system settings. This setting is enabled if you carried over data from version 8.60 or earlier to this version.  
    ◆Game: The behavior when entering both "←" and "→" in the direction key (arrow key by default) is different when "Play game with this setting" in "KeyConfig.exe" is disabled or enabled. Since it was different, unify it as follows When you enter both ←" and "→", both inputs become invalid." Same for ↑" and "↓".
    
- [v8.60](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v860.zip) 29/11/2015  
    ◆Game: Implemented "character drawing type" in database "System 1". There are two types of character drawing: "speed-focused" and "compatibility-focused", and you choose one of them: " Compatibility-oriented" is the same drawing type as versions prior to 8.54.  
    **With "speed-focused" the larger the number of characters on the screen in the action part, the faster (and lighter) drawing in general is likely to be. **However, it depends on the character settings and situation ("graphics", "Z coordinates", character effects, etc.).  
    **A disadvantage of "speed-oriented" is that in some cases the character depth positioning (Z-coordinate, front or back) differs from previous versions before 8.54. In particular, if you run some character effects, they will appear in the innermost part of the characters with the same "Z coordinate", but this will be a specification.( You can control it to some extent by setting the character’s "Z coordinate")**  
    "Speed focused" only supports Direct3D mode. To set the drawing mode to Direct3D, set it to something like "Direct3D=1" in the configuration file "System.ini". When Direct3D is disabled (DirectDraw), "speed-oriented" is not applied, and specifications such as execution speed and character depth positioning remain the same as before version 8.54.  
    Furthermore,**The default and recommended settings are "speed-focused". However, if you carry data from an older version over to this one, it’s initially "compatibility-oriented".**  
    ◆Game: Fixed a bug where there was a case where the "ESC" key could not be used to exit when starting the configuration file "System.ini" with "Direct3D=2".  
    ◆Editor: Updated explanation of approximate drawing speed in the database "Character Effects"." Except for "lens" and "blur", the drawing speed guideline itself has been removed.  
    ◆Others: With the implementation of "Character drawing type", the default setting of "System.ini" has been set to "Direct3D=1". In versions 8.54 and earlier, "Direct3D=2" will prompt the user to select a drawing mode immediately after starting the game, but in future versions, this dialog will not appear and the game will start in Direct3D mode.
    
- [v8.54](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v854.zip) 3/11/2015  
    ◆Game:**Fixed a bug in versions 6.56 and later where when a flying OFF block character carrying a character moves left or right and falls from a normal block, the character on top of it immediately leaves the block character immediately after falling. **In line with this fix, we have implemented "Apply the behavior of version 6.56～8.44 when a block character with a character on it moves left or right and falls from the block" in the system settings. If you carried over data from version 6.56～8.44 to this version, this setting is enabled.  
    When I looked into it, I found out that the first version with a bug, 6.56, was released on 2010/7/22...I can't shake the feeling that it's too late, but I think there's probably a demand for a fix, so I decided to return it to correct operation.  
    ◆Game: **Fixed a bug where the height of the main character's "jump" command was slightly lower than the specified "height"." If the height was 7hbl, it would be 4 dots lower, and if the height was 20hbl, it would be about 16 dots lower. **With this modification, we implemented "The height of the main character"jump’ command applies the behavior of versions 8.44 and earlier" to the system settings. This setting is enabled if you carried data from an older version over to this one.  
    I don't remember if this was originally a specification. I don't think there's anything I haven't noticed before, and it's not that difficult to fix, so I guess it was a specification. .. .. I fixed it because I was curious anyway.  
    ◆Game: In the main character's flow, after the "jump" command of the "height cannot be adjusted with keys" type, there is a command at the end of the command list that has an extremely short execution time, such as "status operation", and it is executed at the "always" timing, etc. to make it jump constantly fixed a bug where the "height" of jumps was higher than the set value. With this modification, we implemented "Jump applies the behavior of versions 8.44 and earlier" to the system settings when an extremely short execution time command is at the end of the command list after a "Jump" command of type "height cannot be adjusted with keys" in the main character flow. This setting is enabled if you carried data from an older version over to this one.  
    ◆Game: In the enemy flow, after the "jump" command, there is a command at the end of the command list that has an extremely short execution time, such as "status operation", and when it is executed at "always" timing etc. to make it jump all the time, Fixed an issue where there would be a gap between landing and the next jump. With this modification, we implemented "Jump in enemy flow when command with extremely short execution time is at the end of command list applies behavior from version 8.44 and earlier" in the system settings. This setting is enabled if you carried data from an older version over to this one.
    
- [v8.44](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v844.zip) 12/10/2015  
    ◆Game: If "WindowMode=0" (full screen) and "Midi_DirectMusic=1" (DirectMusic enabled) are used in the configuration file "System.ini", the app will be minimized when a file selection dialog appears in free mode or replay mode. Because it is done When in full screen, forcefully turn off DirectMusic so that it behaves essentially the same as "Midi_DirectMusic=0". Along with this update, the explanation of "System.ini" has also been updated.
    
- [v8.43](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v843.zip) 30/8/2015  
    ◆Game & Editor: Reduces the possibility of false detection of game and editor program files (Game_v*.exe and Editor_v*.exe) when some security software is inspected. We have taken measures to prevent the worst files from being deleted without permission.
    
- [v8.42](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v842.zip) 28/7/2015  
    ◆Games: If the background music is MIDI, it will be played using DirectMusic software. With this update, "Midi_DirectMusic" will be added to the environment configuration file "System.ini" Setting Midi_DirectMusic=0" will result in a traditional performance method. However, with the conventional performance method, the GM system is turned on instead of GS reset, and even with MIDI data for MSGS, which is the standard sound source for Windows Vista and later, if there are GS standard tones or instructions, it will not play properly. Not recommended. It is also explained in System.ini.  
    ◆Game: Fixed a bug where when multiple shots with "shock" enabled were hit simultaneously on a character that was not in flight, it could be blown up and down more than the set impact value. With this modification, we implemented "the behavior when multiple shots with impacts hit at the same time applies the behavior of versions 8.40 and earlier" in the system settings. This setting is enabled if you carried over data from versions prior to 8.40 to this version.  
    ◆Editor: Avoid closing windows with the Esc key in general. Since there was no confirmation of termination when editing the database, there was a possibility of an accident due to incorrect entry of the Esc key.  
    ◆Other details corrected.
    
- [v8.40](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v840.zip) 5/4/2015  
    ◆Added "About game distribution" to Readme files. (Subtle) measures so that people can see "About secondary distribution.html" when distributing games.  
    ◆Other details corrected.
    
- [v8.39](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v839.zip) 19/4/2015  
    ◆Game: You can now disable space key poses in action parts.  
    ◆Game: Fixed a bug where when a non-blocking character touched a blocking character under certain conditions, incorrect position correction would be performed, resulting in crushing to death or warping. Along with this modification, we have implemented "Position correction when a non-blocking character comes into contact with a blocking character applies the behavior of versions 8.37 and earlier" in the system settings. This setting is enabled if you carried over data from version 8.37 or earlier to this version.  
    ◆Game: Fine-tune the display position of some parenthetical characters ｛｝. Corrected because there was too much difference between the left and right characters when something was enclosed in parentheses. However, this is adjusted only with the recommended setting, "MS P Gothic".  
    ◆Editor: Fixed a bug in the "Execute code" command where a dialog with a division by 0 error would appear if an expression was created to divide by a variable, making it impossible to complete the configuration.  
    ◆Editor: When editing some data lists such as flow conditions or command lists, if you try to insert new data with multiple selections and cancel with "×" or "Cancel", the command selected before insertion will be changed. Fixed a bug where all files were deleted.  
    ◆Other details corrected.
    
- [v8.37](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v837.zip) 2/10/2015  
    ◆Game: Before version 8.36, when the "Block Summon" command checks "Failure if there is an enemy (main character) that hits the block", even if there is a flying character that can pass through the block, Fixed a bug that caused the summon to fail. Along with this modification, the system settings have been changed to ''Block summon'' command, ''If there is an enemy (main character) that hits the block, it will fail.'' When enabled, the behavior applies to versions 8.36 and earlier.'' did. This setting is enabled if you carried over data from version 8.36 or earlier to this version.  
    ◆Game: Even if you set "English=1" in the environment settings file "System.ini", the exit confirmation dialog remained in Japanese, so I changed it to English.  
    ◆Other details corrected.
    
- [v8.36](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v836.zip) 1/11/2015  
    ◆Game: Fixed a bug where large characters in the title menu, challenge mode stage select screen, and options screen would be illegally replaced with symbols even if "Supports displaying symbol images" was disabled in the system settings.  
    ◆Editor: In the explanation of "Supports display of symbol images" in the system settings, add "Not compatible with a small number of large characters." A small portion of large-sized characters" specifically refers to large-sized characters in the title menu and the Stage Select and Options screens in Challenge Mode. These are not replaced by symbols.  
    ◆Other details corrected.
    
- [v8.35](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v835.zip) 24/12/2014  
    ◆Game: Implemented game end confirmation. No confirmation during test play or full screen.  
    ◆Game: Fixed a bug where when the "direction" of the "straight line movement" command was "top right" or "bottom right", if you added even a slight "angle", it would move left and right in reverse.
    
- [v8.34](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v834.zip) 7/12/2014  
    ◆Game: Fixed a bug in the system settings where the initial number of people in Story Mode could not be set to ∞if the number of people was not "shared throughout Story Mode".  
    ◆Editor: When checking "Same as file name" in "Name" of data such as database "Character's dedicated bmp" and "Effects", a specific full-width character such as "n" is added to the end of the folder name in "Path". Fixed a bug where the folder would be included in the name if it was included. For example, if the image path was ".\bmp\hmm\image.bmp", the data name would be "hmm\image.bmp" It is correct to say "image.bmp" because it is the same as the file name.
    
- [v8.33](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v833.zip) 2/11/2014  
    ◆Game: In version 8.17～8.32, when the "display position" of a picture is "displayed in the center of this character" or "displayed in the center of the main character", the picture follows the character (when the character moves, the picture also moves). Fixed a bug In fact, the bugged version may be easier to use, but it's not a good idea to change the behavior with a version update, so we moved it back to 8.16 or earlier. Along with this fix, we have added "Apply version 8.17～8.32 behavior when the "display position" of a picture is "displayed in the center of this character" or "displayed in the center of the main character" to the system settings.” was implemented. If you carried over data from version 8.17～8.32 to this version, this setting is enabled.  
    ◆Other details corrected.
    
- [v8.32](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v832.zip) 18/10/2014  
    ◆Game: When summoning a walking character or a flying character that hits a block using the "Character Summon" command, if there is a block at the summoning destination, it will fail, but even if you try to summon it to a position that barely hits the block, it will fail. Fixed because there was a case.
    
- [v8.31](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v831.zip) 12/10/2014  
    ◆Game: Added "still animation" to the animation settings of mobile commands. For example, I think it comes in handy when you want to achieve pseudo-gravity or wind using a straight line movement command. By the way, the traditional anime "None" is not a static anime, but a setting that does not change the anime (it might have been easy to misunderstand...).  
    ◆Game: fixed a bug in version 8.29 that forced the number of data in the database "Sword Type" to the upper limit of 128. The original default data was 2 pieces, so the third and subsequent pieces were useless data. Even if you inherited data from a version older than 8.29, if you started version 8.29, there should be 128 sword types, so please delete unnecessary data from the database.  
    ◆Game: Fixed position correction when changing "giant" for flying characters in the middle of a stage. In particular, when the flying character becomes smaller, the hit detection shifts slightly downward, making it easier to be crushed to death by blocks. Apart from that, we are also taking measures to prevent crushing immediately after becoming gigantic (this does not mean that it can be completely prevented). Along with this modification, we have implemented "Position correction when changing "Giant" for a flying character in the middle of a stage applies the behavior of versions 8.29 and earlier" in the system settings. This setting is enabled if you carried data from an older version over to this one.  
    ◆Game: Fixed a bug where when making a character gigantic with an item, the moment the character became larger, the hit detection for the item would temporarily increase, resulting in the character acquiring an item that was far away from that character. The greater the change in character size, the more distant items they could have gotten.
    
- [v8.29](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v829.zip) 9/6/2014  
    ◆Game: Fixed a bug where when walking from a block with "obtained items" set to a jump block with "obtained items" set without jumping or falling, the game would jump but not get the "obtained items".
    
- [v8.28](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v828.zip) 23/8/2014  
    ◆Game: Fixed a bug where if you unchecked "Allow saving replays with F1 and F2 keys" in the system settings, the result of "random numbers" in the "Manipulate status" command would be the same every time. The version in which this bug occurred is unknown (unconfirmed).  
    ◆Game: Fixed a bug that could cause the game to force close when a super-giant character such as 100x was moved off stage.  
    ◆Game: Fixed a bug that caused the game to fail to start in some environments.  
    ◆Game: Fixed a bug where the window image "Window.bmp" was no longer displayed correctly in 256 colors in DirectDraw mode starting from version 8.25.  
    ◆editor: fixed a bug where the data in the input form did not match the data selected on the list when data was added with the "New" button, for example in the database.  
    ◆Editor: Fixed a bug where the sword type specified by the "Sword" command was out of number by 1 (starting from number 0).  
    ◆Editor: Fixed a bug where selecting number 129 or later in the sword type specification in the "Sword" command would force exit.  
    ◆Editor: The number of data that can be created in the database "Sword Type" is limited to 128 Starting with this version, the sword types 129 and later cannot be loaded and are automatically deleted from the database.  
    ◆Fixed other minor bugs.
    
- [v8.27](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v827.zip) 5/7/2014  
    ◆Game: If you check "Reset after death" in the stock settings in the "System" settings, the stock data should have been reset and the next play would have left the player data placed on the stage as is Fixed a bug where stock data would not actually be reset and would become player data at the start of that stage. Although unconfirmed, this bug probably started from 2.47beta. With this modification, we implemented "Reset after death" behavior in stock applies behavior from versions 8.25 and earlier" to the system settings. This setting is enabled if you carried data from an older version over to this one.
    
- [v8.25](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v825.zip) 29/6/2014  
    ◆Game: Fixed a bug where the message command window would not be transparent even if transparent color was used for the window image "Window.bmp". If you make it into a mesh, it may look translucent, so I felt the need to fix it.  
    ◆Editor: Fixed a bug where, for example, editing a database, if left-clicking and right-clicking at the same time were performed on a list box of a type where a pop-up menu appeared when right-clicking, the editor could be forced to close or the pop-up menu would not display properly.  
    ◆Editor: Set the upper limit on the number of data in the common palette and stage palette from 999 to 9999.  
    ◆Other details corrected.
    
- [v8.24](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v824.zip) 1/19/2014  
    ◆Game: Fixed a bug in version 8.23 where symbol images were displayed in the optional "Ranking Registration Name".
    
- [v8.23](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v823.zip) 1/18/2014  
    ◆Game: Fixed an issue where symbol images could not be displayed in lowercase letters on the title screen, options screen, world map screen, and challenge stage selection screen even if "Supports display of symbol images" was turned on in the system settings. Conversely, if you update a game that uses lowercase letters on the settings screen above to this version, the lowercase letters will be replaced with symbol images. If this happens, we suggest either unchecking "Supports display of symbol images" in the system settings, uppercase alphabetical characters, or full-width lowercase letters (F9 key).  
    ◆Editor: Fixed a bug in the World Map map chip window where when scrolling the window, the selected map chip and its display would no longer match.
    
- [v8.22](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v822.zip) 15/12/2013  
    ◆Game: In the "Warp" command, change the warp position when specified in "Absolute coordinates" (←stage coordinates) "Screen coordinates" as follows.
    
    ＜Before change＞  
    "Absolute coordinates": The coordinates specified are at the bottom center of the warp character (same as the initial position when placed at those coordinates in the editor)  
    "Screen coordinates": The top left of the warp character is the specified coordinates (same as the message, effect, and picture specified in "Stage coordinates" and "Screen coordinates")
    
    ↓
    
    ＜after change＞  
    "Absolute coordinates": If the warp character's flight is OFF, the coordinates specified are at the bottom center of the warp character (same as the initial position when placed at those coordinates in the editor). If the warp character's flight is ON, the center of the warp character will be at the specified coordinates.  
    "Screen coordinates": If the warp character's flight is OFF, the coordinates specified are at the bottom center of the warp character (same as the initial position when placed at those coordinates in the editor). If the warp character's flight is ON, the center of the warp character will be at the specified coordinates.　 ←Unified with "absolute coordinates"
    
    It was a difficult decision, but I did it like this.  
    What's complicated is that if you specify the display of a message, effect, or picture using "stage coordinates" or "screen coordinates", the upper left will be the specified coordinates.  
    It feels like it's too late, but get used to it. .. .. I think this is easier to use.  
    In line with this specification change, we have implemented "The operation of the "warp" command specified by "absolute coordinates" and "screen coordinates" in the system settings applies the operation of versions 8.21 and earlier". This setting is enabled if you carried data from an older version over to this one.
    
- [v8.21](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v821.zip) 1/12/2013  
    ◆Game: Implemented a check item in the story mode settings in "System Settings" to check whether to "select the save destination file from the beginning and then start the game with AutoSave ON". By default, it is ON, but when data from an older version is carried over to this version, it is turned OFF.  
    ◆Game: In the assault movement and guided movement commands, when "autoscroll and sync" of the moving character and the character targeted for movement are both turned on, the movement speed becomes abnormal under certain circumstances, and as a result, the character moves out of the stage in an instant. Fixed a bug that could cause it to disappear.  
    ◆Others: "How to delete save data" is written in Readme.txt and Readme2.txt. If you want to start the game with AutoSave ON, write reluctantly as you cannot start the game without free save data.( I really hope I can get it out of the game!)
    
- [v8.20](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v820.zip) 20/10/2013  
    ◆game: implemented checks for "location memory" and "crushing to death avoidance" in switching the "flight" state of the "manipulate status 2" command." Check "Avoiding crushing to death" to return the character’s position to the position memorized in "Position memory" in the event of a possible crushing to death. For example, it is safe to use it when you want to temporarily perform short flight movements ("flight (hit a block)") from a walking state. Turning from flight OFF to flight ON (hitting a block) reduces the hit detection range against the block, and you may be caught between blocks during subsequent flight OFF, but you can avoid crushing to death when this happens.  
    Example: For a character who is flying OFF → flying ON (position memory ON) → flying movement (psycho crusher, etc.) → flying OFF (crushing death avoidance ON)  
    *However, instead of reliably preventing crushing to death, even a small chance of crushing to death can cause the character's position to be restored.
    
    In particular, if you make your character bigger due to giant size, the difference in hit detection range between flying ON (hitting a block) and flying OFF will increase, making it easier to be crushed to death in unexpected situations, so you may want to use this function.  
    Not only can you switch from a walking state to a flying state, but you can also safely perform "flying (hitting a block)" →"flying (sliding through a block)" → "flying (hitting a block)" etc.
    
- [v8.19](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v819.zip) 30/9/2013  
    ◆Game: Changed the "status conditions", "status operations", and "code execution" when the number of people (number of people remaining) is ∞ (infinite) as shown below.
    
    ＜Before change＞  
    ・Status condition (left side is "number of people remaining"): Always fails  
    Status condition (right side is "number of people remaining"): Condition is determined as 0  
    ・Status manipulation/code execution (left side is "number of people remaining"): Always fails (infinite number of people cannot be changed)  
    ・Status operation/code execution (right side is "number of people remaining"): Calculated as 0
    
    ↓
    
    ＜after change＞  
    Status condition (left side is "number of people remaining"): Condition determined as 100 ← Since the upper limit of the number of people is 99, we set it to +1, which is 100  
    Status condition (right side is "number of people remaining"): Condition is determined as 100  
    ・Status manipulation/code execution (left side is "number of people remaining"): Always fails (infinite number of people cannot be changed) ←No changes  
    ・Status operation/code execution (right side is "number of people remaining"): Calculated as 100
    
    **You may need to be careful because the number of players is set ∞even in games where this is not the case, the number of players is automatically set during test play of a single stage∞.**  
    In line with this specification change, when "status conditions" and "status operations" and "code execution" when "number of people∞" are specified in the system settings, the operation will be the same as before version 8.18. We have implemented "apply the following operations". This setting is enabled if you carried data from an older version over to this one.  
    ◆Editor: Fixed a bug where the "Clear" button did not work in the database "World Chip".
    
- [v8.18](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v818.zip) 15/9/2013  
    ◆Game: Due to a bug in version 8.17 where the position correction when a character hits a blocking character is strange, a check item "Apply the behavior of versions 8.16 and earlier to correct the position when a character hits a blocking character" has been added to the system settings. However, we have fixed a bug where this setting is not reflected. In addition, if data from version 8.16 or earlier was saved in the 8.17 editor, if you run this version of the editor with that data, this check will be removed (this will be the behavior after the bug is fixed). Check if there are any problems.  
    ◆Game: Fixed a bug where when switching to "Flight OFF → Flight ON → Flight OFF" for the main character, the "Block Riding" judgment for the main character in Flow's status condition 3 would not work. Along with this, we implemented "Determining whether the main character is "on a block" under Flow status condition 3 applies the behavior of versions 8.17 and earlier" in the system settings. This setting is enabled if you carried data from an older version over to this one.  
    ◆Game: Fixed an issue where the "Change graphics" command would force quit in the game if a dedicated bmp for a character that no longer exists (but was later deleted in the database) was specified." Even with the "Arrange" command, prevent the calculation result from becoming a character-specific bmp that does not exist.  
    ◆Editor: In "Status Condition 2" in the basic flow conditions, the "System" selection of "horizontal scrolling" and "vertical scrolling" and the display in the basic condition list are incorrect, and if you create it and then try to edit it, Fixed a bug that could cause it to kill.  
    ◆Editor: Fixed a bug where the order of movement using the Tab key was incorrect when editing item data.  
    ◆Editor: Change the default setting of the project option "Save stage overwrite after Action Editor 4 update" from "Move old version stage file to "old_ver" folder" to "Delete old version stage file". The reason I changed it now is because I don't think it's useful as a backup function...  
    ◆editor: "Jungle_A" added as default data to database "BGM". The file itself had existed for a while, but I forgot to add it to the database...  
    ◆Other details corrected.
    
- [v8.17](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v817.zip) 5/8/2013  
    ◆Game: Fixed a bug where the position correction when a character hit a blocking character was incorrect in certain situations. Worst of all, people could die if they were caught in a block even though they weren't. Along with this, we implemented "Position correction when a character hits a blocked character applies the behavior of versions 8.16 and earlier" in the system settings. This setting is enabled if you carried data from an older version over to this one.  
    ◆Game: Fixed a bug where the display position of messages and pictures may deviate from the original position.
    
- [v8.16](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v816.zip) 21/7/2013  
    ◆Editor: When selecting data in a list in database or flow settings, etc., if you right-click and select a menu and try to switch between different data, the data that should have been switched will not be reflected in the form and will be the same as before the switch. It ends up being the same data Fixed a bug where editing data in that state (without closing the menu) would overwrite the data before switching.  
    ◆Editor: Fixed a bug in the "Message" command where even if the "display position" was "specified by stage coordinates", only up to 20 (bl) horizontally and 15 (bl) vertically, the same as the screen coordinate range, could be specified.
    
- [v8.15](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v815.zip) 7/7/2013  
    ◆Editor: Fixed a bug where the volume would return to 100% when switching BGM data in the database "BGM".
    
- [v8.14](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v814.zip) 23/6/2013  
    ◆Game: Implemented "volume" in database "BGM".  
    You can now adjust the volume for each song.  
    ◆Game: Midi playback has stabilized.  
    It seems that in conventional Midi playback, there were cases where the playback did not work properly depending on the playback environment.  
    **We used "GuruGuruSMF4.dll" (GuruGuruSMF) to play Midi. Without the file "GuruGuruSMF4.dll" that comes with this version (although no error will occur), you will be playing traditional Midi instead of GuruGuruSMF. In this case, the song-by-song volume adjustment described above also stops working.  
    **In addition, GuruGuruSMF seems to support the loop specification (CC#111) from Enterbrain and RPG Maker 2000 onwards, but Action Editor 4 does not (it may be possible, but we have not confirmed its operation).  
    ◆Game: If BGM with the same number in the database is played consistently with "Loop playback OFF → Loop playback ON", "Loop playback ON → Loop playback OFF", or "Loop playback OFF → Loop playback OFF" outside of the stage part, Fixed a bug where the playback position did not return to the beginning.  
    I think the most likely one is "Loop playback OFF in title → Play the same BGM in World Map or Challenge stage selection". At this time, there was a bug where the BGM was not replayed in the World Map or Challenge stage selection.  
    I usually turn off the BGM, so I was late in realizing it...
    
- [v8.13](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v813.zip) 21/5/2013  
    ◆Editor: In the "status condition" in the basic conditions of character flow, if you set the left side to character variable number 9 or higher and the right side to common variable or stage variable number 9 or higher, and then re-edit this data, the variable number on the right side will be 1. Fixed a bug where it would become. It would be fine if the variable remained at number 1 when re-editing and "OK" was not pressed, but it was a dangerous bug that could cause the variable to unknowingly become number 1 when "OK" was pressed.
    
- [v8.12](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v812.zip) 6/5/2013  
    ◆Game: Implemented a "world chip" (world map chip) in the database. This allows you to add a map chip for the world map. Additionally, the settings for whether or not to move were previously fixed, with the upper row being immovable and the lower row being movable, but now they can be set for each map chip.  
    ◆Game: update of WorldChip’s image file "WorldMapChip.bmp". The size has been expanded to draw up to 75 map chips. In addition, they replaced the color of the lines from black to brown. If it’s a database (confirmation) graphic, the background will be black, so browning it makes it easier to see. If you want to carry over data from an older version, please replace "WorldMapChip.bmp" as much as possible if you are still using it. Otherwise, it will assimilate with the background and be difficult to see.  
    ◆Game: Update to the world map event image file "WorldEvent.bmp". The size has been expanded to draw up to 15 events. To be more precise, I feel like I was able to add the image by extending it vertically for some time, but it was not supported (probably).
    
- [v8.11](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v811.zip) 24/4/2013  
    ◆Editor: Fixed a bug in versions 8.03 and later that could allow unauthorized memory access when editing database or character data on Windows 8. In the worst case scenario, this could cause a blue screen and cause the PC to restart on its own. If nothing special happened on Windows 8 and even after version 8.03, please update to this version.  
    ◆Editor: Fixed a bug where, in the "Change graphics" command, if you specified number 120 or higher of the dedicated bmp and then tried to re-edit that command, it would end up at number 119.  
    ◆Editor: Fixed a bug where the display position of some graphics on the editor (such as database character graphics) depended on the OS design settings, and in many environments they would be slightly off-kilter than their original position.
    
- [v8.09](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v809.zip) 3/1/2013  
    ◆Game: From version 8.03 onwards, if the main character rides a block whose "action" is "move left" or "move right" and moves to another block without jumping or falling, the "action" of the block he or she has moved to is fixed. I think this is a serious bug. If you transfer data from a version earlier than 8.03 to a version later than 8.03, the "compatibility" setting in the system settings will be automatically enabled, so there is no problem, but if you started creating data from a version later than 8.03, This bug should occur, so please update to this version.
    
- [v8.08](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v808.zip) 17/2/2013  
    ◆Game: Fixed a bug where when a character received an upward impact and hit their head against a blocking character (instead of a normal block), the speed caused by the impact would not be nullified and would bounce back with force. Along with this, we implemented "applying the behavior of versions 8.07 and earlier when a character receives an upward impact and hits their head against a blocking character" in the system settings. This setting is enabled if you carried data from an older version over to this one.  
    ◆Game: Fixed a bug where when the main character transferred from a block where "No jumping" was set to a blocked character without jumping or falling, the prohibited jump state was not lifted until the main character got off the blocked character.  
    ◆Game: fixed a bug where, at the edge of the stage, if you swung a large sword with a width of 320 or more towards the outside of the stage, the sword would shift out of position. The larger the sword, the more it will shift.
    
- [v8.07](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v807.zip) 27/1/2013  
    ◆Games: Fixed a bug where "force" conditions were ignored when targeting "child characters" (conditional) with the "Set Target" command.  
    ◆Other details corrected.
    
- [v8.06](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v806.zip) 20/1/2013  
    ◆Editor: Fixed a bug in versions 7.90 and later, when switching blocks with the "←" "→" button when editing block palette data, "action" was data other than "none", and the numeric value of that action ("X=") would automatically return to the default value.
    
- [v8.05](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v805.zip) 1/19/2013  
    ◆Game: Fixed a bug where the ground return movement command would not return if the speed was negative. Along with this, we implemented "applying the behavior of version 8.04 or earlier when the speed is negative in the ground wrap movement command" in the system settings. This is checked if the data from the previous version is carried over to this version.  
    ◆editor: in Windows 8, once displaying tab "4" (flow) when editing character data, Fixed a bug where when editing item data and displaying the flow editing window from the "Change flow" command → "Flow settings" in the "Effects" (command list), the bottom of the window would be cut off and the "OK" button etc. would be hidden.  
    ◆Editor: Fixed an incomplete explanation of the "Stage Clear" command added in version 8.04.  
    ◆Other details corrected.
    
- [v8.04](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v804.zip) 23/12/2012  
    ◆Games: Fixed a bug where the application would freeze in the dialog for selecting files in free mode or replay mode on Windows 8.  
    ◆Game: When setting the event (world) on the world map and changing "game clear" to "enter the second lap" and playing from the second lap onwards, worlds with "world number" of "0" are not cleared. Fixed a bug that caused it to become. According to the specifications, World No. 0, which was supposed to be displayed in blue on the world map after being cleared from the beginning, will turn red after the second lap. Note that if you clear world number 0 with this bug occurring, or if you load save data in a program after this version, (all worlds number 0) will return to blue safely.  
    ◆Editor: Describes precautions to be taken when "specifying by path" the next stage to be played in the "stage clear" command.( The game behavior has not changed).  
    ◆Other details corrected.
    
- [v8.03](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v803.zip) 11/12/2012  
    ◆Game: Fixed a bug where the main character's falling speed was too fast when descending from blocks with some "actions" or "obtained items". Along with this, we implemented "the behavior of the main character falling after getting off a block with some "actions" or "obtained items" (gravity) to apply the behavior of versions 7.92 and earlier" in the system settings. This setting is enabled if you carried data from an older version over to this one.  
    ◆Editor: Fixed a bug in Windows 8 where the vertical width of windows that can be switched using tabs such as editing character data or "database" would be longer than the original width, making it difficult to press buttons such as "OK".
    
- [v7.92](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v792.zip) 23/10/2012  
    ◆Game: Fixed a bug where sound effects would be played off-screen even if you checked "Do not play if the user is off-screen" in the sound effect settings of the "Jump" command.
    
- [v7.91](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v791.zip) 7/10/2012  
    ◆Game: Fixed a bug in the "Disappear" command where when a shot of a child or younger is annihilated, the target of the shot to be annihilated is the parent character (shot user), and if certain conditions are involved, it will be forcibly terminated. To give a concrete example, it summoned a Belphego (a character who shoots shots with himself as the target) from the default palette, and when the summoner tried to eliminate "characters younger than children and shots younger than grandchildren", it forcibly terminated it.  
    ◆Game: Fixed a bug where, under distance conditions for characters and flows, if you set the range display function to "display even if you have not appeared", the line indicating the range will not scroll or be displayed at all if the character has not appeared. Fixed.  
    ◆Editor: When editing stage palette data for a character or item, press the "←" "→" button at the top right of the window to move from data A, which inherits data from the common palette, to data B, which does not inherit data. Fixed a bug where the inheritance settings for each item could now be checked.  
    ◆Other details corrected.
    
- [v7.90](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v790.zip) 27/9/2012  
    ◆editor:: in editing character palette data, if you view tab 4 and then move to another tab (tab 3, etc.), then switch characters using the "←" "→" button in the upper right corner and then return to tab 4 again, Fixed a bug where some settings (flow "ID", "timing", etc.) on tab 4 of the character before switching were copied. If you save the data by pressing "OK" in this state, the data will be rewritten, and above all, you may not even notice it, so I think it’s a dangerous bug. We apologize for the inconvenience, but please update to this version if possible. I'm really sorry.
    
- [v7.86](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v786.zip) 9/8/2012  
    ☆again from beta to full (stable)." It just has the notation "beta" and has no deep meaning.  
    ◆Editor: Fixed a bug where the palette editing mode (behavior when right-clicking) in the palette window changed when switching palettes.
    
- [v7.85 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v785b.zip) 19/8/2012  
    ◆Editor: If you place the player character in fill mode, it may force quit, so make it impossible.
    
- [v7.84.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v784b.zip) 21/7/2012  
    ◆Editor: Fixed a bug where 8 could be specified in the "Character Summon" command even though the character's "force" was only up to 0～7. If you played the game with Force 8, it would be forcibly terminated.  
    ◆Editor: Screen In Windows Vista and Window 7, the horizontal scroll bar is hidden in the status bar only when starting for the first time (?) Fixed bug.  
    ◆Editor: Fixed a bug where the horizontal scrollbar would be hidden and the layout would collapse if the menu bar became two-tiered by reducing the width, such as in the main window.  
    ◆Editor: Fixed a bug where the palette window would stretch slightly vertically every time the editor was restarted or a new stage was created or opened. I thought I had fixed it with 7.80beta, but for some reason it wasn't done, so I decided to fix it again.  
    ◆Editor: In Windows Vista and Window 7, the horizontal scroll bar is hidden in the status bar only when starting for the first time (?) Fixed bug.  
    ◆Editor: Fixed a bug where the combo box drop-down list would behave strangely under certain conditions, making it difficult to select items, such as in the "Arrange" command.  
    ◆Other details corrected.
    
- [v7.83.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v783b.zip) 10/6/2012  
    ◆Game: Fixed a bug where multiple messages were displayed, and if you enabled "pause" by setting the message ID and replacing one of the displayed messages other than the last message sent, it would force an end.  
    ◆game: in single stage play (specified by FreeStage in System.ini) or in single stage test play, if "-1" is added to the end of the file name of the stage to be played (for example, "stage-1.stg4_***"), the common variable does not return to its pre-play value on the second clear Fixed a bug where common variables were carried over on the next play.  
    ◆Game: If you check "If the character's orientation changes midway through execution, reverse speed" with the linear movement command and then set the direction of movement to "Specify by target coordinates", originally "If the character's orientation changes midway through execution, Fixed a bug where "Reverse speed" was reflected in the game even though it was supposed to be disabled. Along with this, we implemented "applying the behavior of versions 7.82 and earlier when the direction of movement is "specified in target coordinates" using the linear movement command in the system settings. This is checked if the data from the previous version is carried over to this version.  
    ◆Game: The background will not move when you pose with the spacebar.  
    ◆Game: Fixed a bug where using a (0 second) sound effect (wav) without waveform data might cause a kill in the worst case scenario." If you are using something like "silent.wav", you may want to replace it with this version.  
    ◆Game & Editor: All files in versions higher than the program (executable file) in Action Editor 4 will no longer be usable at all. Originally, the use of higher versions of files was not considered, but there were cases where they could be used, which could have led to unexpected glitches, so starting with this version, files always fail to load.  
    For example, after updating Action Editor 4 from version 7.83 to 7.84 and saving the data, you can switch it back to 7.83 and the file will not be usable.  
    ◆Editor: Fixed a bug in the general database data list and character florist that would cause it to kill if pasted with "Ctrl＋V" while holding down the left mouse button.  
    ◆Editor: Fixed a bug in the "Basic Anime Set" for character editing that would cause the game to force close if the character left-mouse button was pressed and the character left the frame of the list was excluded.  
    ◆Other details corrected.
    
- [v7.82.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v782b.zip) 18/5/2012  
    ◆Game: Fixed a bug where the picture ID could not be changed using the "Arrange" command.  
    ◆Games: Fixed a bug in the "Warp" command where warping while scrolling would cause the warp position to shift slightly. Along with this, we implemented "Warp behavior while scrolling applies behavior from versions 7.81 and earlier" to the system settings. This setting is enabled if you carried data from an older version over to this one.  
    ◆Game: Fixed a bug where the background of the next stage would be displayed momentarily when switching stages in a world consisting of multiple stages.
    
- [v7.81 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v781b.zip) 27/4/2012  
    ◆Game: Fixed a bug where when a character received an upward impact and hit their head against a block, the speed caused by the impact would not be nullified and would bounce back with force. Along with this, we implemented "applying behavior from versions 7.80 and earlier when a character receives an upward impact and hits their head against a block" in the system settings. This setting is enabled if you carried data from an older version over to this one.  
    ◆Editor: Fixed a bug where the BGM did not stop when closing the window with "×" when editing the "BGM playback" command.
    
- [v7.80 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v780b.zip) 22/4/2012  
    ◆Game: in commands to the "input direction" (movements, shots, etc.), starting from version 7.78beta, the behavior when pressing the "↓" and "↑" keys simultaneously or the "←" and "→" keys simultaneously has changed (this is not written in the update history) Returns the behavior of versions earlier than 7.78beta to commands that move in the "input direction".  
    Fixed it especially when pressing the "↓" and "↑" keys because I didn't like moving forward.  
    The behavior when pressing the "↓" and "↑" keys at the same time in the "input direction" movement command is as follows.
    
    ・7.77beta and earlier: does not move  
    ・7.78beta and 7.79beta: moving forward  
    ・7.80beta: Does not move (returned before 7.77beta)
    
    Regarding replay playback, we have specially designed the behavior to match the version of the replay file, so any number of versions can now be played without any problems.  
    ◆Editor: Fixed a bug that allowed multiple player characters to be placed after executing "undo".  
    ◆Editor: Fixed a bug where the palette window would stretch slightly vertically every time the editor was restarted or a new stage was created or opened.
    
- [v7.79.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v779b.zip) 1/4/2012  
    ◆Editor: Fix default data. Added "if SP is 1 or more" as a basic condition for the flow of shots that can be shot with the main character's C key (SP1 consumption). As a result, we have fixed a bug where shots can be fired by repeatedly hitting the C key even when SP is 0. Similarly, we have also fixed items that change C key actions.
    
    Why was it that in previous versions, even though SP conditions were determined in the flow group, shots (SP1 consumption) could be fired by repeatedly hitting the C key even if SP was 0?  
    I wrote the reason in the help.
    
    Excerpt from Help↓  
    ////////////////////////////////////////  
    ***If you disable "Allow continuous execution by holding down" with the same key conditions for multiple flows in the same group, flows other than the top flow may be executed regardless of the "basic conditions". there is. **This is because, in order to avoid "continuous execution due to key pushing", the program always disables the key condition from being established once until the key condition fails. While this key condition is disabled, it may flow to another flow (other than the top flow within the same group).  
    I'll give you an example.
    
    ＜example＞  
    ［Flow A］ Group: a Basic condition: SP is less than or equal to 0 Key condition: When "C" is pressed Command: Play sound effect (error sound)  
    ［Flow B］ Group:a Basic condition: None Key condition: When "C" is pressed Command: Shot, manipulation of status (own SP-1)
    
    The above is a shot setting that consumes 1 SP, which is also set for the default protagonist. Suppose that the key conditions for flow A and flow B are exactly the same.  
    **If you press the C key while the user's SP is 0 during the game, it seems that only flow A will be executed since flow A and flow B are in the same group, but in reality, if you press the C key repeatedly, it will be executed for the reasons mentioned earlier. Flow B may be executed instead of Flow A. **It would be a problem if you could shoot a shot even though your SP is 0.  
    If you want to eliminate this problem, please set the conditions firmly for Flow B as well, as shown below.
    
    ［Flow A］ Group: a Basic condition: SP is less than or equal to 0 Key condition: When "C" is pressed Command: Play sound effect (error sound)  
    ［Flow B］ Group: a Basic conditions:**SP of 1 or more**Key condition: when "C" is pressed Command: shot, manipulation of status (own SP-1)  
    ////////////////////////////////////////
    
    I really wanted to fix the program, but after spending more than 30 hours on it, I couldn’t do anything about it, so I decided to make it into a specification. Please note.
    
- [v7.78 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v778b.zip) 3/11/2012  
    ◆Game: Fixed a bug where even if you uncheck "Do not make it a moving animation" in the moving command, if "moving animation" is other than "None", the command's own moving animation will be enabled.  
    ◆Game: version 7.73beta～7.77beta, if you use the "guided movement" command to "prevent blurring" and move it with "inertia", it will move as fast as the target and lose inertia after moving to the target position. Fixed a bug that would cause it to disappear.  
    ◆Game: Fixed a bug in "KeyConfig.exe" where assigning the gamepad direction key to an action key would not work in the game.  
    ◆Editor: If you turn off "parallel execution" and enable "move until target coordinates" with the "straight line movement" command, there is a problem that the subsequent animation (for example, the animation when executing the shot) will be misaligned. Note this in the editor as a specification.
    
- [v7.77 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v777b.zip) 27/2/2012  
    ◆Game: fixed a bug in version 7.76.beta that caused the firing position of shots and summons to be unusual. For example, if a right-facing flying character shoots a shot outside the edge of the stage, the shot will come out from the left edge of the screen. I think this is a rather fatal bug, so if you are using version 7.76beta, please update.
    
- [v7.76 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v776b.zip) 24/2/2012  
    ◆Game: Fixed a bug in version 7.73beta～7.75beta where flying characters could be displayed one dot off to the left or top.
    
- [v7.75 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v775b.zip) 17/2/2012  
    ◆Game: Fixed a bug in flow key conditions where if multiple conditions were set and "Continuous execution by holding down" was enabled, continuous execution may not occur even if the key in the last condition was held down.
    
- [v7.74.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v774b.zip) 2/12/2012  
    ◆Game: fixed a bug in version 7.73beta that caused walking characters to blur outside the edge of the stage during autoscrolling.
    
- [v7.73beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v773b.zip) 2/6/2012  
    ◆Game: Fixed a bug where characters may be blurred when "synchronized with autoscroll" during autoscroll (especially when the scroll speed is not a multiple of 10).  
    ◆Game: Fixed a bug where "Disable horizontal (vertical) movement" in the "Linear movement" command was not reflected at all. Along with this, we implemented "Apply behavior from versions 7.72 and earlier when "Disable horizontal (vertical) movement" in the linear movement command is enabled in the system settings. This setting is enabled if you carried data from an older version over to this one.  
    ◆Editor: Fixed a bug where the "Execute code" command would kill if you wrote code to assign a value to a constant or incorrect string and pressed "OK".  
    ◆Other details corrected.
    
- [v7.72beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v772b.zip) 30/1/2012  
    ***Due to major feature expansions and additions in version 7.70, all versions after 7.70 have been returned to the beta version. It may contain many bugs until this "beta" notation is removed.**  
    ◆Game: Fixed a bug in versions 7.70 and 7.71 that could cause the game to kill when using the "Sword" command.  
    ◆Game: Fixed a bug where if a wave file in a format other than PCM (such as ADPCM format) was used for sound effects, the game would force close. Previous versions didn't take into account formats other than PCM, so you could end up trying to load a format other than PCM format as PCM format and end up in an incorrect memory area. Fixed that. There is no change in the fact that only PCM format can be played. Along with this, we added to the help that only PCM format waves can be played. By the way, the editor can play formats other than PCM, but I will specify it.
    
- [v7.71 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v771b.zip) 22/1/2012  
    ◆Game: Fixed a bug where enabling "Automatic Update" with the "Messages" command would force exit under certain conditions.  
    Specifically, while displaying a variable with "auto-update" in a non-pause type message such as "Show until end of stage" (this is called message A), changing the value of that variable in "status operations" etc. Immediately after that (in the command list, just below it) This time, suppose you want to display a message of a type that pauses, such as "Display until progress key is pressed" (this is called message B). At this time, if the digit of the variable value changes and the width of message A changes, such as in "Status operation", it will be forcibly terminated after message B ends. If the width of the message does not change even if the digits change, it will not be forcibly terminated.  
    ◆Editor: Fixed a bug where "target range" and "target force" could not be specified when "target" was "character" or "shot" in the annihilation command. This was a bug that only occurred in version 7.70 By the way, it is a specification that "target range" and "target force" cannot be specified other than "character" and "shot".
    
- [v7.70 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v770b.zip) 1/19/2012  
    ◆Games: number of targets increased to 4: "Target 1" ～ "Target 4".**The target in the previous version will be carried over as "Target 1".**  
    ◆Game: Parent and child characters can be selected using the "Target" command in the "Target Settings" command. The person taking out the shot or character is the ''parent,'' and the person being taken out is the ''child.''.  
    ◆Game: Implement Attack." If you enable "Attack" with the "Shot", "Sword", and "Character Summon" commands, the parent character will be notified (timing will occur) when a shot or summoned character hits. Three flow timings have been added: "When you deal damage with an attack", "When you give impact with an attack", and "When you hit an attack".  
    ◆Game: Implemented "targeting characters involved in timing" in flow settings. For example, in the case of the timing "when damage is received", target the character that caused the damage. Also, if that character (or shot or sword) is an attack, target the parent character.  
    ◆Game: You will be able to manipulate the target flow with the "Manipulate Flow" command.  
    ◆Game: You will be able to set conditions using the "Manipulate flow" command. The flow is operated only when this condition is met.  
    ◆Game: The "Disappear" command allows you to eliminate characters and shots below child level. " "Children and below" means that it includes not only the character (child) that the child has summoned, but also the character and shot (grandchild) that the child has further summoned.  
    ◆Game: Implemented "exist" (or not) in "Status Condition 3".  
    ◆Game: If you hit a character or shot during the "continuous damage nullification time" (which can be changed in "Stage Settings"), the flow timing "When hitting a character" will not be generated.  
    ◆Game: Until now, when characters with ramming damage or impact (character A, character B) hit each other, the damage of character A → timing of character A "when receiving damage" occurs→ Damage of character B → Timing of character B "when receiving damage" occurs, Damage to character A → damage to character B → timing of character A "when damage is received" occurs → timing of character B "when damage is received" occurs, changed to process in that order. The same goes for shock. Along with this, we implemented "Timing ‘Damaged’ and ‘Shocked’ behavior applies the behavior of versions earlier than 7.59" to the system settings. This setting is enabled if you carried data from an older version over to this one.  
    ◆Game: No effect even if hit (damage/impact). If a shot that does not have any items to obtain hits a character, it will hit without slipping through (an "effect" will occur and the shot will disappear). Along with this, we implemented "applying behavior from versions 7.59 and earlier to shots that hit but have no effect at all" in the system settings. This setting is enabled if you carried data from an older version over to this one.  
    ◆Game: Fixed a bug where if you used the "Linear Movement" command to summon a character whose movement target was specified as "relative coordinates from the placement position", the movement target would shift significantly and the movement direction would be incorrect.  
    ◆Game: If you specify the movement target in "relative coordinates to the placement position" using the "straight line movement" command, the "displacement position" (initial position, summary position) of the character is not taken into account. Fixed a bug. In the previous version, the coordinates were relative to the position ignoring the "initial position deviation". Along with this, we implemented "Apply behavior from version 7.59 and earlier when specifying the movement target for linear movement in "relative coordinates from the placement position" in the system settings. This setting is enabled if you carried data from an older version over to this one.
    
- [v7.59](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v759.zip) 30/9/2011  
    ◆Game: Fixed a bug where if the flow timing executes the "disappear" command when "damaged" or "dead", a shot that damaged (or killed) the character for which the flow was set will be destroyed. Fixed a bug where it would kill if you tried.  
    ◆Game: Implemented "variations" in world map events. Variations change common variables before the world starts. For example, it is used when you want to change the common variable "difficulty level" for one world (stage) and release normal and hard as separate worlds. Of course, there is no need to duplicate the stage file.  
    You can create a mechanism that allows you to choose between normal and hard stages without using variations (as you often see in existing games), but variations have the advantage that information such as whether or not you have cleared the stage and high score rankings are recorded separately.  
    ◆Game: In the system settings, you will be able to select whether or not you can return to the map from the pause menu once you have cleared the world. This is from the menu called with the space key, not the menu at the time of death.
    
- [v7.54](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v754.zip) 8/9/2011  
    ◆Game: Number of common variables and stage variables increased from 255 to 999.
    
- [v7.53](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v753.zip) 29/7/2011  
    ◆Game: Fixed a bug that apparently caused it to kill when pressing the Windows key in some environments when running in Direct3D and full screen...I thought I had done it (unconfirmed because there is no environment where the bug can be reproduced).
    
- [v7.52](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v752.zip) 21/7/2011  
    ◆Game: Fixed a bug in the "Execute code" command where the result of calculating the operator on the far left, excluding "=", in an expression with two or more operators, would be the result of the entire expression. Along with this, we implemented "the behavior of the "Run code" command applies the behavior of versions earlier than 7.51" in the system settings. This setting is enabled if you carried data from an older version over to this one. If you want the calculation results to be normal, disable them (uncheck them).
    
    This is a serious issue, so we will explain it with more examples.  
    Again, in the "Execute Code" command, in expressions with two or more operators except "=", the result of calculating the leftmost operator except "=" is the result of the entire expression. A bug existed in all past versions.
    
    For example,
    
    If the expression is "hp = 1 + 2 + 3", then the result of the leftmost "1 + 2" = 3 is the result of this entire expression. According to the specifications, the HP had to be 6, but it ended up being 3.
    
    If the formula is "hp = 1 + 2 * 3", then the multiplication "2 * 3" is calculated first, then "1 + 6", so in this case we had a normal result, " Even hp = 1 + (2 + 3)" is fine for the same reason.
    
    **In short, the expression in which the calculation of the leftmost operator is performed first and last in the entire expression, except for "=", gave a normal result. Equations that didn’t had basically the wrong result substituted on the left-hand side.  
    **
    
    That's all for the explanation.  
    The damage caused by this bug may be considerable.  
    Actually, when I looked into the support BBS logs, I received a bug report in November 2009, but it seems like I forgot to fix it. .. .. Why only for such serious bugs? .. ..  
    We deeply apologize for the long delay in fixing this.  
    I'm really sorry.
    
- [v7.51](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v751.zip) 17/7/2011  
    ◆Game: Fixed a bug where characters whose controls were "computer" did not jump immediately after starting a stage or being summoned. This was a bug that started with version 7.49. To be a little more specific, the bug was that if you were even slightly in the air when jumping (if your feet were off the ground), you wouldn't be able to jump. Strictly speaking, characters are in the air right after the stage starts, so even if they look like they're standing, they're actually in the air, so they won't jump.  
    ◆editor: when scrolling stages with the mouse wheel, holding down the Ctrl key while moving the wheel will allow you to scroll vertically (if you set the stage option to move "vertically", the opposite will happen horizontally).  
    ◆Other details corrected.
    
- [v7.50](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v750.zip) 11/7/2011  
    ◆Game: Fixed a bug where the target could not be changed to the "closest character" of "all factions" using the "Target Settings" command. This was a bug that started with version 7.47. We apologize for the inconvenience, but please update to this version, especially if the data is transferred from a version earlier than version 7.47 to 7.47 or 7.49.
    
- [v7.49](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v749.zip) 10/7/2011  
    ◆Game: Fixed a bug in characters whose controls were "computer" where a single jump command would cause multiple jumps if the character hit their head on a block while jumping and immediately landed. Also, when the operation is performed in the air at the start of a jump command in a "computer" character, up until now the jump was executed with a delay after landing depending on the situation, but from this version, when the operation is performed in the air at the start of a jump command, the jump will definitely fail. Along with this, we implemented "Jumping characters whose operation is "computer" applies the behavior of versions earlier than 7.47" in the system settings. This setting is enabled if you carried data from an older version over to this one.  
    ◆Game: Fixed a bug where executing a straight line movement in the "input direction" would kill the game if the direction key had not been pressed even once since the game started. This is a bug that would never occur if the direction key was set as a key condition.
    
- [v7.47](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v747.zip) 17/6/2011  
    ◆Game: You will be able to display the range of distance conditions in the appearance conditions and basic flow conditions.  
    ◆Game: Implemented "character variable conditions" in the "Target settings" command.  
    ◆Game: Implemented an option in the "Set Target" command that prevents the target from being changed (without the target being disabled) without the corresponding person.  
    ◆Editor: fixed a bug in the stage window where the scrollbar would move significantly in the opposite direction if the mouse wheel was rolled vigorously (by mouse?).  
    ◆Editor: You can now move the scrollbar with the mouse wheel even in the palette window.  
    ◆Other details corrected.
    
- [v7.44](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v744.zip) 12/5/2011  
    ◆Game: Fixed a bug where restarting would be slightly delayed (0.1/60 seconds ～ 0.9/60 seconds) if the flow was executed continuously at "always" timing under certain conditions. Especially if the command list ends with a type of command that does not specify execution time directly in 1/10s or 1/60s increments, such as a move command "specified by speed and distance", the flow restart is likely to be delayed. Along with this, we implemented "Specifications for continuous flow execution apply behavior from versions 7.34 and earlier" to the system settings. This setting is enabled if you carried data from an older version over to this one.
    
- [v7.34](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v734.zip) 3/4/2011  
    ◆Game: Implemented "disappear" command." "extinguish" allows you to annihilate all characters or shots of a specified faction.
    
- [v7.33](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v733.zip) 29/3/2011  
    ◆Game: If you specify "vertical", "front Y", and "back Y" in the distance condition, if the target character is a walking character (more precisely, the "position" of the hit detection is "below the character"), the condition will only be in the upward direction. Fixed a bug that made it difficult to hold. For example, in the case of the default hit test, 7～8dot had a narrower range of conditions than the original specification. Along with this, we implemented whether "vertical, front Y, and rear Y behavior in distance conditions applies behavior from versions 7.32 and earlier" to system settings. This is checked if the data from the previous version is carried over to this version.  
    ◆Game: Increases the execution speed of "mosaic" of character effects and screen effects when the number of screen colors is 32 bits. Except, it's gotten a little dirty...
    
- [v7.32](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v732.zip) 21/3/2011  
    ◆Game: Implemented "arrange" command." In "Arrangement", you can edit the configuration items for the next command to be executed using variables.  
    ◆game: "loop" command implementation." In a "loop", a specified range can be repeated a specified number of times.  
    ◆Game: Implemented "instantaneous display" with "message" and "display picture" commands that only display for 1/60 second.  
    ◆Game: Fixed a bug where the display position of a picture in the "Display Picture" command would be slightly shifted from the originally displayed position by scrolling the stage.  
    ◆Game: Fixed a bug where animation may not occur properly when executing the "Run Anime" command from an item.  
    ◆Game: Fixed a bug where the "attack move" command had an unusual "angle". Along with this, we implemented a system configuration to determine whether the behavior when the "angle" is other than 0 in the "Assault Move" command applies the behavior of versions 7.22 and earlier. This is checked if the data from the previous version is carried over to this version.
    
- [v7.22](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v722.zip) 7/2/2011  
    ◆Game: The "Clear Stage" command will allow you to "specify" any stage in the destination stage by path.  
    ◆Games: Fixed a bug in Items that would cause the game to kill when executing a "warp" command in the "input direction".  
    ◆Game: Fixed a bug that prevented users from warping diagonally when executing the "warp" command "in the input direction" on a walking character. Along with this, we will implement "Warp to "input direction" for walking characters will apply behavior from version 7.20 or earlier" to the system settings. This is checked if the data from the previous version is carried over to this version.  
    ◆Games: Fixed a bug that allowed forced termination under certain conditions in "status conditions" in appearance conditions and flow execution conditions.  
    ◆Game: Fixed a bug where the effect would not end if some character effects and some screen effects were set to remain unchanged from the start to the end of the effect (e.g. burst, start position 32, end position 32).  
    ◆Editor: You will be able to create up to 999 database "sword types". Up to 99 until now.  
    ◆Editor: Fixed a bug where the starting strength of character effect "Blur" could not be anything other than "1".
    
- [v7.20](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v720.zip) 20/1/2011  
    ◆Editor: Enables double startup of editor programs.
    
- [v7.19](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v719.zip) 1/12/2010  
    ◆Game: Fixed a bug in some Windows Vista 7 environments where when running in full screen mode other than 8bit (256 colors), all dialogs for selecting files displayed in free mode, replay mode, etc. would not be displayed, and the decision button would be hidden. This was probably a bug that started with version 6.80.
    
- [v7.09](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v709.zip) 21/11/2010  
    ◆Editor: Places all settings in the "Compatibility" frame in the system settings in a new tab. This narrows the vertical width of the window, making it difficult to hide OK buttons even in low-resolution environments.
    
- [v7.08](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v708.zip) 15/11/2010  
    ◆Editor: Execution time for production commands such as "Message", "Execute anime", "Execute effects", "Execute character effects", "Execute screen effects", "Display picture", "Change screen color", etc. Change notation." Instead of "P-0", the performance time is written in parentheses. For example, for an effect with a execution time of 3, what was written as "P-3 effect execution" in the previous version becomes "P-0 (3) effect execution". Please rest assured that the behavior of the game has not changed at all.
    
- [v6.98](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v698.zip) 9/11/2010  
    ◆Game: You will be able to fine-tune the distance in dots using the "distance condition" in the character appearance conditions and basic flow conditions.
    
- [v6.97](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v697.zip) 29/10/2010  
    ◆Game: Fixed a bug where only flows with timing "before the stage starts" were executed even if the character appearance conditions were not met. Along with this, the system settings should be changed to "Execute flows whose timing is "before the stage starts" to apply the behavior of versions 6.96 and earlier (execute flows "before the stage starts" even if the character appearance conditions are not met)". This is checked if the data from the previous version is carried over to this version.
    
- [v6.96](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v696.zip) 22/10/2010  
    ◆game: when started in Direct3D mode and with vertical sync enabled (other than "VSync=0" in System.ini), if for some reason the screen refresh rate (FPS with vertical sync enabled) could not be set to 60, vertical sync is automatically disabled so that the FPS is 60. However, disabling vertical synchronization will make drawing dirty and speed unstable.  
    ◆Editor: Fixed a bug where "Yes" was not saved even if you selected "Yes" in the confirmation dialog for overwrite save that appears when you close or "exit" a window without saving after editing the world map.
    
- [v6.95](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v695.zip) 14/10/2010  
    ◆Game: Fixed a bug where speed was not reflected correctly when "Speed" was a negative value for "Specify speed and distance" type in movement commands other than "Circular movement". In line with this, the system settings should be changed to ''Specify speed and distance in mobile commands other than circular movement'' and apply the behavior of versions 6.94 and earlier when ''speed'' is a negative value.'' implement. This is checked if the data from the previous version is carried over to this version.
    
- [v6.94](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v694.zip) 8/10/2010  
    ◆beta version to full version." The file has not been updated, just the "beta" notation has disappeared.
    
- [v6.94.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v694b.zip) 10/10/2010  
    ◆Game: Transparent color of the status window image "StatusWindow.bmp" at the top of the screen is enabled.
    
- [v6.93.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v693b.zip) 24/9/2010  
    ◆Game: Fixed a bug where in "pause" messages, the window would be displayed only the moment the message appeared even though "Show window" was disabled.
    
- [v6.92.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v692b.zip) 17/9/2010  
    ◆Game: Fixed a bug where if the title and options were set to the same BGM, the BGM would stop when returning to the title from options. It was a bug that started with version 6.80.  
    ◆Game: Implemented "multiple of ～" and "not multiple of ～" in variable conditions and status conditions in appearance conditions and basic flow conditions.  
    ◆Game: Groups can now be set even when the "range" of a character's action conditions is "full range". By the way, even in the previous version, you could set up groups even in the "full range" after placing characters on the stage. This was a bug, but it has become a specification in this version.  
    ◆Editor: Fixed a bug in the setting of the sword position in the database "Sword Type" where "Invert if facing right" for "Sword position X" was automatically checked every time a sword position was attempted to be edited.  
    ◆Editor: Increase the width of the appearance condition list box. Now you can also see long conditional statements.  
    ◆Other details corrected.
    
- [v6.91 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v691b.zip) 10/9/2010  
    ◆Game: Window mode allows you to maximize windows.  
    ◆Games: update of the preferences file "System.ini". In Direct3D mode, you can run it in a variable size window with "WindowMode=2".  
    ◆Game: in window mode, the window’s position and size will now be remembered at the end of the game, and will carry over at the next startup. Incidentally, information about the window’s location and size is saved in a file called "Window.dat" in the "user_data" folder. You can delete this file when distributing it.
    
- [v6.90 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v690b.zip) 9/4/2010  
    ◆Game: Fixed a bug where when the width of a character's hit detection was extremely close to the width of a path (between two blocks) created with a block of the type that hit the character, if that character moved to the left and touched the block, it would be considered stuck in the block and die. This was a bug that started with version 6.77.
    
- [v6.80 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v680b.zip) 3/9/2010  
    ◆Game: if the background music does not change during screen switching between title, world map, challenge stage selection, and options, it will not play again from the beginning of the song.  
    ◆Game: Fixed an issue where when in Direct3D mode and window mode, an overwrite check would not be performed when saving a replay file.  
    ◆Games: Direct3D mode is a little lighter in some environments.
    
- [v6.79 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v679b.zip) 31/8/2010  
    ◆Game: The "Clear Stage" command allows you to forcibly change the main character's initial position and orientation in the next stage.
    
- [v6.77 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v677b.zip) 27/8/2010  
    ◆Game: Fixed a bug where when a character jumps onto a block from the right, if you jump while holding down the right side of the block, the jump trajectory may be canceled midway and the character may ride on the block (this is especially likely to happen with giant characters). It took me a while to realize that it was a bug because it behaved relatively naturally even before it was fixed. Along with this, we implemented "Block ride determination applies behavior from version 6.76 and earlier" to the system settings. This is checked if the data from the previous version is carried over to this version.
    
- [v6.76 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v676b.zip) 21/8/2010  
    ◆Editor: You can now add notes to the flow.
    
- [v6.75 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v675b.zip) 15/8/2010  
    ◆Games: "English" added to preferences file "System.ini"." If you set English=1", text that cannot be changed in the editor (mainly dialog text) will be displayed in English. If you want to distribute it to English-speaking countries, please use Help["To make it English-speaking?"](http://localhost:4321/menu_support/actioneditor4_help/english/index.html)Please take a look.  
    ◆Game: In "Shot", "Block Summon", "Character Summon", and "Item Summon", if the formation is "Lightning Strike" or "Siege", select the "Target" (target) from among "Target", "Main Character", and "Me". You will be able to choose.  
    ◆game: in the system settings it will be possible to change the text of "Ranking registration" in the options menu.  
    ◆Editor: Changed the selection candidate "Acquired Score" in the "Status Conditions" and "Status Operations" commands to "Score to be earned if defeated". The notation has just changed.
    
- [v6.70 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v670b.zip) 4/8/2010  
    ◆Game: In key conditions, when the same key is in succession, such as Z,Z,Z (Z key 3 times), the condition may be satisfied with fewer key presses or drops, or even if it is not, the original Fixed a bug that made it easier to hold than the specifications. Along with this, we implemented "Key condition determination applies the behavior of versions 6.68 and earlier" to the system settings. By the way, if you carried over data from an older version to this version, this setting will be enabled. If you want to use the original operation, uncheck it. Even with the previous version, you can solve this problem by adding "action key neutral" between the keys.  
    ◆game: when in full screen, the number of colors set when "Bpp=0" in the preference file "System.ini" can be changed. This is the "actual number of colors when "Screen color count (Bpp)" is "0" in full screen" in the "System.ini" frame in the system settings.  
    ◆Editor: The upper limit of the key condition "ease of input when there are multiple conditions" will be changed from "10" to "15".  
    ◆Editor: Fixed a bug in the "Execute code" command settings that could cause the command to kill if the operator was used incorrectly.
    
- [v6.68 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v668b.zip) 30/7/2010  
    ◆Editor: Add the following annotations in the "Jump" command settings.( It's not like the behavior of the jump has changed.)  
    *"Height-adjustable" jumps accept jump key input from the time the jump is executed until the height reaches "maximum jump". If the flow ends before the height reaches the "maximum jump" (the last command in the command list ends), the height cannot be adjusted using the jump keys after that.  
    ◆Other details corrected.
    
- [v6.67 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v667b.zip) 25/7/2010  
    ◆Editor: Fixed a bug in the previous version that caused a double startup error for the second and subsequent test plays.
    
- [v6.66 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v666b.zip) 23/7/2010  
    ◆Game: Updated image "Accessory.bmp" (standards such as size have not changed). In story mode, we made sure that characters other than Yassille do not feel strange. Traditional images are in the "unused" folder within the "bmp" folder, so if you have any problems, please return them.  
    ◆Game: Fixed a bug in Direct3D mode where if a "shot" graphic was specified for a character, the graphics would face left even if the character was facing right. It was a bug that started with version 6.36.  
    ◆Game: The "distance condition" in the character appearance conditions and flow execution conditions allows you to set the distance to the target as a condition.  
    ◆Editor: In the previous version of the "Jump" command, "Height can be adjusted with a key", the height cannot be adjusted until the very limit of reaching the maximum jump unless the key condition "Allow continuous execution by holding down" is used.” Delete the annotation. It was my imagination." The height can be adjusted normally without "allowing continuous execution by pushing and holding".  
    ◆Other details corrected.
    
- [v6.56.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v656b.zip) 22/7/2010  
    ◆Game: Fixed a bug in DirectDraw mode where if a "shot" graphic was specified for a character, the graphic would turn black when the character turned right. It was a bug that only occurred in versions 6.36 and 6.46.  
    ◆Game: A stage where there are two or more block characters whose flow execution timing is set to ''when they are being ridden by the main character'' or ''when they are being ridden by a character,'' and from the state of riding that block character. If you transfer to a different block character without jumping or falling significantly Fixed a bug where the flow of the block character you possessed was not executed or was delayed. By the way, if you moved from a normal block to a block character, the flow was executed normally.  
    ◆Game: Fixed a bug where if "Supports symbol image display" was enabled in the "System" settings, symbol image display would also be applied to the ranking registration name.  
    ◆Game: A background with "Display before character" enabled will be displayed closer to the block than a block with "Display before character" enabled. It's too late now, but this is more natural.  
    ◆Editor: Fixed a bug where the graphics did not point to the right on the editor if the shot graphics were specified for a right-facing character.  
    ◆Editor: With the "Jump" command, "*"The height can be adjusted with the key", the height cannot be adjusted until the very limit of reaching the maximum jump unless "continuous execution by holding down is allowed" under the key conditions It is written as. This does not mean that the behavior of jumps in the game has changed.**← I was mind-blaming." The height can be adjusted normally without "allowing continuous execution by pushing and holding".**  
    ◆Other details corrected.
    
- [v6.46.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v646b.zip) 17/7/2010  
    ◆Game: Fixed a bug in version 6.36 where giant characters, giant shots, etc. were not displayed properly at the edge of the screen.  
    ◆Game: Fixed a bug where when adding a flow with key conditions set in the "Change flow" command for an item, input before obtaining the item was also taken into account, resulting in the flow being executed on its own immediately after obtaining the item.  
    ◆Game: implemented "Block summary applies the behavior of versions 6.16 and earlier in the system settings (block summary to the square fails if the conditions for the appearance of the block that "disables block summary" are not met)".
    
- [v6.36.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v636b.zip) 15/7/2010  
    ◆Games: faster game startup and stage loading in Direct3D mode.  
    ◆Games: less use of resources such as VRAM in Direct3D mode.  
    ◆Game: Implemented "penetrating block characters" in shot settings. If the data from the previous version is carried over to this version, "penetrate block character" will have the same settings as "penetrate character". For example, if it penetrates a character, it also penetrates a block character. In short, you can rest assured that the operation will not change even if you carry over the data from the previous version.  
    ◆Game: When a character with a dedicated bmp set for a giant character (more than 4 times) is made smaller than a bmp (for example, when it is made 9 times bmp but 4 times larger), the character effect "Rotation (back)" Fixed a bug where the display would be strange.  
    ◆Editor: Fixed a bug in "Move data" in palette data where moving data would reverse the order of alignment.  
    ◆Editor: Fixed a bug where specifying the range of "data movement" in palette data would force termination if the start number was set to a value greater than the end number.  
    ◆Editor: Fixed a bug where if the graphics of block character items were set to "dedicated bmp" number 120 or later, the graphics number would change automatically when switching data.  
    ◆Editor: Fixed some notations.
    
- ★Above here (version 6.36beta or later), the updates to "◆Game" from "◆Editor" are listed above. ( The game has more important updates, so it stands out
    
- [v6.26 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v626b.zip) 7/8/2010  
    ◆Games: Further improvements to Direct3 D mode behavior in environments with a single core CPU from version 6.16. Even if vertical synchronization is enabled, it will still run at the original frame rate (FPS60). This resulted in the flickering and rattling being eliminated. Along with this, we stopped the specification adopted in the previous version 6.16 that "When "VSync=2" (default setting) is set in System.ini, if the CPU is a single core, vertical synchronization will be disabled inside the program", and changed it to 6.06 or earlier. (If "VSync=2",) Vertical synchronization is enabled in any environment).  
    ◆Game: Fixed a bug in Direct3D mode in version 6.16 where the mouse cursor was not displayed in the file selection dialog that appears immediately after starting free mode or replay mode. It was a bug that only occurred in version 6.16.  
    ◆Game: Fixed a bug in DirectDraw mode starting with version 5.76 that would cause the game to kill when attempting to display a message or picture in a very small, low-spec environment.  
    ◆Game: Fixed a bug where block summons would fail for squares where there was a block with "Disable block summons (do not allow changes by block summons)" enabled, for which the appearance condition had not yet been met I fixed "Disable block summoning" because it is a block setting (a setting that is valid when a block is appearing).  
    ◆Game: In story mode (world map), the total score is recalculated immediately after loading the story mode save data (immediately after selecting the file "Continue"). Immediately after data loading, the program obtains high scores from all stages present on the world map and adds them up to obtain the total score.  
    For example, play "from the beginning" and save when you get a score of 100 on stage A and your total score reaches 100. Then delete stage A from the world map in the editor. In this case, if you load the previous data "from next", the total score will be 0.  
    By the way, in the previous version, the high score (updated score) of the same stage was only added to the total score immediately after clearing the stage, so even if the stage was later deleted from the world map, the high score of the same stage would not be added to the total score. was never subtracted.  
    ◆Other details corrected.
    
- [v6.16.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v616b.zip) 7/6/2010  
    ◆Game: Fixed a bug that could cause the game to kill when switching scenes when the number of screen colors was 8 bits. It was a graphics-related issue: the more images used in the game, the easier it was to kill.  
    ◆Game: Fixed a bug where the display results would be incorrect in some environments when running the character effects "Lens", "Translucent", "Mosaic", and "Blur" in Direct3D mode. I thought I had fixed it with Ver6.06, but I couldn't do it at all.  
    ◆Game: Fixed a bug where vertical synchronization was disabled in Direct3D mode ("VSync=0" in the initial configuration file System.ini) and started in window mode, and the CPU would be heavier with a single core (the FPS at the bottom right of the screen would be lower).  
    Also, even when vertical synchronization is enabled in Direct3D mode, the original frame rate will not be output if the CPU is a single core, so if you start it with "VSync=2" (default setting) in System.ini, the CPU will If it is a single core, vertical synchronization will be disabled inside the program.  
    In short, even in a single-core CPU environment, it now runs in window mode at its original frame rate (FPS60) (though the screen flickers and the speed is slightly unstable).  
    ◆Game: Fixed a bug where transparency would fail with the character effect "Lens" when the number of screen colors was 16 bits in Direct3D mode.  
    ◆Other details corrected.
    
- [v6.06 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v606b.zip) 29/6/2010  
    ◆Game: Fixed a bug where running multiple character effects "lens", "translucent", "mosaic", and "blur" simultaneously would cause display results to be incorrect in some environments in Direct3D mode. For example, it could display nothing, flash, or display irrelevant graphics.  
    ◆Game: Fixed a bug where if you set the "displacement" to something other than 0 in the character effect "Lens", the display position of the entire character would be shifted.  
    ◆Game: In Direct3D mode, the invincibility effect is enabled even when the character effects "Lens", "Mosaic", and "Blur" are executed.  
    ◆Game: Direct3D mode makes drawing message windows a little lighter.  
    ◆Game: Improved the issue where the character effect "Transparent" becomes heavier when executed during screen effects in Direct3D mode.  
    ◆Game: Fixed a bug where if the execution environment did not support Direct3D, if you tried to start it in Direct3D mode, it would automatically switch to DirectDraw mode, but if the screen color count was 16 bits, it would force close.  
    ◆Other details corrected.
    
- [v5.96.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v596b.zip) 14/6/2010  
    ◆Editor: The width of the numerical input type edit box is slightly wider. This makes it difficult to hide the numbers.  
    ◆Editor: Fixed a bug where some states on the stage (such as stage scrolling state) might not be initialized when clearing a stage and playing from scratch in a single stage test play.  
    ◆Game: Fixed a bug in Direct3D mode where transparency failed in some environments (transmission color became green). It was a bug that only occurred in versions 5.76 and 5.86.  
    ◆Game: Implemented "conditions for changing the color of HP and SP bars *common to the main character and enemies" in the "System" settings.  
    ◆Other details corrected.
    
- [v5.86.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v586b.zip) 6/6/2010  
    ◆Game: **The overall drawing process in Direct3D mode will be lighter. **Faster drawing of blocks, items, shots, effects, messages, stage backgrounds with smaller images, "splits", "waves", "circles" in character and screen effects, map chips and events in Worldmap, among others.  
    ◆Game: Fixed a bug where if the hit detection for "vs. character" in a shot was set to a value other than the default value (16×16), the shot graphics would shift to the upper left. The position of the hit determination (absolute coordinates, not relative to the graphic) has not changed.  
    ◆game: when executed with "D3D_FontCache=1" (default is "D3D_FontCache=0") in the preference file "System.ini", once minimized in full screen mode with "Alt" + "Tab" keys, etc. and then replayed, Fixed a bug where lowercase letters of the alphabet were replaced with symbol graphics even though "Supports symbol image display" was disabled in system settings.  
    ◆Game: In case of double startup, you will have the option to restart the program.  
    ◆Other details corrected.
    
- [v5.76.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v576b.zip) 30/5/2010  
    ◆editor: prompt for file backup in "About secondary distribution.html".  
    ◆game:update of the preferences file "System.ini"." Added three configuration items: "D3D_FontCache", "DD_FontCache", and "DD_VideoStretch". Both options affect the speed at which the game runs.  
    ◆Game: In DirectDraw mode, drawing when the effect becomes huge (drawing when "Growing is allowed" in the database "Effects" settings) becomes lighter.  
    ◆Games: message and picture drawing is lighter in DirectDraw mode.  
    ◆Games: Font drawing (the moment a message command is executed, the text part of the status window is drawn, etc.) becomes lighter in DirectDraw mode.  
    ◆Game: Fixed a bug in full screen DirectDraw mode that could cause background graphics recovery processing to fail on the world map screen. For example, if you try to minimize it using the "Alt" + "Tab" keys and then replay it, the background will turn green.  
    ◆Game: Fixed a bug where the window frame and font color could become strange (often pitch black) in some environments when starting in Direct3D mode with 32-bit colors.  
    ◆Other details corrected.
    
- [v5.66.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v566b.zip) 21/5/2010  
    ◆Edit: Change the setting item "Stay when you reach the target coordinates" in the straight line movement command to "Run until you reach the target coordinates". It's just that the notation in the editor has changed.  
    ◆Game: Fixed a bug where sound effects were not played when clearing a stage. If you do not want it to play, leave the "Stage Clear" path blank in the "System" settings.  
    ◆Game: Fixed a bug in Direct3D mode where if the bitmap size was changed incorrectly or drawing-related settings were incorrect, garbage and unrelated graphics could be drawn.  
    ◆Game: Fixed a bug where messages could blur up and down when the display position was specified in the message command to the walking self or player (such as "display above self").  
    ◆Game: Increases the accuracy of "prevent blur" in straight line movement commands.  
    ◆Game: Fixed an issue where the warp character's display position would shift slightly when the stage scrolls when the warp position is executed consecutively using a warp command specified by screen coordinates.  
    ◆Game: Fixed a bug where the background image would be drawn incorrectly if loading the background image failed or if the background at the back was a background image that used transparent color.  
    ◆Game: Set to not run invincible effects when loading data from versions 2.84 and earlier (before Direct3D mode was implemented) (main menu "System" ＞ "1" tab＞ "Run invincible effects" is unchecked). It's too late though.  
    ◆Other details corrected.
    
- [v5.56.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v556b.zip) 17/5/2010  
    ◆Edit: Fixed a bug where selecting the trailing data "------------" in the "Anime Set" and "Anime" settings of the database would cause it to kill.  
    ◆Game: Implemented "update interval (1/60s)" (update check interval when "automatically update" is enabled) in message commands.  
    ◆Game: Fixed a bug where the message command "Update automatically" would update the drawing content even when the variables had not changed, making it unnecessarily heavy.  
    ◆Game: Fixed a bug where the "spacing" of lightning shots was not reflected at all in shots where the formation was "lightning" and the angle deviation was "0". Along with this, we have implemented "Formation 'lightning' shot behavior applies behavior from version 5.54 and earlier" in the system settings. By the way, this setting is enabled (checked) if you carried over data from the previous version to this one. If you want to space lightning shots, uncheck it.  
    ◆Other details corrected.
    
- [v5.54.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v554b.zip) 14/5/2010  
    ◆Edit: Fixed a bug in the database "Anime Set" and "Anime" settings where the sample image number would change automatically under certain conditions.  
    ◆Game: Message commands include ''automatically update (corresponds to changes in variables)'', ''display window'', ''erase message'', ''message ID (replace with message of the same ID)'', and ''follow the screen (scroll)''. (The position does not change even if you do)".  
    ◆Game: Implemented "Picture ID (replaced with message with the same ID)" and "Follow the screen (position does not change even when scrolling)" in picture commands.  
    ◆Game: If the formation is a "spreading", "exploding", or "encircling" shot, and the movement type is "straight ahead", "wave", "falling", "aiming" or "guiding" type and there is no target, the speed of the shot is fixed. Fixed a bug where it would not move in the opposite direction even if the value was negative.  
    ◆Game: Fixed a bug in the world map where if you called up the menu on an uncleared stage that was "passable without clearing it", the game would automatically transition to the stage after closing the menu.  
    ◆Game: updated configuration file "System.ini"." ShowFps=2", which allows FPS to be displayed without a window and in small characters.  
    ◆Other details corrected.
    
- [v5.44.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v544b.zip) 21/4/2010  
    ◆Editor: Fixed a bug where some 24-bit color bitmaps could not be read.  
    ◆Game: Fixed a bug where when setting an angle with the "Assault Move" command, the left and right directions would be reversed (the left and right directions would be reversed compared to setting the angle when moving in a straight line or shooting).
    
- [v5.43.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v543b.zip) 19/4/2010  
    ◆editor: if the data in the stage palette copies the flow of the specified "Block Summon", "Character Summon", "Item Summon", and "Get Item" commands, then changes the stage (creates a new stage or loads another one) and pastes the copied flow, Fixed a bug where the stage palette data in the changed stage would be forcibly terminated if it did not exist.  
    ◆Editor: Fixed a bug that reduced the number of database "basic anime sets" from two or more to one, and then killed them under certain conditions when they returned to editing stages. This was an extremely dangerous bug where once you did this (unless you started it with this version), the editor would not start the next time. We apologize for the inconvenience.
    
- [v5.33.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v533b.zip) 16/4/2010  
    ◆Game: Fixed a bug where the ranking registration name input dialog was not displayed in Direct3D mode.  
    ◆Game: Fixed a bug where it may not be possible to properly close or minimize the app during the 1UP process when clearing a stage.  
    ◆Game: Fixed a bug where condition judgment was performed multiple times per frame under certain conditions.  
    Along with this, we have implemented "flow execution condition determination operation applies the operation of version 5.23 or earlier (condition determination is performed multiple times per frame under certain conditions)" in the system settings.  
    By the way, this setting is enabled (checked) if you carried over data from an older version to this one. If there are no particular problems with the operation of version 5.23 or earlier, you can leave it checked, but if there are any problems and you want to uncheck it, it is better to thoroughly check the operation using test play.  
    Please note that if you uncheck this check, the execution of flows with one or more conditions may be delayed by one frame compared to versions 5.23 and earlier. Depending on the stage, the delay of that one frame could significantly change subsequent developments, for example, by changing the order in which flows are executed (note, especially, flows without "groups" set).
    
- [v5.23.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v523b.zip) 4/9/2010  
    ◆Game: Implemented "angle" in "assault move" command.  
    ◆Game: The speed of invincible effects can be changed in the system settings.  
    ◆Game: Fixed a bug where a green rectangle was drawn in full screen in Direct3D mode due to a failure to recover shot graphics (textures) in block character items. This happens, for example, when minimized using the "Alt" + "Tab" keys and executed again.  
    ◆game: make the font size a little larger, since some fonts lose their shape, for example, with the "message" command.  
    ◆Game: Fixed a bug where message progress sounds were not played.
    
- [v5.13.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v513b.zip) 2/4/2010  
    ◆Editor: Fixed a bug where "99" could not be set as the "Target Character ID" in the "Target Settings" command.  
    ◆Editor: In the "Change screen color" command, select "*When Direct3D is enabled, changing the screen color will extremely slow down the execution speed of screen effects" Is displayed.  
    ◆Game: Starts up a little faster in Direct3D mode.
    
- [v5.12.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v512b.zip) 26/3/2010  
    ◆Game: Fixed a bug that caused the game to kill when trying to minimize using "Alt" + "Tab" keys while running in full screen in DirectDraw mode. It was not completely fixed in version 5.01.
    
- [v5.11 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v511b.zip) 19/3/2010  
    ◆Editor: Fixed a bug where, when setting "Status Condition 2" to "Giant" in appearance conditions or basic flow conditions, a size one size higher than the set size would be displayed in the condition list, and "×100" Fixed a bug where setting would force exit.  
    ◆Game: Changed the content of the character effect "Rupture" to 8 parts → 4 parts. This makes drawing effects much lighter.  
    ◆Game: Character effects "Waves (horizontal)", "Waves (vertical)", and "Circle", screen effects "Waves (horizontal)", "Waves (vertical)", and "Circle", and "Roughness" parameters. Add." The higher the roughness, the more rattled the waves and circles become, but the lighter they become. When data from past versions is carried over to this version, the "roughness" in each effect is set to "2" and is drawn coarser (and lighter) than the previous version.  
    ◆Game: Character effects "Waves (horizontal)", "Waves (vertical)", and "Circles", and screen effects "Waves (horizontal)", "Waves (vertical)", and "Circles" are applied to giant characters. In this case, the larger the character, the coarser the shape of the waves and circles, but the lighter they are.  
    ◆Game: When overwriting and saving a replay file in Direct3D mode and window mode, for some reason the overwrite confirmation dialog is hidden, so stop confirming the overwrite save (due to the author's lack of power). I'm sorry).  
    ◆Game: Fixed a bug where the screen would go dark on an 8-bit screen in DirectDraw mode if the "Change screen color" command was used to "Restore original color" without changing the screen color even once.  
    ◆Other details corrected.
    
- [v5.01 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v501b.zip) 12/3/2010  
    ◆Editor: Fixed a bug where the upper limit for changing stage size in "Stage settings" was displayed as a negative value in environments with system memory larger than 2GB.  
    ◆game: implement a "reset after death" in the settings of the "System 3" stock." If you enable "Reset after death", the (main character's) settings in the stage data will be applied to the next play when the main character dies.  
    ◆Game: Fixed a bug where some images were not transmitted correctly on 16-bit screens in Direct3D mode.  
    ◆Game: Fixed a bug where the screen color did not change when executing the "Run screen effects" and "Change screen color" commands at the same time on a 16-bit screen in Direct3D mode.  
    ◆Game: Fixed a bug in Direct3D mode that would force exit if there was a full-width space in the message etc. for some fonts such as "MS P Mincho". By the way, there was no problem with the default "MS P Gothic".  
    ◆Games: in Direct3D mode, font rendering is stable even in environments with low VRAM.  
    ◆Game: The world map screen operates more easily.  
    ◆Game: Fixed a bug that caused the game to kill when trying to minimize using "Alt" + "Tab" keys while running in full screen in DirectDraw mode.  
    ◆Game: Fixed a bug where the character effect "Color Change" would change to a different color from the specified color when executed on a 16-bit or 32-bit screen in DirectDraw mode.  
    ◆Games: fixed a bug in DirectDraw mode that caused the fonts in status and message windows to flicker in some environments.  
    ◆Other details corrected.
    
- [v4.91 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v491b.zip) 5/3/2010  
    ◆Editor: If the description of "Bitmap format" in "System 3" in the system settings says "*16.77 million colors (24 bits) and the transparent color is other than (0,177,0), the image file "Palette.bmp" Please change the pixels (0,0) and (0,8) to transparent colors. Otherwise, transparency may fail." Added.  
    ◆editor: fix default data." Disable "running color animation (invincible color changes at a dizzying pace)" in System 1 when the screen is 256 colors (8 bits)." Set window mode to default in the "System.ini" settings of "System 6" ("WindowMode=1").  
    ◆Game: In Direct3D mode, it will be able to start on a 16-bit screen.  
    ◆Game: in DirectDraw mode, even a 24-bit (16.77 million colors) bitmap will be able to launch on a 16-bit screen.( However, it takes a long time to start)  
    ◆Game: updated configuration file "System.ini". Set window mode to default ("WindowMode=1"). Significantly updated description.  
    ◆Other details corrected.
    
- [v4.81 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v481b.zip) 12/2/2010  
    ◆Editor: Fixed a bug where the stage file would fail when trying to load from a drive different from the drive on which Action Editor 4 itself resides.  
    ◆Editor: Fixed a bug where when editing a database, even if the data name was "same as the file name", some file names would be given different names than the file name.  
    ◆Game: Fixed a bug where if an attempt was made to kill the target with the "Manipulate Status 2" command, it would be forced to terminate under certain conditions.  
    ◆Game: Fixed a bug that caused the game to force quit or freeze when attempting to load stage files or replay files from a drive different from the drive where the Action Editor 4 console resides.  
    ◆Game: Fixed a bug where the screen effect "enlarge" would shift its center under certain conditions (not zoom in around the main character).  
    ◆Game: Fixed an issue where the main character would always face forward when returning to the map from the World Map menu on the World Map.  
    ◆Other details corrected.
    
- [v4.71 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v471b.zip) 5/2/2010  
    ◆Editor: Fixed a bug where right double-clicking on a square outside the stage size (especially the bottom right) would force exit.  
    ◆Editor: The explanation in the "Circular Movement" command is changed from "*The direction at 12 o'clock on the clock is 0 degrees" to "*If the "rotation direction" is counterclockwise, the direction directly above the character is 0 degrees". If clockwise, change to "0 degrees directly below the character".  
    ◆Game: Fixed a bug in the "Circle Movement" command that would not work properly if "Speed (Increase Angle)" was a negative value.  
    ◆Game: Fixed a bug that would force exit if a dedicated bmp with a number that did not exist was set in the character's "graphics".  
    ◆Game: Fixed a bug where key conditions would no longer hold under certain conditions when multiple key conditions were set in one flow.( Updating to this version may make it easier to enter commands)  
    ◆Game: Fixed a bug where "execution type" and "loop execution" were not stocked in the "Character Effects" stock.( Only the types of character effects were stocked
    
- [v4.61 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v461b.zip) 29/1/2010  
    ◆Editor: Fixed a bug where if the game ended abnormally during test play, test play would not be possible again unless the editor was restarted as a double start.  
    ◆Editor: Fixed an issue where pressing the test play execution shortcut key (F5, F7, etc.) for as long as possible would result in a double startup error.  
    ◆Editor: Fixed a bug where if the stage variable name was changed when editing palette data without changing the stage data at all, the stage variable name would not be saved even if the stage data was tried to be saved.  
    ◆Editor: Fixed a bug where after resizing the world map, if you quit the world map edit without saving the changes and tried to edit the world map again, the size would be changed.  
    ◆Editor: Fix default data. Prevents selecting "color" from the options menu.( (because it doesn't work in Direct3D mode)  
    ◆Game: setting "Direct3D=2" in the preference file "System.ini" allows the choice of drawing mode at game startup. This will be the default setting.  
    ◆Game: Fixed a bug where if you set some effect on a character's "body impact effect" and then deleted it in the database, it would force quit during the game under certain conditions.  
    ◆Game: Fixed a bug where characters sometimes died immediately even if their HP reached 0 with the "Manipulate status" command.  
    ◆Other details corrected.
    
- [v4.51 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v451b.zip) 22/1/2010  
    ◆Games: fix a bug where drawing simple colors (drawing other than images and text) doesn’t work in some environments in Direct3D mode? ( Unconfirmed because there is no environment where bugs can be reproduced  
    ◆Game: Reduce VRAM usage by reducing the default character image "Character1～8.bmp" to the minimum size necessary. The background image "Space2.bmp" will also be reduced in size.  
    Especially in Direct3D mode, depending on the video card, the width or height of the texture (image) may be extended to a power of 2 inside the program, so starting with this version, the width of the character image will be set to 512 (a power of 2) to prevent extra VRAM from being consumed. For example, if this is the traditional width of a character image ＝640, it will be expanded to 1024 inside the program, and VRAM will be consumed approximately twice as much as an image with a width of 512.  
    ◆Game: Fixed a bug in Direct3D mode where executing the "Run screen effects" and "Change screen color" commands at the same time would disturb the entire screen.  
    ◆Game: Changed the contents of the report file (Report_Game.txt).  
    ◆Other details corrected.
    
- [v4.41 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v441b.zip) 1/15/2010  
    ◆Games: fixed a bug in Direct3D mode that prevented some video cards from drawing properly.  
    ◆Game: in Direct3D mode, even if VRAM is insufficient, it will still draw properly to some extent (although it will be heavier and some effects will be disabled).
    
- [v4.31 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v431b.zip) 1/8/2010  
    ◆Game: Fixed a bug where the "Execute Effect" command would force quit if you checked "Pause" and executed it.  
    ◆Game: Fixed a bug that would force quit if you tried to draw two or more pictures at the same time in Direct3D mode.
    
- [v4.21 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v421b.zip) 1/6/2010  
    ◆Game: Changed the contents of the report file (Report_Game.txt).  
    ◆Other details corrected.
    
- [v4.20 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v420b.zip) 29/12/2009  
    ◆Game: The CPU can now boot normally in Direct3D mode even in a single-core environment.  
    ◆Game: Fixed a bug where the frame rate would not return to 60 after the end of a stage set to a frame rate other than 60.  
    ◆Game: Updated System.ini. You can now set vertical sync ("VSync") ON/OFF in Direct3D mode." If vertical synchronization is not disabled, stages with a frame rate other than 60 will not operate at normal speed, and if vertical synchronization is disabled, the CPU may become heavier or not draw properly in a single-core environment. It is also newly described that "there is a gender".  
    ◆Other details corrected.
    
- [v4.10 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v410b.zip) 27/12/2009  
    ◆Games: Running Direct3D mode in an environment with a single-core CPU makes it extremely slow, so you can no longer boot into Direct3D mode unless your CPU is multi-core. Direct3D is disabled when booted in a single-core CPU environment. ( We will consider supporting single-core CPUs in Direct3D later.)
    
- [v4.00 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v400b.zip) 25/12/2009  
    ◆Editor: Fixed a bug where the client area was narrower than originally in Windows 7.  
    ◆Editor: Updated description of drawing speed in character effects and screen effects.  
    ◆Game: Implemented "invincibility effect" in character settings.  
    ◆Game: Implemented "execute invincible effects" in system settings.  
    ◆Game: You will be able to draw in Direct3D.  
    Up until now, the drawing process used an old technology called DirectDraw, but starting with this version, drawing using Direct3D is now possible.  
    Direct3D allows the video card to perform better, making the drawing process faster than before ( However, the character effects "lens", "mosaic", and "blur" and the screen effects "lens" and "mosaic" have become slower...)  
    Screen flickering, which can occur especially on Windows Vista and Windows 7 (←due to System.ini settings), will also disappear.
    
    To enable Direct3D, run it in the configuration file "System.ini" with "Direct3D=1" ( By default it is "Direct3D=1")
    
    However, we apologize for the inconvenience, but Direct3D only supports 32-bit (16.77 million colors) screens.  
    Since it does not support 8-bit (256-color) screens, the following limitations apply when using Direct3D by carrying over data from previous versions of the game played on 8-bit screens to this version.
    
    Invincible color animation (palette animation) will no longer function  
    The optional "color" prevents the color from changing
    
    It’s pretty much the same as the limitations of traditional 16-bit and 32-bit screens, except for the "change screen color" command, which is realized in Direct3D ( The "Change screen color" command in screen mode 32bit works, which was previously impossible)  
    As for the bitmap format, there is nothing wrong with it remaining at 8bit (256 colors), and there is no need to change the bitmap format following this update.
    
    Also, when it comes to invincible color animations for characters, we have prepared something called an "invincible effect" as an alternative. Enabling the invincibility effect makes it easier to tell if a character is invincible by their appearance, as they glow at regular intervals when they are invincible (even if they don't use the invincibility color).  
    By the way, if you carry data from an older version over to this one, the invincibility effect is bound to be "white".  
    If for some reason you want to disable the invincibility effect ("uncool", "dazzling", etc.), just uncheck "Run invincibility effect" in the main menu "Project" ＞"System"＞ "1".
    
    ◆Games: a major update to System.ini." Added Direct3D configuration." VSync=3" discontinued.  
    Please note that starting with this version, the 32-bit (16.77 million colors) screen is the default. ( This is because Direct3D only supports 32bit  
    **If you want to run it on a traditional default setting ＝8bit (256 colors) screen, start the game by rewriting "Direct3D=0" and "Bpp=0" (or "Bpp=8") in System.ini.**
    
    ◆Game: Fixed a bug where the file selection dialog called in free mode, replay mode, etc. would be displayed incorrectly when starting on an 8-bit (256 colors) screen on Windows Vista or later OS.  
    With this update, the file list is no longer suddenly hidden.  
    However, on Windows 7, on an 8-bit screen, the confirmation dialog when overwriting and saving the replay file will turn completely black and the main text will be invisible, as shown below.  
    ![](http://localhost:4321/menu_game/ActionEditor4/ss01.jpg)  
    I'm very sorry, but I couldn't fix this bug on my own.( I've already given up.)  
    Thank you for your understanding.
    
    ◆Game: Added "Execute color animation (invincible color changes rapidly) when the screen is 256 colors (8 bits)" in system settings.  
    ◆Game: Fine-tuned the invincible character color in Bitmap "Character1～5.bmp" and "Player01.bmp". (I tried not to feel uncomfortable even if the color animation is disabled  
    ◆Other details corrected.
    
- [v2.84 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v284b.zip) 19/8/2009  
    ◆Game: Fixed a bug where a bar for representing the maximum HP value would appear in the bar representing the maximum SP value (gray bar in the default image) in the small bar displayed above the character's head at the moment the SP changed. ( The default image is gray on both HP and SP, so the result is the same)
    
- [v2.83 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v283b.zip) 14/8/2009  
    ◆Editor: Fixed a bug that would force quit if you tried to change the number of data in the common palette and stage palette at the same time.  
    ◆Games: Fixed a bug in some environments where pressing Esc or Alt+F4 while pausing with a message command would stop the game without exiting.  
    ◆Game: Fixed a bug where background images with a width other than 640 were automatically scrolled horizontally or background images with a width other than 480 were automatically scrolled vertically and would not loop correctly.
    
- [v2.73 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v273b.zip) 7/8/2009  
    ◆Game: If you run the character effect "Rotation A" on a character whose graphics are a dedicated bmp for a giant character (for example, spilt in the default palette) with a value different from the size of the dedicated bmp in the "Giant" item, it will not draw properly. Fixed a bug that did not occur. This was a bug that only occurred in v2.71 and v2.72.
    
- [v2.72.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v272b.zip) 31/7/2009  
    ◆Game: In the system settings, you will be able to choose whether to execute a death effect when a character dies due to a "status manipulation" or "code execution" command, and also play the sound effect at the time of death.  
    ◆Game: Fixed a bug where "defense power" could not be stocked.  
    ◆Other details corrected.
    
- [v2.71 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v271b.zip) 24/7/2009  
    ◆Game: Fixed a bug where executing the character effect "Rotation (Back)" on block and item graphics would force termination.  
    ◆Game: Fixed a bug where the main character's flow would not jump on block characters even if they jumped without setting key conditions (height did not change depending on the time the key was pressed).  
    ◆game: when not a single stage background is set, a solid black background is displayed.  
    ◆Game: Fixed a bug where the character display position would change when executing the character effect "Rotation A (emphasis on execution speed when the character becomes huge)" on the giant character at the edge of the screen.  
    ◆Game: The execution speed of the character effect "Rotation A (emphasis on execution speed when the character becomes huge)" for giant characters has been significantly increased.  
    ◆Game: Fixed a bug where if you posed during play and saved it as a replay, the replay might not play properly.
    
- [v2.61 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v261b.zip) 16/7/2009  
    ◆Editor: Fixed a bug where graphics for data after number 161 were sometimes not displayed in the palette window.  
    ◆Game: Fixed a bug where the initial position would shift slightly downward when the flying character became gigantic.  
    Just like the walking character, it will grow upwards.  
    Also, to maintain compatibility, we implemented "Changes in the initial position of flying characters when they are enlarged apply the behavior of versions 2.60 and earlier (the larger the character, the lower the initial position shifts)" in the system settings. This is automatically enabled when loading data from an older version.
    
- [v2.60 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v260b.zip) 10/7/2009  
    ◆Editor: Fixed a bug where, after reducing the number of palette data, if an attempt was made to edit a flow that referenced the reduced data and had "○○summon" or "get item" commands set, the flow would be forcibly terminated.  
    ◆Editor: Add notes on execution speed in the databases "Character Effects" and "Screen Effects".  
    ◆Game: Fixed a bug that could cause the game to force close when a character who had been targeted one or more times died. I think stages with more characters and shots were more likely to occur.  
    ◆Game: Fixed a bug in the database "Character Effects" where "Rotation A (emphasis on execution speed when the character becomes huge)" and "Rotation B (emphasis on drawing accuracy when the character becomes huge)" were reversed.  
    ◆Game: Fixed the bottom left corner of the title image "Title.bmp" not being filled out.  
    ◆Game: Fixed a bug where when moving in the "input direction" in the "straight line movement" command, if you entered diagonally in front of a flying character facing right, it would move diagonally backwards.
    
    ◆Editor: Delete the system setting "Apply standards for shot images versions 2.18 and earlier".  
    This feature was implemented along with changes to the standard for shot images "Shot.bmp" from v2.21.  
    This feature was originally implemented so that shot images of standards earlier than v2.18 could be used as is, but in reality it had no effect at all, and if shot images of standards earlier than v2.18 were used in v2.21 or later, the graphics would shift by one place.  
    It was difficult to fix it so that the numbers wouldn’t shift from now on, and after much deliberation, we came to the conclusion that the feature itself should be removed.
    
    In the end, if we didn't change the standards, no one would have been inconvenienced...  
    We apologize for the inconvenience caused by this bug.
    
    ☆v2.21 and later on how to correctly use shot images from v2.18 and earlier standards[Here](http://localhost:4321/menu_support/actioneditor4_qa/index.html#Q7)Please take a look.
    
    ◆Other details corrected.
    
- [v2.49 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v249b.zip) 3/7/2009  
    ◆Game: Bug fix where extra angle due to alter ego value does not work in "Linear movement" command.  
    ◆Games: Fixed a bug where the effective time of a shot‘existence time’ was no different from when the frame rate was 60.
    
- [v2.48 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v248b.zip) 26/6/2009  
    ◆Editor: Reverse the direction of scrolling with the mouse wheel when editing a stage.  
    ◆Editor: In the main window, you will be able to "test play" with the F5 key and "test play the entire game" with the F7 key.  
    ◆Game: Fixed a bug where even if the main character's "vision" was "circular in front of the character", it would actually be square.  
    ◆Game: Fixed a bug where the result of "vibration frequency ÷ execution time" was too small to vibrate in "Vibration" in the database "Screen effects".  
    ◆Game: Resolved an issue where the main character would appear in the middle of the stage even if he was at the edge of the scrolling range in the database "Screen Effects". Furthermore, the execution speed has been significantly increased.  
    ◆Other details corrected.
    
- [v2.47 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v247b.zip) 19/6/2009  
    ◆Editor: The display of sample graphics in "Flight" and "Flight Movement" of the database "Basic Anime Set" will now take into account "frame shifts during flight".  
    ◆Editor: Fixed a bug where the vertical and horizontal width displays in the database "Sword Type" were reversed.  
    ◆Game: In the bitmap "Character 1", the first frame of the Invincible graphic for Thunder User, Dark User, Ancient Mage, and Legendary Mage (←default data name) was not invincible, so it was painted invincible. Repaint.  
    ◆Game: Fixed a bug where replays where some stage settings (for example, "autoscroll speed") were changed during a stage were not reproduced correctly.  
    ◆Game: The initialization process for the second and subsequent stages in one stage becomes faster. ( Reduces waiting time for replay or "retry" after death)  
    ◆Other details corrected.
    
- [v2.37 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v237b.zip) 12/6/2009  
    ◆Game: Fixed a bug where, when setting a random number of "A～B (left value ～ right value)" in the random number settings of the "Manipulate status" command, setting A to a value greater than B would cause it to kill.
    
- [v2.27 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v227b.zip) 5/6/2009  
    ◆Game: Fixed a bug where the ranking window would appear in challenge mode even though ranking settings were disabled.
    
- [v2.26 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v226b.zip) 22/5/2009  
    ◆Editor: Fixed a bug where "Status condition 2" was insufficiently displayed in "Appearance condition" and "Basic condition" of flow.  
    ◆Game: Fixed a bug where the "key condition" setting in the flow "holds if one or more keys are true" did not work properly.
    

---

● Download more older versions  
Versions prior to 2.26 were published within a blog called "Omoshiro Game Blog 2", but due to security issues, the blog was shut down, so we’re republishing it here.( However, we do not list the release date or updates)

[v2.25 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v225b.zip)  
[v2.23 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v223b.zip)  
[v2.22beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v222b.zip)  
[v2.21 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v221b.zip)  
[v2.18 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v218b.zip)  
[v2.17 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v217b.zip)  
[v2.16 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v216b.zip)  
[v2.15 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v215b.zip)  
[v2.14 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v214b.zip)  
[v2.12 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v212b.zip)  
[v2.06 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v206b.zip)  
[v1.97 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v197b.zip)  
[v1.94 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v194b.zip)  
[v1.89 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v189b.zip)  
[v1.87 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v187b.zip)  
[v1.85 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v185b.zip)  
[v1.83 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v183b.zip)  
[v1.82 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v182b.zip)  
[v1.80 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v180b.zip)  
[v1.78 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v178b.zip)  
[v1.77 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v177b.zip)  
~~v1.76β~~  
~~v1.75β~~  
~~v1.74β~~  
[v1.72beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v172b.zip)  
[v1.71 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v171b.zip)  
[v1.70 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v170b.zip)  
[v1.66 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v166b.zip)  
[v1.65 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v165b.zip)  
[v1.64 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v164b.zip)  
[v1.62 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v162b.zip)  
[v1.60 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v160b.zip)  
[v1.59 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v159b.zip)  
[v1.56 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v156b.zip)  
[v1.55 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v155b.zip)  
[v1.54 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v154b.zip)  
~~v1.53β~~  
[v1.52 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v152b.zip)  
[v1.50 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v150b.zip)  
[v1.49 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v149b.zip)  
[v1.48 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v148b.zip)  
[v1.47.beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v147b.zip)  
[v1.46 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v146b.zip)  
[v1.45 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v145b.zip)  
[v1.44 beta](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v144b.zip)  
[v1.43](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v143.zip)  
[v1.42](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v142.zip)  
[v1.40](http://localhost:4321/soft/ActionEditor4/ActionEditor4_v140.zip)

[Go to the top of this page](#START)[  
](#START)

<a name="GAME_DL"></a>

## Game collection

Almost all of them are free software (free).

Here we only introduce the complete version and recommended games that you can play until the end.  
[New Aquedi BBS](http://ae4directory.web.fc2.com/index.html)There are other games that we recommend, such as the trial version posted on.

If something goes wrong or the operation is slow during play[Download the latest version of Action Editor 4](#AE4_DL)This may be improved if you replace only the program file "Game_v***.exe" (*** is the version) and the configuration file "System.ini".  
*However, running it in the latest version of the program is probably not recommended for most games. There is a possibility that new bugs may appear, so it is a last resort to update the program to the latest version. Also, back up data from older versions before playing with the latest ones.

*If the gamepad (game controller) does not work[Here](/menu_support/gamepad_preferred_device/)It may be possible to resolve this by.

- [For general public games](#GAME_DL_G)
- [To adult games (18 bans)](#GAME_DL_A)

<a name="GAME_DL_G"></a>

### Games for the general public

*There are no plans to add any more works.  
If you're looking for a recent action editor game, you might want to search using the link below.

- [Freem! > Action editor category (newest)](https://www.freem.ne.jp/search/%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%E3%83%BC)
    
- [Free Game Yumegen > Action Editor Category (not in order of latest arrival)](https://freegame-mugen.jp/genre/action_editor.html)
    
- [New Aquedi BBS](http://ae4directory.web.fc2.com/index.html)
    

Registration: 3/12/2019**(This time I wrote the genre because there are so many)**

- [Vivid Twinkler -Cage of Ice and Fire-](https://www.freem.ne.jp/win/game/16653)Author: Nubabizon**ACT**
- [Senki Senki Senki](https://www.freem.ne.jp/win/game/18375)Author: Shigeking**SLG**
- [Beast Rider](https://www.freem.ne.jp/win/game/19205)Author: Minami Karasu**STG**
- [King Martin's magical war story](https://www.freem.ne.jp/win/game/16928)Author: Minami Karasu**ACT**
- [Consciousness STAND UP](https://www.freem.ne.jp/win/game/17359)Author: Shigeking**ACT**
- [Fire minobrem](http://gasejj.wa-sanbon.com/game.html)Author: J.J**SLG**
- [Kemono Friends Sand Star Legend](https://tears-game.jimdofree.com/games/%E3%81%91%E3%82%82%E3%81%AE%E3%83%95%E3%83%AC%E3%83%B3%E3%82%BA-%E7%A0%82%E3%81%AE%E6%98%9F%E4%BC%9D%E8%AA%AC/)Author: TEARs**ACT**
- [Secondary seconds](https://www.freem.ne.jp/win/game/18432)Author: IBU**STG**
- [Monster lip](https://www.freem.ne.jp/win/game/8659)Author: Minami Karasu**ACT**
- [Boss Battle Complex Zero](https://www.freem.ne.jp/win/game/19251)Author: IN**ACT**
- [Barrage Fantastic Dreamer ～ An Ephemeral Diary](https://www.freem.ne.jp/win/game/19123)Author: SHO Games**STG**
- [Running Eve by Aishe Santha](https://www.freem.ne.jp/win/game/19154)Author: Lila＝Icicle**ACT**
- [Onchan's big adventure](https://www.freem.ne.jp/win/game/17217)Author: Onjman**ACT**
- [Emari's Doki Doki Bakery](https://www.freem.ne.jp/win/game/18136)Author: Melfis World**ACT**
- [Dread Red Dragon](https://www.freem.ne.jp/win/game/14903)Author: Shigeking**ACT**
- [Enricri](https://freegame-mugen.jp/action/game_6780.html)Author: Hamuro-sama**ACT**
- [Pyromancer STG](https://www.freem.ne.jp/win/game/12864)Author: Minami Karasu**STG**
- [Scarabekid](https://www.freem.ne.jp/win/game/18656)Author: Minami Karasu**ACT**
- [Karanohako](https://www.freem.ne.jp/win/game/17669)Author: IBU**STG**
- [酉](https://www.freem.ne.jp/win/game/14581)Author: Solid**ACT**
- [RE: Stage 1 Complex](https://www.freem.ne.jp/win/game/16290)Author: IN**ACT**
- [Ninpuu Project ～Ten Shinobi～](https://www.freem.ne.jp/win/game/14379)Author: Arandado**ACT**
- [Ninpuu Project 2 ～Ninja Ranbu～](https://www.freem.ne.jp/win/game/18455)Author: Arandado**ACT**
- [Blue fencer](https://www.freem.ne.jp/win/game/18189)Author: Reimonya-sama**ACT**
- [Nekoba 10th Anniversary Joint Work STG](https://www.freem.ne.jp/win/game/18190)Author: Reimonya-sama**STG**
- [Explosive slime shooting!](https://www.freem.ne.jp/win/game/16052)Author: Solid**STG**
- [Giant cutter](https://www.freem.ne.jp/win/game/10544)Author: Minami Karasu**STG**
- [Ninja Mission Magic Road](https://www.freem.ne.jp/win/game/6692)Author: Minami Karasu**STG**
- [1st Boss Complex -GAMEHERO CROSSOVER-](https://www.freem.ne.jp/win/game/14754)Author: IN**ACT**
- [Dynamic Drillman](https://www.freem.ne.jp/win/game/15211)Author: IN**ACT**
- [Kerocolarin](https://www.freem.ne.jp/win/game/7224)Author: Minami Karasu**Puzzle**
- [Sojin Hakumaden～Snow Princess blooming in Summer](https://www.freem.ne.jp/win/game/19637)Author: SHO Games**STG**
- [Teko teko to ri](https://www.freem.ne.jp/win/game/16181)Author: Toraisu**ACT**
- [LARUA 2](https://www.freem.ne.jp/win/game/17279)Author: GUROS**ACT**
- [Gurudon!](https://www.freem.ne.jp/win/game/10200)Author: Nanaya Aizawa**ACT**
- [T/A Touhou Alternative](https://www.freem.ne.jp/win/game/14350)Author: Reimonya-sama**STG**
- [U〃ーーー￡`⊂Re→￡ヽ](https://www.freem.ne.jp/win/game/14359)Author: Melfis World**ACT**
- [Spearball watermelon split](https://www.freem.ne.jp/win/game/15601)Author: Lila＝Icicle**ACT**
- [Put it in! Sukusuku Friends](https://tears-game.jimdofree.com/games/%E3%81%AF%E3%81%93%E3%82%93%E3%81%A7-%E3%81%99%E3%81%8F%E3%81%99%E3%81%8F%E3%83%95%E3%83%AC%E3%83%B3%E3%82%BA/)Author: TEARs**ACT**
- [Brilliant udon pachi](https://www.freem.ne.jp/win/game/15014)Author: Shigeking**ACT**
- [Limiter Minute](https://www.freem.ne.jp/win/game/15353)Author: IBU**STG**
- [OVER MIND](http://www.freem.ne.jp/win/game/14440)Author: IBU**STG**
- [Marisa and Alice's cookie game](http://gasejj.wa-sanbon.com/game.html)Author: J.J**ACT**
- [AEGIS KINGDOM STORY](https://www.freem.ne.jp/win/game/13178)Author: Toraisu**SLG**
- [Legend of Autumnal Tints](https://www.freem.ne.jp/win/game/18588)Author: SHO Games**STG**
- [Eden Rivers](https://www.freem.ne.jp/win/game/15075)Author: IBU**ACT**
- [Kemono Friends Welcome to Japari Park](https://tears-game.jimdofree.com/games/%E3%81%91%E3%82%82%E3%81%AE%E3%83%95%E3%83%AC%E3%83%B3%E3%82%BA-%E3%82%88%E3%81%86%E3%81%93%E3%81%9D%E3%82%B8%E3%83%A3%E3%83%91%E3%83%AA%E3%83%91%E3%83%BC%E3%82%AF%E3%81%B8/)Author: TEARs**ACT**
- [Unagiatak! ～How to relieve stress in eels～](https://www.freem.ne.jp/win/game/15962)Author: Shinkai Life**STG**
- [Tuna craftsman ～tuna that is kept in your hands～](https://www.freem.ne.jp/win/game/15033)Author: Toraisu**ACT**
- [STAR TRAVELER](https://www.freem.ne.jp/win/game/14008)Author: Fugashi-sama**STG**
- [Ikinuki Defoak 2](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=186)Author: Yashifan**ACT**
- [Knight Act](https://www.freem.ne.jp/win/game/14405)Author: Mr. Rodriguez**ACT**
- [Hermeko](https://www.freem.ne.jp/win/game/16170)Author: Mr. Woshida**ACT**
- [3 brothers](https://www.freem.ne.jp/win/game/18922)Author: marillengine**Horror**
- [Onakin Cannon](https://www.freem.ne.jp/win/game/12986)Author: IN**STG**
- [Nozomi for the fetus](https://freegame-mugen.jp/action/game_7424.html)Author: Ham Man-jiu**ACT**
- [It's me!](https://www.freem.ne.jp/win/game/14675)Author: Kamotori-sama**ACT**
- [Nightmare of Spiritual Mansion](https://www.freem.ne.jp/win/game/18446)Author: SHO Games**STG**
- [Empyreal Fantasia](https://www.freem.ne.jp/win/game/17303)Author: SHO Games**STG**
- [Haritsukai](https://www.freem.ne.jp/win/game/17108)Author: Cuso**Puzzle**
- [Bokuno Communication](https://www.freem.ne.jp/win/game/13256)Author: IN**ADV**
- [Alien vs Moai](https://www.freem.ne.jp/win/game/7102)Author: Minami Karasu**ACT**
- [Brave STG LegendⅠ ～Eternal Verities ver.1.05](https://www.freem.ne.jp/win/game/14724)Author: Solid**STG**
- [Beef Tech Mix-chan's great adventure](https://www.freem.ne.jp/win/game/19605)Author: Dark Trashcan**ACT**
- [DEFOS](http://gomibaking.seesaa.net/article/453253103.html)Author: Dark Trashcan**STG**
- [Vivid Twinkler!](https://www.freem.ne.jp/win/game/13415)Author: Nubabizon**STG**
- [Amore d'Arcegno](https://www.freem.ne.jp/win/game/13931)Author: Tototo-sama**STG**
- [Rapid fire battle game](https://www.freem.ne.jp/win/game/19252)Author: Saburo Kata**ACT**
- [Yassille's Kinuki Shooting](https://www.freem.ne.jp/win/game/18933)Author: Dark Trashcan**STG**
- [Fierce battle! Indomitable Papri-chan](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=248&trview=18)Author: Ham Man-jiu**ACT**
- [Oyuki loses her light and eats a hamburger steak ～Yukinyan Toraiaru～](https://www.freem.ne.jp/win/game/15278)Author: Gureshin-sama**ACT**
- [LARUA](https://www.freem.ne.jp/win/game/14572)Author: GUROS**ACT**
- [SCORPIO](https://www.freem.ne.jp/win/game/17720)Author: Kamotori-sama**STG**
- [Okina-chan's game -PickPocket-](https://freegame-mugen.jp/action/game_7673.html)Author: Koyuki-sama**ACT**
- [Zakorion](https://www.freem.ne.jp/win/game/12878)Author: IN**ACT**
- [Tenko and Momo](https://www.freem.ne.jp/win/game/11848)Author: Iroha-sama**Puzzle**
- [Collapse curse Rashifaden](https://www.freem.ne.jp/win/game/14770)Author: Uja B**ACT**
- [Stylish shadow man](https://www.freem.ne.jp/win/game/13596)Author: IN**ACT**
- [Okigaetenko](https://www.freem.ne.jp/win/game/12959)Author: Iroha-sama**ACT**
- [Twintale](https://ameblo.jp/bsc-pcclub/entry-12330453127.html)Author: Mr. Hanoi**ACT**
- [Halloween smash! ( Temporary](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=248&trview=104)Author: Mr. Burstorner**ACT**
- [Girl's Battle ～To save the family～](https://www.freem.ne.jp/win/game/16471)Author: Marjals**ACT**
- [Yassille's handgun∞](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=179)Author: Dark Trashcan**ACT**
- [Mochi man running!](https://www.freem.ne.jp/win/game/17497)Author: Dark Trashcan**ACT**
- [Hot spring gal vs alien](https://www.freem.ne.jp/win/game/14109)Author: ZATTA**ACT**
- [Trick or THREAT! Halloween threat](https://www.freem.ne.jp/win/game/18793)Author: IBU**STG**
- [A game of running away](https://www.freem.ne.jp/win/game/11286)Author: Saburo Kata**ACT**
- [Before Yonta came](https://www.freem.ne.jp/win/game/8140)Author: By Jin**Horror**
- [Chainsaw Man The ACT](https://freegame-mugen.jp/action/game_7762.html)Author: Koyuki-sama**ACT**
- [Kemono Friends Oiru Coloring Book](https://www.freem.ne.jp/win/game/17969)Author: Namanukeneko-sama**Puzzle**
- [Utsuyatsu](http://cinertia.blog.fc2.com/blog-entry-9.html)Author: C**STG**
- [Yassille's bomber is a netsuki](https://www.freem.ne.jp/win/game/16589)Author: 5T (justAknife)**ACT**
- [Real death game](https://freegame-mugen.jp/action/game_7578.html)Author: Koyuki-sama**ACT**
- [Panic dungeon](https://www.freem.ne.jp/win/game/14964)Author: Mr. Rodriguez**ACT**
- [Yassille's Fantastic Gekims Action](https://www.freem.ne.jp/win/game/19651)Author: 5T (justAknife)**ACT**
- [One-man stress](https://www.freem.ne.jp/win/game/17051)Author: Cuso**Puzzle**
- [A game where Mito Sugino guides participants](https://freegame-mugen.jp/action/game_7258.html)Author: Koyuki-sama**ACT**
- [Yassille's Basic Action New](https://www.freem.ne.jp/win/game/15484)Author: 5T (justAknife)**ACT**
- [Whip Negi Birthday](https://www.freem.ne.jp/win/game/15512)Author: Mr. Wright**ACT**
- [Bell☆pachi](https://freegame-mugen.jp/puzzle/game_7657.html)Author: Ham Man-jiu**Puzzle**
- [With your sister!](https://freegame-mugen.jp/action/game_7248.html)Author: Koyuki-sama**ACT**
- [An interesting game created by King Fudo (lol)](http://dragonyamiyona.yumenogotoshi.com/homupe/game/hudouou/top.html)Author: Dragon Hacker―**ACT**
- [SASUKE -ACTION EDITOR-](https://www.freem.ne.jp/win/game/15799)Author: 5T (justAknife)**ACT**
- [SPECTER](https://freegame-mugen.jp/shooting/game_6221.html)Author: Koyuki-sama**STG**
- [Code: D MadGear](https://www.freem.ne.jp/win/game/18153)Author: Onihime-sama**ACT**
- [Yassille SASUKE 3rd Tournament Early Spring 2017](https://www.freem.ne.jp/win/game/14299)Author: 5T (justAknife)**ACT**
- [Yassille and the False Demon King](https://www.freem.ne.jp/win/game/14521)Author: 5T (justAknife)**ACT**
- [Kero kero kero](https://www.freem.ne.jp/win/game/8451)Author: Iroha-sama**Puzzle**
- [Kabamusou](https://www.freem.ne.jp/win/game/15140)Author: Iroha-sama**ACT**
- [Runaway Sanae](https://www.freem.ne.jp/win/game/13511)Author: Iroha-sama**ACT**
- [It looks like Yassille will take on the challenge of becoming the fighting king2](https://www.freem.ne.jp/win/game/18960)Author: Irosma RPG Production Committee**ACT**
- [Kirby52](https://freegame-mugen.jp/action/game_6617.html)Author: rusi**ACT**
- [Kipakipa3](http://www.freem.ne.jp/win/game/14855)Author: Yapayapa**STG**
- [Berber paradise!　 Hard ver](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=248&trview=132)Author: Yapayapa**ACT**
- [Yasir's Ilosmah Adventure](https://www.freem.ne.jp/win/game/18822)Author: Irosma RPG Production Committee**ACT**
- [Serval-chan's bell avoidance](https://freegame-mugen.jp/action/game_7608.html)Author: Mr. d**ACT**
- [SIMPLE LIFE](https://www.freem.ne.jp/win/game/19459)Author: Shigeking**ACT**
- [Kinzu Island strategy story](https://www.freem.ne.jp/win/game/17100)Author: Two**ACT**
- [Hyper Mariwo imitation 3](https://freegame-mugen.jp/action/game_7737.html)Author: Sety**ACT**
- [Hyper Mariwo imitation 2](https://freegame-mugen.jp/action/game_7540.html)Author: Sety**ACT**
- [Good luck Papri-chan!](https://www.freem.ne.jp/win/game/15354)Author: Yapayapa**ACT**
- [Good luck Papri-chan! 3](https://www.freem.ne.jp/win/game/15613)Author: Yapayapa**STG**
- [BARRAGE UNIVERSE](https://www.freem.ne.jp/win/game/17276)Author: Mr. Nuar**ACT**
- [COLLECTCING JEWELS](https://www.freem.ne.jp/win/game/17496)Author: Mr. Nuar**ACT**
- [Hitobito-kun's Let's Go! Action](https://www.freem.ne.jp/win/game/18477)Author: Lithium Games**ACT**
- [Yassille's Great Adventure 2](https://www.freem.ne.jp/win/game/11244)Author: Ya'eel**ACT**
- [Xmas tree ～I want to decorate this tree with something nice～](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=248&trview=120)Author: Uja B**ACT**
- [Bag-chan's jumping heaven](https://freegame-mugen.jp/action/game_6052.html)Author: Koyuki-sama**ACT**
- [Made in Made the Out of Heaven](https://www.freem.ne.jp/win/game/19453)Author: Dengen Kizoku Dear MIN**ACT**
- [Bildo Andokrash 2](https://www.freem.ne.jp/win/game/17967)Author: Dengen Kizoku Dear MIN**Puzzle**
- [SUPRA YASYUI](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=248&trview=25)Author: Li**ACT**
- [On the run at school!](https://www.freem.ne.jp/win/game/16092)Author: Ya'eel**ACT**
- [Yasir Sport](https://www.freem.ne.jp/win/game/13054)Author: Ya'eel**ACT**
- [Yanille Race](https://www.freem.ne.jp/win/game/13322)Author: Ya'eel**ACT**
- [World of cashier palm XX](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=160)Author: Saikai-sama**STG**
- [Kobo sake](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=173)Author: Saikai-sama**ACT**
- [Games that reduce life by 10 years](http://www.mediafire.com/file/uboutw9i3q0w6rm/10shrink_ver1.05.zip)Author: Pablian**ACT**
- [Shadow world](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=248&trview=3)Author: Dyyosi**ACT**
- [Cold － YU](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=248&trview=62)Author: Tsurupage Maru**ACT**

Registration: 31/12/2016

- [Bean sprout story](http://gasejj.wa-sanbon.com/game.html)Author:[Mr. J.J.](http://gasejj.wa-sanbon.com/)
- [Run! Mono-kun](http://www.freem.ne.jp/win/game/12843)Author:[Dear IBU](https://www.freem.ne.jp/brand/6843)
- [Rope Action Ninja Country Reverse Black Skull](https://www.freem.ne.jp/win/game/13609)Author:[Sloth cat](https://www.freem.ne.jp/brand/7134)
- [Fly! Momo-chan VS Flying Student Council](http://www.freem.ne.jp/win/game/11865)Author:[Mr. Tototo](http://tototoworld.web.fc2.com/)
- [Colortype](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=72)Author:[Dear Rutlδ](http://derutadaiki.ko-me.com/)
- [Axe-throwing girl](http://www.freem.ne.jp/win/game/12399)Author:[Mr. Woshida](http://woshida.web.fc2.com/)
- [Eveprock!](http://ux.getuploader.com/hasutya_game/download/31/EP1.zip)Author:[Lotus tea](http://hasutya.web.fc2.com/index.html)
- [Messagebottle](http://ujab.web.fc2.com/m_bottle.html)Author:[Mr. Uja B](http://ujab.web.fc2.com/)
- [Villagers and the divided Yassille](http://www.freem.ne.jp/win/game/13407)Author:[Dear 5T (justAknife)](http://www.freem.ne.jp/brand/6225)
- [MegaBuro](http://gasejj.wa-sanbon.com/game.html)Author:[Mr. J.J.](http://gasejj.wa-sanbon.com/)
- [WATCHZERO ～Watch Zero～](http://www.freem.ne.jp/win/game/13308)Author:[Mr. Arandado](http://allansinho2000.blog.fc2.com/)
- [MONOCHROMEDOTES the diary](https://www.freem.ne.jp/win/game/14117)Author:[GOLDEN’S Dear S](https://www.freem.ne.jp/brand/7327)
- [Space Soldier Y-05 ”revised”](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=144)Author: @sama
- [Legend of Yassille Gaiden Ninja](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=115)Author: Saikai-sama
- [Agor's diary](http://ujab.web.fc2.com/ago-ru.html)Author:[Mr. Uja B](http://ujab.web.fc2.com/)
- [Evil spirits from the world of eternal summer and other worlds](http://www.freem.ne.jp/win/game/12948)Author:[Dear Two](http://www.freem.ne.jp/brand/6740)
- ~~空腹型宇宙漂流紙袋ジョニー~~Author:~~くらりシっど様~~
- [Yassille boss battle](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=155)Author: Dyyosi

Registration: 6/12/2016

- [Momohime](http://www.freem.ne.jp/win/game/6438)Author:[Mr. Mishimizu](http://www.freem.ne.jp/brand/2817)
- [Touhou Nekoba attack](http://leimon.web.fc2.com/tohong/index.htm)Author:[Mr. Reimonya](http://leimon.web.fc2.com/)
- [Stage 1 complex](http://www.freem.ne.jp/win/game/11768)Author:[Mr. IN](https://twitter.com/blackgoosenext)
- [The story of Puzzle Yasir](http://garibone.blog.fc2.com/blog-entry-71.html)Author:[Mr. Garibone](https://twitter.com/garibone0128)
- [DODGE UPGRADE](http://www.freem.ne.jp/win/game/9786)Author:[Mr. IN](https://twitter.com/blackgoosenext)
- [Rolpan senior](http://www.freem.ne.jp/win/game/11294)Author:[Mr. Melfis World](http://579085.web.fc2.com/index.html)
- [Mr. Jolay](https://www.freem.ne.jp/win/game/11438)Author:[Dear CoolStep](https://www.freem.ne.jp/brand/1593)
- [Daifuku ―Daifuku](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=25)Author: Solid
- [Eltitnu](http://www.freem.ne.jp/win/game/11616)Author:[Dear Chuzume](https://www.freem.ne.jp/brand/2958)
- [The broken banana clip just wanted to sing about ordinary happiness](http://tototoworld.web.fc2.com/banana.html)Author:[Mr. Tototo](http://tototoworld.web.fc2.com/)
- [Action Editor 4 unofficial sample game](http://www.freem.ne.jp/win/game/11337)Author:[Dear Marupon](http://www.freem.ne.jp/brand/6135)
- [Go with Tamaru!](http://www.freem.ne.jp/win/game/10511)Author:[Mr. Melfis World](http://579085.web.fc2.com/index.html)
- [GO! GO! HERO!](http://www.freem.ne.jp/win/game/10846)Author:[Mr. Shigeking](http://shigekingx.web.fc2.com/)
- [A world that has fallen into darkness](http://ujab.web.fc2.com/yamioti.html)Author:[Mr. Uja B](http://ujab.web.fc2.com/)
- [Lunatics' banquet](http://ujab.web.fc2.com/kyoujin.html)Author:[Mr. Uja B](http://ujab.web.fc2.com/)
- [Desire 2](http://www.freem.ne.jp/win/game/10759)Author:[Mr. Saul](https://www.freem.ne.jp/brand/5062)
- [Like Defalut](http://www.freem.ne.jp/win/game/10570)Author:[Dear Chuzume](https://www.freem.ne.jp/brand/2958)
- [Easter egg hunter](http://www.freem.ne.jp/win/game/11517)Author:[Mr. IN](https://twitter.com/blackgoosenext)
- [X'mas WAR](http://www.freem.ne.jp/win/game/10785)Author:[Mr. IN](https://twitter.com/blackgoosenext)
- [Hero STG LegendⅡ ～Nuisance Square](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=84)Author: Solid
- [Rui game 3](http://www.freem.ne.jp/win/game/8831)Author:[Mr. Melfis World](http://579085.web.fc2.com/index.html)
- [HALLOWEEN BLOCK](http://www.freem.ne.jp/win/game/10376)Author:[Mr. IN](https://twitter.com/blackgoosenext)
- [Donran rain fox](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=26)Author: C
- [WATCH2~~ウォッチ2~~](http://www.freem.ne.jp/win/game/10445)Author:[Mr. Arandado](http://allansinho2000.blog.fc2.com/)
- [WATCH~~ウォッチ~~](http://www.freem.ne.jp/win/game/10117)Author:[Mr. Arandado](http://allansinho2000.blog.fc2.com/)
- [NIGHTMARE SURVIVOR](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=75)Author:[Dear Miser](http://spirea3cross.wix.com/citadel)
- [Mass attack!!　 ～Calculate Master](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=92)Author: Solid
- [Yassille Virtual World](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=63)Author:[Trash can](http://gomibaking.seesaa.net/)
- [Yassille vs the devil](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=89)Author:[Trash can](http://gomibaking.seesaa.net/)

Registration: 19/7/2015

- [Moo Moo Action 3](https://sites.google.com/site/akusyonngemuyamumu/mumunoakushon3)Author:[Dear mumimumi](https://sites.google.com/site/akusyonngemuyamumu/home)
- [TOFU ADVENTURE](http://www.freem.ne.jp/win/game/8751)Author:[Dear studioBYP](http://studiobyp.wix.com/index)
- [Floral symphony complete version](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=44)Author:[Lady Lila Icicle](http://iciclerab.sakura.ne.jp/)
- [A paradise of mourning](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=46)Author:[Dear Nair](http://naaaaaru.blog.fc2.com/)
- [Belladonna](http://www.freem.ne.jp/win/game/8210)Author:[Mr. Bald](http://www.freem.ne.jp/brand/4729)
- [50 -FIFTY-](http://www.freem.ne.jp/win/game/8934)Author: Mr. Aizawa
- [Future Orchestra Gruvio](http://www.freem.ne.jp/win/game/8982)Author:[Dear CoolStep](https://www.freem.ne.jp/brand/1593)
- [Full moon in Ibaradani](http://www.freem.ne.jp/win/game/8625)Author:[Mr. Bald](http://www.freem.ne.jp/brand/4729)
- [After school retreat magician Kaede-chan](http://www.freem.ne.jp/win/game/8220)Author:[Mr. Woshida](http://woshida.web.fc2.com/)
- ~~トラネコフィールド~~Author:[Mr. Hoshimoto](http://www.freem.ne.jp/brand/3216)
- [The sword that killed the demon emperor](http://ujab.web.fc2.com/matei.html)Author:[Mr. Uja B](http://ujab.web.fc2.com/)
- [Sealer of Trials](http://dragonyamiyona.yumenogotoshi.com/homupe/game/huin/top.html)Author:[Dragon hacker](http://dragonyamiyona.yumenogotoshi.com/)
- [The fruit of confusion: Dreaming after school](http://hiyokko.sakura.ne.jp/TOF2014kaijo.html)Author: Mutetsuki-sama
- [Indigo legend](http://hiyokko.sakura.ne.jp/TOF2014kaijo.html)Author:[Dear JIN](http://www.freem.ne.jp/brand/2878)
- [Okujo!　 ～My bento plan ～【additional trial version】](http://www.freem.ne.jp/win/game/10302)Author:[Mr. Toraisu](http://www.freem.ne.jp/brand/5263)
- [YS2 (Yassille Shooting)](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=196)Author: Neko Moot
- [City capture humanoid weapon Gaialanner alpha.ver (prototype 1)](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=270)Author: GGGG
- [CORE ZERO](http://www.freem.ne.jp/win/game/8103)Author:[Heretic](http://www.amigo2.ne.jp/~t-rex/)
- [Time killing game version 2](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=290)Author:[Second hand that doesn't work](http://hatarake-byoshin.hateblo.jp/)
- [Spring-kun](http://hatarake-byoshin.hateblo.jp/entry/2015/06/06/094801)Author:[Second hand that doesn't work](http://hatarake-byoshin.hateblo.jp/)
- [Lazy pole](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=2)Author:[Second hand that doesn't work](http://hatarake-byoshin.hateblo.jp/)
- [Desire](http://www.freem.ne.jp/win/game/8907)Author:[Mr. Saul](https://www.freem.ne.jp/brand/5062)
- [Sheep tiger cat](http://www.freem.ne.jp/win/game/8330)Author:[Mr. Hoshimoto](http://www.freem.ne.jp/brand/3216)
- [Ikinuki Defoak](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=26)Author:[Mr. Yashifan](http://blog.livedoor.jp/yuu_lampay/)
- [Shooting to defeat the Demon King](http://hiyokko.sakura.ne.jp/TOF2014kaijo.html)Author:[Dear Kamiya](http://ueumimagatoro.web.fc2.com/)
- [Rumaribihari](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=45)Author: 3 people
- [Orina Series Chapter 2: The Ringo-san Army Strikes Back](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=200&trview=36)Author:[Dear Margialus](http://magearus.sitemix.jp/)
- [I_WANNA_BE_THE_ACTION_EDITOR](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=284)Author: Mr. Altl Ryde

Registration: 14/12/2014

- [Tiger cat hero](http://www.freem.ne.jp/win/game/7431)Author:[Mr. Hoshimoto](http://www.freem.ne.jp/brand/3216)
- [Toraneko Skyer](http://www.freem.ne.jp/win/game/5495)Author:[Mr. Hoshimoto](http://www.freem.ne.jp/brand/3216)
- [Invincible Escorter](http://www.freem.ne.jp/win/game/6443)Author:[Dear Yamipaseri](http://yamipaseri.blog.fc2.com/)
- [Fur hero](http://www.freem.ne.jp/win/game/6224)Author:[Mr. Fjara too](http://www.freem.ne.jp/brand/3560)
- [Silver ninja](http://www.freem.ne.jp/win/game/6491)Author:[Dear Meta](http://usumeta.exblog.jp/)
- [Beta blade](http://www.freem.ne.jp/win/game/7767)Author:[Dear Meta](http://usumeta.exblog.jp/)

Registration: 29/10/2014

- [Spinin burst](http://www.freem.ne.jp/win/game/7738)Author:[Dear CoolStep](https://www.freem.ne.jp/brand/1593)
- [Yusei's Solferium 1 Kai](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=262)Author:[Neo catfish](http://osakanacatfish.jimdo.com/)
- [Yasille and Dream Dream](http://ueumimagatoro.web.fc2.com/dreamdream.html)Author:[Dear Kamiya](http://ueumimagatoro.web.fc2.com/)
- [Orina series chapter 1](http://magearus.sitemix.jp/game02.htm)Author:[Dear Margialus](http://magearus.sitemix.jp/)
- [Ringo Minazuki ～Legend of the Strongest Female Ninja～](http://www.freem.ne.jp/win/game/6857)Author:[Mr. Arandado](http://allansinho2000.blog.fc2.com/)
- [Miniature Sentai Deforanger](http://www.freem.ne.jp/win/game/6897)Author:[Mr. Arandado](http://allansinho2000.blog.fc2.com/)
- [Delta Adventure: The Former Demon King Strikes Back](http://magearus.sitemix.jp/game01.htm)Author:[Dear Margialus](http://magearus.sitemix.jp/)
- [Adventures of Ars Extra Edition Kiku Yugiden](http://magearus.sitemix.jp/game01.htm)Author:[Dear Margialus](http://magearus.sitemix.jp/)
- [Wandering gunman](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=235)Author: YUK

Registration: 31/5/2014

- [PANDARA ～paid trial version available～](http://www.dlsite.com/home/work/=/product_id/RJ127994.html)Author:[Mr. Reimonya](http://leimon.web.fc2.com/)

Registration: 25/5/2014

- [Magnelillon](https://www.freem.ne.jp/win/game/6338)Author:[Dear CoolStep](https://www.freem.ne.jp/brand/1593)
- [Captain Robinson](http://www.freem.ne.jp/win/game/6735)Author:[Mr. Woshida](http://woshida.web.fc2.com/)
- [1 Technique 1 Goal](http://hatarake-byoshin.hateblo.jp/entry/2014/05/03/084228)Author:[Second hand that doesn't work](http://hatarake-byoshin.hateblo.jp/)
- [YS (Yassille Shooting)](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=232&trview=195)Author: Nneko
- [Adventures of Ars Ⅱ Mysterious Dragon and the Seven Orbs](http://magearus.sitemix.jp/game.htm)Author:[Dear Margialus](http://magearus.sitemix.jp/)
- [Sweet Spring with a Girl ～Spring～](http://hatarake-byoshin.hateblo.jp/entry/2014/04/01/093635)Author:[Second hand that doesn't work](http://hatarake-byoshin.hateblo.jp/)

Registration: 2/23/2014

- [Sengoku recklessness](https://www.freem.ne.jp/win/game/6305)Author:[Mr. Shigeking](http://shigekingx.web.fc2.com/)
- [Moo Moo Action 2](https://sites.google.com/site/akusyonngemuyamumu/mumunoakushon2)Author:[Dear mumimumi](https://sites.google.com/site/akusyonngemuyamumu/home)
- [Ibprock S](http://hasutya.web.fc2.com/game/EveProckSuper/top.html)Author:[Mr. Hasucha](http://hasutya.web.fc2.com/)
- [CaraCuriCarnival](http://stcworks.web.fc2.com/game.htm)Author:[Zaru soba](http://stcworks.web.fc2.com/)
- [Adventures of Ars Ⅰ Resurrection of the evil god and the mystery of his father](http://magearus.sitemix.jp/game.htm)Author:[Dear Margialus](http://magearus.sitemix.jp/)
- [Space Soldier Y-05](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=161)Author: Omame-kun
- [Action Editor ＋ TC](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=148)Author: Reshiyashi Ninja Author

Registration: 30/12/2013

- [Brian's Adventures ～Virtual Castle～](http://www.freem.ne.jp/win/game/5828)Author:[Mr. Otokam](http://otokamgarage.web.fc2.com/)
- [Monster Tbuster 1.5](http://www.freem.ne.jp/win/game/5653)Author: Mishimizu-sama
- [TANKO](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=88)Author: Namanukeneko-sama
- [Fudo's ambitions](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=130)Author:[Dear Nair](https://twitter.com/naa_ru)
- [Karaful☆shouting](http://www.freem.ne.jp/win/game/5636)Author: Zazabon
- [Yassille Retro Action](http://hatarake-byoshin.hateblo.jp/entry/2013/10/25/202012)Author:[Second hand that doesn't work](http://hatarake-byoshin.hateblo.jp/)
- [Yassille Variety Games](http://ueumimagatoro.web.fc2.com/yashibara.html)Author:[Dear Kamiya](http://ueumimagatoro.web.fc2.com/)
- [Moo Moo Super Action Game](http://hiyokko.sakura.ne.jp/tof_kari.html)Author:[Dear mumimumi](https://sites.google.com/site/akusyonngemuyamumu/home)
- [★★★★★](http://www.freem.ne.jp/win/game/5792)Author: fuon
- [Spirit chestnut](http://www.freem.ne.jp/win/game/5925)Author: JIN
- [Trick or treat](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=114)Author:[Mr. Garibone](http://garibone.blog.fc2.com/)

Registration: 22/9/2013

- [Temple Story ～Prologue～](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=68)Author: Temple Regular All Stars
- [Daaya's counterattack](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=342)Author:[Mr. Asatsuki](http://asatsuki.blog-fps.com/)
- [Fuseki and evil spirits](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=6)Author: Kouki
- [Pendy](http://www.freem.ne.jp/win/game/5442)Author:[Mr. Woshida](http://woshida.web.fc2.com/)
- [Yassille's Insane](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=12)Author: JIN
- [Challenge only Yassille's shooting Gura Dius Edition ☆](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=318)Author: Omame-kun
- [Standing Hair Gaiden -BulletHell Challenger-](http://threesgame.web.fc2.com/games_5.html)Author:[A group that produces Tatekami Yushiden](http://threesgame.web.fc2.com/index.html)
- [Dangerous guy](https://www.vector.co.jp/soft/winnt/game/se504737.html)Author:[Dear CoolStep](http://rakusuta.web.fc2.com/)
- [Inishie](http://comcell1.web.fc2.com/games/walkthru/inishie_readme.html)Author:[Mr. Tonya](https://twitter.com/_xxxdugong)
- [Eveprock2](http://hasutya.web.fc2.com/game/EveProck2/top.html)Author:[Hasucha. Dear](http://hasutya.web.fc2.com/)
- [Onmyoji Yassille](http://yasifan.web.fc2.com/innyousi.html)Author:[Onmyoji Yassille Production Committee](http://yasifan.web.fc2.com/)
- ~~ダリーユ~~Author:~~dosugoge様~~
- [Defense the Earth](http://hiyokko.sakura.ne.jp/tof_kari.html)Author:[Robozaru-sama](http://robrabo.gg-blog.com/)
- [Super obese Bros.](http://hiyokko.sakura.ne.jp/tof_kari.html)Author:[Mr. Catfish](http://osakanacatfish.jimdo.com/)
- [Robot-kun, save the world](http://hiyokko.sakura.ne.jp/tof_kari.html)Author: Mutetsuki-sama

Registration: 15/7/2013

- [Card Eliminator](http://www.geocities.jp/flatk_fullswitch/ce.html)Author:[Mr. K_](http://www.geocities.jp/flatk_fullswitch/index.html)

Registration: 6/30/2013

- [Legend of Yasille Made in Aquedi](http://dragonyamiyona.yumenogotoshi.com/homupe/game/lyRPG/top.html)Author:[Dragon hacker](http://dragonyamiyona.yumenogotoshi.com/)
- [Gekiokopunpunmaru FROM AKUEDHI](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=195)Author: chuzume
- [Moo Moo Action](https://sites.google.com/site/akusyonngemuyamumu/iide)Author:[Dear mumimumi](https://sites.google.com/site/akusyonngemuyamumu/home)
- [Boxing to the ring](http://hspboxinggame.blogspot.jp/2013/06/blog-post.html)Author:[Mr. Sandbach](http://www7a.biglobe.ne.jp/~BOXCITY/m/src/)
- [Kunoichi autumn leaves](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=208)Author: JIN
- [A great monochrome adventure](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=210)Author: JIN
- [Rockman VS Yassille](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=180)Author: Nofaza-sama

Registration: 29/4/2013

- [Monster Tuster](http://www.freem.ne.jp/win/game/4861)Author: Mishimizu-sama
- [Weapon shop Akane](http://www.freem.ne.jp/win/game/4343)Author: Biririn
- [Fruits Panic](http://www.freem.ne.jp/win/game/4756)Author: Biririn
- [Banquet of the Madmen ～The Lament of the Sword～](http://www.freem.ne.jp/win/game/4977)Author:[Mr. Uja B](http://ujab.web.fc2.com/)
- [Golden flower garden](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=93)Author:[Dear Nair](http://twitter.com/naa_ru)
- [Ball Defense](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=73)Author: Kouki
- [Mono-](http://www.freem.ne.jp/win/game/4971)Author:[Heretic](http://www.amigo2.ne.jp/~t-rex/)
- [ActionEditorDrums2](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=57)Author:[Mr. Asatsuki](http://asatsuki.blog-fps.com/)
- [Good, good](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=157&trview=149)Author:[Mr. Mekkani](http://blog.goo.ne.jp/mini4-dangan)

Registration: 31/12/2012

- [TOWER DEFENDER](http://dragonyamiyona.yumenogotoshi.com/homupe/game/td/top.html)Author:[Dragon hacker](http://dragonyamiyona.yumenogotoshi.com/)
- [NO NAME HERO'S ～SECOND SEASON～](http://dragonyamiyona.yumenogotoshi.com/homupe/game/nnh2/nnh2.html)Author:[Dragon hacker](http://dragonyamiyona.yumenogotoshi.com/)
- [Eve*plock](http://hasutya.web.fc2.com/game/portal.html)Author:[Mr. Hasucha](http://hasutya.web.fc2.com/index.html)
- [Lunatics' Banquet ～Chaotic Evil Justice～](http://www.freem.ne.jp/win/game/4387)Author:[Mr. Uja B](http://ujab.web.fc2.com/)
- [Robozaru vs Makai Union](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=16)Author:[Robozaru-sama](http://robrabo.gg-blog.com/)
- [Royal Hero ～Chapter 1～](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=17)Author:[Robozaru-sama](http://robrabo.gg-blog.com/)
- [THE SHOOTING](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=18)Author:[Robozaru-sama](http://robrabo.gg-blog.com/)
- [Waterfall of legend](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=121&trview=9)Author: Lord of the waterfall
- [Galactic mark](http://ameblo.jp/rusisi/entry-11264231802.html)Author:[Dear Lucy](http://profile.ameba.jp/rusisi/)
- [YASHIYU BROS.](http://materialfactory.ikaduchi.com/game/YBros/)Author:[Mr. Asatsuki](http://asatsuki.blog-fps.com/)
- [Barrage of Yasir](http://ueumimagatoro.web.fc2.com/yashidan.html)Author:[Dear Kamiya](http://ueumimagatoro.web.fc2.com/)

Registration: 20/10/2012

- [-Immortal Cave Explorers-](http://threesgame.web.fc2.com/games_4.html)Author:[Dear 3Sthrees](http://threesgame.web.fc2.com/index.html)
- [Competition](http://garibone.blog.fc2.com/blog-entry-28.html)Author:[Mr. Garibone](http://garibone.blog.fc2.com/)

Registration: 9/16/2012

- [Shikakuyatsu 4](https://www.vector.co.jp/soft/winnt/game/se499360.html)Author:[Dear CoolStep](http://rakusuta.web.fc2.com/)
- [A small war](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=279)Author: Nob

Registration: 22/7/2012

- [Ryusei forgetting world](http://ux.getuploader.com/knoll/download/2/%E7%AB%9C%E6%98%9F%E5%BF%98%E5%A4%B1%E7%95%8C.zip)Author: Mr. Knoll
- [Yassille Boss The Fighting](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=230)Author: ZERO★ZERO
- [JEWEL BREAKER](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=229)Author: Mutetsuki-sama
- [Action Max](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=227)Author: PontaroZ
- [Default character 50th floor dungeon](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=219)Author: Kouki
- [Stealth](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=197)Author: NEET second hand
- [Hell Lucky](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=195)Author: ZERO★ZERO

Registration: 31/5/2012

- [THE SOGEKI](http://www5.hp-ez.com/hp/rapsibu/sogeki)Author:[Mr. Pork](http://www5.hp-ez.com/hp/rapsibu/page1)

Registration: 25/5/2012

- [Shu～ting](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=170)Author: Nob
- [Open the door on the top floor](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=96)Author: Sakukyabe
- [ZEKIMES Blue](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=57)Author: ZERO★ZERO
- [Marine leisure](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=35)Author: ZERO★ZERO

Registration: 4/5/2012

- [Bomber Battle Brothers Bomber Battle Brothers](http://hasutya.web.fc2.com/game/portal.html)Author:[Mr. Hasucha](http://hasutya.web.fc2.com/index.html)
- [Yasir's best (?) Action](http://yasifan.web.fc2.com/bestaction.html)Author:[Mr. Yashifan](http://yasifan.web.fc2.com/)
- [LANCE GANCE REVOLUTION](http://dragonyamiyona.yumenogotoshi.com/homupe/game/lar/lar.html)Author:[Dragon hacker](http://dragonyamiyona.yumenogotoshi.com/)
- [The Blockworld!](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=26)Author: Newspaper
- [Breaker](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=16)Author: ZERO★ZERO
- [Yash and the battle of time](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=88&trview=45)Author: Good luck
- [Yasir's journey](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=69&trview=398)Author: Oxiride

Registration: Before 4/5/2012

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
- [Yassille's ordinary action](https://www.freem.ne.jp/win/game/3415)Author:[Mr. Lutigel](https://www.freem.ne.jp/brand/974)
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
- [Requester Yassille](http://threesgame.web.fc2.com/games_1.html)Author:[Dear 3S](http://threesgame.web.fc2.com/index.html)
- [PESADILLA](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=47&trview=232)Author: Mr. Nar
- [Monster violet](http://woshida.web.fc2.com/violet.html)Author:[Mr. Woshida](http://woshida.web.fc2.com/)
- [Untitled](http://tonyation.web.fc2.com/games/ut/ut_gamepage1.html)Author:[Mr. Tonya](https://twitter.com/_xxxdugong)
- [Be my sword! ( Freeware version)](https://www.vector.co.jp/soft/winnt/game/se476758.html)Author:[Mr. Reimonya](http://leimon.web.fc2.com/)
- [Be my sword! ( Paid )](http://home.dlsite.com/work/=/product_id/RJ059281.html)Author:[Mr. Reimonya](http://leimon.web.fc2.com/)
- [Waken Arcade](https://www.vector.co.jp/soft/winnt/game/se481731.html)Author:[Mr. Reimonya](http://leimon.web.fc2.com/)
- [MACHINE SHOCK](https://www.freem.ne.jp/win/game/2249)Author:[Mr. Otokam](http://otokamgarage.web.fc2.com/)
- [Dark Night History ～Dark history in the dark night～](http://dragonyamiyona.yumenogotoshi.com/homupe/game/dnh/dnh.html)Author:[Dragon hacker](http://dragonyamiyona.yumenogotoshi.com/)
- [Yassille legend](http://www.geocities.jp/ayatoyuna/sin/Yassilleden.html)Author:[@Atmaak-sama](http://www.geocities.jp/ayatoyuna/sin/)

<a name="GAME_DL_A"></a>

### Adult games (18 bans)

*There are no plans to add any more works.  
If you're looking for a recent action editor game, you might want to search using the link below.

- [DLSite (R18) Search for "Action Editor" (newest first)](https://www.dlsite.com/maniax/fsr/=/language/jp/sex_category%5B0%5D/male/keyword/%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%E3%83%BC/per_page/30/without_order/1/page/1/order/release_d)  
    ↑simply keyword searching in "Action Editor". It seems that not all games in the Action Editor series are hits, and only games that include keywords such as "work content" are hits.

Registration: 3/12/2019

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

Registration: 6/12/2016

- [Damned, Kill me!! ～Psst, kill! The Story of the Orc and the Female Knight～ (Charges apply). Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ164325.html)Author:[Mr. Tokatamaruhodo](https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG25716.html)
- [Ethereal LegioN (surcharge). Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ151500.html)Author:[Acid Ton-sama](http://www.dlsite.com/maniax/circle/profile/=/maker_id/RG27842.html)
- [Barrage! ( Paid. Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ145229.html)Author:[Acid Ton-sama](http://www.dlsite.com/maniax/circle/profile/=/maker_id/RG27842.html)
- [Psyka (charges apply). Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ149844.html)Author:[Dear hibana](http://www.dlsite.com/maniax/circle/profile/=/maker_id/RG28876.html)

Registration: 19/7/2015

- [Megaton＝Rage (charges apply). Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ142456.html)Author:[Mr. Twelve Soft](http://b.dlsite.net/RG15652/)
- [Slime Soldier ～Squid the female alien with mucus and die in agony!! ～(Paid. Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ125758.html)Author:[Mr. Reimonya](https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG03680.html)

Registration: 31/5/2014

- [Ries_z Action PLUS (surcharge). Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ088592.html)Author:[Mr. Twelve Soft](http://b.dlsite.net/RG15652/)

Registration: 27/5/2014

- [Seinalmonohe (charges apply). Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ132648/?unique_op=af)Author:[Mr. Tokatamaruhodo](https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG25716.html)

Registration: 22/9/2013

- [Sister Kunoichi Murasaki Kai (charges apply)](http://www.dlsite.com/maniax/work/=/product_id/RJ119148.html)Author:[Mr. Reimonya](https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG03680.html)

Registration: Before 4/5/2012

- [Sister Kunoichi Murasaki (charges apply). Trial version available](http://www.dlsite.com/maniax/work/=/product_id/RJ079102)Author:[Mr. Reimonya](https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG03680.html)

[Go to the top of this page](#START)