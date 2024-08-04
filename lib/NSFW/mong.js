exports.name = '/nsfw/mong';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const mong = require('./data/json/mong.json');
        var image = mong[Math.floor(Math.random() * mong.length)].trim();
        res.jsonp({
            data: image,
            count: mong.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}