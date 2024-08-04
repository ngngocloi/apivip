exports.name = '/tiktok/info';
const axios = require('axios');
const useragent = require('../Other/data/useragent.json');
exports.index = async (req, res, next) => {
  const { username } = req.query
  var headers = {
    "User-Agent": (useragent[Math.floor(Math.random() * useragent.length)]).userAgent,
    "cookie": `tt_csrf_token=uuPgbKsZ-RRdQzRZeXBvXJzHSCdD7cT4NIBQ; csrf_session_id=06fe03416a7ffcb965ad3c3529c6400e; s_v_web_id=verify_l6j0trby_R6ZCSfxf_Hyh8_4kJd_8YLr_WDjXTplT6qnf; uid_tt=eb14f5b59fcb22ef5b429caa3f678d073bece1447a1fa23881c3df11769944f9; uid_tt_ss=eb14f5b59fcb22ef5b429caa3f678d073bece1447a1fa23881c3df11769944f9; sid_tt=4d662473fb3fdc1015e8a41d6e730bb4; sessionid=4d662473fb3fdc1015e8a41d6e730bb4; sessionid_ss=4d662473fb3fdc1015e8a41d6e730bb4; store-idc=useast2a; store-country-code=vn; tt-target-idc=alisg; _ttp=2D269zM25hEMzzxpP8fZRmYJecd; passport_fe_beating_status=true; tiktok_webapp_lang=vi-VN; x-jupiter-uuid=16600230380462392; store-country-code-src=uid; tiktok_webapp_theme=dark; sid_guard=4d662473fb3fdc1015e8a41d6e730bb4%7C1670764770%7C5184000%7CThu%2C+09-Feb-2023+13%3A19%3A30+GMT; sid_ucp_v1=1.0.0-KDBhNTY3MmQ5NzY2YzBjOWJhODAzMDU4YTdiZWE4NjIzNDdmMThhM2YKHwiaiKfu-8eT92AQ4rHXnAYYswsgDDD1ormHBjgIQBIQARoDc2cxIiA0ZDY2MjQ3M2ZiM2ZkYzEwMTVlOGE0MWQ2ZTczMGJiNA; ssid_ucp_v1=1.0.0-KDBhNTY3MmQ5NzY2YzBjOWJhODAzMDU4YTdiZWE4NjIzNDdmMThhM2YKHwiaiKfu-8eT92AQ4rHXnAYYswsgDDD1ormHBjgIQBIQARoDc2cxIiA0ZDY2MjQ3M2ZiM2ZkYzEwMTVlOGE0MWQ2ZTczMGJiNA; tt_chain_token=uLhBsfRVRe8P40JqBeqTOg==; bm_sz=B3A6307B7F4BDADBD36154AC8E024F92~YAAQRBBFdncnBw+FAQAAgSv2UxKnvXVVBkyYLuIeN8ONgvV39DgEZfaYVj3MbhHrqcP53vCFhVWrQxPfrIOs0s/7RLH8KqgR0OE8vpCDE/hXHY6iYEwDGskYNoAyT0QiGSMhRuirRGs1CEop1/WAHkzOHAHjXCKKWi8/d+Iim0emeYGDdBZgI9rfGLzC6Nm6rUCXlbGOOgDeFajuC73cCY1chqxNP83/z6if5XOZVHnDdhqvqYEgO3fJ++JCzprmyciu45G0hOvuqXqwHmXcmMIQ8m4I1T6jpI9lfW/WZVrFDF0=~3294008~4474167; ak_bmsc=559EEE7D8B2705E6A51C49E0D71E0E47~000000000000000000000000000000~YAAQRBBFdoAnBw+FAQAAizL2UxJULXrP1PRL0cmvSY/QszRC3up2b/JEoaZQkAEALif5n4+JxfKgNgdFJGkECYX5viuGNmD+2MbAMfCHe4+9qo7fGp+fjMafvaYoOqOSi+jWKHvwbUGoULbs1kGeNKNP8BUVL3eh1ECctn1M1Jx17lwXtVFGngOp46H6OTlHoLcOzrh9cXGU7FR+xIOBl7RrEJ08XUNLeiWL7lUvoLa08K59M+rNlJB74SkhHiE6YUQQ/aEAs4C6q0v2DJtEpGVbUo0bkmpzKfs7OmdHe6BbXg1n/5Vjc+xKt6Tp0noDK3QmaTms+vSc+NDvNsJaUnkCQjCrZ8vU0jIWD8Z151agzxOIArbVKRxXKFfiUc+1ZpDl/YIFMuIyjDUXNqF/Y9p+SJSNRGk5ZvTy9rRHxniUuxsNFeHEmwcGeyWp9hjvkVNz88VK2OlgfxGs7gTWV+Fzm9FHGZtc7+mIMLb+sA7/s1Mj2uFmvAU=; __tea_cache_tokens_1988={%22user_unique_id%22:%227129037338705184258%22%2C%22timestamp%22:1663575208973%2C%22_type_%22:%22default%22}; ttwid=1%7Ctq9-LXsy3fUcapGNcoMgMy6yEpqJloygNNqcOLUO_ws%7C1672150924%7Ce756714ede1522f1dab893be75d71ed5ba40f6b5ab174ba7b8678070039f5aae; _abck=4CCA0E72E1D6E26F5EA0AD4ADFBA68C7~0~YAAQRBBFdqAnBw+FAQAAsz72Uwk20pVzXMXBLAxP+uG0ExP5kbeABCBTuQoL2ABSL86RCE1i2NhkVEcf16kcl9Zg1A0HgZPtEweF+7u/xmUOHeQsQLgCmgSOwc7P6pC0Vxy7o4GNukO5BIS+xbcmkrEQknMzQOxaxfjNFAeiwBwlngjpapO9wm/kmyAsiifv7Xph4UI5LA4DuSMJcP2CNX0uXZO0ziJxZGJlk4YwL7ODL5ApwVHvXFxmS+VOoG25y93or47lQh/JvyC27iBiPRjWIcNvOPbuvXVHuuxzMgu9wHbPDjfi0Hf2KPfY6niEjtGYkywmwHlRm8W3hFOPTZTAajzjptjDjtn0j7vazD+c5+QIkiUS7bAd5nsV/3upsuDqNksKPRlhPxC1eGeJXJ86gIXzA/mnUw==~-1~-1~-1; odin_tt=fead4331a6ed418038c7ae21fa562727ca3ca2acf23706c6ff403054a9bb4eb0c973205ff403db02dcdfdfdbe889058107bc0f30ae8683faf89bab0cf30c05c21b39fcd364101fd8d745750693410c7a; msToken=8x1VJ81PRtYI6Z1qrxBq6k2EPeEbTKUZm_km0Je6fd2c_d3VjoJC5AL2-nuM2ido92STuYf9UxhrdkuAkAw9dHq7Hxidbsl97tCBxsKaMoGwEivxAUE4QA6iCJrmll4J9zbJh7Q=; msToken=3Ue1XL0b9C5nFtLyGEycn0Es80dkeYZXCYq32lEcSks1aoTXs37sJfuF3uQNRQKh80yg_Nr9_JJGXJsqXA6JF-5xXyjTlZ13igJsJjj22Wk872qNf4izDcdebzNf3TV-dpdu5wk=; bm_sv=C0071F4EC29E9710DE778EE9CA87D641~YAAQRBBFdjAoBw+FAQAAuHb2UxIpoFAjWTbgAeqCHEzDQjB/wWTLD47YpyVB+JsVMJYJAWJ0gZZFKhmDwdyb9kDgmJ1uXFvEqsb0lCp423VszyK5xme6uKEyZxPXpcYSid5rN33hB54o1e/bzZnG/sl+18pQ02hZg2wurqGWebQnUBjSExFNpTWmMr0VWqwqi4TpqO7lLR3y5crF9ooAbQpfXeIFj0FbinB96dBG8JEekmHLiO5CvwNh0wSaxUaB~1`
  };
  var { data } = await axios.get(`https://www.tiktok.com/node/share/user/@${username}?aid=1988`, {
    headers: headers,
  });
  res.json(data);
}