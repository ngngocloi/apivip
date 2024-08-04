exports.name = '/images/lebong';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const lebong = require('./data/json/lebong.json');
        var image = lebong[Math.floor(Math.random() * lebong.length)].trim();
        res.jsonp({
            data: image,
            count: lebong.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}