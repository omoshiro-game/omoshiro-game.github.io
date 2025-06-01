---
title: Legend of Yashiyu 4 Skill Data
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Game Walkthrough
    url: /menu_game_capture/
  - name: Rejiyashi 4
    url: /menu_game_capture/#LOY4
  - name: Legend of Yashiyu 4 Skill Data
    url: /menu_game_capture/yashiyu4_skilldata/
---

## "Legend of Yashiyu 4" Skill Data

■ How to Read the Data  
・The single Kanji character at the beginning of each skill name indicates the skill category. (※魔→Magic Sword, 異→Status Ailment, 場→Field, no character→Other)  
  
・Offensive (damage-dealing) skills have the following rules:  
Weapon Attack Skills (affected by "Attack" and "Defense" values) → Skills in the Weapon, Magic Sword, Ninja categories (skill name starts with "武", "魔", "忍")  
Magic Attack Skills (affected by "Magic" and "Resistance" values) → Offensive skills not in the Weapon, Magic Sword, Ninja categories  
  
■ About Skill Level  
In Rejiyashi 4, skills have a level concept.  
Basically, as skill level increases, power increases. (SP cost also increases).  
Also, for status ailment category skills, if the skill level is lower than the enemy level, the success rate decreases.  
  
● Formulas for Skill Power, SP Cost, and Learn LV based on Skill Level  
Skill Power = Skill Level 1 Power + Added Value × (Skill Level - 1)  
*Ninja category skills etc. increase not only damage but also the reduction value for opponent's "Attack" etc. The value in parentheses in the "Added Value" column is that.  
  
SP Cost = Skill Level 1 SP Cost + Added SP × (Skill Level - 1)  
  
Learn LV = Skill Level 1 Learn LV + 100 × (Skill Level - 1)  
*However, some skill levels, like "Restore", will be the same as the enemy's level. (Only SP cost increases as level goes up).  
  
● Status Ailment Category Success Rate  
Success Rate = 100 - 20 × (Enemy Level - Skill Level)  

　　　

|Name|Description|SP Cost|Added Value|Added SP|
|---|---|---|---|---|
|Phys Ougi|Damages one enemy (75)|16|75|30|
|Phys Ougi Kai|Damages one enemy (80)|18|75|30|
|Phys Evil Spirit|Damages one enemy (85) +Sleep|20|75|30|
|Phys Evil Spirit Kai|Damages one enemy (90) +Sleep|22|75|30|
|Phys Tsumuji|Damages one enemy (95)|24|75|30|
|Phys Tsumuji Kai|Damages one enemy (100)|26|75|30|
|Phys Shiden|Damages one enemy (105) +Seal|28|75|30|
|Phys Shiden Kai|Damages one enemy (110) +Seal|30|75|30|
|Phys Hisho|Damages one enemy (115)|32|75|30|
|Phys Hisho Kai|Damages one enemy (120)|34|75|30|
|Phys Shura|Damages one enemy (125) +Curse|36|75|30|
|Phys Shura Kai|Damages one enemy (130) +Curse|38|75|30|
|Phys Murakumo|Damages one enemy (140)|40|75|30|
|Phys Murakumo Kai|Damages one enemy (145)|42|75|30|
|Name|Description|SP Cost|Added Value|Added SP|
|Mag(Fire) Flame|Attacks with Fire attribute (Fire 70)|20|70|30|
|Mag(Fire) Guren|Attacks with Fire attribute (Fire 100)|32|70|30|
|Mag(Fire) Phoenix|Attacks with Fire attribute (Fire 130)|44|70|30|
|Mag(Light) Flash|Attacks with Light attribute (Light 70)|20|70|30|
|Mag(Light) Haja|Attacks with Light attribute (Light 100)|32|70|30|
|Mag(Light) Tsukuyomi|Attacks with Light attribute (Light 130)|44|70|30|
|Mag(Dark) Darkness|Attacks with Dark attribute (Dark 70)|20|70|30|
|Mag(Dark) Kikoku|Attacks with Dark attribute (Dark 100)|32|70|30|
|Mag(Dark) Rasetsu|Attacks with Dark attribute (Dark 130)|44|70|30|
|Name|Description|SP Cost|Added Value|Added SP|
|Nin Oboro|Damages one enemy (60) Attack -10|20|40(15)|30|
|Nin Oboro Kai|Damages one enemy (75) Attack -15|32|40(15)|30|
|Nin Oboro Metsu|Damages one enemy (90) Attack -20|44|40(15)|30|
|Nin Homura|Damages one enemy (60) Defense -10|20|40(15)|30|
|Nin Homura Kai|Damages one enemy (75) Defense -15|32|40(15)|30|
|Nin Homura Metsu|Damages one enemy (90) Defense -20|44|40(15)|30|
|Nin Raimei|Damages one enemy (60) Magic -10|20|40(15)|30|
|Nin Raimei Kai|Damages one enemy (75) Magic -15|32|40(15)|30|
|Nin Raimei Metsu|Damages one enemy (90) Magic -20|44|40(15)|30|
|Nin Fusha|Damages one enemy (60) Resistance -10|20|40(15)|30|
|Nin Fusha Kai|Damages one enemy (75) Resistance -15|32|40(15)|30|
|Nin Fusha Metsu|Damages one enemy (90) Resistance -20|44|40(15)|30|
|Name|Description|SP Cost|Added Value|Added SP|
|Fire Fire|Damages one enemy (Fire 240)|20|250|31|
|Fire Bullet|Damages one enemy (Fire 260)|23|250|31|
|Fire Napalm|Damages one enemy (Fire 290)|26|250|31|
|Fire Flame|Damages one enemy (Fire 310)|29|250|31|
|Fire Burst|Damages one enemy (Fire 340)|32|250|31|
|Fire Scarlet|Damages one enemy (Fire 360)|35|250|31|
|Fire Balrog|Damages one enemy (Fire 390)|38|250|31|
|Fire Kaja|Damages one enemy (Fire 410)|41|250|31|
|Fire Comet|Damages one enemy (Fire 440)|44|250|31|
|Fire Mars|Damages one enemy (Fire 460)|47|250|31|
|Fire Heat|Damages all enemies (Fire 100)|28|110|44|
|Fire Blast|Damages all enemies (Fire 110)|33|110|44|
|Fire Blaze|Damages all enemies (Fire 120)|37|110|44|
|Fire Broad|Damages all enemies (Fire 130)|42|110|44|
|Fire Cremation|Damages all enemies (Fire 140)|46|110|44|
|Fire Catastrophe|Damages all enemies (Fire 150)|51|110|44|
|Fire Prominence|Damages all enemies (Fire 160)|55|110|44|
|Fire Hell|Damages all enemies (Fire 170)|60|110|44|
|Fire Inferno|Damages all enemies (Fire 190)|64|110|44|
|Fire Muspel|Damages all enemies (Fire 210)|69|110|44|
|Fire Kagutsuchi S|Damages one enemy (Fire 250) Attack -10|28|200(15)|30|
|Fire Kagutsuchi M|Damages one enemy (Fire 320) Attack -15|36|200(15)|30|
|Fire Kagutsuchi L|Damages one enemy (Fire 390) Attack -20|44|200(15)|30|
|Fire Salamander S|Damages all enemies (Fire 100) Attack -10|35|80(15)|45|
|Fire Salamander M|Damages all enemies (Fire 130) Attack -15|50|80(15)|45|
|Fire Salamander L|Damages all enemies (Fire 160) Attack -20|65|80(15)|45|
|Name|Description|SP Cost|Added Value|Added SP|
|Light Light|Damages one enemy (Light 200)|19|210|29|
|Light Cross|Damages one enemy (Light 220)|22|210|29|
|Light Rude|Damages one enemy (Light 250)|25|210|29|
|Light Volt|Damages one enemy (Light 270)|28|210|29|
|Light Thunder|Damages one enemy (Light 300)|31|210|29|
|Light Punish|Damages one enemy (Light 320)|34|210|29|
|Light Prism|Damages one enemy (Light 350)|37|210|29|
|Light Holy|Damages one enemy (Light 370)|40|210|29|
|Light Obelisk|Damages one enemy (Light 400)|42|210|29|
|Light Gungnir|Damages one enemy (Light 420)|44|210|29|
|Light Ray|Damages all enemies (Light 120)|31|130|46|
|Light Drought|Damages all enemies (Light 130)|36|130|46|
|Light Screen|Damages all enemies (Light 140)|40|130|46|
|Light Luminar|Damages all enemies (Light 150)|43|130|46|
|Light Sacred|Damages all enemies (Light 160)|49|130|46|
|Light Starlight|Damages all enemies (Light 170)|54|130|46|
|Light Requiem|Damages all enemies (Light 180)|58|130|46|
|Light Judge|Damages all enemies (Light 190)|63|130|46|
|Light Akashic|Damages all enemies (Light 210)|67|130|46|
|Light Sephiroth|Damages all enemies (Light 230)|72|130|46|
|Light Van S|Damages one enemy (Light 250) Magic -10|28|200(15)|30|
|Light Van M|Damages one enemy (Light 320) Magic -15|36|200(15)|30|
|Light Van L|Damages one enemy (Light 390) Magic -20|44|200(15)|30|
|Light Thor S|Damages all enemies (Light 100) Magic -10|35|80(15)|45|
|Light Thor M|Damages all enemies (Light 130) Magic -15|50|80(15)|45|
|Light Thor L|Damages all enemies (Light 160) Magic -20|65|80(15)|45|
|Name|Description|SP Cost|Added Value|Added SP|
|Dark Dim|Damages one enemy (Dark 220)|20|230|30|
|Dark Sphere|Damages one enemy (Dark 240) +Poison|23|230|30|
|Dark Pain|Damages one enemy (Dark 270)|26|230|30|
|Dark Hang|Damages one enemy (Dark 290) +Curse|29|230|30|
|Dark Victim|Damages one enemy (Dark 320)|32|230|30|
|Dark Despair|Damages one enemy (Dark 340) +Decay|35|230|30|
|Dark Answerer|Damages one enemy (Dark 370)|38|230|30|
|Dark Grimoire|Damages one enemy (Dark 390) +Instant Death|41|230|30|
|Dark Chaos|Damages one enemy (Dark 420)|44|230|30|
|Dark End|Damages one enemy (Dark 440)|46|230|30|
|Dark Darkness|Damages all enemies (Dark 110)|30|120|45|
|Dark Cloud|Damages all enemies (Dark 120) +Poison|35|120|45|
|Dark Scream|Damages all enemies (Dark 130)|39|120|45|
|Dark Phantom|Damages all enemies (Dark 140) +Seal|44|120|45|
|Dark Polter|Damages all enemies (Dark 150)|48|120|45|
|Dark Tomb|Damages all enemies (Dark 160) +Sleep|53|120|45|
|Dark Demon|Damages all enemies (Dark 170)|57|120|45|
|Dark Giltea|Damages all enemies (Dark 180) +Decay|62|120|45|
|Dark Pluton|Damages all enemies (Dark 200)|66|120|45|
|Dark Nibel|Damages all enemies (Dark 220)|71|120|45|
|Dark Fenrir S|Damages one enemy (Dark 250) Resistance -10|28|200(15)|30|
|Dark Fenrir M|Damages one enemy (Dark 320) Resistance -15|36|200(15)|30|
|Dark Fenrir L|Damages one enemy (Dark 390) Resistance -20|44|200(15)|30|
|Dark Tiamat S|Damages all enemies (Dark 100) Resistance -10|35|80(15)|45|
|Dark Tiamat M|Damages all enemies (Dark 130) Resistance -15|50|80(15)|45|
|Dark Tiamat L|Damages all enemies (Dark 160) Resistance -20|65|80(15)|45|
|Name|Description|SP Cost|Added Value|Added SP|
|Ailment Venom|Poisons one enemy|10|0|10|
|Ailment Venom All|Poisons all enemies|25|0|25|
|Ailment Decom|Decays one enemy|20|0|20|
|Ailment Decom All|Decays all enemies|50|0|50|
|Ailment Sleep|Puts one enemy to "Sleep"|16|0|16|
|Ailment Sleep All|Puts all enemies to "Sleep"|40|0|40|
|Ailment Seal|Seals one enemy|14|0|14|
|Ailment Seal All|Seals all enemies|35|0|35|
|Ailment Curse|Curses one enemy|12|0|12|
|Ailment Curse All|Curses all enemies|30|0|30|
|Ailment Phage|Drives one enemy insane (50% except Death)|50|0|50|
|Ailment Doom|Instantly kills one enemy|40|0|40|
|Name|Description|SP Cost|Added Value|Added SP|
|Heal Heal|Restores one ally's HP (300)|40|290|40|
|Heal Heal Dro|Restores one ally's HP (330)|44|290|40|
|Heal Heal Live|Restores one ally's HP (360)|48|290|40|
|Heal Heal Aqua|Restores one ally's HP (390)|52|290|40|
|Heal Heal Leaf|Restores one ally's HP (420)|56|290|40|
|Heal Heal Light|Restores one ally's HP (450)|60|290|40|
|Heal Heal Fall|Restores one ally's HP (480)|64|290|40|
|Heal Heal Arc|Restores one ally's HP (510)|68|290|40|
|Heal Heal Mana|Restores one ally's HP (540)|72|290|40|
|Heal Heal Full|Restores one ally's HP (570)|76|290|40|
|Heal Heal All|Restores all allies' HP (200)|80|190|70|
|Heal Heal Coat|Restores all allies' HP (220)|87|190|70|
|Heal Heal Ray|Restores all allies' HP (240)|94|190|70|
|Heal Heal Air|Restores all allies' HP (260)|101|190|70|
|Heal Heal Lake|Restores all allies' HP (280)|108|190|70|
|Heal Heal Medi|Restores all allies' HP (300)|115|190|70|
|Heal Heal Breath|Restores all allies' HP (320)|122|190|70|
|Heal Heal Rain|Restores all allies' HP (340)|129|190|70|
|Heal Heal Storm|Restores all allies' HP (360)|136|190|70|
|Heal Heal Marine|Restores all allies' HP (380)|143|190|70|
|Name|Description|SP Cost|Added Value|Added SP|
|Cure Restore|Cures one ally's status ailments|25|0|25|
|Cure Refresh|Cures all allies' status ailments|50|0|50|
|Cure Cure|Restores one ally's HP and status ailments (220)|70|270|40|
|Cure Cure Light|Restores one ally's HP and status ailments (330)|90|270|40|
|Cure Soul Call|Revives one ally (220)|70|270|60|
|Cure Soul Catch|Revives one ally (310)|85|270|60|
|Cure Soulful|Revives one ally (400)|100|270|60|
|Cure Revive|Revives all allies (300)|150|170|90|
|Name|Description|SP Cost|Added Value|Added SP|
|Supp Skin|Increases one ally's Defense (40)|15|50|15|
|Supp Protect|Increases one ally's Defense (60)|20|50|15|
|Supp Shield|Increases one ally's Defense (80)|25|50|15|
|Supp Fort|Increases all allies' Defense (15)|30|30|30|
|Supp Gnome|Increases all allies' Defense (30)|45|30|30|
|Supp Coat|Increases one ally's Resistance (40)|15|50|15|
|Supp Enhance|Increases one ally's Resistance (60)|20|50|15|
|Supp Shell|Increases one ally's Resistance (80)|25|50|15|
|Supp Wall|Increases all allies' Resistance (15)|30|30|30|
|Supp Sylph|Increases all allies' Resistance (30)|45|30|30|
|Supp Parish|Increases one ally's Attack (40)|22|50|22|
|Supp Force|Increases one ally's Attack (60)|30|50|22|
|Supp Odin|Increases one ally's Attack (80)|38|50|22|
|Supp Brain|Increases one ally's Magic (40)|19|50|19|
|Supp Note|Increases one ally's Magic (60)|26|50|19|
|Supp Air|Increases one ally's Magic (80)|33|50|19|
|Supp Quick|Increases one ally's Reaction (2)|25|0|25|
|Supp Boost|Increases one ally's Reaction (3)|45|0|45|
|Supp Chronos|Increases one ally's Reaction (4)|70|0|70|
|Supp Bless|Doubles all allies' Spirit|30|0|30|
|Supp Melty|Decreases one enemy's Defense and Resistance (Lower 40)|22|50|22|
|Supp Decline|Decreases one enemy's Defense and Resistance (Lower 60)|30|50|22|
|Supp Ariman|Decreases one enemy's Defense and Resistance (Lower 80)|38|50|22|
|Supp Remove|Resets one ally's abilities|20|0|20|
|Supp Reset|Resets all allies' abilities|35|0|35|
|Supp Base|Resets one enemy's abilities|30|0|30|
|Supp Dispel|Resets all enemies' abilities|45|0|45|
|Name|↓Enemy-Only Skills Below|SP Cost|Added Value|Added SP|
|Time Lapse|Advances time (1/4)|30|0|30|
|Time Return|Rewinds time (1/4)|30|0|30|
|Time Shake|Distorts time|10|0|10|
|Field Oath of Fire|Damage becomes 1.5 times|20|0|20|
|Field Healing Drop|HP recovers every turn|20|0|20|
|Field Dark Mist|SP consumption doubles|20|0|20|
|Field Sealed Light|HP recovery amount halved|25|0|25|
|Field Earth's Guard|Damage becomes 3/4|25|0|25|
|Field Wind Barrier|Immunity to status ailments|30|0|30|
|Field Wandering Time|Time progression slows down|30|0|30|
|Field Flame Wall|Fire damage halved|20|0|20|
|Field Light Wall|Light damage halved|20|0|20|
|Field Dark Wall|Dark damage halved|20|0|20|
|Field Skill Seal|Skill prohibited|60|0|60|
|Field Phys Mag Nin Skill Seal|Phys, Mag, Nin Skill prohibited|40|0|40|
|Field Fire Light Dark Skill Seal|Fire, Light, Dark Skill prohibited|40|0|40|
|Field Heal Cure Skill Seal|Heal, Cure Skill prohibited|40|0|40|
|Field Supp Skill Seal|Supp Skill prohibited|40|0|40|
|Field Item Seal|"Items" command prohibited|40|0|40|
|Field EXP Bonus 2|EXP gained x2|20|0|20|
|Field EXP Bonus 3|EXP gained x3|30|0|30|
|Field S Bonus 2|S gained x2|20|0|20|
|Field S Bonus 3|S gained x3|30|0|30|
|Field Annihilation|Cancels the field|25|0|25|
|Phys Helmet Split|Damages one enemy (20)|10|75|30|
|Phys Charge|Damages one enemy (30)|12|75|30|
|Fire Flame|Damages one enemy (Fire 100)|10|230|30|
|Fire Flame All|Damages all enemies (Fire 50)|15|120|45|
|Light Glimmer|Damages one enemy (Light 100)|10|230|30|
|Light Glimmer All|Damages all enemies (Light 50)|15|120|45|
|Dark Dem|Damages one enemy (Dark 100)|10|230|30|
|Dark Dem All|Damages all enemies (Dark 50)|15|120|45|
|Supp Dark Force|Increases one ally's Break (50)|20|0|20|
|Phys Komainu|Attacks enemy 2 times (targets random, including dead)|50|0|30|
|Supp Slow|Decreases one enemy's Reaction (Lower 3)|30|0|30|
|Supp Backfire|Doubles user's Reaction|50|0|50|
|Supp Dragon Shield|Increases one ally's Defense and Resistance (100)|50|50|30|
|Ailment Gust|Poisons and decays all enemies|50|0|50|
|Phys Orochi|Attacks enemy 3 times (targets random, including dead)|100|0|30|
|Supp Flood|Decreases all enemies' Defense (Lower 50)|50|30|30|
|Supp Hurricane|Decreases all enemies' Resistance (Lower 50)|50|30|30|
|Glacier|Damages all enemies (200)|70|120|45|
|Freeze|Damages one enemy (400)|40|230|30|
|Phys Ryujin|Damages all enemies (40)|50|20|45|
|Supp SP Break|Decreases one enemy's SP (Lower 50)|30|50|30|
|Taslam|Damages one enemy (600)|70|300|30|
|Halmage|Damages all enemies (450)|100|220|45|
|Phys Shiten|Attacks enemy 4 times (targets random, including dead)|150|0|30|
|Dragon Breath|Damages all enemies (200)|80|200|45|
|Supp Brave|Increases one ally's Attack, Defense, Magic, Resistance (40)|80|50|50|
|Filmour|Repeats damaging all enemies (150) 3 times|90|70|45|
|Charge|Activates Ragnarok next turn|0|0|0|
|Ragnarok|Damages all enemies (1000)|200|650|45|
|Name|Description|SP Cost|Added Value|Added SP|