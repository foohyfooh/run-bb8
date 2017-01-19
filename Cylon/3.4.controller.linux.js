'use strict';
const cylon = require('cylon'), gamepad = require('gamepad');

//Constants for Logitech F310 gamepad controller on Linux
//BUTTON_SELECT is the back button
//AXIS_LEFT_Z is left trigger, AXIS_RIGHT_Z is right trigger
//When mode light is on the vales of the directional pad and the left joystck are swapped
//AXIS_LEFT_X && AXIS_RIGHT_X && AXIS_DPAD_X [-1:0] is left; [0:1] is right
//AXIS_LEFT_Y && AXIS_RIGHT_Y && AXIS_DPAD_Y [-1:0] is up; [0:1] is down
//AXIS_LEFT_Z && AXIS_RIGHT_Z [-1:1]  -1 is rest state 1 is full pressed
const AXIS_LEFT_X = 0, AXIS_LEFT_Y = 1, AXIS_LEFT_Z = 2,
      AXIS_RIGHT_X = 3, AXIS_RIGHT_Y = 4, AXIS_RIGHT_Z = 5,
      AXIS_DPAD_X = 6, AXIS_DPAD_Y = 7;
const BUTTON_A = 0, BUTTON_B = 1, BUTTON_X = 2, BUTTON_Y = 3,
      BUTTON_LEFT_BUMPER = 4, BUTTON_RIGHT_BUMPER = 5,
      BUTTON_SELECT = 6, BUTTON_START = 7, BUTON_HOME = 8,
      BUTTON_LEFT_STICK = 9, BUTTON_RIGHT_STICK  = 10;


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

    let axisState = {
      x: 0,
      y: 0
    };

    //Handle movement
    gamepad.on("move", (id, axis, value) => {
      if(axis === AXIS_LEFT_X || axis === AXIS_DPAD_X){
        axisState.x = value;
      }else if(axis === AXIS_LEFT_Y || axis === AXIS_LEFT_Y){
        axisState.y = -value;
      }

      let absX = Math.abs(axisState.x), absY = Math.abs(axisState.y);
      let magnitude, angle;

      if(absX < 0.5 && absY < 0.5){//Handle joysticks not moved far enough
        bb8.stop();
        return;
      }else if(absY < 0.5){//Moving in x-axis
        magnitude = absX;
        angle = axisState.x > 0 ? 90 : 270;
      }else if(absX < 0.5){//Moving in y-axis
        magnitude = absY;
        angle = axisState.y > 0 ? 0 : 180;
      }else{//Moving at some angle
        magnitude = Math.sqrt(absX * absX + absY * absY);
        angle = Math.atan2(absX, absY) * 180 / Math.PI //Convert to degrees

        //Determine the directon to correct the angle
        //x > 0 && y > 0 //Leave value
        if(axisState.x > 0 && axisState.y < 0) angle += 90;
        else if(axisState.x < 0 && axisState.y < 0) angle += 180;
        else if(axisState.x < 0 && axisState.y > 0) angle += 270;
      }

      //console.log(axisState, magnitude, angle);
      bb8.roll(magnitude * 100, angle);
    });

  }
}).start();
