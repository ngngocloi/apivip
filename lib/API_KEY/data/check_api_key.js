function check_api_key(req, res, next) {
    const fs = require('fs-extra');
    try {
        const data_apikey = require('./data_apikey.json');
        if (!data_apikey.find(i => i.apikey == req.query.apikey)) {
            return res.jsonp({
                error: 'API_KEY KHÔNG CHÍNH XÁC! Vui lòng kiểm tra lại hoặc get API_KEY khác!!!' 
                  + ' Hãy truy cập web để get API_KEY free: https://apivip.orender.com/apikey?type=register&name=${name} . '  
                  + ' Contact: ' 
                  + ' - Facebook: m.me/ngnocloi.00' 
                  + ' - Zalo: 0971213576'
            });
        } else {
            let APIKEY = data_apikey.find(i => i.apikey == req.query.apikey);
            if (APIKEY.request == 0) {
                return res.json({
                    error: 201,
                    message: 'APIKEY của bạn đã hết lượt request!!! Vui lòng tạo API_KEY khác!!!'
                })
            } else {
                if (APIKEY.type == 'free') {
                    APIKEY.request = APIKEY.request - 1;
                    return fs.writeFileSync(__dirname + '/data_apikey.json', JSON.stringify(data_apikey, null, 2), 'utf-8');
                }
                ///////////////////////////////////////////
                // tự động trừ 1 request
            }
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    check_api_key
};