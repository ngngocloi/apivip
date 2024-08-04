const fs = require('fs');
const path = require('path');
exports.name = '/apikey';
exports.index = async(req, res, next) => {
    const path_D = path.join(__dirname, 'data', 'data_apikey.json');
    if (!fs.existsSync(path_D)) {
        fs.writeFileSync(path_D, '[]', 'utf-8');
    }
    const data_apikey = require('./data/data_apikey.json');
    if (data_apikey.find(i => i.name == req.query.name)) {
        return res.json({
            error: 'Bạn đã có key trên hệ thống!!! Vui lòng kiểm tra lại hoặc tạo API_KEY mới để sử dụng!!!'
        });
    }
    if (req.query.type == 'register') {
        let name = req.query.name;
        if (!name) return res.json({
            error: 'Thiếu dữ liệu để thực hiện yêu cầu cho bạn.'
        });
        else {
            if (req.query.apikey == 'NNL_Vip') {
                var type = 'premium';
                var apikey = 'NNLvip_';
                var request = 'infinite';
            } else {
                var type = 'free';
                var request = 500;
                var apikey = 'NNLfree_';
            }
            const data = require('./data/data_apikey.json');
            var random = '1234567890';
            var number = 10;
            for (var i = 0; i < number; i++) {
                apikey += random.charAt(Math.floor(Math.random() * random.length));
            }
            data.push({ apikey, name, request, type });
            fs.writeFileSync(path_D, JSON.stringify(data, null, 2), 'utf-8');
            res.json({
              message: 'Key Của Bạn Là',
                apikey
            })
        }
    } else if (req.query.type == 'checker') {
        var apikey = req.query.apikey;
        const data = require('./data/data_apikey.json');
        if (!data.find(i => i.apikey == apikey)) {
            return res.json({
                error: 'API_KEY không tồn tại! Vui lòng kiểm tra hoặc tạo API_KEY mới để sử dụng!!!'
            })
        } else {
            var APIKEY = data.find(i => i.apikey == apikey);
            return res.json(APIKEY)
        }
    } else {
        return res.json({
            error: 'Không tìm thấy lệnh mà bạn yêu cầu'
        })
    }
}