exports.name = '/images/jack';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const jack = require('./data/json/jack.json');
        var image = jack[Math.floor(Math.random() * jack.length)].trim();
        res.jsonp({
            data: image,
            count: jack.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}