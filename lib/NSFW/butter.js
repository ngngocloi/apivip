exports.name = '/nsfw/butter';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const butter = require('./data/json/butter.json');
        var image = butter[Math.floor(Math.random() * butter.length)].trim();
        res.jsonp({
            data: image,
            count: butter.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}