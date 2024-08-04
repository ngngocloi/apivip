exports.name = '/images/lnd';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const lnd = require('./data/json/linhngocdam.json');
        var image = lnd[Math.floor(Math.random() * lnd.length)].trim();
        res.jsonp({
            data: image,
            count: lnd.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}