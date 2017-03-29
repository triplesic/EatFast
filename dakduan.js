var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();

module.exports = api;
var dbConn = null;

api.get('/location', function (request) {
  var data = [ {"name":"ป้าหมูกรอบ", "description":"ซอยสี่", "lat": 44, "lng": 33},
               {"name":"กวงโภชนา", "description":"ซอยสี่", "lat": 23, "lng": 63},
             {"name":"ทิปทอป", "description":"ติดแอร์ ในซอย สุขุมวิท 33", "lat": 23, "lng": 63}];
  return JSON.stringify(data);
});

api.get('/shop', function (request) {
  var data = [ {"name":"ป้าหมูกรอบ", Menu:["ข้าวกระเพราหมูกรอบ","ข้าวราดแขนงหมูกรอบ"]},
               {"name":"กวงโภชนา", Menu:["ผัดซิิิอิ้ว","ข้าวซอยไก่"]},
               {"name":"ทิปทอป", Menu:["ราดหน้าเย็นตาโฟ"]},
               {"name":"ซาลอน", Menu:["ข้าวผัดพริกแกงใต้","หมูตุ๋น"]} ];
  return JSON.stringify(data);
});
