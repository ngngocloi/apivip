exports.name = '/checknude';
exports.index = async(req, res, next) => {
    const request = require('request');
    var url = req.query.url
    if (!url) return res.jsonp({ error: 'Thiếu dữ liệu' });
    const options = {
  method: 'POST',
  url: 'https://nsfw-image-classification1.p.rapidapi.com/img/nsfw',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '5636f6443cmsh83b6bde3fd04a4ap1d12ddjsn46833157d7f1',
    'X-RapidAPI-Host': 'nsfw-image-classification1.p.rapidapi.com'
  },
  body: {
    url: 'url'
  },
  json: true
};
    request(options, function(error, response, body) {
        if (error) return res.jsonp({ error: 'Không thể xử lí yêu cầu của bạn' })
        const data = url.NSFW_Prob * 100
        res.json({
            data: Number(data.toFixed(0)),
            NSFW_Prob: data.toFixed(0) + '%'
        })
    });
}