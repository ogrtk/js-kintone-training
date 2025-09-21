# JavaScript & Kintoneカスタマイズ研修教材

このフォルダは、プログラム初心者向けにJavaScriptの基礎とkintoneのカスタマイズの初歩を学ぶための教材を格納しています。

## プロジェクト構成

```
(プロジェクトルート)
├── package.json                        # Node.js依存関係
├── biome.json                          # コードフォーマッター設定
├── claude.md                           # Claude用プロジェクト説明書
├── readme.md                           # このファイル
├── debug_practice_buggy.js             # デバッグ実習用バグありコード
├── debug_practice_fixed.js             # デバッグ実習用修正済みコード
└── docs/                               # 教材ディレクトリ
    ├── textbook.md                     # メイン研修テキスト（2時間プログラム）
    ├── speech_script.md                # 講師用台本
    └── cheats/                         # 実習用ファイル集
        ├── javascript_practice_1.html  # HTMLとJavaScriptの関係
        ├── javascript_practice_2.html  # 変数とデータ型
        ├── javascript_practice_3.html  # 関数の定義と呼び出し
        ├── javascript_practice_4.html  # オブジェクトの操作
        ├── javascript_practice_5.html  # 配列の基本操作
        ├── javascript_practice_6.html  # 条件分岐
        ├── debug_practice_buggy.js     # デバッグ実習用バグありコード
        ├── debug_practice_fixed.js     # デバッグ実習用修正済みコード
        ├── kintone_customize_step1.js  # 実習用カスタマイズ（基本計算）
        ├── kintone_customize_step2.js  # 実習用カスタマイズ（バリデーション追加）
        ├── kintone_customize_step3.js  # 実習用カスタマイズ（保存前チェック）
        └── js-kintone-training.zip     # 演習用kintoneアプリテンプレート

## ファイル一覧

### 基礎学習用ファイル（docs/cheats/）

| ファイル名 | 内容 | 学習目標 |
|-----------|------|----------|
| `javascript_practice_1.html` | HTMLとJavaScriptの関係 | 開発者ツールの使い方、基本的な処理の流れ |
| `javascript_practice_2.html` | 変数とデータ型 | let, const, データ型の理解 |
| `javascript_practice_3.html` | 関数の定義と呼び出し | function, アロー関数の使い方 |
| `javascript_practice_4.html` | オブジェクトの操作 | Kintoneレコード形式の理解 |
| `javascript_practice_5.html` | 配列の基本操作 | ループ処理、レコード一覧の扱い |
| `javascript_practice_6.html` | 条件分岐 | if文, switch文, バリデーション |

### デバッグ実習用ファイル

| ファイル名 | 内容 | 学習目標 |
|-----------|------|----------|
| `debug_practice_buggy.js` | バグを含むkintoneカスタマイズコード | ブレークポイント実習、実践的デバッグ |
| `debug_practice_fixed.js` | 修正済みコード | 正しい実装の理解 |

### 実用ファイル（docs/cheats/）

| ファイル名 | 内容 | 用途 |
|-----------|------|------|
| `js-kintone-training.zip` | 演習用kintoneアプリテンプレート | 実際のアプリでの実習 |
| `kintone_customize_step1-3.js` | 段階的なカスタマイズサンプル | 学習の進行に応じた実装例 |

### 研修テキスト（docs/）

| ファイル名 | 内容 | 用途 |
|-----------|------|------|
| `textbook.md` | 完全な研修テキスト（68KB） | 2時間の研修プログラム |
| `speech_script.md` | 講師用台本 | 研修実施時の参考 |

## 使い方

### 1. 基礎学習の進め方

1. `javascript_practice_1.html` から順番に開く
2. **F12** を押して開発者ツールのConsoleタブを開く
3. ページの指示に従ってボタンをクリック
4. Consoleに表示される結果を確認

### 2. 各ファイルの詳細

#### javascript_practice_1.html - 最初に必ず確認

- JavaScriptとHTMLの関係を理解
- 開発者ツールの使い方をマスター
- console.logの基本を学習

#### javascript_practice_2.html - 変数の基礎

```javascript
// 学習内容例
let name = '田中';
const price = 1000;
console.log('name:', name);
```

#### javascript_practice_3.html - 関数の基礎

```javascript
// 学習内容例
function calculateTotal(price, quantity) {
    return price * quantity;
}
```

#### javascript_practice_4.html - オブジェクトの基礎（重要）

```javascript
// Kintoneレコード形式を学習
let record = {
    "商品名": { "value": "ノートパソコン" }
};
```

#### debug_practice_buggy.js - ブレークポイント実習（重要！）

- 意図的にバグを含んだkintoneカスタマイズコード
- Chrome DevToolsのブレークポイント機能を実習
- 実際のデバッグフローを体験

**実習手順：**
1. kintoneアプリで `debug_practice_buggy.js` をアップロード
2. **F12** → **Sources** タブでファイルを探す
3. 19行目と39行目にブレークポイントを設定
4. フィールドに値を入力してブレークポイントで停止
5. 変数の値を確認してバグの原因を特定

### 3. エラーが出た場合

1. **F12** で開発者ツールを開く
2. **Console** タブでエラー内容を確認
3. **ブレークポイント実習**で実践的デバッグを体験

### 4. Kintoneへの実装

1. `js-kintone-training.zip` をkintoneにインポートしてアプリを作成
2. Kintoneアプリの「設定」→「JavaScript / CSS でカスタマイズ」
3. JavaScriptファイルをアップロード
4. 「アプリを更新」をクリック

### 5. ブレークポイントデバッグの実習

1. `debug_practice_buggy.js` をkintoneアプリにアップロード
2. **F12** → **Sources** タブでデバッガを開く
3. ブレークポイントを設定して変数の値を確認
4. バグの原因を特定して修正
5. `debug_practice_fixed.js` と比較して理解を深める

## よくある問題と解決方法

### Q: Consoleに何も表示されない

A: ページを再読み込み（F5）してください。一部のブラウザでは初回読み込み時にConsoleが表示されないことがあります。

### Q: ボタンを押してもエラーが出る

A:

1. F12でConsoleを確認してエラー内容を読む
2. ブラウザを変えて試す（Chrome推奨）

### Q: 実際のKintoneで動かない

A:

1. フィールドコードが正しいか確認
2. Consoleでエラーを確認

## 学習の進め方

### 研修（2時間）

1. **10分**: javascript_practice_1.html で環境確認
2. **20分**: javascript_practice_2-6.html で基礎学習
3. **25分**: Kintoneイベントの説明
4. **35分**: 講師と一緒にカスタマイズ作成
5. **10分**: ブレークポイントを使ったデバッグ実習

## 参考リンク

- [Kintone 開発者サイト](https://developer.cybozu.io/hc/ja)
- [JavaScript API リファレンス](https://developer.cybozu.io/hc/ja/articles/202166330)

## サポート

エラーや不明な点があれば、研修資料と合わせて社内の担当者に相談してください。

---

Happy Coding! 🚀
