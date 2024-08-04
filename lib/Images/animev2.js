exports.name = '/images/animev2';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const animev2 = require('./data/json/animev2.json');
        var image = animev2[Math.floor(Math.random() * animev2.length)].trim();
        res.jsonp({
            data: image,
            count: animev2.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}