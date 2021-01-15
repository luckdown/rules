/**
 * 盐工健康报送
 * @fileoverview Template to compose HTTP reqeuest.
 *
 */

const url = `https://health.xiamin.tech/system/registry/`;
const method = `POST`;
const headers = {
  Connection: `keep-alive`,
  "Accept-Encoding": `gzip, deflate, br`,
  "X-CSRFToken": `0yec14XnToUQszlX0HTxmy3jvnyeJH2Xo74xdx9Bp836uEDrL34QUkKtMNdNIhNJ`,
  "Content-Type": `application/json;charset=utf-8`,
  Origin: `https://health.xiamin.tech`,
  "User-Agent": `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.14(0x17000e29) NetType/WIFI Language/zh_CN`,
  Cookie: `sessionid=lmy8u5ho5r5p235b8cgdfvwgeb91kh7l; csrftoken=IUsXkikTAXZoNgrTk2O999rwIXVon0wFcsLST0qwhxWLBkMuHw61WjZh3GBapale`,
  Host: `health.xiamin.tech`,
  Referer: `https://health.xiamin.tech/system/registry/`,
  "Accept-Language": `zh-cn`,
  Accept: `application/json, text/plain, */*`,
};
const body = `{"type":"same"}`;

const myRequest = {
  url: url,
  method: method,
  headers: headers,
  body: body,
};
$task.fetch(myRequest).then(
  (response) => {
    console.log(
      response.statusCode + "\n\n" + unescape(response.body.replace(/\\/g, "%"))
    );
    $notify(
      "盐工健康报送成功",
      unescape(response.body.replace(/\\/g, "%"))
        .replace(/"/g, "")
        .replace(/}/g, "")
        .substring(5),
      ""
    ); // Success!
  },
  (reason) => {
    console.log(unescape(reason.error.replace(/\\/g, "%")));
    $notify(
      "盐工健康报送失败",
      unescape(response.body.replace(/\\/g, "%")),
      ""
    ); // Error!
  }
);
