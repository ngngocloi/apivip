exports.name = '/images/gaixinhvn';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const gaixinhvn = require('./data/json/gaixinhvn.json');
        var image = gaixinhvn[Math.floor(Math.random() * gaixinhvn.length)].trim();
        res.jsonp({
            data: image,
            count: gaixinhvn.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}