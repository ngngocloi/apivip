exports.name = '/video/genshin';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const genshin = require('./data/json/genshin.json');
        var image = genshin[Math.floor(Math.random() * genshin.length)].trim();
        res.jsonp({
            data: image,
            count: genshin.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}