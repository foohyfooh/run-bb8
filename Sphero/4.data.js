'use strict';
const sphero = require('sphero'),  bb8 = sphero("DA:6D:A7:5C:0B:18");

bb8.connect(() => {
	 bb8.getBluetoothInfo((err, data) => {
		if(err) {
			console.log(err);
			return;
		}
		console.log(data);
	});
});
