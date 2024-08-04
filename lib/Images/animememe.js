exports.name = '/images/animememe';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const animememe = require('./data/json/animememe.json');
        var image = animememe[Math.floor(Math.random() * animememe.length)].trim();
        res.jsonp({
            data: image,
            count: animememe.length,
            author: 'Nguyễn Ngọc Lợi',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}