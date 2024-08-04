exports.name = '/images/ngoctrinh';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const ngoctrinh = require('./data/json/ngoctrinh.json');
        var image = ngoctrinh[Math.floor(Math.random() * ngoctrinh.length)].trim();
        res.jsonp({
            data: image,
            count: ngoctrinh.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}