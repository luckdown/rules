var $iosrule = iosrule(); //声明必须
var app = "盐工健康报送";

const llUrl1 = {
    url: "https://health.xiamin.tech/system/registry/",
    headers: {
        Connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "X-CSRFToken":
            "0yec14XnToUQszlX0HTxmy3jvnyeJH2Xo74xdx9Bp836uEDrL34QUkKtMNdNIhNJ",
        "Content-Type": "application/json;charset=utf-8",
        Origin: "https://health.xiamin.tech",
        "User-Agent":
            "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.14(0x17000e29) NetType/WIFI Language/zh_CN",
        Cookie:
            "sessionid=lmy8u5ho5r5p235b8cgdfvwgeb91kh7l; csrftoken=IUsXkikTAXZoNgrTk2O999rwIXVon0wFcsLST0qwhxWLBkMuHw61WjZh3GBapale",
        Host: "health.xiamin.tech",
        Referer: "https://health.xiamin.tech/system/registry/",
        "Accept-Language": "zh-cn",
        Accept: "application/json, text/plain, */*",
    },
    body: '{"type":"same"}',
};

$iosrule.post(llUrl1, function (error, response, data) {
    //    console.log("[返回数据]:" + data);

    boby = unescape(data.replace(/\\/g, "%"))
    console.log('boby:' + boby);


    if (response.status == 200) {
        console.log("盐工健康报送成功");
        $iosrule.notify(
            "盐工健康报送成功",
            boby.replace(/"/g, "").replace(/}/g, "").substring(5),
            ""

        );
    } else {
        console.log("盐工健康报送失败");
        $iosrule.notify(
            "盐工健康报送失败",
            boby.replace(/"/g, "").replace(/}/g, "").substring(5),
            ""
        );
    }
});

//这个通用的写法,用于圈x,loon,surge这三者的通用写法
function iosrule() {
    const isRequest = typeof $request != "undefined";
    const isSurge = typeof $httpClient != "undefined";
    const isQuanX = typeof $task != "undefined";
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message);
        if (isSurge) $notification.post(title, subtitle, message);
    };
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key);
        if (isSurge) return $persistentStore.write(value, key);
    };
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key);
        if (isSurge) return $persistentStore.read(key);
    };
    const get = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options };
            options["method"] = "GET";
            $task.fetch(options).then(
                (response) => {
                    response["status"] = response.statusCode;
                    callback(null, response, response.body);
                },
                (reason) => callback(reason.error, null, null)
            );
        }
        if (isSurge) $httpClient.get(options, callback);
    };
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options };
            options["method"] = "POST";
            $task.fetch(options).then(
                (response) => {
                    response["status"] = response.statusCode;
                    callback(null, response, response.body);
                },
                (reason) => callback(reason.error, null, null)
            );
        }
        if (isSurge) $httpClient.post(options, callback);
    };
    const end = () => {
        if (isQuanX) isRequest ? $done({}) : "";
        if (isSurge) isRequest ? $done({}) : $done();
    };
    return { isRequest, isQuanX, isSurge, notify, write, read, get, post, end };
}
