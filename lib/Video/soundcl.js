exports.name = '/video/soundcl';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const soundcl = require('./data/json/soundcl.json');
        var image = soundcl[Math.floor(Math.random() * soundcl.length)].trim();
        res.jsonp({
            data: image,
            count: soundcl.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}