exports.name = '/images/trai';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const trai = require('./data/json/trai.json');
        var image = trai[Math.floor(Math.random() * trai.length)].trim();
        res.jsonp({
            data: image,
            count: trai.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}