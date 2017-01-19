'use strict';
const cylon = require('cylon');

cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: 'da6da75c0b18', module: 'cylon-ble'},
    keyboard: { adaptor: 'keyboard' }
  },

  devices: {
    bb8: { driver: 'bb8', module: 'cylon-sphero-ble', connection: 'bluetooth'},
    keyboard: { driver: 'keyboard', connection: 'keyboard'}
  },

  work(robot) {
    const bb8 = robot.devices.bb8;
    const keyboard = robot.devices.keyboard;

    bb8.color("green");
    bb8.detectCollisions();

    bb8.on('collision', data => {
      console.log("COLLISION!");
      console.log(data);
      bb8.color("red");
      after((1).second(), () => {
        bb8.color("green");
      });
    });

    keyboard.on('up', key =>  {
      bb8.roll(100, 0);
      console.log("MOVE UP ");
    });

    keyboard.on('down', key =>  {
      bb8.roll(100, 180);
      console.log("MOVE DOWN!");
    });

    keyboard.on('left', key =>  {
      bb8.roll(100, 270);
      console.log("MOVE LEFT!");
    });

    keyboard.on('right', key =>  {
      bb8.roll(100, 90);
      console.log("MOVE RIGHT!");
    });

    keyboard.on('return', key => {
      bb8.stop();
      console.log("STOP!");
    });
  }
}).start();
