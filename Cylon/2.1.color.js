'use strict';
const cylon = require('cylon');

cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: 'da6da75c0b18', module: 'cylon-ble'}
  },

  devices: {
    bb8: { driver: 'bb8', module: 'cylon-sphero-ble', connection: 'bluetooth'}
  },

  work (robot) {
    const bb8 = robot.devices.bb8;
    // bb8.color("red");
    //
    // after(2000, () => {
    //   bb8.color("green")
    // });
    //
    // after(2500, () => {
    //   bb8.color("aqua");
    // });

    every((1).second(), () => {
      bb8.randomColor();
    });
  }
}).start();
