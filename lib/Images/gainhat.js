exports.name = '/images/gainhat';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const gainhat = require('./data/json/gainhat.json');
        var image = gainhat[Math.floor(Math.random() * gainhat.length)].trim();
        res.jsonp({
            data: image,
            count: gainhat.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}