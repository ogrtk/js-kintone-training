# JavaScript & Kintoneカスタマイズ研修テキスト

## 研修概要

- **所要時間**: 2時間
- **目標**: Kintoneカスタマイズの基礎概念を理解し、自習で発展できる土台を築く
- **前提知識**: 特になし（プログラミング未経験者OK）

---

## 1. JavaScript と HTML の関係（10分）

### 最初に試してみよう

まず、以下のHTMLファイルを作成して、ブラウザで開いてみましょう。

**demo1.html**

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

1. 上記のコードを `demo1.html` として保存
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

**demo2.html**

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

> ひと言メモ : 「letの方が便利だから、letを使っておけばいいのでは？？」
>
> たしかに便利ですが、プログラムをメンテナンスする人にとっては、「後で値が変わってるかもしれない・・・」と、調査する範囲が広くなります。
>
> プログラミングでは、必要十分な機能に絞ることがとても大切です。必要ない限りはletを使わず、constで定義するのがプログラマの嗜みです。

### 関数の書き方

**demo3.html**

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

**demo4.html**

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

**demo5.html**

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

**demo6.html**

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

demo1.htmlでボタンをクリックしたときに起きたことを思い出してください：

- 「ボタンをクリックした」→これが**イベント**
- 「アラートが表示された」→これが**イベントへの反応**

### イベントリスナーの仕組み

demo1.htmlの中には、実際にこのようなコードが書かれています：

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
> 一言メモ : `use strict`とは
>
> JavaScriptのコードをより厳密なモードで実行するための指示文です。
> 暗黙的なグローバル変数の禁止や、関数での重複するパラメータ名の禁止など
>
> 基本的に指定することが推奨されます。

> 一言メモ : 即時実行関数（IIFE）とは
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

### よく使うJavaScript

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
fb.events.on('form.submit.success', function(event) {
    // フォーム送信成功時の処理
    alert('お問い合わせありがとうございました');
    console.log('フォーム送信完了:', event);
    return event;
});

fb.events.on('form.field.change', function(event) {
    // フィールド変更時の処理
    let fieldCode = event.fieldCode;
    let value = event.value;
    
    // 今日学んだバリデーション技術がそのまま使える
    if (fieldCode === 'email' && !value.includes('@')) {
        alert('正しいメールアドレスを入力してください');
    }
    
    return event;
});

fb.events.on('form.show', function(event) {
    // フォーム表示時の処理
    console.log('フォームが表示されました');
    return event;
});
```

### kViewer

**kViewer**は、Kintoneのデータを使ってダッシュボードやレポートを作成するサービスです。

```javascript
// kViewerのカスタマイズ例
kv.events.on('view.ready', function(event) {
    // ビュー表示完了時の処理
    console.log('ダッシュボードの準備完了');
    return event;
});

kv.events.on('view.data.updated', function(event) {
    // データ更新時の処理
    let data = event.data;
    console.log('データが更新されました:', data);
    
    // 条件による表示制御
    if (data.totalSales > 1000000) {
        alert('売上目標を達成しました！');
    }
    
    return event;
});
```

### 共通する概念

**今日学んだ知識がそのまま応用できます：**

1. **イベントリスナーの仕組み**
   - Kintone: `kintone.events.on()`
   - FormBridge: `fb.events.on()`
   - kViewer: `kv.events.on()`

2. **コールバック関数の概念**
   - 第1引数：イベント名
   - 第2引数：実行する関数
   - 必ず`return event`

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

- **URL**: <https://formbridge.cybozu.io/docs/>
- **内容**: WebサイトへのKintoneフォーム埋め込みとカスタマイズ
- **特徴**: フォームデザインのカスタマイズ、送信後処理など

#### kViewer開発者向け情報

- **URL**: <https://kviewer.cybozu.io/docs/>
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

つまり、今日の2時間で、Web開発全般に応用できる基礎スキルを身につけたということです！

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

実際のカスタマイズに挑戦する際は、今日学んだデバッグ方法を活用し、少しずつ機能を追加していくことが成功の鍵です！ラー情報の確認
console.error('エラーメッセージ');

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

#### レベル1: 基本カスタマイズ

- [ ] 他のイベントの活用（show系、submit系）
- [ ] 日付・時刻フィールドの操作
- [ ] ユーザー情報の取得
- [ ] 条件による表示/非表示

#### レベル2: 応用カスタマイズ

- [ ] 他アプリからのデータ取得（REST API）
- [ ] ルックアップの自動実行
- [ ] ファイルアップロード処理
- [ ] 外部サービスとの連携

#### レベル3: 高度なカスタマイズ

- [ ] プロセス管理の自動化
- [ ] 複雑な計算処理
- [ ] CSVインポート・エクスポート
- [ ] グラフの生成

### 自習用リソース

#### 公式ドキュメント

- [Kintone 開発者サイト](https://developer.cybozu.io/hc/ja)
- [JavaScript API リファレンス](https://developer.cybozu.io/hc/ja/articles/202166330)

#### サンプルコード集

```javascript
// ユーザー情報の取得
let user = kintone.getLoginUser();
console.log(user.name); // ログインユーザー名

// 現在日時の設定
let today = new Date();
let dateString = today.getFullYear() + '-' + 
                (today.getMonth() + 1) + '-' + 
                today.getDate();
record['日付フィールド'].value = dateString;

// 条件による表示制御
if (record['ステータス'].value === '完了') {
    kintone.app.record.setFieldShown('備考', false);
}
```

### 練習問題

#### 問題1: 基本計算

消費税込み価格を自動計算するカスタマイズを作成してください。

- 本体価格 × 1.1 = 税込価格

#### 問題2: 日付チェック

開始日が終了日より後の場合、エラーメッセージを表示してください。

#### 問題3: 条件表示

「重要度」が「高」の場合のみ「特記事項」フィールドを表示してください。

### 質疑応答

**よくある質問**

**Q: どのくらい勉強すれば実用的なカスタマイズができるようになりますか？**
A: 基本的なカスタマイズなら1-2週間、応用レベルなら1-2ヶ月程度が目安です。毎日少しずつでも継続することが重要です。

**Q: エラーが出たときはどうすればいいですか？**
A: まずはブラウザの開発者ツールでエラー内容を確認し、Google で検索してみてください。それでも解決しない場合は、社内の詳しい人に相談しましょう。

**Q: より複雑なカスタマイズをするにはどうすればいいですか？**
A: まずは公式ドキュメントを読み、サンプルコードを参考にしながら少しずつ機能を追加していきましょう。無理に一度に多くの機能を実装しようとせず、段階的に進めることが大切です。

---

## 付録: 練習用HTMLファイル一覧

### 基本ファイル

**demo_all_in_one.html** - 全機能を一つのファイルで確認

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>JavaScript基礎 - 総合デモ</title>
    <style>
        body { font-family: 'Arial', sans-serif; margin: 20px; }
        .section { border: 1px solid #ccc; margin: 10px 0; padding: 15px; }
        .section h3 { margin-top: 0; color: #333; }
        input, button { margin: 5px; padding: 8px; }
        button { background-color: #007cba; color: white; border: none; cursor: pointer; }
        button:hover { background-color: #005a87; }
    </style>
</head>
<body>
    <h1>JavaScript基礎 - 総合デモ</h1>
    <p><strong>F12を押してConsoleタブを確認してください</strong></p>
    
    <div class="section">
        <h3>1. 変数テスト</h3>
        <button onclick="testVariables()">変数をテスト</button>
    </div>
    
    <div class="section">
        <h3>2. 関数テスト</h3>
        <input type="number" id="price" placeholder="単価" value="100">
        <input type="number" id="quantity" placeholder="数量" value="5">
        <button onclick="testFunctions()">計算実行</button>
        <p id="result"></p>
    </div>
    
    <div class="section">
        <h3>3. オブジェクトテスト</h3>
        <button onclick="testObjects()">オブジェクトをテスト</button>
    </div>
    
    <div class="section">
        <h3>4. 配列テスト</h3>
        <button onclick="testArrays()">配列をテスト</button>
    </div>
    
    <div class="section">
        <h3>5. 条件分岐テスト</h3>
        <input type="number" id="scoreInput" placeholder="点数を入力" value="85">
        <button onclick="testConditions()">評価を確認</button>
        <p id="evaluation"></p>
    </div>
    
    <div class="section">
        <h3>6. Kintoneっぽいデータ操作</h3>
        <button onclick="testKintoneStyle()">レコード操作をテスト</button>
    </div>
    
    <script>
        console.log('総合デモページが読み込まれました');
        
        // 1. 変数テスト
        function testVariables() {
            console.log('=== 変数テスト開始 ===');
            
            let name = '田中太郎';
            const companyName = 'サイボウズ';
            let age = 30;
            let isActive = true;
            
            console.log('名前:', name);
            console.log('会社名:', companyName);
            console.log('年齢:', age);
            console.log('アクティブ:', isActive);
            
            // 変数の変更
            name = '佐藤花子';
            age = 25;
            console.log('変更後 - 名前:', name, '年齢:', age);
            
            alert('変数テスト完了！Consoleを確認してください');
        }
        
        // 2. 関数テスト
        function testFunctions() {
            console.log('=== 関数テスト開始 ===');
            
            let price = parseInt(document.getElementById('price').value);
            let quantity = parseInt(document.getElementById('quantity').value);
            
            console.log('入力値 - 単価:', price, '数量:', quantity);
            
            // 通常の関数
            function calculateTotal(p, q) {
                console.log('calculateTotal関数実行中...');
                return p * q;
            }
            
            // アロー関数
            const calculateTax = (amount) => {
                console.log('消費税計算中...');
                return Math.floor(amount * 1.1);
            };
            
            let total = calculateTotal(price, quantity);
            let totalWithTax = calculateTax(total);
            
            console.log('小計:', total);
            console.log('税込合計:', totalWithTax);
            
            document.getElementById('result').innerHTML = 
                `小計: ${total}円<br>税込合計: ${totalWithTax}円`;
        }
        
        // 3. オブジェクトテスト
        function testObjects() {
            console.log('=== オブジェクトテスト開始 ===');
            
            // 基本的なオブジェクト
            let user = {
                name: '田中太郎',
                department: '営業部',
                email: 'tanaka@cybozu.co.jp',
                skills: ['JavaScript', 'Kintone', 'Excel']
            };
            
            console.log('ユーザー情報:', user);
            console.log('名前:', user.name);
            console.log('部署:', user['department']);
            console.log('スキル一覧:', user.skills);
            
            // Kintone風のレコードオブジェクト
            let record = {
                "顧客名": { "value": "ABC商事" },
                "担当者": { "value": "田中太郎" },
                "売上": { "value": "1000000" },
                "契約日": { "value": "2024-01-15" }
            };
            
            console.log('レコード:', record);
            console.log('顧客名:', record["顧客名"].value);
            console.log('売上:', record["売上"].value);
            
            alert('オブジェクトテスト完了！');
        }
        
        // 4. 配列テスト
        function testArrays() {
            console.log('=== 配列テスト開始 ===');
            
            let products = ['ノートPC', 'マウス', 'キーボード', 'モニター'];
            console.log('商品リスト:', products);
            console.log('商品数:', products.length);
            
            // 全要素を表示
            console.log('--- 全商品 ---');
            for (let i = 0; i < products.length; i++) {
                console.log(`${i + 1}. ${products[i]}`);
            }
            
            // 新商品追加
            products.push('プリンター');
            console.log('追加後:', products);
            
            // 売上データの配列
            let salesData = [
                { month: '1月', amount: 1000000 },
                { month: '2月', amount: 1200000 },
                { month: '3月', amount: 980000 }
            ];
            
            console.log('--- 売上データ ---');
            let totalSales = 0;
            for (let i = 0; i < salesData.length; i++) {
                console.log(`${salesData[i].month}: ${salesData[i].amount}円`);
                totalSales += salesData[i].amount;
            }
            console.log('合計売上:', totalSales);
            
            alert('配列テスト完了！');
        }
        
        // 5. 条件分岐テスト
        function testConditions() {
            console.log('=== 条件分岐テスト開始 ===');
            
            let score = parseInt(document.getElementById('scoreInput').value);
            console.log('入力された点数:', score);
            
            let evaluation = '';
            let message = '';
            
            if (score >= 90) {
                evaluation = 'S';
                message = '優秀です！';
                console.log('評価: S (90点以上)');
            } else if (score >= 80) {
                evaluation = 'A';
                message = '良好です';
                console.log('評価: A (80-89点)');
            } else if (score >= 70) {
                evaluation = 'B';
                message = '合格です';
                console.log('評価: B (70-79点)');
            } else if (score >= 60) {
                evaluation = 'C';
                message = '要努力';
                console.log('評価: C (60-69点)');
            } else {
                evaluation = 'D';
                message = '再試験';
                console.log('評価: D (60点未満)');
            }
            
            // 追加チェック
            if (score < 0 || score > 100) {
                message = '点数が範囲外です（0-100で入力）';
                console.log('エラー: 点数範囲外');
            }
            
            document.getElementById('evaluation').innerHTML = 
                `評価: ${evaluation}<br>${message}`;
        }
        
        // 6. Kintoneスタイルのデータ操作
        function testKintoneStyle() {
            console.log('=== Kintoneスタイルテスト開始 ===');
            
            // レコードの例（Kintoneから取得した想定）
            let record = {
                "商品名": { "value": "ノートパソコン" },
                "単価": { "value": "80000" },
                "数量": { "value": "3" },
                "割引率": { "value": "10" },
                "合計": { "value": "" }  // これを計算で設定
            };
            
            console.log('処理前のレコード:', record);
            
            // 値の取得と計算
            let productName = record["商品名"].value;
            let unitPrice = parseInt(record["単価"].value) || 0;
            let quantity = parseInt(record["数量"].value) || 0;
            let discountRate = parseInt(record["割引率"].value) || 0;
            
            console.log('商品名:', productName);
            console.log('単価:', unitPrice);
            console.log('数量:', quantity);
            console.log('割引率:', discountRate + '%');
            
            // 計算処理
            let subtotal = unitPrice * quantity;
            let discount = Math.floor(subtotal * discountRate / 100);
            let total = subtotal - discount;
            
            console.log('小計:', subtotal);
            console.log('割引額:', discount);
            console.log('合計:', total);
            
            // レコードに結果を設定
            record["合計"].value = total.toString();
            
            console.log('処理後のレコード:', record);
            
            // バリデーション例
            if (total > 500000) {
                console.log('警告: 合計金額が50万円を超えています');
            }
            
            if (quantity <= 0) {
                console.log('エラー: 数量は1以上で入力してください');
            }
            
            alert('Kintoneスタイルテスト完了！詳細はConsoleを確認してください');
        }
        
        // ページ読み込み時の初期化
        console.log('すべての関数が準備完了しました！');
        console.log('各ボタンをクリックして動作を確認してください');
    </script>
</body>
</html>
```

### Kintone実践用デモファイル

**kintone_practice.html** - Kintoneのイベント処理を疑似体験

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Kintone実践練習</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background-color: #f5f5f5; }
        .kintone-form { background: white; padding: 20px; border-radius: 5px; max-width: 600px; }
        .field-group { margin: 15px 0; }
        label { display: inline-block; width: 100px; font-weight: bold; }
        input, select { padding: 8px; margin: 5px; border: 1px solid #ccc; }
        .readonly { background-color: #f0f0f0; }
        .error { border-color: red; }
        .error-message { color: red; font-size: 12px; }
        .success { border-color: green; }
        button { background: #007cba; color: white; padding: 10px 20px; border: none; cursor: pointer; margin: 5px; }
        button:hover { background: #005a87; }
        .event-log { background: #f9f9f9; padding: 10px; border-left: 4px solid #007cba; margin: 10px 0; }
    </style>
</head>
<body>
    <h1>Kintone実践練習 - 疑似レコード画面</h1>
    <p><strong>F12でConsoleを開いて、Kintoneイベントの動作を確認しましょう</strong></p>
    
    <div class="kintone-form">
        <h2>商品管理レコード</h2>
        
        <div class="field-group">
            <label>商品名:</label>
            <input type="text" id="product_name" value="ノートパソコン">
        </div>
        
        <div class="field-group">
            <label>単価:</label>
            <input type="number" id="unit_price" value="50000">
        </div>
        
        <div class="field-group">
            <label>数量:</label>
            <input type="number" id="quantity" value="2">
        </div>
        
        <div class="field-group">
            <label>割引率(%):</label>
            <input type="number" id="discount_rate" value="10" max="50">
        </div>
        
        <div class="field-group">
            <label>小計:</label>
            <input type="number" id="subtotal" class="readonly" readonly>
        </div>
        
        <div class="field-group">
            <label>割引額:</label>
            <input type="number" id="discount_amount" class="readonly" readonly>
        </div>
        
        <div class="field-group">
            <label>合計:</label>
            <input type="number" id="total" class="readonly" readonly>
        </div>
        
        <div class="field-group">
            <label>ステータス:</label>
            <select id="status">
                <option value="未処理">未処理</option>
                <option value="確認中">確認中</option>
                <option value="承認済み">承認済み</option>
            </select>
        </div>
        
        <div class="field-group">
            <label>特記事項:</label>
            <input type="text" id="notes" placeholder="承認済みの場合のみ表示">
        </div>
        
        <div id="error-messages"></div>
        
        <button onclick="simulateShow()">画面表示イベント実行</button>
        <button onclick="simulateSubmit()">保存前イベント実行</button>
        <button onclick="clearLog()">ログクリア</button>
    </div>
    
    <div class="event-log">
        <h3>イベントログ</h3>
        <div id="event-log-content">ここにイベントの実行結果が表示されます</div>
    </div>
    
    <script>
        // 疑似的なKintoneレコード構造
        let mockRecord = {};
        
        // ログ出力関数
        function logEvent(message, type = 'info') {
            console.log(message);
            let logElement = document.getElementById('event-log-content');
            let timestamp = new Date().toLocaleTimeString();
            let color = type === 'error' ? 'red' : type === 'warning' ? 'orange' : 'black';
            logElement.innerHTML += `<div style="color: ${color}; margin: 2px 0;">
                [${timestamp}] ${message}</div>`;
        }
        
        // DOM要素をmockRecordに同期
        function syncToMockRecord() {
            mockRecord = {
                "商品名": { "value": document.getElementById('product_name').value },
                "単価": { "value": document.getElementById('unit_price').value },
                "数量": { "value": document.getElementById('quantity').value },
                "割引率": { "value": document.getElementById('discount_rate').value },
                "小計": { "value": document.getElementById('subtotal').value },
                "割引額": { "value": document.getElementById('discount_amount').value },
                "合計": { "value": document.getElementById('total').value },
                "ステータス": { "value": document.getElementById('status').value },
                "特記事項": { "value": document.getElementById('notes').value }
            };
        }
        
        // mockRecordをDOM要素に同期
        function syncFromMockRecord() {
            document.getElementById('product_name').value = mockRecord["商品名"].value;
            document.getElementById('unit_price').value = mockRecord["単価"].value;
            document.getElementById('quantity').value = mockRecord["数量"].value;
            document.getElementById('discount_rate').value = mockRecord["割引率"].value;
            document.getElementById('subtotal').value = mockRecord["小計"].value;
            document.getElementById('discount_amount').value = mockRecord["割引額"].value;
            document.getElementById('total').value = mockRecord["合計"].value;
            document.getElementById('status').value = mockRecord["ステータス"].value;
            document.getElementById('notes').value = mockRecord["特記事項"].value;
        }
        
        // Kintone風のイベント処理群
        
        // 1. 画面表示時の処理（app.record.detail.show相当）
        function onRecordShow() {
            logEvent('=== app.record.detail.show イベント実行 ===');
            logEvent('レコード詳細画面が表示されました');
            
            let record = mockRecord;
            
            // 初期計算実行
            calculateTotal();
            
            // ステータスによる制御
            controlFieldsByStatus();
            
            logEvent('画面表示時の処理完了');
            return true;
        }
        
        // 2. フィールド変更時の処理（app.record.edit.change相当）
        function onQuantityChange() {
            logEvent('=== app.record.edit.change.数量 イベント実行 ===');
            syncToMockRecord();
            
            let record = mockRecord;
            let quantity = parseInt(record["数量"].value) || 0;
            
            logEvent(`数量が変更されました: ${quantity}`);
            
            // バリデーション
            if (quantity < 0) {
                logEvent('エラー: 数量に負の数は入力できません', 'error');
                document.getElementById('quantity').classList.add('error');
                record["数量"].value = "0";
                quantity = 0;
            } else {
                document.getElementById('quantity').classList.remove('error');
            }
            
            // 自動計算
            calculateTotal();
            
            // 警告チェック
            let total = parseInt(record["合計"].value) || 0;
            if (total > 100000) {
                logEvent('警告: 合計金額が10万円を超えています', 'warning');
            }
            
            syncFromMockRecord();
            return true;
        }
        
        // 3. ステータス変更時の処理
        function onStatusChange() {
            logEvent('=== app.record.edit.change.ステータス イベント実行 ===');
            syncToMockRecord();
            
            let record = mockRecord;
            let status = record["ステータス"].value;
            
            logEvent(`ステータスが変更されました: ${status}`);
            
            controlFieldsByStatus();
            
            syncFromMockRecord();
            return true;
        }
        
        // 4. 保存前処理（app.record.create.submit相当）
        function onRecordSubmit() {
            logEvent('=== app.record.create.submit イベント実行 ===');
            syncToMockRecord();
            
            let record = mockRecord;
            let errors = [];
            
            // 必須チェック
            if (!record["商品名"].value.trim()) {
                errors.push('商品名は必須です');
            }
            
            let quantity = parseInt(record["数量"].value) || 0;
            if (quantity <= 0) {
                errors.push('数量は1以上で入力してください');
            }
            
            let unitPrice = parseInt(record["単価"].value) || 0;
            if (unitPrice <= 0) {
                errors.push('単価は1以上で入力してください');
            }
            
            // 承認済みの場合の特記事項チェック
            if (record["ステータス"].value === '承認済み' && !record["特記事項"].value.trim()) {
                errors.push('承認済みの場合は特記事項が必須です');
            }
            
            // エラー表示
            let errorElement = document.getElementById('error-messages');
            if (errors.length > 0) {
                logEvent(`保存前エラー: ${errors.join(', ')}`, 'error');
                errorElement.innerHTML = errors.map(err => 
                    `<div class="error-message">● ${err}</div>`).join('');
                return false;
            } else {
                errorElement.innerHTML = '';
                logEvent('バリデーション通過 - 保存可能です');
                return true;
            }
        }
        
        // 補助関数群
        
        function calculateTotal() {
            let record = mockRecord;
            
            let unitPrice = parseInt(record["単価"].value) || 0;
            let quantity = parseInt(record["数量"].value) || 0;
            let discountRate = parseInt(record["割引率"].value) || 0;
            
            let subtotal = unitPrice * quantity;
            let discountAmount = Math.floor(subtotal * discountRate / 100);
            let total = subtotal - discountAmount;
            
            record["小計"].value = subtotal.toString();
            record["割引額"].value = discountAmount.toString();
            record["合計"].value = total.toString();
            
            logEvent(`計算実行: ${unitPrice} × ${quantity} - ${discountAmount} = ${total}`);
        }
        
        function controlFieldsByStatus() {
            let record = mockRecord;
            let status = record["ステータス"].value;
            let notesField = document.getElementById('notes');
            
            if (status === '承認済み') {
                notesField.style.display = 'inline-block';
                notesField.placeholder = '承認済みのため入力必須';
                logEvent('特記事項フィールドを表示');
            } else {
                notesField.style.display = 'none';
                logEvent('特記事項フィールドを非表示');
            }
        }
        
        // 疑似イベント実行関数
        function simulateShow() {
            syncToMockRecord();
            onRecordShow();
        }
        
        function simulateSubmit() {
            syncToMockRecord();
            if (onRecordSubmit()) {
                alert('保存処理が実行されました！');
            } else {
                alert('エラーがあります。修正してください。');
            }
        }
        
        function clearLog() {
            document.getElementById('event-log-content').innerHTML = 'ログをクリアしました';
        }
        
        // リアルタイムイベントリスナー
        document.getElementById('quantity').addEventListener('input', onQuantityChange);
        document.getElementById('unit_price').addEventListener('input', () => {
            syncToMockRecord();
            calculateTotal();
            syncFromMockRecord();
        });
        document.getElementById('discount_rate').addEventListener('input', () => {
            syncToMockRecord();
            calculateTotal();
            syncFromMockRecord();
        });
        document.getElementById('status').addEventListener('change', onStatusChange);
        
        // 初期化
        syncToMockRecord();
        logEvent('Kintone実践練習ページが初期化されました');
        logEvent('フィールドを変更してイベントの動作を確認してください');
    </script>
</body>
</html>
```

### デバッグ練習用ファイル

**debug_practice.html** - よくあるエラーを体験して修正練習

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>デバッグ練習</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .error-example { border: 1px solid #ff6b6b; padding: 15px; margin: 10px 0; background: #ffe0e0; }
        .fixed-example { border: 1px solid #51cf66; padding: 15px; margin: 10px 0; background: #e0ffe0; }
        button { padding: 10px; margin: 5px; cursor: pointer; }
        .error { background: #ff6b6b; color: white; }
        .success { background: #51cf66; color: white; }
        pre { background: #f8f9fa; padding: 10px; overflow-x: auto; }
    </style>
</head>
<body>
    <h1>JavaScript デバッグ練習</h1>
    <p><strong>各エラー例を実行して、Consoleでエラーを確認し、修正版と比較してください</strong></p>
    
    <div class="error-example">
        <h3>エラー例1: 変数名の間違い</h3>
        <button class="error" onclick="errorExample1()">エラーを実行</button>
        <button class="success" onclick="fixedExample1()">修正版を実行</button>
        <pre>
エラーコード:
let userName = '田中';
console.log(userNmae);  // 変数名が間違っている

修正版:
let userName = '田中';
console.log(userName);  // 正しい変数名
        </pre>
    </div>
    
    <div class="error-example">
        <h3>エラー例2: 括弧の閉じ忘れ</h3>
        <button class="error" onclick="errorExample2()">エラーを実行</button>
        <button class="success" onclick="fixedExample2()">修正版を実行</button>
        <pre>
エラーコード:
function calculate(a, b {  // 括弧が足りない
    return a + b;
}

修正版:
function calculate(a, b) {  // 括弧を追加
    return a + b;
}
        </pre>
    </div>
    
    <div class="error-example">
        <h3>エラー例3: 存在しないプロパティへのアクセス</h3>
        <button class="error" onclick="errorExample3()">エラーを実行</button>
        <button class="success" onclick="fixedExample3()">修正版を実行</button>
        <pre>
エラーコード:
let user = { name: '田中', age: 30 };
console.log(user.email.toLowerCase());  // emailプロパティが存在しない

修正版:
let user = { name: '田中', age: 30 };
if (user.email) {
    console.log(user.email.toLowerCase());
} else {
    console.log('emailが設定されていません');
}
        </pre>
    </div>
    
    <script>
        console.log('デバッグ練習ページが読み込まれました');
        
        // エラー例1: 変数名の間違い
        function errorExample1() {
            try {
                let userName = '田中';
                console.log(userNmae);  // 意図的なエラー
            } catch (e) {
                console.error('エラー例1:', e.message);
                alert('Consoleでエラーを確認してください: ' + e.message);
            }
        }
        
        function fixedExample1() {
            let userName = '田中';
            console.log('修正版1 - ユーザー名:', userName);
            alert('修正版1が正常に実行されました');
        }
        
        // エラー例2: 括弧の閉じ忘れ（実際には構文エラーなので別の方法で説明）
        function errorExample2() {
            console.log('エラー例2: このようなコードは構文エラーで実行できません');
            console.log('function calculate(a, b { return a + b; }');
            alert('構文エラーの例です。実際にはページが読み込めません');
        }
        
        function fixedExample2() {
            function calculate(a, b) {  // 正しい構文
                return a + b;
            }
            let result = calculate(10, 20);
            console.log('修正版2 - 計算結果:', result);
            alert('修正版2が正常に実行されました: ' + result);
        }
        
        // エラー例3: 存在しないプロパティ
        function errorExample3() {
            try {
                let user = { name: '田中', age: 30 };
                console.log('user オブジェクト:', user);
                console.log(user.email.toLowerCase());  // 意図的なエラー
            } catch (e) {
                console.error('エラー例3:', e.message);
                alert('Consoleでエラーを確認してください: ' + e.message);
            }
        }
        
        function fixedExample3() {
            let user = { name: '田中', age: 30 };
            console.log('修正版3 - user オブジェクト:', user);
            
            if (user.email) {
                console.log('Email:', user.email.toLowerCase());
            } else {
                console.log('emailプロパティが設定されていません');
            }
            alert('修正版3が正常に実行されました');
        }
    </script>
</body>
</html>
```

---

## 付録: チートシート

### HTMLファイルの使い方

1. 各コードをテキストエディタにコピー
2. 拡張子を `.html` で保存
3. ブラウザで開く
4. **F12** を押してConsoleタブを確認

### よく使うKintoneイベント

```javascript
// レコード表示系
'app.record.detail.show'     // 詳細画面表示
'app.record.create.show'     // 新規作成画面表示
'app.record.edit.show'       // 編集画面表示

// レコード保存系
'app.record.create.submit'   // 新規保存
'app.record.edit.submit'     // 更新保存

// フィールド変更系
'app.record.edit.change.フィールドコード'  // 特定フィールド変更
```

### よく使うフィールド操作

```javascript
// 値の取得
let value = record['フィールドコード'].value;

// 値の設定
record['フィールドコード'].value = '新しい値';

// フィールドの表示/非表示
kintone.app.record.setFieldShown('フィールドコード', true);  // 表示
kintone.app.record.setFieldShown('フィールドコード', false); // 非表示

// エ
