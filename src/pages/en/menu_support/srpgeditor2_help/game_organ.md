---
title: Menu | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Menu
  url: /menu_support/srpgeditor2_help/game_organ/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Menu".
h1: Menu
---

<a name="TOP"></a> 

## Menu

Menu Screen

![Screenshot of Menu Screen](/menu_support/srpgeditor2_help/game_organ/organ.jpg)

Prepare for the next stage by organizing skills, scouting allies, and purchasing skills at the shop.  
Each command is explained.  

● Menu  
Checks character menus.  
You can **swap character positions with the F key**.  
Position the cursor over any character and press the Z key to move to the skill screen.  
  
Below the slots (learned skill list) is an explanation of operations other than the basic Z, X, and arrow keys.  
Align the cursor with any slot and press the Z key to call up the skill menu.  

Skill Menu Screen

![Screenshot of Skill Menu Screen](/menu_support/srpgeditor2_help/game_organ/skill.jpg)

<Skill Menu>  
○ Learn  
Learns the selected skill from stock.  
Learnable skills vary by slot.  
**It is possible to replace a skill by learning it into a slot that already has a skill set, but if "Forgotten skills return to stock" is enabled, and the original skill's uses are depleted by even 1, the replacement will fail. You must either "Restore" its uses or "Sell" it to empty the slot before learning.**  
  
○ Reserve  
Swaps skills between slots and reserve.  
Reserve is a place where skills learned by ally characters but not currently in use are stored.  
  
○ Equip  
**If combat mode is auto-combat, changes the skill to be used in combat.**  
**This command is meaningless in manual combat.**  
  
○ Restore  
Restores skill uses.  
**Restoration cost is "Skill Purchase Price ÷ Number of Restorations".**  
  
○ Sell  
Sells learned skills.  
**While "Shop" menu "Sell" only allows selling skills in stock, this command allows selling skills without forgetting them and returning them to stock.**  
  
○ Forget  
Forgets learned skills and frees up the slot.  
**If "Forgotten skills return to stock" is enabled, skills cannot be forgotten if even 1 use has been depleted.** Restore them first before forgetting.  
  
○ Back  
Closes the skill menu.  

● Stock  
You can check skills in stock.  
Stock is a place where skills not yet learned by characters are stored.  
Swap skill positions with the Z or F key.  

● Shop  
You can buy and sell skills.  
Goods are added via events during stage progression (can be added by events).  
Items with "Stock" have a limited number of purchasable quantities.  

● Leader  
You can change the leader.  
To clear a stage, a leader is always required.  

● Scout  
You can hire any character from the ally shop's scout list.  
**Depending on the editor's settings, a higher "Scout Power" will result in more skilled characters being registered in the scout list.**  

● Revive  
Revives any character from the revival list.  
The revival list contains allies who died in combat.  

● Discharge  
Removes any character from the party.  
At this time, you gain money (party variable) based on the character's level.  

● Save  
Saves the current state to a file.  

● Move  
Closes the menu and transitions to the world map.  

● Training  
You can enter any two characters and have them battle.  
**First/second attack is randomly determined only for the first battle; from the second battle onwards, first and second attack swap.**  
Training ends when either character's wins reach "Required Wins" or when the V key is pressed during combat.  
Note that you do not gain EX or other rewards even if you win against an enemy.  
Even if HP, SP, and skill uses are depleted during training, everything is restored to normal after combat.  
  
<Training Menu>  
○ Start Combat  
Starts training with the entered characters.  
  
○ Entry 1  
Enters the character on the left.  
Characters can be allies or enemies.  
The types of enemies that can be selected depend on the editor's settings, but can also be limited to only enemies defeated in the main story.  
In auto-battle, you can change the skill to use with "Skill".  
  
○ Entry 2  
Enters the character on the right.  
Content is the same as "Entry 1".  
However, you cannot battle the same character, so please choose a character other than the one registered in "Entry 1".  
  
○ Terrain  
The terrain where combat takes place.  
Changing terrain effects allows for combat under different conditions.  
Setting it to "Random" will randomly select from the available terrain.  
  
○ Required Wins  
Which side wins first determines the winner of the training.  
  
○ End Training  
Ends training.  

● Config  
You can change game environment settings.  
  
<Config Menu>  
○ Difficulty  
**The higher the difficulty, the stronger the enemies become.**  
  
○ Window color, brightness, transparency  
You can adjust the color, brightness, and transparency of in-game windows.  
  
○ Back  
Exits config.  

● Help  
Game explanations and hint collection.  

● Exit Game  
Exits the game and returns to the title screen.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../game_ready/)

[To Help Table of Contents](../)