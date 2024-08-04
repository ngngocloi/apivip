exports.name = '/images/anime';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const anime = require('./data/json/anime.json');
        var image = anime[Math.floor(Math.random() * anime.length)].trim();
        res.jsonp({
            data: image,
            count: anime.length,
            author: 'Nguyễn Hải Đăng (JRT)'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}