# Claude用プロジェクト説明書

## プロジェクト概要

このフォルダは、プログラム初心者向けのJavaScript基礎とkintoneカスタマイズ学習教材を格納しています。2時間の研修プログラムとして設計され、実際のHTML/JavaScriptファイルを使った体験型学習が可能です。

## フォルダ構造

```
/workspaces/devcontest/
├── package.json                    # Node.js依存関係
├── biome.json                      # コードフォーマッター設定
├── readme.md                       # プロジェクト説明（要更新）
└── docs/                           # 教材ディレクトリ
    ├── kintone_js_training.md      # メイン研修テキスト（68KB）
    ├── kintone_js_training_speech_script.md  # 講師用台本
    └── cheats/                     # 実習用HTMLファイル集
        ├── demo1.html              # HTMLとJavaScriptの関係
        ├── demo2.html              # 変数とデータ型
        ├── demo3.html              # 関数の定義と呼び出し
        ├── demo4.html              # オブジェクトの操作
        ├── demo5.html              # 配列の基本操作
        ├── demo6.html              # 条件分岐
        ├── demo_all_in_one.html    # 全機能統合デモ（10KB）
        ├── kintone_practice.html   # Kintone疑似体験環境（13KB）
        ├── debug_practice.html     # エラー修正練習（5KB）
        └── kintone_sample.js       # 実際のKintone用JavaScript（5KB）
```

## 教材の特徴

### 1. 段階的学習設計
- **基礎編（demo1-6.html）**: JavaScript基本文法を1つずつ学習
- **統合編（demo_all_in_one.html）**: 基礎知識の総復習
- **実践編（kintone_practice.html）**: Kintone疑似環境での体験
- **デバッグ編（debug_practice.html）**: エラー対応スキル習得

### 2. 体験型学習
- 全ファイルがブラウザで直接実行可能
- F12開発者ツールのConsoleを使った動作確認
- ボタンクリックによるインタラクティブな学習

### 3. 実用性重視
- Kintoneのレコード構造を模擬したオブジェクト操作
- 実際のイベント処理パターンの学習
- バリデーション、計算処理などの実用的な機能

## 主要ファイル詳細

### docs/kintone_js_training.md
- **容量**: 68,797バイト
- **内容**: 完全な研修テキスト（2時間プログラム）
- **構成**:
  1. JavaScriptとHTMLの関係（10分）
  2. JavaScript基礎（30分）
  3. Kintoneの仕組みとイベント（22分）
  4. 実践カスタマイズ作成（25分）
  5. デバッグ方法（10分）
  6. 応用範囲（FormBridge、kViewer）

### docs/cheats/kintone_sample.js
- **容量**: 5,366バイト
- **内容**: 実用的なKintoneカスタマイズサンプル
- **機能**:
  - 単価×数量=合計の自動計算
  - 入力値バリデーション
  - 保存前チェック
  - リアルタイム計算更新

### docs/cheats/kintone_practice.html
- **容量**: 12,952バイト
- **内容**: Kintoneレコード画面の疑似環境
- **特徴**:
  - 実際のKintoneイベントを模擬
  - リアルタイムなフィールド計算
  - ステータス連動表示制御
  - 保存前バリデーション

## 技術仕様

### 使用技術
- **フロントエンド**: HTML5, JavaScript ES6+, CSS3
- **開発環境**: Node.js, Biome（コードフォーマッター）
- **対象ブラウザ**: Chrome, Firefox, Edge（開発者ツール必須）

### 前提知識
- プログラミング未経験者対応
- HTMLの基本的な理解があると有利
- Kintoneの基本操作経験があると有利

## Claudeによる活用方法

### コード解析・修正
```bash
# HTMLファイルの内容確認
claude read docs/cheats/demo1.html

# JavaScriptコードの解析
claude read docs/cheats/kintone_sample.js

# エラー修正支援
claude debug docs/cheats/debug_practice.html
```

### 教材カスタマイズ
```bash
# 新しいデモファイル作成
claude create demo7.html "関数の応用編"

# 既存ファイルの機能追加
claude edit docs/cheats/kintone_practice.html
```

### 学習支援
```bash
# 概念説明
claude explain "JavaScript イベントリスナー"

# コード例生成
claude generate "Kintone REST API サンプル"
```

## 注意事項

### セキュリティ
- 全ファイルは教育目的のデモコード
- 本番環境での使用前に適切な検証が必要
- 機密情報や認証情報は含まれていない

### ブラウザ対応
- F12開発者ツールが必須
- JavaScript有効化が必要
- ローカルファイル実行に対応

### 学習順序
1. readme.mdで全体把握
2. demo1.htmlから順次実行
3. kintone_practice.htmlで実践
4. kintone_sample.jsで実装参考

## 拡張可能性

### 追加可能な教材
- REST API連携デモ
- プラグイン開発基礎
- 高度なUI制御
- 外部サービス連携

### 関連技術への応用
- FormBridge（Webフォーム埋め込み）
- kViewer（データ可視化）
- 一般的なWeb開発
- モダンJavaScriptフレームワーク

## 更新履歴

- 初版作成（教材完成）
- HTMLファイル9個、JavaScriptサンプル1個
- 研修テキスト、講師用台本完備
- デバッグ練習環境完成

このプロジェクトは、JavaScript初心者がKintoneカスタマイズを習得するための包括的な学習環境を提供しています。