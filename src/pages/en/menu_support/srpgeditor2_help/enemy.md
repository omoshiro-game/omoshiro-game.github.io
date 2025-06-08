---
title: Enemy Placement | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Enemy Placement
  url: /menu_support/srpgeditor2_help/enemy/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Enemy Placement".
h1: Enemy Placement
---


<a name="TOP"></a> 

## Enemy Placement Table of Contents

- [Placing Enemies](#PUT)
- [Editing Enemy Palette](#EDIT)
- [Editing Movement AI](#MOVEAI)

## Placing Enemies

To place enemies, first switch the palette mode to enemy palette.  
From the main menu, select "Edit" > "Change Palette" > "Enemy Character".  
Then the following window will be displayed.  

Enemy Palette Window

![Screenshot of Enemy Palette Window](/menu_support/srpgeditor2_help/enemy/enemy.jpg)

Enemy palette data is [Database "Enemy Character"](../db_enemy/) data with movement AI set.  
Unlike map chip and event palettes, enemy palette data has no default data prepared and must be created for each stage, which will be explained later.  

To place enemies, click and select the enemy you want from the enemy list.  
Then click on the stage map to place the selected enemy.  
**Right-clicking (dragging also possible) on the stage map allows you to memorize the enemy at the cursor position.  
*Placing an enemy memorized by right-clicking does not duplicate the enemy. Use this when you want to move enemies.**  
**Right-double-clicking on the stage map allows you to edit the enemy at the cursor position.**  

[Back to top of page](#TOP)

## Editing Enemy Palette

Enemies act **in order from the top of the list**.  
Basically, it's best to create enemies closer to allies at the top of the list.  

The "Insert", "Edit", "Delete", and "Data Count" buttons at the top of the enemy palette window are for editing the enemy list.  
Clicking "Insert" or "Edit" will open the following window.  

Enemy Data Window

[![Screenshot of Enemy Data Window](/menu_support/srpgeditor2_help/enemy/enemydata.jpg)](/menu_support/srpgeditor2_help/enemy/enemydata.jpg)

Explanation of each setting item.  

● Group  
**Groups act like enemy appearance flags on the stage map.**  
**By setting groups for enemies and using the event action "Manipulate Enemy Group" to toggle groups ON or OFF, you can make reinforcements or ambushes appear, or conversely, make enemies retreat as a group mid-stage.**  

> For details on event action "Manipulate Enemy Group" and examples of reinforcement settings, refer to ["Event Actions"](../eventact/#OPENEMYGROUP).  
  
In addition to event action "Manipulate Enemy Group", you can also specify enemy groups in event action "Copy Enemy", enemy conditions in event occurrence conditions, and movement AI execution conditions.  
Especially, the movement AI execution condition "Activate if ally is within action range of same group" might be subtly important.  
Setting this allows you to **unify the timing of group activation.**  
This execution condition is also incorporated in the default movement AI template for group interception.  

● Character ID  
Setting a character ID here allows you to specify this character in **enemy conditions for event occurrence and in "Target to align cursor" when selecting text for victory conditions in Main Menu "Stage" > "Stage Settings".**  

● Data  
Enemy data.  
Specified from "Enemy Character" in the database.  

● Movement AI (Frame)  
Sets movement patterns in list format.  
Movement AI offers high flexibility in settings, but it can also feel complex.  
However, I think **simply choosing from the default movement AI templates is sufficient.**  
However, **for templates marked with "※Requires editing", you need to specify "Skill to use" (healing skill) and "Position data" after applying the template.**  

> For details on movement AI templates, refer to ["Movement AI Templates"](../moveaitemplate/).  
How to create from scratch without selecting from a template will be explained in the next section.  

[Back to top of page](#TOP)

## Editing Movement AI

Enemy movement AI, when an acting character's turn comes around on the stage map, **attempts to execute data in order from the top of the movement AI list.**  
**Only one movement AI data is actually executed, meaning that items higher in the movement AI list have higher execution priority.**  
**Whether execution succeeds depends on settings and circumstances, but basically it's determined by whether it's runnable under the game system, or whether it makes sense to run (from the enemy's perspective).**  
By the way, **if all movement AIs fail, the character waits in place.**  

The "Insert", "Edit", and "Delete" buttons at the top of the window are for editing the movement AI list. Clicking "Insert" or "Edit" will open the following window.  

Movement AI Window

[![Screenshot of Movement AI Window](/menu_support/srpgeditor2_help/enemy/moveai.jpg)](/menu_support/srpgeditor2_help/enemy/moveai.jpg)

Movement AI is set in the format: "[Range] for [Target] to [Action]".  
You can also set execution conditions.  
Explanation of each setting item.  

● [Range]  
Which range of [Target] to consider as candidates for the movement AI's target.  
There are the following types:  
  
○ Entire Map Range  
All characters existing on the stage map are candidates for the target.  
  
○ Within Action Range  
**If [Action] is "Wait", characters within your movement range are candidates. If [Action] is "Combat" or "Heal", characters (including yourself) within your movement range + 1 are candidates.**  
  
○ Self + Adjacent 4 Squares  
Characters at your position and in the 4 adjacent squares are candidates for the target.  

● [Target]  
The target character for movement and action.  
If no character matches the criteria specified in [Range], the movement AI fails.  
Also, **if [Range] is "Entire Map Range", even if there are matching characters within the entire map range, if there's impassable terrain in the way or terrain with movement cost exceeding the acting character's movement, and the target cannot be reached in any number of turns, the movement AI will fail.**  
The types of [Target] are as follows:  
  
○ Closest Ally  
Targets the closest ally.  
  
○ Most Effective Ally (Physical Attack Calculation)  
Targets the ally judged to be most effective, assuming the enemy attacks physically.  
In detail, the program internally calculates priority values for each character using the following formula, and targets the character with the highest priority value.  
  
・In manual combat  
Priority Value = Expected Physical Attack Skill Damage × Number of Actions - Ally's Remaining HP  
  
**"Expected Damage" considers accuracy, critical rate, terrain effects, attributes, and compatibility types.  
In manual combat, "Expected Damage" is the average of the expected damage of all usable physical attack skills (including normal attack if it's physical attack type) set in the battle AI data list. (The program does not analyze battle AI priority levels, priorities, or conditions.)**  

> For details on battle AI, refer to [Database "Enemy Character"](../db_enemy/#BATTLEAI).  
  
In reality, only physical attacks are prioritized. If physical attack skills cannot be used, the expected damage of magic attack skills is calculated. If neither physical nor magic skills can be used, the expected damage is calculated with normal attacks, which can be used even if SP or uses run out.  
Expressed as a flowchart, it's as follows:  
  
**In the battle AI, can at least one physical attack be used? YES → Determine action target based on average expected damage of all usable physical attacks!  
NO↓  
In the battle AI, can at least one magic attack be used? YES → Determine action target based on average expected damage of all usable magic attacks!  
NO↓  
Determine action target based on expected damage of normal attack!  
**  
If "In manual combat, ignore this action when calculating the action target for movement AI's 'Most Effective Ally'" is checked in the battle AI settings, that action can be excluded from the "expected damage" (average) calculation.  
**If, in the Database "Class" settings, the skill specified for normal attack has extremely low performance and is only used as a last resort when SP or uses run out, and you want to include normal attack in the battle AI, you should check "In manual combat, ignore this action when calculating the action target for movement AI's 'Most Effective Ally'". This will improve movement AI accuracy.  
A better approach is not to create normal attack in the battle AI data list at all.**  
**Even if normal attack is not created in the battle AI data list, if there are no skills to use (due to insufficient SP etc.), it will automatically become a normal attack. Also, actions not in the battle AI are excluded from the "expected damage" (average) calculation, saving you the trouble of setting them up. It's like killing two birds with one stone.**  
**To give a concrete example:**  
  
\------------------------  
Jump Slash (Accuracy 100, Skill Power 20) Priority Level 2  
Fire (Accuracy 90, Skill Power 30) Priority Level 2  
Normal Attack (Accuracy 50, Skill Power 0) Priority Level 1, "In manual combat, ignore this action when calculating the action target for movement AI's 'Most Effective Ally'" ON  
\------------------------  
  
And this:  
  
\------------------------  
Jump Slash (Accuracy 100, Skill Power 20) Priority Level 1  
Fire (Accuracy 90, Skill Power 30) Priority Level 1  
\------------------------  
  
The game behavior is exactly the same.  
The latter is easier and makes the battle AI data list cleaner, so it's recommended.  
  
・In auto-battle  
Priority Value = Expected Damage × Number of Actions - Ally's Remaining HP  
  
Expected damage in auto-battle is the expected damage of one use of the skill the enemy is equipped with.  
**"Expected Damage" considers accuracy, critical rate, terrain effects, attributes, and compatibility types.**  
**Note that in auto-battle, skills equipped by characters are always used in combat, so the program does not need to analyze battle AI, and there's no need to differentiate between "Most Effective Ally (physical attack calculation)", "Most Effective Ally (magic attack calculation)", and "Most Effective Ally (physical and magic)". They are all the same.**  
  
○ Most Effective Ally (Magic Attack Calculation)  
Magic attack version of "Most Effective Ally (Physical Attack Calculation)".  
Specifically, the program internally calculates priority values for each character using the following formula, and targets the character with the highest priority value.  
  
Priority Value = Expected Magic Attack Skill Damage × Number of Actions - Ally's Remaining HP  
  
**In manual combat, in previous versions, if SP was insufficient to use a magic attack skill, movement AI would fail. However, in this version, only magic attack is prioritized. If magic cannot be used, expected damage of physical attack skills is calculated. If neither magic nor physical attacks can be used, expected damage is calculated with normal attacks, which can be used even if SP or uses run out. Therefore, movement AI will not fail due to a lack of usable skills.** (Exceptionally, it will fail if normal attack is not an offensive skill).  
Expressed as a flowchart, it's as follows:  
  
**In the battle AI, can at least one magic attack be used? YES → Determine action target based on average expected damage of all usable magic attacks!  
NO↓  
In the battle AI, can at least one physical attack be used? YES → Determine action target based on average expected damage of all usable physical attacks!  
NO↓  
Determine action target based on expected damage of normal attack!  
**  
In auto-battle, there's no need to differentiate between "Most Effective Ally (physical attack calculation)", "Most Effective Ally (magic attack calculation)", and "Most Effective Ally (physical and magic)". They are all the same.  
  
○ Most Effective Ally (Physical and Magic)  
Physical and magic attack version of "Most Effective Ally (Physical Attack Calculation)".  
In manual combat, it's good to set it for enemies that use both physical and magic attacks in roughly equal proportions.  
Specifically, the program internally calculates priority values for each character using the following formula, and targets the character with the highest priority value.  
  
Priority Value = Expected Physical and Magic Attack Skill Damage × Number of Actions - Ally's Remaining HP  
  
**In manual combat, if neither physical nor magic attack skills can be used, the expected damage is calculated with normal attacks, which can be used even if SP or uses run out.**  
Expressed as a flowchart, it's as follows:  
  
**In the battle AI, can at least one physical attack or magic attack be used? YES → Determine action target based on average expected damage of all usable physical and magic attacks!  
NO↓  
Determine action target based on expected damage of normal attack!  
**  
In auto-battle, there's no need to differentiate between "Most Effective Ally (physical attack calculation)", "Most Effective Ally (magic attack calculation)", and "Most Effective Ally (physical and magic)". They are all the same.  
  
○ Ally with lowest HP  
Targets the ally with the lowest HP.  
  
○ Leader Ally  
Targets the leader.  
  
○ Any Ally (Random)  
Randomly selects any ally as the target.  
  
○ Closest Enemy  
Targets the closest enemy.  
Naturally, you cannot be the target. (If you included yourself, you would constantly be the target...).  
  
○ Weakest Enemy  
Targets the enemy with the lowest HP.  
However, **enemies whose HP has not decreased are not targeted.**  
  
○ Self  
Targets yourself.  
  
○ Closest Destination  
**Targets the closest position among the specified destinations.**  
For destinations, specify "Position Group" data in the separate item "Destination".  
*For destinations, position groups with 5 or more position data cannot be specified. It is limited to 4 points to reduce PC load.  

● [Action]  
The action the enemy takes.  
There are the following types:  
  
○ Wait  
Moves to get as close as possible to the target determined by [Range] and [Target].  
By its nature, "Wait" does not require an action target (it can be executed even if there are no characters next to it), so if [Range] is "Entire Map Range", movement AI will succeed in most cases.  
For example, if the movement AI setting is "Entire Map Range" for "Closest Ally" with "Wait", even if it's **not possible to move next to the "Closest Ally" during that turn, "Wait" is possible, so the movement AI succeeds (※).** (If the action requires a target, like "Combat" or "Skill" (healing skill), the movement AI will fail.)  
**If you want to move towards an ally or destination, set "Wait".**  
**※However, if there is impassable terrain (movement cost > movement range or "Impassable" terrain) in the movement path, and the target cannot be reached for action (combat or healing) in any number of turns, that character will be excluded from the action target candidates. Also, if all [Target] fall into that situation, the movement AI will fail.**  
  
○ Combat  
Initiates combat against the target determined by [Range] and [Target].  
**If [Target] is not an ally type, the movement AI will always fail.**  
This is because friendly fire is not possible in Simulation RPG Editor 2, so it's not a valid action.  
  
○ Heal  
Uses a healing skill on the target determined by [Range] and [Target].  
**If [Target] is not an enemy type, the movement AI will always fail.**  
Healing skills should be specified in the separate item "Skill to Use".  
*Only skills incorporated into the editing character's battle AI can be specified for "Skill to Use". If an unlearned skill is specified, the movement AI will always fail.  

---

"Execution Condition" Frame

● Condition Exists  
Enables execution conditions.  
If the execution condition is not met, the movement AI fails.  

● If this character has moved or acted at least once, activate  
Self-explanatory.  

● If ally is within action range of same group, activate  
Checking this will activate the condition if an ally is within the action range of not only yourself but also enemies in the same group.  

● Status Condition  
Uses your own status as a condition.  

● Common Variable Condition  
Uses common variable values as a condition.  

● Evaluation Type  
How the overall execution condition is ultimately evaluated, based on the success/failure of the above execution conditions.  
"True" here means that the set condition has been met.  

● Once condition is met, it is always met unconditionally thereafter  
Self-explanatory.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../moveaitemplate/)

[To Help Table of Contents](../)