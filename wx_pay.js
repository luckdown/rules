let obj = JSON.parse($response.body);
obj = {
    "header": {
        "logo_url": "https:\/\/mmbiz.qpic.cn\/mmbiz_png\/zVf5wYor4QCpO9lQImQjdiaO1ibA0ChX1At4ian2a5DYwwQA481T1WwaqC9JswwOicTOUbenMgThM0v4UWgnI2iaOMA\/0?wx_fmt=png",
        "nickname": "小萌智能",
        "fee": "-399.00"
    },
    "footer": [],
    "v2flag": 1,
    "scene": 0,
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
                    "name": "成都小魔鱼科技有限公司",
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
                    "actionsheet": [],
                    "sub_text": [],
                    "name": "1658686511",
                    "is_timestamp": true
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
                    "actionsheet": [],
                    "sub_text": [],
                    "name": "零钱",
                    "dialog": {
                        "sequence": []
                    }
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
                    "name": "4200001530202207253006549036",
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
                    "name": "5153921673283445865",
                    "actionsheet": [],
                    "sub_text": []
                }
            ],
            "sequence": []
        }
    ],
    "banner": {
        "content": ""
    },
    "ret_msg": "ok",
    "v3_flag": 1,
    "ret_code": 0,
    "entrances": [
        {
            "actionsheet": [],
            "sub_text": [],
            "name": "发起群收款",
            "event": {
                "name": "openWCPaySpecificView",
                "need_list": [],
                "params": [
                    {
                        "key": "appId",
                        "value": "wx57849631bb367f52"
                    },
                    {
                        "key": "nonceStr",
                        "value": "PfTWFvJD4HvXD3XXiKEBhYkR9mBksznC"
                    },
                    {
                        "key": "package",
                        "value": "openview=open_wcpay_grouppay_introview&amount=20000&title=%E5%BE%AE%E5%AF%86%E6%98%9F%2007%E6%9C%8809%E6%97%A5&encuin=F2j6nakFIwHesex9V34aRQ%3D%3D&mchid=123865085&mchtype=6&trans_id=4200001530202207093006549036&category=126"
                    },
                    {
                        "key": "timeStamp",
                        "value": "1658685858"
                    },
                    {
                        "key": "signType",
                        "value": "SHA1"
                    },
                    {
                        "key": "paySign",
                        "value": "9569dd02e113a30ccbefba3eefdc8304f01284b3"
                    }
                ]
            }
        },
        {
            "actionsheet": [],
            "sub_text": [],
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
            }
        },
        {
            "link_btn": true,
            "actionsheet": [],
            "sub_text": [],
            "name": "对订单有疑惑",
            "event": {
                "name": "openUrlWithExtraWebview",
                "need_list": [],
                "params": [
                    {
                        "key": "openType",
                        "value": "1"
                    },
                    {
                        "key": "url",
                        "value": "https://pay.weixin.qq.com/mmpaykf/faqmanage?ver=v1&trans_id=4200001530202207093006549036&create_time=1657381931#wechat_direct"
                    }
                ]
            },
            "domain": 7
        }
    ],
    "service_module": [
        {
            "area_name": "账单服务",
            "area_type": 2,
            "services": [
                {
                    "jump_type": 2,
                    "event": {
                        "name": "openUrlWithExtraWebview",
                        "need_list": [],
                        "params": [
                            {
                                "key": "openType",
                                "value": "1"
                            },
                            {
                                "key": "url",
                                "value": "https://pay.weixin.qq.com/mmpaykf/faqmanage?ver=v1&trans_id=4200001530202207093006549036&create_time=1657381931#wechat_direct"
                            }
                        ]
                    },
                    "service_id": 3,
                    "link_btn": false,
                    "red_dot": {
                        "show_red_dot": false
                    },
                    "name": "对订单有疑惑",
                    "actionsheet": []
                },
                {
                    "jump_type": 2,
                    "event": {
                        "name": "openWCPaySpecificView",
                        "need_list": [],
                        "params": [
                            {
                                "key": "appId",
                                "value": "wx57849631bb367f52"
                            },
                            {
                                "key": "nonceStr",
                                "value": "PfTWFvJD4HvXD3XXiKEBhYkR9mBksznC"
                            },
                            {
                                "key": "package",
                                "value": "openview=open_wcpay_grouppay_introview&amount=20000&title=%E5%BE%AE%E5%AF%86%E6%98%9F%2007%E6%9C%8809%E6%97%A5&encuin=F2j6nakFIwHesex9V34aRQ%3D%3D&mchid=123865085&mchtype=6&trans_id=4200001530202207093006549036&category=126"
                            },
                            {
                                "key": "timeStamp",
                                "value": "1658685858"
                            },
                            {
                                "key": "signType",
                                "value": "SHA1"
                            },
                            {
                                "key": "paySign",
                                "value": "9569dd02e113a30ccbefba3eefdc8304f01284b3"
                            }
                        ]
                    },
                    "service_id": 5,
                    "link_btn": false,
                    "red_dot": {
                        "show_red_dot": false
                    },
                    "name": "发起群收款",
                    "actionsheet": []
                },
                {
                    "actionsheet": [],
                    "jump_type": 1,
                    "service_id": 6,
                    "link_btn": false,
                    "red_dot": {
                        "show_red_dot": false
                    },
                    "name": "在此商户的交易",
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
                    }
                }
            ],
            "area_id": 2
        }
    ]
}
;
$done({body: JSON.stringify(obj)});
