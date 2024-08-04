exports.name = '/images/capdoi';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const capdoi = require('./data/json/capdoi.json');
        var image = capdoi[Math.floor(Math.random() * capdoi.length)].trim();
        res.jsonp({
            data: image,
            count: capdoi.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}