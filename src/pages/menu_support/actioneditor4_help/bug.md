---
title: 修正不可能なバグ、もとい仕様
layout: /src/layouts/Base.astro
breadcrumb:
  - name: サポート
    url: /menu_support/
  - name: アクションエディター4 ヘルプ
    url: /menu_support/actioneditor4_help/
  - name: 修正不可能なバグ、もとい仕様
    url: /menu_support/actioneditor4_help/bug/
---

<a name="TOP"></a>

## 修正不可能なバグ、もとい仕様 目次

以下はアクションエディター4における修正不可能なバグもとい仕様です。  
作者の力不足・努力不足により修正できませんでした。  
申し訳ありません。  
  

- [Windows7にてDirectDrawモードの8bit(256色)画面で実行した場合、リプレイファイルの上書き確認ダイアログが真っ黒になって本文が見えない](../bug/#SAVEREPLAY_DD)

## Windows7にてDirectDrawモードの8bit(256色)画面で実行した場合、リプレイファイルの上書き確認ダイアログが真っ黒になって本文が見えない

<a name="SAVEREPLAY_DD"></a>

Windows7（もしくはWindows7以降）にてDirectDrawモードの8bit(256色)画面で実行した場合、リプレイファイルを上書き保存する際の確認ダイアログが以下のように真っ黒になり本文が見えなくなってしまいます。  
![](/menu_support/actioneditor4_help/bug/SaveDialog.jpg)  
  
バージョン9.50からはリプレイ手動保存時のUIが変わったことによりこの問題は解消されています（このダイアログ自体が出ません）が、システムの設定で「フリーモードとリプレイモードのファイル選択時、リプレイ手動保存時はバージョン9.30以前のエクスプローラー風ファイル選択ダイアログを利用する」のチェックを入れているとやはりこの不具合が起きます。  

[このページの先頭へ](#TOP)

---

  

[次のトピックへ](../english/)

[ヘルプ目次へ](../)