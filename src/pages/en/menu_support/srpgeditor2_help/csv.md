---
title: Interoperability with EXCEL | Simulation RPG Editor 2 Help | Support | Omoshiro Game Shrine
layout: /src/layouts/Base.astro
breadcrumb:
- name: Support
  url: /menu_support/
- name: Simulation RPG Editor 2 Help
  url: /menu_support/srpgeditor2_help/
- name: Interoperability with EXCEL
  url: /menu_support/srpgeditor2_help/damage/
description: Online help for the simulation RPG creation software "Simulation RPG Editor 2". "Interoperability with EXCEL".
h1: Interoperability with EXCEL
---


<a name="TOP"></a> 

## Interoperability with Excel Table of Contents

- [Overview](#1)
- [Usage Procedure](#2)
- [Editing CSV Files](#3)
- [Two Usage Styles?](#4)
- [Recommended Excel Settings](#5)

<a name="1"></a> 

## Overview

Simulation RPG Editor 2 supports data input from Excel-editable CSV files (.csv).  
**CSV files can be directly edited in Excel, and Excel workbooks (.xlsx) can also be saved (exported) as CSV files.**  
This feature currently **only supports skill data**.  

*Please consider this feature for intermediate to advanced users. You might get confused with too much to learn if you don't first get used to the Simulation RPG Editor 2 system itself. Even if you learn it, work efficiency might not increase significantly, and even if you're interested, I recommend using this feature from your second project onwards.  
  
*Data recovery will be difficult in case of an emergency, as it is not automatically backed up. **Prior backup is recommended**.  
  
*This explanation uses Excel 2010, which the software author uses (it's a bit old). Settings and specifications may differ in other Excel versions.  

[Back to top of page](#top)

<a name="2"></a> 

## Usage Procedure

Save (export) current skill data to a CSV file in the editor → Edit in Excel → Load in the editor.  

This is the basic flow.  
**Specifically, follow these steps:**  

1. In the editor, go to Main Menu > "Database" > "Skill" tab > Select the skill group you want to edit from the left list > Click "Edit Skills in this Group" button (bottom left) > Click "Save to CSV File" button (bottom left) in sequence.  
  
2. Follow the instructions to save the CSV file "Skill*.csv" (* is the skill group number). "Skill*.csv" will be created in the "csv" folder.  
  
3. Edit "Skill*.csv" in Excel. For example, change "Accuracy" of "Body Blow" to 70. (See later section for details on Excel editing).  
  
4. Save the file in CSV format. If a compatibility dialog appears, click "Yes" to save.  
  
5. **Close Excel. I believe subsequent loading will fail if you don't close it.**  
  
6. Return to editor operations. Click the "Load CSV File" button above the "Save to CSV File" button.  
  
7. Follow the instructions to load the CSV file "Skill*.csv" (* is the skill group number).  
  
8. Double-check that the values you changed in Excel are reflected and that other settings are correct. If there are no problems, click "OK" in the bottom right.  

[Back to top of page](#top)

<a name="3"></a> 

## Editing CSV Files

**Always edit CSV files with Excel.**  
It is possible to edit with a text editor, but even viewing would be difficult.  

● Start by deleting columns  
**Once opened in Excel, first delete unnecessary columns (setting items).**  
"Unnecessary columns" refers to columns of setting items that you do not want to input from Excel.  
Reducing the number of columns will make it easier to view, so deleting them as much as possible should increase work efficiency.  
It is recommended to only keep items that improve readability (like skill names) or those that you want to modify for game balance adjustment or might modify later (like price, effect value).  
**However, do not delete the "No." column at the beginning.** Without the "No." and "Data Type" values, the editor will consider the file invalid and fail to load.  

● Supported Setting Items  
Not all setting items are supported.  
Checkbox types (ON/OFF) cannot be entered without exception, so these need to be entered directly in the editor.  

● Data count and "No." column  
**Loading will fail if the data count before loading does not match the data count in the CSV file.**  
The surest way is to add/delete data in the editor, then save it to a CSV file, and edit that file.  
Alternatively, if you can get into the habit of keeping the order and number of data in the editor consistent with the CSV file every time you add/delete data in the CSV file, that might also work.  
Also, **the values in the "No." column must always be entered in ascending order: 1, 2, 3...** Otherwise, loading will fail.  

● Editing above the data row is generally prohibited  
**Changing the string or layout of the "Data Type" cell or header row may prevent the editor from loading the file.**  
However, **some header row cells starting with "No." can be edited if you understand the following specifications.**  
  
\<Header Cells>  

- "No." cell ... Editing even a single character is forbidden. Also, it must be placed in the first column.   
- "\*\_d" cell ... "*" represents the setting item name. For example, "Price_d". If the suffix "_d" is missing, the setting item will not be recognized by the editor. Conversely, if you want the editor not to load a particular item but want it displayed in Excel for some reason, you can delete the "_d" suffix, or insert a new column with a header that doesn't have "_d".  
- "Memo" cell ... This is a memo field for Excel, so it does not originally have "_d".  

[Back to top of page](#top)

<a name="4"></a> 

## Two Usage Styles?

I think Excel usage styles can be divided into the following two types.  

**・Type A: Input from Excel (CSV) only when you want to adjust overall.**  
You might (or should) input data from Excel the first time, but subsequent value corrections are done directly in the editor.  
However, when you want to change certain values overall (e.g., lower skill "effect value" by 20% each), you use Excel.  
In such cases, first save the CSV file from the editor, then edit it in Excel.  

**・Type B: Always input from Excel (CSV).**  
Saving the CSV file only once at the beginning, and then repeatedly "editing in Excel → loading CSV file in editor."  
This type might increase work efficiency if you save and manage the CSV file (.csv) as an Excel workbook (.xlsx).  
An Excel workbook allows saving column widths and color changes, and locking data rows other than those generally prohibited from editing, making it easier to edit.  
However, to load it into the editor, it must not be an Excel workbook (.xlsx); it needs to be saved in CSV format (.csv) (to do this, in Excel, go to "Save As" → change "Save as type" to "CSV" and save). Please remember this when loading into the editor.  
There also seems to be a macro (VBA) for exporting CSV files. If you're interested, try searching for it.  

By the way, **I am Type A, and I have used it multiple times to adjust prices and usage counts overall.**  
Type B might lead to taking over which columns (setting items) to keep or discard.  

[Back to top of page](#top)

<a name="5"></a> 

## Recommended Excel Settings

Set an appropriate size with "Zoom" in the "View" menu. (Or "Ctrl" + mouse wheel).  
**Fix the skill name and each setting item's header using "Split" in the "View" menu.**  
Then, adjust the column widths as you see fit.  
When saving in Excel workbook (.xlsx) format, it's also recommended to "lock" cells other than data rows and change background colors for each column.  

**※These settings are not saved in CSV files (.csv), so if you close Excel and want to edit again, you'll need to re-apply the settings.**  

*The author is not an Excel expert, so there may be other recommended settings.  

[Back to top of page](#TOP)

---

  

[To Next Explanation](../savedata/)

[To Help Table of Contents](../)