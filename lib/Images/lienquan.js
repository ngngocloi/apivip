exports.name = '/images/lienquan';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const lienquan = require('./data/json/lienquan.json');
        var image = lienquan[Math.floor(Math.random() * lienquan.length)].trim();
        res.jsonp({
            data: image,
            count: lienquan.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}