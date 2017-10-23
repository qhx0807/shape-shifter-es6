class Drawing {
    constructor() {
        this.requestFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60)
            }
    }

    init(el) {
        this.canvas = document.querySelector(el)
        this.context = this.canvas.getContext('2d')
        this.adjustCanvas()

        window.addEventListener('resize', () => {
            this.adjustCanvas()
        })
    }

    loop(fn) {
        let renderFn = null
        renderFn = !renderFn ? fn : renderFn
        this.clearFrame()
        renderFn()
        requestFrame.call(window, this.loop.bind(this))
    }

    adjustCanvas() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
    }

    clearFrame() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    getArea() {
        return { w: this.canvas.width, h: this.canvas.height };
    }

    drawCircle(p, c) {
        this.context.fillStyle = c.render();
        this.context.beginPath();
        this.context.arc(p.x, p.y, p.z, 0, 2 * Math.PI, true);
        this.context.closePath();
        this.context.fill();
    }
}

export default new Drawing()