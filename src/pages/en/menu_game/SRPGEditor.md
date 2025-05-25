---
title: Simulation RPG Editor
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Game tools
    url: /menu_gametool/
  - name: Simulation RPG Editor
    url: /menu_game/SRPGEditor/
---

<a name="START"></a>

## Simulation RPG Creation Software - Simulation RPG Editor

**The latest version, [Simulation RPG Editor 2](/menu_game/SRPGEditor2/), is recommended now!**

Here, you can download the simulation RPG creation software "Simulation RPG Editor".
You can also download games made with Simulation RPG Editor and materials for Simulation RPG Editor.

[To Simulation RPG Editor Downloads](#SRPGE_DL)

[To Game Collection](#GAME_DL)

[To Material Collection](#MATERIAL_DL)


<a name="SRPGE_DL"></a>

## Simulation RPG Editor Downloads

**Games created with Simulation RPG Editor can be distributed on your own website, etc.**
For details, please see the included "二次配布について.chm" (Regarding Secondary Distribution.chm).

|Simulation RPG Editor [Download Latest Version (zip)](/soft/SRPGEditor/SRPGEditor.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)")|   |
|---|---|
|Version|5.22|
|Genre|Simulation RPG Creation Software|
|Number of Players|1 person|
|Software Type|Freeware (Free)|
|Operation Confirmed|Windows 8, 7, Vista, XP, 2000, ME, 98|
|Initial Release Date|2007/3/24|
|Last Release Date|2018/4/14|
|Comment|**Simulation RPG creation software**. <br>You can create classes, characters, skills, events, etc., and set systems like damage calculation formulas to a very detailed level. <br>A drawback is that terms cannot be changed (e.g., changing "HP" to "Stamina").|

[To Top of Page](#START)

● Update History and Downloads for Each Version
- [v5.22](/soft/SRPGEditor/SRPGEditor_v522.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2018/4/14  
  ◆ CustomKeySettings.exe now supports English layout keyboards.
- [v5.21](/soft/SRPGEditor/SRPGEditor_v521.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2017/9/24  
  ◆ Fixed an issue where the display's automatic OFF setting and screensaver would activate when operating in windowed mode solely with a gamepad. Depending on the execution environment, the screensaver may still activate, but this will be considered by design.
- [v5.20](/soft/SRPGEditor/SRPGEditor_v520.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2017/8/17  
  ◆ Fixed a bug where, if a stage was placed at the initial position on the world map, performing "Return" on that stage would move the character to coordinates (0,0) on the world map.
  ◆ If BGM is MIDI, it will now be played using DirectMusic's software synthesizer. With this update, "Midi_DirectMusic" has been added to the environment settings file "System.ini". Setting "Midi_DirectMusic=0" will revert to the conventional playback method. However, the conventional method sent a GM System On instead of a GS Reset, and MIDI data for MSGS (the standard sound source from Windows Vista onwards) would not play correctly if it contained GS standard tones or commands, so it is not recommended. This is also explained within System.ini.
  ◆ Fixed an issue where startup would fail if the sound device was disabled.
  ◆ Attached text file "Supplement to 'Regarding Secondary Distribution'.txt".
- [v5.10](/soft/SRPGEditor/SRPGEditor_v510.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2017/5/17  
  ◆ Fixed a bug where, if terrain was changed 2 or more times with a terrain skill during battle, the character's stats in that battle could become abnormal values.
  ◆ Other, minor fixes.
- [v5.00](/soft/SRPGEditor/SRPGEditor_v500.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2016/7/30  
  ◆ Fixed a bug since version 4.70 where the editor was not displayed in the taskbar.
- [v4.90](/soft/SRPGEditor/SRPGEditor_v490.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2016/5/1  
  ◆ Fixed a bug where random growth was still not functioning correctly in version 4.80. This was a bug where, if new characters were generated using the event actions "Change Scout Den" and "Change Party" in stage map events (not initial events), the distribution of growth values relative to the generation order would become constant.
- [v4.80](/soft/SRPGEditor/SRPGEditor_v480.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2016/4/30  
  ◆ Fixed a bug in versions 4.50-4.70 where random growth was not functioning correctly. For all characters generated before the first battle, the distribution of growth values relative to the generation order was constant. For example, in the sample game "Yashiyu to Nakama 2," no matter how many times you played from "Start New Game," all characters pre-registered in the scout list would grow in the same way. I believe this is a critical bug for games that use random growth. I apologize for the inconvenience.
- [v4.70](/soft/SRPGEditor/SRPGEditor_v470.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2016/1/23  
  ◆ Fixed a bug where, in some environments, windows like "Database" would stretch vertically more than intended, potentially causing buttons like "OK" to be hidden off-screen.
- [v4.60](/soft/SRPGEditor/SRPGEditor_v460.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2015/8/30  
  ◆ Reduced the possibility of game and editor program files (Game_v*.exe and Editor_v*.exe) being falsely detected by some security software scans. Took measures as, in the worst case, files could be deleted automatically.
- [v4.50](/soft/SRPGEditor/SRPGEditor_v450.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2015/7/15  
  ◆ Fixed a bug where trying to execute "Change BGM" and "Message" consecutively within a single event action list would cause a crash in many environments (probably). This might have been a rather critical bug... It's late, but I'd appreciate it if you could update to this version if possible. I apologize for the inconvenience.
  ◆ Fixed a bug where, after deleting data from the "Skills" database, trying to edit the "Enemy Characters" database could cause a crash in some cases.
- [v4.44](/soft/SRPGEditor/SRPGEditor_v444.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2015/3/14  
  ◆ Some sound effect files were in a format that could not be played by some audio playback software on newer OSes like Windows 7, so they were corrected (the sound effect files themselves were modified). However, there should have been no problem playing the pre-correction files with Simulation RPG Editor's game or editor.
- [v4.43](/soft/SRPGEditor/SRPGEditor_v443.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2014/8/23  
  ◆ Fixed a bug where game startup would rarely fail in some environments.
- [v4.42](/soft/SRPGEditor/SRPGEditor_v442.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2013/7/21  
  ◆ In the editor, when selecting data in a list (e.g., in the database), if you right-click to bring up a menu while trying to switch to another data item, the supposedly switched data item would not be reflected in the form, remaining as the pre-switch data. If you then edited the data in that state (without closing the menu), it would overwrite the pre-switch data. This bug has been fixed.
- [v4.32](/soft/SRPGEditor/SRPGEditor_v432.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2013/4/24  
  ◆ Fixed a bug in versions 4.20 and later where illegal memory access could occur during database editing. This could potentially lead to issues such as a blue screen and automatic PC restart in the worst case. Even if you experienced no issues with version 4.20 or later, please update to this version as a precaution.
  ◆ Fixed a bug where the display position of some graphics in the editor (e.g., event graphics) would depend on the OS design settings, causing them to be slightly misaligned from their intended positions in many environments.
- [v4.22](/soft/SRPGEditor/SRPGEditor_v422.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2013/1/19  
  ◆ Slightly widened the width of boxes for all numerical input items (LV, HP, etc.) in the editor. This was because numbers could potentially be hidden depending on the execution environment, such as Windows 8.
- [v4.21](/soft/SRPGEditor/SRPGEditor_v421.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2012/12/23  
  ◆ Fixed a bug where, when "Game Clear" was set to "Start New Game+" for an event (stage) on the world map and playing the second playthrough onwards, stages with "Stage Number" 0 would become uncleared. This means stage 0, which should be cleared from the start and displayed in blue on the stage map by design, would turn red from the second playthrough onwards. Note that if you clear stage 0 while this bug is present, or load a save data with this version's program or later, (all stage 0s) will safely return to blue.
- [v4.20](/soft/SRPGEditor/SRPGEditor_v420.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2012/12/11  
  ◆ Fixed a bug where, on Windows 8, the height of tab-switching windows in the editor (like "Database") would stretch vertically more than intended, making buttons like "OK" difficult to press.
- [v4.10](/soft/SRPGEditor/SRPGEditor_v410.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2012/5/11  
  ◆ Fixed a bug where "Modify Reward if Cleared Once" and "Modify EX if Cleared Once" were not applied to stage number 0 (always cleared), and furthermore, fixed a bug where events set to "Appear Only on First Stage Attempt" in such stages would appear every time you played.
  ◆ Fixed a bug where HP recovery skills with an effect value of 0 or less could sometimes not be used on the map under certain conditions.
- [v4.09](/soft/SRPGEditor/SRPGEditor_v409.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2012/2/6  
  ◆ Fixed a bug where special commands could not be set even if "After Possessor Uses Special Command" was selected for event timing.
- [v4.08](/soft/SRPGEditor/SRPGEditor_v408.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2012/1/30  
  ◆ Fixed a bug where using wave files in formats other than PCM (e.g., ADPCM format) for sound effects could, in the worst case, cause the game to crash. Previous versions did not consider non-PCM formats and would attempt to load them as PCM, potentially accessing illegal memory areas. This has been corrected. It still only plays PCM format. Accordingly, a note has been added to the help stating that only PCM format wave files can be played. Incidentally, the editor can play non-PCM formats, but this is considered by design.
- [v4.07](/soft/SRPGEditor/SRPGEditor_v407.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2012/1/22  
  ◆ Fixed a bug in skill and item position swapping where scrolling the list would cause the display position of the cursor indicating the swap source to be incorrect.
  ◆ Fixed a bug in "Revival" (Fukkatsu) under "View Skills" where the initial cursor position could sometimes be incorrect.
- [v4.06](/soft/SRPGEditor/SRPGEditor_v406.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2011/3/25  
  ◆ Fixed a bug where recovery skills with an "Effect Value" of 0 or less could not be used on the map.
- [v4.05](/soft/SRPGEditor/SRPGEditor_v405.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2010/9/24  
  ◆ In Direct3D mode, fixed a bug where, if the game went into standby or sleep during execution, or if applications were switched using Alt+Tab in full-screen mode and then the game was resumed, the color of characters who had already acted would not change.
  ◆ When attempting to launch the editor twice, you can now choose whether to close the running program and restart.
- [v4.04](/soft/SRPGEditor/SRPGEditor_v404.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2010/9/10  
  ◆ Window maximization is now possible in windowed mode.
  ◆ Updated environment settings file "System.ini". In Direct3D mode, you can now run in a resizable window with "WindowMode=2".
  ◆ In windowed mode, the window position and size are now remembered upon game exit and carried over to the next startup. Incidentally, window position and size information is saved in the file "Window.dat" in the "user_data" folder. You can delete this file when distributing.
- [v4.03](/soft/SRPGEditor/SRPGEditor_v403.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2010/9/3  
  ◆ Direct3D mode becomes slightly lighter in some environments.
- [v4.02](/soft/SRPGEditor/SRPGEditor_v402.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2010/8/31  
  ◆ Fixed an issue where the graphics for the two new characters added in version 4.00 were not drawn in the character image "MapChara.bmp" displayed on the map screen.
- [v4.01](/soft/SRPGEditor/SRPGEditor_v401.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2010/8/16  
  ◆ In the editor, fixed a bug where, after setting movement AI in the enemy palette editor, working in the main window would not function correctly (and could crash in the worst case).
- [v4.00](/soft/SRPGEditor/SRPGEditor_v400.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2010/8/9  
  ◆ Rendering with Direct3D is now possible. Accordingly, a dialog for selecting the rendering mode ("Direct3D" or "DirectDraw") will appear immediately after startup. Details are explained in the environment settings file "System.ini".
  ◆ Significantly updated System.ini. Added "Direct3D" section, etc. When carrying over data from an older version to this version, **be sure to update not only the executable file but also System.ini.**
  ◆ Changed the specifications for "Character.bmp" and "Effect.bmp". However, in DirectDraw mode, older specifications will work as before, and they may also work in Direct3D mode (most modern video environments should work). For details, please see "■Notes on Using Images from v3.19 and Earlier.txt".
  ◆ Updated image "Accessory.bmp" (specifications like size have not changed). Made it so that it doesn't look out of place even if the protagonist is a character other than Yashiyu. The conventional image is in the "Unused" folder within the "bmp" folder, so please revert if there are problems.
  ◆ Fixed a bug where some fonts would flicker in certain environments.
  ◆ DirectDraw mode (same rendering mode as v3.19 and earlier) is now faster.
  ◆ DirectDraw windowed mode now supports 32-bit color depth. Accordingly, windowed mode is now the default setting instead of full-screen.
  ◆ In DirectDraw mode and full-screen, if "Bpp=0 (default value)" in the environment settings file "System.ini", the screen color depth will be 32-bit. Previously it was 8-bit (256 colors).
  ◆ Fixed a bug in some movement AIs where, if there was terrain that consumed more movement power than the moving character's movement power, issues such as not moving towards the movement target via the shortest route could occur. By checking "Apply v3.19 and earlier behavior for movement AI" in system settings, you can also make it behave the same as versions 3.19 and earlier. Incidentally, if you carry over data from an older version to this version, this will be checked.
  ◆ Implemented "Return" (Hikikaesu) in the deployment menu immediately after stage start in system settings. Checking it allows returning from the stage to the world map.
  ◆ Implemented "Can act again after defeating an enemy" in system settings. You can act again if you defeat an enemy on an ally's turn.
  ◆ Implemented "Automatically end turn after all allies have acted" in system settings.
  ◆ Fixed an issue where, after an improper forced termination, etc., trying to restart would be treated as a double launch and fail to start.
  ◆ When launching twice, you can now choose whether to restart the program.
  ◆ Necessary folders will now be created at game or editor startup. This prevents errors even if you accidentally delete the "user_data" folder, etc.
  ◆ Fixed a bug where the editor's client area would be smaller than intended on Windows 7.
  ◆ Fixed a bug in general database settings in the editor where graphics would not update immediately when switching data by clicking.
  ◆ Other, minor fixes.
- [v3.19](/soft/SRPGEditor/SRPGEditor_v319.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2009/9/25  
  Fixed a bug in some numerical input type items where pressing the ↓ key to lower the value would cause the focus (setting item) to move.
  Fixed a bug where changing the world map size would alter map chip placement.
  Fixed a bug where, after changing the world map size, if you exited world map edit without saving the change and then tried to edit the world map again, the size would be changed.
- [v3.09](/soft/SRPGEditor/SRPGEditor_v309.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2009/9/18  
  Fixed a bug in the event action "Shop" where trying to set a large number of items could cause a crash.
- [v2.99](/soft/SRPGEditor/SRPGEditor_v299.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2009/9/10  
  Fixed a bug in some numerical input type setting items where pressing the ↓ key to lower the value would cause the focus (setting item) to move.
  Fixed a bug in the event action "Manipulate Status" where the "-" (minus) sign would not display correctly if the increment/decrement value was a negative number with 2 or more digits.
- [v2.98](/soft/SRPGEditor/SRPGEditor_v298.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2009/5/11  
  Fixed a bug where the game could not be exited with the Esc key on the title screen during test play.
  Fixed a bug in variable value input, etc., where if a number was greater than 16959 and you tried to change it with the increment/decrement buttons, it would be forcibly changed to 16959.
- [v2.97](/soft/SRPGEditor/SRPGEditor_v297.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2009/3/27  
  Fixed a bug in the "Class" database where, if the level cap was set to 1, class initialization would fail when starting a "New Game," causing a crash.
- [v2.87](/soft/SRPGEditor/SRPGEditor_v287.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2009/3/22  
  During test play, if you press the F7 key during battle to clear the stage, everything except some text turns black when returning to the map screen. Therefore, the F7 key during battle has been disabled.
- [v2.86](/soft/SRPGEditor/SRPGEditor_v286.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2009/2/19  
  Fixed a bug where, after reducing the number of "Enemy Characters" in the database, playing a stage where a non-existent enemy was placed would cause a crash (incidentally, if the stage was saved after reducing the number of "Enemy Characters," it would not crash).
  Fixed a bug where, after reducing the number of "Classes" in the database, if you selected a character of a non-existent class in the "Ally Characters" or "Enemy Characters" database and pressed "OK" or "Apply" (saving the database), it would crash.
- [v2.76](/soft/SRPGEditor/SRPGEditor_v276.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2009/2/18  
  Fixed a bug where, if there was only one item category, displaying character status would cause a crash.
- [v2.66](/soft/SRPGEditor/SRPGEditor_v266.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2008/11/17  
  Fixed a bug where HP and SP would exceed the upper limit of 999 in the stat increase process due to difficulty.
- [v2.65](/soft/SRPGEditor/SRPGEditor_v265.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2008/11/10  
  Fixed a bug in the event actions "Change Scout Den" and "Change Party" where ally characters with ID 64 or higher could not be added.
  Changed the default "FrameRate" in System.ini from "60" to "30". (Because "60" could cause slow performance on Vista).
- [v2.64](/soft/SRPGEditor/SRPGEditor_v264.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2008/7/2  
  Fixed a bug where, in some environments, minimizing the editor would make it unrestorable.
- [v2.54](/soft/SRPGEditor/SRPGEditor_v254.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2008/3/23  
  In "Simulation RPG Editor," damage reduction type skills can now be stacked.
  For example, if you use a skill that reduces damage by 5 once as a quick action and once as a non-quick action (total 2 times), you can reduce damage by 10 until the next turn.
- [v2.53](/soft/SRPGEditor/SRPGEditor_v253.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2008/2/18  
  Test play operation becomes lighter and more stable.
- [v2.43](/soft/SRPGEditor/SRPGEditor_v243.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2008/1/11  
  MIDI playback becomes more stable.
- [v2.33](/soft/SRPGEditor/SRPGEditor_v233.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2008/1/4  
  Fixed a bug where, when using a non-elemental weapon attack skill, if no weapon was equipped, it could cause a crash.
  Fixed a bug where, after test play ended, the editor sometimes could not be restored from a minimized state (taskbar).

  In combat AI, fixed a bug where, if there were n actions with equal priority level that met all conditions, the priority value of the 2nd to (n-1)th actions would become 1 (internally), and the difference would be added to the foremost action (the one at the top of the combat AI list).

  Since this bug is a bit hard to understand, I'll give an example.
  Let's say there are 4 actions set with priority level 1 and priority value 10.

|Action|Priority Level|(Priority Value set in Editor)|Actual Priority Value|
|---|---|---|---|
|Attack|1|10|**28** *10+(10-1)+(10-1)=28|
|Skill - Skill A|1|10|**1**|
|Skill - Skill B|1|10|**1**|
|Skill - Skill C|1|10|**10**|

  The rightmost column of the table is the actual (in-game) priority value.
  The priority value of the first action is unfairly increased, and as a result, "Attack" (Kougeki), which should originally be executed once every 4 times, is actually executed slightly less than 3 times out of 4.

  Note that if there are 2 or fewer actions with equal priority level, they are not affected by this bug.
  Also, quick and non-quick actions are treated separately, so for example, as shown in the table below, even if there are 2 quick actions and 2 non-quick actions (total 4) with equal priority level set, they are not affected by the bug.

|Action|Priority Level|(Priority Value set in Editor)|Actual Priority Value|
|---|---|---|---|
|Attack|1|10|**10  <br>**|
|Skill - Skill A|1|10|**10  <br>**|
|**Quick** - Skill B|1|10|**10  <br>**|
|**Quick** - Skill C|1|10|**10**|

  That's all for the bug explanation.

  When loading and playing data from versions prior to this, depending on the settings, I think you may need to significantly readjust the game balance.
  Despite it being over half a year since the full version was released, I apologize for the great inconvenience caused by this bug.
- [v2.23](/soft/SRPGEditor/SRPGEditor_v223.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2007/12/29  
  Fixed a bug in test play where automatic retrieval of the game program path would fail (a bug where "Game program cannot be called!" is displayed when trying to test play).
- [v2.13](/soft/SRPGEditor/SRPGEditor_v213.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2007/12/1  
  Slightly changed the content of the report file "Report_Game.txt" (or "Report_Editor.txt" when the editor starts).
  Slightly revised other documents.
- [v2.12](/soft/SRPGEditor/SRPGEditor_v212.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2007/8/16  
  Setting the movement cost in the "Terrain" database to 0 increases the likelihood of abnormal enemy movement, crashes, etc., so the lower limit for movement cost has been set to 1. (When loading data from previous versions, terrain with a movement cost of 0 will be automatically corrected to 1).
- [v2.02](/soft/SRPGEditor/SRPGEditor_v202.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2007/7/15  
  Fixed a bug in position group editing where position data was not cleared even when the "Clear" button was pressed.
- [v2.01](/soft/SRPGEditor/SRPGEditor_v201.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2007/5/28  
  Fixed a bug in some environments where, if the screen changed during MIDI loop processing (immediately after a song ended), issues like freezing would occur.
  Slightly reduced the load on the PC during test play.
  Fixed a bug where, if the map cursor was moved before stage start, the initial cursor position in the subsequent ally deployment menu would be incorrect.
- [v1.91](/soft/SRPGEditor/SRPGEditor_v191.zip "Download Game Creation Software 'Simulation RPG Editor' (Free)") 2007/5/25  
  Became the full version.
  Updated help. (Stated that the size of "MapChara.bmp" can be changed in "Using Original Materials").

● Download Even Older Versions
Publication of Simulation RPG Editor versions prior to Beta has ended.
This includes versions that were released on the [Omoshiro Game Blog](http://antongame.blog16.fc2.com/).

[To Top of Page](#START)

<a name="GAME_DL"></a>

## Game Collection

All are freeware (free).
Only full versions and recommended games that can be played to the end are introduced here.

※Since 2009/7/21, registration applications by the author themselves are no longer possible.
※If your gamepad (game controller) doesn't work, you may be able to resolve it with the method [here](/menu_support/gamepad_preferred_device/).

<Game Collection 1>

Registered: 2019/3/12
- [Yashiyu Monsters -LEGEND SIDE-](https://www.freem.ne.jp/win/game/18912) Author: METEOSTORMMAN-sama
- [Yashiyu Monsters -HERO SIDE-](https://www.freem.ne.jp/win/game/18913) Author: METEOSTORMMAN-sama
- [Yashiyu Monsters -CHAOTIC SIDE-](https://www.freem.ne.jp/win/game/18914) Author: METEOSTORMMAN-sama
- [Yashiyu Great War](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=100&trview=16) Author: Aturu LV68-sama
- [Great Fierce Battle Tights Fighters](https://www.freem.ne.jp/win/game/19157) Author: Lithium Games-sama
- [Island Where Monsters Dwell -Attic Rose-](http://www.freem.ne.jp/win/game/13598) Author: METEOSTORMMAN-sama
- [Island Where Monsters Dwell -Vert de Gris-](http://www.freem.ne.jp/win/game/13599) Author: METEOSTORMMAN-sama
- [Opa Tribe Battle!](https://www.freem.ne.jp/win/game/15591) Author: Yapayapa-sama
- [Yukiyu's Haunted Mansion War](http://www.freem.ne.jp/win/game/13882) Author: Yapayapa-sama

Registered: 2016/12/31
- [Blue Pamphlet-kun and Friends+](http://www.freem.ne.jp/win/game/12748) Author: [Hayayu-sama](http://wikiwiki.jp/hayayu39/)

Registered: 2016/6/12
- [Phantom of the Fallen Kingdom](http://www.freem.ne.jp/win/game/10397) Author: [Kogeya-sama](http://sabinekonokoge.blog.fc2.com/)
- [ZAM Battle Field Yashiyu All-Stars](http://www.freem.ne.jp/win/game/11961) Author: [METEOSTORMMAN-sama](http://www.freem.ne.jp/brand/857)

Registered: 2015/7/19
- [Legend of the Savior Yashiyu](http://www.freem.ne.jp/win/game/8887) Author: [Hashi-sama](http://www.freem.ne.jp/brand/5074)
- [POKEMON SRPG](http://www10.atwiki.jp/pokemonsrpg/) Author: [Zenmai Sensei-sama](http://www10.atwiki.jp/pokemonsrpg/)
- [Touhou VS Nekoba](http://eroimon.nomaki.jp/nekovstoho/) Author: [Reimon Z-sama](http://eroimon.nomaki.jp/)
- [first advanture](http://dragonyamiyona.yumenogotoshi.com/simpleVC_20090325150216.html) Author: [Dragon Hacker-sama](http://dragonyamiyona.yumenogotoshi.com/)
- [the Bee Knights](http://www.freem.ne.jp/game/win/g01777.html) Author: [Itansha-sama (Heretic-sama)](http://www.amigo2.ne.jp/~t-rex/)

<Game Collection 2>

|Game Name|Creator|DL|
|---|---|---|
|Brian's Adventure SRPG|[Otokamu (formerly Rekkamaru)-sama](http://www.me.ccnw.ne.jp/akira/rekka/rekkamaru.html)|[Download](http://www.me.ccnw.ne.jp/akira/rekka/games/briansrpg.html)|
|Creator's Comment|Characters from Otokamu's page make an appearance! <br>I tried to make it like a very typical SRPG.|   |
|Game Name|Creator|DL|
|Deshishi's Ambition SRPG|[Baka King-sama](http://foolishkingdom.web.fc2.com/)|[Download](http://foolishkingdom.web.fc2.com/game_srpg.html)|
|Creator's Comment|This is a remake of the Action Editor work "Deshishi's Ambition". <br>Various things have changed compared to the action version.|   |
|Game Name|Creator|DL|
|S Simulation|777-sama|[Download](/menu_game/SRPGEditor/g02.zip)|
|Creator's Comment|The S is for "Short". <br>As the name implies, it's a very concise creation, and the original data has hardly been changed.|   |
|Game Name|Creator|DL|
|Tanpo's Journey: Further Demon Chapter|Chiko-sama|~~[Download](/menu_game/SRPGEditor/g01.zip)~~|
|Creator's Comment|This is the first game of 2007 and a sequel to the previous work. I think complete clearing is difficult. <br>※Publication suspended due to certain circumstances. Chiko-sama, please email me ^^; by Admin|   |

● Registration Conditions (Updated 2007/5/19)
Only works that meet all the following conditions can be registered.

  - Creation time is 30 hours or more.
  As an exception, if you want to register a **difficulty-changed version or system-changed version of an already registered game, it cannot be registered unless it has been created with 15 hours or more of work from the state of the registered game.**
  For example, if you want to register an easy version, a change like "just raised ally EX correction (growth speed) and test-played once" (if this is less than 15 hours of change) cannot be newly registered as an easy version.
  In this case, you can include the easy version in the already registered game (e.g., by putting the normal and easy versions in one folder) and send it by email. (This means it will be an update to an already registered game, not a new registration).

  - Carefully made.
  In particular, perform repeated test plays.

  - Playable from beginning to end.
  Trial versions cannot be registered.

  - The creator themselves can clear the game.
  If the difficulty is such that the creator cannot clear it, most players will give up midway.

  - Strictly adheres to the terms written in "二次配布について.chm" (Regarding Secondary Distribution.chm) included with Simulation RPG Editor.
  Thank you for your cooperation.

● How to Register
Please provide the following information via [email](mailto:anton@omoshiro-game.github.io?Subject=%E3%82%A2%E3%82%AF%E3%82%A8%E3%83%87%E3%82%A3%E3%82%B2%E3%83%BC%E3%83%A0%E3%81%AE%E7%99%BB%E9%8C%B2).

  - URL of the game's distribution page (Required)
  - Game name (Required)
  - Creator's handle name (Required)
  - URL of the distribution site's top page
  - Creator's comment

  Regarding the distribution page URL, it can be a distribution page set up on your own site, or a distribution page on a download site like [Vector](http://www.vector.co.jp/) or [Freem!](http://www.freem.ne.jp/). (With the latter, you can register your game without having to set up your own site).
  Note that author registration and game registration are possible on Vector [here](http://www.vector.co.jp/info/for_auth/) and Freem! [here](http://www.freem.ne.jp/contents/info/creator/main.html).

[To Top of Page](#START)

<a name="MATERIAL_DL"></a>

## Material Collection

This is a collection of materials that can be used with Simulation RPG Editor.
They can be incorporated into games created with Simulation RPG Editor and distributed.

※Since 2009/7/21, registration applications by the author themselves are no longer possible.

● Explanation of Usage Scope
  "Modification" ... Whether materials can be modified and still incorporated into and distributed with games made by Simulation RPG Editor.
  "Use Outside SimuEdi" ... Whether it can be used as material for things other than Simulation RPG Editor (like regular free materials). **※Even if marked "○", distributing the material itself without the creator's permission is not allowed.**

  Also, **if documents are attached to the material, please follow them.
  If there is an explanation on the creator's distribution page, please follow it.**

|   |   |   |   |   |   |
|---|---|---|---|---|---|
Simulation RPG Editor Material Collection
|Material Name|Type|Creator|Modification|Use Outside SimuEdi|DL|
|Venus's Character Collection|Character Images|Venus-sama|○|○|[Download](/menu_game/SRPGEditor/m02.zip)|
|Creator's Comment|I drew these for SRPG Editor, but feel free to use them for anything.|   |   |   |   |
|Material Name|Type|Creator|Modification|Use Outside SimuEdi|DL|
|Hashibuto Garasu's <br>Weird Effect Collection|Effect Images|[Hashibuto Garasu-sama](http://bloodhouse.hp.infoseek.co.jp/table.htm)|○|○|[Download](/menu_game/SRPGEditor/m01.zip)|
|Creator's Comment|I immediately drew a lot of magic effects. <br>(It says use outside SimuEdi is ○, but I don't think there are many situations where you can use them well)|   |   |   |   |

[To Top of Page](#START)