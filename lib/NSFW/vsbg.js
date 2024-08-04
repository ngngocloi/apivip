exports.name = '/nsfw/vsbg';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const vsbg = require('./data/json/vsbg.json');
        var image = vsbg[Math.floor(Math.random() * vsbg.length)].trim();
        res.jsonp({
            data: image,
            count: vsbg.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}