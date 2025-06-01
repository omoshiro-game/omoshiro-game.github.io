---
title: Legend of Yashiyu 4 Minion Data
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Game Walkthrough
    url: /menu_game_capture/
  - name: Rejiyashi 4
    url: /menu_game_capture/#LOY4
  - name: Legend of Yashiyu 4 Minion Data
    url: /menu_game_capture/yashiyu4_zakodata/
---

## "Legend of Yashiyu 4" Minion Data

If it's hard to see, please maximize the window.  
  
■ How to Read the Data  
・"Night" refers to the rate of change in "Attack (Atk)", "Defense (Def)", "Magic (Mag)", and "Resistance (Res)" at night. For example, 120 means the ability becomes 120% of its original value at night.  
  
・"U" indicates whether it is Undead.  
－ → Not Undead  
U → Undead  
  
・The columns from Death to Curse represent resistance to each status ailment (success probability). (※腐→"Decay")  
For status ailment skills like "Venom", this value is the skill's success probability.  
By the way, the bonus effect of non-status ailment skills is 30%, so for example, if "Poison" has a 70% success rate, it becomes 30% × 70% = 21%.  
  
・"Fire", "Light", "Dark", and "Lower" indicate elemental resistances or weaknesses.  
－ → No resistance  
○ → Resistance  
× → Weakness  
  
■ Useful to know！？ Enemy AI  
・Most enemies only use field-type skills when the field is clear.  
・If SP is insufficient, they will resort to normal attacks. (However, if SP is insufficient during a counterattack, they will do nothing).  
  
■ 2nd Playthrough and Beyond Stats  
HP = 1st Playthrough Value + 450 × (Enemy Level - 1)  
SP = 1st Playthrough Value + 100 × (Enemy Level - 1)  
Attack = 1st Playthrough Value + {270 + (270 × 100 ÷ Night Ability Change Rate)} ÷ 2 × (Enemy Level - 1)  
Defense = 1st Playthrough Value + {150 + (150 × 100 ÷ Night Ability Change Rate)} ÷ 2 × (Enemy Level - 1)  
Magic = 1st Playthrough Value + {230 + (230 × 100 ÷ Night Ability Change Rate)} ÷ 2 × (Enemy Level - 1)  
Resistance = 1st Playthrough Value + {150 + (150 × 100 ÷ Night Ability Change Rate)} ÷ 2 × (Enemy Level - 1)  
Skill Level = Enemy Level  
  
The calculation for "Attack" to "Resistance" is a bit complex, but it simply takes into account the night ability change.  
For "Attack", it increases by about 270 for every 1 enemy level.  
  
  

| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Suzuki-kun | 120 | 30 | 110 | 80 | 80 | 80 | 7 | 0 | 100 | － | × | × | × | × | 100 | 100 | 100 | 100 | 100 | 100 | 1 | 1 | 0 | Around Village of Departure |
| Common Slime | 220 | 40 | 140 | 100 | 100 | 90 | 8 | 20 | 80 | － | × | － | － | － | 70 | 50 | 50 | 70 | 70 | 70 | 2 | 3 | 0 | Around Village of Departure |
| Creeping Spirit | 240 | 40 | 140 | 100 | 120 | 120 | 9 | 10 | 100 | U | － | × | ○ | － | 50 | 50 | 50 | 90 | 50 | 50 | 3 | 4 | 1 | Around Village of Departure |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Tanaka-kun | 300 | 60 | 160 | 130 | 100 | 110 | 9 | 5 | 100 | － | × | × | × | × | 100 | 100 | 100 | 100 | 100 | 100 | 4 | 7 | 0 | Common Bridge |
| Apprentice Mage | 280 | 40 | 140 | 120 | 150 | 200 | 10 | 15 | 90 | － | － | － | － | － | 70 | 70 | 70 | 70 | 90 | 70 | 6 | 6 | 0 | Common Bridge |
| Suspicious Person | 350 | 50 | 150 | 130 | 80 | 120 | 8 | 20 | 120 | － | － | － | ○ | × | 50 | 70 | 70 | 90 | 70 | 70 | 12 | 12 | 2 | Common Bridge |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Boomerang Knight | 340 | 40 | 200 | 170 | 110 | 150 | 11 | 15 | 80 | － | － | － | × | － | 70 | 70 | 70 | 70 | 70 | 90 | 8 | 5 | 0 | Forest of No Confusion 1 |
| Nokko | 400 | 60 | 200 | 130 | 140 | 160 | 9 | 50 | 100 | － | × | ○ | － | － | 70 | 70 | 70 | 30 | 70 | 70 | 9 | 10 | 1 | Forest of No Confusion 1 |
| Poison Nokko | 450 | 60 | 180 | 110 | 120 | 140 | 9 | 50 | 100 | U | － | × | ○ | － | 70 | 30 | 30 | 90 | 90 | 70 | 13 | 9 | 2 | Forest of No Confusion 1 |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Flame Cook | 450 | 80 | 240 | 190 | 190 | 190 | 10 | 10 | 80 | － | ○ | － | × | － | 70 | 70 | 70 | 70 | 70 | 70 | 24 | 14 | 0 | Around Village of Memories |
| Minion | 540 | 40 | 250 | 160 | 110 | 60 | 8 | 15 | 120 | － | ○ | － | － | － | 70 | 90 | 90 | 70 | 70 | 70 | 22 | 15 | 0 | Around Village of Memories |
| Shadow People | 390 | 70 | 210 | 150 | 170 | 300 | 10 | 15 | 100 | U | － | × | ○ | － | 70 | 70 | 70 | 50 | 50 | 70 | 26 | 9 | 1 | Around Village of Memories |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Scrap | 500 | 0 | 200 | 300 | 0 | 0 | 9 | 0 | 100 | － | － | － | － | － | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 10 | 0 | Dark Cave |
| Bloodsucker | 470 | 80 | 230 | 180 | 180 | 160 | 10 | 10 | 100 | U | － | × | ○ | － | 70 | 50 | 50 | 50 | 50 | 50 | 39 | 15 | 2 | Dark Cave |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Nokko Knight | 520 | 80 | 250 | 200 | 160 | 180 | 10 | 20 | 100 | － | × | ○ | × | － | 50 | 50 | 50 | 70 | 70 | 70 | 83 | 20 | 0 | Tower of Fate |
| Earth Ball | 480 | 180 | 270 | 220 | 160 | 160 | 11 | 50 | 80 | － | － | － | － | － | 70 | 70 | 70 | 70 | 90 | 70 | 90 | 10 | 1 | Tower of Fate |
| Whirlwind User | 450 | 130 | 200 | 120 | 220 | 220 | 10 | 10 | 100 | － | － | － | × | － | 70 | 70 | 70 | 90 | 90 | 70 | 75 | 15 | 1 | Tower of Fate |
| High Healer | 460 | 150 | 200 | 120 | 210 | 280 | 9 | 10 | 100 | － | － | ○ | － | ○ | 70 | 70 | 70 | 70 | 70 | 70 | 60 | 25 | 0 | Tower of Fate |
| Three-in-One Sword | 500 | 70 | 260 | 200 | 140 | 180 | 12 | 0 | 110 | － | － | － | － | － | 50 | 70 | 70 | 50 | 70 | 50 | 120 | 22 | 1 | Tower of Fate |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Cleanup | 570 | 90 | 310 | 180 | 180 | 170 | 10 | 5 | 100 | － | ○ | － | － | × | 90 | 70 | 70 | 90 | 70 | 70 | 130 | 25 | 0 | Around Warrior's Village |
| Creeping Darkness | 700 | 120 | 290 | 200 | 210 | 170 | 9 | 10 | 100 | U | － | × | ○ | － | 50 | 70 | 70 | 50 | 70 | 70 | 160 | 30 | 2 | Around Warrior's Village |
| Chimera | 1200 | 200 | 250 | 180 | 160 | 180 | 10 | 30 | 120 | － | × | － | － | － | 30 | 30 | 30 | 70 | 50 | 50 | 250 | 50 | 1 | Around Warrior's Village |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Dream Tree | 800 | 130 | 260 | 100 | 170 | 160 | 8 | 100 | 120 | － | × | － | － | ○ | 30 | 50 | 50 | 50 | 50 | 50 | 150 | 45 | 0 | Food Hall |
| Dark Mage | 540 | 200 | 240 | 160 | 220 | 220 | 10 | 0 | 100 | U | ○ | × | ○ | － | 50 | 70 | 70 | 70 | 70 | 70 | 170 | 35 | 1 | Food Hall |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Eradication Robot | 800 | 100 | 350 | 400 | 0 | 0 | 9 | 0 | 100 | － | － | － | － | － | 0 | 0 | 0 | 0 | 0 | 0 | 240 | 20 | 0 | Dragon Ruins |
| Spriggan | 600 | 140 | 270 | 220 | 190 | 220 | 10 | 5 | 120 | － | ○ | ○ | － | － | 50 | 50 | 50 | 50 | 50 | 30 | 190 | 50 | 1 | Dragon Ruins |
| Dragon Knight | 700 | 120 | 300 | 230 | 160 | 180 | 9 | 30 | 90 | － | ○ | － | － | － | 70 | 70 | 70 | 70 | 90 | 70 | 200 | 40 | 0 | Dragon Ruins |
| Vengeful Saint | 600 | 160 | 250 | 180 | 220 | 250 | 10 | 10 | 80 | － | － | ○ | × | － | 70 | 70 | 70 | 70 | 70 | 70 | 180 | 70 | 0 | Dragon Ruins |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Powerful Whale | 800 | 50 | 410 | 230 | 120 | 120 | 8 | 10 | 80 | － | × | － | － | × | 90 | 90 | 90 | 70 | 70 | 70 | 360 | 55 | 0 | Sea |
| Sea Guardian | 650 | 120 | 320 | 210 | 200 | 210 | 10 | 10 | 100 | － | － | ○ | － | － | 50 | 50 | 50 | 50 | 70 | 70 | 290 | 80 | 0 | Sea |
| Melon Cream Soda | 600 | 150 | 260 | 170 | 240 | 310 | 10 | 30 | 80 | － | － | － | － | ○ | 70 | 70 | 70 | 70 | 50 | 70 | 240 | 70 | 1 | Sea |
| Konpeito | 350 | 110 | 260 | 500 | 190 | 500 | 12 | 5 | 100 | － | ○ | ○ | ○ | ○ | 70 | 70 | 70 | 70 | 70 | 70 | 270 | 65 | 1 | Sea |
| Takochu | 700 | 80 | 280 | 230 | 170 | 190 | 10 | 20 | 100 | U | × | × | ○ | － | 70 | 90 | 90 | 70 | 70 | 90 | 330 | 50 | 2 | Sea |
| Kraken | 1400 | 300 | 310 | 210 | 200 | 180 | 9 | 10 | 130 | － | × | － | － | × | 30 | 30 | 30 | 30 | 30 | 30 | 700 | 100 | 1 | Sea |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Nukinashi Ninja | 650 | 120 | 310 | 220 | 200 | 180 | 12 | 5 | 110 | － | ○ | － | － | － | 50 | 50 | 50 | 50 | 70 | 70 | 280 | 80 | 0 | Around Village of Ruin |
| Creeping Fighting Spirit | 650 | 100 | 340 | 230 | 230 | 170 | 11 | 10 | 100 | U | － | × | ○ | － | 70 | 90 | 90 | 70 | 70 | 50 | 340 | 60 | 1 | Around Village of Ruin |
| Gokaku Mash | 700 | 120 | 240 | 160 | 200 | 190 | 9 | 25 | 130 | － | × | － | － | － | 70 | 30 | 30 | 90 | 70 | 50 | 370 | 50 | 0 | Around Village of Ruin |
| Guardian | 900 | 160 | 330 | 250 | 220 | 240 | 10 | 5 | 110 | － | － | － | － | ○ | 50 | 70 | 70 | 70 | 50 | 70 | 500 | 130 | 1 | Around Village of Ruin |
| Flame User | 600 | 200 | 300 | 190 | 310 | 290 | 9 | 5 | 80 | － | ○ | － | × | － | 70 | 90 | 90 | 70 | 70 | 70 | 400 | 80 | 1 | Around Village of Ruin |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Murder Chef | 700 | 140 | 410 | 240 | 270 | 270 | 10 | 10 | 80 | － | ○ | － | × | － | 30 | 70 | 70 | 70 | 90 | 70 | 350 | 110 | 0 | Labyrinth of Flames |
| Red Scrap | 900 | 0 | 300 | 500 | 0 | 0 | 9 | 0 | 100 | － | ○ | － | － | － | 0 | 0 | 0 | 0 | 0 | 0 | 500 | 40 | 0 | Labyrinth of Flames |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Frozen Slime | 700 | 140 | 320 | 220 | 210 | 250 | 10 | 20 | 120 | － | × | ○ | － | － | 70 | 50 | 50 | 50 | 70 | 70 | 450 | 90 | 0 | Labyrinth of Ice |
| Cruel Assassin | 750 | 110 | 340 | 230 | 220 | 190 | 12 | 0 | 120 | － | － | － | － | － | 50 | 70 | 70 | 50 | 70 | 50 | 350 | 150 | 1 | Labyrinth of Ice |
| Blue Dragon | 1500 | 200 | 360 | 210 | 240 | 210 | 9 | 10 | 120 | － | × | ○ | － | × | 50 | 90 | 90 | 50 | 90 | 90 | 900 | 160 | 2 | Labyrinth of Ice |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Unexpected Swordsman | 750 | 120 | 390 | 280 | 200 | 200 | 10 | 25 | 100 | － | － | － | － | － | 90 | 90 | 90 | 70 | 70 | 70 | 550 | 100 | 0 | Labyrinth of Swords |
| Boomerang Master | 700 | 110 | 370 | 270 | 230 | 220 | 11 | 30 | 90 | － | － | － | × | ○ | 70 | 70 | 70 | 90 | 90 | 90 | 500 | 130 | 1 | Labyrinth of Swords |
| Evil Antenna | 700 | 130 | 330 | 260 | 260 | 250 | 10 | 20 | 100 | U | － | × | ○ | － | 0 | 0 | 0 | 0 | 0 | 0 | 600 | 80 | 1 | Labyrinth of Swords |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Mocking Moon | 1100 | 200 | 250 | 200 | 270 | 180 | 10 | 10 | 200 | － | － | ○ | － | － | 50 | 50 | 50 | 50 | 50 | 50 | 1000 | 200 | 0 | Labyrinth of Time |
| Sansan Sun | 1100 | 200 | 500 | 400 | 540 | 360 | 10 | 10 | 50 | － | ○ | ○ | × | － | 50 | 50 | 50 | 50 | 50 | 50 | 1000 | 200 | 0 | Labyrinth of Time |
| Sorrowful People | 650 | 160 | 330 | 300 | 250 | 600 | 9 | 50 | 100 | U | － | × | ○ | ○ | 70 | 70 | 70 | 70 | 50 | 70 | 650 | 100 | 2 | Labyrinth of Time |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Sinister Serpent | 750 | 160 | 360 | 240 | 260 | 250 | 10 | 50 | 100 | － | × | － | ○ | － | 70 | 30 | 30 | 70 | 50 | 70 | 750 | 180 | 1 | Demon King's Castle of Mind |
| Bullet Star | 750 | 150 | 440 | 270 | 300 | 230 | 11 | 10 | 100 | － | ○ | － | － | － | 70 | 70 | 70 | 70 | 90 | 70 | 850 | 150 | 0 | Demon King's Castle of Mind |
| Dark User | 700 | 250 | 240 | 160 | 280 | 300 | 9 | 5 | 150 | － | － | × | ○ | － | 50 | 70 | 70 | 70 | 70 | 70 | 700 | 220 | 1 | Demon King's Castle of Mind |
| Strongest Whale | 1000 | 110 | 550 | 320 | 200 | 200 | 8 | 20 | 70 | － | × | － | × | × | 70 | 70 | 70 | 70 | 70 | 70 | 1000 | 100 | 0 | Demon King's Castle of Mind |
| Triple Three | 650 | 190 | 410 | 300 | 230 | 300 | 12 | 20 | 100 | U | － | × | ○ | － | 50 | 70 | 70 | 50 | 50 | 50 | 900 | 200 | 2 | Demon King's Castle of Mind |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |
| Master Robo | 1000 | 100 | 500 | 600 | 0 | 0 | 9 | 0 | 100 | － | － | － | － | － | 0 | 0 | 0 | 0 | 0 | 0 | 1200 | 160 | 0 | Last Dungeon |
| Trick Man | 800 | 200 | 380 | 250 | 300 | 300 | 10 | 30 | 100 | － | － | － | － | ○ | 70 | 90 | 90 | 50 | 50 | 70 | 900 | 300 | 1 | Last Dungeon |
| Speed Star | 750 | 170 | 350 | 400 | 240 | 300 | 15 | 10 | 100 | － | － | － | × | － | 30 | 30 | 30 | 70 | 50 | 50 | 1100 | 240 | 0 | Last Dungeon |
| Legendary Mage | 800 | 300 | 350 | 260 | 420 | 420 | 10 | 20 | 70 | － | － | ○ | － | － | 70 | 70 | 70 | 70 | 70 | 70 | 1000 | 330 | 0 | Last Dungeon |
| Last Spirit | 850 | 150 | 420 | 280 | 280 | 220 | 11 | 0 | 100 | U | － | × | ○ | × | 50 | 70 | 70 | 90 | 70 | 70 | 1300 | 220 | 1 | Last Dungeon |
| Life Demon Aku | 2500 | 400 | 370 | 250 | 250 | 250 | 10 | 40 | 140 | － | － | － | － | × | 10 | 30 | 30 | 70 | 30 | 30 | 3500 | 1000 | 2 | Last Dungeon |
| Name | HP | SP | Atk | Def | Mag | Res | Rct | Spr | Night | U | Fire | Light | Dark | Lower | Death | Poison | Decay | Sleep | Seal | Curse | Exp | S | BP | Appearance Location |