exports.name = '/nsfw/hana';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const hana = require('./data/json/hana.json');
        var image = hana[Math.floor(Math.random() * hana.length)].trim();
        res.jsonp({
            data: image,
            count: hana.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}