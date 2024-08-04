exports.name = '/facebook/info';
const axios = require('axios')
function convert(time){
  var date = new Date(`${time}`);
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var formattedDate = `${ day < 10 ? "0" + day : day}` + "/" +`${ month < 10 ? "0" + month : month}` + "/" + year + "||" + `${ hours < 10 ? "0" + hours : hours}` + ":" + `${ minutes < 10 ? "0" + minutes : minutes}` + ":" + `${ seconds < 10 ? "0" + seconds : seconds}`;
return formattedDate;
}
exports.index = async (req, res, next) => {
  const axios = require("axios");
/*axios.get(`https://graph.facebook.com/${req.query.uid}?fields=id,is_verified,created_time,cover,work,hometown,username,link,name,locale,location,website,birthday,gender,relationship_status,quotes,subscribers.limit(0)&access_token=EAAGNO4a7r2wBAL0qWBsQXfhZBe8fDwXmFL0sELMPdxQ6XCeVxgsl5bwXTCSGfGXS6W7LKmofO6a8tczCO4sCEqjycXXV8TKV2JEiXMqY13qZBgmguZAQLucDZAYTBXDXApH3j3BbvuP3ChxnU5ZB22ThHQioiGzKKV1JeDnEGbNqEJXFrpZBbN`,{*/
 axios.get(`https://graph.facebook.com/${req.query.uid}?fields=id,is_verified,created_time,cover,work,hometown,username,link,name,locale,location,website,birthday,gender,relationship_status,quotes,subscribers.limit(0)&access_token=EAAGNO4a7r2wBAD0rkrmeKJVG2E5Wa1wZA6ZCkUZB2QiZBlRjNQpnp8y9pEaMC5Hl7CiLEphkODSdMOymQJJkfUUzwt2fIZAwIJouiIDZBKDn0NjULYFE5Icy2TeFH1Cxg5WH9vVN2MExvgqgFdZAFZAFWE4yRL0yzUGJCZBnxLYz2gUZBvUzCraZA1e`,{
        headers: {
          "cookie":"sb=XakfZJ8O-bcU0dLasnQWAwgZ;datr=bqkfZPhgLBcroETVt7ym5Tnp;wd=1536x706;dpr=1.25;c_user=100022089907330;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1687679688451%2C%22v%22%3A1%7D;xs=11%3A9Vo_1la25aap3g%3A2%3A1687674649%3A-1%3A6158%3A%3AAcVTb6ldChw1RzR2i4LJDWNgKMQrQbBKlJ6eqbFmaw;fr=0OjS7KLRnndU92Xf7.AWXqkz5nKhHW8ca_uVQFDmImmbU.Bkl_QK.24.AAA.0.0.Bkl_QK.AWXH9Bi0qIg;cppo=1;usida=eyJ2ZXIiOjEsImlkIjoiQXJ3c3U4ZTEzZ25wMWUiLCJ0aW1lIjoxNjg3NjgwMDI2fQ%3D%3D;|Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
          "accept": "application/json, text/plain, /"
        }
      }).then(resp => {
  
  var dj = {
    uid: resp.data.id,
    birthday: resp.data.birthday,
    gender: resp.data.gender,
    created_time : convert(resp.data.created_time),
    relationship_status: resp.data.relationship_status,
    quotes: resp.data.quotes,
    follower: resp.data.subscribers.summary.total_count,
    username: resp.data.username,
    link: resp.data.link,
    name:resp.data.name,
    tichxanh: resp.data.is_verified,
    cover : resp.data.cover,
    work: resp.data.work,
    hometown: resp.data.hometown,
    locale: resp.data.locale,
    location: resp.data.location,
    avtlink: `https://graph.facebook.com/${resp.data.id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`
  }
  res.json(dj)
}).catch(e =>{
  console.log(e)
})
}