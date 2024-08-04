exports.name = '/images/ghost';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const ghost = require('./data/json/ghost.json');
        var image = ghost[Math.floor(Math.random() * ghost.length)].trim();
        res.jsonp({
            data: image,
            count: ghost.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}