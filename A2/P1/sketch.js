let canvasHolder = document.getElementById("main");
let size = 700;
let circs = [];
// Create a P5 app
mainP5 = new p5(
  // Run after processing is initialized
  function (p) {
    p.p;

    // console.log(p)
    // Set the size of the canvas that P5 thinks its using
    // Use HSL mode (WAAAYYY better than RGB!)

    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight - 63);

      if (animation.setup) animation.setup(p);
    };
    p.draw = () => {
      p.stroke(0, 0, 0);
      p.fill(255, 255, 255);
      p.text("FPS: " + Math.round(p.frameRate(), 2), 300, 20);
      circs = animation.draw(p);
    };
  },
  canvasHolder
);
