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