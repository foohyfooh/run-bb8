'use strict';
const cylon = require('cylon'), gamepad = require('gamepad');

//Constants for Logitech F310 gamepad controller on Windows
//BUTTON_SELECT is the back button
//AXIS_LEFT_Z is the left trigger and AXIS_RIGHT_Z is the right trigger
//AXIS_LEFT_X && AXIS_RIGHT_X  [0:1] is right; [-1:0] is left
//AXIS_LEFT_Y && AXIS_RIGHT_Y [0:1] is up; [-1:0] is down
//AXIS_LEFT_Z && AXIS_RIGHT_Z [-1:1]  -1 is rest state 1 is full pressed
const AXIS_LEFT_X = 0, AXIS_LEFT_Y = 1, AXIS_RIGHT_X = 2, AXIS_RIGHT_Y = 3,
      AXIS_LEFT_Z = 4, AXIS_RIGHT_Z = 5;
const BUTTON_UP = 0, BUTTON_DOWN = 1, BUTTON_LEFT = 2, BUTTON_RIGHT = 3,
      BUTTON_START = 4, BUTTON_SELECT = 5,
      BUTTON_LEFT_STICK = 6, BUTTON_RIGHT_STICK  = 7,
      BUTTON_LEFT_BUMPER = 8, BUTTON_RIGHT_BUMPER = 9,
      BUTTON_A = 10, BUTTON_B = 11, BUTTON_X = 12, BUTTON_Y = 13,
      BUTTON_HOME = 14;


gamepad.init() //Start the contoller input
cylon.robot({ //Connect to the robot
  connections: {
    bluetooth: { adaptor: 'central', uuid: 'da6da75c0b18', module: 'cylon-ble'}
  },

  devices: {
    bb8: { driver: 'bb8', module: 'cylon-sphero-ble', connection: 'bluetooth'}
  },

  work (robot) {
    const bb8 = robot.devices.bb8;

    // Create a game loop and poll for events
    setInterval(gamepad.processEvents, 16);
    // Scan for new gamepads as a slower rate
    setInterval(gamepad.detectDevices, 500);

    // Listen for move events on all gamepads
    gamepad.on("move", (id, axis, value) => {
      //Handle movement with the joysticks
      if(axis === AXIS_LEFT_X){
        if (value >= 0.5) {
          bb8.roll(100, 90);
          console.log("Move rigt");
        }else if(value <= -0.5){
          bb8.roll(100, 270);
          console.log("Move left");
        }else{
          console.log("Stop");
          bb8.stop();
        }
      }else if(axis === AXIS_LEFT_Y){
        if (value >= 0.5) {
          bb8.roll(100, 0);
          console.log("Move up");
        }else if(value <= -0.5){
          bb8.roll(100, 180);
          console.log("Move down");
        }else{
          console.log("Stop");
          bb8.stop();
        }
      }
    });


    // Listen for button down events on all gamepads
    gamepad.on("down", (id, button) =>  {
      if(button === BUTTON_UP){
        bb8.roll(100, 0);
        console.log("Move Up");
      }else if(button === BUTTON_DOWN){
        bb8.roll(100, 180);
        console.log("Move Down");
      }else if(button === BUTTON_RIGHT){
        bb8.roll(100, 90);
        console.log("Move Right");
      }else if(button === BUTTON_LEFT){
        bb8.roll(100, 270);
        console.log("Move Left");
      }
    });
    // Listen for button up events on all gamepads
    gamepad.on("up",  (id, button) => {
      if (button === BUTTON_UP || button === BUTTON_DOWN || button === BUTTON_LEFT || button === BUTTON_RIGHT) {
        bb8.stop();
        console.log("Stop");
      }
    });

  }
}).start();
