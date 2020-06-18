var five = require("johnny-five");
const { Servo } = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {
  // Create a new `joystick` hardware instance.
  var joystick = new five.Joystick({
    //   [ x, y ]
    pins: ["A2", "A3"],
  });

  // Create a new `servo` hardware instance.
  const servo = new Servo(10);

  joystick.on("change", function () {
    console.log("Joystick");
    console.log("  x : ", this.x);
    console.log("  y : ", this.y);
    // if joystick moved to right set servo position to 0 degrees
    if (this.x > 0.8) {
      servo.to(0);
    }
    // if joystick moved to front/top set servo position to 90 degrees
    if (this.x < 0) {
      servo.to(180);
    }
    // if joystick moved to left set servo position to 180 degrees
    if (this.y > 0.8) {
      servo.to(90);
    }
    console.log("--------------------------------------");
  });
});
