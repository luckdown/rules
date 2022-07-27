let obj = JSON.parse($response.body);
obj = {
    "ret_code": 0,
    "ret_msg": "ok",
    "header": {
        "logo_url": "https://mmbiz.qpic.cn/mmbiz_png/zVf5wYor4QCpO9lQImQjdiaO1ibA0ChX1At4ian2a5DYwwQA481T1WwaqC9JswwOicTOUbenMgThM0v4UWgnI2iaOMA/0?wx_fmt=png",
        "nickname": "小萌智能",
        "fee": "-399.00"
    },
    "preview": [
        {
            "separate": "solid",
            "value": [],
            "sequence": []
        },
        {
            "label": {
                "name": "当前状态",
                "actionsheet": [],
                "sub_text": []
            },
            "value": [
                {
                    "name": "支付成功",
                    "actionsheet": [],
                    "sub_text": []
                }
            ],
            "sequence": []
        },
        {
            "label": {
                "name": "商品",
                "actionsheet": [],
                "sub_text": []
            },
            "value": [
                {
                    "name": "圈子-付费看帖",
                    "actionsheet": [],
                    "sub_text": []
                }
            ],
            "sequence": []
        },
        {
            "label": {
                "name": "商户全称",
                "actionsheet": [],
                "sub_text": []
            },
            "value": [
                {
                    "name": "成都小萌智能科技有限公司",
                    "actionsheet": [],
                    "sub_text": []
                }
            ],
            "sequence": []
        },
        {
            "label": {
                "name": "收单机构",
                "actionsheet": [],
                "sub_text": []
            },
            "value": [
                {
                    "name": "财付通支付科技有限公司",
                    "actionsheet": [],
                    "sub_text": []
                }
            ],
            "sequence": []
        },
        {
            "label": {
                "name": "支付时间",
                "actionsheet": [],
                "sub_text": []
            },
            "value": [
                {
                    "name": "1658908564",
                    "actionsheet": [],
                    "is_timestamp": true,
                    "sub_text": []
                }
            ],
            "sequence": []
        },
        {
            "label": {
                "name": "支付方式",
                "actionsheet": [],
                "sub_text": []
            },
            "value": [
                {
                    "name": "中国银行储蓄卡(4017)",
                    "actionsheet": [],
                    "dialog": {
                        "sequence": []
                    },
                    "sub_text": []
                }
            ],
            "sequence": []
        },
        {
            "label": {
                "name": "交易单号",
                "actionsheet": [],
                "sub_text": []
            },
            "value": [
                {
                    "name": "4200001456202207275988110589",
                    "actionsheet": [],
                    "sub_text": []
                }
            ],
            "sequence": []
        },
        {
            "label": {
                "name": "商户单号",
                "actionsheet": [],
                "sub_text": []
            },
            "value": [
                {
                    "name": "5408783305983092968",
                    "actionsheet": [],
                    "sub_text": []
                }
            ],
            "sequence": []
        }
    ],
    "entrances": [
        {
            "name": "发起群收款",
            "event": {
                "name": "openWCPaySpecificView",
                "params": [
                    {
                        "key": "appId",
                        "value": "wx57849631bb367f52"
                    },
                    {
                        "key": "nonceStr",
                        "value": "Uk5uyNHDm9JSZ9diDlwl9tWwmblKvobE"
                    },
                    {
                        "key": "package",
                        "value": "openview=open_wcpay_grouppay_introview&amount=7200&title=%E5%BE%AE%E5%AF%86%E6%98%9F%2007%E6%9C%8820%E6%97%A5&encuin=F2j6nakFIwHesex9V34aRQ%3D%3D&mchid=123865085&mchtype=6&trans_id=4200001456202207206931685624&category=126"
                    },
                    {
                        "key": "timeStamp",
                        "value": "1658723773"
                    },
                    {
                        "key": "signType",
                        "value": "SHA1"
                    },
                    {
                        "key": "paySign",
                        "value": "a7e904a949ce266153480953493e970bfbd0a768"
                    }
                ],
                "need_list": []
            },
            "actionsheet": [],
            "sub_text": []
        },
        {
            "name": "在此商户的交易账单",
            "url": {
                "name": "homelist",
                "query": [
                    {
                        "key": "sub_mch_id",
                        "value": "0"
                    },
                    {
                        "key": "appid",
                        "value": "wx031e5262ce0d10ab"
                    },
                    {
                        "key": "direct",
                        "value": "true"
                    }
                ]
            },
            "actionsheet": [],
            "sub_text": []
        },
        {
            "name": "对订单有疑惑",
            "link_btn": true,
            "event": {
                "name": "openUrlWithExtraWebview",
                "params": [
                    {
                        "key": "openType",
                        "value": "1"
                    },
                    {
                        "key": "url",
                        "value": "https:\\/\\/pay.weixin.qq.com\\/mmpaykf\\/faqmanage?ver=v1&trans_id=4200001456202207206931685624&create_time=1658312956#wechat_direct"
                    }
                ],
                "need_list": []
            },
            "actionsheet": [],
            "domain": 7,
            "sub_text": []
        }
    ],
    "footer": [],
    "v2flag": 1,
    "scene": 0,
    "banner": {
        "content": ""
    },
    "v3_flag": 1,
    "service_module": [
        {
            "area_id": 2,
            "area_name": "账单服务",
            "area_type": 2,
            "services": [
                {
                    "service_id": 3,
                    "name": "对订单有疑惑",
                    "jump_type": 2,
                    "event": {
                        "name": "openUrlWithExtraWebview",
                        "params": [
                            {
                                "key": "openType",
                                "value": "1"
                            },
                            {
                                "key": "url",
                                "value": "https:\\/\\/pay.weixin.qq.com\\/mmpaykf\\/faqmanage?ver=v1&trans_id=4200001456202207206931685624&create_time=1658312956#wechat_direct"
                            }
                        ],
                        "need_list": []
                    },
                    "actionsheet": [],
                    "link_btn": false,
                    "red_dot": {
                        "show_red_dot": false
                    }
                },
                {
                    "service_id": 5,
                    "name": "发起群收款",
                    "jump_type": 2,
                    "event": {
                        "name": "openWCPaySpecificView",
                        "params": [
                            {
                                "key": "appId",
                                "value": "wx57849631bb367f52"
                            },
                            {
                                "key": "nonceStr",
                                "value": "Uk5uyNHDm9JSZ9diDlwl9tWwmblKvobE"
                            },
                            {
                                "key": "package",
                                "value": "openview=open_wcpay_grouppay_introview&amount=7200&title=%E5%BE%AE%E5%AF%86%E6%98%9F%2007%E6%9C%8820%E6%97%A5&encuin=F2j6nakFIwHesex9V34aRQ%3D%3D&mchid=123865085&mchtype=6&trans_id=4200001456202207206931685624&category=126"
                            },
                            {
                                "key": "timeStamp",
                                "value": "1658723773"
                            },
                            {
                                "key": "signType",
                                "value": "SHA1"
                            },
                            {
                                "key": "paySign",
                                "value": "a7e904a949ce266153480953493e970bfbd0a768"
                            }
                        ],
                        "need_list": []
                    },
                    "actionsheet": [],
                    "link_btn": false,
                    "red_dot": {
                        "show_red_dot": false
                    }
                },
                {
                    "service_id": 6,
                    "name": "在此商户的交易",
                    "jump_type": 1,
                    "url": {
                        "name": "homelist",
                        "query": [
                            {
                                "key": "sub_mch_id",
                                "value": "0"
                            },
                            {
                                "key": "appid",
                                "value": "wx031e5262ce0d10ab"
                            },
                            {
                                "key": "direct",
                                "value": "true"
                            }
                        ]
                    },
                    "actionsheet": [],
                    "link_btn": false,
                    "red_dot": {
                        "show_red_dot": false
                    }
                }
            ]
        }
    ]
}
  ;
$done({body: JSON.stringify(obj)});
