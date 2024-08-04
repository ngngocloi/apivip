exports.name = '/images/jimmy';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const jimmy = require('./data/json/jimmy.json');
        var image = jimmy[Math.floor(Math.random() * jimmy.length)].trim();
        res.jsonp({
            data: image,
            count: jimmy.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}