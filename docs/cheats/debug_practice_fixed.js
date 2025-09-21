// kintoneカスタマイズ - 修正版
// 単価×数量→合計の自動計算機能

(function() {
    'use strict';

    // 数量または単価が変更された時の計算処理
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