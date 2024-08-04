exports.name = '/images/tokyo';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const tokyo = require('./data/json/tokyo.json');
        var image = tokyo[Math.floor(Math.random() * tokyo.length)].trim();
        res.jsonp({
            data: image,
            count: tokyo.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}