(function () {
  "use strict";

  kintone.events.on("app.record.edit.change.数量", function (event) {
    let record = event.record;

    let price = parseInt(record["単価"].value) || 0;
    let quantity = parseInt(record["数量"].value) || 0;

    // バリデーション: 負の数チェック
    if (quantity < 0) {
      alert("数量に負の数は入力できません");
    }

    let total = price * quantity;
    record["合計"].value = total;

    // 警告: 10万円超え
    if (total > 100000) {
      alert("合計金額が10万円を超えています。確認してください。");
    }

    return event;
  });
})();
