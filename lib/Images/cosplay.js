exports.name = '/images/cosplay';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const cosplay = require('./data/json/cosplay.json');
        var image = cosplay[Math.floor(Math.random() * cosplay.length)].trim();
        res.jsonp({
            data: image,
            count: cosplay.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}