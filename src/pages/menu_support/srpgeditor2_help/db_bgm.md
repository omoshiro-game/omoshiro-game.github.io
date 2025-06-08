---
title: BGM　|　シミュレーションRPGエディター2 ヘルプ　|　サポート　｜　おもしろゲーム神殿
layout: /src/layouts/Base.astro
breadcrumb:
- name: サポート
  url: /menu_support/
- name: シミュレーションRPGエディター2 ヘルプ
  url: /menu_support/srpgeditor2_help/
- name: BGM
  url: /menu_support/srpgeditor2_help/db_bgm/
description: シミュレーションRPG制作ソフト「シミュレーションRPGエディター2」のオンラインヘルプ。「BGM」。
h1: BGM
---

<a name="TOP"></a>

## BGM　目次

- [概要](#ABOUT)
- [BGMの編集](#EDIT)


<a name="ABOUT"></a>

## 概要

ゲームで使用するための音楽です。  
**音楽ファイルは「bgm」フォルダにあります。**  
**新たに音楽ファイルを追加する場合もこのフォルダに入れてください。**  


**音楽ファイルはMidi(.mid)とOggVorbis(.ogg)の形式に対応しています。**  
**音量の調整が難しくなるという点で、1つのゲームにMidiとOggVorbisの両方を使用するよりはどちらか一方の形式に統一した方が良いでしょう。**  


Midiの再生には、卯如様の「GuruGuruSMF4.dll」を使用させて頂きました。  
尚、**GuruGuruSMFではエンターブレイン社、RPGツクール2000以降のループ仕様(CC#111)をサポートしているそうですが、シミュレーションRPGエディター2ではサポートしません**（できると思いますが動作確認などはしていません）。  
卯如様のサイト：[http://gurugurusmf.migmig.net/](http://gurugurusmf.migmig.net/)  

OggVorbisの再生には、野村XX様の「Vox.dll」を使用させて頂きました。  
**ループ再生時に音が途切れます（無音時間が入る）が、仕様**とさせていただきます。（dll側ではなくシミュエディ側の問題ですけど）  
野村XX様のサイト：[http://www.nomuraz.com/denpa/](http://www.nomuraz.com/denpa/)  


[このページの先頭へ](#TOP)

<a name="EDIT"></a>

## BGMの編集

データベース「BGM」ウインドウ

[![データベース「BGM」ウインドウのスクショ](/menu_support/srpgeditor2_help/db_bgm/bgm.jpg)](/menu_support/srpgeditor2_help/db_bgm/bgm.jpg)

ウインドウ左にBGMのデータリストがあります。  
その下の「新規」「クリア」「データ数」ボタンでは、新規データを追加したりデータをクリアすることができます。  

各設定項目を解説します。  

●　名称  
BGMの名称です。  
「ファイル名」と同じにすることもできます。  
ゲーム中に表示されることはありません。  

●　パス  
音楽ファイルのパスです。  
必ず相対パスで指定して下さい。  
音楽ファイルはMidi(.mid)とOggVorbis(.ogg)の形式に対応しています。  

●　ボリューム(%)  
再生ボリュームで、0～100％の範囲で調節できます。  
ボリュームを上げることはできません。  
OggVorbis(.ogg)のみ有効な設定です。

[このページの先頭へ](#TOP)

---

  

[次の解説へ](../db_help/)

[ヘルプ目次へ](../)