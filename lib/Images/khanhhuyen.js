exports.name = '/images/khanhhuyen';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const khanhhuyen = require('./data/json/khanhhuyen.json');
        var image = khanhhuyen[Math.floor(Math.random() * khanhhuyen.length)].trim();
        res.jsonp({
            data: image,
            count: khanhhuyen.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}