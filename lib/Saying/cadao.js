exports.name = '/saying/cadao';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const cadao = require('./data/json/cadao.json');
        var image = cadao[Math.floor(Math.random() * cadao.length)].trim();
        res.jsonp({
            data: image,
            count: cadao.length,
            author: 'Nguyễn Hải Đăng (JRT)'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}