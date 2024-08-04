exports.name = '/images/hoathinh';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const hoathinh = require('./data/json/hoathinh.json');
        var image = hoathinh[Math.floor(Math.random() * hoathinh.length)].trim();
        res.jsonp({
            data: image,
            count: hoathinh.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}