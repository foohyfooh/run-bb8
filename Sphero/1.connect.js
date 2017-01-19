'use strict';
const sphero = require('sphero'),  bb8 = sphero("DA:6D:A7:5C:0B:18");

bb8.connect(() => {
  //consoe.log(bb8);
  console.log("Connected");
});
