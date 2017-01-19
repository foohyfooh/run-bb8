'use strict';
const sphero = require('sphero'),  bb8 = sphero("DA:6D:A7:5C:0B:18");

bb8.connect(() => {
 	setInterval(() => {
    	let direction = Math.floor(Math.random() * 360);
		  bb8.roll(150, direction);
  	}, 1000);
});
