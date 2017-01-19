# Sphero BB-8

## Requirements for [Noble](https://github.com/sandeepmistry/noble)
- NodeJS 4
- On Linux
  - libbluetooth-dev
  - libudev-dev
  - Run  $ sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev
- On Windows
  - node-gyp
    - Python 2.7
    - Visual Studio Express
  - node-bluetooth-hci-socket
    - Compatible Bluetooth 4.0 USB Adapter
  - [Guide to Setup Noble on Windows](https://www.youtube.com/watch?v=mL9B8wuEdms)


## Requirements using [Sphero.js SDK](https://github.com/orbotix/sphero.js)
  - Noble

## Requirements using [Cylon.js](https://cylonjs.com/)
 - Sphero.js

## Installation Sphero
	$ npm install sphero noble

## Installing Cylon
	$ npm install clylon cylon-ble cylon-sphero-ble

## Cylon BLE Scan
    Use cylon-ble-scan to get uuid for use with Cylone.js
    $ npm install -g cylon-ble
    $ cylon-ble-scan

## Cylon Joystick | Keyboard
    $ npm install cylon-joystick
    $ npm install cylon-keyboard

## Gamepad Support
    $ npm install gamepad

## Documentation
 - [Sphero.js API](http://sdk.sphero.com/community-apis/javascript-sdk/)
 - [Cylon.JS Documentation](https://cylonjs.com/documentation/)

## Repo Pages | NPM Install Command
  - [Noble](https://github.com/sandeepmistry/noble) | $ npm install noble
  - [Sphero.js](https://github.com/orbotix/sphero.js) | $ npm install sphero
  - [Cylon.js](https://github.com/hybridgroup/cylon/) | $ npm install cylon
  - [Cylon.js For Bluetooth LE](https://github.com/hybridgroup/cylon-ble) | $ npm install cylon-ble
  - [Cylon.js For Sphero](https://github.com/hybridgroup/cylon-sphero) | $ npm install cylon-sphero
  - [Cylon.js For Sphero BLE Robots](https://github.com/hybridgroup/cylon-sphero-ble) | $ npm install cylon-sphero-ble
  - [Cylon.js for Joysticks and Controllers](https://github.com/hybridgroup/cylon-joystick) | $ npm install cylon-joystick
  - [Cylon.js For Keyboard Input](https://github.com/hybridgroup/cylon-keyboard) | $ npm install cylon-keyboard
  - [node-gamepad](https://github.com/creationix/node-gamepad) | $ npm install gamepad


## Visit
http://adndevblog.typepad.com/cloud_and_mobile/2016/01/integrating-sphero-bb8-droid-with-view-data-api-part-i.html
http://adndevblog.typepad.com/cloud_and_mobile/2016/02/integrating-sphero-bb8-droid-with-view-data-api-part-ii.html
https://github.com/leefsmp/bb8
