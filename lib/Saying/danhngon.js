exports.name = '/saying/danhngon';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const danhngon = require('./data/json/danhngon.json');
        var image = danhngon[Math.floor(Math.random() * danhngon.length)].trim();
        res.jsonp({
            data: image,
            count: danhngon.length,
            author: 'Nguyễn Hải Đăng (JRT)'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}