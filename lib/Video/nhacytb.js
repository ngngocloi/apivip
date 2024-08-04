exports.name = '/video/nhacytb';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const nhacytb = require('./data/json/nhacytb.json');
        var image = nhacytb[Math.floor(Math.random() * nhacytb.length)].trim();
        res.jsonp({
            data: image,
            count: nhacytb.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}