---
title: Damage Calculation | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Damage Calculation
  url: /menu_support/srpgeditor2_help/damage/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Damage Calculation".
h1: Damage Calculation
---


<a name="TOP"></a> 

## Damage Calculation

The flow for determining damage in offensive skills is as follows:  

Calculate base damage using the "Damage = ~" formula in Database "System 3"  
↓  
Correction by "Damage Correction (%)" of the used skill  
↓  
Add "HP" of "Sub-Effect A" of the used skill  
↓  
Correction by compatibility type  
↓  
Correction by "Damage Reduction" skill  
↓  
Correction by attribute  
↓  
Correction by critical hit  
↓  
Correction by "Damage Correction (%)" in Database "System 3"  
↓  
Damage determined!  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../csv/)

[To Help Table of Contents](../)