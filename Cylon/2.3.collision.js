'use strict';
const cylon = require('cylon');

cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: 'da6da75c0b18', module: 'cylon-ble'}
  },

  devices: {
    bb8: { driver: 'bb8', module: 'cylon-sphero-ble', connection: 'bluetooth'}
  },

  work(robot) {
    const bb8 = robot.devices.bb8;

    //detectCollisions  takes a callback
    bb8.detectCollisions();

    bb8.on('collision', data => {
      console.log("Collision");
      bb8.stop();
    });

    bb8.roll(100, 0);

  }
}).start();
