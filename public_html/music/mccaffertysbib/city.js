(function() {
  // Particle = (x, y, radius) ->
  //     @init(x, y, radius)
  var COLORS, MAX_PARTICLES, Particle, demo, particles, pool;

  Particle = class Particle {
    constructor(x, y, radius) {
      this.alive = true;
      this.wander = 0.15;
      this.theta = random(TWO_PI);
      this.drag = 0.92;
      this.color = "#fff";
      this.vx = 0.0;
      this.vy = 0.0;
      this.x = 0.0 || x;
      this.y = 0.0 || y;
      this.radius = radius || 10;
    }

    move() {
      this.x += this.vx;
      this.y += this.vy;
      this.vx *= this.drag;
      this.vy *= this.drag;
      this.theta += random(-0.5, 0.5) * this.wander;
      this.vx += sin(this.theta) * 0.1;
      this.vy += cos(this.theta) * 0.1;
      this.radius *= 0.96;
      return this.alive = this.radius > 0.5;
    }

    draw(canvas) {
      canvas.beginPath();
      canvas.arc(this.x, this.y, this.radius, 0, TWO_PI);
      canvas.fillStyle = this.color;
      return canvas.fill;
    }

  };

  MAX_PARTICLES = 280;

  COLORS = ['#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423'];

  particles = [];

  pool = [];

  demo = Sketch.create({
    container: document.getElementById('container')
  });

  demo.setup = function() {
    var i, k, results, x, y;
    results = [];
    for (i = k = 0; k <= 19; i = ++k) {
      x = demo.width * 0.5 + random(-100, 100);
      y = demo.height * 0.5 + random(-100, 100);
      results.push(demo.spawn(x, y));
    }
    return results;
  };

  demo.spawn = function(x, y) {
    var force, particle, theta;
    if (particles.length >= MAX_PARTICLES) {
      pool.push(particles.shift);
    }
    particle = pool.length ? pool.pop : new Particle(x, y, random(5, 40));
    particle.wander = random(0.5, 2.0);
    particle.color = random(COLORS);
    particle.drag = random(0.9, 0.99);
    theta = random(TWO_PI);
    force = random(2, 8);
    particle.vx = sin(theta) * force;
    particle.vy = cos(theta) * force;
    return particles.push(particle);
  };

  demo.update = function() {
    var i, k, particle, ref, results;
    results = [];
    for (i = k = ref = particles.length - 1; (ref <= 0 ? k <= 0 : k >= 0); i = ref <= 0 ? ++k : --k) {
      particle = particles[i];
      if (particle.alive) {
        results.push(particle.move);
      } else {
        results.push(pool.push(particles.splice(i, 1)[0]));
      }
    }
    return results;
  };

  demo.draw = function() {
    var i, k, ref, results;
    demo.globalCompositeOperation = 'lighter';
    results = [];
    for (i = k = ref = particles.length - 1; (ref <= 0 ? k <= 0 : k >= 0); i = ref <= 0 ? ++k : --k) {
      results.push(particles[i].draw(demo));
    }
    return results;
  };

  demo.mousemove = function() {
    var i, j, k, max, ref, results, touch;
    results = [];
    for (i = k = 0, ref = demo.touches.length; (0 <= ref ? k <= ref : k >= ref); i = 0 <= ref ? ++k : --k) {
      if (!(i < demo.touches.length)) {
        continue;
      }
      touch = demo.touches[i];
      max = random(1, 4);
      results.push((function() {
        var l, ref1, results1;
        results1 = [];
        for (j = l = 0, ref1 = max - 1; (0 <= ref1 ? l <= ref1 : l >= ref1); j = 0 <= ref1 ? ++l : --l) {
          results1.push(demo.spawn(touch.x, touch.y));
        }
        return results1;
      })());
    }
    return results;
  };

}).call(this);


//# sourceMappingURL=city.js.map
//# sourceURL=coffeescript