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
    bb8.roll(100, 0);

    after(2000, () => {
      bb8.stop();
    });

    after(2500, () => {
      bb8.spin("left");
    });
  }
}).start();
