exports.name = '/game/lienquanquiz';
const axios = require('axios')
exports.index = async (req, res, next) => {
try{
   if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
  const file = require('./data/lienquan.json')
 
  const l = file[Math.floor(Math.random() * file.length)];
  res.json(l)
} catch(e){
  res.json({error: "đã xảy ra lỗi"})
}

}