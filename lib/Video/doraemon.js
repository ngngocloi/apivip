exports.name = '/video/doraemon';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const doraemon = require('./data/json/doraemon.json');
        var image = doraemon[Math.floor(Math.random() * doraemon.length)].trim();
        res.jsonp({
            data: image,
            count: doraemon.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}  