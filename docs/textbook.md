# JavaScript & Kintoneカスタマイズ研修テキスト

## 研修概要

- **所要時間**: 2時間
- **目標**: Kintoneカスタマイズの基礎概念を理解し、自習で発展できる土台を築く
- **前提知識**: 特になし（プログラミング未経験者OK）

---

## 1. JavaScript と HTML の関係（10分）

### 最初に試してみよう

まず、以下のHTMLファイルを作成して、ブラウザで開いてみましょう。

**javascript_practice_1.html**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>JavaScript基礎 - デモ1</title>
</head>
<body>
    <h1>JavaScript基礎 - デモ1</h1>
    <p>F12を押して開発者ツールのConsoleタブを確認してください</p>
    
    <input type="text" id="name" value="田中">
    <button id="btn">送信</button>
    
    <script>
        // コンソールにメッセージを出力
        console.log('JavaScriptが動いています！');
        console.log('現在の時刻:', new Date());
        
        // ボタンがクリックされたときの処理
        document.getElementById('btn').onclick = function() {
            let nameValue = document.getElementById('name').value;
            console.log('入力された名前:', nameValue);
            alert('送信されました：' + nameValue);
        };
        
        // ページ読み込み完了時の処理
        console.log('ページが読み込まれました');
    </script>
</body>
</html>
```

**確認方法**

1. 上記のコードを `javascript_practice_1.html` として保存
2. ブラウザで開く
3. **F12** を押して開発者ツールを開く
4. **Console** タブを確認
5. 名前を変更してボタンをクリック

### HTMLとJavaScriptの役割分担

- **HTML（構造）**: ページの見た目と要素を定義
- **JavaScript（動作）**: ユーザーの操作に反応して動作を制御
- **Console（確認）**: プログラムの動作を確認するデバッグツール

### 要素の取得方法

```javascript
// ID で取得
let element = document.getElementById('name');

// クラス名で取得
let elements = document.getElementsByClassName('item');

// より便利な方法
let element = document.querySelector('#name');    // ID
let element = document.querySelector('.item');    // クラス
```

### Kintoneでも同じ考え方

- HTML → Kintoneのフィールド
- JavaScript → カスタマイズ処理
- Console → デバッグとテスト
- 要素取得 → フィールド値の取得・設定

---

## 2. JavaScript基礎（30分）

### 変数の使い方

**javascript_practice_2.html**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>JavaScript基礎 - 変数</title>
</head>
<body>
    <h1>JavaScript基礎 - 変数デモ</h1>
    <p>F12でConsoleを確認してください</p>
    
    <script>
        console.log('=== 変数のデモ ===');
        
        // 変数の宣言
        let name = '田中';           // 変更可能
        const price = 1000;         // 変更不可
        var old_style = '古い書き方'; // 古い書き方なので使わないこと！!
        
        console.log('name:', name);
        console.log('price:', price);

        // 変数の変更
        name = '佐藤';
        console.log('変更後のname:', name);
        
        // const は変更できない（エラーになる）
        // price = 2000;  // この行のコメントを外すとエラーになる

        // データ型の確認
        let text = '文字列';        // 文字列
        let number = 100;          // 数値
        let flag = true;           // 真偽値（true/false）
        
        console.log('text:', text, 'typeof:', typeof text);
        console.log('number:', number, 'typeof:', typeof number);
        console.log('flag:', flag, 'typeof:', typeof flag);
        
        text = text + name;
        console.log('演算後のtext:', text);

        number = number + price;
        console.log('演算後のnumber:', number);

        text = text + number;
        console.log('文字列+数値で演算後のtext:', text);

    </script>
</body>
</html>
```

> ひとことメモ : 「letの方が便利だから、letを使っておけばいいのでは？？」
>
> たしかに便利ですが、プログラムをメンテナンスする人にとっては、「後で値が変わってるかもしれない・・・」と、調査する範囲が広くなります。
>
> プログラミングでは、必要十分な機能に絞ることがとても大切です。必要ない限りはletを使わず、constで定義するのがプログラマの嗜みです。

### 関数の書き方

**javascript_practice_3.html**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>JavaScript基礎 - 関数</title>
</head>
<body>
    <h1>JavaScript基礎 - 関数デモ</h1>
    <p>F12でConsoleを確認してください</p>
    
    <script>
        console.log('=== 関数のデモ ===');
        
        // 基本的な関数
        function calculateTotal(price, quantity) {
            console.log('calculateTotal関数が呼ばれました');
            console.log('price:', price, 'quantity:', quantity);
            let result = price * quantity;
            console.log('計算結果:', result);
            return result;
        }
        
        // 短い書き方（アロー関数）
        const calculateTotalArrow = (price, quantity) => {
            console.log('アロー関数が呼ばれました');
            return price * quantity;
        };
        
        // 関数の呼び出し
        console.log('--- 通常の関数を実行 ---');
        let total1 = calculateTotal(100, 5);
        console.log('結果1:', total1);
        
        console.log('--- アロー関数を実行 ---');
        let total2 = calculateTotalArrow(200, 3);
        console.log('結果2:', total2);
        
        // より実用的な例
        function validateInput(value) {
            console.log('入力値をチェック:', value);
            if (value === '' || value == null) {
                console.log('エラー: 値が空です');
                return false;
            }
            console.log('チェックOK');
            return true;
        }
        
        // テスト実行
        console.log('--- バリデーションテスト ---');
        validateInput('有効な値');
        validateInput('');
        validateInput(null);
    </script>
</body>
</html>
```

### オブジェクトの操作

**javascript_practice_4.html**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>JavaScript基礎 - オブジェクト</title>
</head>
<body>
    <h1>JavaScript基礎 - オブジェクトデモ</h1>
    <p>F12でConsoleを確認してください</p>
    
    <script>
        console.log('=== オブジェクトのデモ ===');
        
        // オブジェクトの作成
        let user = {
            name: '田中',
            age: 30,
            email: 'tanaka@example.com'
        };
        
        console.log('user オブジェクト全体:', user);
        
        // 値の取得
        console.log('user.name:', user.name);
        console.log('user["name"]:', user['name']);  // 同じ結果
        console.log('user.age:', user.age);
        console.log('user.email:', user.email);
        
        // 値の設定
        console.log('--- 値を変更します ---');
        user.name = '佐藤';
        user['age'] = 31;
        console.log('変更後 user.name:', user.name);
        console.log('変更後 user.age:', user.age);
        
        // 新しいプロパティの追加
        user.department = '営業部';
        console.log('追加後のuser:', user);
        
        // Kintoneのレコード形式の例
        console.log('--- Kintoneレコード形式の例 ---');
        let record = {
            "商品名": { "value": "ノートパソコン" },
            "単価": { "value": "50000" },
            "数量": { "value": "2" }
        };
        
        console.log('recordオブジェクト:', record);
        console.log('商品名:', record["商品名"].value);
        console.log('単価:', record["単価"].value);
        console.log('数量:', record["数量"].value);
        
        // 合計計算
        let price = parseInt(record["単価"].value);
        let quantity = parseInt(record["数量"].value);
        let total = price * quantity;
        console.log('合計:', total);
    </script>
</body>
</html>
```

> ひとことメモ : オブジェクトをconstに代入した場合はどうなる・・・？
> 
> ```js
> // オブジェクトの作成
> const user2 = {
>     name: '田中 洋子',
>     age: 30,
>     email: 'tanaka@example.com'
> };
> 
> // 属性の変更はOK
> user2.name = '佐藤 洋子';
> 
> // 別オブジェクトの代入はNG
> user2 = {
>     name: '吉田 一郎',
>     age: 58,
>     email: 'yoshida@example.com'
> };
> ```
> 

### 配列の基本

**javascript_practice_5.html**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>JavaScript基礎 - 配列</title>
</head>
<body>
    <h1>JavaScript基礎 - 配列デモ</h1>
    <p>F12でConsoleを確認してください</p>
    
    <script>
        console.log('=== 配列のデモ ===');
        
        // 配列の作成
        let fruits = ['りんご', 'みかん', 'ばなな'];
        console.log('fruits配列:', fruits);
        
        // 要素の取得
        console.log('fruits[0]:', fruits[0]);     // 'りんご'
        console.log('fruits[1]:', fruits[1]);     // 'みかん'
        console.log('fruits[2]:', fruits[2]);     // 'ばなな'
        console.log('配列の長さ:', fruits.length); // 3
        
        // 要素の追加
        console.log('--- 要素を追加 ---');
        fruits.push('ぶどう');
        console.log('追加後のfruits:', fruits);
        console.log('新しい長さ:', fruits.length);
        
        // ループで全要素を表示
        console.log('--- 全要素をループで表示 ---');
        for (let i = 0; i < fruits.length; i++) {
            console.log(`${i}番目: ${fruits[i]}`);
        }
        
        // より実用的な例：数値の配列
        console.log('--- 数値配列の例 ---');
        let scores = [85, 92, 78, 96, 88];
        console.log('scores:', scores);
        
        // 合計計算
        let sum = 0;
        for (let i = 0; i < scores.length; i++) {
            sum += scores[i];
            console.log(`${i}番目: ${scores[i]}, 累計: ${sum}`);
        }
        console.log('合計点:', sum);
        console.log('平均点:', sum / scores.length);
        
        // Kintoneでよくある：レコード一覧の処理例
        console.log('--- レコード一覧の例 ---');
        let records = [
            { "名前": "田中", "点数": 85 },
            { "名前": "佐藤", "点数": 92 },
            { "名前": "鈴木", "点数": 78 }
        ];
        
        console.log('records:', records);
        for (let i = 0; i < records.length; i++) {
            let record = records[i];
            console.log(`${record.名前}さん: ${record.点数}点`);
        }
    </script>
</body>
</html>
```

### 条件分岐

**javascript_practice_6.html**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>JavaScript基礎 - 条件分岐</title>
</head>
<body>
    <h1>JavaScript基礎 - 条件分岐デモ</h1>
    <p>F12でConsoleを確認してください</p>
    
    <script>
        console.log('=== 条件分岐のデモ ===');
        
        // 基本的な条件分岐
        function checkScore(score) {
            console.log(`--- ${score}点の評価 ---`);
            
            if (score >= 90) {
                console.log('評価: 優秀です');
                return '優秀';
            } else if (score >= 70) {
                console.log('評価: 合格です');
                return '合格';
            } else {
                console.log('評価: 再試験です');
                return '再試験';
            }
        }
        
        // テスト実行
        checkScore(95);
        checkScore(85);
        checkScore(65);
        
        // より実用的な例：入力チェック
        console.log('--- 入力チェックの例 ---');
        function validateQuantity(quantity) {
            console.log(`数量をチェック: ${quantity}`);
            
            if (quantity === '' || quantity == null) {
                console.log('エラー: 数量が入力されていません');
                return false;
            } else if (isNaN(quantity)) {
                console.log('エラー: 数値ではありません');
                return false;
            } else if (quantity <= 0) {
                console.log('エラー: 0以下の値です');
                return false;
            } else if (quantity > 1000) {
                console.log('警告: 1000を超えています');
                return 'warning';
            } else {
                console.log('チェックOK');
                return true;
            }
        }
        
        // バリデーションテスト
        validateQuantity('');
        validateQuantity('abc');
        validateQuantity(-5);
        validateQuantity(1500);
        validateQuantity(10);
        
        // Kintoneでよくある：ステータスによる処理分岐
        console.log('--- ステータス処理の例 ---');
        function processStatus(status) {
            console.log(`ステータス処理: ${status}`);
            
            switch (status) {
                case '未処理':
                    console.log('→ 処理待ちです');
                    break;
                case '処理中':
                    console.log('→ 現在処理中です');
                    break;
                case '完了':
                    console.log('→ 処理が完了しています');
                    break;
                default:
                    console.log('→ 不明なステータスです');
            }
        }
        
        processStatus('未処理');
        processStatus('処理中');
        processStatus('完了');
        processStatus('不明');
    </script>
</body>
</html>
```

---

## 2.5. イベントリスナーの基礎（10分）

### Kintoneの前に理解すべき重要な概念

JavaScriptの基礎を学んだところで、Kintoneカスタマイズに入る前に、もう一つ重要な概念を理解しましょう。

それが「**イベントリスナー**」です。これはKintoneの`kintone.events.on()`を理解するために必須の知識です。

### イベントとは何か

**イベント**とは「ウェブページで起こる出来事」のことです：

- ボタンのクリック
- テキストボックスへの入力
- ページの読み込み完了
- マウスの移動
- フォームの送信 など

javascript_practice_1.htmlでボタンをクリックしたときに起きたことを思い出してください：

- 「ボタンをクリックした」→これが**イベント**
- 「アラートが表示された」→これが**イベントへの反応**

### イベントリスナーの仕組み

javascript_practice_1.htmlの中には、実際にこのようなコードが書かれています：

```javascript
document.getElementById('btn').onclick = function() {
    let nameValue = document.getElementById('name').value;
    console.log('入力された名前:', nameValue);
    alert('送信されました：' + nameValue);
};
```

**イベントリスナーとは：**
「特定のイベントが起きたときに実行される関数」のことです。

**構造を分解すると：**

1. **イベントの対象**：`document.getElementById('btn')`
   - 「どの要素のイベントを監視するか」

2. **イベントの種類**：`.onclick`
   - 「どんなイベントを監視するか」

3. **実行する関数**：`function() { ... }`
   - **重要：関数そのものを代入している**

### より現代的な書き方

```javascript
document.getElementById('btn').addEventListener('click', function() {
    // 処理
});
```

この`addEventListener`では：

- 第1引数：`'click'`（イベントの種類）
- 第2引数：`function() { ... }`（実行する関数）

**ここが重要なポイント：引数として関数を渡している！**

### コールバック関数の概念

これが「コールバック関数」という仕組みです。

**通常の関数の呼び出し：**

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}
// 自分で関数を呼び出す
let result = calculateTotal(100, 5);
```

**コールバック関数：**

```javascript
element.addEventListener('click', function() {
    // 処理
});
// ブラウザが「クリック時に」自動的に関数を呼び出す
```

**重要な違い：**

- 関数を呼び出すのは、私たちではない
- ブラウザが「イベントが起きたとき」に自動的に関数を呼び出す
- 私たちは「このイベントが起きたら、この関数を実行してください」とお願いしているだけ

---

## 3. Kintoneの仕組みとイベント（22分）

JavaScriptの基礎とイベントリスナーの概念を理解したところで、いよいよKintoneカスタマイズの世界に入りましょう。

### Kintoneのフィールド構造

```javascript
// レコードの構造例
{
    "商品名": { "value": "ノートパソコン" },
    "単価": { "value": "50000" },
    "数量": { "value": "2" },
    "合計": { "value": "100000" }
}
```

### イベント駆動の概念

Kintoneでは「何かが起きたとき」に処理を実行します。

**主要なイベント**

- `app.record.detail.show` → レコード詳細画面を表示したとき
- `app.record.create.show` → レコード作成画面を表示したとき
- `app.record.edit.show` → レコード編集画面を表示したとき
- `app.record.create.submit` → レコードを新規保存するとき
- `app.record.edit.submit` → レコードを更新保存するとき
- `app.record.edit.change.フィールドコード` → 特定のフィールドが変更されたとき

### イベントの基本パターン

```javascript
kintone.events.on('イベント名', function(event) {
    // ここに処理を書く
    
    return event;  // 忘れずにreturn
});
```

先ほど学んだイベントリスナーと全く同じ仕組みですね！

**素のHTMLとKintoneの比較：**

```javascript
// HTML
element.addEventListener('click', function() {
    // 処理
});

// Kintone
kintone.events.on('app.record.edit.change.数量', function(event) {
    // 処理
    return event;
});
```

> ひとことメモ : kintoneのAPIドキュメント
>
> どんなイベントが使えて、イベント内にどんな情報を持っているかなどの情報が開発者向けのドキュメントとして公開されています。
>
> - [イベントハンドラーを登録する](https://cybozu.dev/ja/id/37f50c8d618067d42eee8050/#register-event-handlers)
>
> - [イベント](https://cybozu.dev/ja/id/9744d83c79ac1b73e5cab2c7/#event)

**重要なポイント：**

1. **同じコールバック関数の仕組み：**
   - 第1引数：イベント名（文字列）
   - 第2引数：実行する関数
   - 関数を呼び出すのはKintone（私たちではない）

2. **eventオブジェクト：**
   - HTMLでは必要に応じて`event`を受け取る
   - Kintoneでは必ず`event`オブジェクトが渡される
   - この`event`の中にレコードの情報がすべて入っている

3. **return eventが必須：**
   - HTMLでは通常returnは不要
   - Kintoneでは必ず`event`を返す必要がある
   - これによってKintoneが「処理が完了した」ことを知る

### レコードの取得と設定

```javascript
// レコードの取得
kintone.events.on('app.record.detail.show', function(event) {
    let record = event.record;
    
    // フィールド値の取得
    let productName = record['商品名'].value;
    let price = record['単価'].value;
    
    console.log('商品名: ' + productName);
    console.log('単価: ' + price);
    
    return event;
});

// レコードの設定
kintone.events.on('app.record.edit.change.数量', function(event) {
    let record = event.record;
    
    // 値の取得
    let price = parseInt(record['単価'].value) || 0;
    let quantity = parseInt(record['数量'].value) || 0;
    
    // 計算
    let total = price * quantity;
    
    // 値の設定
    record['合計'].value = total;
    
    return event;
});
```

---

## 4. 実践：カスタマイズを一緒に作成（25分）

### 作成するカスタマイズ

「入力チェック付き計算フィールド」を作成します。

**仕様**

1. 単価 × 数量 = 合計金額を自動計算
2. 数量が負の数の場合はエラーメッセージを表示
3. 合計が10万円を超える場合は警告を表示

### Step 1: 基本的な自動計算

```javascript
(function() {
    'use strict';
    
    // 数量が変更されたときの処理
    kintone.events.on('app.record.edit.change.数量', function(event) {
        let record = event.record;
        
        // 値の取得（数値に変換、エラーの場合は0）
        let price = parseInt(record['単価'].value) || 0;
        let quantity = parseInt(record['数量'].value) || 0;
        
        // 計算
        let total = price * quantity;
        
        // 結果の設定
        record['合計'].value = total;
        
        return event;
    });
    
})();
```
> ひとことメモ : `use strict`とは
>
> JavaScriptのコードをより厳密なモードで実行するための指示文です。
> 暗黙的なグローバル変数の禁止や、関数での重複するパラメータ名の禁止など
>
> 基本的に指定することが推奨されます。

> ひとことメモ : 即時実行関数（IIFE）とは
>
>上記のコードでは`(function() { ... })()`という書き方を使用しています。これは**即時実行関数（IIFE: Immediately Invoked Function Expression）**と呼ばれる重要なパターンです。
>
>**なぜこの書き方を使うのか：**
>
>1. **変数等の定義の衝突を防ぐ**
>   - Kintoneでは複数のカスタマイズが同時に動作することがあります
>   - 同じ変数名や関数名があると、予期しない動作の原因になります
>   ```javascript
>   // ❌ グローバル変数を作ってしまう例
>   let userName = '田中';
>   function calculateTotal() { ... }
>
>   // ✅ 即時実行関数で囲む
>   (function() {
>       let userName = '田中';      // この変数は外部から見えない
>       function calculateTotal() { ... }  // この関数も外部から見えない
>   })();
>   ```
>
>**基本構造：**
>```javascript
>(function() {
>    'use strict';  // 厳密モード（安全なコード実行のため）
>
>    // ここに書いたコードは外部から見えない
>    // Kintoneイベントの登録処理を書く
>
>})();  // 関数を定義と同時に実行
>```
>
>これはKintoneカスタマイズの標準的な書き方として覚えておきましょう。

### Step 2: バリデーション追加

```javascript
(function() {
    'use strict';

    kintone.events.on('app.record.edit.change.数量', function(event) {
        let record = event.record;
        
        let price = parseInt(record['単価'].value) || 0;
        let quantity = parseInt(record['数量'].value) || 0;
        
        // バリデーション: 負の数チェック
        if (quantity < 0) {
            alert('数量に負の数は入力できません');
        }
        
        let total = price * quantity;
        record['合計'].value = total;
        
        // 警告: 10万円超え
        if (total > 100000) {
            alert('合計金額が10万円を超えています。確認してください。');
        }
        
        return event;
    });
    
})();
```

### Step 3: 保存前チェック

```javascript
(function() {
    'use strict';
    
    // 数量変更時の処理
    kintone.events.on('app.record.edit.change.数量', function(event) {
        let record = event.record;
        
        let price = parseInt(record['単価'].value) || 0;
        let quantity = parseInt(record['数量'].value) || 0;
        
        // バリデーション: 負の数チェック
        if (quantity < 0) {
            alert('数量に負の数は入力できません');
        }
        
        let total = price * quantity;
        record['合計'].value = total;
        
        // 警告: 10万円超え
        if (total > 100000) {
            alert('合計金額が10万円を超えています。確認してください。');
        }
        
        return event;
    });
    
    // 保存前の最終チェック
    kintone.events.on(['app.record.create.submit', 'app.record.edit.submit'], function(event) {
        let record = event.record;
        
        let quantity = parseInt(record['数量'].value) || 0;
        
        // バリデーション: 負の数チェック
        if (quantity < 0) {
            event.error = '数量に負の数は入力できません';
            return event;
        }
        
        return event;
    });
    
})();
```

### 重要なポイント

**1. エラーハンドリングの使い分け**

- `alert()`: 警告だけ（処理は続行）
- `event.error`: 保存を停止

**2. 配列でのイベント指定**

```javascript
['app.record.create.submit', 'app.record.edit.submit']
```

新規作成と編集の両方で同じチェックを実行できます。

### 完成版をKintoneに設定する手順

1. Kintone アプリの「設定」→「JavaScript / CSS でカスタマイズ」
2. 「JavaScript ファイル」の「アップロードして追加」
3. 作成したコードを .js ファイルとして保存してアップロード
4. 「アプリを更新」をクリック

> 一言メモ : javascriptでのエラーチェックは厳格ではない
>
> JavaScriptのコードはブラウザで実行されるものであり、
> 基本的に、処理内容がそのままユーザ側に見えています。
>
> 開発者ツールからソースタブを開くと、以下にjavascriptファイルが見つかります
>   top > kintoneのドメイン名 > k > api/js > download.do?app=xxxxx
> これを開いて、右クリック＞コンテンツをオーバーライド　すると、
> 保存時のチェック処理を削除してしまうこともできます
>
> 本格的には、保存処理を受け付けたサーバ側でチェックすることが必要ですが、
> kintoneにはそうした仕組みが備わっていません。
> 利害の異なる第三者に利用させる想定の場合は、こうした点にも注意しましょう。

### カスタマイズ処理でよく使うJavaScript例

```javascript
// 数値変換（エラーの場合は0）
let num = parseInt(value) || 0;

// 文字列の長さチェック
if (text.length > 10) { /* 処理 */ }

// 配列の操作
array.push(item);        // 追加
array.length;            // 長さ
array[0];               // 最初の要素

// 日付操作
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;  // 注意: 0から始まる
let date = now.getDate();
```

---

## 5. デバッグ・トラブル対応（10分）

### ブラウザ開発者ツールの使い方

**html要素の見つけ方**

- Chrome/Edge: 右クリック→「検証」
- Firefox: 右クリック→「要素を調査」

**Console タブの活用**

```javascript
// デバッグ用の出力
console.log('デバッグメッセージ');
console.log('変数の値:', variable);

// エラーメッセージの表示
event.error = 'エラーメッセージ';
```



### デバッグに役立つConsoleコマンド

```javascript
// 基本的な出力
console.log('メッセージ');
console.log('変数名:', 変数);

// オブジェクトの内容を詳細表示
console.dir(オブジェクト);

// エラー出力（赤色で表示）
console.error('エラーメッセージ');

// 警告出力（黄色で表示）
console.warn('警告メッセージ');

// テーブル形式で表示（配列に便利）
console.table(配列);
```

### ブレークポイントを使ったデバッグ実習

実際のコードでブレークポイントを使ったデバッグを体験してみましょう。

#### 実習用ファイル

**debug_practice_buggy.js** - バグを含むkintoneカスタマイズコード

```javascript
// kintoneカスタマイズ - デバッグ実習用（バグあり版）
// 単価×数量→合計の自動計算機能

(function() {
    'use strict';

    // 数量または単価が変更された時の計算処理
    kintone.events.on(['app.record.create.change.数量', 'app.record.create.change.単価'], function(event) {
        console.log('計算処理開始');

        const record = event.record;
        const unitPrice = record.単価.value;
        const quantity = record.数量.value;

        console.log('単価:', unitPrice);
        console.log('数量:', quantity);

        // バグ1: 文字列の数値変換が不適切（文字列のまま計算）
        const total = unitPrice + quantity;

        console.log('計算結果:', total);

        // 合計フィールドに結果を設定
        record.合計.value = total;

        return event;
    });

    // レコード保存時の検証
    kintone.events.on(['app.record.create.submit','app.record.edit.submit'], function(event) {
        console.log('保存時検証開始');

        const record = event.record;
        const quantity = parseInt(record.数量.value);

        console.log('数量チェック:', quantity);

        // バグ2: 条件判定の論理演算子が間違っている
        if (quantity < 1 && quantity > 100) {
            console.log('数量エラー検出');
            event.error = '数量は1以上100以下で入力してください';
            return event;
        }

        console.log('検証完了');
        return event;
    });

})();
```

#### デバッグ手順

**1. ブレークポイントの設定**
1. Chrome開発者ツールを開く（F12）
2. Sourcesタブを選択
3. `debug_practice_buggy.js` を探す
4. 以下の行にブレークポイントを設定：
   - 19行目（計算処理）
   - 39行目（条件判定）

**2. バグ1の確認手順**
1. 単価に `100`、数量に `5` を入力
2. ブレークポイント（19行目）で停止
3. 変数の値を確認：
   ```
   unitPrice → "100" (文字列)
   quantity → "5" (文字列)
   total → "1005" (文字列連結)
   ```

**3. バグ2の確認手順**
1. 数量に `150` を入力して保存
2. ブレークポイント（39行目）で停止
3. 条件を確認：
   ```
   quantity → 150
   quantity < 1 → false
   quantity > 100 → true
   false && true → false (エラーが出ない)
   ```

**4. 変数の監視方法**
- **Variables パネル**: 現在のスコープの変数
- **Watch パネル**: 監視したい式を追加
- **Console**: `console.log(変数名)` で値を確認

**5. 修正版コード**

```javascript
// kintoneカスタマイズ - 修正版
(function() {
    'use strict';

    kintone.events.on(['app.record.create.change.数量', 'app.record.create.change.単価'], function(event) {
        console.log('計算処理開始');

        const record = event.record;
        // 修正: 数値に変換
        const unitPrice = parseInt(record.単価.value) || 0;
        const quantity = parseInt(record.数量.value) || 0;

        console.log('単価:', unitPrice);
        console.log('数量:', quantity);

        // 修正: 数値として計算
        const total = unitPrice * quantity;

        console.log('計算結果:', total);
        record.合計.value = total;

        return event;
    });

    kintone.events.on(['app.record.create.submit','app.record.edit.submit'], function(event) {
        console.log('保存時検証開始');

        const record = event.record;
        const quantity = parseInt(record.数量.value);

        console.log('数量チェック:', quantity);

        // 修正: OR演算子に変更
        if (quantity < 1 || quantity > 100) {
            console.log('数量エラー検出');
            event.error = '数量は1以上100以下で入力してください';
            return event;
        }

        console.log('検証完了');
        return event;
    });

})();
```

---

**研修お疲れ様でした！**

### 今日の学習の振り返り

- [x] HTMLとJavaScriptの関係を理解
- [x] JavaScript基礎文法を実際に動かして確認
- [x] イベントリスナーとコールバック関数の概念を習得
- [x] Kintoneイベントの仕組みを体験
- [x] 実用的なカスタマイズを作成
- [x] デバッグ方法を習得

### 次のステップ

1. **今週中に**: 提供したHTMLファイルを全て実行して動作を確認
2. **来週まで**: 簡単なKintoneカスタマイズを1つ作成してみる
3. **今月中に**: 公式ドキュメントを読んで機能を1つ追加

実際のカスタマイズに挑戦する際は、今日学んだデバッグ方法を活用し、少しずつ機能を追加していくことが成功の鍵です！

---

## 7. 応用範囲の広がり - FormBridgeとkViewer

### 学習内容の応用先

実は、今日学んだ知識は、Kintone以外でも活用できます。サイボウズの関連製品でも、同じイベントリスナーとコールバック関数の仕組みが使われています。

### FormBridge（フォームブリッジ）

**FormBridge**は、KintoneのフォームをWebサイトに埋め込むサービスです。これも今日学んだ技術がそのまま使えます。

```javascript
// FormBridgeのカスタマイズ例
formBridge.events.on('form.field.change.single_line_text', function (context) {
  // 変更前の値
  const value = context.value;
  // ...value を用いた処理...
});

formBridge.events.on('form.submitted', function (context) {
  // 完了画面を表示せずに https://example.com へリダイレクト
  context.preventDefault();
  window.location.href = 'https://example.com';
});
```

### kViewer

**kViewer**は、Kintoneのデータを使ってダッシュボードやレポートを作成するサービスです。同様にイベント起点でのカスタマイズ処理を記述可能です。

```javascript
// kViewerのカスタマイズ例
kviewer.events.on('records.show', function (context) {
	const $records = context.getRecordElements();
	// 任意の処理
});
```

### 共通する概念

**今日学んだ知識がそのまま応用できます：**

1. **イベントリスナーの仕組み**
   - Kintone: `kintone.events.on()`
   - FormBridge: `formBridge.events.on()`
   - kViewer: `kviewer.events.on()`

2. **コールバック関数の概念**
   - 第1引数：イベント名
   - 第2引数：実行する関数

3. **デバッグ方法**
   - F12 → Console確認
   - `console.log()`での動作確認
   - エラーメッセージの読み方

4. **基本的なJavaScript**
   - 変数、関数、オブジェクト、配列
   - 条件分岐とループ処理
   - イベント駆動プログラミング

### 公式ドキュメント

より詳しい情報は、各製品の公式ドキュメントをご確認ください：

#### Kintone開発者向け情報

- **URL**: <https://developer.cybozu.io/hc/ja>
- **内容**: 今日学んだ内容の詳細情報と応用例
- **特徴**: JavaScript API、REST API、プラグイン開発など

#### FormBridge開発者向け情報

- **URL**: <https://form.kintoneapp.com/help/customize/v2>
- **内容**: WebサイトへのKintoneフォーム埋め込みとカスタマイズ
- **特徴**: フォームデザインのカスタマイズ、送信後処理など

#### kViewer開発者向け情報

- **URL**: <https://kviewer.kintoneapp.com/help/customize/v2>
- **内容**: ダッシュボードとレポートのカスタマイズ
- **特徴**: データ可視化、インタラクティブなグラフ作成など

### 学習の進め方

これらのドキュメントを見るときも、今日学んだ基礎知識があれば理解が早いはずです：

1. **まずイベント一覧を確認**
   - どんなイベントが使えるか把握
   - 今日学んだKintoneのイベントとの類似点を探す

2. **サンプルコードを動かす**
   - 公式のサンプルをそのまま試す
   - 少しずつ自分なりに改造してみる

3. **エラーが出たらConsoleで確認**
   - F12 → Console確認の手順は全製品共通
   - 今日学んだデバッグ方法がそのまま使える

### まとめ

今日の研修で学んだ技術は、単なるKintoneカスタマイズにとどまりません：

- **FormBridge**: Webサイトへのフォーム埋め込み
- **kViewer**: データダッシュボードの作成
- **その他のWebアプリケーション**: イベントリスナーは標準的な技術

---

**研修お疲れ様でした！**

### 今日の学習の振り返り

- [x] HTMLとJavaScriptの関係を理解
- [x] JavaScript基礎文法を実際に動かして確認
- [x] イベントリスナーとコールバック関数の概念を習得
- [x] Kintoneイベントの仕組みを体験
- [x] 実用的なカスタマイズを作成
- [x] デバッグ方法を習得
- [x] 応用範囲（FormBridge、kViewer）を理解

### 次のステップ

1. **今週中に**: 提供したHTMLファイルを全て実行して動作を確認
2. **来週まで**: 簡単なKintoneカスタマイズを1つ作成してみる
3. **今月中に**: 公式ドキュメントを読んで機能を1つ追加
4. **興味があれば**: FormBridgeやkViewerにもチャレンジ

実際のカスタマイズに挑戦する際は、今日学んだデバッグ方法を活用し、少しずつ機能を追加していくことが成功の鍵です！

```

### よくあるエラーと対処法

#### 1. `Cannot read property 'value' of undefined`
**原因**: フィールドコードが間違っている
```javascript
// ❌ 間違い
let value = record['存在しないフィールド'].value;

// ✅ 正しい
let value = record['正しいフィールドコード'].value;
```

#### 2. `event is not defined`

**原因**: return event を忘れている

```javascript
// ❌ 間違い
kintone.events.on('app.record.edit.show', function(event) {
    // 処理
    // return event; が無い
});

// ✅ 正しい
kintone.events.on('app.record.edit.show', function(event) {
    // 処理
    return event;
});
```

#### 3. `Uncaught SyntaxError`

**原因**: 構文エラー（カッコの閉じ忘れ、セミコロン忘れなど）

```javascript
// ❌ 間違い
if (condition {
    // 処理
}

// ✅ 正しい
if (condition) {
    // 処理
}
```

#### 4. 文字列結合で計算がおかしくなる

**原因**: parseInt()を忘れて文字列のまま計算している

```javascript
// ❌ 間違い（"50" + "2" = "502"になる）
let price = record['単価'].value;
let quantity = record['数量'].value;
let total = price + quantity;  // 文字列結合になる

// ✅ 正しい
let price = parseInt(record['単価'].value) || 0;
let quantity = parseInt(record['数量'].value) || 0;
let total = price * quantity;  // 数値計算になる
```

#### 5. record.フィールドコードとrecord['フィールドコード']の混同

**原因**: ドット記法とブラケット記法を混同している

```javascript
// ❌ 間違い（日本語フィールドコードではエラー）
let value = record.商品名.value;

// ✅ 正しい
let value = record['商品名'].value;

// 英語フィールドコードならどちらでもOK
let value1 = record.productName.value;
let value2 = record['productName'].value;
```

### デバッグのコツ

1. `console.log()` で変数の中身を確認
2. 一行ずつコメントアウトして問題箇所を特定
3. エラーメッセージを Google で検索

---

## 6. 次のステップ・自習の進め方（15分）

### 今日できるようになったこと

- [x] JavaScriptの基本文法
- [x] イベントリスナーとコールバック関数の概念
- [x] Kintoneイベントの仕組み
- [x] フィールド値の取得・設定
- [x] 基本的なバリデーション
- [x] デバッグ方法

### 次に学ぶべきこと

#### レベル1: JavaScript非同期処理

- [ ] Promise と async/await の基礎
- [ ] 非同期処理とコールバック地獄の回避
- [ ] REST API 呼び出しの準備知識
- [ ] エラーハンドリング（try-catch）

#### レベル2: 基本カスタマイズ

- [ ] 他のイベントの活用（show系、submit系）
- [ ] 日付・時刻フィールドの操作
- [ ] ユーザー情報の取得
- [ ] 条件による表示/非表示

#### レベル3: 応用カスタマイズ

- [ ] 他アプリからのデータ取得（REST API）
- [ ] ルックアップの自動実行
- [ ] ファイルアップロード処理
- [ ] 外部サービスとの連携

#### レベル4: 高度なカスタマイズ

- [ ] プロセス管理の自動化
- [ ] 複雑な計算処理
- [ ] CSVインポート・エクスポート
- [ ] グラフの生成

### 実際のkintoneアプリでの実習

このフォルダに含まれている `js-kintone-training.zip` は、実際のkintoneアプリのテンプレートです。以下の手順で実習環境を構築できます。

#### アプリテンプレートの利用手順

1. **kintoneにログイン**
   - 所属組織のkintone環境にアクセス

2. **アプリテンプレートの読み込み**
   - 「アプリ」画面で「アプリを作成」をクリック
   - 「ファイルから作成」を選択
   - `js-kintone-training.zip` をアップロード

3. **作成されるアプリの構成**
   - **単価** フィールド（数値）
   - **数量** フィールド（数値）
   - **合計** フィールド（数値、計算結果表示用）

4. **カスタマイズの実装**
   - アプリの「設定」→「JavaScript / CSS でカスタマイズ」
   - 研修で作成したJavaScriptファイルをアップロード
   - 「アプリを更新」をクリック

5. **動作確認**
   - レコード追加画面で単価・数量を入力
   - 合計が自動計算されることを確認
   - ブレークポイントデバッグも実習可能

#### 実習のメリット

- **実際の環境**: 本物のkintoneアプリでの動作確認
- **即戦力**: そのまま業務で活用可能
- **デバッグ練習**: Chrome DevToolsでの実践的デバッグ
- **カスタマイズ拡張**: 研修後に機能追加の練習が可能

### 自習用リソース

#### 公式ドキュメント

- [Kintone 開発者サイト](https://developer.cybozu.io/hc/ja)
- [JavaScript API リファレンス](https://developer.cybozu.io/hc/ja/articles/202166330)


### 質疑応答

**よくある質問**

**Q: どのくらい勉強すれば実用的なカスタマイズができるようになりますか？**
A: 基本的なカスタマイズなら1-2週間、応用レベルなら1-2ヶ月程度が目安です。毎日少しずつでも継続することが重要です。

**Q: エラーが出たときはどうすればいいですか？**
A: まずはブラウザの開発者ツールでエラー内容を確認し、Google で検索してみてください。生成AIに聞いてもいいでしょう。それでも解決しない場合は、社内の詳しい人に相談しましょう。

**Q: より複雑なカスタマイズをするにはどうすればいいですか？**
A: まずは公式ドキュメントを読み、サンプルコードを参考にしながら少しずつ機能を追加していきましょう。無理に一度に多くの機能を実装しようとせず、段階的に進めることが大切です。


