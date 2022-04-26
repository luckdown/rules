[rewrite_local]

#JAV解锁VIP会员
^https:\/\/yugedu\.com\/api\/v1\/movies\/(.+)\/play url script-request-header javdba.js

^https:\/\/yugedu\.com\/api\/v1\/movies\/.+ url response-body "success":\d+ response-body "success":1

^https:\/\/yugedu\.com\/api\/v1\/users url script-response-body javdbs.js

[mitm]
hostname = yugedu.com

JAV下载地址：（注册填写邀请码：s8rvea）
https://jcapnred.com/?source=s8rvea

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6OTgwNDk5LCJ1c2VybmFtZSI6Imlvc2hrajEifQ.aSlLcMcGxEtNrsxife9exe0BGs6C4bQHdiBUaYamEAM';

$done({headers : modifiedHeaders});
