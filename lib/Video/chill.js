exports.name = '/video/chill';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const chill = require('./data/json/chill.json');
        var image = chill[Math.floor(Math.random() * chill.length)].trim();
        res.jsonp({
            data: image,
            count: chill.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}