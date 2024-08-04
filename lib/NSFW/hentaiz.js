exports.name = '/nsfw/hentaiz';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const hentaiz = require('./data/json/hentaiz.json');
        var image = hentaiz[Math.floor(Math.random() * hentaiz.length)].trim();
        res.jsonp({
            data: image,
            count: hentaiz.length,
            author: 'Nguyễn Hải Đăng (JRT)',
          contact: 'https://bio.link/nhdjrt262'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}