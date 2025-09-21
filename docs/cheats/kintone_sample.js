(() => {
  /**
   * Kintoneカスタマイズサンプル
   * 研修で作成した「入力チェック付き計算フィールド」の完成版
   *
   * 機能:
   * 1. 単価 × 数量 = 合計金額を自動計算
   * 2. 数量が負の数の場合はエラーメッセージを表示
   * 3. 合計が10万円を超える場合は警告を表示
   * 4. 保存前に必須チェックを実行
   */

  // 数量変更時の処理
  kintone.events.on("app.record.edit.change.数量", (event) => {
    const record = event.record;

    const price = parseInt(record["単価"].value) || 0;
    let quantity = parseInt(record["数量"].value) || 0;

    console.log("数量変更イベント発生:", quantity);

    // バリデーション: 負の数チェック
    if (quantity < 0) {
      alert("数量に負の数は入力できません");
      record["数量"].value = 1; // 1に修正（0だと保存時エラーになるため）
      quantity = 1;
      console.log("数量を1に修正しました");
    }

    // 計算実行
    const total = price * quantity;
    record["合計"].value = total;

    console.log(`計算結果: ${price} × ${quantity} = ${total}`);

    // 警告: 10万円超え
    if (total > 100000) {
      alert("合計金額が10万円を超えています。確認してください。");
      console.log("警告: 高額商品です");
    }

    return event;
  });

  // 単価変更時の処理（数量変更と同じ計算を実行）
  kintone.events.on("app.record.edit.change.単価", (event) => {
    const record = event.record;

    let price = parseInt(record["単価"].value) || 0;
    const quantity = parseInt(record["数量"].value) || 0;

    console.log("単価変更イベント発生:", price);

    // 単価の妥当性チェック
    if (price < 0) {
      alert("単価に負の数は入力できません");
      record["単価"].value = 0;
      price = 0;
      console.log("単価を0に修正しました");
    }

    // 計算実行
    const total = price * quantity;
    record["合計"].value = total;

    console.log(`計算結果: ${price} × ${quantity} = ${total}`);

    // 警告: 10万円超え
    if (total > 100000) {
      alert("合計金額が10万円を超えています。確認してください。");
      console.log("警告: 高額商品です");
    }

    return event;
  });

  // 画面表示時の初期化処理
  kintone.events.on(
    ["app.record.create.show", "app.record.edit.show"],
    (event) => {
      const record = event.record;

      console.log("レコード画面表示:", event.type);

      // 初期計算の実行
      const price = parseInt(record["単価"].value) || 0;
      const quantity = parseInt(record["数量"].value) || 0;
      const total = price * quantity;
      record["合計"].value = total;

      // 合計フィールドを読み取り専用に設定
      kintone.app.record.setFieldShown("合計", true);

      console.log("初期計算完了:", total);

      return event;
    },
  );

  // 保存前の最終チェック
  kintone.events.on(
    ["app.record.create.submit", "app.record.edit.submit"],
    (event) => {
      const record = event.record;
      console.log("保存前チェック開始");

      // 必須チェック
      const quantity = parseInt(record["数量"].value) || 0;
      const price = parseInt(record["単価"].value) || 0;

      // 数量チェック（1以上でないと保存できない）
      if (quantity < 1) {
        event.error = "数量は1以上で入力してください";
        console.log("エラー: 数量が不正");
        return event;
      }

      if (price < 0) {
        event.error = "単価は0以上で入力してください";
        console.log("エラー: 単価が不正");
        return event;
      }

      // 商品名の必須チェック
      const productName = record["商品名"].value;
      if (!productName || productName.trim() === "") {
        event.error = "商品名は必須です";
        console.log("エラー: 商品名が空");
        return event;
      }

      console.log("保存前チェック完了");
      return event;
    },
  );

  // 詳細画面での追加情報表示
  kintone.events.on("app.record.detail.show", (event) => {
    const record = event.record;

    console.log("詳細画面表示");

    // 合計金額に応じてメッセージを表示
    const total = parseInt(record["合計"].value) || 0;

    if (total > 100000) {
      // 高額商品の場合は背景色を変更（例）
      console.log("高額商品です:", total);
    }

    return event;
  });

  console.log("Kintoneカスタマイズが読み込まれました");
})();
