'use strict';
const sphero = require('sphero'),  bb8 = sphero("DA:6D:A7:5C:0B:18");

bb8.connect(() => {
	//bb8.color("blue");
	//bb8.color("green");
	//bb8.color("red");
	//bb8.color("pink");
	//bb8.color("#FFFFFF");
	//bb8.color("#973584");
	//bb8.color("purple");

	setInterval(() => {
		let r = Math.round(Math.random() * 5);
		if(r == 1){
			bb8.color("blue");
		}else if(r == 2){
			bb8.color("red");
		}else{
			bb8.color("purple");
		}
	}, 1500);
});
