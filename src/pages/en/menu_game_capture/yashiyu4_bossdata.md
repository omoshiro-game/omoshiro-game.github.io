---
title: Legend of Yashiyu 4 Boss Data
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Game Walkthrough
    url: /menu_game_capture/
  - name: Rejiyashi 4
    url: /menu_game_capture/#LOY4
  - name: Legend of Yashiyu 4 Boss Data
    url: /menu_game_capture/yashiyu4_bossdata/
---

## "Legend of Yashiyu 4" Boss Data

If it's hard to see, please maximize the window.  
  
■ How to Read the Data  
・"Type" refers to the boss type, which determines the bonus stats for the 2nd playthrough and beyond.  
  
・"Night" refers to the rate of change in "Attack (Atk)", "Defense (Def)", "Magic (Mag)", and "Resistance (Res)" at night. For example, 120 means the ability becomes 120% of its original value at night.  
  
・The single Kanji character at the beginning of each skill name indicates the skill category. (※魔→Magic Sword, 異→Status Ailment, 場→Field, no character→Other)  
  
・"Fire", "Light", "Dark", and "Lower" indicate elemental resistances or weaknesses.  
－ → No resistance  
○ → Resistance  
× → Weakness  
  
■ Useful to know！？ Enemy AI  
・Field-type skills are only used when the field is clear.  
・If SP is insufficient, they will resort to normal attacks. (However, if SP is insufficient during a counterattack, they will do nothing).  
  
■ 2nd Playthrough and Beyond Stats  
HP = 1st Playthrough Value + ○○ × (Enemy Level - 1)  
SP = 1st Playthrough Value + ○○ × (Enemy Level - 1)  
Attack = 1st Playthrough Value + {○○ + (○○ × 100 ÷ Night Ability Change Rate)} ÷ 2 × (Enemy Level - 1)  
Defense = 1st Playthrough Value + {○○ + (○○ × 100 ÷ Night Ability Change Rate)} ÷ 2 × (Enemy Level - 1)  
Magic = 1st Playthrough Value + {○○ + (○○ × 100 ÷ Night Ability Change Rate)} ÷ 2 × (Enemy Level - 1)  
Resistance = 1st Playthrough Value + {○○ + (○○ × 100 ÷ Night Ability Change Rate)} ÷ 2 × (Enemy Level - 1)  
Skill Level = Enemy Level  
  
The calculation for "Attack" to "Resistance" is a bit complex, but it simply takes into account the night ability change.  
For "Attack", it increases by about ○○ for every 1 enemy level.  
  
"○○" varies by boss type.  
Please refer to the table below.  

||HP|SP|Atk|Def|Mag|Res|
|---|---|---|---|---|---|---|
|Type A|5000|1000|420|170|560|170|
|Type B|2600|900|350|165|420|165|
|Type C|1800|800|290|160|300|160|
|Type D|1400|700|250|155|220|155|
|Type F|1000|500|140|145|120|145|
|Type G|5000|1000|370|170|340|170|

  

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Cliffside Warrior|A|1300|200|210|200|160|190|9|5|100|－|－|×|×|30|80|40|Phys Helmet Split<br>Supp Melty<br>Fire Flame Ray|

**Notes**: If HP is below half and it's early day, "Supp Melty". Status ailment resistance: "Death" 30%, others 50%.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Rojin|C|750|50|180|150|130|180|10|20|100|－|－|－|－|30|20|20|Phys Charge<br>Light Light||

**Notes**: Always targets the character with high "Attack". Status ailment resistance is all 50%.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Forest Rojin|A|2000|200|250|200|180|250|9|20|70|×|－|－|－|130|160|50|Supp Bless<br>Cure Restore<br>Heal Heal Drop<br>Ailment Venom All<br>Ailment Sleep<br>Light Drought||

**Notes**: Uses "Supp Bless" and "Ailment Venom All" once each at the beginning. Status ailment resistance: "Death" 30%, "Poison", "Decay" 30%, "Curse" 50%.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Nerlaus|C|1500|300|220|170|120|140|9|5|100|○|－|－|－|250|60|20|Mag(Dark) Darkness<br>Fire Blast<br>Supp Force||

**Notes**: Always targets characters with low "HP". May use "Supp Force" when alone and it's daytime. Status ailment resistance: "Death" 10%, others 30%.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Toukou|G|6000|1500|250|190|150|160|12|10|120|－|－|－|－|1000|300|50|Phys Ougi<br>Phys Evil Spirit<br>Phys Komainu<br>Fire Bullet<br>Dark Sphere<br>Light Screen|Ailment Decom<br>Ailment Seal|

**Notes**: Acts twice consecutively. Starts using "Phys Komainu" when HP is 70% or below.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Mage Hood|C|2500|600|250|170|250|220|10|5|100|－|－|－|－|400|100|5|Dark Dim<br>Dark Pain<br>Dark Darkness<br>Dark Scream<br>Dark Victim<br>Supp Slow||

**Notes**: Uses "Supp Slow" when it's early day. Mostly uses magic attacks.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Shadow|F|600|300|250|500|180|180|9|0|100|－|×|○|○|200|100|10|Supp Melty<br>Dark Dim||

**Notes**: Undead. Often uses "Supp Melty". Status ailment resistance is all 30%.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Modok|A|9000|1500|470|220|220|190|11|5|100|×|－|×|×|1400|700|30|Phys Charge<br>Ailment Curse<br>Nin Homura Kai<br>Ailment Gust||

**Notes**: Repeatedly uses "Ailment Gust" at night.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Toukou (2nd Time)|G|6500|2000|270|180|180|180|12|10|120|－|－|－|－|2000|1000|40|Phys Evil Spirit<br>Phys Tsumuji<br>Phys Komainu<br>Phys Orochi<br>Fire Napalm<br>Dark Pain|Light Luminar<br>Ailment Decom<br>Ailment Seal|

**Notes**: Acts twice consecutively. Starts using "Phys Komainu" when HP is 70% or below, "Phys Orochi" when 40% or below.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Flame Norfeto|A|9000|800|450|300|400|300|11|5|70|○|－|×|－|2500|2000|30|Fire Burst<br>Fire Scarlet<br>Fire Cremation<br>Fire Catastrophe<br>Mag(Fire) Guren<br>Fire Kaja|Field Oath of Fire<br>Fire Fire|

**Notes**: Counterattacks physical attacks with "Fire Fire". High chance of "Field Oath of Fire" when HP is 50% or below.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Ice Gracia|A|8000|1000|360|320|350|220|11|0|130|×|○|－|－|3000|2500|30|Phys Shiden<br>Light Starlight<br>Freeze<br>Ailment Sleep All<br>Supp Enhance<br>Supp Protect|Glacier|

**Notes**: Repeatedly uses "Glacier" when HP is 50% or below.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Sword Bersa|A|8500|800|400|250|200|200|11|20|100|－|－|－|×|3500|3000|30|Phys Tsumuji<br>Nin Raimei<br>Nin Raimei Kai<br>Phys Hisho<br>Phys Ryujin<br>Field Item Seal||

**Notes**: Attack increases by 5% every turn. High chance of "Field Item Seal" when HP is 50% or below.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Time Muta|A|7500|1100|430|300|400|400|16|0|100|－|－|－|○|4000|3500|30|Ailment Phage<br>Heal Heal Light<br>Time Shake<br>Supp Ariman<br>Supp Remove<br>Supp Slow|Light Punish<br>Dark Despair<br>Dark Demon|

**Notes**: Auxiliary-focused during the day, magic attack-focused at night. "Heal Heal Light" when HP is 50% or below.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Norfeto|D|2300|400|370|250|280|250|8|5|70|○|－|×|－|1200|3000|10|Mag(Fire) Guren<br>Fire Burst<br>Fire Scarlet<br>Fire Kaja<br>Fire Cremation<br>Fire Catastrophe|Fire Fire|

**Notes**: Counterattacks physical attacks with "Fire Fire".

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Glacia|D|2300|400|350|370|260|250|8|0|130|×|○|－|－|1200|3000|10|Phys Shiden<br>Light Starlight<br>Freeze<br>Glacier<br>Ailment Sleep<br>Supp Protect|Supp Enhance|

**Notes**: May use auxiliary skills during the day. This time, it uses "Glacier" regardless of remaining HP, but usage frequency is low.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Bersa|D|2700|350|270|250|130|200|8|20|100|－|－|－|×|1200|3000|10|Phys Tsumuji<br>Phys Hisho<br>Nin Raimei<br>Nin Raimei Kai<br>Phys Ryujin||

**Notes**: Attack increases by 5% every turn.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Muta|D|2000|500|290|300|270|400|12|0|100|－|－|－|○|1200|3000|10|Ailment Phage<br>Time Shake<br>Supp Slow<br>Supp Ariman<br>Dark Demon<br>Dark Despair|Light Punish<br>Heal Heal Light|

**Notes**: Auxiliary-focused during the day, magic attack-focused at night. "Heal Heal Light" when HP is 50% or below.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Demon King Spilt of Heart|B|5000|3000|600|400|450|400|11|10|50|－|－|－|－|3000|2000|10|Fire Kaja<br>Fire Hell<br>Light Holy<br>Light Judge<br>Dark Grimoire<br>Dark Giltea|Supp Air|

**Notes**: HP recovers by 5% every turn. May use "Supp Air" when HP is 50% or below.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Spilt Second|B|7500|3000|500|300|350|300|11|10|100|－|－|－|－|6000|4000|20|Phys Shura<br>Light Obelisk<br>Dark Chaos<br>Freeze<br>Ailment Doom<br>Ailment Phage|Taslam<br>Halmage|

**Notes**: ※Boss type was A in Ver1.41 and earlier!

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Beast Toukou|G|9000|2000|350|300|220|240|10|10|120|－|×|○|○|7000|5000|30|Phys Tsumuji<br>Phys Hisho<br>Phys Komainu<br>Phys Orochi<br>Phys Shiten<br>Dark Polter|Dark Demon|

**Notes**: Acts twice consecutively. Starts using "Phys Orochi" when HP is 70% or below, "Phys Shiten" when 40% or below.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Silver Dragon|B|6000|1000|400|5000|250|100|10|20|100|－|×|－|×|4000|3000|10|Phys Charge<br>Mag(Dark) Rasetsu<br>Nin Oboro Metsu<br>Dark Pluton<br>Dragon Breath||

**Notes**: If alone, "Dragon Breath" with nearly 50% probability.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Gold Dragon|B|6000|1000|400|100|250|5000|10|20|100|－|－|×|×|4000|3000|10|Phys Charge<br>Mag(Light) Tsukuyomi<br>Nin Raimei Metsu<br>Light Akashic<br>Dragon Breath||

**Notes**: If alone, "Dragon Breath" with nearly 50% probability.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Yason|A|6000|2000|480|330|330|330|13|50|100|－|○|－|○|8000|6000|20|Phys Murakumo<br>Fire Mars<br>Light Sephiroth<br>Ailment Seal All<br>Time Lapse<br>Heal Full Heal||

**Notes**: If HP is 50% or below, "Heal Full Heal".

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Dark Yashiyu|A|9000|2000|450|330|250|250|13|5|140|－|－|○|－|8000|6000|20|Phys Hisho<br>Phys Shura<br>Fire Scarlet<br>Dark Tomb<br>Dark Nibel<br>Supp Brave|Supp Flood|

**Notes**: Uses "Supp Brave" at regular intervals. Starts using "Dark Nibel" when HP is 50% or below.

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Mictor|F|1700|1000|400|300|330|300|10|0|20|－|○|－|－|1300|1000|3|Fire Flame<br>Light Prism<br>Light Sacred<br>Heal Heal<br>Field Dark Wall||

**Notes**: If three or fewer, "Field Dark Wall".

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Spilt Third|B|6500|1500|450|300|300|300|12|20|100|－|－|－|－|10000|5000|20|Fire Mars<br>Fire Muspel<br>Light Gungnir<br>Light Sephiroth<br>Dark End<br>Dark Nibel|Taslam<br>Filmour|

**Notes**: 

|Name|Type|HP|SP|Atk|Def|Mag|Res|Rct|Spr|Night|Fire|Light|Dark|Lower|Exp|S|BP|Skills|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Spilt Final|A|9000|3000|500|400|350|400|12|0|100|－|－|－|－|20000|0|20|Phys Murakumo<br>Mag(Fire) Phoenix<br>Mag(Light) Tsukuyomi<br>Mag(Dark) Rasetsu<br>Freeze<br>Glacier|Ailment Doom<br>Field Wandering Time<br>Charge<br>Ragnarok|

**Notes**: Always uses "Field Wandering Time" on Turn 1. Fires area magic "Ragnarok" on the next turn after "Charge".
