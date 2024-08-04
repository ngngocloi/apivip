exports.name = '/images/avatar';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const avatar = require('./data/json/avt.json');
        var image = avatar[Math.floor(Math.random() * avatar.length)].trim();
        res.jsonp({
            data: image,
            count: avatar.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}