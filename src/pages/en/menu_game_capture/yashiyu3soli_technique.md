---
title: Rejiyashi 3 Solitude Formulas | Game Walkthrough | Omoshiro Game Shrine
h1: Rejiyashi 3 Solitude Formulas
description: Formulas for the free RPG "Rejiyashi 3 Solitude".
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Game Walkthrough Table of Contents
    url: /menu_game_capture/
  - name: "Legend of Yashiyu 3"
    url: /menu_game_capture/#LOY3
  - name: Rejiyashi 3 Solitude Formulas
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

## "Rejiyashi 3 Solitude" Formulas

Differences from the original are shown in **orange**.  
  
● Weapon Attack Damage (Normal attacks and Weapon category skills)  
Damage = (Skill's Attack Power + Your "Attack" - Opponent's "Defense" ÷ 2) × (1.0~1.2)  
　　*For normal attacks, "Skill's Attack Power" should be set to 0.  
  
● Magic Attack Skill Damage  
Damage = (Skill's Attack Power + Your "Magic" × 0.6 - Opponent's "Resistance" ÷ **2**) × (1.0~1.2)  
  
● Healing Skill Recovery Amount  
Recovery Amount = (Skill's Power + Your "Magic" × 0.4)  
  
● Support Skill Effect Amount  
Effect Amount = (Skill's Power + Your "Magic" × 0.2) × (1.0~1.2)  
　　*However, skills related to "Reaction", "Spirit", "Accuracy", and "Break" are not affected by "Magic".  
  
● "Spirit" Related Recovery Amount  
HP Recovery Amount when Time Cursor completes one cycle and when "Healing Drop" is active = Max HP × ("Spirit" ÷ 100)  
  
SP Recovery Amount at end of battle = Max SP × ("Spirit" ÷ **250**)  
  
● Success Rate of "Escape" Command  
Success Rate (%) = Frontline "Reaction" average × 4 + Number of failed "Escape" attempts (in that battle) × 15