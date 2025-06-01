---
title: Action Editor | Game Creation Software | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Game Creation Software
  url: /menu_gametool/
- name: Action Editor
  url: /menu_game/ActionEditor/
h1: Action Editor
description: Free action game creation software "Action Editor"! You can create not only action games but also STG (shooting games). Easily and enjoyably create games.
---

<a name="START"></a>

## Action Game Creation Software - Action Editor

This is where you can download the action game creation software "Action Editor".
You can also download games made with Action Editor and materials for Action Editor.

[To Action Editor Downloads](#AE_DL)

[To Game Collection](#GAME_DL)

[To Material Collection](#MATERIAL_DL)

[To AkuEdi Tournament Champion Works Collection](#CHAMPION_DL)


<a name="AE_DL"></a>

## Action Editor Downloads

**Games created with Action Editor can be distributed on your own website, etc.**
For details, please see the included "二次配布について.chm" (Regarding Secondary Distribution.chm).

|Action Editor [Download Latest Version (zip)](/soft/ActionEditor/ActionEditor.zip "Download Game Creation Software 'Action Editor' (Free)")|   |
|---|---|
|Version|2.69|
|Genre|Action Game Creation Software (Shooting games can also be made)|
|Number of Players|1 person|
|Software Type|Freeware (Free)|
|Operation Confirmed|Windows XP, 2000, ME, 98|
|Last Release Date|2010/8/21|
|Comment|**Action game creation software** that combines ease of use with a high degree of freedom. <br>Not limited to action games, you can also create shooting games and puzzle games. <br>Replay function available.|

[To Top of Page](#START)

● Update History and Downloads for Each Version
- [v2.69](/soft/ActionEditor/ActionEditor_v269.zip "Download Game Creation Software 'Action Editor' (Free)") 2010/8/21  
  Fixed a bug where some text would flicker in certain environments.
- [v2.59](/soft/ActionEditor/ActionEditor_v259.zip "Download Game Creation Software 'Action Editor' (Free)") 2009/11/27  
  Slightly improved a bug where the file selection dialog display in edit mode or replay mode would be corrupted on Windows Vista and later OSes. While it may still not display 100% correctly, the issue of the file list suddenly disappearing has been resolved.
  Added "VSync=2" setting to "System.ini" and made it the default (recommended) setting. "VSync" determines whether vertical sync is enabled for screen updates. When "VSync=2", vertical sync is disabled on Vista and later OSes, and enabled on XP and earlier OSes.
- [v2.49](/soft/ActionEditor/ActionEditor_v249.zip "Download Game Creation Software 'Action Editor' (Free)") 2007/3/18  
  Fixed a bug where MIDI would not play in some environments.
- [v2.48](/soft/ActionEditor/ActionEditor_v248.zip "Download Game Creation Software 'Action Editor' (Free)") 2007/3/8  
  Fixed a bug where, during auto-scroll, if a shot's "Movement Type" was "Aim at Protagonist" and "Speed" was "-1 or less", the shot's movement direction would be reversed.
- [v2.47](/soft/ActionEditor/ActionEditor_v247.zip "Download Game Creation Software 'Action Editor' (Free)") 2007/2/27  
  Fixed a bug where an enemy would activate an action after fleeing (disappearing) off-stage.
- [v2.46](/soft/ActionEditor/ActionEditor_v246.zip "Download Game Creation Software 'Action Editor' (Free)") 2007/2/25  
  Fixed a bug where a summoned enemy's "Territory" would not function correctly when the protagonist was at the left edge of the stage (not the left edge of the screen).
- [v2.45](/soft/ActionEditor/ActionEditor_v245.zip "Download Game Creation Software 'Action Editor' (Free)") 2007/2/13  
  Fixed a bug where "Failed to start program due to insufficient memory!" would be displayed and the program could not be launched, even if there was free memory.
  Fixed a bug where, if the protagonist was invincible, messages would not be displayed even if an enemy with a pause-type message was defeated.
- [v2.35](/soft/ActionEditor/ActionEditor_v235.zip "Download Game Creation Software 'Action Editor' (Free)") 2007/2/11  
  Fixed a bug in summon actions where, if "Interval" was "0" or "Timing" was "Interval" or more, characters could sometimes be summoned to the top-left of the screen.
- [v2.34](/soft/ActionEditor/ActionEditor_v234.zip "Download Game Creation Software 'Action Editor' (Free)") 2007/2/9  
  Reduced the memory required to launch the program.
  Replays longer than 10 minutes can now be recorded.
  Set the default time limit to unlimited.
  Partially revised the explanations in Edit.chm and System.ini.
  Updated Normal Mode 1-1. The difficulty change was removed, and it became generally lighter.
- [v2.24](/soft/ActionEditor/ActionEditor_v224.zip "Download Game Creation Software 'Action Editor' (Free)") 2007/1/6  
  Fixed a bug where the score would not be correct if a stage was re-cleared after retrying immediately after clearing it.
- [v2.23](/soft/ActionEditor/ActionEditor_v223.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/12/28  
  Fixed a bug where, if a shot's "Movement Type" was "Aim at Protagonist", setting "Speed" to a negative value would not cause it to fly in the exact opposite direction of the protagonist.
- [v2.22](/soft/ActionEditor/ActionEditor_v222.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/12/2  
  Fixed a bug where many shots could not be fired at once. (Sorry for being vague)
- [v2.21](/soft/ActionEditor/ActionEditor_v221.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/12/2  
  Made it possible to set the "Number" for shot and summon actions up to 127.
- [v2.20](/soft/ActionEditor/ActionEditor_v220.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/10/27  
  Retry (restart the current stage from the beginning) is now possible in Edit's "Play" or "Test Play".
- [v2.10](/soft/ActionEditor/ActionEditor_v210.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/9/5  
  Fixed a bug where, if the mouse was clicked during full-screen initialization, the application would disappear from the taskbar. (Attempting to launch again in this state would display a double-launch error and fail to start).
- [v2.09](/soft/ActionEditor/ActionEditor_v209.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/8/24  
  Fixed a bug where the frame rate would sometimes not be around 60 (normal value = 60).
  However, it was a strange bug where the frame rate would be normal if some applications like "Windows Media Player" were launched before starting Action Editor.
  This normalizes game speed in some environments.

  In Edit's "Change Frame Rate", frame rate (≒ game speed) can now be set for each stage.
  In Configuration Editor's "Force Change Frame Rate", the overall game frame rate can be changed, or the settings from Edit's "Change Frame Rate" can be ignored.
  (Regarding the above two updates, they are intended as minimal support for those whose game speed changed from v2.09.)

  ○ Confirmation of damage caused by the bug fixed this time
  Sorry for the trouble, but similar to the v1.93 release, you need to check if a normal frame rate was achieved in previous versions.
  The most reliable way to check is to first, with any version from v1.93 to v1.99, open the settings file "system.ini" and set "TestMode=1".
  Launch the game in this state, and on the title screen (← important), check the "FPS" (frame rate) in the bottom right of the screen.
  If this value is not around 60, then unfortunately, game speed was not normal in versions prior to v2.09.
  And, **if it was not around 60, please make a note of that value.** (It will likely be around 40 often?)

  ※However, as mentioned before, launching some applications like "Windows Media Player" before starting Action Editor can result in a normal frame rate, so it's important to launch Action Editor at the usual timing (e.g., if you usually launch a music player first after PC startup, you need to launch the music player) and check the frame rate.

  ○ What to do if the frame rate (game speed) was not normal
  - How to play stages you've created so far with v2.09 as intended (at your intended game speed)
  In Edit's "Change Frame Rate", change the frame rate to the value you noted during the frame rate check, then play.

  - How to play an entire game (multiple stages) with v2.09 as intended
  In Configuration Editor, check "Force Change Frame Rate", and enter the value you noted during the frame rate check into "Frame Rate at that time (30-120)" on the right, then play.

  Also, **regardless of whether the frame rate is normal or abnormal, if you currently have any games distributed, updating the program to v2.09 is strongly recommended.**
  Furthermore, for works registered on Omoshiro Game Shinden, if you tell me "update it" via email or BBS, Anton, the Action Editor author, will take responsibility for updating it.
  ※However, even in that case, I cannot update it unless you tell me what frame rate to set. Also, if that work's program version is old, the game balance might change (and in the worst case, become impossible to clear), so I think re-testing with v2.09 will be necessary.

  Finally...
  Updates related to frame rate so far have often been fixes I wasn't fully satisfied with (like it being fixed for an unknown reason, or fixed without me knowing how), but this time I was able to fix it in a way I'm satisfied with, so frame rate related bugs should drastically decrease in the future (not just for Action Editor)...

  Anyway, I apologize for this complicated situation (sweat).
  Following v1.93, I apologize again for the inconvenience caused to many people.
- [v1.99](/soft/ActionEditor/ActionEditor_v199.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/7/9  
  Corrected the name of the action that reverses direction from "Invincibility Reversal" (muteki hanten) to "Direction Reversal" (muki hanten).
- [v1.98](/soft/ActionEditor/ActionEditor_v198.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/6/27  
  Fixed a bug where, if a shot's "Movement Type" was "Wave" and "Formation" was "Spread", setting "Speed" to a negative value would not cause it to fly in the reverse direction.
- [v1.97](/soft/ActionEditor/ActionEditor_v197.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/5/24  
  Fixed a bug in Edit's "Change Time" where increasing/decreasing the value would result in an odd number (e.g., 501).
- [v1.96](/soft/ActionEditor/ActionEditor_v196.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/4/13  
  Fixed a bug where messages could not be displayed consecutively if "Action" was set to "Disable Action Key".
- [v1.95](/soft/ActionEditor/ActionEditor_v195.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/3/27  
  Fixed a bug where, if the protagonist acquired an item that adds an action while transparent, the action would sometimes not be added.
- [v1.94](/soft/ActionEditor/ActionEditor_v194.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/3/21  
  Added "VSync" item to the initial settings file "System.ini". (This can resolve the issue in v1.93 where the display does not fit on the screen in some environments).
- [v1.93](/soft/ActionEditor/ActionEditor_v193.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/3/20  
  Added "TestMode" item to the initial settings file "System.ini". Setting "TestMode=1" allows displaying the frame rate.

  ○ And here's the important part ○
  Set the frame rate to 60. (I intended to set it to 60 before v1.93, but in some environments it gets set above 60.) This fixed a **bug where processing would become too fast in some environments.**

  Now, the main problem this time occurs if the stage creator's environment was one of those "some environments".
  If you have been creating stages since before this version, please first check if character movements, etc., have become slower in this version. (A more reliable way is to set "TestMode=1" in the initial settings file "System.ini" and check the frame rate.)
  **If it has become slower in this version, I apologize for the inconvenience, but you will need to re-adjust the balance of all stages created before v1.93. (Meaning, it will become easier due to the slower speed.)**

  I don't know how many people fall into "some environments", but I apologize for the inconvenience caused to them.
- [v1.88](/soft/ActionEditor/ActionEditor_v188.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/3/8  
  Fixed a bug where blocks would not become transparent even if "Transparent" was ON.
- [v1.87](/soft/ActionEditor/ActionEditor_v187.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/3/6  
  Fixed a bug where, if "Number" was odd, "Formation" was "Spread", and "Direction" was "Up", the middle shot would not appear.
  Removed the "Normal Mode" ("Hell Mode") display from the stage selection screen.
  Removed the file description of the executable file (it was "Skeleton").
  Updated "Regarding Secondary Distribution.chm". (Made it slightly easier to understand, but the terms regarding distribution are the same).

  ○ And here's the important part ○
  Fixed a bug where jumps would activate slightly later than the interval set by "Usage Interval". (For example, if combined with a shot action with the same "Usage Interval", jump activation would gradually become delayed).

  Fixing this bug means that **the balance of stages from before this version (when played by loading them in this version) might change subtly, or replays might not be reproduced accurately**, so I hesitated whether to fix it. (Since it's the full version).
  For the default palette, placing enemies that perform repeated jumps like "Sato-kun" would slightly change the balance.
  It's unlikely to make stages impossible to clear, but depending on the stage, it could. (Tricky auto-clear type (Rube Goldberg) stages are risky).
- [v1.86](/soft/ActionEditor/ActionEditor_v186.zip "Download Game Creation Software 'Action Editor' (Free)") 2006/2/20  
  Became the full version.

● Download Even Older Versions
Publication of Action Editor versions prior to Beta has ended.
This includes versions that were released on the [Omoshiro Game Blog](http://antongame.blog16.fc2.com/).

[To Top of Page](#START)


<a name="GAME_DL"></a>

## Game Collection

All are freeware (free).

※Since 2009/7/21, registration applications by the author themselves are no longer possible.
※If your gamepad (game controller) doesn't work, you may be able to resolve it with the method [here](/menu_support/gamepad_preferred_device/).

<Game Collection 1>

- [Sengoku SARABA](http://page.freett.com/shigeking/page1.html) Author: [Shigeking-sama](http://page.freett.com/shigeking/index.html)
- [Yokai Brothers](https://www.webfile.jp/dl.php?i=782904&s=98e3f2938393d303cb73) Author: [Nishikawa-sama](http://www.pixiv.net/member.php?id=1421419)

<Game Collection 2>

|   |   |   |
|---|---|---|
Action Editor Game Collection
|Game Name|Creator|DL|
|DY Recovery Project (Easy Version)|ZOO-sama|[Download](/soft/ActionEditor/g22.zip)|
|Creator's Comment|This is the easy version of DY. I think it's become considerably easier compared to before... probably.|   |
|Game Name|Creator|DL|
|Tanpo's Journey: Evil Power Chapter|[Chiko-sama](http://www.geocities.jp/takahidechikorin/)|[Download](http://www.geocities.jp/takahidechikorin/aku.html)|
|Creator's Comment|I wonder how many days it took to release... more importantly, please do your best to completely clear it! <br>It's easy at first, and gets harder as the story progresses.|   |
|Game Name|Creator|DL|
|Iron Castle|Nasu-sama|[Download](/soft/ActionEditor/g21.zip)|
|Creator's Comment|It's a game I made casually, but I'd be happy if you played it.|   |
|Game Name|Creator|DL|
|Fly Away Yashiyu: Until Your Strength Runs Out <br>Easy Version|[Kazuki-sama](http://www3.tok2.com/home/kazukikazuki2/)|[Download](http://www3.tok2.com/home/kazukikazuki2/daunro-do.htm)|
|Creator's Comment|I made "Fly (abbreviated) Until" easier. <br>I think anyone can play it to the end.|   |
|Game Name|Creator|DL|
|Fly Away Yashiyu: Until Your Strength Runs Out|[Kazuki-sama](http://www3.tok2.com/home/kazukikazuki2/)|[Download](http://www3.tok2.com/home/kazukikazuki2/daunro-do.htm)|
|Creator's Comment|Rip-off game is doneー(^o^)ノ <br>Now, try your best to clear it!! (broken|   |
|Game Name|Creator|DL|
|DY Recovery Project|ZOO-sama|[Download](/soft/ActionEditor/g20.zip)|
|Creator's Comment|A huge version with a total of 12 normal worlds and 11 extra stages, based on a third-rate story. Please take a quick look at "☆★Read Me First★☆" before playing.|   |
|Game Name|Creator|DL|
|GARAXY SAVIOUR -ASSAILANT-|Nob-sama|[Download](/soft/ActionEditor/g19.zip)|
|Creator's Comment|A shooter with a slight emphasis on scenario. The difficulty is a bit high. <br>It's a different perspective on GARAXY SAVIOUR, but you don't need to have played the previous game.|   |
|Game Name|Creator|DL|
|Battle Arena!|KasuDon-sama|[Download](/soft/ActionEditor/g18.zip)|
|Creator's Comment|A boss rush game where Yashiyu fights for money. <br>And a shadow creeping into that tournament... In short, it's a silly game (lol|   |
|Game Name|Creator|DL|
|GALAXY SAVIOR|Nob-sama|[Download](/soft/ActionEditor/g17.zip)|
|Creator's Comment|A horizontal shooter slightly similar to a certain famous shooting game. <br>Some materials may be used. (See Readme for details)|   |
|Game Name|Creator|DL|
|Purot Basutar|Delta-sama|[Download](/soft/ActionEditor/g16.zip)|
|Creator's Comment|A game where Yashiyu pilots a robot and defeats mass-produced machines created by Santa.|   |
|Game Name|Creator|DL|
|Santa's Counterattack|Delta-sama|[Download](/soft/ActionEditor/g15.zip)|
|Creator's Comment|A game where Santa goes to defeat Yashiyu.|   |
|Game Name|Creator|DL|
|Stickman's Adventure|Delta-sama|[Download](/soft/ActionEditor/g14.zip)|
|Creator's Comment|A game where a stickman travels in search of treasure. <br>The difficulty is normal.|   |
|Game Name|Creator|DL|
|Yashiyu VS Dark Yashiyu|Delta-sama|[Download](/soft/ActionEditor/g13.zip)|
|Creator's Comment|A game where Yashiyu goes to the Demon King's castle and defeats the Demon King. The difficulty is high. <br>Many places have a lot of stages, but please do your best to clear them.|   |
|Game Name|Creator|DL|
|Machine Castle|[Rizard-sama](http://hp25.0zero.jp/458/tll26k/)|[Download](http://www.geocities.jp/riza_rudo/Kikaijyo.html)|
|Creator's Comment|A game with a story about stopping a runaway robot. <br>Some people might not even take 30 minutes to clear it, so it's recommended for those with little time.|   |
|Game Name|Creator|DL|
|Yashiyu Party|Afo-sama|[Download](/soft/ActionEditor/g12.zip)|
|Creator's Comment|I aim to make it a regular year-end software!|   |
|Game Name|Creator|DL|
|Legend Wars|Rion-sama|[Download](/soft/ActionEditor/g10.zip)|
|Creator's Comment|The latter half is just plain difficult. The story is what it is, but please try playing it. <br>Also, only the red-haired swordsman protagonist can be used. (← Seems to refer to the art, by Admin)|   |
|Game Name|Creator|DL|
|Legend of Yashiyu|Rekkamaru-sama|[Download](/soft/ActionEditor/g09.zip)|
|Creator's Comment|This is a remake of Legend of Yashiyu.|   |
|Game Name|Creator|DL|
|Yashiyu and the Star Busters|Kasataku-sama|[Download](/soft/ActionEditor/g08.zip)|
|Creator's Comment|An orthodox action game focused on gameplay. <br>It's easy at first, but gets progressively harder as the game goes on.|   |
|Game Name|Creator|DL|
|Suspicious Person's Journey|[Chiko-sama](http://www.geocities.jp/takahidechikorin/index.html)|[Download](http://www.geocities.jp/takahidechikorin/husinsha.html)|
|Creator's Comment|A game where a suspicious person is the protagonist. <br>I plan to keep adding and changing items.|   |
|Game Name|Creator|DL|
|Intrusion|[chiyo-sama](http://chiyokaina.infoseek.ne.jp/)|[Download](http://chiyokaina.hp.infoseek.co.jp/game/first.html)|
|Creator's Comment|I tried making a shooting game. <br>I still plan to change and organize it more.|   |
|Game Name|Creator|DL|
|Black Wings|[Hashibuto Garasu-sama](http://bloodhouse.hp.infoseek.co.jp/)|[Download](http://bloodhouse.hp.infoseek.co.jp/AcEdi/Acedi-index.htm)|
|Creator's Comment|This is an original story for RejiYashi. <br>The difficulty is high, but I put a lot of effort into making it.|   |
|Game Name|Creator|DL|
|Kazuki's Stage Collection for Maniacs by Kazuki <br>Vol. 1 - Trial Version|[Kazuki-sama](http://www3.tok2.com/home/kazukikazuki2/)|[Download](http://www3.tok2.com/home/kazukikazuki2/daunro-do.htm)|
|Creator's Comment|It's done, the trial version. It's really not perfect. <br>Please play it like a beta tester.|   |
|Game Name|Creator|DL|
|Brian's Adventure|[Rekkamaru-sama](http://www.me.ccnw.ne.jp/akira/rekka/rekkamaru.html)|[Download](http://www.me.ccnw.ne.jp/retuzan/rekka/download/brian.html)|
|Creator's Comment|It's a normal action game. <br>Weak enemies help each other, and efforts have been made to lighten processing for a somewhat comfortable progression.|   |
|Game Name|Creator|DL|
|Legendary Travelers|Starter-sama|[Download](http://hp41.0zero.jp/gamen/s_scr.php?num=1&uid=Sutaa2&dir=749)|
|Creator's Comment|This is a story about certain travelers helping a village. <br>Now, can the travelers save the village...?|   |
|Game Name|Creator|DL|
|Irusu and the Demon Sword: Another Sides|[K_-sama](http://www.geocities.jp/flatk_fullswitch/)|[Download](http://www.geocities.jp/flatk_fullswitch/irusuAS.html)|
|Creator's Comment|The story of Haiz's journey that was happening behind the scenes of Irusu and Greshil's journey. <br>It also includes spoilers for the main story, so if you haven't cleared the main story, please start from there.|   |
|Game Name|Creator|DL|
|Suzuki-kun's Great Adventure|Starter-sama|[Download](/soft/ActionEditor/g04.zip)|
|Creator's Comment|A low-difficulty game where that Suzuki goes on an adventure. <br>There are subtle hidden elements.|   |
|Game Name|Creator|DL|
|Action Editor Version: Third Party Demon King|[kusut-sama](http://happytown.orahoo.com/kusut_game/)|[Download](http://www3.tok2.com/home/kusut/Daisan_action.lzh)|
|Creator's Comment|Production period was 2 months. Difficulty is quite high. <br>I've set up "hidden signs" so that everyone can thoroughly play it. <br>Do your best to completely clear it!|   |
|Game Name|Creator|DL|
|Irusu and the Demon Sword|[K_-sama](http://www.geocities.jp/flatk_fullswitch/)|[Download](http://www.geocities.jp/flatk_fullswitch/irusu.html)|
|Creator's Comment|A medium-length game with a production period of about 1 month. <br>It's fun (I can't help but hope), so please try it.|   |
|Game Name|Creator|DL|
|Legend of Knight|[Rekkamaru-sama](http://www.me.ccnw.ne.jp/akira/rekka/rekkamaru.html)|[Download](http://www.me.ccnw.ne.jp/retuzan/rekka/download/lk.html)|
|Creator's Comment|I tried to make the difficulty relatively easy. <br>It ends quickly, so please watch the ending, everyone.|   |
|Game Name|Creator|DL|
|Made in Yashiyu|Samakuru-sama|[Download](/soft/ActionEditor/g01.zip)|
|Creator's Comment|It was made in 3 days, so I'm thinking of making a sequel. <br>There are also secret elements, so please enjoy.|   |

[To Top of Page](#START)

<a name="MATERIAL_DL"></a>

## Material Collection

This is a collection of materials that can be used with Action Editor or Action Editor+.

※Since 2009/7/21, registration applications by the author themselves are no longer possible.

● Explanation of Usage Scope
"Distribution" ... Whether it can be incorporated into and distributed with games made by Action Editor.
"Modification" ... Whether materials can be modified and still incorporated into and distributed with games made by Action Editor.
"Use Outside Action Editor" ... Whether it can be used as material for things other than Action Editor (like regular free materials). **※Even if marked "○", distributing the material itself without the creator's permission is not allowed.**

Also, **if documents are attached to the material, please follow them.
If there is an explanation on the creator's distribution page, please follow it.**

|   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|
Action Editor Material Collection
|Material Name|Type|Creator|Distribution|Modification|Use Outside Action Editor|DL|
|rela X's shot materials!!|Shot Images|[rela X-sama](http://xxz.jp/relax/)|○|○|×|[Download](http://www.first-priority.yi.org/~relax/zisaten/materials/)|
|Creator's Comment|As the name suggests, shot images. For details on modification, please see the link. <br>Whether you use them or not is up to you.|   |   |   |   |   |
|Material Name|Type|Creator|Distribution|Modification|Use Outside Action Editor|DL|
|Plain Block Collection|Block Images|chiyo-sama|○|○|○|[Download](/soft/ActionEditor/m04.zip)|
|Creator's Comment|Since the colors haven't been adjusted, some blocks that flicker are included.|   |   |   |   |   |
|Material Name|Type|Creator|Distribution|Modification|Use Outside Action Editor|DL|
|YAKU's Material Collection|General|[YAKU-sama](http://yakusoen.web.fc2.com/)|○|○|○|[Download](http://yakusoen.web.fc2.com/material.html)|
|Creator's Comment|Unauthorized use, secondary distribution, and reprinting of modified items are OK. Copyright notice and usage report are optional.|   |   |   |   |   |
|Material Name|Type|Creator|Distribution|Modification|Use Outside Action Editor|DL|
|Title 3DVer|Title Image|Acid-sama|○|○|×|[Download](/soft/ActionEditor/m03.zip)|
|Creator's Comment|I just made it 3D as is.|   |   |   |   |   |
|Material Name|Type|Creator|Distribution|Modification|Use Outside Action Editor|DL|
|K's Material|Various|[K_-sama](http://www.geocities.jp/flatk_fullswitch/)|○|○|○|[Download](http://www.geocities.jp/flatk_fullswitch/material.html)|
|Creator's Comment|Basically, you can use them freely, but please do not commit etiquette violations such as falsifying copyright.|   |   |   |   |   |
|Material Name|Type|Creator|Distribution|Modification|Use Outside Action Editor|DL|
|Modified Title Art|Title Image|[kusut-sama](http://happytown.orahoo.com/kusut_game/)|×|×|×|[Download](/soft/ActionEditor/m01.zip)|
|Creator's Comment||   |   |   |   |   |

[To Top of Page](#START)

<a name="CHAMPION_DL"></a>

## AkuEdi Tournament Champion Works Collection

You can download the winning works from the ["AkuEdi Tournament"](/menu_special_bbs/cbbs_actioneditor_c/cbbs.cgi).
Copyright belongs to each respective creator.

|Month Held|Theme|Creator|DL|
|---|---|---|---|
|Month Held|Theme|Creator|DL|
|2007/03|None (Freestyle)|ZOO-sama|[Download](/soft/ActionEditor/2007_03.stg3_247)|
|2007/02|Time Stage|Torinoko-sama (Chick-sama)|[Download](/soft/ActionEditor/2007_02.stg3_224)|
|2007/01|Puzzle Stage|Afo-sama|[Download](/soft/ActionEditor/2007_01.stg3_222)|
|2006/12|Visibility Stage|ZOO-sama|[Download](/soft/ActionEditor/2006_12.stg3_220)|
|2006/11|One-Hit Stage|ZOO-sama|[Download](/soft/ActionEditor/2006_11.zip)|
|2006/10|Stress Relief|Rekkamaru-sama|[Download](/soft/ActionEditor/2006_10.stg3_209)|
|2006/09|Single-Screen Stage|ZOO-sama|[Download](/soft/ActionEditor/2006_09.stg3_209)|
|2006/08|Replayability Stage|YAKU-sama|[Download](/soft/ActionEditor/2006_08.zip)|
|2006/07|Normal Action|777-sama|[Download](/soft/ActionEditor/2006_07.stg3_198)|
|2006/06|Running Stage|Rekkamaru-sama|[Download](/soft/ActionEditor/2006_06.stg3_197)|
|2006/05|Giant Boss|KasuDon-sama|[Download](/soft/ActionEditor/2006_05.stg3_196)|
|2006/04|Silly Stage|kusut-sama|[Download](/soft/ActionEditor/2006_04.stg3_195)|
|2006/03|Irritating Stick|RAI-sama|[Download](/soft/ActionEditor/2006_03.stg3_186)|
|2006/02|New Sensation Game|Kazuki-sama|[Download](/soft/ActionEditor/2006_02.stg3_174)|
|2006/01|Bullet Hell Shooter|Kazuki-sama|[Download](/soft/ActionEditor/2006_01.stg3_120)|
|2005/12|Year-End/New Year|RAI-sama|[Download](/soft/ActionEditor/2005_12.stg3_105)|

[To Top of Page](#START)