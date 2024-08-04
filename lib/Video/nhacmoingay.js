exports.name = '/video/nhacmoingay';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const nhacmoingay = require('./data/json/nhacmoingay.json');
        var image = nhacmoingay[Math.floor(Math.random() * nhacmoingay.length)].trim();
        res.jsonp({
            data: image,
            count: nhacmoingay.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}