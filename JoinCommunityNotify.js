let obj = JSON.parse($response.body);
obj = {
    "code": 200,
    "msg": "加入圈子操作成功",
    "data": {
        "State": 0,
        "PrepayOrder": null
    },
    "total": 0
}
;
$done({body: JSON.stringify(obj)});
