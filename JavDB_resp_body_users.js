let body = JSON.parse($response.body);
body = {
  "success": 1,
  "message": null,
  "data": {
    "user": {
      "id": 900000,
      "promotion_days": 999,
      "checkin_days": 0,
      "want_watch_count": 0,
      "promotion_code": "s8rvea",
      "vip_expired_at": "2099-09-09T22:16:31.000+08:00",
      "username": "ios黑科技",
      "share_url": "https://jav3.app/?source=s8rvea",
      "last_checkin_at": null,
      "promote_users_count": 999,
      "email": "ioshkj@163.com",
      "is_vip": true,
      "watched_count": 0
    },
    "banner_type": "payment"
  },
  "action": null
};
body = JSON.stringify(body);
$done({body}); 
