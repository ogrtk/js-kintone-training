# JavaScript & Kintoneカスタマイズ研修教材

このフォルダは、プログラム初心者向けにJavaScriptの基礎とkintoneのカスタマイズの初歩を学ぶための教材を格納しています。

## プロジェクト構成

```
/workspaces/devcontest/
├── package.json                    # Node.js依存関係
├── biome.json                      # コードフォーマッター設定
├── claude.md                       # Claude用プロジェクト説明書
├── readme.md                       # このファイル
└── docs/                           # 教材ディレクトリ
    ├── kintone_js_training.md      # メイン研修テキスト（2時間プログラム）
    ├── kintone_js_training_speech_script.md  # 講師用台本
    └── cheats/                     # 実習用ファイル集
        ├── demo1.html              # HTMLとJavaScriptの関係
        ├── demo2.html              # 変数とデータ型
        ├── demo3.html              # 関数の定義と呼び出し
        ├── demo4.html              # オブジェクトの操作
        ├── demo5.html              # 配列の基本操作
        ├── demo6.html              # 条件分岐
        ├── demo_all_in_one.html    # 全機能の統合デモ
        ├── kintone_practice.html   # Kintone疑似体験環境
        ├── debug_practice.html     # エラー修正練習
        └── kintone_sample.js       # 実際のKintone用JavaScript

## ファイル一覧

### 基礎学習用ファイル（docs/cheats/）

| ファイル名 | 内容 | 学習目標 |
|-----------|------|----------|
| `demo1.html` | HTMLとJavaScriptの関係 | 開発者ツールの使い方、基本的な処理の流れ |
| `demo2.html` | 変数とデータ型 | let, const, データ型の理解 |
| `demo3.html` | 関数の定義と呼び出し | function, アロー関数の使い方 |
| `demo4.html` | オブジェクトの操作 | Kintoneレコード形式の理解 |
| `demo5.html` | 配列の基本操作 | ループ処理、レコード一覧の扱い |
| `demo6.html` | 条件分岐 | if文, switch文, バリデーション |

### 統合・実践用ファイル（docs/cheats/）

| ファイル名 | 内容 | 学習目標 |
|-----------|------|----------|
| `demo_all_in_one.html` | 全機能の統合デモ | JavaScript基礎の総復習 |
| `kintone_practice.html` | Kintone疑似体験環境 | イベント処理、実際の開発体験 |
| `debug_practice.html` | エラー修正練習 | デバッグスキルの習得 |

### 実用ファイル（docs/cheats/）

| ファイル名 | 内容 | 用途 |
|-----------|------|------|
| `kintone_sample.js` | 実際のKintone用JavaScript | アプリへの実装参考 |

### 研修テキスト（docs/）

| ファイル名 | 内容 | 用途 |
|-----------|------|------|
| `kintone_js_training.md` | 完全な研修テキスト（68KB） | 2時間の研修プログラム |
| `kintone_js_training_speech_script.md` | 講師用台本 | 研修実施時の参考 |

## 使い方

### 1. 基礎学習の進め方

1. `demo1.html` から順番に開く
2. **F12** を押して開発者ツールのConsoleタブを開く
3. ページの指示に従ってボタンをクリック
4. Consoleに表示される結果を確認

### 2. 各ファイルの詳細

#### demo1.html - 最初に必ず確認

- JavaScriptとHTMLの関係を理解
- 開発者ツールの使い方をマスター
- console.logの基本を学習

#### demo2.html - 変数の基礎

```javascript
// 学習内容例
let name = '田中';
const price = 1000;
console.log('name:', name);
```

#### demo3.html - 関数の基礎

```javascript
// 学習内容例
function calculateTotal(price, quantity) {
    return price * quantity;
}
```

#### demo4.html - オブジェクトの基礎（重要）

```javascript
// Kintoneレコード形式を学習
let record = {
    "商品名": { "value": "ノートパソコン" }
};
```

#### kintone_practice.html - 実践練習

- 実際のKintoneに近い環境で練習
- イベントの動作を体験
- バリデーション処理を確認

### 3. エラーが出た場合

1. **F12** で開発者ツールを開く
2. **Console** タブでエラー内容を確認
3. `debug_practice.html` でエラー修正を練習

### 4. Kintoneへの実装

1. `kintone_sample.js` を参考にコードを作成
2. Kintoneアプリの「設定」→「JavaScript / CSS でカスタマイズ」
3. JavaScriptファイルをアップロード
4. 「アプリを更新」をクリック

## よくある問題と解決方法

### Q: Consoleに何も表示されない

A: ページを再読み込み（F5）してください。一部のブラウザでは初回読み込み時にConsoleが表示されないことがあります。

### Q: ボタンを押してもエラーが出る

A:

1. F12でConsoleを確認してエラー内容を読む
2. `debug_practice.html` で類似のエラーを確認
3. ブラウザを変えて試す（Chrome推奨）

### Q: 実際のKintoneで動かない

A:

1. フィールドコードが正しいか確認
2. `kintone_sample.js` のコメントを参考に修正
3. Consoleでエラーを確認

## 学習の進め方

### 研修当日（2時間）

1. **10分**: demo1.html で環境確認
2. **20分**: demo2-6.html で基礎学習
3. **25分**: Kintoneイベントの説明
4. **35分**: 講師と一緒にカスタマイズ作成
5. **10分**: デバッグ方法の習得

### 研修後の自習

1. **1週目**: 全HTMLファイルを再実行して復習
2. **2週目**: kintone_practice.htmlで応用練習
3. **3週目**: 実際のKintoneアプリでカスタマイズ作成

## 参考リンク

- [Kintone 開発者サイト](https://developer.cybozu.io/hc/ja)
- [JavaScript API リファレンス](https://developer.cybozu.io/hc/ja/articles/202166330)

## サポート

エラーや不明な点があれば、研修資料と合わせて社内の担当者に相談してください。

---

Happy Coding! 🚀
