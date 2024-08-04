exports.name = '/nsfw/penissucking';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const penissucking = require('./data/json/penissucking.json');
        var image = penissucking[Math.floor(Math.random() * penissucking.length)].trim();
        res.jsonp({
            data: image,
            count: penissucking.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}