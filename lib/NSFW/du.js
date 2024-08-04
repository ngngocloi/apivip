exports.name = '/nsfw/du';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const du = require('./data/json/du.json');
        var image = du[Math.floor(Math.random() * du.length)].trim();
        res.jsonp({
            data: image,
            count: du.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}