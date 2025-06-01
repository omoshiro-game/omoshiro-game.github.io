---
title: Action Editor+
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Game tools
    url: /menu_gametool/
  - name: Action Editor+
    url: /menu_game/ActionEditorPlus/
---

<a name="START"></a>
## Action Game Creation Software - Action Editor+

Here, you can download the action game creation software "Action Editor+".  
You can also download games made with Action Editor+ and materials for Action Editor+.  

[To Action Editor+ Downloads](#AEPLUS_DL)

[To Game Collection](#GAME_DL)

[To Material Collection](#MATERIAL_DL)

[To AkuEdi Tournament Champion Works Collection](#CHAMPION_DL)

<a name="AEPLUS_DL"></a>

## Action Editor+ Downloads

**Games created with Action Editor+ can be distributed on your own website, etc.**
For details, please see the included "二次配布について.chm" (Regarding Secondary Distribution.chm).  

|Action Editor+ [Download Latest Version (zip)](/soft/ActionEditorPlus/ActionEditorPlus.zip "Download Game Creation Software 'Action Editor+' (Free)")|   |
|---|---|
|Version|4.52|
|Genre|Action Game Creation Software|
|Number of Players|1 person|
|Software Type|Freeware (Free)|
|Operation Confirmed|Windows 7, Vista, XP, 2000, ME, 98|
|Last Release Date|2018/4/14|
|Comment|Significantly improved upon Action Editor. <br>Added features include vertical scrolling, factions, item summoning, gravity changes, inertia, and various others. <br>It is also possible to load data from the previous version.|

[To Top of Page](#START)

● Update History and Downloads for Each Version
- [v4.52](/soft/ActionEditorPlus/ActionEditorPlus_v452.zip "Download Game Creation Software 'Action Editor+' (Free)") 2018/4/14  
  ◆ CustomKeySettings.exe now supports English layout keyboards.  
- [v4.51](/soft/ActionEditorPlus/ActionEditorPlus_v451.zip "Download Game Creation Software 'Action Editor+' (Free)") 2017/9/24  
  ◆ Fixed an issue where the display's automatic OFF setting and screensaver would activate when operating in windowed mode solely with a gamepad. Depending on the execution environment, the screensaver may still activate, but this will be considered by design.  
- [v4.50](/soft/ActionEditorPlus/ActionEditorPlus_v450.zip "Download Game Creation Software 'Action Editor+' (Free)") 2017/8/17  
  ◆ MIDI will now be played using DirectMusic's software synthesizer. With this update, "Midi_DirectMusic" has been added to the environment settings file "System.ini". Setting "Midi_DirectMusic=0" will revert to the conventional playback method. However, the conventional method sent a GM System On instead of a GS Reset, and MIDI data for MSGS (the standard sound source from Windows Vista onwards) would not play correctly if it contained GS standard tones or commands, so it is not recommended. This is also explained within System.ini.  
  ◆ Fixed an issue where startup would fail if the sound device was disabled.  
- [v4.43](/soft/ActionEditorPlus/ActionEditorPlus_v443.zip "Download Game Creation Software 'Action Editor+' (Free)") 2016/9/25  
  ◆ Fixed a bug where the window size in windowed mode was 2 pixels larger vertically and horizontally than the drawing area, causing rendering artifacts to accumulate there.  
- [v4.33](/soft/ActionEditorPlus/ActionEditorPlus_v433.zip "Download Game Creation Software 'Action Editor+' (Free)") 2015/3/14  
  ◆ Some sound effect files were in a format that could not be played by some audio playback software on newer OSes like Windows 7, so they were corrected (the sound effect files themselves were modified). However, there should have been no problem playing the pre-correction files with Action Editor+.  
- [v4.32](/soft/ActionEditorPlus/ActionEditorPlus_v432.zip "Download Game Creation Software 'Action Editor+' (Free)") 2014/8/24  
  ◆ Fixed a bug causing illegal memory access at game startup, likely since version 4.00. This could potentially lead to issues such as forced game termination.  
- [v4.22](/soft/ActionEditorPlus/ActionEditorPlus_v422.zip "Download Game Creation Software 'Action Editor+' (Free)") 2013/3/13  
  ◆ On the stage select screen, fixed a bug where, after scrolling the window to select stage (world) 11 or higher, clearing that stage, and returning to the stage select screen, the window's scroll position would reset to the initial position, causing the cursor to disappear from the screen.  
- [v4.21](/soft/ActionEditorPlus/ActionEditorPlus_v421.zip "Download Game Creation Software 'Action Editor+' (Free)") 2013/2/17  
  ◆ In Direct3D mode, fixed a bug where the message frame display would become corrupted when a message did not fit on the screen.  
- [v4.11](/soft/ActionEditorPlus/ActionEditorPlus_v411.zip "Download Game Creation Software 'Action Editor+' (Free)") 2010/12/1  
  ◆ In some Windows Vista/7 environments, fixed a bug where, when running in full-screen mode other than 8-bit (256 colors), the dialog for selecting files (e.g., when loading stage files) would not display completely, hiding buttons like "OK".  
- [v4.01](/soft/ActionEditorPlus/ActionEditorPlus_v401.zip "Download Game Creation Software 'Action Editor+' (Free)") 2010/11/29  
  ◆ Fixed a bug that caused a crash if multiple files were selected in the file selection dialog (e.g., when loading stage files).  
- [v4.00](/soft/ActionEditorPlus/ActionEditorPlus_v400.zip "Download Game Creation Software 'Action Editor+' (Free)") 2010/8/20  
  ◆ Added support for 16-bit and 32-bit screen color depths, and also for windowed mode. However, invincibility color animation (palette animation) will be disabled in modes other than 8-bit full-screen.  
  ◆ Fixed a bug where some fonts would flicker in certain environments.  
  ◆ Rendering with Direct3D is now possible. Details are explained in the environment settings file "System.ini".  
  ◆ Added "Timing_OldType" setting to the environment settings file "System.ini", allowing reversion to pre-v2.53 behavior for Shot, Character Summon, and Item Summon. In v2.53, a bug related to timing of 4 or less for these commands (especially abnormal timing for the first execution) was fixed, but this setting allows deliberately reverting to the pre-fix behavior. For some games (created before v2.53), this might fix critical bugs.  
  ◆ Significantly updated the environment settings file "System.ini". Added "Direct3D" section, etc. When carrying over data from an older version to this version, be sure to update not only the executable file but also System.ini.  
  ◆ DirectDraw mode (same rendering mode as v3.08 and earlier) is now faster.  
  ◆ Updated image "Palette.bmp". If the screen color depth is 16-bit or 32-bit, color information cannot be obtained correctly without the new standard "Palette.bmp", leading to color corruption in some renderings.  
  ◆ Attached text files "■Notes on Carrying Over Data from v3.08 and Earlier.txt" and "Help File Supplement.txt".  
  ◆ Other, minor fixes.  
- [v3.08](/soft/ActionEditorPlus/ActionEditorPlus_v308.zip "Download Game Creation Software 'Action Editor+' (Free)") 2010/2/17  
  Fixed a bug where the invincibility image would not display during the death effect for characters that were invincible and turned into blocks.  
- [v3.07](/soft/ActionEditorPlus/ActionEditorPlus_v307.zip "Download Game Creation Software 'Action Editor+' (Free)") 2010/2/12  
  Fixed a bug where stages could not be played using "Play" in the editor.  
- [v2.97](/soft/ActionEditorPlus/ActionEditorPlus_v297.zip "Download Game Creation Software 'Action Editor+' (Free)") 2010/2/10  
  Fixed a bug that caused crashes or freezes when trying to load stage or replay files from a drive different from the one where Action Editor+ itself is located. An error message will now appear instead.  
- [v2.96](/soft/ActionEditorPlus/ActionEditorPlus_v296.zip "Download Game Creation Software 'Action Editor+' (Free)") 2009/11/27  
  Slightly improved a bug where the file selection dialog display in edit mode or replay mode would be corrupted on Windows Vista and later OSes. While it may still not display 100% correctly, the issue of the file list suddenly disappearing has been resolved.  
  Added "VSync=2" setting to "System.ini" and made it the default (recommended) setting. "VSync" determines whether vertical sync is enabled for screen updates. When "VSync=2", vertical sync is disabled on Vista and later OSes, and enabled on XP and earlier OSes.  
- [v2.86](/soft/ActionEditorPlus/ActionEditorPlus_v286.zip "Download Game Creation Software 'Action Editor+' (Free)") 2009/11/6  
  Fixed a bug that caused a crash when extending the stage width under certain conditions.  
- [v2.76](/soft/ActionEditorPlus/ActionEditorPlus_v276.zip "Download Game Creation Software 'Action Editor+' (Free)") 2009/7/26  
  Parameters of data placed on the stage in the editor can now be edited by right-double-clicking.  
  Added a supplement to the help in the "How to Play" section of "Readme.txt".  
- [v2.66](/soft/ActionEditorPlus/ActionEditorPlus_v266.zip "Download Game Creation Software 'Action Editor+' (Free)") 2009/1/6  
  Fixed a bug in Item Summon where setting formation to "Spread" (Kaku-san) and summon count to "2" or more would cause a crash.  
- [v2.65](/soft/ActionEditorPlus/ActionEditorPlus_v265.zip "Download Game Creation Software 'Action Editor+' (Free)") 2008/12/14  
  Fixed a bug in Warp Action where it would fail if the warp destination was outside the stage.  
- [v2.64](/soft/ActionEditorPlus/ActionEditorPlus_v264.zip "Download Game Creation Software 'Action Editor+' (Free)") 2008/10/4  
  Fixed a bug in Shot, Character Summon, and Item Summon where action execution would be delayed more than intended when "Usage Interval" (Shiyoukankaku) - "Timing" was 4 or less.  
- [v2.54](/soft/ActionEditorPlus/ActionEditorPlus_v254.zip "Download Game Creation Software 'Action Editor+' (Free)") 2008/9/15  
  Fixed a bug where, when shot speed was set to 16 or more and range to 2 or less, the actual shot range or display could become abnormal (e.g., shot graphic not displaying).  
- [v2.53](/soft/ActionEditorPlus/ActionEditorPlus_v253.zip "Download Game Creation Software 'Action Editor+' (Free)") 2008/2/18  
  Detailed explanation in the help file regarding unfixable bugs related to time conditions.  
  Excerpt from the help file below.  

=== Start =============================================  
**● Timing**  
**● Usage Interval (Shiyoukankaku)**  
**● Usage Duration (Shiyoujikan)**  
**These three items are time conditions for action activation.**  
Each is set in **1/10th of a second units**.  

"Timing" affects the action's start time.  
"Usage Interval" is the interval between action uses.  
"Usage Duration" is the continuous usage time of an action.  

For example,
"Timing" to "0"
"Usage Interval" to "5"
"Usage Duration" to "2"
then, the times at which the action activates are as shown in the table below.   
(The table is created assuming an enemy appears immediately after the start, and all conditions such as "Territory" (Nawabari) are met)

**<Shot, Character Summon, Item Summon>**

|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Actual Time (1/10 sec)|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|~|
|Action Timer (1/10 sec)|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|~|
|Action Activation (○ if active)|-|—|—|—|—|○|○|—|—|—|—|—|○|○|—|—|—|—|—|○|○|-|~|

**<Other than Shot, Character Summon, Item Summon>**

|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Actual Time (1/10 sec)|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|~|
|Action Timer (1/10 sec)|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|~|
|Action Activation (○ if active)|-|—|—|—|—|○|○|—|—|—|○|○|—|—|—|○|○|—|—|—|○|○|~|

The "Action Timer" is like a stopwatch prepared for each action, and the timer operates when all flag conditions, group conditions, and territory conditions are met.  
This timer, "Usage Interval," and "Usage Duration" are compared to determine whether to activate the action.  

**Please note that the behavior differs between Shot, Character Summon, Item Summon and other actions.  
For Shot, Character Summon, Item Summon, Wait Time (excluding the first time) = "Usage Interval", whereas for actions other than Shot, Character Summon, Item Summon, Wait Time = "Usage Interval" - "Usage Duration".  
**This is a bug. Originally, it was supposed to be unified with Wait Time = "Usage Interval" - "Usage Duration", but due to the late discovery of the bug and to maintain compatibility with older versions, a decision was made to leave this difference in behavior...  

Also, **for Shot, Character Summon, Item Summon, when "Usage Interval" is set to "6" or more, "Usage Interval" is processed internally as -1 (activates 1/10th of a second earlier).**
Since "5" or less operates normally, this results in the strange phenomenon where the interval for "5" and "6" becomes exactly the same...  
This is also a bug, but it has not been fixed, again, for compatibility reasons.  
== End =============================================

Also, in this version, the behavior when "Usage Interval" is "0" to "4" has been improved.  
Please compare with the two images below.  
In this stage, 6 enemies are prepared, and "Usage Interval" is set from "0" to "6" from top to bottom, with "Usage Duration" fixed at "1".  
Each was taken 2.5 seconds after the stage started.  

↓Version 2.43
![](/menu_game/ActionEditorPlus/SS01.png)

↓Version 2.53
![](/menu_game/ActionEditorPlus/SS02.png)

"4" is way too crazy (sweat)
- [v2.43](/soft/ActionEditorPlus/ActionEditorPlus_v243.zip "Download Game Creation Software 'Action Editor+' (Free)") 2008/1/23  
  In Action Editor+, fixed a bug where the cursor position could be incorrect (not pointing to the previously selected game mode) when returning to the title screen or submenu screen from normal mode, replay mode, etc.  
- [v2.42](/soft/ActionEditorPlus/ActionEditorPlus_v242.zip "Download Game Creation Software 'Action Editor+' (Free)") 2007/12/4  
  In the editor, fixed a bug where the coordinate information in the upper right of the screen would go off-screen and become invisible if the placement coordinates were 100 or more both horizontally and vertically.  
- [v2.41](/soft/ActionEditorPlus/ActionEditorPlus_v241.zip "Download Game Creation Software 'Action Editor+' (Free)") 2007/12/1  
  Output PC specs and error information to the report file "Report.txt". (File to submit when reporting issues such as inability to start or forced termination).  
  Slightly revised other documents.  
- [v2.40](/soft/ActionEditorPlus/ActionEditorPlus_v240.zip "Download Game Creation Software 'Action Editor+' (Free)") 2007/11/25  
  Fixed a bug where, when scrolling is fixed, going to the right or bottom edge of the screen could cause the player to become stuck. (Bug occurring only in v2.10-v2.30).  
- [v2.30](/soft/ActionEditorPlus/ActionEditorPlus_v230.zip "Download Game Creation Software 'Action Editor+' (Free)") 2007/8/30  
  Fixed a bug where, when scrolling is fixed and the protagonist is flying, going to the top or left edge of the screen could cause the player to become stuck. (Bug occurring only in v2.10, v2.20).  
- [v2.20](/soft/ActionEditorPlus/ActionEditorPlus_v220.zip "Download Game Creation Software 'Action Editor+' (Free)") 2007/8/29  
  Fixed a bug where, if the protagonist is not flying, going off-screen downwards would always result in falling to death (even if an invisible area downwards was created in the scroll range settings). (Bug occurring only in v2.10).  
- [v2.10](/soft/ActionEditorPlus/ActionEditorPlus_v210.zip "Download Game Creation Software 'Action Editor+' (Free)") 2007/8/29  
  Fixed a bug where, when the stage clear text (CLEAR!) was displayed, bringing up the menu window with the space key and closing it with the cancel key would incorrectly add to the score.  
  Fixed a bug where, after acquiring a warp item and warping leftwards or upwards, items placed between the warp origin and destination could be acquired.  
  Fixed a bug where, if an enemy holding a score-increasing item died by simultaneously hitting multiple enemies of a different faction, the score would be incorrectly added. (This bug was particularly likely to occur if enemies were enlarged).  
  Fixed a bug where there were cases of not dying even when squeezed between a block-ified enemy and the stage edge.  
- [v2.00](/soft/ActionEditorPlus/ActionEditorPlus_v200.zip "Download Game Creation Software 'Action Editor+' (Free)") 2007/8/8  
  Fixed a bug where, when character movement speed is high (speed 15 or more?), hitting an enemy block could result in improper collision detection and death by being squeezed in the block.  
  Fixed a bug where, if a character is on an enemy block at the start of a stage, they would be unable to jump for a while.  
- [v1.99](/soft/ActionEditorPlus/ActionEditorPlus_v199.zip "Download Game Creation Software 'Action Editor+' (Free)") 2007/8/6  
  Fixed a bug where copying enemy data placed facing right and pasting it into the palette would also display it facing right in the palette (but it would actually be placed facing left).  
- [v1.98](/soft/ActionEditorPlus/ActionEditorPlus_v198.zip "Download Game Creation Software 'Action Editor+' (Free)") 2007/7/31  
  Fixed a bug that caused a crash when trying to display an empty message with "Pause" checked.  
- [v1.97](/soft/ActionEditorPlus/ActionEditorPlus_v197.zip "Download Game Creation Software 'Action Editor+' (Free)") 2007/6/30  
  Became the full version (version number not raised).  
  In the default palette, Demon King Aku's action (page 2) "Impact" (Shougeki) was "14", so this was changed to "10". (In Action Editor+, the limit for impact is 10).  

● Download Even Older Versions
Publication of Action Editor+ versions prior to Beta has ended.  
This includes versions that were released on the [Omoshiro Game Blog](http://antongame.blog16.fc2.com/).  

[To Top of Page](#START)

<a name="GAME_DL"></a>

## Game Collection

Currently, all are freeware (free).  

※Since 2009/7/21, registration applications by the author themselves are no longer possible.  

Only full versions, or equivalent games playable to the end, are introduced here.  
There are other recommended games besides these, such as trial versions posted on the [New Action Editor BBS](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi).  

If you experience any issues or slow performance during play, downloading the [latest version of Action Editor+](#AEPLUS_DL) and replacing only the program file "ActionEditorPlus_v***.exe" (*** is the version) and the environment settings file "System.ini" is likely to improve the situation.  
※However, for most games, running with the latest program version is likely not recommended. As new bugs may appear, consider updating the program to the latest version as a last resort. Also, back up your old version data before playing with the latest version.  

※If your gamepad (game controller) doesn't work, you may be able to resolve it with the method [here](/menu_support/gamepad_preferred_device/).  

<Game Collection 1>

Registered: 2019/3/12

- [Yashiyu All-Stars: Great Fierce Battle Stadium - Rampaging Prayer - Ultra Next Climax](https://www.freem.ne.jp/win/game/17864) Author: METEOSTORMMAN-sama
Registered: 2015/7/19

- [VampunishX](http://www.freem.ne.jp/win/game/9092) Author: [BalalBarrel-sama](https://twitter.com/BalalBarrel)
- [My Boss Rush (Boku no Boss Rush)](http://www.freem.ne.jp/win/game/8956) Author: [26ak06-sama](http://newak06.net/)

Registered: Before 2015/7/19

- [Vampunish](http://www.freem.ne.jp/win/game/5142) Author: [BalalBarrel-sama](https://twitter.com/BalalBarrel)
- [Valkyria Odyssey](http://whitewood.sakura.ne.jp/manyakue/vo.html) Author: [Shiraki Masahiro-sama](http://whitewood.sakura.ne.jp/manyakue/game.html)
- [Light Witch](http://www.freem.ne.jp/win/game/2446) Author: [WATER*WORLD-sama](http://world.so.land.to/)
- [Mario in Action Editor (AkuEdi de Mario)](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=34&trview=66) Author: Yuuya-sama
- [Tower of Labyrinthos](http://hiyokko.sakura.ne.jp/fupbbs/bbs.cgi?mes=v_res&page=1&filenum=34&trview=68) Author: [Touya wintry shade-sama](http://bloodhouse.hp.infoseek.co.jp/)
- [Natsumi's Adventure Neo](http://dragonyamiyona.yumenogotoshi.com/simpleVC_20100425153033.html) Author: [Dragon Hacker-sama](http://dragonyamiyona.yumenogotoshi.com/)
- [Magic Game Gaiden ~Ruin's Abyss: Azure Magic Gun of Twilight~](http://www.freem.ne.jp/game/win/g02471.html) Author: [Touya wintry shade-sama](http://bloodhouse.hp.infoseek.co.jp/)
- [Princess Odyssey](http://whitewood.sakura.ne.jp/manyakue/po.html) Author: [Shiraki Masahiro-sama](http://whitewood.sakura.ne.jp/manyakue/game.html)
- [Kyousou Kidan Bolt Armors](http://whitewood.sakura.ne.jp/manyakue/ba.html) Author: [Shiraki Masahiro-sama](http://whitewood.sakura.ne.jp/manyakue/game.html)
- [Metallic Core ~Justice of Sincerity~](http://www48.tok2.com/home/dugongvalley/game_mcjos_s.html) Author: [Tonya-sama](http://www48.tok2.com/home/dugongvalley/home.html)
- [Ruin's Abyss](http://bloodhouse.hp.infoseek.co.jp/table.htm) (DL from "game" menu) Author: [Touya wintry shade-sama](http://bloodhouse.hp.infoseek.co.jp/)
- [Kouhou Aishuushin](http://hirotti16.hp.infoseek.co.jp/couhou/) Author: [Hirocchi-sama](http://hirotti16.hp.infoseek.co.jp/)
- [Metallic Core Midnight Metatron](http://dragonyamiyona.yumenogotoshi.com/simpleVC_20090722120258.html) Author: [Dragon Hacker-sama](http://dragonyamiyona.yumenogotoshi.com/)
- [Natsumi's Adventure +](http://dragonyamiyona.yumenogotoshi.com/simpleVC_20090325145327.html) Author: [Dragon Hacker-sama](http://dragonyamiyona.yumenogotoshi.com/)
- [Baron Hayabusa](http://www.freem.ne.jp/game/win/g02293.html) Author: [Touya wintry shade-sama](http://bloodhouse.hp.infoseek.co.jp/)
- [To Makuroja-sama's Game Collection](http://www.freem.ne.jp/game/cre/c1089.html) Author: [Makuroja-sama](http://bjdiary.blog65.fc2.com/)

<Game Collection 2>

|Game Name|Creator|DL|
|---|---|---|
|METALLIC CORE 2|[Otokamu-sama](http://www.me.ccnw.ne.jp/akira/rekka/rekkamaru.html)|[Download](http://www.me.ccnw.ne.jp/akira/rekka/games/Metallic_core_2.html)|
|Creator's Comment|Shoot! Destroy! Kill! Punch! Stomp!!! ...As long as your energy lasts. <br>Like the previous game, it's a robot action game where you fight hordes of approaching grunts while crying over poor fuel efficiency.|   |
|Game Name|Creator|DL|
|Demon King VS Demon King (Maou VS Maou)|Shinmetsuryu-sama|[Download](http://www9.uploader.jp/home/0ttq23kl/)|
|Creator's Comment|A game where Aku opposes what the Demon King is trying to do and trains to defeat him. <br>I'm confident in the bosses.|   |
|Game Name|Creator|DL|
|Yashiyu's Living Hell Action|[Zen (ZOO)-sama](http://www48.tok2.com/home/dugongvalley/)|[Download](http://www48.tok2.com/home/dugongvalley/game_iki.html)|
|Creator's Comment|Fans of brutal games, gather 'round! <br>In this game, a punching bag has become an essential item.|   |
|Game Name|Creator|DL|
|Ariyu in Wonderland|[Zen (ZOO)-sama](http://www48.tok2.com/home/dugongvalley/)|[Download](http://www48.tok2.com/home/dugongvalley/game_AAW.html)|
|Creator's Comment|An action-focused game where a gag character named Ariyu (mystery) adventures through a strange world. It's a crazy 16-stage game, but please give it a try. An Easy version is also available.|   |
|Game Name|Creator|DL|
|Yashiyu Adventure|Shinmetsuryu-sama|[Download](http://www.freem.ne.jp/game/win/sdg01572.html)|
|Creator's Comment|A game developed for about a month. Control the battle robot "Yashiyu", defeat the scientist Dr. People, and complete your mission.|   |
|Game Name|Creator|DL|
|Yashiyu's Adventure: Demon God's Counterattack|[Chiko-sama](http://www.geocities.jp/takahidechikorin/index.html)|[Download](http://www.geocities.jp/takahidechikorin/masin.html)|
|Creator's Comment|It's an intense and stimulating game. <br>Hard mode is fun.|   |
|Game Name|Creator|DL|
|Legendary Dandelion|[Hashibuto Garasu-sama](http://bloodhouse.hp.infoseek.co.jp/)|[Download](http://bloodhouse.hp.infoseek.co.jp/AcEdi/aceditampopo.htm)|
|Creator's Comment|It's a story woven by strange creatures. <br>As usual, there are weird parts and various other things, but please enjoy.|   |
|Game Name|Creator|DL|
|1 Million Yen if You Can Completely Conquer Iramuka Stick|Fass-sama|[Download](http://fass.mad.buttobi.net/)|
|Creator's Comment|It's an Irritating Stick game. I might add extra stages sometimes, so please look forward to it. Be sure to read the readme. It's the cause of time-ups.|   |
|Game Name|Creator|DL|
|Mictor's Journey 2|Shinmetsuryu-sama|[Download](http://www.freem.ne.jp/game/win/sdg01483.html)|
|Creator's Comment|This is the sequel to Mictor's Journey. <br>I added more gimmicks and devised boss attacks compared to before.|   |
|Game Name|Creator|DL|
|Apocalypse: Bloody Destiny|[Brocken-sama](http://www.uploader.jp/home/DOSIN/)|[Download](http://www.uploader.jp/user/DOSIN/images/DOSIN_uljp00173.zip)|
|Creator's Comment|A story depicting the final battle between Hero Yashiyu and Demon King Santa, this is my first published work.|   |
|Game Name|Creator|DL|
|Retro Game|[Starter-sama](http://www.geocities.jp/iei1994/)|[Download](http://www.geocities.jp/iei1994/retorogame/retorogame.html)|
|Creator's Comment|It's a game like an old game. <br>There might or might not be various bonus elements (ha).|   |
|Game Name|Creator|DL|
|Yashiyu and the Delinquents' Adventure|BLUE-GANG-sama|[Download](http://www7.uploader.jp/dl/blue/blue_uljp00001.exe.html)  <br>↑Password is blue|
|Creator's Comment|A game where you conquer numerous schools to save a town taken over by Santa. You can experience the thrill of fighting with allied forces.|   |
|Game Name|Creator|DL|
|Battle Against Sins (Tsumi to no Tatakai)|Rekkamaru-sama|[Download](http://www.me.ccnw.ne.jp/retuzan/rekka/download/thumi.html)|
|Creator's Comment|I personally pursued only difficulty.|   |
|Game Name|Creator|DL|
|Whale Legend (Kujira Densetsu)|Shinmetsuryu-sama|[Download](/soft/ActionEditorPlus/g12.zip)|
|Creator's Comment|A game where a whale whose village was attacked goes on a journey to destroy the Demon King's army. <br>Traps increase in the latter half.|   |
|Game Name|Creator|DL|
|Fall Prelude|Shinmetsuryu-sama|[Download](/soft/ActionEditorPlus/g11.zip)|
|Creator's Comment|It's easy at first, but difficult later on. <br>I put effort into the bosses.|   |
|Game Name|Creator|DL|
|I'll Be Gone on a Journey for a While|Suppon-sama (鼈 is read as Suppon)|[Download](/soft/ActionEditorPlus/g10.zip)|
|Creator's Comment|A game where you use various weapons to go defeat Santa, who killed your parents. <br>It's highly difficult, but becomes easy once you get used to it.|   |
|Game Name|Creator|DL|
|Mictor's Journey|Delta-sama|[Download](/soft/ActionEditorPlus/g09.zip)|
|Creator's Comment|A game where Mictor, who was being teased, goes on a journey to earn respect. <br>Overall, there are many traps and hidden passages.|   |
|Game Name|Creator|DL|
|GARAXY SAVIOUR+|Nob-sama|[Download](/soft/ActionEditorPlus/g08.zip)|
|Creator's Comment|This is the upgraded version of GARAXY SAVIOUR. Added stage increases, a scoring system, and various other pluses. <br>An Easy Version is also included, so those who aren't good at it, please try.|   |
|Game Name|Creator|DL|
|Comical Monster Island Easy|Suppon-sama (鼈 is read as Suppon)|[Download](/soft/ActionEditorPlus/g07.zip)|
|Creator's Comment|This is the Easy version of Comical Monster Island, which many said became too difficult midway. HP is now 45, and the difficulty should have dropped significantly. Please try playing it.|   |
|Game Name|Creator|DL|
|Big Weapon|hikari-sama|[Download](http://1st.geocities.jp/xphikari/souko.html)|
|Creator's Comment|A game where you proceed using pseudo-weapons. You can use the poorly drawn materials hikari made. It might be tough, but please give it a try.|   |
|Game Name|Creator|DL|
|Metallic Core|Rekkamaru-sama|[Download](/soft/ActionEditorPlus/g05.zip)|
|Creator's Comment|I tried making a game that is not inappropriate and has high difficulty. <br>The true purpose of this game is to get a high score.|   |
|Game Name|Creator|DL|
|Stickman's Adventure 2|Delta-sama|[Download](/soft/ActionEditorPlus/g04.zip)|
|Creator's Comment|A game where a stickman goes searching for treasure again. <br>It gets progressively harder as the game goes on.|   |
|Game Name|Creator|DL|
|GARAXY SAVIOUR Gaiden|Nob-sama|[Download](/soft/ActionEditorPlus/g03.zip)|
|Creator's Comment|It's a score attack vertical shooter. <br>The beginning is easy, but the bosses at the end are difficult.|   |
|Game Name|Creator|DL|
|Comical Monster Island|Suppon-sama (鼈 is read as Suppon)|[Download](/soft/ActionEditorPlus/g02.zip)|
|Creator's Comment|A game where you take various monsters with you and conquer stages together. <br>The difficulty suddenly increases midway.|   |
|Game Name|Creator|DL|
|Machin krssyu|Delta-sama|[Download](/soft/ActionEditorPlus/g01.zip)|
|Creator's Comment|A game where Yashiyu pilots a robot and defeats enemies. <br>Defeat the boss waiting in the deepest part to clear the world. (Some places don't have bosses).|   |
|Game Name|Creator|DL|
|Ishishi Action: Deshishi's Ambition|[Baka King-sama](http://foolishkingdom.web.fc2.com/)|[Download](http://foolishkingdom.web.fc2.com/game_desisi.html)|
|Creator's Comment|An action game with characters closely resembling the gluttonous pink sphere from a certain action game. I'm using materials from K_san.|   |

[To Top of Page](#START)


<a name="MATERIAL_DL"></a>

## Material Collection

This is a collection of materials that can be used with Action Editor+ (also OK for the original Action Editor).  
The following materials can be incorporated into games made with Action Editor+ and distributed.  

※Since 2009/7/21, registration applications by the author themselves are no longer possible.  

Furthermore, the [Material Collection](/menu_game/ActionEditor/index.html#MATERIAL_DL) from the previous Action Editor can also be used with Action Editor+.  

● Explanation of Usage Scope
"Modification" ... Whether materials can be modified and still incorporated into and distributed with games made by Action Editor+.  
"Use Outside Action Editor+" ... Whether it can be used as material for things other than Action Editor+ (like regular free materials). **※Even if marked "○", distributing the material itself without the creator's permission is not allowed.**

Also, **if documents are attached to the material, please follow them.  
If there is an explanation on the creator's distribution page, please follow it.**

|   |   |   |   |   |   |
|---|---|---|---|---|---|
Action Editor+ Material Collection
|Material Name|Type|Creator|Modification|Use Outside Action Editor+|DL|
|Whimsical Material Collection|Various|[Gekkou-sama (Moonlight-sama)](http://sinseigekko.mad.buttobi.net/)|○|○|[Download](http://sinseigekko.mad.buttobi.net/)|
|Creator's Comment|Sorry for the trouble, but please follow the links from the top page in the order of GAME → Material Collection. (Because external linking to the distribution page is not possible).|   |   |   |   |
|Material Name|Type|Creator|Modification|Use Outside Action Editor+|DL|
|Emphasis on Ease of Use|Block Images|[Acid-sama](http://www.geocities.jp/nininacid/)|×|×|[Download](http://www.geocities.jp/nininacid/ActionEditor_001.htm)|
|Creator's Comment|Like Baka King-san's, it's possible to create a 3D effect depending on how you use them.|   |   |   |   |

[To Top of Page](#START)

<a name="CHAMPION_DL"></a>

## AkuEdi Tournament Champion Works Collection

You can download the winning works from the ["AkuEdi Tournament"](/menu_special_bbs/cbbs_actioneditor_c/cbbs.cgi).  
Copyright belongs to each respective creator.  

|Month Held|Theme|Creator|DL|
|---|---|---|---|
|Month Held|Theme|Creator|DL|
|2007/04|Vertical Scrolling|KasuDon-sama|[Download](/soft/ActionEditorPlus/2007_04.stg3p100)|
|2007/05|Inertia Stage|KasuDon-sama|[Download](/soft/ActionEditorPlus/2007_05.stg3p153)|
|2007/06|Lightweight Bullet Hell Shooter|Toorisugari Sokoneta Hito-sama (Person who failed to pass by-sama)|[Download](/soft/ActionEditorPlus/2007_06.stg3p176)|
|2007/07 <br>2007/08|Story Focused|Fuujin-sama (Wind and Dust-sama)|[Download](/soft/ActionEditorPlus/2007_07,08.stg3p200)|
|2007/09 <br>2007/10 <br>2007/11|Horror|Kagura Nadare-sama (Kagura Avalanche-sama)|[Download](/soft/ActionEditorPlus/2007_09,10,11.stg3p230)|

[
To Top of Page
](#START)