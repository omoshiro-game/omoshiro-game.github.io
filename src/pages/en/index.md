---
title: Omoshiro Game Shrine ~Let's Make Action Games & Simulation RPGs~
h1: Omoshiro Game Shrine
subtitle: "Create Action Games & Simulation RPGs"
description: Create fun games and release them for free! Download action game & simulation RPG creation software (tools), SRPGs and RPGs focused on system and game balance, and more.
layout: /src/layouts/Base.astro
breadcrumb: []
keywords:
- Action Game
- Simulation RPG
- Downloadable Games
- Game Development
- Creation
og:
  title: Omoshiro Game Shrine ~Let's Make Action Games & Simulation RPGs~
  description: Free software such as game creation software, action games, and simulation RPGs are available for download!
---

## Recent Updates

- -2025/05/25-  
    Long time no see.  
    
    I've decided to bring the site back online after several years.  
    That said, it’s not like there’s any new release or anything.  
    It’s more like… I just felt a bit sad that the old stuff wasn’t viewable anymore,  
    so I figured I’d at least make it public again.  
    
    As for what comes next — that’s totally undecided.  
    If expectations get too high, it turns into pressure, so I’d really appreciate it  
    if you could just take it easy and enjoy what’s here.  
    
    (If I find small bugs during this reboot, I’ll quietly fix them here and there.)  


- -2020/12/24-  
    [“Action Editor 4”](/en/menu_game/ActionEditor4/) updated (Ver. 10.20)
    This version has also been applied to the sample game.
    [“Yashiyu’s Hyper Ultra Action DX”](/en/menu_game/YashiyuNoHyperUltraActionDX/) updated (Ver. 5.10)

    Merry Christmas!
    But there are no surprise new features—just bug fixes. Sorry about that.

- -2020/10/10-  
    Correction regarding the alarming false‐positive detection issue we reported on October 6.

    We had said that KeyConfig.exe versions 10.00 and earlier were being falsely flagged by Kaspersky, but the correct range is versions 9.67 through 10.00 of KeyConfig.exe (at that time the file name was “KeyConfig\_v2.12.exe”).
    Versions earlier than 9.67 were **not** falsely detected by Kaspersky.

- -2020/10/6-  
    About the alarming false‐positive detection issue:
    When you multi‐scan KeyConfig.exe from “Action Editor 4” versions 9.67–10.00 (file named “KeyConfig\_v2.12.exe” at that time) on OPSWAT ([https://metadefender.opswat.com/](https://metadefender.opswat.com/)) using 38 antivirus engines, the following three flagged it as a threat:

    * Kaspersky
    * RocketCyber
    * Filseclab

    Kaspersky has fixed the false positive as of version 10.10.

    We’ve sent samples by email to the other two companies. RocketCyber responded that their latest engine no longer flags it, and that OPSWAT will update once they adopt that engine. As of October 6, OPSWAT still flagged it, so it’ll take more time.
    We contacted Filseclab on September 29 but haven’t heard back yet…

    Honestly, I feel I’ve done everything I can on this issue so far. If you’re still troubled by these false positives, please contact the antivirus companies directly (in English). Even non‐developers can file inquiries. Sorry for the inconvenience.

- -2020/9/26-  
    [“Action Editor 4”](/en/menu_game/ActionEditor4/) updated (Ver. 10.10)
    Fixed some instances where KeyConfig.exe was being detected as a threat by certain antivirus software.
    *Note: This fix is still incomplete, and some false‐positive triggers remain. The next version will aim for a more robust solution, but I can’t guarantee it. Explaining why I’m releasing this partial fix would take too long—so I’ll spare you the details…*

    
- -2020/7/2-  <br/>
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver10.00)  
    This version is also applied to sample games.  
    ["Yassille's Hyper Ultra Action DX"](/en/menu_game/YashiyuNoHyperUltraActionDX/)Update (Ver5.05)

    We have finally implemented two functions that have been requested for a long time: a function that allows you to set the picture magnification rate vertically and horizontally separately, and a function that flips horizontally and horizontally.  
    Due to development costs and motivation issues, the possibility of developing Action Editor 5 became low, so we decided to implement these two functions that were scheduled to be implemented in Aquedi 5 in Aquedi 4.

    However, this may be the last feature addition in Action Editor 4 or the Action Editor series.  
    I implemented this as a last resort and expressed my gratitude for what I have done so far.  
    I'm glad you like it.

    Also updated the "Support" page.  
    We have resumed accepting requests for Action Editor 4 since April 2019, but this will end today.  
    Thank you very much for your many requests.
    
- -2020/3/9-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.97)
    
- -2020/1/1-  
    Happy New Year.  
    Thank you for your continued support this year.

    This year's schedule has not yet been determined.  
    I previously mentioned that the chances of creating Action Editor 5 will be 50% in the future, but it may be even lower than that. .. .. I've learned and experienced a lot since then, and I'm starting to understand the difficulty of creating tools that fit today's times. 
    
- -2019/11/9-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.96)

    This version is also applied to sample games.  
    ["Yassille's Hyper Ultra Action DX"](/en/menu_game/YashiyuNoHyperUltraActionDX/)Update (Ver5.04)

    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update (Ver5.25)

    This version is also applied to sample games.  
    ["Simulayre"](/en/menu_game/Simulayu/)Update (Ver4.41)
        
- -2019/10/26-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.95)
    
    This version is also applied to sample games.  
    ["Yassille's Hyper Ultra Action DX"](/en/menu_game/YashiyuNoHyperUltraActionDX/)Update (Ver5.03) 
    
- -2019/10/2-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.94)
    
    This version is also applied to sample games.  
    ["Yassille's Hyper Ultra Action DX"](/en/menu_game/YashiyuNoHyperUltraActionDX/)Update (Ver5.02)
    
- -2019/10/1-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.93)
    
    This version is also applied to sample games.  
    ["Yassille's Hyper Ultra Action DX"](/en/menu_game/YashiyuNoHyperUltraActionDX/)Update (Ver5.01)
    
    Also, in a short period of time, we received two reports of a bug in Action Editor 4 where it was impossible to jump from riding a block character, etc., but I think the cause is due to the following specifications.
    
    Help explanation↓  
    /////////////////////////////////////////////////////////  
    When the last command finishes, the entire flow also terminates.  
    The "last command" is the lowest command in the command list.  
    Even if the last command is a parallel execution command, the program waits for it to finish before terminating the flow.  
    When the last command finishes, any parallel execution commands that are still in the process of execution will be terminated as well.  
    /////////////////////////////////////////////////////////
    
    Especially if there is a command "P-0" (parallel execution and execution time 0) after the jump command, this specification will cause the flow to terminate and the jump to be killed when the jump is about to be activated.  
    When I haven't touched Aquedi in a while, I mistakenly think it's a bug. .. .. Sorry for the specifications.
    
- -2019/9/21-  
    In Action Editor 4 online help,["About packaging."](/en/menu_support/actioneditor4_help/packaging/)Added.  
    We explained how to hide image files, etc.
    
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.92)
    
    This version is also applied to sample games.  
    ["Yassille's Hyper Ultra Action DX"](/en/menu_game/YashiyuNoHyperUltraActionDX/)Update (Ver5.00)
    
    As you can see, the update pace of Aquedi 4 is slowing down.  
    There are not enough things that can be implemented or are easy to implement with Aquedi 4, and recently I have been studying and gaining experience with a view to developing Action Editor 5.  
    However, those studies and experiences are not just for Aquedi 5, and it is undecided whether we will develop Aquedi 5 in the future.  
    In terms of probability, the chances of making Aquedi 5 in the future may be exactly 50%. .. .. The chances of starting work this year are even lower, around 20%.  
    I don’t know what will happen next, but I hope you will watch over me warmly. 
    
- -2019/8/24-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.91)
    
    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update (Ver5.24)  
    This version is also applied to sample games.  
    ["Simulayre"](/en/menu_game/Simulayu/)Update (Ver4.40)  
    
- -2019/8/10-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.88)  
    This version became the beta version → official version (stable version).
    
    This version is also applied to sample games.  
    ["Yassille's Hyper Ultra Action DX"](/en/menu_game/YashiyuNoHyperUltraActionDX/)Update (Ver4.90)  
    
- -2019/8/1-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.87beta)
    
    This version is also applied to sample games.  
    ["Yassille's Hyper Ultra Action DX"](/en/menu_game/YashiyuNoHyperUltraActionDX/)Update (Ver4.80)  
    
- -2019/7/28-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.86beta)  
    
- -2019/7/24-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.85beta)  
    
- -2019/7/17-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.82beta)  
      
    This version is also applied to sample games.    
    ["Yassille's Hyper Ultra Action DX"](/en/menu_game/YashiyuNoHyperUltraActionDX/)Update of (Ver4.70)  
    
- -2019/7/16-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.81beta)  
      
    This version is also applied to sample games.    
    ["Yassille's Hyper Ultra Action DX"](/en/menu_game/YashiyuNoHyperUltraActionDX/)Update of (Ver4.60)  
    
- -2019/7/13-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.80beta)  
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
    
    Also for help[Explanation of return values](/en/menu_support/actioneditor4_help/word/#RETURN)Added.
    
    ◆Game: There is a function to save the previous play as a replay file using the F2 key, but a bug was fixed that saved the latest play instead of the previous one (the F1 and F2 keys were the same). This was a bug that occurred in version 9.50～9.67.  
    ◆Game: Timing of flows implemented in version 9.00: "When you receive damage (damage received is 1 or more)", "When you receive impact (impact received is 1 or more or -1 or less)", "When you deal damage with an attack (damage dealt is 1 or more)", Fixed a bug where four types of "when impact is given in an attack (impact is 1 or more or -1 or less)" did not support the setting "target characters involved in timing".  
    ◆Game: Fixed a bug where after playing a replay file with version 9.20 or higher in replay mode, if you select save data with version 9.20 or lower in "Continue", the game might fail to load with "Stage cannot be loaded". Note that if you encountered this bug, you could load it by restarting the game.  
    ◆Game: Implemented "Allow saving replays" check item in stage settings. For example, if you uncheck this check for opening and ending stages (especially with the autosave replay function), you can reduce unnecessary replay files.  
    ◆Game: Fixed a bug where text such as "Space key to register" or "F3 key to register for ranking" was displayed at the bottom of the screen on the stage played before the title screen ("FreeStage=" in "System.ini").  
    ◆Game: Make the display of a type of message that "displays until the progress key is pressed" a little longer, and make it impossible to accept input of the message progress key (Z key) for 0.2 seconds after display. This is a countermeasure against games where you repeatedly press the Z key, as you will often accidentally skip messages.  
    ◆Game: Eliminates the problem that if the event's "world name" and high score display a large number of characters on the world map, the ranking window display will overlap with those characters.
     
    
    This version is also applied to sample games.    
    ["Yassille's Hyper Ultra Action DX"](/en/menu_game/YashiyuNoHyperUltraActionDX/)Update of (Ver4.50)  
    
- -2019/6/26-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.67)  
    ◆Others: Fixed a bug in the version 9.66 program files "Game_v*.exe", "Editor_v*.exe", and "KeyConfig_v*.exe" that disabled some of the antivirus software false positive measures taken in version 9.64. This is not necessarily the cause, but it seems that it was actually detected incorrectly... sorry.
    
    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update of (Ver5.22)  
    ◆Others: Fixed a bug in the version 5.21 program files "Game_v*.exe", "Editor_v*.exe", and "KeyConfig_v*.exe" that disabled some of the antivirus software false positive measures taken in version 5.20.
    
    Also, this version is also applied to sample games.    
    ["Simulayre"](/en/menu_game/Simulayu/)Update of (Ver4.30)  
    
- -2019/6/22-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.66)  
    ◆Game: Implemented "shadowing characters" in "system" settings. If you carry over data from an older version to this version, it will be turned off, so please check it if necessary.  
    ◆Game: Implemented a "display before character" check item in the "Execute effect" command. If you uncheck this check, you can display the effect deep inside the character, which was not possible in the previous version.  
    ◆Games: of the game program (Game_v*.exe)**The window size at the first startup remains the original aspect ratio and becomes the maximum size that corresponds to the display (does not exceed the display resolution)**. . By the way, in the traditional version, the window size is "100% (640_480)".  
    I already remember version 8.71, which implemented an enlargement function ～200% that maintained the original aspect ratio, and specified the maximum size according to the display, but it seems that it was actually 100%...  
    ◆Game: Fixed a bug where the window size at the end of the previous game was not reproduced when starting the game for the second and subsequent times when "WindowMode=1" was set in "System.ini".  
    ◆Game: The maximum window size (resolution) that can be changed from the system menu that appears when you right-click the title bar is "500% (3200_2400)" to "2000%(12800*9600)". By the way, sizes larger than the display are not displayed in the menu.  
    ◆Game: Implemented a function that allows the window size to be one step (+100%) larger than the current size by right-clicking on anything other than the title bar.  
    ◆Game: Fixed a bug in version 9.30 and later where you could not switch to another app using the Alt+Tab key while in full screen, and a bug where you could not return normally after switching apps once during full screen.  
    ◆Editor: Added the following sentence to the explanation on the bitmap conversion tool editor.  
    /////////////////////////////////////////////////  
    ☆If you set the "number of colors in the bitmap" to "16.77 million colors (24-bit) without color palette" in the system settings, it will no longer depend on the color palette, so this conversion process is not necessary  
    /////////////////////////////////////////////////  
    I've seen comments like "Aquedi 4 has to reduce the color of images drawn in full color (I don't like it)", but it looks like this ** If you change the "number of colors in the bitmap" in the system settings, there will be no need to reduce the color of full-color images (no conversion is required with the bitmap conversion tool)**. This specification from the earliest versions may have been confusing due to lack of explanation...  
    ◆Editor: Fixed a bug where, when checking "Make same as file name" in the data names of databases in general, the data names would become strange if the file name contained the character "so"." It might have been no good for anything other than "so".  
    ◆Others: Updated explanation of "System.ini".  
    ◆Others: Three stages in story mode have been added as reference stages.  
    ◆Other, small updates.
    
    This version is also applied to sample games.    
    ["Yassille's Hyper Ultra Action DX"](/en/menu_game/YashiyuNoHyperUltraActionDX/)Update of (Ver4.40)  
    
    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update of (Ver5.21)  
    ◆Game: Implemented "shadowing characters" in the "database" system settings. If you carry over data from an older version to this version, it will be turned off, so please check it if necessary.  
    ◆Games: of the game program (Game_v*.exe)**The window size at the first startup remains the original aspect ratio and becomes the maximum size that corresponds to the display (does not exceed the display resolution)**. . By the way, in the traditional version, the window size is "100% (640_480)".  
    ◆Game: Fixed a bug where the window size at the end of the previous game was not reproduced when starting the game for the second and subsequent times when "WindowMode=1" was set in "System.ini".  
    ◆Game: The maximum window size (resolution) that can be changed from the system menu that appears when you right-click the title bar is "500% (3200_2400)" to "2000%(12800*9600)". By the way, sizes larger than the display are not displayed in the menu.  
    ◆Game: Implemented a function that allows the window size to be one step larger than the current size by right-clicking on anything other than the title bar.  
    ◆Others: Updated explanation of "System.ini".
    
    This version is also applied to sample games.    
    ["Simulayre"](/en/menu_game/Simulayu/)Update of (Ver4.20)  
    
- -2019/6/14-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.64)  
    This version to beta version → **It has become the official version (stable version).**  
    ◆Others: Improved the issue where program files (.exe) were incorrectly detected by some antivirus software. This doesn't mean it's 100% free of false positives, but I think it's better.  
    ◆Other, small updates. 
    
    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update of (Ver5.20)  
    ◆Others: Improved the issue where program files (.exe) were incorrectly detected by some antivirus software. This doesn't mean it's 100% free of false positives, but I think it's better.  
    ◆Other, small updates. 
    
    Also, this version is also applied to sample games.    
    ["Simulayre"](/en/menu_game/Simulayu/)Update of (Ver4.10)  
    
- -2019/6/8-  
    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update of (Ver5.10)  
    ◆Games:**Starting with this version, we stopped including "D3DX9_43.dll", which was prohibited by Microsoft from being distributed as a single file, and fixed it so that the program would run without this dll.**"D3DX9_43.dll" is a program file used by the game program (Game_v*.exe) that is required to run DirectX, and without it in previous versions the game failed to start, but I am embarrassed to say that until now "D3DX9_43." has been used without knowing that distribution of the dll alone is prohibited by Microsoft It shipped with a "dll". We apologize for the inconvenience, but it would be helpful if you could update older versions of your works to this version as much as possible (please delete "D3DX9_43.dll").  
    ◆Game: Fixed a bug where the version of DirectX required to start the program was increased in version 5.00 or later. As a result of this bug, versions 5.00～5.02 did not work with DirectX originally included in Windows, and there was a possibility that the installation (update) of the DirectX runtime would be required on the game player side (specifically) [DirectX End User Runtime Web Installer](https://www.microsoft.com/ja-jp/download/details.aspx?id=35) had to be installed).  
    ◆Other: Fixed a bug where the up key would continue to be entered when some gamepads were connected in "KeyConfig_v2.exe"." Updated as KeyConfig_v2.1.exe". From this version, use "KeyConfig_v2.1.exe".
    
    Also, this version is also applied to sample games.    
    ["Simulayre"](/en/menu_game/Simulayu/)Update of (Ver4.00)  
    
    The second and third updates are exactly the same as Action Editor 4 v9.63 beta.  
    You noticed the first mistake during the second correction process...  
    I'm sorry.
    
    Over the past two months, we've had an incredible amount of major problems.  
    I think this will be the last two months that have been so bad (lol)  
    
- -2019/6/7-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Ver9.63beta
    Supplement Update:
    This is a supplement to the recently released update for Action Editor 4 version 9.63beta, "◆Game: Fixed a bug where the DirectX version required to start the program was increased in version 9.60beta and later".  
    Due to this "the version of DirectX required to start the program has been increased" bug, DirectX originally installed in Windows may not work and may require installation (update) of the DirectX runtime on the game player side (specifically). there is [DirectX End User Runtime Web Installer](https://www.microsoft.com/ja-jp/download/details.aspx?id=35) Requires installation).  
    It was quite a fatal bug with forced termination, so if you are planning to distribute your work using v9.60～9.62beta, please update to version 9.63beta, which does not require DirectX runtime installation. 
    
- -2019/6/5-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.63beta)  
    ◆Game: Fixed a bug that caused the game to kill when the optional "gamepad" was "ON" in version 9.60 beta or later, and when returning to the world map after clearing a stage in story mode.  
    ◆Game: Fixed a bug where the version of DirectX required to start the program was increased in version 9.60 beta or later.  
    ◆Game: In the "System" settings, increase the upper limit on the number of characters in in-game text in "System 4" and "System 5" by about 0～4 characters. Some texts I would have liked to see more of, but this is the limit.  
    ◆Other: Fixed a bug where the up key would continue to be entered when some gamepads were connected in "KeyConfig_v2.exe"." Updated as KeyConfig_v2.1.exe". From this version, use "KeyConfig_v2.1.exe".  
    
- -2019/6/1-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.62beta)  
    ◆Editor: Fixed a bug in bitmap conversion tools starting with version 9.50, where conversion would fail if a folder (multiple files) was specified using drag and drop.  
    
    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update of (Ver5.02)  
    ◆editor: "random name list file" in the databases "ally characters" and "enemy characters" fails to load the random name list file and "! Fixed a bug where the message "File is invalid" would appear. **If you have saved the database even once since version 5.00, I think this bug has rewritten the data to number 0 (the random name list file at the beginning), so re-enter each piece of data from this version onwards** Please return to the previous settings. We apologize for the inconvenience.
    
- -2019/5/31-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.61beta)  
    ◆Game: Fixed a bug where windows were not maximized correctly after selecting "100%" ～ "500%" from the maximized state in the system menu and then maximizing again.  
    ◆Game: Fixed a bug where there were cases where the BGM did not change when transitioning to the next replay using the replay mode pause menu "Next Replay".  
    ◆Editor: Fixed a bug where changing the text of "Type of "Auto-save replay" and "Type of "Replay playback order" in "System" settings would cause the message to return the next time it was started.  
    ◆Other, small updates
    
    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update of (Ver5.01)  
    ◆Game: Fixed a bug where windows were not maximized correctly after selecting "100%" ～ "500%" from the maximized state in the system menu and then maximizing again.  
    
- -2019/5/26-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.60beta)  
    ◆Game: Compatible with XInput compatible gamepad D-pad (POV). It works with either the analog stick or the D-pad.  
    ◆Game: Fixed a bug where only the gamepad with the highest priority could be used. In previous versions, Windows could only use gamepads that it initially recognized or designated as "preferred devices" from its control panel, but starting with this version, other gamepads can be used as well.  
    How to set up "Preferred Device"[Here](/en/menu_support/gamepad_preferred_device/)It is explained in.  
    ◆Game: Implemented "gamepad" as an option. Turn on the gamepad if you want to use it, or turn it off if not. However, strictly speaking, this setting determines whether the gamepad is connected during play, and even if it is "OFF", the gamepad will be recognized if it is connected before the game starts. Conversely, if you do not use the gamepad but set it to "ON", the speed of game execution (FPS) will become unstable because connection checks will be made at regular intervals during the game only if the game is not connected. That said, in action scenes where speed stability is important, connection verdicts are not performed, so you don’t have to be that nervous.  
    ◆Other: key allocation change program**Updated "KeyConfig.exe" as "KeyConfig_v2.exe"**. In line with this game update, no "priority device" settings are required for the second and subsequent gamepads, and the gamepad supports XInput-compatible D-pad settings.**Please use this from this version.**  
    ◆Other, small updates.  
    
    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update of (Ver5.00)  
    ◆Game: Compatible with XInput compatible gamepad D-pad (POV). It works with either the analog stick or the D-pad.  
    ◆Game: Fixed a bug where only the gamepad with the highest priority could be used. In previous versions, you could only use a gamepad that Windows initially recognized or designated as a "preferred device" from the Control Panel, but starting with this version, you can use any other gamepad.  
    How to set up "Preferred Device"[Here](/en/menu_support/gamepad_preferred_device/)It is explained in.  
    ◆Game: Implemented "gamepad" as an option. Turn on the gamepad if you want to use it, or turn it off if not. Just,**Strictly speaking, this setting determines whether the gamepad is connected during play, and even if it is "OFF", the gamepad will be recognized if it is connected before the game starts. Conversely, if you do not use the gamepad but set it to "ON", the speed of game execution (FPS) will become unstable because connection checks will be made at regular intervals during the game only if the game is not connected. That said, connection checks are not performed on stage maps or during battle, where speed stability is important, so you don't have to be that nervous.**  
    ◆Other: key reassignment program**Update "KeyConfig.exe" as "KeyConfig_v2.exe"**. In line with this game update, no "priority device" settings are required for the second and subsequent gamepads, and the D-pad supports XInput-compatible gamepads.**Please use this from this version.**  
    ◆Game: Fixed a bug where each command in the shop menu could not be hidden.  
    ◆Other, small updates.  
    
    We apologize for the delay in responding to the issue of "a glitch that allowed only the highest priority gamepad to be used.".  
    I didn't notice it until now (sweat)  
    It's not uncommon for older games to only allow the use of gamepads with the highest priority, so you can google them and find a solution, but the settings for "priority devices" aren't that well known these days (?) I was concerned, so I would have liked to have responded sooner, and I apologize for the inconvenience. I'm sorry.
    
    Regarding game production software and games other than Action Editor 4 and Simulation RPG Editor 2, we will not modify them as is and will only allow you to use the gamepad with the highest priority.  
    This is because older works are more difficult to fix, more likely to introduce bugs, and less likely to report bugs. I'm sorry.  
    
- -2019/5/16-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.51beta)  
    ◆Game: Fixed a bug where all plays would be saved even if set to "only when clearing a stage" in automatic replay saving.  
    
- -2019/5/12-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.50beta)  
    There are many updates this time**Beta version**It becomes.  
    ◆Games: added "Replay Autosave" to the game’s options." You can choose from "Do not autosave", "Only when clearing a stage", or "Save all".**"Save All" saves replays not only when clearing a stage or making a mistake, but also when you select "Shuryou", "Retry", or "Return to map" from the pause menu (ESC key or window). (It will not be saved if you close it with "×" in the top right corner).**It should be noted that it is not autosaved during test play.  
    ◆Game: Replay mode file selection changes from Explorer-like dialog to Challenge mode-like UI, and a playlist (play through) system is implemented. Along with this is an image file**16 from coordinates (64,16) of "Accessory.bmp"_16, coordinates (80,16) to 16_Scrollbar added at 16**Was done. As a caveat,**Subfolders and below are no longer displayed.**You can also revert to 9.30 or earlier by checking "Use Explorer-style file selection dialog for versions 9.30 and earlier when selecting files for free mode and replay mode, and manually saving replays" in the "System" settings, but this does not support playlists. The file selection dialog before 9.30 also has some advantages, such as support for subfolders**For players who don't know the specifications of Action Editor 4, I think it's easier to understand after 9.50 and it's more comfortable to play with a replay playlist.**  
    ◆Game: Like replay mode, file selection in free mode changes from an explorer-like dialog to a challenge mode-like UI. Also here**Subfolders and below are no longer displayed.**  
    ◆Game: Added "Replay Playback Order" to game options." You can choose from "Sort order", "Sort order & stage clear only", and "Repeat the same replay". It is now possible to play replays in the order of the replay mode playlist, or to play only replays that have cleared the stage.  
    ◆Games: When saving replays in a world made up of multiple stages, the stage number will be added to the replay file name.  
    ◆Game: Changed the structure of replay file names. In the case of autosave, when clearing the stage, the file name is prefixed with "_CLEAR_The letters "are added. This is mainly a change to achieve the "Sort order & stage clear only" behavior of the game's option "Replay playback order".  
    ◆Game: Renew the dialog when manually saving replays using the F1 and F2 keys. In this dialog, select "Save as stage cleared replay data" (at the end of the file name, select "Save as stage cleared replay data")_CLEAR_You will need to select either "Add" or "Save as replay data without clearing the stage" to save. " You can also revert to dialogs from 9.30 or earlier in the "System" settings, but this is deprecated.  
    ◆Game: "Project" ＞ Implemented "Configuration of Replay File Names" in "System". You can choose to include [stage file name] or [stage name] in the replay file name.  
    ◆game: "stage clear" command with "autosave replay at end of file name"_CLEAR_Implemented the "Add characters" check item. I think it's usually fine to turn it on.**The use of OFF is, for example, when the flow timing is set to the "stage clear" command "when death occurs", and "I want to record high scores even at death, but I don't want it to be treated as a stage clear." Case**So, in this case during autosave of the replay "_CLEAR_By not adding the "character", you can save it as a replay file that has not cleared the stage.  
    ◆Game: Added "Replay message autoprogress seconds" to game options. It autoprogresses messages and pictures of the type that appear until the Z key is pressed in a specified number of seconds during replay playback. Note that you can also advance messages using the Z key regardless of this setting.  
    ◆Game: The game's option mode will now display explanatory text at the bottom of the screen. It can be set from the options menu frame of the main menu "Project" ＞ "System".  
    ◆Game: Added "Next replay", "Previous replay", and "Replay selection" to the pause menu. These are menu commands that can only be selected in replay mode.  
    ◆Games:**In replay mode, the pause function (pose menu) cannot be turned off.**There is a check item called "Pause with space key (pause to call menu)" in "Project" ＞ "System", but even if you uncheck this check, the pause will work in replay mode as an exception. The pause menu is now displayed. The pause menu limited to replay mode is convenient, so I purposely choose this specification.  
    ◆Game: Replay files will now be saved with read-only attributes. We recommended the update date and time order for sorting replay playlists, so we took measures to prevent the update date and time from being easily rewritten.  
    ◆Game: World selection in challenge mode allows you to move from world 1 position ↑key to last world, last world to↓ key to world 1.  
    ◆Game: Replay files cannot be read in free mode (replay files contain stage data, so only that part can be read). Rather than not being able to load it, it seems that even in the previous version, the error "(the file I tried to load) is corrupted" appeared and I was unable to actually load it. Starting with this version, replay files will no longer even be displayed on the free mode stage file selection screen.  
    ◆Others: Added items "How to operate" and "About replay" to the included "Readme2.txt". It may be easier to edit this when distributing.  
    ◆Others: We have listed the following techniques in the included "About game distribution.html" and in the options menu of the online help.  
    /////////////////////////////////////////////////////////////  
    **If you want to change the optional default settings during game distribution, do not delete the entire "user_data" folder with game save data files, but optionally set it to default and then delete any files in the "user_data" folder other than "Option.dat" (distribute it).**  
    /////////////////////////////////////////////////////////////  
    ◆Others: Subtle update of the included "System.ini".  
    ◆Other details updated.
    
    With this update, online help is now available ["About replay."](/en/menu_support/actioneditor4_help/replay/)Added.  
    This update has nothing to do with the section "Replays may not be reproduced faithfully", but I added it because I haven't explained it properly in Help before, so I'm sorry for the inconvenience.
    
    If you carry over data from an older version to this version, the newly added options "Replay autosave", "Replay playback order", and "Replay message autoprogress seconds" will be hidden. and when selecting files for "Free mode and Replay mode" in the system settings Use the Explorer-like file selection dialog version 9.30 or earlier when manually saving replays is also enabled (though not recommended). The other settings also behave as unchanged as possible from the previous version, so if you want to use the functions implemented this time, you will need to change various settings in "Project" ＞ "System" from the main menu. 
    
- -2019/5/4-  
    [Form email](/en/menu_mail/) set the character limit for messages from 150 characters to 500 characters.  
    
- -2019/4/15-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.30)  
    This version became the beta version → official version (stable version).  
    ◆Games:**A dialog for selecting files in free mode, replay mode, and when saving replays will be displayed, but this dialog has been fixed to a bug where the app freezes when deleting, copying and pasting files, or otherwise performing operations**。  
    ◆Others: Describe the reason why full screen mode (WindowMode=0) is deprecated in the environment configuration file "System.ini" (although full screen has been deprecated for some time). The main reason for its deprecation is that a dialog for selecting a file will be displayed in free mode, replay mode, and when saving replays, but if you switch apps using Alt+Tab, etc. at this time, you will not be able to return to normal.  
    ◆Other details corrected. 
      
    Sample game ["Yassille's Hyper Ultra Action DX"](/en/menu_game/YashiyuNoHyperUltraActionDX/) has also been updated to this version (Ver4.30)
      
      
    I've always thought that a relatively large number of games had the replay function disabled, but I wonder if the first bug (freezing due to file deletion, etc.) was the cause. .. .. I've taken countless replays myself, but I've noticed it late.  
    We apologize for the inconvenience, but for all works that have the replay function enabled, it may be better to update to this version or disable the replay function.  
    We apologize for any inconvenience caused.
    
    I think it will be a little while before we consider the requests we received via form email. I will do my best to make up for this mistake... 
    
- -2019/4/12-  
    Show recent tweets on the side.  
    
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.22beta)  
    ◆Game & Editor: Fixed a bug that forced termination immediately after saving a replay in versions 9.20beta and 9.21beta. Also, it may have been possible to force close the game illegally, except immediately after saving the replay, but this version fixes that as well.  
    
    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update of (Ver4.92)  
    ◆Game & Editor: Fixed a bug that may have caused unauthorized force termination in versions 4.90 and 4.91.  
    
- -2019/4/7-  
    Updated "Support" page (for the first time in years...)  
    [Form email](/en/menu_mail/)**We have resumed accepting requests for "Action Editor 4"**!  
    Your request won’t necessarily come true with Aquedi‘4’.’ It's a double-chance method that could be achieved with 5." If I had to make a 5.  
    ***Please tell us not only the content of the desired function, but also the reason why you want that function (what you want to achieve with that function, etc.)**  
    
- -2019/4/6-  
    Fixed links to "New Action Editor BBS" in "Recommended Links" etc.
    
    Over 10 years ago? I had posted a link to 'New Action Editor BBS' from the 'Recommended Links' on this site, but I had pasted the wrong page.  
    This is because people who fly to the BBS from traditional links have a hard time finding the "post password." I can't write without a posting password  
    The "post password" should be checked before using BBS[‘Terms and Conditions’](http://ae4directory.web.fc2.com/kiyaku.html#BBS)So you can fly directly to the "Terms of Use"["Action Editor 4 Directory"](http://ae4directory.web.fc2.com/index.html)It seems that the correct answer was to post a link.  
    It was totally my mistake... I was slow to notice...
    
    I want to apologize to everyone who couldn't write because of this...  
    I'm sorry until now.  
    I also felt sorry for the BBS administrator.  
    
- -2019/4/2-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.21beta)  
    ◆Editor: Fixed a bug in version 9.20beta that caused the game to end when a stage was cleared during test play of a single stage.
    
    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update of (Ver4.91)  
    ◆Editor: Fixed a bug where the main window would be hidden behind an inactive window (for example, Explorer) after automatic backup execution.
    
- -2019/4/1-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.20beta)  
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
    
    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update of (Ver4.90)  
    ◆Game: Fixed a bug where an exit confirmation dialog would appear even when the game ended abnormally (forced termination due to an exception error).  
    ◆editor: implemented automatic backup of edited data ("data" and "e_data" folders). The backup is performed only when the edit data is successfully loaded immediately after starting the editor. You can change the backup settings from the main menu "Projects" ＞ "Project Options", and there you will find an explanation.  
    ◆Others: Added two backup folders to "Files (folders) that should be deleted before distribution" in "About game distribution.html".  
    ◆Other details corrected.
    
- -2019/3/16-  
    Updated "Recruitment Information" page.  
    We will stop accepting applications for games made by the Action Editor series and games made by the Simulation RPG Editor series.
    
    After updating the game collection the other day, I thought about it again and decided that I would no longer update the "game collections" of Aquedi and Simuedi, so I will also stop accepting applications for recommended games.  
    The reason I no longer update my "game collection" is that I've always been weak at carefully selecting the works to be registered, and I've been secretly worried about it (lol)  
    There may be a few people who will be disappointed if they are not registered, so they will have to be properly vetted. Actually, I want to relax my shoulders and enjoy the game more. .. .. That kind of worry.  
    As a tool author, this was a bit of a difficult problem for me.  
    I'd like to thank you for making the game, but it's a bit disappointing considering it could be discouraging...  
    However, I think that's a problem if you register all your works unconditionally, and I wonder if I don't need to update them anymore.
      
    Note that this is not a substitute for not updating the game collection for "Action Editor 4"["Game Collection"](/en/menu_game/ActionEditor4/#GAME_DL)I've posted some links to Freem's Action Editor category (in order of latest arrival), etc. (SimuEdie 2 as well)  
    
    ---
    
    Corrected the description of "Character’s dedicated bmp" in "Database" in Action Editor 4 Help as follows.
    
    × The size of the bitmap is fixed at 512 widths, and the vertical width is free.**However, please make the height a multiple of 32 and keep it within 480.**  
    ↓  
    ○ The size of the bitmap is fixed at 512 widths, and the vertical width is free.**However, please make the vertical width a multiple of 32.**
    
    If the height exceeds 480, the drawing speed in DirectDraw mode will be slower, so there is no problem if you exceed it.  
    In the description of "Character's dedicated bmp" in the "Image Standards" section, it says "Vertical width is free". .. .. This was the correct answer.
    
- -2019/3/12-  
    Added 139 works to "Action Editor 4" ["Game Collection" (for the general public)](/en/menu_game/ActionEditor4/index.html#GAME_DL_G)  
    Added 12 works to "Action Editor 4" ["Game Collection" (for adults)](/en/menu_game/ActionEditor4/index.html#GAME_DL_A)  
    Added 2 works to "Simulation RPG Editor 2" ["Game Collection"](/en/menu_game/SRPGEditor2/index.html#GAME_DL)  
    Added 9 works to "Simulation RPG Editor" ["Game Collection"](/en/menu_game/SRPGEditor/index.html#GAME_DL)  
    Added 1 works to "Action Editor+" ["Game Collection"](/en/menu_game/ActionEditorPlus/index.html#GAME_DL)  
      
    We have updated our game collection for the first time in about 2 years and 2 months!  
    To be honest, there is a possibility that this will be the last game collection update, so we spent more time discovering it than usual, so the number of works was enormous.  
    We have carefully selected this number lol  
    I really appreciate it, and I still can’t believe so much Action Editor 4 is being used.  
    Thank you to all the game authors.
    
    Also, while playing Aquedi 4 games, I noticed a lot of things (problems) and came up with some features that I personally wanted to implement, so I think I'll be updating Aquedi 4 again soon.  
    Well then.
    
- -2019/3/10-  
    Fixed broken links on "Action Editor 4" ["Game Collection"](/en/menu_game/ActionEditor4/index.html#GAME_DL)
    Basically, we checked the tool for only 404 errors, and please forgive us if there are still links with problems such as works not being able to be downloaded. You might be able to find it if you google the title of the work...
    
- -2019/1/26-  
    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update of (Ver4.82)  
    ◆Editor: The background image of the world map will now be displayed on the editor as well.  
    
- -2019/1/1-  
    Happy New Year.  
    Thank you for your continued support this year.
    
    If we look back at 2018 in the update history, we almost only fixed bugs in the second half...  
    And this is likely to continue.  
    We apologize for making this site extremely boring.
    
    Behind the scenes, we almost implemented two new features for Action Editor 4, but both ended in failure.  
    I also made a small-scale and experimental new work, but I didn't release it either.
    
    I'd like to update the collection of games in the Action Editor and Simulation RPG Editor series someday... I probably won't be able to do it until I have plenty of time and mental space, so I don't know when it will happen.
    
- -2018/12/9-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.14)  
    ◆Editor: Specify in the database "Sound Effects" that the Wave file does not support Wave extension format or compression format. The online help also explains the following.
    
    (extracted from online help below)  
    **If the Wave extension format only supports Wave files in invalid and uncompressed PCM format, and in other formats (such as ADPCM), even if you can play them in the editor, you won't be able to play them in games.**  
    I don't think there are many people who are aware of the Wave format on a regular basis**All you have to do is remember, ''If it doesn't play on the game side, you can solve it by converting the format.''**I feel like it.  
    Note that free software is sufficient to convert the format, for example, in the case of the software "Audacity" used by the author of this software, simply importing the problematic file and resaving it will disable the Wave extension format. It is essentially converted into an uncompressed PCM format WAVE file.
    
    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update of (Ver4.81)  
    ◆Editor: Specify in the database "Sound Effects" that the Wave file does not support Wave extension format or compression format.  
    
- -2018/9/21-  
    ["Action Editor 4"](/en/menu_game/ActionEditor4/)Update of (Ver9.13)  
    Fixed a bug in commands that use targets, such as "guided movement", where command behavior (moving targets, etc.) would become strange if the following conditions were met.
    
    The target of the command is the enemy (the "operation" is the "computer")  
    -The main character instantly moved to a remote location using a "warp" command  
    ・Due to the above movement, the target's position changed from inside the screen to outside the screen, and the action conditions were changed from being met to not being met
    
    At least this bug was present in the "Shot" with "Guided Move" and "Move Type" "Guide to Target".  
    It is unconfirmed whether this occurred in all commands that use the target, but even if it did, it should have been fixed in this version.  
    Along with this modification, we implemented "Command behavior using the target when the main character moves instantly, such as by warp, applies behavior from version 9.12 or earlier" in the system settings. This setting is enabled if you carried over data from version 9.12 or earlier to this version.  
    
- -2018/7/31-  
    ["Simulation RPG Editor 2"](/en/menu_game/SRPGEditor2/)Update of (Ver4.80)  
    ◆Game: Fixed a bug where canceling or repositioning the initial position of an ally who possessed an event, such as by placing another ally, would result in a high probability of force termination upon subsequent relocation or action.  
    ◆Game: Fixed a bug where if an ally who had possessed an event in the past was placed on a stage that did not possess an event, there was a high probability that it would be forcibly terminated when placed or acted on.  
    ◆Game: Fixed a bug where squares that were movable but unable to act were not displayed as movable ranges when characters moved.  
    
    Also, this version is also applied to sample games.    
    ["Simulayre"](/en/menu_game/Simulayu/)Update of (Ver3.30)  
    

---
  

## What is this site?

The main site is free software (free) created by administrator Anton.  
You can download software for action games and simulation RPGs.  
There are also SRPGs and RPGs that are particular about system and game balance.

The most popular one is [Action editor 4](/en/menu_game/ActionEditor4/)!  
You can easily create fun action games and shooting games.  
Action editor 4 has also been featured on major sites and magazines such as Freem.

## About links

All pages on this site "Interesting Game Temple ～Let's Create Action Games & Simulation RPGs～" are link-free. If you are interested, please introduce the site and games!

## Update history

- -2020/12/24  
    "Action Editor 4" (Update to Ver10.20)  
    "Yassille's Hyper Ultra Action DX" (Update to Ver5.10)  
    
- -2020/9/26  
    "Action Editor 4" (Update to Ver10.10)  
    
- -2020/7/2  
    "Action Editor 4" (Update to Ver10.00)  
    "Yassille's Hyper Ultra Action DX" (Update to Ver5.05)  
    
- -2020/3/9  
    "Action Editor 4" (Update to Ver9.97)  
    
- -2019/11/9  
    "Action Editor 4" (Update to Ver9.96)  
    "Yassille's Hyper Ultra Action DX" (Update to Ver5.04)  
    "Simulation RPG Editor 2" (Update to Ver5.25)  
    "Simulayre" (Update to Ver4.41)  
    
- -2019/10/26  
    "Action Editor 4" (Update to Ver9.95)  
    "Yassille's Hyper Ultra Action DX" (Update to Ver5.03)  
    
- -2019/10/2  
    "Action Editor 4" (Update to Ver9.94)  
    "Yassille's Hyper Ultra Action DX" (Update to Ver5.02)  
    
- -2019/10/1  
    "Action Editor 4" (Update to Ver9.93)  
    "Yassille's Hyper Ultra Action DX" (Update to Ver5.01)  
    
- -2019/9/21  
    "Action Editor 4" (Update to Ver9.92)  
    "Yassille's Hyper Ultra Action DX" (Update to Ver5.00)  
    
- -2019/8/24  
    "Action Editor 4" (Update to Ver9.91)  
    "Simulation RPG Editor 2" (Update to Ver5.24)  
    "Simulayre" (Update to Ver4.40)  
    
- -2019/8/10  
    "Action Editor 4" (Update to Ver9.88)  
    "Yassille's Hyper Ultra Action DX" (Update to Ver4.90)  
    
- -2019/8/1  
    "Action Editor 4" (Update to Ver9.87beta)  
    "Yassille's Hyper Ultra Action DX" (Update to Ver4.80)  
    
- -2019/7/28  
    "Action Editor 4" (Update to Ver9.86beta)  
    
- -2019/7/24  
    "Action Editor 4" (Update to Ver9.85beta)  
    
- -2019/7/17  
    "Action Editor 4" (Update to Ver9.82beta)  
    "Yassille's Hyper Ultra Action DX" (Update to Ver4.70)  
    
- -2019/7/16  
    "Action Editor 4" (Update to Ver9.81beta)  
    "Yassille's Hyper Ultra Action DX" (Update to Ver4.60)  
    
- -2019/7/13  
    "Action Editor 4" (Update to Ver9.80beta)  
    "Yassille's Hyper Ultra Action DX" (Update to Ver4.50)  
    
- -2019/6/26  
    "Action Editor 4" (Update to Ver9.67)  
    "Simulation RPG Editor 2" (Update to Ver5.22)  
    "Simulayre" (Update to Ver4.30)  
    
- -2019/6/22  
    "Action Editor 4" (Update to Ver9.66)  
    "Yassille's Hyper Ultra Action DX" (Update to Ver4.40)  
    "Simulation RPG Editor 2" (Update to Ver5.21)  
    "Simulayre" (Update to Ver4.20)  
    
- -2019/6/14  
    "Action Editor 4" (Update to Ver9.64)  
    "Simulation RPG Editor 2" (Update to Ver5.20)  
    "Simulayre" (Update to Ver4.10)  
    
- -2019/6/8  
    "Simulation RPG Editor 2" (Update to Ver5.10)  
    "Simulayre" (Update to Ver4.00)  
    
- -2019/6/5-  
    "Action Editor 4" (Update to Ver9.63beta)  
    
- -2019/6/1-  
    "Action Editor 4" (Update to Ver9.62beta)  
    "Simulation RPG Editor 2" (Update to Ver5.02)  
    
- -2019/5/31-  
    "Action Editor 4" (Update to Ver9.61beta)  
    "Simulation RPG Editor 2" (Update to Ver5.01)  
    
- -2019/5/26-  
    "Action Editor 4" (Update to Ver9.60beta)  
    "Simulation RPG Editor 2" (Update to Ver5.00)  
    Added "When the gamepad doesn’t work" to the "Support" page.  
    
- -2019/5/16-  
    "Action Editor 4" (Update to Ver9.51beta)  
    
- -2019/5/12-  
    "Action Editor 4" (Update to Ver9.50beta)  
    
- -2019/4/15-  
    "Action Editor 4" (Update to Ver9.30)  
    "Yassille's Hyper Ultra Action DX" (Update to Ver4.30)  
    
- -2019/4/12-  
    "Action Editor 4" (Update to Ver9.22beta)  
    "Simulation RPG Editor 2" (Update to Ver4.92)  
    
- -2019/4/7-  
    Update to the "Support" page  
    We have resumed accepting requests for "Action Editor 4" via form email!
    
- -2019/4/6-  
    Fixed links to "New Action Editor BBS" in "Recommended Links" etc. 
    
- -2019/4/2-  
    "Action Editor 4" (Update to Ver9.21beta)  
    "Simulation RPG Editor 2" (Update to Ver4.91)  
    
- -2019/4/1-  
    "Action Editor 4" (Update to Ver9.20beta)  
    "Simulation RPG Editor 2" (Update to Ver4.90)  
    
- -2019/3/16-  
    Updated "Recruitment Information" page.  
    We will stop accepting applications for games made by the Action Editor series and games made by the Simulation RPG Editor series. 
    
- -2019/3/12  
    Added 139 works to "Action Editor 4" - "Game Collection" (for the general public)  
    Added 12 works to "Action Editor 4" - "Game Collection" (for adults)  
    Added 2 works to "Simulation RPG Editor 2" - "Game Collection"  
    Added 9 works to "Simulation RPG Editor" - "Game Collection"  
    Added 1 works to "Action Editor+" - "Game Collection"  
    
- -2019/3/10  
    Fixed broken links in "Game Collection" in "Action Editor 4".
    
- -2019/1/26  
    "Simulation RPG Editor 2" (Update to Ver4.82)  
    
- -2018/12/9  
    "Action Editor 4" (Update to Ver9.14)  
    "Simulation RPG Editor 2" (Update to Ver4.81)  
    
- -2018/9/21  
    "Action Editor 4" (Update to Ver9.13)  
    
- -2018/7/31  
    "Simulation RPG Editor 2" (Update to Ver4.80)  
    "Simulayre" (Update to Ver3.30)  
    
- [View more](/en/renewallog/)