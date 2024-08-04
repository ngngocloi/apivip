exports.name = '/nsfw/ig';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const ig = require('./data/json/ig.json');
        var image = ig[Math.floor(Math.random() * ig.length)].trim();
        res.jsonp({
            data: image,
            count: ig.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}