---
title: Skill | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Skill
  url: /menu_support/srpgeditor2_help/db_skill/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Skill".
h1: Skill
---

<a name="TOP"></a>

## Skill Table of Contents

- [Overview](#ABOUT)
- [Skill Group Editing](#SKILLGROUP)
- [Skill Editing](#SKILL)

<a name="ABOUT"></a>

## Overview

Skills consume SP and usage counts to provide various effects such as attack, recovery, support, and time manipulation.  

Skill editing will be explained by dividing it into skill groups and skills.  
First, create and edit skill groups, and then create skill categories for each skill group.  
Then, in each skill's editing, specify its category.  
**It might be helpful to imagine a parent > child relationship: Skill Group > Category > Skill.**  
<Example>  
Skill Groups: "Technique", "Magic", "Tool"  
Categories of "Technique" Skill Group: "Sword Technique", "Spear Technique", "Axe Technique"  
Categories of "Magic" Skill Group: "Fire", "Water", "Light"  
Categories of "Tool" Skill Group: "Medicine", "Scroll"  
Skills in "Sword Technique" Category: "Jump Slash"  
...  
**  
Also, specifications regarding slots (frames for learning skills), skill learning, and can be changed for each skill group.  

By the way, the "Item" database from the previous work has been deleted.  
In this work, you can realize healing potions and scrolls containing various sealed magic **by using skills from stock.** (However, in auto-battle, only healing skills can be used on the stage map.)  
It might be a bit difficult to get into, but there's more you can do than with the "Items" from the previous work, so please get used to it.  

[Back to top of page](#top)

<a name="SKILLGROUP"></a>

## Skill Group Editing

Database "Skill" Window (Skill Group Window)

[![Screenshot of Database "Skill" Window (Skill Group Window)](/menu_support/srpgeditor2_help/db_skill/skill.jpg)](/menu_support/srpgeditor2_help/db_skill/skill.jpg)

On the left side of the window is the skill group data list.  
The "New", "Clear", and "Data Count" buttons below it allow you to add new data or clear data.  
Below that, "Edit Skills in this Group" allows you to create and edit skills belonging to the selected skill group.  

Each setting item for skill group editing is explained below.  

● Name  
The name of the skill group.  

● Slot Type  
Slot restrictions.  
**A slot is a frame for learning skills.**  
・"Limited number of slots and categories" Set the number of slots and learnable categories in the separate item "Slots (Frame)".  
・"Unlimited number of slots and categories" There are no restrictions on the number of slots and categories, and you can learn any number of skills. Learnable categories are determined only by the character's sense.  
・"No slot" Choose this option if you don't use any slots at all, such as for skills that can only be used from stock. However, **since space for one slot is reserved internally by the program and displayed, please hide it using "Scenes to display skill list" in another item.**  

● Category (Frame)  
Types of skill categories.  
Skills always belong to some category.  
Categories, unlike attributes and compatibility types, do not affect skill effects, but they do affect skill learning conditions.  
Clicking the "Edit" button allows you to edit the selected category, and the following window appears.  

Category Window

![Screenshot of Category Window](/menu_support/srpgeditor2_help/db_skill/category.jpg)

○ Name  
The name of the category.  
**It will not be displayed in the game.**  

○ Symbol  
A symbol displayed to the left of skill names, etc.  

○ Rate  
The ease of sense increase in random sense increase for characters.  
Rate × distributed random sense increase value is the actual sense increase value.  
**Setting it to "0.0" will exclude it from distribution when "Random Sense Increase Value (Total)" in Database "System 1" is distributed to each sense.**  

● Slot (Frame)  
If "Slot Type" is set to "Limited number of slots and categories", set slots here.  
**However, if "Use unique slot for this class" is enabled in "Slot" of Database "Class", the class's unique slot takes precedence.**  
Clicking the "Edit" button allows you to edit the selected slot, and the following window appears.  

Slot Window

![Screenshot of Slot Window](/menu_support/srpgeditor2_help/db_skill/slot.jpg)

○ Character can learn all learnable categories  
Whether the character can set all learnable categories in slots.  
Learnable categories are determined by the character's sense.  

○ Learnable Categories (Frame)  
Add learnable categories with the "Insert" button.  
You can add multiple.  
Even if you add categories here, skills cannot be learned if the corresponding character's sense is less than the skill's "Required Sense".  

○ If skill not learned, display all learnable category symbols for this slot  
If "Display all learnable category symbols for this slot when skill is not learned" is OFF, this is the symbol to display instead.  
Setting it to "0" will effectively display nothing.  

● Skill reserve is enabled  
Whether to enable skill reserve.  
The place where unequipped skills learned by allied characters are stored is called the reserve.  
**If all slots are filled and a new skill is learned through leveling up or an event, if the reserve is enabled, that skill goes into the reserve. If the reserve is disabled, skill learning fails.**  

● Number of Reserves  
The number of skills that can be placed in reserve when "Skill reserve is enabled".  
**If you try to learn a skill when all slots and reserves are filled, it will fail,** so if you want to learn skills through level up or events, make sure to secure enough reserve slots.  

● Display required sense in category symbol  
Whether to display the sense required for learning within the category symbol graphic for all skill displays.  
If you want to create a system where skills can be freely learned by enabling "Learn" in the menu "Status", enabling this setting should make skill learning more comfortable.  

● Display sense in character status window  
Whether to display the symbols of learnable categories.  
Additionally, **if "Display required sense in category symbol" is enabled, the character's sense value will also be displayed within the category symbol graphic.**  
"Sense →" to the right of this setting is the name of the sense item in the status window.  

● Display SP in skill list header  
Whether to display remaining SP in the skill list header.  
If the skill consumes SP, it's safer to display it.  

● Multiple skills of the same type can be learned  
Whether multiple skills of the same type can be learned.  
If the skill consumes uses rather than SP, or if it's a weapon/armor type skill, learning multiple copies makes sense.  

● Recover remaining skill uses after stage clear  
Whether to recover remaining skill uses each time a stage is cleared.  

● Make usage conditions from stock same as skill learning conditions  
When using a skill from stock without learning it, whether to apply the skill's learning conditions as usage conditions.  
For example, you can make it so that only mages can read spellbooks.  
However, in auto-battle, only healing skills can be used on the stage map.  

● Party variables used for buying/selling  
When handling skills from this skill group in the menu "Shop", these are the party variables used for buying and selling.  

● Forget all skills and revert to stock upon death *Not Recommended*  
When a character dies in combat, whether to forget all learned skills and return them to stock.  
**"※Not Recommended" is because there is a problem where skill uses automatically recover when skills return to stock.**  

● Forget all skills and revert to stock upon discharge *Not Recommended*  
When a character is discharged from the menu "Discharge", whether to forget all learned skills and return them to stock.  
**"※Not Recommended" is because there is a problem where skill uses automatically recover when skills return to stock.**  

● In test play, learn all skills with F8 key  
Whether all allied characters learn all skills when F8 key is pressed before selecting menu in menu in test play.  
**Skills checked as "Unused" in Database "Skill" are exceptionally not learned.**  

● In test play, acquire all skills with F8 key  
Whether to add all skills to stock when F8 key is pressed before selecting menu in menu in test play.  
**Skills checked as "Unused" in Database "Skill" are exceptionally not acquired.**  

---

"Skill Organization Menu" Frame  

● "Learn" ~ "Back"  
Whether to enable (display) each command in the skill organization menu, which can be accessed from the menu "Status".  
You can also change the text displayed.  

> For skill organization menu explanation, refer to ["Organization Menu"](../game_organ/#SKILLORGAN).  

● "Sell" (Frame)  
You can change the confirmation text for "Sell" in the skill organization menu.  

● "Learn" (Frame)  
You can change whether to confirm "Learn" in the skill organization menu, and the confirmation text, and whether "Forgotten skills return to stock".  
**If "Forgotten skills return to stock" is enabled, if a skill has a limited number of uses and even one use has been depleted, it cannot be forgotten. To forget it, you must fully restore its uses with "Restore".**  

● "Forget" (Frame)  
You can change whether to confirm "Forget" in the skill organization menu, and the confirmation text, and whether "Forgotten skills return to stock".  
**If "Forgotten skills return to stock" is enabled, if a skill has a limited number of uses and even one use has been depleted, it cannot be forgotten. To forget it, you must fully restore its uses with "Restore".**  

---

"Scenes to display skill list" Frame  

● "General Organization Part" ~ "Manual Combat: Combat Part "Stock""  
Whether to display the skill list for characters and stock in each scene.  
Disabling display of the skill list means it cannot be selected. Thus, **disabling display allows you to prohibit skill use in specific scenes or prohibit certain operations on skills.**  
For example, if you don't want to allow buying or selling skills from the skill group you're editing at all, disable display for "Organization Part "Shop"".  

[Back to top of page](#top)

<a name="SKILL"></a>

## Skill Editing

Skill Data Window

[![Screenshot of Skill Data Window](/menu_support/srpgeditor2_help/db_skill/skilldata.jpg)](/menu_support/srpgeditor2_help/db_skill/skilldata.jpg)

On the left side of the window is the skill data list.  
The "New", "Clear", and "Data Count" buttons below it allow you to add new data or clear data.  
Furthermore, the **"Load CSV File" and "Save to CSV File" buttons below that allow you to link with Excel (input/output CSV files).**  

> For details, refer to ["Interoperability with Excel"](../csv/).  

Each setting item for skill editing is explained below.  

● Skill Name  
The name of the skill.  

● Description  
The skill's description displayed in the game.  
You can write the skill's effects here.  

● Reference #P  
**In "Description", you can display symbols in the game by entering special characters "#P.*" (* is the graphic number of the symbol).  
This item is only for confirming symbol graphics and has no effect on the game regardless of the number.**  

● Unused  
If you want to create game unused skills for some reason, check this.  
This allows **excluding them from the "F8" key's "Learn all skills & acquire all skills" function, which is only effective during test play.** (That's all).  

● Price  
The purchase price of the skill in the menu "Shop".  
Selling price is set in Database "System 2".  
Setting it to "0" makes it unsellable.  

● Max Stock Quantity  
The maximum number of skills that can be held in stock.  

● Disappear when used from stock  
Whether the skill disappears after being used once from stock.  
Enabling this allows for **one-time use healing items and scrolls containing various sealed magic.**  

● Resource Type  
Whether the skill consumes SP or has limited uses.  

● SP Cost  
The SP cost when "Resource Type" is "Consume SP".  

● Usage Limit  
The number of times the skill can be used when "Resource Type" is "Limited Uses".  
Can also be set to "Unlimited".  

● Category  
The category to which the skill belongs.  

● Required Sense  
The sense required to learn the skill.  
Whether through the menu "Learn", Database "Ally Character"'s "Learned Skills", or random skill learning, if the character does not have a sense value greater than or equal to this "Required Sense", skill learning will fail.  

● Learnable Class  
You can also limit learnable classes.  
Specify from "Class" in the database.  

● Learn Probability (%)  
The probability of learning a skill in random skill learning, set as a percentage in the format "[Base Probability] + Sense × [Probability Increase per Sense]".  
Note that even if [Base Probability] is set to "1"% or more, the learning probability will exceptionally become 0% if the character's sense is 0.  
Also, skills cannot be learned if "Random Skill Learning" in Database "Ally Character" is disabled.  

● Learn LV  
The level at which skills are learned in random skill learning, set in the format "[Min (Random) Base LV] ~ [Max Base LV] - Sense × [LV per Sense]".  
"-Sense × [LV per Sense]" allows for earlier learning as sense increases.  
**If Learn LV (result of the formula) exceeds the character's MAX LV, the skill will not be learned.**  
Also, **in random skill learning, Learn LV will always be 2 or more. Even if Learn LV (result of the formula) is 1 or less, it will actually be learned at LV2.**  

● Cannot be forgotten  
Whether the skill cannot be forgotten in the skill organization menu "Forget".  

● Sort Number  
Setting this allows changing the display order of items (skills) in the menu "Shop".  
**Shop item lists are displayed sorted in ascending order of sort number.**  
**If no sort number is set for all skills, the program internally uses the skill number as the sort number.**  
**Therefore, by setting decimal places like "1.5" for the sort number, you can freely reorder them.**  
<Example>  
Skill 1 Heal: Sort number unset  
Skill 2 Fire: Sort number unset  
Skill 3 High Heal: Sort number "1.5"  
  
↓Displayed in shop as:  
  
Skill 1 Heal: **Internal sort number = 1**  
Skill 3 High Heal: Sort number "1.5"  
Skill 2 Fire: **Internal sort number = 2**  

● Rank  
Influences the determination of skill acquisition candidates in event action "Randomly Acquire Skill".  

> For details, refer to ["Event Actions"](../eventact/#GETRANDOMSKILL).  

● Rarity  
Influences the acquisition rate of skills in event action "Randomly Acquire Skill".  

> For details, refer to ["Event Actions"](../eventact/#GETRANDOMSKILL).  

● Type  
The type of skill effect.  

○ Physical Attack  
Deals damage to the target with a physical attack.  
"Target" is fixed to "Opponent", and "Effect Value" becomes the base attack power.  
Damage depends on the user's "Attack" and the target's "Defense".  

○ Magic Attack  
Deals damage to the target with a magic attack.  
"Target" is fixed to "Opponent", and "Effect Value" becomes the base attack power.  
Damage depends on the user's "Magic" and the target's "Resistance".  

○ Heal  
Restores HP.  
"Target" is fixed to "Opponent", and "Effect Value" becomes the base recovery amount.  
Recovery amount depends on the user's magic power. This is the only skill that **can be used on the stage map**.  

○ Damage Reduction  
Reduces damage from when the skill is activated until the user's next turn.  
"Target" is fixed to "Self", and "Effect Value" is invalid.  

○ Time  
Manipulates time (the time bar at the top of the combat screen).  
In manual combat, **you can end combat quickly to minimize damage taken, or conversely, prolong combat to ensure a finishing blow, and repeatedly use "Quick" (which has a 1-per-turn limit) after using a time skill.**  
"Target" is fixed to "Time", and "Effect Value" is the number of turns to advance (or rewind).  
**Only effective if combat's turn transition mode is "Time".**  
It is also the only skill that **cannot be activated with Quick**.  

○ Support  
Increases user's stats until the end of combat.  
"Target" is fixed to "Self", and "Effect Value" is invalid.  
Stat increases should be set in "Sub-Effect A".  

○ Terrain  
Changes terrain (terrain effects).  
"Target" is fixed to "Terrain", and **"Effect Value" is the terrain number after the change.**  
If you want to know the terrain number, you can look at the number to the left of the terrain name in Database "Terrain".  

○ Physical Weapon (Unusable)  
Learning this skill makes the character wield a physical weapon. (No visual change).  
"Target" is fixed to "Self", and "Effect Value" is the weapon's attack power.  
The weapon's attack power is directly added to the character's "Attack".  
Weapons can also have "Compatibility Type," "Attribute," "Accuracy," "Critical Rate," and "Effect" set, but these effects only manifest depending on other usable skills (skills other than weapon and armor).  
The relationship between weapon skills and usable skills is similar to the relationship between classes and characters: some settings of usable skills can be set to the value of the corresponding weapon skill.  
Specifically, **if the usable skill's "Corresponding Weapon" is "Physical Weapon" and "Same as Weapon Skill's ○○" (where ○○ is compatibility type, attribute, accuracy, critical rate, or effect) is enabled, then ○○ will be the value of the weapon skill.**  
  
<Example>  
**Iron Sword: Type "Physical Weapon" Accuracy "90"  
Consecutive Slash: Type "Physical Attack" Corresponding Weapon Skill "Physical Weapon" "Same as Weapon Skill's Accuracy" is ON  
  
If the character learns Iron Sword and Consecutive Slash with this setting, Consecutive Slash's accuracy will be 90.**  
  
It gets a bit more complex if multiple weapon skills are learned.  
"Effect Value" is simply the sum of all weapon skills' "Effect Values" added to the character's "Attack".  
**If multiple weapon skills with different "Compatibility Types" are learned, the compatibility type becomes "None".  
If multiple weapon skills with different "Attributes" are learned, it becomes "No Attribute".  
If multiple weapon skills with different "Accuracy" are learned, the accuracy becomes their average.  
If multiple weapon skills with "Critical Rate" 1 or more are learned, the critical rate becomes their sum.  
If multiple weapon skills with different "Effects" are learned, the effect is randomly chosen from the learned weapon skills each time the skill activates.**  
  
Note that "Sub-Effect A" can also increase each stat.  
Similar to "Effect Value," learning the skill alone increases the character's stats.  

○ Magic Weapon (Unusable)  
Basically the same as physical weapons.  
The difference between physical and magic weapons is only whether "Effect Value" increases the character's "Attack" or "Magic". However, **since "Corresponding Weapon" in skills that utilize weapons (skills other than weapon/armor) allows choosing "Physical Weapon" or "Magic Weapon", you can separate skills that correspond to physical weapons and those that correspond to magic weapons if necessary.**  
By the way, you can set "Type" to "Magic Attack" and "Corresponding Weapon" to "Physical Weapon". (Damage will still be magic-dependent).  

○ Armor (Unusable)  
Learning this skill makes the character equipped with armor. (No visual change).  
Armor primarily uses "Sub-Effect A" settings to increase various stats.  
Similar to weapon skills' "Sub-Effect A", learning the skill alone increases the character's stats.  

● Target  
The target of the skill.  
**It is automatically determined by "Type", so it cannot be changed.**  

● Corresponding Weapon  
Which weapon, "Physical Weapon" or "Magic Weapon", applies to this skill.  
**When the separate item "Same as Weapon Skill's ○○" (where ○○ is compatibility type, attribute, accuracy, critical rate, or effect) is enabled, ○○ will be the value of either the "Physical Weapon" or "Magic Weapon" specified by "Corresponding Weapon".  
If "Same as Weapon Skill's ○○" is unchecked and all are disabled, the choice here makes no difference.**  

● Usable in Map Part "Skill"  
● Usable in Map Part "Stock"  
● Usable in Combat Part "Skill"  
● Usable in Combat Part "Quick"  
● Usable in Combat Part "Stock"  
Whether the skill can be used in each scene.  
In Map Part, only healing skills can be made usable.  
Time skills cannot be made usable in Combat Part "Quick".  
If "Skill" and "Quick" are disabled and only "Stock" is enabled, characters who haven't learned the skill can still use it from stock.  

● Compatibility Type  
This determines compatibility with the opponent.  
Compatibility type is specified from "Compatibility Type" in the database.  
For example, a water type (skill) is strong against a fire type, increasing hit rate by 20%, etc.  
**If the compatibility type is "None", the behavior of "Skill Compatibility Type 'None' Behavior" in Database "System 2" is applied.**  
Enabling "Same as Weapon Skill's Compatibility Type" will use the compatibility type of the weapon skill specified by "Corresponding Weapon".  

● Attribute  
The skill's attribute.  
Attributes are less complex than compatibility types, and **only apply a correction to the effect amount (damage, etc.) according to "Attribute Resistance" in Database "Class".**  
Enabling "Same as Weapon Skill's Attribute" will use the attribute of the weapon skill specified by "Corresponding Weapon".  
Attribute settings themselves are configured in Database "System 4".  

● Accuracy (%)  
The skill's base accuracy.  
**Even if a healing skill is used on the stage map, accuracy is applied, so it may fail. However, since there is no skill failure animation (like a message appearing), for healing skills usable on the stage map, 100% accuracy is recommended.**  
Enabling "Same as Weapon Skill's Accuracy" will use the accuracy of the weapon skill specified by "Corresponding Weapon".  

> For the formula to calculate actual accuracy, refer to [Database "System 3"](../db_system/#HIT).  

● Effect Value  
Its role changes depending on "Type".  
For example, for physical attack skills, it's the skill's base attack power.  
Details are explained in the separate item "Type".  

● Damage Correction (%)  
Applies a percentage correction to damage (specifically, damage calculated by the damage formula in Database "System 3").  

> For the final damage calculation including corrections by attributes and compatibility types, refer to ["Damage Calculation"](../damage/).  

● Critical Rate (%)  
The skill's base critical rate.  
**If a critical hit occurs, damage and HP recovery amount are doubled.**  
**Effects on stats other than HP (SP damage, stat increases, etc.) are not doubled.**  
**If "Type" is "Damage Reduction", the damage reduction value is doubled.  
Critical hits can occur even when healing skills are used on the stage map, but since there is no animation for critical hits (like a message appearing), it is not recommended to set critical hits for healing skills.**  
Enabling "Add Weapon Skill Critical Rate" adds the critical rate of the weapon skill specified by "Corresponding Weapon".  

> For the formula to calculate actual critical rate, refer to [Database "System 3"](../db_system/#CRITICAL).  

● Character stats do not affect effect  
Whether the user character's "Attack" and "Magic," and the target's "Defense" and "Resistance" do not affect the skill's effect.  
If this is enabled, for example, for attack skills, "Effect Value" will become fixed damage.  

● Sub-Effect A (Frame)  
Increases "HP" ~ "Agility" values as an additional effect to the skill's "Target".  
Can also be "Specified by %". **For "HP" and "SP", it's a percentage of the maximum value, not the current value.**  
  
For offensive skills, negative values (e.g., -10) can also lower the target's stats.  
However, **it cannot lower the performance of equipped skills in auto-battle.**  
For example, if a character's magic power is 5 (including increases from weapons and armor), and an offensive skill with "Effect Value" 7 and "Magic" -10 in "Sub-Effect A" is used, only the character's magic power of 5 is actually lowered, and the skill's power only drops to 7.  
  
**For weapon and armor skills, the user's stats increase simply by learning them.**  
However, **"HP" and "SP" do not increase; they represent the recovery amount at the end of combat.**  

● Sub-Effect B (Frame)  
In auto-battle, increases "HP" ~ "Agility" values only when "Equipped".  
Can also be "Specified by %". **For "HP" and "SP", it's a percentage of the maximum value, not the current value.**  
Also, **"HP" and "SP" do not increase; they represent the recovery amount at the end of combat.**  

● Effect  
The graphic of the effect.  

● Same as weapon skill's effect  
Enabling this will make the effect the same as the weapon skill specified by "Corresponding Weapon".  
Not just "Effect" itself, but all effect-related settings such as "Hue", "Scale", "Effect Animation", and "Sound Effect" will become the weapon skill's settings.  

● Hue, Saturation, Brightness  
You can change the hue, saturation, and brightness of the effect by dragging the sliders.  
If you want the exact colors of the image, set all three to "0".  

● Scale (%)  
The scale of the effect.  
100% means normal size, but it might lack impact.  
It's set to 200% by default.  

● Transparency  
The transparency of the effect.  
0 is completely transparent, 255 is completely opaque.  

● Effect Animation  
The animation of the effect.  
Can be specified from "Effect Animation" in the database.  

● Character Animation  
Character animation before and after effect display.  
Can be specified from "Character Animation" in the database.  

● Sound Effect  
Sound effect to play when the effect is displayed.  
Can be specified from "Sound Effect" in the database.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../db_compati/)

[To Help Table of Contents](../)