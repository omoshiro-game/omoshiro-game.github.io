---
title: Legend of Yashiyu 3 Formulas
layout: /src/layouts/Base.astro
breadcrumb:
  - name: Game Walkthrough
    url: /menu_game_capture/
  - name: Rejiyashi 3 Solitude
    url: /menu_game_capture/#LOY3_SOLITUDE
  - name: Legend of Yashiyu 3 Formulas
    url: /menu_game_capture/yashiyu3_technique/
---

## "Legend of Yashiyu 3" Formulas

Frankly, these are the formulas.  
  
● Weapon Attack Damage (Normal attacks and Weapon category skills)  
Damage = (Skill's Attack Power + Your "Attack" - Opponent's "Defense" ÷ 2) × (1.0~1.2)  
*For normal attacks, "Skill's Attack Power" should be set to 0.  
  
● Magic Attack Skill Damage  
Damage = (Skill's Attack Power + Your "Magic" × 0.6 - Opponent's "Resistance" ÷ 3) × (1.0~1.2)  
  
● Healing Skill Recovery Amount  
Recovery Amount = (Skill's Power + Your "Magic" × 0.4)  
  
● Support Skill Effect Amount  
Effect Amount = (Skill's Power + Your "Magic" × 0.2) × (1.0~1.2)  
*However, skills related to "Reaction", "Spirit", "Accuracy", and "Break" are not affected by "Magic".  
  
● "Spirit" Related Recovery Amount  
HP Recovery Amount when Time Cursor completes one cycle and when "Healing Drop" is active = Max HP × ("Spirit" ÷ 100)  
  
SP Recovery Amount at end of battle = Max SP × ("Spirit" ÷ 500)  
  
● Success Rate of "Escape" Command  
Success Rate (%) = Frontline "Reaction" average × 4 + Number of failed "Escape" attempts (in that battle) × 15