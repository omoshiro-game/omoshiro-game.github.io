---
title: Growth System | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Growth System
  url: /menu_support/srpgeditor2_help/growing/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Growth System".
h1: Growth System
---


<a name="TOP"></a> 

## Growth System Table of Contents

- [Overview](#ABOUT)
- [Flow of Stat (Growth Value) Determination](#STATUS)
- [Flow of Learned Skill (Planned Skill) Determination](#SKILL)

<a name="ABOUT"></a> 

## Overview

This section explains the character growth system.  
Ally characters gain EX (experience points) in combat, and level up when EX reaches 100.  
Upon level up, depending on settings, stats may grow and skills may be learned.  
Enemy characters do not level up in combat.  

**The most important aspect of growth through leveling up is that the final stat values at maximum level and the skills ultimately learned are already determined at the time the character is generated.**  
**Similarly, stats and learned skills at each level are also already determined at the time the character is generated.**  
**This is true even if random stat growth or random skill learning settings are enabled.**  
**"At the time the character is generated" refers to when the character is added to the ally shop or joins the party directly via the event action "Change Party" for allies, and at the start of the stage for enemies.**  
**Therefore, even if stats don't increase much or skills aren't learned upon level up, resetting the game and leveling up again will not change the result.**  

For enemy characters, they do not level up in combat, and their skill learning system differs from allies, but otherwise, they are the same as allies.  

[Back to top of page](#top)

<a name="STATUS"></a> 

## Flow of Stat (Growth Value) Determination

**Character stats are managed internally by the program, divided into base values and individual values.  
Base values are the basic stats of a character (class), and the final stats (base values) at maximum level remain constant even when playing the game repeatedly or when the same character is generated multiple times.**  
Individual values exist only for characters with random stat growth enabled.  
Individual values exist only for characters with random stat growth enabled, and are values obtained by further randomizing values distributed from the total random stat growth value.  
**Unlike base values, individual values change each time the game is played repeatedly or a character is generated.**  
**The actual character stats (stats displayed in the game) are base value + individual value.**  
The amount by which base values and individual values increase at each level (how they are distributed to each level) depends on settings like growth timing.  

With this in mind, please refer to the following explanation.  
It shows the flow until character stats and growth values (increase values upon level up) are determined.  
☆ marks indicate setting items in the database.  

● Determine stat base values based on "initial value" ~ "final value" of each stat  
☆["HP" ~ "Agility" "Initial Value" and "Final Value" in Database "Class"](../db_class/#STATUS)  
☆["Random Stat Growth" in Database "Ally Character (Enemy Character)"](../db_friend/#RANDOMGROWING)  
☆["HP" ~ "Agility" "Initial Value" and "Final Value" in Database "Ally Character (Enemy Character)"](../db_friend/#STATUS)  
☆["Growth Timing" in Database "Ally Character (Enemy Character)"](../db_friend/#GROWINGTIME)  
☆["Stat Growth Timing" in Database "System 1"](../db_system/#GROWINGTIME)  
Branches depending on whether the character has "Random stat growth" enabled.  
  
○ If not random stat growth  
Growth values are determined based on the "Initial Value" and "Final Value" of each stat and "Growth Timing" in Database "Ally Character (Enemy Character)".  
If character LV is 1, it will always be the same as "Initial Value", and **if it's MAX LV, it will always be the same as "Final Value".**  
  
○ If random stat growth  
Growth values are determined based on the "Initial Value" and "Final Value" of each stat and "Stat Growth Timing" in Database "System 1".  
Here too, if character LV is 1, it will always be the same as "Initial Value", and **if it's MAX LV, it will always be the same as "Final Value".**  
  
↓  

● Generate individual stat values based on random stat growth  
☆["Random Stat Growth" in Database "Ally Character (Enemy Character)"](../db_friend/#RANDOMGROWING)  
☆["Random Stat Growth Value (Total)" in Database "System 1"](../db_system/#RANDOMGROWING)  
☆["Minimum unit for distributing random stat growth value (total) to each stat" in Database "System 1"](../db_system/#RANDOMGROWING_BLOCK)  
☆["Stat Rate ('HP' ~ 'Agility')" in Database "System 1"](../db_system/#RANDOMGROWING_RATE)  
This process is performed only when the character's "Random stat growth" is enabled.  
First, "Random Stat Growth (Total)" is calculated according to the formula in "System 1".  
**Next, "Random Stat Growth Value (Total)" is distributed to randomly selected stats ("HP" ~ "Agility") in units of "Minimum unit for distributing random stat growth value (total) to each stat". (Stats with "Final Value" 0 are excluded from distribution).  
The distributed value × the corresponding "Stat Rate ('HP' ~ 'Agility')" becomes the individual stat value (total of growth values).**  
**The level at which (the timing when) stats increase is also random.**  
  
↓  

● Random stat change applied to individual stat values  
☆["Random Stat Growth" in Database "Ally Character (Enemy Character)"](../db_friend/#RANDOMGROWING)  
☆["Perform Random Stat Change" in Database "System 1"](../db_system/#RANDOMCHANGE)  
☆["Change value per 1 random stat change" in Database "System 1"](../db_system/#RANDOMCHANGE_BLOCK)  
☆["Number of random stat changes to perform" in Database "System 1"](../db_system/#RANDOMCHANGE_TIMES)  
This process is performed only when the character's "Random stat growth" and "Perform Random Stat Change" are enabled.  
**Randomly changes individual stat values generated in the previous step.**  
**Specifically, the program randomly selects one of "HP" ~ "Agility", decreases it by "Change value per 1 random stat change" × the corresponding "Stat Rate", and instead increases another randomly selected stat by "Change value per 1 random stat change" × the corresponding "Stat Rate".**  
**This is repeated "Number of random stat changes to perform" times.**  
  
↓  

● Growth through level up  
☆["Level" in Database "Ally Character (Enemy Character)"](../db_friend/#LV)  
The character levels up from 1 to "Level" (initial LV), and stats grow.  
  
↓  

This concludes the determination of character stats and growth values.  

[Back to top of page](#top)

<a name="SKILL"></a> 

## Flow of Learned Skill (Planned Skill) Determination

Shows the flow until a character's learned skills and planned skills (skills learned upon level up) are determined.  
☆ marks indicate setting items in the database.  

● If auto-battle, learn "Normal Attack" skill  
☆["Normal Attack" in Database "Class"](../db_class/#NORMALATTACK)  
In auto-battle, the skill set as "Normal Attack" in the class is learned first.  
↓  

● Add skills that are always learned  
☆["Learned Skills" in Database "Ally Character"](../db_friend/#SKILL)  
☆["Battle AI" in Database "Enemy Character"](../db_enemy/#BATTLEAI)  
Branches depending on whether the character is an ally or an enemy.  
  
○ If ally  
Skills from "Learned Skills" are added to the character as planned skills.  
  
○ If enemy  
All skills set in "Battle AI" are learned at LV1.  
Enemies end here. (Only this step determines the final learned skills).  
  
↓  

● Increase sense for each skill category through random sense increase  
☆["Sense" in Database "Class"](../db_class/#SENSE)  
☆["Random Sense Increase" in Database "Ally Character"](../db_friend/#RANDOMSENSE)  
☆["Random Sense Increase Value (Total)" in Database "System 1"](../db_system/#RANDOMSENSE)  
☆["Rate" of "Category (Frame)" in Database "Skill"](../db_skill/#RANDOMSENSE_RATE)  
This process determines the sense for each skill category, which affects skill learning rates in random skill learning.  
First, the class's "Sense" becomes the base value for the character's sense.  
If the character's "Random sense increase" is enabled, sense will increase further randomly.  
Specifically, first, "Random Sense Increase Value (Total)" is calculated according to the formula in "System 1".  
**Next, "Random Sense Increase Value (Total)" is distributed to the sense of randomly selected categories in units of "Minimum unit for distributing random sense increase value (total) to sense of each category".  
The distributed value × the corresponding "Rate" becomes the sense increase value.**  
**Note that the maximum sense is 99.** It will not exceed 100 due to random sense increase.  
  
↓  

● Add planned skills through random skill learning  
☆["Random Skill Learning" in Database "Ally Character"](../db_friend/#RANDOMSKILL)  
☆["Required Sense" in Database "Skill"](../db_skill/#SENSE)  
☆["Learnable Class" in Database "Skill"](../db_skill/#ACQCLASS)  
☆["Learn Probability" in Database "Skill"](../db_skill/#ACQPROB)  
☆["Learn LV" in Database "Skill"](../db_skill/#ACQLV)  
This process is performed only when the character's "Random skill learning" is enabled.  
In random skill learning, skills that meet the "Required Sense" and "Learnable Class" learning conditions are checked for acquisition probability.  
The level at which they are learned is determined by the skill's "Learn LV".  
Skills successfully acquired here are added to the character as planned skills.  
  
↓  

● Learn skills through level up  
☆["Level" in Database "Ally Character (Enemy Character)"](../db_friend/#LV)  
The character levels up from 1 to "Level" (initial LV), and learns all planned skills up to that LV.  
  
↓  

This concludes the determination of character's learned skills and planned skills.  

[Back to top of page](#top)

---

  

[To Next Explanation](../damage/)

[To Help Table of Contents](../)