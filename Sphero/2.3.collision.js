'use strict';
const sphero = require('sphero'),  bb8 = sphero("DA:6D:A7:5C:0B:18");

bb8.connect(function(){

	bb8.configureCollisions({
		meth: 0x01,
  	xt: 0x20,
  	yt: 0x20,
  	xs: 0x10,
  	ys: 0x10,
  	dead: 0x10
	});
	//
	//
	// bb8.roll(150, 270);
	// bb8.color("green");
	//
	// //Detecting Collisions
	// bb8.detectCollisions();
	// bb8.on("collision", (data) => {
	// 	console.log("Collision: ", data);
	// 	bb8.color("red");
	//
	//
	// 	setTimeout(() => {
	// 		bb8.color("green");
	// 	}, 100);
	// });


	/*
	Collison and setInterval are having issues and causign the following Error:
	Unhandled rejection Error: Command sync response was lost.
	at Sphero.handler (/home/ubuntu/Documents/bb8/node_modules/sphero/lib/sphero.js:252:21)
	at Timer.listOnTimeout (timers.js:92:15)
	*/
	// setInterval(function(){
	// 	bb8.roll(100, 0);
	// }, 1000);


	bb8.roll(150, 0);

	  // turn Sphero green
	  bb8.color("green");

	  // have Sphero tell you when it detect collisions
	  bb8.detectCollisions();

	  // when Sphero detects a collision, turn red for a second, then back to green
	  bb8.on("collision", function(data) {
	    console.log("collision detected");
	    console.log("  data:", data);

	    bb8.color("red");

	    setTimeout(function() {
	      bb8.color("green");
	    }, 100);
	  });

});
