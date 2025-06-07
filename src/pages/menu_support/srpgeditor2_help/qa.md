---
title: よくある質問　|　シミュレーションRPGエディター2 ヘルプ　|　サポート　｜　おもしろゲーム神殿
layout: /src/layouts/Base.astro
breadcrumb:
- name: サポート
  url: /menu_support/
- name: シミュレーションRPGエディター2 ヘルプ
  url: /menu_support/srpgeditor2_help/
- name: よくある質問
  url: /menu_support/srpgeditor2_help/qa/
description: シミュレーションRPG制作ソフト「シミュレーションRPGエディター2」のオンラインヘルプ。「よくある質問」。
h1: よくある質問　
---

<a name="TOP"></a>

## よくある質問　目次

- [Ｑ．プログラム(.exe)が起動できません！](#Q1)
- [Ｑ．プログラム（.exe）のアイコンを変更するには？](#Q2)
- [Ｑ．間接攻撃や範囲攻撃はできない？](#Q3)
- [Ｑ．mp3形式のファイルをBGMとして再生できますか？](#Q4)

<a name="Q1"></a>

## Ｑ．プログラム(.exe)が起動できません！

Ａ．以下の可能性等が考えられます。  

・起動に必要なファイルが不足している  
dllファイルや「data」や「image」などのフォルダ及びその中のファイルを削除したり、ファイル名を変更すると起動できなくなる場合があります。  

・セキュリティソフトが障害になっている  
シミュレーションRPGエディター2の起動を許可する必要があります。  
設定方法はセキュリティソフトによって異なります。  

・DirectX9.0c以上が入っていない  
[DirectX エンド ユーザー ランタイム Web インストーラ](https://www.microsoft.com/ja-jp/download/details.aspx?id=35)で、DirectXを更新してください。  
ただ、今時（2019年6月時点）のPCならまずDirectXの更新は必要ないと思います。  

・前回のプレイで異常終了している  
テストプレイを含めたゲームプログラムの実行で異常終了（強制終了）をしていると、次回の起動が二重起動とみなされ起動できないことがあります。  
テストプレイであればエディターを再起動するか、タスクマネージャからプロセスを終了する（「プロセス」タブにある「Game_v*.exe」を削除する）と直る可能性があります。  
またはOSを再起動してください。  

それでも起動できない場合は、お手数ですがサポートBBSでレポートファイルの提出と共に症状（エラーメッセージが出るならその内容も）を明記してご質問下さい。  
ちなみにレポートファイルとは、シミュレーションRPGエディター2起動時にプログラム本体があるフォルダに生成されるファイルで、ゲーム起動時なら「Report_Game.txt」、エディター起動時なら「Report_Editor.txt」としてそれぞれ出力されます。  
レポートファイルにはPCのスペックやエラー情報などが書き込まれています。

<a name="Q2"></a>

## Ｑ．プログラム（.exe）のアイコンを変更するには？

Ａ．シミュレーションRPGエディター2自体にアイコン変更機能は備わっておりませんが、アイコン変更ソフトを使えばアイコンを変えることができます。  
例えば、以下のようなソフトがあります。  
  
ソフト名：　IconReset  
作者：　あると様  
URL：　[https://softaro.net/File/IconReset.html](https://softaro.net/File/IconReset.html)  
  
IconResetなら、タイトルバーやタスクバーのアイコンも変えられます。  
手順を簡単に書くと、IconResetの起動　→　「開く」でプログラムファイル(.exe)を指定（またはD＆D）　→　IconResetに表示されたアイコンをダブルクリック　→　アイコンファイル(.ico)を指定　です。  
なお、アイコンファイル（.ico）に関しては、ドット絵向きのグラフィックツール[「EDGE2」](http://takabosoft.com/edge2/)やその前作[「EDGE」](http://takabosoft.com/edge/)等で作成することができます。（作成方法は「名前をつけて保存」で「ファイルの種類」を「ICO - Icon」にすれば良い）  
「EDGE2」でアイコンファイルを作成するにはユーザー登録（有料）が必要ですけど。  

[このページの先頭へ](#TOP)

<a name="Q3"></a>

## Ｑ．間接攻撃や範囲攻撃はできない？

Ａ．できません。すみません。  
ステージマップで2マス以上離れたマスから攻撃したり、１回の行動で複数の敵に攻撃することはできません。  

[このページの先頭へ](#TOP)

<a name="Q4"></a>

## Ｑ．mp3形式のファイルをBGMとして再生できますか？

Ａ．残念ながらmp3形式には対応していません。  
ただ、OggVorbis(.ogg)の形式には対応しているので、CDex等のソフトでmp3からoggに変換して使うことはできます。  
  
OggVorbis(.ogg)の詳細は下記のサイト「Ogg村」を参照して下さい。  
[http://oggvorbis.fc2web.com/](http://oggvorbis.fc2web.com/)  
  
CDexのダウンロードと日本語化は下記を参照して下さい。  
CDexのダウンロード：[http://cdexos.sourceforge.net/?q=download](http://cdexos.sourceforge.net/?q=download)  
CDexの日本語化：[http://homepage2.nifty.com/moto-h/hissori.html](http://homepage2.nifty.com/moto-h/hissori.html)  
↑「CDex v1.70β3 ひっそりRel-2.10」等をダウンロードし、あとは「Readme.txt」に従って下さい。  

[このページの先頭へ](#TOP)


---

  

[次の解説へ](../distribution/)

[ヘルプ目次へ](../)
