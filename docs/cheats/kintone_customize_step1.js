(function () {
  "use strict";

  // 数量が変更されたときの処理
  kintone.events.on("app.record.edit.change.数量", function (event) {
    let record = event.record;

    // 値の取得（数値に変換、エラーの場合は0）
    let price = parseInt(record["単価"].value) || 0;
    let quantity = parseInt(record["数量"].value) || 0;

    // 計算
    let total = price * quantity;

    // 結果の設定
    record["合計"].value = total;

    return event;
  });
})();
