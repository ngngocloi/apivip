exports.name = '/video/goku';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const goku = require('./data/json/goku.json');
        var image = goku[Math.floor(Math.random() * goku.length)].trim();
        res.jsonp({
            data: image,
            count: goku.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}