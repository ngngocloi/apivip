exports.name = '/images/nendienthoai';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const nendienthoai = require('./data/json/nendienthoai.json');
        var image = nendienthoai[Math.floor(Math.random() * nendienthoai.length)].trim();
        res.jsonp({
            data: image,
            count: nendienthoai.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}