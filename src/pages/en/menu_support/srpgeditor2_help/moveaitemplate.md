---
title: Movement AI Templates | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Movement AI Templates
  url: /menu_support/srpgeditor2_help/moveaitemplate/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Movement AI Templates".
h1: Movement AI Templates
---


<a name="TOP"></a> 

## Movement AI Templates Table of Contents

- [Overview](#SUMMARY)
- [Template "Reordering"](#CHANGE)
- [Template Explanation](#EXPL)

<a name="SUMMARY"></a> 

## Overview

Enemy Data Window

[![Screenshot of Enemy Data Window](/menu_support/srpgeditor2_help/moveaitemplate/enemydata.jpg)](/menu_support/srpgeditor2_help/moveaitemplate/enemydata.jpg)

The Movement AI Template feature allows you to create Movement AI simply by selecting one from pre-prepared templates, without building it from scratch.  
Most enemies in the sample game "Simulayu" are simply enemies with templates applied.  
However, **for templates marked with "※Requires editing" in their name, you need to specify "Skill to use" (healing skill) and "Position data" after applying the template.**  

Movement AI templates can be loaded from the enemy palette data editing window in the enemy palette, or current movement AI settings can be saved as a template.  

[Back to top of page](#TOP)

<a name="CHANGE"></a>

## Template "Reordering"

Movement AI Template "Reorder" Window

[![Screenshot of Movement AI Template "Reorder" Window](/menu_support/srpgeditor2_help/moveaitemplate/template.jpg)](/menu_support/srpgeditor2_help/moveaitemplate/template.jpg)

Clicking the "Reorder" button in the enemy palette data editing window allows you to view the Movement AI templates.  
Here, you can reorder or delete templates, and write template descriptions.  

[Back to top of page](#TOP)

<a name="EXPL"></a> 

## Template Explanation

It's difficult and not very meaningful to explain all default templates in detail, so I will **explain the behavior of all "types" and explain only a few selected data in detail.**  
By the way, **the symbols at the beginning of template names (e.g., "!", "+", "-", "!#") represent the type of movement AI, but there's no need to memorize them**, nor is it necessary to add them when saving your own settings as a template. They're just there to make it a bit easier to read.  

Now, let's explain the behavior of each "type".  
The action target (how it's determined) for each type varies depending on the variations within that type.  
For example, "！Assault Type: Combat against closest ally" and "！Assault Type: Combat against most effective ally (physical)" have different combat targets.  

● ! Assault Type  
Initiates combat.  
If no one can be engaged in combat, it moves towards the "closest ally".  

● + Intercept Type  
If an ally is within action range, initiates combat.  
**Once combat has been initiated once, it will proactively attack even if there are no allies within its action range, similar to the Assault Type.**  

● - Defense Type  
Does not move at all.  
If an ally is in an adjacent square, it stays put and initiates combat.  

● * Invasion Type  
Moves to the specified destination.  
This is a perfect setting for stages where losing control of a destination leads to game over.  
If a destination exists within action range, it moves there.  
**If it cannot move to the destination and an ally is within action range, it initiates combat.**  
If it cannot move to the destination and no ally is within action range, it moves towards the destination by the shortest path.  
**After applying the template, you need to specify "Destination" from the stage's "Position Group". Specify the "Destination" at the very top and very bottom of the Movement AI list.**  

● # Healing Type  
Heals the weakest enemy within its action range.  
**For this type, and all healing type templates, you need to specify the "Skill to use" for healing after applying the template.**  
If it's not a skill incorporated into the Database "Enemy Character"'s battle AI, it's considered unlearned, so even if set as "Skill to use", the movement AI will fail.  

● # Move & Heal Type  
Heals the weakest enemy within its action range.  
If there are no enemies to heal within action range, it moves towards the "closest enemy".  
After applying the template, you need to specify the "Skill to use" for healing.  

● # Stationary Heal Type  
Does not move at all.  
If an enemy is in an adjacent square, it stays put and heals.  
After applying the template, you need to specify the "Skill to use" for healing.  

● !# Heal & Assault Type  
A composite type of healing and assault.  
Healing is prioritized over combat.  
If there are no targets for combat or healing within action range, it moves towards the "closest ally".  
After applying the template, you need to specify the "Skill to use" for healing.  

● + # Heal & Intercept Type  
A composite type of healing and interception.  
Healing is prioritized over combat.  
After performing combat or healing once, it will proactively attack even if there are no action targets within its action range, similar to the Assault Type.  
After applying the template, you need to specify the "Skill to use" for healing.  

● - # Heal & Defense Type  
A composite type of healing and defense.  
Healing is prioritized over combat.  
After applying the template, you need to specify the "Skill to use" for healing.  

● *# Heal & Invasion Type  
A composite type of healing and invasion.  
Healing is prioritized over combat.  
After applying the template, you need to specify the "Skill to use" for healing.  
Also, you need to specify the "Destination" by "Position Group". Specify the "Destination" at the very top and very bottom of the Movement AI list.  

● % Group Intercept Type  
A type of intercept, but this one **intercepts collectively in groups** set for enemies.  
**For example, if Enemy A and Enemy B both have "Group" set to "1", and an ally enters Enemy A's action range, Enemy A will naturally initiate combat as an intercept type. Enemy B will also move closer to the ally to assist Enemy A, as they are in the same group.**  
When applying this template, the movement AI settings can remain as they are, but you need to set the enemy's "Group".  

● #% Group Heal & Intercept Type  
A composite type of healing and group interception.  
Healing is prioritized over combat.  
After applying the template, you need to specify the "Skill to use" for healing.  

---

That concludes the explanation of types.  
Next, I will explain only a few selected templates in detail.  

● ! Assault Type: Combat against most effective ally (physical)  
"Within Action Range" for "Most Effective Ally (Physical Attack Calculation)" to "Combat"  
"Within Entire Map Range" for "Closest Ally" to "Wait"  
  
<Explanation>  
As a basic rule for movement AI, execution is attempted preferentially from the top of the movement AI list, and ultimately only one executable movement AI will operate.  
In this setting, if no one can be engaged in combat, it moves towards the closest ally.  

● ! Assault Type: Combat against most effective ally (magic)  
"Within Action Range" for "Most Effective Ally (Magic Attack Calculation)" to "Combat"  
"Within Entire Map Range" for "Closest Ally" to "Wait"  
  
<Explanation>  
Magic attack calculation version of Assault Type (in manual combat).  
In auto-battle, the action target is determined by calculating expected damage from equipped skills, so differentiating between physical attack calculation and magic attack calculation is meaningless. (Both behave the same.)  
**In the previous work's "Most Effective Ally (Magic Attack Calculation)", if SP was insufficient, the action would fail, so it was recommended to include "Most Effective Ally (Physical Attack Calculation)" as insurance. However, in this work's "Most Effective Ally (Magic Attack Calculation)", it does not fail due to insufficient SP or uses, so insurance is no longer needed.** **※In Ver2.42β and earlier, that insurance was set, but that was the author's mistake.**  
  

● + Intercept Type: Combat against most effective ally (physical)  
"Within Action Range" for "Most Effective Ally (Physical Attack Calculation)" to "Combat"  
"Within Entire Map Range" for "Closest Ally" to "Wait" *Conditional  
  
<Explanation>  
In the enemy palette data editing window's movement AI list, it's displayed as "※Conditional", but in detail, "If this character has moved or acted at least once, activate" is enabled.  
With this setting, after initiating combat once, it will proactively attack even if there are no allies within its action range, similar to the Assault Type.  

● - Defense Type: Combat against most effective ally (physical)  
"Within Self + Adjacent 4 Squares" for "Most Effective Ally (Physical Attack Calculation)" to "Combat"  
  
<Explanation>  
That's all it is.  
It utilizes the specification that if all movement AIs fail, it does nothing (it "waits" in place).  

● * Invasion Type: Combat against most effective ally (physical) *Requires editing: Destination*  
"Within Action Range" for "Closest Destination" to "Wait"  
"Within Action Range" for "Most Effective Ally (Physical Attack Calculation)" to "Combat"  
"Within Entire Map Range" for "Closest Destination" to "Wait"  
  
<Explanation>  
This is a perfect setting for stages where losing control of a destination leads to game over.  
First, if a destination exists within action range, it prioritizes moving there.  
**※In Ver2.50β and earlier, the top setting was missing, so combat was sometimes prioritized even when movement to the destination was possible.**  
If it cannot move to the destination and an ally is within action range, it initiates combat.  
**While movement AI that ignores allies and moves as close as possible to the destination often poses a greater threat to players, it's safer to incorporate combat AI to ensure that allies don't obstruct the path and prevent the enemy from reaching the destination.**  

● # Move & Heal Type: Move to closest enemy if no one to heal *Requires editing: Healing Skill*  
"Within Action Range" for "Weakest Enemy" to "Heal (Skill)"  
"Within Entire Map Range" for "Closest Enemy" to "Wait"  
  
<Explanation>  
If no healing target is found, it moves towards the closest enemy.  
If you place combat characters around it, it should become a troublesome presence as a healer.  

● % Group Intercept Type: Combat against most effective ally (physical)  
"Within Action Range" for "Most Effective Ally (Physical Attack Calculation)" to "Combat"  
"Within Entire Map Range" for "Closest Ally" to "Wait" *Conditional  
"Within Entire Map Range" for "Closest Ally" to "Wait" *Conditional  
  
<Explanation>  
A type of intercept, but this one **intercepts collectively in groups** set for enemies.  
The first two entries in the Movement AI list are the same as a normal intercept type, but a third entry has been added.  
The third entry in the Movement AI list is displayed as "※Conditional", but in detail, "If ally is within action range of same group, activate" is enabled.  
This means that it will attack as soon as an ally enters the action range of anyone in the same "Group" as itself.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../event/)

[To Help Table of Contents](../)