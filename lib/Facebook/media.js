exports.name = '/facebook/media';
'use strict';
const axios = require('axios')
exports.index = async (req, res, next) => {
 var url = req.query.url
  var axios = require("axios");
  var data = {
    "sec-fetch-user": "?1",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-site": "none",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "cache-control": "max-age=0",
    authority: "www.facebook.com",
    "upgrade-insecure-requests": "1",
    "accept-language": "en-GB,en;q=0.9,tr-TR;q=0.8,tr;q=0.7,en-US;q=0.6",
    "sec-ch-ua": '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    cookie: "sb=XakfZJ8O-bcU0dLasnQWAwgZ;datr=bqkfZPhgLBcroETVt7ym5Tnp;wd=1536x706;dpr=1.25;c_user=100022089907330;xs=11%3A9Vo_1la25aap3g%3A2%3A1687674649%3A-1%3A6158%3A%3AAcUW-TFIl-aeBxgPddJjy3P2eLZoaH8RDeGwh3MgHw;fr=0c744R4aQZwlN8X3H.AWV_bXzCaekKWtC3t8P7ADWcE68.Bkl-RI.24.AAA.0.0.Bkl-RI.AWXkz6rZH4c;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1687675979361%2C%22v%22%3A1%7D;|Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
  };
  var cookie = "sb=XakfZJ8O-bcU0dLasnQWAwgZ;datr=bqkfZPhgLBcroETVt7ym5Tnp;wd=1536x706;dpr=1.25;c_user=100022089907330;xs=11%3A9Vo_1la25aap3g%3A2%3A1687674649%3A-1%3A6158%3A%3AAcUW-TFIl-aeBxgPddJjy3P2eLZoaH8RDeGwh3MgHw;fr=0c744R4aQZwlN8X3H.AWV_bXzCaekKWtC3t8P7ADWcE68.Bkl-RI.24.AAA.0.0.Bkl-RI.AWXkz6rZH4c;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1687675979361%2C%22v%22%3A1%7D;|Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
  /**
   * @param {string} callbackId
   * @return {?}
   */
  var wrap = function getValue(callbackId) {
    return JSON.parse('{"text": "' + callbackId + '"}').text;
  };
  return new Promise(function (resolve) {
     if (!url || !url.trim()) {
       return res.jsonp("Thiếu url facebook - đuôi fb.watch");
     }
     if (!url.includes("fb.watch")) {
       return res.jsonp("Vui lòng nhập video facebook hợp lệ!");
  }
    axios.get(url, {
      headers: data
    }).then(function (rawResponse) {
      var data = rawResponse.data;
      var nodes = data.match(/"playable_url":"(.*?)"/);
      var match = data.match(/"playable_url_quality_hd":"(.*?)"/);
      var object = data.match(/"preferred_thumbnail":{"image":{"uri":"(.*?)"/);
      if (nodes && nodes[1]) {
        var result = {
          url: url,
          sd: wrap(nodes[1]),
          hd: match && match[1] ? wrap(match[1]) : "",
          thumbnail: object && object[1] ? wrap(object[1]) : ""
        };
        res.jsonp(result);
      } else {
       res.jsonp("Vui lòng thay cookie để api hoạt động");
      }
    });
  });
}