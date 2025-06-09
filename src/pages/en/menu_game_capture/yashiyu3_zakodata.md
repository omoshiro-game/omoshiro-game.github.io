---
title: Legend of Yashiyu 3 Minion Data
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Game Walkthrough
    url: /menu_game_capture/
  - name: Rejiyashi 3 Solitude
    url: /menu_game_capture/#LOY3_SOLITUDE
  - name: Legend of Yashiyu 3 Minion Data
    url: /menu_game_capture/yashiyu3_zakodata/
description: Minion data for the free RPG "Legend of Yashiyu 3".
---

## "Legend of Yashiyu 3" Minion Data

If it's hard to see, please maximize the window.  
  
■ How to Read the Data  
・"Night" refers to the rate of change in "Attack (Atk)", "Defense (Def)", "Magic (Mag)", and "Resistance (Res)" at night. For example, 120 means the ability becomes 120% of its original value at night.  
  
・"U" indicates whether it is Undead.  
－ → Not Undead  
U → Undead  
  
・The columns from Death to Curse represent resistance to each status ailment (success probability). (※腐→"Decay")  
For status ailment skills like "Poison", this value is the skill's success probability.  
However, for additional effects from weapons or skills (that are not status ailment types), the original success rate is 30%, so for example, if "Poison" has a success rate of 70%, it becomes 30% × 70% = 21%.  
  
・"Fire", "Light", "Dark",```markdown
---
title: "Legend of Yashiyu 3" Minion Data
layout: /src/ and "Lower" indicate elemental resistances or weaknesses.  
－ → No resistance  
○ → Resistance  
× → Weakness  
  
■ Useful to know！？ Enemy AI  
・Most enemies only use field-type skills when the field is clear.  
・If SP is insufficient, they will resort to normal attacks.  
  
  

| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U |layouts/Base.astro
breadcrumb:
  - name: Game Walkthrough
    url: /menu_game_capture/
  - name: Rejiyashi 3 Solitude
    url: /menu_game_capture/#LOY3_SOLITUDE
  - name: "Legend of Yashiyu 3" Minion Data
    url: /menu_game_capture/yashiyu3_zakodata/
---

## " Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Suzuki-kun | 20 | 0 | 18 | 13 | 15 | 16 | 8 | 0 | 100 | － | × | × | × | × | 100 | 100 | 100 | 100 | 100 | 100 | 0 | 2 | 0 | Around Sealed Village |
| RookieLegend of Yashiyu 3" Minion Data

If it's hard to see, please maximize the window.  
  
■ How to Read the Data  
・"Night" refers to the rate of change in "Attack (Atk)", "Defense (Def)", "Magic (Mag)", and "Resistance (Res)" at night. For example, 120 means the ability becomes 120% of its original value at night.  
  
・"U" indicates whether it is Undead.  
－ → Not Undead  
U → Undead  
  
・The columns from Death to Curse represent resistance to each status ailment (success probability). Mage | 30 | 10 | 20 | 16 | 20 | 25 | 10 | 15 | 90 | － | － | － | × | － | 70 | 70 | 70 | 70 | 90 | 70 | 1 | 3 | 0 | Around Sealed Village |
| Creeping Spirit | 34 | 10 | 21 | 18 | 22 | 23 | 9 | 10 | 100 | U | － | × | ○ | － | 50 | 50 | 50 (※腐→"Decay")  
For status ailment skills like "Poison", this value is the skill's success probability.  
However, the bonus effect of non-status ailment skills is 30%, so for example, if "Poison" has a 70% success rate, it becomes 30% × 70% = 21%.  
  
・"Fire", "Light", "Dark", and "Lower" indicate elemental resistances or weaknesses.  
－ → No resistance  
○ → Resistance  
× → Weakness  
  
■ Useful to know！？ Enemy AI  
・Most enemies only use field-type skills when the field is clear.  
・If SP is insufficient, they will resort to normal attacks.  
  
  

| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | | 90 | 50 | 50 | 2 | 4 | 1 | Around Sealed Village |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Wooden Swordman | 43 | 10 | 28 | 22 | 20 | 21 | 9 | 20 | 100 | － | － | － | － | × | 90 | 90 | 90 | 70 | 70 | 70 | 2 | 8 | 0 | Trial Cave |
| Pale Noppera | 41 | 20 | 27 | 27 | 30 | 34 | 9 | 5 | 100 | U | ○ | × | ○ | × | 50 | 70 | 70 | 70 | 70 | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Suzuki-kun | 20 | 0 | 18 | 13 | 15 | 16 | 8 | 0 | 100 | － | × | × | × | × | 100 | 100 | 100 | 100 | 100 | 100 | 0 | 2 | 0 | Around Sealed Village |
| Rookie Mage | 30 | 10 | 20 | 16 | 20 | 25 | 10 | 15 | 90 | － | － | － | × | － | 70 | 70 | 70 | 70 | 90 | 70 | 1 | 3 | 0 | Around Sealed Village |
| Creeping Spirit | 34 | 10 | 21 | 18 | 22 | 23 | 9 | 10 | 100 | U | － | × | ○ | － | 50 | 50 | 50 70 | 3 | 5 | 2 | Trial Cave |
| Boomerang Knight | 36 | 10 | 27 | 25 | 24 | 19 | 11 | 15 | 80 | － | － | － | × | － | 70 | 70 | 70 | 70 | 70 | 90 | 2 | 6 | 0 | Trial Cave |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Dried Snake | 60 | 20 | 35 | 31 | 40 | 32 | 10 | 50 | 110 | － | ○ | ○ | － | － | 70 | 50 | 50 | 70 | 70 | 90 | 4 | 10 | 0 | Around Demon's Mansion |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | 90 | 50 | 50 | 2 | 4 | 1 | Around Sealed Village |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Wooden Swordman | 43 | 10 | 28 | 22 | 20 | 21 | 9 | 20 | 100 | － | － | － | － | × | 90 | 90 | 90 | 70 | 70 | 70 | 2 | 8 | 0 | Trial Cave |
| Pale Noppera | 41 | 20 | 27 | 27 | 30 | 34 | 9 | 5 | 100 | U | ○ | × | ○ | × | 50 | 70 | 70 | 70 | 70 | 70 | 3 | 5 | 2 | Trial Cave |
| Boomerang Knight | 36 | 10 | 27 | 25 | 24 | 19 | 11 | 15 | 80 | － | － | － | × | － | 70 | 70 | 70 | 70 | 70 | 90 | 2 | 6 | 0 | Trial Cave |
| Name | | Curse | Exp | S | BP | Appearance Location |
| Shadow People | 70 | 20 | 35 | 36 | 40 | 48 | 10 | 15 | 100 | U | － | × | ○ | ○ | 30 | 30 | 30 | 30 | 30 | 30 | 5 | 9 | 2 | Demon's Mansion |
| Self-proclaimed Demon King | 200 | 30 | 50 | 40 | 50 | 48 | 10 | 15 | 130 | － | － | － | ○ | × | 30 | 70 | 70 | 70 | 70 | 70 | 9 | 30 | 2 | Demon's Mansion |
| House Guard | 80 | 10 | 40 | 45 | 30 | 37 | 8 | 10 | 130 | － | － | － | － | － | 70 | 90 | 90 | 0 | 70 | 70 | 6 | 13 | 0 | Demon's Mansion |
| Demon Pastry | 60 | 20 | 30 | 31 | 35 | 48 | 12 | 5 | 130 | － | － | × | ○ | － | 70 | 50 | 50 | 70 | 70 | 70 | 5 | 10 | 1 | Demon's Mansion |
| Name | HP | SP | At HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Dried Snake | 60 | 20 | 35 | 31 | 40 | 32 | 10 | 50 | 110 | － | ○ | ○ | － | － | 70 | 50 | 50 | 70 | 70 | 90 | 4 | 10 | 0 | Around Demon's Mansion |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Shadow People | 70 | 20 | 35 | 36 | 40 | 48 | 10 | 15 | 100 | U | － | × | ○ | ○ | 30 | 30 | 30 | 30 | 30 | 30 | 5 | 9 | 2 | Demon's Mansion |
| Self-proclaimed Demon King | 200 | 30 | 50 | 40 | 50 | 48 | 10 | 15 | 130 | － | － | － | ○ | × | 30 | 70 | 70 | 70 | 70 | 70 | 9 | 30 | 2 | Demon's Mansion |
| House Guard | 8k | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Treant | 180 | 10 | 50 | 18 | 40 | 43 | 8 | 100 | 80 | － | × | ○ | － | － | 90 | 70 | 70 | 70 | 70 | 70 | 8 | 16 | 0 | Around Ghost Village |
| Elite Mage | 90 | 30 | 35 | 36 | 50 | 64 | 10 | 10 | 100 | － | － | － | × | － | 70 | 70 | 70 | 70 | 90 | 70 | 7 | 19 | 1 | Around Ghost Village |
| Surfacing Shark | 120 | 20 | 60 | 45 | 30 | 37 | 9 | 10 | 90 | － | × | － | － | × | 70 | 70 | 70 | 90 | 70 | 90 | 11 | 14 | 0 | Around Ghost Village |
| Swamp Lord | 120 | 20 | 60 | 45 | 30 | 37 | 9 | 30 | 120 | － | － | － | － | － | 70 | 50 | 50 | 90 | 70 | 90 | 11 | 16 | 1 | Around Ghost Village |
| Saint Bird | 110 | 30 | 60 | 45 | 60 | 0 | 10 | 40 | 45 | 30 | 37 | 8 | 10 | 130 | － | － | － | － | － | 70 | 90 | 90 | 0 | 70 | 70 | 6 | 13 | 0 | Demon's Mansion |
| Demon Pastry | 60 | 20 | 30 | 31 | 35 | 48 | 12 | 5 | 130 | － | － | × | ○ | － | 70 | 50 | 50 | 70 | 70 | 70 | 5 | 10 | 1 | Demon's Mansion |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Treant | 180 | 10 | 50 | 18 | 40 | 43 | 8 | 100 | 80 | － | × | ○ | － | － | 90 | 70 | 70 | 70 | 70 | 70 | 8 | 16 | 0 | Around Ghost Village |
| Elite Mage | 90 | 30 | 35 | 36 | 50 | 64 | 10 | 10 | 100 | － | － | － | × | － | 70 | 70 | 70 | 70 | 90 | 70 | 7 | 19 | 1 | Around Ghost Village |
| Surfacing Shark | 120 | 20 | 60 | 45 | 30 | 37 | 9 | 10 | 90 | － | × | － | － | × | 70 | 70 | 70 | 90 | 70 | 90 | 11 | 14 | 0 | Around Ghost Village |
| Swamp Lord | 120 | 20 | 60 | 45 | 30 | 37 |64 | 12 | 5 | 70 | － | － | ○ | × | － | 50 | 70 | 70 | 50 | 70 | 50 | 13 | 20 | 1 | Around Trial Cave |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Bloodsucker | 100 | 30 | 60 | 54 | 50 | 75 | 10 | 10 | 100 | U | － | × | ○ | ○ | 50 | 50 | 50 | 50 | 50 | 50 | 17 | 15 | 2 | Trial Cave |
| Two-Armed Warrior | 140 | 20 | 80 | 45 | 30 | 32 | 9 | 20 | 100 | － | － | － | － | － | 70 | 90 | 90 | 70 | 70 | 70 | 19 | 22 | 0 | Trial Cave |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| High Healer | 160 | 40 | 60 | 45 | 70 | 86 | 9 | 10 | 100 | － | － | － | － | ○ | 70 | 70 | 70 | 70 | 70 | 70 | 32 | 38 | 0 | Rustling Forest |
| Super Treant | 350 | 30 | 80 | 36 | 50 | 64 | 8 | 100 | 80 | － | × | ○ | － | × | 90 | 70 | 70 | 70 | 70 | 70 | 34 | 28 | 1 | Rustling Forest |
| Forest Knight | 190 | 30 | 90 | 90 | 50 | 75 | 10 | 20 | 70 | － | × | ○ | － | － |  9 | 30 | 120 | － | － | － | － | － | 70 | 50 | 50 | 90 | 70 | 90 | 11 | 16 | 1 | Around Ghost Village |
| Saint Bird | 110 | 30 | 60 | 45 | 60 | 64 | 12 | 5 | 70 | － | － | ○ | × | － | 50 | 70 | 70 | 50 | 70 | 50 | 13 | 20 | 1 | Around Trial Cave |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Bloodsucker | 100 | 30 | 60 | 54 | 50 | 75 | 10 | 10 | 100 | U | － | × | ○ | ○ | 50 | 50 | 50 | 50 | 50 | 50 | 17 | 15 | 2 | Trial Cave |
| Two-Armed Warrior | 140 | 20 | 80 | 45 | 30 | 32 | 9 | 20 | 100 | － | － | － | － | － | 70 | 90 | 90 | 70 | 70 | 70 | 19 | 22 | 0 | Trial Cave |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| High Healer | 160 | 40 | 60 | 45 | 70 | 86 | 9 | 10 | 100 | － | － | － | － | ○ | 70 | 70 | 70 | 70 | 70 | 70 | 32 | 38 | 0 | Rustling Forest |
| Super Treant | 350 | 30 | 80 | 36 | 50 | 64 | 8 | 100 | 80 | － | × | ○ | － | × | 90 | 70 | 70 | 70 | 70 | 70 | 34 | 28 | 1 | Rustling Forest |
| Forest Knight | 190 | 30 | 90 | 90 | 50 | 75 | 10 | 20 | 70 | －50 | 50 | 50 | 50 | 50 | 50 | 31 | 37 | 1 | Rustling Forest |
| Whirlwind User | 180 | 30 | 70 | 54 | 70 | 81 | 10 | 10 | 100 | － | － | － | × | － | 70 | 90 | 90 | 70 | 70 | 90 | 29 | 40 | 1 | Rustling Forest |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Creeping Darkness | 320 | 50 | 100 | 81 | 90 | 75 | 9 | 10 | 100 | U | － | × | ○ | － | 50 | 70 | 70 | 50 | 70 | 70 | 51 | 50 | 2 | Around Warrior's Village |
| Cleanup | 210 | 30 | 90 | 81 | 50 | 64 | 10 | 5 | 100 | － | ○ | － | － | × | 90 | 70 | 70 | 90 | 70 | 70 | 42 | 60 | 0 | Around Warrior's Village |
| Relaxed Snake | 240 | | × | ○ | － | － | 50 | 50 | 50 | 50 | 50 | 50 | 31 | 37 | 1 | Rustling Forest |
| Whirlwind User | 180 | 30 | 70 | 54 | 70 | 81 | 10 | 10 | 100 | － | － | － | × | － | 70 | 90 | 90 | 70 | 70 | 90 | 29 | 40 | 1 | Rustling Forest |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Creeping Darkness | 320 | 50 | 100 | 81 | 90 | 75 | 9 | 10 | 100 | U | － | × | ○ | － | 50 | 70 | 70 | 50 | 70 | 70 | 51 | 50 | 2 | Around Warrior's Village |
| Cleanup | 210 | 30 | 90 | 81 | 50 | 64 | 10 | 5 | 100 | － | ○ | － | － | × | 90 | 70 | 70 | 90 | 70 | 70 | 42 | 60 | 0 | Around Warrior's Village |
| Relaxed Snake | 240 | 40 | 80 | 72 | 60 | 64 | 10 | 20 | 120 | － | － | － | － | － | 70 | 50 | 50 | 70 | 70 | 70 | 51 | 40 | 1 | Around Warrior's Village |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Eradication Robot | 250 | 30 | 110 | 126 | 60 | 54 | 9 | 0 | 100 | － | － | － | － | － | 0 | 0 | 0 | 0 | 0 | 0 | 59 | 30 | 0 | Signboard Factory |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Desert Warrior 40 | 80 | 72 | 60 | 64 | 10 | 20 | 120 | － | － | － | － | － | 70 | 50 | 50 | 70 | 70 | 70 | 51 | 40 | 1 | Around Warrior's Village |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Eradication Robot | 250 | 30 | 110 | 126 | 60 | 54 | 9 | 0 | 100 | － | － | － | － | － | 0 | 0 | 0 | 0 | 0 | 0 | 59 | 30 | 0 | Signboard Factory |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Desert Warrior | 280 | 20 | 110 | 108 | 60 | 86 | 10 | 50 | 80 | － | － | ○ | － | － | 90 | 70 | 70 | 70 | 90 | 70 | 42 | 70 | 1 | Around Dragon's Fortress |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Healing Demon | 280 | 40 | 130 | 99 | 70 | 75 | 9 | 10 | 130 | － | － | － | ○ | － | 50 | 70 | 70 | 70 | 70 | 50 | 76 | 90 | 1 | Dragon's Fortress |
| Dragon Knight | 330 | 30 | 120 | 126 | 60 | 64 | 9 | 30 | 90 | － | ○ | － | － | － | 70 | 70 | 70 | 70 | 90 | 70 | 102 | 60 | 0 | Dragon's Fortress |
| Dark Mage | 250 | 50 | 80 | 72 | 100 | 108 | 10 | 0 | 100 | U | － | × | ○ | － | 50 | 70 | 70 | 70 | 70 | 70 | 85 | 80 | 2 | Dragon's Fortress |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Powerful Whale | 380 | 10 | 200 | 117 | 50 | 54 | 8 | 10 | 80 | － | × | － | － | × | 90 | 90 | 90 | 70 | 70 | 70 | 144 | 100 | 0 | Sea |
| Sea Guardian | 300 | 50 | 130 | 110 | 80 | 108 | 10 | 10 | 100 | － | × | ○ | － | － | 50 | 50 | 50 | 50 | 70 | 70 | 102 | 140 | 0 | Sea |
| Melon Cream Soda | 270 | 50 | 120 | 90 | 100 | 144 | 10 | 30 | 80 | － | － | － | － | ○ | 70 | 70 | 70 | 70 | 70 | 50 | 76 | 130 | 1 | Sea |
| Konpeito | 150 | 40 | 120 | 180 | 70 | 162 | 12 | 5 | 100 | － | ○ | ○ | ○ | ○ | 30 | 30 |  | 280 | 20 | 110 | 108 | 60 | 86 | 10 | 50 | 80 | － | － | ○ | － | － | 90 | 70 | 70 | 70 | 90 | 70 | 42 | 70 | 1 | Around Dragon's Fortress |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Healing Demon | 280 | 40 | 130 | 99 | 70 | 75 | 9 | 10 | 130 | － | － | － | ○ | － | 50 | 70 | 70 | 70 | 70 | 50 | 76 | 90 | 1 | Dragon's Fortress |
| Dragon Knight | 330 | 30 | 120 | 126 | 60 | 64 | 9 | 30 | 90 | － | ○ | － | － | － | 70 | 70 | 70 | 70 | 90 | 70 | 102 | 60 | 0 | Dragon's Fortress |
| Dark Mage | 250 | 50 | 80 | 72 | 100 | 108 | 10 | 0 | 100 | U | － | × | ○ | － | 50 | 70 | 70 | 70 | 70 | 70 | 85 | 80 | 2 | Dragon's Fortress |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Powerful Whale | 380 | 10 | 200 | 117 | 50 | 54 | 8 | 10 | 80 | － | × | － | － | × | 90 | 90 | 90 | 70 | 70 | 70 | 144 | 100 | 0 | Sea |
| Sea Guardian | 300 | 50 | 130 | 110 | 80 | 108 | 10 | 10 | 100 | － | × | ○ | － | － | 50 | 50 | 50 | 50 | 70 | 70 | 102 | 140 | 0 | Sea |
| Melon Cream Soda | 270 | 50 | 120 | 90 | 100 | 144 | 10 | 30 | 80 | － | － | － | － | ○ | 70 | 70 | 70 | 70 | 70 | 50 | 76 | 130 | 1 | Sea |
| Konpeito | 150 | 40 | 120 | 180 | 70 | 162 | 12 | 5 | 100 | － | ○ | ○ | ○ | ○ | 30 | 30 | 30 | 30 | 30 | 30 | 93 | 100 | 1 | Sea |
| Raging Squid | 310 | 20 | 150 | 100 | 70 | 90 | 10 | 20 | 100 | U | × | × | ○ | － | 70 | 90 | 90 | 70 | 70 | 90 | 127 | 70 | 2 | Sea |
| Water Dragon | 800 | 50 | 160 | 108 | 70 | 90 | 9 | 10 | 100 | － | × | － | － | × | 50 | 70 | 70 | 50 | 70 | 70 | 250 | 350 | 1 | Sea |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Strong-Armed Swordsman | 350 | 30 |30 | 30 | 30 | 30 | 93 | 100 | 1 | Sea |
| Raging Squid | 310 | 20 | 150 | 100 | 70 | 90 | 10 | 20 | 100 | U | × | × | ○ | － | 70 | 90 | 90 | 70 | 70 | 90 | 127 | 70 | 2 | Sea |
| Water Dragon | 800 | 50 | 160 | 108 | 70 | 90 | 9 | 10 | 100 | － | × | － | － | × | 50 | 70 | 70 | 50 | 70 | 70 | 250 | 350 | 1 | Sea |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Strong-Armed Swordsman | 350 | 30 | 150 | 150 | 70 | 81 | 10 | 10 | 90 | － | － | － | × | － | 70 | 70 | 70 | 90 | 90 | 0 | 170 | 100 | 0 | Around Immortal Mountain |
| Creeping Fighting Spirit | 300 | 30 | 150 | 110 | 100 | 90 | 11 | 10 | 100 | U | － | × | ○ | － | 70 | 90 | 90 | 70 | 50 | 70 | 119 | 130 | 2 | Around Immortal Mountain |
| Guardian | 600 | 50 | 170 | 180 | 100 | 144 | 10 | 5 | 110 | － | － | － | － | ○ | 50 | 70 | 70 | 70 | 50 | 70 | 297 | 200 | 1 | Around Trial Tower |
| Bandit King | 400 | 30 | 145 | 117 | 70 | 54 | 9 | 20 | 120 | － | － | － | － | × | 90 | 70 | 70 | 70 | 70 | 70 | 110 | 150 | 0 | Around Immortal Mountain |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Flame User | 320 | 50 | 120 | 90 | 120 | 135 | 10 | 5 | 100 | － | ○ | － | － | － | 70 | 90 | 90 | 70 | 70 | 70 | 232 | 170 | 0 | Immortal Mountain |
| Threatening Noppera | 360 | 30 | 150 | 110 | 100 | 103 | 10 | 5 | 100 | U | － | × | ○ | － | 50 | 50 | 50 | 70 | 70 | 70 | 160 | 130 | 1 | Immortal Mountain |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Miracle Tree | 600 | 60 | 160 | 80 | 100 | 108 | 8 | 100 | 80 | － | × | － | － | ○ | 70 | 70 | 70 | 70 | 70 | 70 | 190 | 140 | 0 | Treasure Cave |
| Bounty Hunter | 430 | 30 | 160 | 120 | 80 | 90 | 11 | 0 | 110 | － | － | － | － | － | 70 | 90 | 90 | 70 | 70 | 90 | 127 | 240 | 0 | Treasure Cave |
| Treasure Guardian | 400 | 40 | 150 | 120 | 110 | 117 | 10 | 0 | 100 | U | － | × | ○ | － | 70 | 70 | 70 | 50 | 70 | 70 | 161 | 150 | 2 | Treasure Cave |
| Ogre Head | 380 | 50 | 14 150 | 150 | 70 | 81 | 10 | 10 | 90 | － | － | － | × | － | 70 | 70 | 70 | 90 | 90 | 0 | 170 | 100 | 0 | Around Immortal Mountain |
| Creeping Fighting Spirit | 300 | 30 | 150 | 110 | 100 | 90 | 11 | 10 | 100 | U | － | × | ○ | － | 70 | 90 | 90 | 70 | 50 | 70 | 119 | 130 | 2 | Around Immortal Mountain |
| Guardian | 600 | 50 | 170 | 180 | 100 | 144 | 10 | 5 | 110 | － | － | － | － | ○ | 50 | 70 | 70 | 70 | 50 | 70 | 297 | 200 | 1 | Around Trial Tower |
| Bandit King | 400 | 30 | 145 | 117 | 70 | 54 | 9 | 20 | 120 | － | － | － | － | × | 90 | 70 | 70 | 70 | 70 | 70 | 110 | 150 | 0 | Around Immortal Mountain |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Flame User | 320 | 50 | 120 | 90 | 120 | 135 | 10 | 5 | 100 | － | ○ | － | － | － | 70 | 90 | 90 | 70 | 70 | 70 | 232 | 170 | 0 | Immortal Mountain |
| Threatening Noppera | 360 | 30 | 150 | 110 | 100 | 103 | 10 | 5 | 100 | U | － | × | ○ | － | 50 | 50 | 50 | 70 | 70 | 70 | 136 | 130 | 1 | Immortal Mountain |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Miracle Tree | 600 | 60 | 160 | 80 | 100 | 108 | 8 | 100 | 80 | － | × | － | － | ○ | 70 | 70 | 70 | 70 | 70 | 70 | 190 | 140 | 0 | Treasure Cave |
| Bounty Hunter | 430 | 30 | 160 | 120 | 80 | 90 | 11 | 0 | 110 | － | － | － | － | － | 70 | 90 | 90 | 70 | 70 | 90 | 127 | 240 | 0 | Treasure Cave |
| Treasure Guardian | 400 | 40 | 150 | 120 | 110 | 117 | 10 | 0 | 100 | U | － | × | ○ | － | 70 | 70 | 70 | 50 | 70 | 70 | 161 | 150 | 2 | Treasure Cave |
| Ogre Head | 380 | 50 | 140 | 140 | 100 | 144 | 10 | 0 | 100 | U | － | × | ○ | － | 70 | 70 | 70 | 70 | 70 | 50 | 180 | 140 | 1 | Treasure Cave |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Exp | S | BP | Appearance Location |
| Phoenix Bird | 440 | 70 | 160 | 100 | 130 | 162 | 13 | 10 | 90 | － | ○ | ○ | × | － | 70 | 70 | 70 | 50 | 70 | 70 | 238 | 300 | 0 | Trial Tower |
| Fire Dragon | 1100 | 80 | 190 | 160 | 100 | 117 | 10 | 10 | 100 | － | ○ | － | － | × | 50 | 70 | 70 | 70 | 70 | 70 | 700 | 500 | 1 | Trial Tower |
| Hell Knight | 450 | 40 | 200 | 180 | 90 | 117 | 9 | 5 | 100 | U | － | × | ○ | － | 50 | 50 | 50 | 70 | 0 | 140 | 100 | 144 | 10 | 0 | 100 | U | － | × | ○ | － | 70 | 70 | 70 | 70 | 70 | 50 | 180 | 140 | 1 | Treasure Cave |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Phoenix Bird | 440 | 70 | 160 | 100 | 130 | 162 | 13 | 10 | 90 | － | ○ | ○ | × | － | 70 | 70 | 70 | 50 | 70 | 70 | 238 | 300 | 0 | Trial Tower |
| Fire Dragon | 1100 | 80 | 190 | 160 | 100 | 117 | 10 | 10 | 100 | － | ○ | － | － | × | 50 | 70 | 70 | 70 | 70 | 70 | 700 | 500 | 1 | Trial Tower |
| Hell Knight | 450 | 40 | 200 | 180 | 90 | 117 | 9 | 5 | 100 | U | － | × | ○ | － | 50 | 50 | 50 | 70 | 90 | 70 | 300 | 280 | 1 | Trial Tower |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Slaughter Machine | 500 | 30 | 220 | 280 | 80 | 90 | 11 | 0 | 100 | － | － | － | － | － | 0 | 0 | 0 | 0 | 0 | 0 | 480 | 250 | 0 | Mirror Hall |
| Mocking Moon | 600 | 50 | 160 | 140 | 180 | 144 | 10 | 10 | 150 | － | － | ○ | － | － | 50 | 50 | 50 | 50 | 50 | 50 | 595 | 600 | 1 | Mirror Hall |
| Ancient Folk | 460 | 60 | 180 | 120 | 110 | 270 | 9 | 50 | 100 | U | － | × | ○ | ○ | 70 | 70 | 70 | 70 | 70 | 70 | 382 | 350 | 2 | Mirror Hall |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Demon King's Minion | 620 | 60 | 170 | 140 | 110 | 144 | 10 | 10 | 130 | － | － | － | ○ | － | 50 | 50 | 50 | 70 | 70 | 70 | 425 | 500 | 1 | Golden Demon King's Castle |
| Bullet Star | 570 | 50 | 230 | 160 | 100 | 126 | 11 | 10 | 80 | － | ○ | ○ | － | － | 70 | 70 | 70 | 70 | 90 | 70 | 510 | 400 | 1 | Golden Demon King's Castle |
| Gold Glove | 550 | 50 | 200 | 220 | 80 | 126 | 10 | 20 | 100 | － | － | － | × | － | 70 | 70 | 70 | 70 | 70 | 90 | 255 | 800 | 0 | Golden Demon King's Castle |
| Ancient Mage | 530 | 80 | 160 | 110 | 130 | 171 | 9 | 30 | 100 | U | － | × | ○ | － | 70 | 50 | 50 | 50 | 70 | 70 | 595 | 300 | 2 | Golden Demon King's Castle |
| Strongest Whale | 800 | 30 | 270 | 150 | 80 | 90 | 8 | 20 | 100 | － | × | － | × | × | 70 | 70 | 70 | 70 | 70 | 70 | 730 | 500 | 0 | Golden Demon King's Castle |
| Chosen One | 750 | 40 | 240 | 200 | 110 | 108 | 10 | 10 | 100 | － | － | ○ | － | － | 50 | 50 | 50 | 50 | 50 | 50 | 600 | 700 | 0 | Golden Demon King's Castle |
| Demon King Beryl | 2000 | 100 | 210 | 150 | 150 | 135 | 10 | 0 | 100 | U | － | × | ○ | － | 20 | 20 | 20 | 20 | 20 | 20 | 3600 | 2000 | 3 | Golden Demon King's Castle |
| Name (2nd Playthrough below) | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Suzuki-kun | 26 | 0 | 25 | 190 | 70 | 300 | 280 | 1 | Trial Tower |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Exp | S | BP | Appearance Location |
| Slaughter Machine | 500 | 30 | 220 | 280 | 80 | 90 | 11 | 0 | 100 | － | － | － | － | － | 0 | 0 | 0 | 0 | 0 | 0 | 480 | 250 | 0 | Mirror Hall |
| Mocking Moon | 600 | 50 | 160 | 140 | 180 | 144 | 10 | 10 | 150 | － | － | ○ | － | － | 50 | 50 | 50 | 50 | 50 | 50 | 595 | 600 | 1 | Mirror Hall |
| Ancient Folk | 460 | 60 | 180 | 120 | 110 | 270 | 9 | 50 | 100 | U | － | × | ○ | ○ | 70 | 70 | 70 | 70 | 70 | 70 | 382 | 350 | 2 | Mirror Hall |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Exp | S | BP | Appearance Location |
| Demon King's Minion | 620 | 60 | 170 | 140 | 110 | 144 | 10 | 10 | 130 | － | － | － | ○ | － | 50 | 50 | 50 | 70 | 70 | 70 | 425 | 500 | 1 | Golden Demon King's Castle |
| Bullet Star | 570 | 50 | 230 | 160 | 100 | 126 | 11 | 10 | 80 | － | ○ | ○ | － | － | 70 | 70 | 70 | 70 | 90 | 70 | 510 | 400 | 1 | Golden Demon King's Castle |
| Gold Glove | 550 | 50 | 200 | 220 | 80 | 126 | 10 | 20 | 100 | － | － | － | × | － | 70 | 70 | 70 | 70 | 70 | 90 | 255 | 800 | 0 | Golden Demon King's Castle |
| Ancient Mage | 530 | 80 | 160 | 110 | 130 | 171 | 9 | 30 | 100 | U | － | × | ○ | － | 70 | 50 | 50 | 50 | 70 | 70 | 595 | 300 | 2 | Golden Demon King's Castle |
| Strongest Whale | 800 | 30 | 270 | 150 | 80 | 90 | 8 | 20 | 100 | － | × | － | × | × | 70 | 70 | 70 | 70 | 70 | 70 | 730 | 500 | 0 | Golden Demon King's Castle |
| Chosen One | 750 | 40 | 240 | 200 | 110 | 108 | 10 | 10 | 100 | － | － | ○ | － | － | 50 | 50 | 50 | 50 | 50 | 50 | 600 | 700 | 0 | Golden Demon King's Castle |
| Demon King Beryl | 2000 | 100 | 210 | 150 | 150 | 135 | 10 | 0 | 100 | U | － | × | ○ | － | 20 | 20 | 20 | 20 | 20 | 20 | 3600 | 2000 | 3 | Golden Demon King's Castle |
| Name (2nd Playthrough) | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Suzuki-kun | 26 | 0 | 25 | 15 | 24 | 24 | 8 | 0 | 100 | － | × | × | × | × | 100 | 100 | 100 | 100 | 100 | 100 | 0 | 2 | 0 | Around Sealed Village |
| Rookie Mage | 39 | 10 | 28 | 19 | 32 | 37 | 10 | 15 | 90 | － | － | － | × | － | 70 | 70 | 70 | 70 | 90 | 70 | 3 | 3 | 0 | Around Sealed Village |
| Creeping Spirit | 44 | 10 | 29 | 21 | 35 | 34 | 9 | 10 | 100 | U | － | × | ○ | － | 50 | 50 | 50 | 90 | 50 | 50 | 6 | 4 | 1 | Around Sealed Village |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Wooden Swordman | 55 | 10 | 39 | 26 | 32 | 31 | 9 | 20 | 100 | － | － | － | － | × | 90 | 90 | 90 | 70 | 70 | 70 | 6 | 8 | 0 | Trial Cave |
| Pale Noppera | 53 | 20 | 37 | 32 | 48 | 51 | 9 | 5 | 100 | U | ○ | × | ○ | × | 50 | 70 | 70 | 70 | 70 | 70 | 9 | 5 | 2 | Trial Cave |
| Boomerang Knight | 46 | 10 | 37 | 30 | 38 | 28 | 11 | 15 | 80 | － | － | － | × | － | 70 | 70 | 70 | 70 | 70 | 90 | 6 | 6 | 0 | Trial Cave |5 | 24 | 24 | 8 | 0 | 100 | － | × | × | × | × | 100 | 100 | 100 | 100 | 100 | 100 | 0 | 2 | 0 | Around Sealed Village |
| Rookie Mage | 39 | 10 | 28 | 19 | 32 | 37 | 10 | 15 | 90 | － | － | － | × | － | 70 | 70 | 70 | 70 | 90 | 70 | 3 | 3 | 0 | Around Sealed Village |
| Creeping Spirit | 44 | 10 | 29 | 21 | 35 | 34 | 9 | 10 | 100 | U | － | × | ○ | － | 50 | 50 | 50 | 90 | 50 | 50 | 6 | 4 | 1 | Around Sealed Village |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Wooden Swordman | 55 | 10 | 39 | 26 | 32 | 31 | 9 | 20 | 100 | － | － | － | － | × | 90 | 90 | 90 | 70 | 70 | 70 | 6 | 8 | 0 | Trial Cave |
| Pale Noppera | 53 | 20 | 37 | 32 | 48 | 51 | 9 | 5 | 100 | U | ○ | × | ○ | × | 50 | 70 | 70 | 70 | 70 | 70 | 9 | 5 | 2 | Trial Cave |
| Boomerang Knight | 46 | 10 | 37 | 30 | 38 | 28 | 11 | 15 | 80 | － | － | － | × | － | 70 | 70 | 70 | 70 | 70 | 90 | 6 | 6 | 0 | Trial Cave |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Dried Snake | 78 | 20 | 49 | 37 | 64 | 48 | 10 | 50 | 110 | － | ○ | ○ | － | － | 70 | 50 | 50 | 70 | 70 | 90 | 12 | 10 | 0 | Around Demon's Mansion |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Shadow People | 91 | 20 | 49 | 43 | 64 | 72 | 10 | 15 | 100 | U | － | × | ○ | ○ | 30 | 30 | 30 | 30 | 30 | 30 | 15 | 9 | 2 | Demon's Mansion |
| Self-proclaimed Demon King | 260 | 30 | 70 | 48 | 80 | 72 | 10 | 15 | 130 | － | － | － | ○ | × | 30 | 70 | 70 | 70 | 70 | 70 | 27 | 30 | 2 | Demon's Mansion |
| House Guard | 104 | 10 | 56 | 54 | 48 | 55 | 8 | 10 | 130 | － | － | － | － | － | 70 | 90 | 90 | 0 | 70 | 70 | 18 | 13 | 0 | Demon's Mansion |
| Demon Pastry | 78 | 20 | 42 | 37 | 56 | 72 | 12 | 5 | 130 | － | － | × | ○ | － | 70 | 50 | 50 | 70 | 70 | 70 | 15 | 10 | 1 | Demon's Mansion |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Treant | 234 | 10 | 70 | 21 | 64 | 64 | 8 | 100 | 80 | － | × | ○ | － | － | 90 | 70 | 70 | 70 | 70 | 70 | 24 | 16 | 0 | Around Ghost Village |
| Elite Mage | 117 | 30 | 49 | 43 | 80 | 96 | 10 | 10 | 100 | － | － | － | × | － | 70 | 70 | 70 | 70 | 90 | 70 | 21 | 19 | 1 | Around Ghost Village |
| Surfacing Shark | 156 | 20 | 84 | 54 | 48 | 55 | 9 | 10 | 90 | － | × | － | － | × | 70 | 70 | 70 | 90 | 70 | 90 | 33 | 14 | 0 | Around Ghost Village |
| Swamp Lord | 156 | 20 | 84 | 54 | 48 | 55 | 9 | 30 | 120 | － | － | － | － | － | 70 | 50 | 50 | 90 | 70 | 90 | 33 | 16 | 1 | Around Ghost Village |
| Saint Bird | 143 | 30 | 84 | 54 | 96 | 96 | 12 | 5 | 70 | － | － | ○ | × | － | 50 | 70 | 70 | 50 | 70 | 50 | 39 | 20 | 1 | Around Trial Cave |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Bloodsucker | 130 | 30 | 84 | 64 | 80 | 112 | 10 | 10 | 100 | U | － | × | ○ | ○ | 50 | 50 | 50 | 50 | 50 | 50 | 51 | 15 | 2 | Trial Cave |
| Two-Armed Warrior | 182 | 20 | 112 | 54 | 48 | 48 | 9 | 20 | 100 | － | － | － | － | － | 70 | 90 | 90 | 70 | 70 | 70 | 57 | 22 | 0 | Trial Cave |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| High
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Exp | S | BP | Appearance Location |
| Dried Snake | 78 | 20 | 49 | 37 | 64 | 48 | 10 | 50 | 110 | － | ○ | ○ | － | － | 70 | 50 | 50 | 70 | 70 | 90 | 12 | 10 | 0 | Around Demon's Mansion |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Exp | S | BP | Appearance Location |
| Shadow People | 91 | 20 | 49 | 43 | 64 | 72 | 10 | 15 | 100 | U | － | × | ○ | ○ | 30 | 30 | 30 | 30 | 30 | 30 | 15 | 9 | 2 | Demon's Mansion |
| Self-proclaimed Demon King | 260 | 30 | 70 | 48 | 80 | 72 | 10 | 15 | 130 | － | － | － | ○ | × | 30 | 70 | 70 | 70 | 70 | 70 | 27 | 30 | 2 | Demon's Mansion |
| House Guard | 104 | 10 | 56 | 54 | 48 | 55 | 8 | 10 | 130 | － | － | － | － | － | 70 | 90 | 90 | 0 | 70 | 70 | 18 | 13 | 0 | Demon's Mansion |
| Demon Pastry | 78 | 20 | 42 | 37 | 56 | 72 | 12 | 5 | 130 | － | － | × | ○ | － | 70 | 50 | 50 | 70 | 70 | 70 | 15 | 10 | 1 | Demon's Mansion |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Exp | S | BP | Appearance Location |
| Treant | 234 | 10 | 70 | 21 | 64 | 64 | 8 | 100 | 80 | － | × | ○ | － | － | 90 | 70 | 70 | 70 | 70 | 70 | 24 | 16 | 0 | Around Ghost Village |
| Elite Mage | 117 | 30 | 49 | 43 | 80 | 96 | 10 | 10 | 100 | － | － | － | × | － | 70 | 70 | 70 | 70 | 90 | 70 | 21 | 19 | 1 | Around Ghost Village |
| Surfacing Shark | 156 | 20 | 84 | 54 | 48 | 55 | 9 | 10 | 90 | － | × | － | － | × | 70 | 70 | 70 | 90 | 70 | 90 | 33 | 14 | 0 | Around Ghost Village |
| Swamp Lord | 156 | 20 | 84 | 54 | 48 | 55 | 9 | 30 | 120 | － | － | － | － | － | 70 | 50 | 50 | 90 | 70 | 90 | 33 | 16 | 1 | Around Ghost Village |
| Saint Bird | 143 | 30 | 84 | 54 | 96 | 96 | 12 | 5 | 70 | － | － | ○ | × | － | 50 | 70 | 70 | 50 | 70 | 50 | 39 | 20 | 1 | Around Trial Cave |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Bloodsucker | 130 | 30 | 84 | 64 | 80 | 112 | 10 | 10 | 100 | U | － | × | ○ | ○ | 50 | 50 | 50 | 50 | 50 | 50 | 51 | 15 | 2 | Trial Cave |
| Two-Armed Warrior | 182 | 20 | 112 | 54 | 48 | 48 | 9 | 20 | 100 | － | － | － | － | － | 70 | 90 | 90 | 70 | 70 | 70 | 57 | 22 | 0 | Trial Cave |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Exp | S | BP | Appearance Location |
| High Healer | 208 | 40 | 84 | 54 | 112 | 129 | 9 | 10 | 100 | － | － | － | － | ○ | 70 | 70 | 70 | 70 | 70 | 70 | 96 | 38 | 0 | Rustling Forest |
| Super Treant | 455 | 30 | 112 | 43 | 80 | 96 | 8 | 100 | 80 | － | × | ○ | － | × | 90 | 70 | 70 | 70 | 70 | 70 | 102 | 28 | 1 | Rustling Forest |
| Forest Knight | 247 | 30 | 125 | 108 | 80 | 112 | 10 | 20 | 70 | － | × | ○ | － | － | 50 | 50 | 50 | 50 | 50 | 50 | 93 | 37 | 1 | Rustling Forest |
| Whirlwind User | 234 | 30 | 98 | 64 | 112 | 121 | 10 | 10 | 100 | － | － | － | × | － | 70 | 90 | 90 | 70 | 70 | 90 | 87 | 40 | 1 | Rustling Forest |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Creeping Darkness | 416 | 50 | 140 | 97 | 144 | 112 | 9 | 10 | 100 | U | － | × | ○ | － | 50 | 70 | 70 | 50 | 70 | 70 | 153 | 50 | 2 | Around Warrior's Village |
| Cleanup | 273 | 30 | 125 | 97 | 80 | 96 | 10 | 5 | 100 | － | ○ | － | － | × | 90 | 70 | 70 | 90 | 70 | 70 | 126 | 60 | 0 | Around Warrior's Village |
| Relaxed Snake | 312 | 40 | 112 | 86 | 96 | 96 | 10 | 20 | 120 | － | － | － | － | － | 70 | 50 | 50 | 70 | 70 | 70 | 153 | 40 | 1 | Around Warrior's Village |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Eradication Robot | 325 | 30 | 154 | 151 | 96 | 81 | 9 | 0 | 100 | － | － | － | － | － | 0 | 0 | 0 | 0 | 0 | 0 | 177 | 30 | 0 | Signboard Factory |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp Healer | 208 | 40 | 84 | 54 | 112 | 129 | 9 | 10 | 100 | － | － | － | － | ○ | 70 | 70 | 70 | 70 | 70 | 70 | 96 | 38 | 0 | Rustling Forest |
| Super Treant | 350 | 30 | 112 | 43 | 80 | 96 | 8 | 100 | 80 | － | × | ○ | － | × | 90 | 70 | 70 | 70 | 70 | 70 | 102 | 28 | 1 | Rustling Forest |
| Forest Knight | 247 | 30 | 125 | 108 | 80 | 112 | 10 | 20 | 70 | － | × | ○ | － | － | 50 | 50 | 50 | 50 | 50 | 50 | 93 | 37 | 1 | Rustling Forest |
| Whirlwind User | 234 | 30 | 98 | 64 | 112 | 121 | 10 | 10 | 100 | － | － | － | × | － | 70 | 90 | 90 | 70 | 70 | 90 | 87 | 40 | 1 | Rustling Forest |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Creeping Darkness | 416 | 50 | 140 | 97 | 144 | 112 | 9 | 10 | 100 | U | － | × | ○ | － | 50 | 70 | 70 | 50 | 70 | 70 | 153 | 50 | 2 | Around Warrior's Village |
| Cleanup | 273 | 30 | 125 | 97 | 80 | 96 | 10 | 5 | 100 | － | ○ | － | － | × | 90 | 70 | 70 | 90 | 70 | 70 | 126 | 60 | 0 | Around Warrior's Village |
| Relaxed Snake | 312 | 40 | 112 | 86 | 96 | 96 | 10 | 20 | 120 | － | － | － | － | － | 70 | 50 | 50 | 70 | 70 | 70 | 153 | 40 | 1 | Around Warrior's Village |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Eradication Robot | 325 | 30 | 154 | 151 | 96 | 81 | 9 | 0 | 100 | － | － | － | － | － | 0 | 0 | 0 | 0 | 0 | 0 | 177 | 30 | 0 | Signboard Factory |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Desert Warrior | 364 | 20 | 154 | 129 | 96 | 129 | 10 | 50 | 80 | － | － | ○ | － | － | 90 | 70 | 70 | 70 | 90 | 70 | 126 | 70 | 1 | Around Dragon's Fortress |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Healing Demon | 364 | 40 | 182 | 118 | 112 | 112 | 9 | 10 | 130 | － | － | － | ○ | － | 50 | 70 | 70 | 70 | 70 | 50 | 228 | 90 | 1 | Dragon's Fortress |
| Dragon Knight | 429 | 30 | 168 | 151 | 96 | 96 | 9 | 30 | 90 | － | ○ | － | － | － | 70 | 70 | 70 | 70 | 90 | 70 | 306 | 60 | 0 | Dragon's Fortress |
| Dark Mage | 325 | 50 | 112 | 86 | 160 | 162 | 10 | 0 | 100 | U | － | × | ○ | － | 50 | 70 | 70 | 70 | 70 | 70 | 255 | 80 | 2 | Dragon's Fortress |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Powerful Whale | 494 | 10 | 280 | 140 | 80 | 81 | 8 | 10 | 80 | － | × | － | － | × | 90 | 90 | 90 | 70 | 70 | 70 | 432 | 100 | 0 | Sea |
| Sea Guardian | 390 | 50 | 182 | 132 | 128 | 162 | 10 | 10 | 100 | － | × | ○ | － | － | 50 | 50 | 50 | 50 | 70 | 70 | 306 | 140 | 0 | Sea |
| Melon Cream Soda | 351 | 50 | 168 | 108 | 160 | 216 | 10 | 30 | 80 | －   | －   | －   | －   | ○   | 70  | 70  | 70  | 70  | 70  | 50  | 228 | 130 | 1   | Sea        |
| Konpeito | 195 | 40 | 168 | 216 | 112 | 243 | 12 | 5 | 100 | － | ○ | ○ | ○ | ○ | 30 | 30 | 30 | 30 | 30 | 30 | 279 | 100 | 1 | Sea |
| Raging Squid | 403 | 20 | 210 | 120 | 112 | 135 | 10 | 20 | 100 | U | × | × | ○ | － | 70 | 90 | 90 | 70 | 70 | 90 | 381 | 70 | 2 | Sea |
| Water Dragon | 1040 | 50 | 224 | 129 | 112 | 135 | 9 | 10 | 100 | － | × | － | － | × | 50 | 70 | 70 | 50 | 70 | 70 | 750 | 350 | 1 | Sea |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Strong-Armed Swordsman | 455 | 30 | 210 | 180 | 112 | 121 | 10 | 10 | 90 | － | － | － | × | － | 70 | 70 | 70 | 90 | 90 | 0 | 510 | 100 | 0 | Around Immortal Mountain |
| Creeping Fighting Spirit | 390 | 30 | 210 | 132 | 160 | 135 | 11 | 10 | 100 | U | － | × | ○ | － | 70 | 90 | 90 | 70 | 50 | 70 | 357 | 130 | 2 | Around Immortal Mountain |
| Guardian | 780 | 50 | 237 | 216 | 160 | 216 | 10 | 5 | 110 | － | － | － | － | ○ | 50 | 70 | 70 | 70 | 50 | 70 | 891 | 200 | 1 | Around Trial Tower |
| Bandit King | 520 | 30 | 203 | 140 | 112 | 81 | 9 | 20 | 120 | － | － | － | － | × | 90 | 70 | 70 | 70 | 70 | 70 | 330 | 150 | 0 | Around Immortal Mountain |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance | S | BP | Appearance Location |
| Desert Warrior | 364 | 20 | 154 | 129 | 96 | 129 | 10 | 50 | 80 | － | － | ○ | － | － | 90 | 70 | 70 | 70 | 90 | 70 | 126 | 70 | 1 | Around Dragon's Fortress |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Healing Demon | 364 | 40 | 182 | 118 | 112 | 112 | 9 | 10 | 130 | － | － | － | ○ | － | 50 | 70 | 70 | 70 | 70 | 50 | 228 | 90 | 1 | Dragon's Fortress |
| Dragon Knight | 429 | 30 | 168 | 151 | 96 | 96 | 9 | 30 | 90 | － | ○ | － | － | － | 70 | 70 | 70 | 70 | 90 | 70 | 306 | 60 | 0 | Dragon's Fortress |
| Dark Mage | 325 | 50 | 112 | 86 | 160 | 162 | 10 | 0 | 100 | U | － | × | ○ | － | 50 | 70 | 70 | 70 | 70 | 70 | 255 | 80 | 2 | Dragon's Fortress |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Exp | S | BP | Appearance Location |
| Powerful Whale | 494 | 10 | 280 | 140 | 80 | 81 | 8 | 10 | 80 | － | × | － | － | × | 90 | 90 | 90 | 70 | 70 | 70 | 432 | 100 | 0 | Sea |
| Sea Guardian | 390 | 50 | 182 | 132 | 128 | 162 | 10 | 10 | 100 | － | × | ○ | － | － | 50 | 50 | 50 | 50 | 70 | 70 | 306 | 140 | 0 | Sea |
| Melon Cream Soda | 351 | 50 | 168 | 108 | 160 | 216 | 10 | 30 | 80 | － | － | － | － | ○ | 70 | 70 | 70 | 70 | 70 | 50 | 228 | 130 | 1 | Sea |
| Konpeito | 195 | 40 | 168 | 216 | 112 | 243 | 12 | 5 | 100 | － | ○ | ○ | ○ | ○ | 30 | 30 | 30 | 30 | 30 | 30 | 279 | 100 | 1 | Sea |
| Raging Squid | 403 | 20 | 210 | 120 | 112 | 135 | 10 | 20 | 100 | U | × | × | ○ | － | 70 | 90 | 90 | 70 | 70 | 90 | 381 | 70 | 2 | Sea |
| Water Dragon | 1040 | 50 | 224 | 129 | 112 | 135 | 9 | 10 | 100 | － | × | － | － | × | 50 | 70 | 70 | 50 | 70 | 70 | 750 | 350 | 1 | Sea |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Exp | S | BP | Appearance Location |
| Strong-Armed Swordsman | 455 | 30 | 210 | 180 | 112 | 121 | 10 | 10 | 90 | － | － | － | × | － | 70 | 70 | 70 | 90 | 90 | 0 | 510 | 100 | 0 | Around Immortal Mountain |
| Creeping Fighting Spirit | 390 | 30 | 210 | 132 | 160 | 135 | 11 | 10 | 100 | U | － | × | ○ | － | 70 | 90 | 90 | 70 | 50 | 70 | 357 | 130 | 2 | Around Immortal Mountain |
| Guardian | 780 | 50 | 237 | 216 | 160 | 216 | 10 | 5 | 110 | － | － | － | － | ○ | 50 | 70 | 70 | 70 | 50 | 70 | 891 | 200 | 1 | Around Trial Tower |
| Bandit King | 520 | 30 | 203 | 140 | 112 | 81 | 9 | 20 | 120 | － | － | － | － | × | 90 | 70 | 70 | 70 | 70 | 70 | 330 | 150 | 0 | Around Immortal Mountain |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Exp | S | BP | Appearance Location |
| Flame User | 416 | 50 | 168 | 108 | 192 | 202 | 10 | 5 | 100 | － | ○ | － | － | － | 70 | 90 | 90 | 70 | 70 | 70 | 279 | 170 | 0 | Immortal Mountain |
| Threatening Noppera | 468 | 30 | 210 | 132 | 160 | 154 | 10 | 5 | 100 | U | － | × | ○ | － | 50 | 50 | 50 | 70 | 70 | 70 | 408 | 130 | 1 | Immortal Mountain |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Exp | S | BP | Appearance Location |
| Miracle Tree | 780 | 60 | 224 | 96 | 160 | 162 | 8 | 100 | 80 | － | × | － | － | ○ | 70 | 70 | 70 | 70 | 70 | 70 | 570 | 140 | 0 | Treasure Cave |
| Bounty Hunter | 559 | 30 | 224 | 144 | 128 | 135 | 11 | 0 | 110 | － | － | － | － | － | 70 | 90 | 90 | 70 | 70 | 90 | 381 | 240 | 0 | Treasure Cave |
| Treasure Guardian | 520 | 40 | 210 | 144 | 176 | 175 | 10 | 0 | 100 | U | － | × | ○ | － | 70 | 70 | 70 | 50 | 70 | 70 | 483 | 150 | 2 | Treasure Cave |
| Ogre Head | 494 | 50 | 196 | 168 | 160 | 216 | 10 | 0 | 100 | U | － | × | ○ | － | 70 | 70 | 70 | 70 | 70 | 50 | 540 | 140 | 1 | Treasure Cave |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Exp | S | BP | Appearance Location |
| Phoenix Bird | 572 | 70 | 224 | 120 | 208 | 243 | 13 | 10 | 90 | － | ○ | ○ | × | － | 70 | 70 | 70 | 50 | 70 | 70 | 714 | 300 | 0 | Trial Tower |
| Fire Dragon | 1430 | 80 | 266 | 192 | 160 | 175 | 10 | 10 | 100 | － | ○ | － | － | × | 50 | 70 | 70 | 70 | 70 | 70 | 2100 | 500 | 1 | Trial Tower |
| Hell Knight | 585 | 40 | 280 | 216 | 144 | 175 | 9 | 5 | 100 | U | － | × | ○ | － | 50 | 50 | 50 | 70 | 90 | 70 | 900 | 280 | 1 | Trial Tower |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Exp | S | BP | Appearance Location |
| Slaughter Machine | 650 | 30 | 308 | 336 | 128 | 135 | 11 | 0 | 100 | － | － | － | － | － | 0 | 0 | 0 | 0 | 0 | 0 | 1440 | 250 | 0 | Mirror Hall |
| Mocking Moon | 780 | 50 | 224 | 168 | 288 | 216 | 10 | 10 | 150 | － | － | ○ | － | － | 50 | 50 | 50 | 50 | 50 | 50 | 1785 | 600 | 1 | Mirror Hall |
| Ancient Folk | 598 | 60 | 251 | 144 | 176 | 405 | 9 | 50 | 100 | U | － | × | ○ | ○ | 70 | 70 | 70 | 70 | 70 | 70 | 1146 | 350 | 2 | Mirror Hall |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Exp | S | BP | Appearance Location |
| Demon King's Minion | 806 | 60 | 237 | 168 | 176 | 216 | 10 | 10 | 130 | － | － | － | ○ | － | 50 | 50 | 50 | 70 | 70 | 70 | 1275 | 500 | 1 | Golden Demon King's Castle |
| Bullet Star | 741 | 50 | 322 | 192 | 160 | 189 | 11 | 10 | 80 | － | ○ | ○ | － | － | 70 | 70 | 70 | 70 | 90 | 70 | 1530 | 400 | 1 | Golden Demon King's Castle |
| Gold Glove | 715 | 50 | 280 | 264 | 128 | 189 | 10 | 20 | 100 | － | － | － | × | － | 70 | 70 | 70 | 70 | 70 | 90 | 765 | 800 | 0 | Golden Demon King's Castle |
| Ancient Mage | 689 | 80 | 160 | 110 | 208 | 256 | 9 | 30 | 100 | U | － | × | ○ | － | 70 | 50 | 50 | 50 | 70 | 70 | 1785 | 300 | 2 | Golden Demon King's Castle |
| Strongest Whale | 1040 | 30 | 378 | 180 | 128 | 135 | 8 | 20 | 100 | － | × | － | × | × | 70 | 70 | 70 | 70 | 70 | 70 | 2190 | 500 | 0 | Golden Demon King's Castle |
| Chosen One | 975 | 40 | 336 | 240 | 176 | 162 | 10 | 10 | 100 | － | － | ○ | － | － | 50 | 50 | 50 | 50 | 50 | 50 | 1800 | 700 | 0 | Golden Demon King's Castle |
| Demon King Beryl | 2600 | 100 | 294 | 180 | 240 | 202 | 10 | 0 | 100 | U | － | × | ○ | － | 20 | 20 | 20 | 20 | 20 | 20 | 10800 | 2000 | 3 | Golden Demon King's Castle |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Invincible Warrior | 1235 | 60 | 420 | 264 | 176 | 229 | 11 | 15 | 100 | － | － | － | × | × | 70 | 70 | 70 | 50 | 50 | 70 | 2805 | 1000 | 0 | Fake World |
| Silver Slugger | 1105 | 50 | 448 | 192 | 144 | 165 | 11 | 5 | 100 | － | － | － | × | － | 70 | 90 | 90 | 70 | 90 | 90 | 2550 | 1100 | 0 | Fake World |
| Shield Master | 1040 | 70 | 420 | 396 | 192 | 324 | 8 | 10 | 90 | － | ○ | ○ | ○ | ○ | 50 | 70 | 70 | 70 | 70 | 70 | 3060 | 1200 | 1 | Fake World |
| God Hand | 1300 | 80 | 448 | 240 | 240 | 216 | 9 | 5 | 80 | － | － | ○ | － | × | 50 | 70 | 70 | 70 | 70 | 70 | 3825 | 600 | 1 | Fake World |
| Miracle Worker | 1430 | 80 | 336 | 84 | 208 | 202 | 8 | 100 | 100 | － | × | － | － | － | 70 | 50 | 50 | 70 | 70 | 70 | 3570 | 800 | 0 | Fake World |
| Melon Soda | 1040 | 100 | 350 | 120 | 256 | 540 | 10 | 30 | 80 | － | － | － | － | － | 50 | 50 | 50 | 50 | 50 | 50 | 3060 | 900 | 1 | Fake World |
| Astro Mage | 1105 | 90 | 308 | 144 | 208 | 270 | 10 | 10 | 120 | － | － | － | － | － | 70 | 70 | 70 | 70 | 70 | 70 | 3315 | 900 | 0 | Fake World |
| Last Spirit | 1235 | 60 | 406 | 216 | 208 | 202 | 11 | 0 | 100 | U | － | × | ○ | － | 50 | 70 | 70 | 70 | 90 | 70 | 3825 | 500 | 2 | Fake World |
| Death Dragon | 1950 | 100 | 461 | 252 | 208 | 229 | 10 | 20 | 100 | U | － | × | ○ | ○ | 0 | 20 | 20 | 20 | 20 | 20 | 7650 | 2000 | 2 | Fake World |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |