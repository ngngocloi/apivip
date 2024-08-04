exports.name = '/images/wallpaper';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const wallpaper = require('./data/json/wallpaper.json');
        var image = wallpaper[Math.floor(Math.random() * wallpaper.length)].trim();
        res.jsonp({
            data: image,
            count: wallpaper.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}