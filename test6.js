var url = require('url');
var curUrl = url.parse("https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EA%B9%80%EB%B2%94%EC%88%98"); 
var curStr = url.format(curUrl);
console.dir(curStr);
var querystring = requrie('querystring');
var param = querystring.parse(curUrl.query);

console.log(param. query);
console.log(querystring.stringify(param));