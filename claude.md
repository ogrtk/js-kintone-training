# Claude用プロジェクト説明書

## プロジェクト概要

このフォルダは、プログラム初心者向けのJavaScript基礎とkintoneカスタマイズ学習教材を格納しています。2時間の研修プログラムとして設計され、実際のHTML/JavaScriptファイルを使った体験型学習とブレークポイントデバッグ実習が可能です。

## フォルダ構造

```
(プロジェクトルート)
├── package.json                    # Node.js依存関係
├── biome.json                      # コードフォーマッター設定
├── claude.md                       # Claude用プロジェクト説明書（このファイル）
├── readme.md                       # プロジェクト説明
├── debug_practice_buggy.js         # デバッグ実習用バグありコード
├── debug_practice_fixed.js         # デバッグ実習用修正済みコード
└── docs/                           # 教材ディレクトリ
    ├── textbook.md                 # メイン研修テキスト（76KB）
    ├── speech_script.md            # 講師用台本
    └── cheats/                     # 実習用ファイル集
        ├── javascript_practice_1.html  # HTMLとJavaScriptの関係
        ├── javascript_practice_2.html  # 変数とデータ型
        ├── javascript_practice_3.html  # 関数の定義と呼び出し
        ├── javascript_practice_4.html  # オブジェクトの操作
        ├── javascript_practice_5.html  # 配列の基本操作
        ├── javascript_practice_6.html  # 条件分岐
        ├── debug_practice_buggy.js # デバッグ実習用バグありコード
        ├── debug_practice_fixed.js # デバッグ実習用修正済みコード
        ├── kintone_customize_step1.js  # 実習用カスタマイズ（基本計算）
        ├── kintone_customize_step2.js  # 実習用カスタマイズ（バリデーション追加）
        ├── kintone_customize_step3.js  # 実習用カスタマイズ（保存前チェック）
        └── js-kintone-training.zip # 演習用kintoneアプリテンプレート
```

## 教材の特徴

### 1. 段階的学習設計
- **基礎編（javascript_practice_1-6.html）**: JavaScript基本文法を1つずつ学習
- **kintone編（kintone_customize_step1-3.js）**: Kintoneカスタマイズの学習
- **デバッグ編（debug_practice_buggy.js**: エラー対応スキル習得

### 2. 体験型学習
- 全ファイルがブラウザで直接実行可能
- F12開発者ツールのConsoleを使った動作確認
- ボタンクリックによるインタラクティブな学習
- ブレークポイントを使った実践的デバッグ体験

### 3. 実用性重視
- Kintoneのレコード構造を模擬したオブジェクト操作
- 実際のイベント処理パターンの学習
- バリデーション、計算処理などの実用的な機能
- 実際のアプリテンプレートによる即座の実践

### 4. デバッグスキル重視
- 意図的にバグを含んだコードでのデバッグ練習
- Chrome DevToolsのブレークポイント機能の習得
- 変数の監視とコードの実行フロー確認

## 主要ファイル詳細

### docs/textbook.md
- **容量**: 76,000+バイト
- **内容**: 完全な研修テキスト（2時間プログラム）
- **構成**:
  1. JavaScriptとHTMLの関係（10分）
  2. JavaScript基礎（30分）
  3. Kintoneの仕組みとイベント（22分）
  4. 実践カスタマイズ作成（25分）
  5. デバッグ・トラブル対応（10分）
  6. 応用範囲（FormBridge、kViewer）
- **新機能**: ブレークポイントを使ったデバッグ実習

### debug_practice_buggy.js / debug_practice_fixed.js
- **内容**: ブレークポイントデバッグ実習用コード
- **含まれるバグ**:
  1. 文字列の数値変換不適切（`"100" + "5" = "1005"`）
  2. 論理演算子の間違い（`&&` → `||`）
- **学習目標**: Chrome DevToolsによる実践的デバッグスキル習得

### docs/cheats/js-kintone-training.zip
- **内容**: 演習用kintoneアプリテンプレート
- **フィールド構成**: 単価、数量、合計
- **用途**: 実際のkintoneアプリでのカスタマイズ実習

## 技術仕様

### 使用技術
- **フロントエンド**: HTML5, JavaScript ES6+, CSS3
- **開発環境**: Node.js, Biome（コードフォーマッター）
- **対象ブラウザ**: Chrome, Firefox, Edge（開発者ツール必須）

### 前提知識
- プログラミング未経験者対応
- HTMLの基本的な理解があると有利
- Kintoneの基本操作経験があると有利

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
2. javascript_practice_1.htmlから順次実行
3. kintone_customize_step1.htmlから順次実践

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
- **最新版**：ブレークポイントデバッグ実習追加
  - debug_practice_buggy.js / debug_practice_fixed.js 追加
  - js-kintone-training.zip（演習用アプリテンプレート）追加
  - 研修テキストにデバッグ実習セクション統合
  - ファイル名を分かりやすく変更（textbook.md, speech_script.md, javascript_practice_*.html）

このプロジェクトは、JavaScript初心者がKintoneカスタマイズを習得し、実践的なデバッグスキルまで身につけるための包括的な学習環境を提供しています。