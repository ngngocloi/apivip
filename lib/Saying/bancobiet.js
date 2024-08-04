 exports.name = '/saying/bancobiet';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const bancobiet = require('./data/json/bancobiet.json');
        var image = bancobiet[Math.floor(Math.random() * bancobiet.length)].trim();
        res.jsonp({
            data: image,
            count: bancobiet.length,
            author: 'Nguyễn Hải Đăng (JRT)'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}