# Particle = (x, y, radius) ->
#     @init(x, y, radius)

class Particle
    constructor: (x, y, radius) ->
        @alive = true
        @wander = 0.15
        @theta = random(TWO_PI)
        @drag = 0.92
        @color = "#fff"
        @vx = 0.0
        @vy = 0.0
        @x = 0.0 || x
        @y = 0.0 || y
        @radius = radius || 10
    
    move: () ->
        @x += @vx
        @y += @vy
        @vx *= @drag
        @vy *= @drag
        @theta += random(-0.5, 0.5) * @wander
        @vx += sin(@theta) * 0.1
        @vy += cos(@theta) * 0.1
        @radius *= 0.96
        @alive = @radius > 0.5
    draw: (canvas) ->
        canvas.beginPath()
        canvas.arc(@x, @y, @radius, 0, TWO_PI)
        canvas.fillStyle = @color
        canvas.fill


MAX_PARTICLES = 280
COLORS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ]
particles = []
pool = []

demo = Sketch.create({
    container: document.getElementById('container')
})

demo.setup = () ->
    for i in [0..19]
        x = demo.width * 0.5 + random(-100, 100)
        y = demo.height * 0.5 + random(-100, 100)
        demo.spawn(x, y)

demo.spawn = (x, y) ->
    pool.push(particles.shift) if particles.length >= MAX_PARTICLES
    particle = if pool.length then pool.pop else new Particle(x, y, random(5, 40))
    particle.wander = random(0.5, 2.0)
    particle.color = random(COLORS)
    particle.drag = random(0.9, 0.99)
    theta = random(TWO_PI)
    force = random(2, 8)
    particle.vx = sin(theta) * force
    particle.vy = cos(theta) * force
    particles.push(particle)

demo.update = () ->
    for i in [particles.length - 1..0]
        particle = particles[i]
        if particle.alive then particle.move
        else pool.push(particles.splice(i, 1)[0])

demo.draw = () ->
    demo.globalCompositeOperation = 'lighter'
    particles[i].draw(demo) for i in [particles.length - 1..0]

demo.mousemove = () ->
    for i  in [0..demo.touches.length] when i < demo.touches.length
        touch = demo.touches[i]
        max = random(1, 4)
        demo.spawn(touch.x, touch.y) for j in [0..max - 1]
            

    








        
        
    