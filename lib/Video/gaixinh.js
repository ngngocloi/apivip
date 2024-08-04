exports.name = '/video/gaixinh';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
      if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const gaixinh = require('./data/json/gaixinh.json');
        var video = gaixinh[Math.floor(Math.random() * gaixinh.length)].trim();
        res.jsonp({
            data: video,
            count: gaixinh.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}