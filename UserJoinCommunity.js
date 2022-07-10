// var body = $response.body;
// function re(reg, str) {
//     body = body.replace(reg, str);
// }

// var reg1 = /"total_integral":.*?, "/g;
// var reg2 = /"integral_amount":.*?, "/g;
// var reg3 = /"order_amount":.*?, "/g;
// re(reg1, 'total_integral":360.00,');
// re(reg2, 'integral_amount":360.00,');
// re(reg3, 'order_amount":0.00,');
// $done(body);


if ($response.body != "") {
    let obj = JSON.parse($response.body);
    let price = obj.response.data.PrepayOrder.total_amount;
    obj.response.data.PrepayOrder.total_integral = price;
    obj.response.data.PrepayOrder.integral_amount = price;
    obj.response.data.PrepayOrder.order_amount = 0.00;
    $notify('title', 'subtitle', obj);
    $done({ body: JSON.stringify(obj) });
} else {
    $done({ body: $response.body });
}
