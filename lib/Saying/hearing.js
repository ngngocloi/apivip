exports.name = '/saying/hearing';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const hearing = require('./data/json/hearing.json');
        var image = hearing[Math.floor(Math.random() * hearing.length)].trim();
        res.jsonp({
            data: image,
            count: hearing.length,
            author: 'Nguyễn Hải Đăng (JRT)'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}