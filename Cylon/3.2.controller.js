'use strict';
const cylon = require('cylon');

cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: 'da6da75c0b18', module: 'cylon-ble'},
    joystick: { adaptor: "joystick" }
  },

  devices: {
    bb8: { driver: 'bb8', module: 'cylon-sphero-ble', connection: 'bluetooth'},
    controller: { driver: "joystick", config: __dirname + "/logitech-f310-linux.json", connection: 'joystick'}
  },

  work (robot) {
    const bb8 = driver.devices.bb8;
    const controller = robot.devices.controller;

    // Log the values for all events
    // ["up", "down", "left", "right", "start", "select", "home",
    // "ls", "rs", "lb", "rb", "a", "b", "y", "x"].forEach( button => {
    //   controller.on(button + ":press", () => {
    //     console.log("Button " + button + " pressed.");
    //   });
    //
    //   controller.on(button + ":release", () => {
    //     console.log("Button " + button + " released.");
    //   });
    // });
    //
    // [ "dpad_x", "dpad_y",
    //   "left_x", "left_y", "left_z",
    //   "right_x", "right_y", "right_z" ].forEach( axis => {
    //   controller.on(axis + ":move", pos => {
    //     console.log(axis + ":", pos);
    //   });
    // });

    //Handle Linux Events
    controller.on("dpad_x:move", pos => {
      if(pos === 1)  {
        console.log("MOVE RIGHT!");
        bb8.roll(100, 90);
      }else if(pos === -1){
        console.log("MOVE LEFT!");
        bb8.roll(100, 270);
      }else{//pos === 0
        console.log("STOP");
        bb8.stop();
      }
    });

    controller.on("dpad_y:move", pos => {
      if(pos === -1)  {
        console.log("MOVE UP!");
        bb8.roll(100, 0);
      }else if(pos === 1){
        console.log("MOVE DOWN!");
        bb8.roll(100, 270);
      }else{//pos === 0
        console.log("STOP");
        bb8.stop();
      }
    });

    //Handle Windows Events
    controller.on("up:press", () => {
        console.log("MOVE UP!");
        bb8.roll(100, 0);
    });

    controller.on("right:press", () => {
        console.log("MOVE RIGHT!");
        bb8.roll(100, 90);
    });

    controller.on("down:press", () => {
        console.log("MOVE DOWN!");
        bb8.roll(100, 180);
    });

    controller.on("left:press", () => {
        console.log("MOVE LEFT!");
        bb8.roll(100, 270);
    });

    ["up", "down", "left", "right"].forEach(button => {
      controller.on(button + ":release", () => {
        console.log("STOP!");
        bb8.stop();
      });
    })

  }
}).start();
