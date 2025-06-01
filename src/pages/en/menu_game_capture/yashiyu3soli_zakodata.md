---
title: Rejiyashi 3 Solitude Minion Data | Game Walkthrough | Omoshiro Game Shrine
h1: Rejiyashi 3 Solitude Minion Data
description: Minion data for the free RPG "Rejiyashi 3 Solitude".
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Game Walkthrough Table of Contents
    url: /menu_game_capture/
  - name: "Legend of Yashiyu 3"
    url: /menu_game_capture/#LOY3
  - name: Rejiyashi 3 Solitude Minion Data
    url: /menu_game_capture/yashiyu3soli_itemdata/
keywords:
- Boss
- RPG
- Role-playing game
- Game walkthrough
- Data
- Game
- Free
- Fun
- Game development
---

## "Rejiyashi 3 Solitude" Minion Data

I believe they are **arranged in the order of their appearance, roughly following the scenario**.  
You can either follow the scenario progression or jump straight to the end (bottom).  
HP, attributes, and status ailment resistances might be slightly helpful.  
  
■ How to Read the Data  
・"Night" refers to the rate of change in "Attack (Atk)", "Defense (Def)", "Magic (Mag)", and "Resistance (Res)" at night. For example, 120 means the ability becomes 120% of its original value at night.  
  
・"U" indicates whether it is Undead.  
－ → Not Undead  
U → Undead  
  
・The columns from Death to Curse represent resistance to each status ailment (success probability). (※腐→"Decay")  
For status ailment skills like "Poison", this value is the skill's success probability.  
However, for additional effects from weapons or skills (that are not status ailment types), the original success rate is 30%, so for example, if "Poison" has a success rate of 70%, it becomes 30% × 70% = 21%.  
  
・"Fire", "Light", "Dark", and "Lower" indicate elemental resistances or weaknesses.  
－ → No resistance  
○ → Resistance  
× → Weakness  
  
■ Useful to know!? Enemy AI  
・Field-type skills are only used when the field is clear.  
・If SP is insufficient, they will resort to normal attacks.  
  
  

|             |      |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |       |      |     |          |
| ----------- | ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----- | ---- | --- | -------- |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Suzuki-kun  | 18   | 0   | 18  | 13  | 18  | 12  | 8   | 0   | 100 | －   | ×   | ×   | ×   | ×   | 100 | 100 | 100 | 100 | 100 | 100 | 0     | 2    | 0   | Around Sealed Village |
| Rookie Mage | 27   | 10  | 20  | 16  | 24  | 20  | 10  | 15  | 90  | －   | －   | －   | ×   | －   | 70  | 70  | 70  | 70  | 90  | 70  | 1     | 3    | 1   | Around Sealed Village |
| Creeping Spirit | 30   | 10  | 21  | 18  | 26  | 18  | 9   | 10  | 100 | U   | －   | ×   | ○   | －   | 50  | 50  | 50  | 90  | 50  | 50  | 2     | 5    | 1   | Around Sealed Village |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Wooden Swordman | 38   | 10  | 28  | 22  | 24  | 16  | 9   | 20  | 100 | －   | －   | －   | －   | ×   | 90  | 90  | 90  | 70  | 70  | 70  | 2     | 8    | 1   | Trial Cave          |
| Pale Noppera | 36   | 20  | 27  | 27  | 36  | 27  | 9   | 5   | 100 | U   | ○   | ×   | ○   | ×   | 50  | 70  | 70  | 70  | 70  | 70  | 3     | 6    | 1   | Trial Cave          |
| Boomerang Knight | 32   | 10  | 27  | 25  | 28  | 15  | 11  | 15  | 80  | －   | －   | －   | ×   | －   | 70  | 70  | 70  | 70  | 70  | 90  | 2     | 6    | 1   | Trial Cave          |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Dried Snake | 54   | 20  | 35  | 31  | 48  | 25  | 10  | 50  | 110 | －   | ○   | ○   | －   | －   | 70  | 50  | 50  | 70  | 70  | 90  | 4     | 10   | 2   | Around Demon's Mansion |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Shadow People | 63   | 20  | 35  | 36  | 48  | 38  | 10  | 15  | 100 | U   | －   | ×   | ○   | ○   | 30  | 30  | 30  | 30  | 30  | 30  | 6     | 9    | 2   | Demon's Mansion     |
| Self-proclaimed Demon King | 180  | 30  | 50  | 40  | 60  | 38  | 10  | 15  | 130 | －   | －   | －   | ○   | ×   | 30  | 70  | 70  | 70  | 70  | 70  | 11    | 30   | 3   | Demon's Mansion     |
| House Guard | 72   | 10  | 40  | 45  | 36  | 29  | 8   | 10  | 130 | －   | －   | －   | －   | －   | 70  | 90  | 90  | 0   | 70  | 70  | 6     | 13   | 2   | Demon's Mansion     |
| Demon Pastry | 54   | 20  | 30  | 31  | 42  | 38  | 12  | 5   | 130 | －   | －   | ×   | ○   | －   | 70  | 50  | 50  | 70  | 70  | 70  | 5     | 10   | 2   | Demon's Mansion     |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Treant      | 162  | 10  | 50  | 18  | 48  | 34  | 8   | 100 | 80  | －   | ×   | ○   | －   | －   | 90  | 70  | 70  | 70  | 70  | 70  | 8     | 16   | 2   | Around Ghost Village |
| Elite Mage  | 81   | 30  | 35  | 36  | 60  | 51  | 10  | 10  | 100 | －   | －   | －   | ×   | －   | 70  | 70  | 70  | 70  | 90  | 70  | 7     | 19   | 2   | Around Ghost Village |
| Surfacing Shark | 108  | 20  | 60  | 45  | 36  | 29  | 9   | 10  | 90  | －   | ×   | －   | －   | ×   | 70  | 70  | 70  | 90  | 70  | 90  | 11    | 14   | 3   | Around Ghost Village |
| Swamp Lord  | 108  | 20  | 60  | 45  | 36  | 29  | 9   | 30  | 120 | －   | －   | －   | －   | －   | 70  | 50  | 50  | 90  | 70  | 90  | 11    | 16   | 3   | Around Ghost Village |
| Saint Bird  | 99   | 30  | 60  | 45  | 72  | 51  | 12  | 5   | 70  | －   | －   | ○   | ×   | －   | 50  | 70  | 70  | 50  | 70  | 50  | 13    | 20   | 3   | Around Trial Cave    |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Bloodsucker | 90   | 30  | 60  | 54  | 60  | 60  | 10  | 10  | 100 | U   | －   | ×   | ○   | ○   | 50  | 50  | 50  | 50  | 50  | 50  | 21    | 15   | 4   | Trial Cave          |
| Two-Armed Warrior | 126  | 20  | 80  | 45  | 36  | 25  | 9   | 20  | 100 | －   | －   | －   | －   | －   | 70  | 90  | 90  | 70  | 70  | 70  | 19    | 22   | 4   | Trial Cave          |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| High Healer | 144  | 40  | 60  | 45  | 65  | 68  | 9   | 10  | 100 | －   | －   | －   | －   | ○   | 70  | 70  | 70  | 70  | 70  | 70  | 32    | 38   | 5   | Rustling Forest     |
| Super Treant | 315  | 30  | 80  | 36  | 60  | 51  | 8   | 100 | 80  | －   | ×   | ○   | －   | ×   | 90  | 70  | 70  | 70  | 70  | 70  | 34    | 28   | 5   | Rustling Forest     |
| Forest Knight | 171  | 30  | 90  | 90  | 60  | 60  | 10  | 20  | 70  | －   | ×   | ○   | －   | －   | 50  | 50  | 50  | 50  | 50  | 50  | 31    | 37   | 5   | Rustling Forest     |
| Whirlwind User | 162  | 30  | 70  | 54  | 84  | 64  | 10  | 10  | 100 | －   | －   | －   | ×   | －   | 70  | 90  | 90  | 70  | 70  | 90  | 29    | 40   | 5   | Rustling Forest     |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Creeping Darkness | 288  | 50  | 100 | 81  | 108 | 60  | 9   | 10  | 100 | U   | －   | ×   | ○   | －   | 50  | 70  | 70  | 50  | 70  | 70  | 60    | 50   | 7   | Around Warrior's Village |
| Cleanup     | 189  | 30  | 90  | 81  | 60  | 51  | 10  | 5   | 100 | －   | ○   | －   | －   | ×   | 90  | 70  | 70  | 90  | 70  | 70  | 42    | 60   | 6   | Around Warrior's Village |
| Relaxed Snake | 216  | 40  | 80  | 72  | 72  | 51  | 10  | 20  | 120 | －   | －   | －   | －   | －   | 70  | 50  | 50  | 70  | 70  | 70  | 51    | 40   | 7   | Around Warrior's Village |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Eradication Robot | 225  | 30  | 110 | 140 | 72  | 20  | 9   | 0   | 100 | －   | －   | －   | －   | －   | 0   | 0   | 0   | 0   | 0   | 0   | 59    | 30   | 7   | Signboard Factory   |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Desert Warrior | 252  | 20  | 110 | 108 | 72  | 68  | 10  | 50  | 80  | －   | －   | ○   | －   | －   | 90  | 70  | 70  | 70  | 90  | 70  | 42    | 70   | 6   | Around Dragon's Fortress |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Healing Demon | 252  | 40  | 130 | 99  | 80  | 60  | 9   | 10  | 130 | －   | －   | －   | ○   | －   | 50  | 70  | 70  | 70  | 70  | 50  | 80    | 90   | 8   | Dragon's Fortress   |
| Dragon Knight | 297  | 30  | 120 | 126  | 72  | 51  | 9   | 30  | 90  | －   | ○   | －   | －   | －   | 70  | 70  | 70  | 70  | 90  | 70  | 102   | 60   | 10  | Dragon's Fortress   |
| Dark Mage   | 225  | 50  | 80  | 72  | 90  | 86  | 10  | 0   | 100 | U   | －   | ×   | ○   | －   | 50  | 70  | 70  | 70  | 70  | 70  | 100   | 90   | 10  | Dragon's Fortress   |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Powerful Whale | 342  | 10  | 200 | 117 | 60  | 43  | 8   | 10  | 80  | －   | ×   | －   | －   | ×   | 90  | 90  | 90  | 70  | 70  | 70  | 144   | 100  | 12  | Sea                 |
| Sea Guardian | 270  | 50  | 130 | 110 | 96  | 86  | 10  | 10  | 100 | －   | ×   | ○   | －   | －   | 50  | 50  | 50  | 50  | 70  | 70  | 102   | 140  | 10  | Sea                 |
| Melon Cream Soda | 243  | 50  | 120 | 90  | 120 | 115 | 10  | 30  | 80  | －   | －   | －   | －   | ○   | 70  | 70  | 70  | 70  | 70  | 50  | 76    | 130  | 8   | Sea                 |
| Konpeito    | 135  | 40  | 120 | 180 | 84  | 129 | 12  | 5   | 100 | －   | ○   | ○   | ○   | ○   | 30  | 30  | 30  | 30  | 30  | 30  | 93    | 100  | 9   | Sea                 |
| Raging Squid | 279  | 20  | 150 | 100 | 84  | 72  | 10  | 20  | 100 | U   | ×   | ×   | ○   | －   | 70  | 90  | 90  | 70  | 70  | 90  | 150   | 70   | 12  | Sea                 |
| Water Dragon | 720  | 50  | 160 | 108 | 84  | 72  | 9   | 10  | 100 | －   | ×   | －   | －   | ×   | 50  | 70  | 70  | 50  | 70  | 70  | 250   | 350  | 15  | Sea                 |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Strong-Armed Swordsman | 315  | 30  | 150 | 150 | 84  | 64  | 10  | 10  | 90  | －   | －   | －   | ×   | －   | 70  | 70  | 70  | 90  | 90  | 0   | 170   | 100  | 13  | Around Immortal Mountain |
| Creeping Fighting Spirit | 270  | 30  | 150 | 110 | 100 | 72  | 11  | 10  | 100 | U   | －   | ×   | ○   | －   | 70  | 90  | 90  | 70  | 50  | 70  | 119   | 130  | 10  | Around Immortal Mountain |
| Guardian    | 540  | 50  | 170 | 180 | 120 | 115 | 10  | 5   | 110 | －   | －   | －   | －   | ○   | 50  | 70  | 70  | 70  | 50  | 70  | 297   | 200  | 17  | Around Trial Tower |
| Bandit King | 360  | 30  | 145 | 117 | 84  | 43  | 9   | 20  | 120 | －   | －   | －   | －   | ×   | 90  | 70  | 70  | 70  | 70  | 70  | 110   | 150  | 10  | Around Immortal Mountain |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Flame User  | 288  | 50  | 120 | 90  | 144 | 108 | 10  | 5   | 100 | －   | ○   | －   | －   | －   | 70  | 90  | 90  | 70  | 70  | 70  | 93    | 170  | 9   | Immortal Mountain   |
| Threatening Noppera | 324  | 30  | 150 | 110 | 120 | 82  | 10  | 5   | 100 | U   | －   | ×   | ○   | －   | 50  | 50  | 50  | 70  | 70  | 70  | 160   | 130  | 12  | Immortal Mountain   |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Miracle Tree | 540  | 60  | 160 | 80  | 120 | 86  | 8   | 100 | 80  | －   | ×   | －   | －   | ○   | 70  | 70  | 70  | 70  | 70  | 70  | 190   | 140  | 13  | Treasure Cave       |
| Bounty Hunter | 387  | 30  | 160 | 120 | 96  | 72  | 11  | 0   | 110 | －   | －   | －   | －   | －   | 70  | 90  | 90  | 70  | 70  | 90  | 127   | 240  | 11  | Treasure Cave       |
| Treasure Guardian | 360  | 40  | 150 | 120 | 132 | 93  | 10  | 0   | 100 | U   | －   | ×   | ○   | －   | 70  | 70  | 70  | 50  | 70  | 70  | 180   | 160  | 13  | Treasure Cave       |
| Ogre Head   | 342  | 50  | 140 | 140 | 120 | 115 | 10  | 0   | 100 | U   | －   | ×   | ○   | －   | 70  | 70  | 70  | 70  | 70  | 50  | 200   | 140  | 14  | Treasure Cave       |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Phoenix Bird | 396  | 70  | 160 | 100 | 140 | 129 | 13  | 10  | 90  | －   | ○   | ○   | ×   | －   | 70  | 70  | 70  | 50  | 70  | 70  | 238   | 300  | 15  | Trial Tower         |
| Fire Dragon | 990  | 80  | 190 | 160 | 120 | 93  | 10  | 10  | 100 | －   | ○   | －   | －   | ×   | 50  | 70  | 70  | 70  | 70  | 70  | 700   | 500  | 26  | Trial Tower         |
| Hell Knight | 405  | 40  | 200 | 180 | 108 | 93  | 9   | 5   | 100 | U   | －   | ×   | ○   | －   | 50  | 50  | 50  | 70  | 90  | 70  | 330   | 280  | 18  | Trial Tower         |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Slaughter Machine | 420  | 30  | 210 | 300 | 96  | 50  | 11  | 0   | 100 | －   | －   | －   | －   | －   | 0   | 0   | 0   | 0   | 0   | 0   | 480   | 250  | 21  | Mirror Hall         |
| Mocking Moon | 540  | 50  | 160 | 130 | 216 | 115 | 10  | 10  | 150 | －   | －   | ○   | －   | －   | 50  | 50  | 50  | 50  | 50  | 50  | 595   | 600  | 24  | Mirror Hall         |
| Ancient Folk | 414  | 60  | 175 | 120 | 132 | 216 | 9   | 50  | 100 | U   | －   | ×   | ○   | ○   | 70  | 70  | 70  | 70  | 70  | 70  | 420   | 350  | 20  | Mirror Hall         |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Demon King's Minion | 558  | 60  | 170 | 140 | 132 | 115 | 10  | 10  | 130 | －   | －   | －   | ○   | －   | 50  | 50  | 50  | 70  | 70  | 70  | 425   | 500  | 20  | Golden Demon King's Castle |
| Bullet Star | 513  | 50  | 230 | 160 | 120  | 100 | 11  | 10  | 80  | －   | ○   | ○   | －   | －   | 70  | 70  | 70  | 70  | 90  | 70  | 510   | 400  | 22  | Golden Demon King's Castle |
| Gold Glove  | 495  | 50  | 200 | 220 | 96  | 100 | 10  | 20  | 100 | －   | －   | －   | ×   | －   | 70  | 70  | 70  | 70  | 70  | 90  | 255   | 800  | 15  | Golden Demon King's Castle |
| Ancient Mage | 477  | 80  | 160 | 110 | 156 | 136 | 9   | 30  | 100 | U   | －   | ×   | ○   | －   | 70  | 50  | 50  | 50  | 70  | 70  | 660   | 300  | 25  | Golden Demon King's Castle |
| Strongest Whale | 720  | 30  | 270 | 150 | 96  | 72  | 8   | 20  | 100 | －   | ×   | －   | ×   | ×   | 70  | 70  | 70  | 70  | 70  | 70  | 730   | 500  | 27  | Golden Demon King's Castle |
| Chosen One  | 675  | 40  | 240 | 200 | 132 | 86  | 10  | 10  | 100 | －   | －   | ○   | －   | －   | 50  | 50  | 50  | 50  | 50  | 50  | 600   | 700  | 24  | Golden Demon King's Castle |
| Demon King Beryl | 1500 | 100 | 210 | 150 | 180 | 108 | 10  | 0   | 100 | U   | －   | ×   | ○   | －   | 20  | 20  | 20  | 20  | 20  | 20  | 4000  | 2000 | 63  | Golden Demon King's Castle |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |
| Invincible Warrior | 1118 | 60  | 420 | 264 | 211 | 183 | 11  | 15  | 100 | －   | －   | －   | ×   | ×   | 70  | 70  | 70  | 50  | 50  | 70  | 2337  | 1000 | 48  | Fake World          |
| Silver Slugger | 988  | 50  | 448 | 192 | 172 | 132 | 11  | 5   | 100 | －   | －   | －   | ×   | －   | 70  | 90  | 90  | 70  | 90  | 90  | 2125  | 1100 | 46  | Fake World          |
| Shield Master | 936  | 70  | 420 | 396 | 230 | 258 | 8   | 10  | 90  | －   | ○   | ○   | ○   | ○   | 50  | 70  | 70  | 70  | 70  | 70  | 2550  | 1200 | 50  | Fake World          |
| God Hand    | 1170 | 80  | 448 | 240 | 288 | 172 | 9   | 5   | 80  | －   | －   | ○   | －   | ×   | 50  | 70  | 70  | 70  | 70  | 70  | 3187  | 600  | 56  | Fake World          |
| Miracle Worker | 1287 | 80  | 336 | 84  | 249 | 162 | 8   | 100 | 100 | －   | ×   | －   | －   | －   | 70  | 50  | 50  | 70  | 70  | 70  | 2975  | 800  | 54  | Fake World          |
| Melon Soda  | 936  | 100 | 350 | 120 | 307 | 432 | 10  | 30  | 80  | －   | －   | －   | －   | －   | 50  | 50  | 50  | 50  | 50  | 50  | 2550  | 900  | 50  | Fake World          |
| Astro Mage  | 988  | 90  | 308 | 144 | 249 | 216 | 10  | 10  | 120 | －   | －   | －   | －   | －   | 70  | 70  | 70  | 70  | 70  | 70  | 2762  | 900  | 52  | Fake World          |
| Last Spirit | 1105 | 60  | 406 | 216 | 249 | 162 | 11  | 0   | 100 | U   | －   | ×   | ○   | －   | 50  | 70  | 70  | 70  | 90  | 70  | 3500  | 500  | 59  | Fake World          |
| Death Dragon | 1690 | 100 | 434 | 252 | 249 | 183 | 10  | 20  | 100 | U   | －   | ×   | ○   | ○   | 0   | 20  | 20  | 20  | 20  | 20  | 7500  | 2000 | 86  | Fake World          |
| Name        | HP   | SP  | Atk | Def | Mag | Res | Rct | Spr | Night | U   | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp   | S    | BP  | Appearance Location |