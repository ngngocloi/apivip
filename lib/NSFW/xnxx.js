exports.name = '/nsfw/xnxx';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const xnxx = require('./data/json/xnxx.json');
        var image = xnxx[Math.floor(Math.random() * xnxx.length)].trim();
        res.jsonp({
            data: image,
            count: xnxx.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}