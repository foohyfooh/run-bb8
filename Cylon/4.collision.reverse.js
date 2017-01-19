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

  let speed = 100, direction = 0;

    bb8.on('collision', data => {
      console.log("COLLISION!");
      //console.log(data);
      if(direction === 0) direction = 180;
      else if(direction === 180) direction = 0;
      else if(direction === 270) direction = 90;
      else direction = 270; //direction === 90
      bb8.color("red");
      after((1).second(), () => {
        bb8.color("green");
      });
    });

    keyboard.on('up', key =>  {
      speed = 100;
      direction = 0;
      console.log("MOVE UP ");
    });

    keyboard.on('down', key =>  {
      speed = 100;
      direction = 180;
      console.log("MOVE DOWN!");
    });

    keyboard.on('left', key =>  {
      speed = 100;
      direction = 270;
      console.log("MOVE LEFT!");
    });

    keyboard.on('right', key =>  {
      speed = 100;
      direction = 90;
      console.log("MOVE RIGHT!");
    });

    keyboard.on('return', key => {
      speed = 0;
      console.log("STOP!");
    });

    every((1).second(), () => {
      bb8.roll(speed, direction);
    });

  }
}).start();
