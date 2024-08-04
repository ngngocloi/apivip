exports.name = '/video/sex';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
      if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const sex = require('./data/json/sex.json');
        var video = sex[Math.floor(Math.random() * sex.length)].trim();
        res.jsonp({
            data: video,
            count: sex.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}