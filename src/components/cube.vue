<template>
    <div id="wrapper">
        <div class="viewport">
            <div id="cube" class="cube">
                <div class="side">
                    <div class="cube-image"><img alt="JS" src="../assets/img/js.png" class="large-img"></div>
                </div>
                <div class="side">
                    <div class="cube-image"><img alt="Github" src="../assets/img/github.png"></div>
                </div>
                <div class="side">
                    <div class="cube-image"><img alt="Webpack" src="../assets/img/webpack.png"></div>
                </div>
                <div class="side">
                    <div class="cube-image"><img alt="Figma" src="../assets/img/Figma.png"></div>
                </div>
                <div class="side">
                    <div class="cube-image"><img alt="pp" src="../assets/img/pp.png" class="large-img"></div>
                </div>
                <div class="side">
                    <div class="cube-image active"><img alt="Vue" src="../assets/img/logo.png"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


    export default {

        mounted: function () {
            let events = new Events();
            events.add = function (obj) {
                obj.events = {};
            }
            events.implement = function (fn) {
                fn.prototype = Object.create(Events.prototype);
            }

            function Events() {
                this.events = {};
            }

            Events.prototype.on = function (name, fn) {
                let events = this.events[name];
                if (events == undefined) {
                    this.events[name] = [fn];
                    this.emit('event:on', fn);
                } else {
                    if (events.indexOf(fn) == -1) {
                        events.push(fn);
                        this.emit('event:on', fn);
                    }
                }
                return this;
            }
            Events.prototype.once = function (name, fn) {
                let events = this.events[name];
                fn.once = true;
                if (!events) {
                    this.events[name] = [fn];
                    this.emit('event:once', fn);
                } else {
                    if (events.indexOf(fn) == -1) {
                        events.push(fn);
                        this.emit('event:once', fn);
                    }
                }
                return this;
            }
            Events.prototype.emit = function (name, args) {
                let events = this.events[name];
                if (events) {
                    var i = events.length;
                    while (i--) {
                        if (events[i]) {
                            events[i].call(this, args);
                            if (events[i].once) {
                                delete events[i];
                            }
                        }
                    }
                }
                return this;
            }
            Events.prototype.unbind = function (name, fn) {
                if (name) {
                    let events = this.events[name];
                    if (events) {
                        if (fn) {
                            let i = events.indexOf(fn);
                            if (i != -1) {
                                delete events[i];
                            }
                        } else {
                            delete this.events[name];
                        }
                    }
                } else {
                    delete this.events;
                    this.events = {};
                }
                return this;
            }

            let userPrefix;

            let styles = window.getComputedStyle(document.documentElement, ''),
                pre = (Array.prototype.slice
                        .call(styles)
                        .join('')
                        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
                )[1],
                dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
            userPrefix = {
                dom: dom,
                lowercase: pre,
                css: '-' + pre + '-',
                js: pre[0].toUpperCase() + pre.substr(1)
            };
            userPrefix;

            function bindEvent(element, type, handler) {
                if (element.addEventListener) {
                    element.addEventListener(type, handler, false);
                } else {
                    element.attachEvent('on' + type, handler);
                }
            }

            function Viewport(data) {
                events.add(this);

                let self = this;

                this.element = data.element;
                this.fps = data.fps;
                this.sensivity = data.sensivity;
                this.sensivityFade = data.sensivityFade;
                this.touchSensivity = data.touchSensivity;
                this.speed = data.speed;

                this.lastX = 0;
                this.lastY = 0;
                this.mouseX = 0;
                this.mouseY = 0;
                this.distanceX = 0;
                this.distanceY = 0;
                this.positionX = 1122;
                this.positionY = 136;
                this.torqueX = 0;
                this.torqueY = 0;

                this.down = false;
                this.upsideDown = false;

                this.previousPositionX = 0;
                this.previousPositionY = 0;

                this.currentSide = 0;
                this.calculatedSide = 0;


                bindEvent(document, 'mousedown', function () {
                    self.down = true;
                });

                bindEvent(document, 'mouseup', function () {
                    self.down = false;
                });

                bindEvent(document, 'keyup', function () {
                    self.down = false;
                });

                bindEvent(document, 'mousemove', function (e) {
                    self.mouseX = e.pageX;
                    self.mouseY = e.pageY;
                });

                bindEvent(document, 'touchstart', function (e) {

                    self.down = true;
                    e.touches ? e = e.touches[0] : null;
                    self.mouseX = e.pageX / self.touchSensivity;
                    self.mouseY = e.pageY / self.touchSensivity;
                    self.lastX = self.mouseX;
                    self.lastY = self.mouseY;
                });

                bindEvent(document, 'touchmove', function (e) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    }

                    if (e.touches.length == 1) {

                        e.touches ? e = e.touches[0] : null;

                        self.mouseX = e.pageX / self.touchSensivity;
                        self.mouseY = e.pageY / self.touchSensivity;

                    }
                });

                bindEvent(document, 'touchend', function () {
                    self.down = false;
                });

                setInterval(this.animate.bind(this), this.fps);

            }

            events.implement(Viewport);

            Viewport.prototype.animate = function () {

                this.distanceX = (this.mouseX - this.lastX);
                this.distanceY = (this.mouseY - this.lastY);

                this.lastX = this.mouseX;
                this.lastY = this.mouseY;

                if (this.down) {
                    this.torqueX = this.torqueX * this.sensivityFade + (this.distanceX * this.speed - this.torqueX) * this.sensivity;
                    this.torqueY = this.torqueY * this.sensivityFade + (this.distanceY * this.speed - this.torqueY) * this.sensivity;
                }

                if (Math.abs(this.torqueX) > 1.0 || Math.abs(this.torqueY) > 1.0) {
                    if (!this.down) {
                        this.torqueX *= this.sensivityFade;
                        this.torqueY *= this.sensivityFade;
                    }

                    this.positionY -= this.torqueY;

                    if (this.positionY > 360) {
                        this.positionY -= 360;
                    } else if (this.positionY < 0) {
                        this.positionY += 360;
                    }

                    if (this.positionY > 90 && this.positionY < 270) {
                        this.positionX -= this.torqueX;

                        if (!this.upsideDown) {
                            this.upsideDown = true;
                            this.emit('upsideDown', {upsideDown: this.upsideDown});
                        }

                    } else {

                        this.positionX += this.torqueX;

                        if (this.upsideDown) {
                            this.upsideDown = false;
                            this.emit('upsideDown', {upsideDown: this.upsideDown});
                        }
                    }

                    if (this.positionX > 360) {
                        this.positionX -= 360;
                    } else if (this.positionX < 0) {
                        this.positionX += 360;
                    }

                    if (!(this.positionY >= 46 && this.positionY <= 130) && !(this.positionY >= 220 && this.positionY <= 308)) {
                        if (this.upsideDown) {
                            if (this.positionX >= 42 && this.positionX <= 130) {
                                this.calculatedSide = 3;
                            } else if (this.positionX >= 131 && this.positionX <= 223) {
                                this.calculatedSide = 2;
                            } else if (this.positionX >= 224 && this.positionX <= 314) {
                                this.calculatedSide = 5;
                            } else {
                                this.calculatedSide = 4;
                            }
                        } else {
                            if (this.positionX >= 42 && this.positionX <= 130) {
                                this.calculatedSide = 5;
                            } else if (this.positionX >= 131 && this.positionX <= 223) {
                                this.calculatedSide = 4;
                            } else if (this.positionX >= 224 && this.positionX <= 314) {
                                this.calculatedSide = 3;
                            } else {
                                this.calculatedSide = 2;
                            }
                        }
                    } else {
                        if (this.positionY >= 46 && this.positionY <= 130) {
                            this.calculatedSide = 6;
                        }

                        if (this.positionY >= 220 && this.positionY <= 308) {
                            this.calculatedSide = 1;
                        }
                    }

                    if (this.calculatedSide !== this.currentSide) {
                        this.currentSide = this.calculatedSide;
                        this.emit('sideChange');
                    }

                }
                this.element.style[userPrefix.js + 'Transform'] = 'rotateX(' + this.positionY + 'deg) rotateY(' + this.positionX + 'deg)';

                if (this.positionY != this.previousPositionY || this.positionX != this.previousPositionX) {
                    this.previousPositionY = this.positionY;
                    this.previousPositionX = this.positionX;

                    this.emit('rotate');

                }

            }
            var viewport = new Viewport({
                element: document.getElementById('cube'),
                fps: 20,
                sensivity: .1,
                sensivityFade: .93,
                speed: 2,
                touchSensivity: 1.5
            });

            function Cube(data) {
                let self = this;

                this.element = document.getElementById('cube');

                this.sides = this.element.getElementsByClassName('side');

                this.viewport = data.viewport;
                this.viewport.on('rotate', function () {
                    self.rotateSides();
                });
                this.viewport.on('upsideDown', function (obj) {
                    self.upsideDown(obj);
                });
                this.viewport.on('sideChange', function () {
                    self.sideChange();
                });
            }

            Cube.prototype.rotateSides = function () {
                let viewport = this.viewport;
                if (viewport.positionY > 90 && viewport.positionY < 270) {
                    this.sides[0].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + (viewport.positionX + viewport.torqueX) + 'deg)';
                    this.sides[5].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + -(viewport.positionX + 180 + viewport.torqueX) + 'deg)';
                } else {
                    this.sides[0].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + (viewport.positionX - viewport.torqueX) + 'deg)';
                    this.sides[5].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + -(viewport.positionX + 180 - viewport.torqueX) + 'deg)';
                }
            }
            Cube.prototype.upsideDown = function (obj) {

                let deg = (obj.upsideDown == true) ? '180deg' : '0deg';
                let i = 5;

                while (i > 0 && --i) {
                    this.sides[i].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + deg + ')';
                }

            }
            Cube.prototype.sideChange = function () {

                for (let i = 0; i < this.sides.length; ++i) {
                    this.sides[i].getElementsByClassName('cube-image')[0].className = 'cube-image';
                }

                this.sides[this.viewport.currentSide - 1].getElementsByClassName('cube-image')[0].className = 'cube-image active';

            }

            new Cube({
                viewport: viewport,
                element: document.getElementById('cube'),
            });
        }
    }
</script>
<style scoped lang="less">
    *, *:before, *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }


    #wrapper {
        background:#f9f9f9;
        padding-right: 16rem;

        @media (max-width: 768px) {
            padding-right: 0;
        }
    }

    .viewport {
        -webkit-perspective: 80rem;
        -moz-perspective: 80rem;
        -ms-perspective: 80rem;
        -o-perspective: 80rem;
        perspective: 80rem;
        -webkit-perspective-origin: 50% 20rem;
        -moz-perspective-origin: 50% 20rem;
        -ms-perspective-origin: 50% 20rem;
        -o-perspective-origin: 50% 20rem;
        perspective-origin: 50% 20rem;

    }

    .cube {
        position: relative;
        margin: 0 auto;
        height: 20rem;
        width: 20rem;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        -o-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: rotateX(136deg) rotateY(1122deg);
        -moz-transform: rotateX(136deg) rotateY(1122deg);
        -ms-transform: rotateX(136deg) rotateY(1122deg);
        -o-transform: rotateX(136deg) rotateY(1122deg);
        transform: rotateX(136deg) rotateY(1122deg);
    }

    .cube > div {
        overflow: hidden;
        position: absolute;
        opacity: 0.9;
        height: 20rem;
        width: 20rem;
        background: #ffffffe3;
        border: 1px solid #92968642;
        border-radius: 2rem;
        -webkit-touch-callout: none;
        -moz-touch-callout: none;
        -ms-touch-callout: none;
        -o-touch-callout: none;
        touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    .cube > div > div.cube-image {
        width: 20rem;
        height: 20rem;
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
        line-height: 20rem;
        text-align: center;
        color: #1b9bd8;
        -webkit-transition: color 600ms;
        -moz-transition: color 600ms;
        -ms-transition: color 600ms;
        -o-transition: color 600ms;
        transition: color 600ms;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cube > div > div.cube-image.active img {
        opacity: 1;
        width: 72%;


    }
    .cube > div > div.cube-image.active .large-img {
        width: 62%;

    }
    .cube > div:hover {
        cursor: pointer;
    }

    .cube > div:active {
        cursor: pointer;
    }

    .cube > div:first-child {
        -webkit-transform: rotateX(90deg) translateZ(10rem);
        -moz-transform: rotateX(90deg) translateZ(10rem);
        -ms-transform: rotateX(90deg) translateZ(10rem);
        -o-transform: rotateX(90deg) translateZ(10rem);
        transform: rotateX(90deg) translateZ(10rem);
        outline: 1px solid transparent;
    }

    .cube > div:nth-child(2) {
        -webkit-transform: translateZ(10rem);
        -moz-transform: translateZ(10rem);
        -ms-transform: translateZ(10rem);
        -o-transform: translateZ(10rem);
        transform: translateZ(10rem);
        outline: 1px solid transparent;
    }

    .cube > div:nth-child(3) {
        -webkit-transform: rotateY(90deg) translateZ(10rem);
        -moz-transform: rotateY(90deg) translateZ(10rem);
        -ms-transform: rotateY(90deg) translateZ(10rem);
        -o-transform: rotateY(90deg) translateZ(10rem);
        transform: rotateY(90deg) translateZ(10rem);
        outline: 1px solid transparent;
    }

    .cube > div:nth-child(4) {
        -webkit-transform: rotateY(180deg) translateZ(10rem);
        -moz-transform: rotateY(180deg) translateZ(10rem);
        -ms-transform: rotateY(180deg) translateZ(10rem);
        -o-transform: rotateY(180deg) translateZ(10rem);
        transform: rotateY(180deg) translateZ(10rem);
        outline: 1px solid transparent;
    }

    .cube > div:nth-child(5) {
        -webkit-transform: rotateY(-90deg) translateZ(10rem);
        -moz-transform: rotateY(-90deg) translateZ(10rem);
        -ms-transform: rotateY(-90deg) translateZ(10rem);
        -o-transform: rotateY(-90deg) translateZ(10rem);
        transform: rotateY(-90deg) translateZ(10rem);
        outline: 1px solid transparent;
    }

    .cube > div:nth-child(6) {
        -webkit-transform: rotateX(-90deg) rotate(180deg) translateZ(10rem);
        -moz-transform: rotateX(-90deg) rotate(180deg) translateZ(10rem);
        -ms-transform: rotateX(-90deg) rotate(180deg) translateZ(10rem);
        -o-transform: rotateX(-90deg) rotate(180deg) translateZ(10rem);
        transform: rotateX(-90deg) rotate(180deg) translateZ(10rem);
        outline: 1px solid transparent;
    }

    object {
        opacity: 0.5;
    }

    object:hover {
        opacity: 1;
    }
    img{
        transition: 1s;
        width:60%;
        opacity: 0.7;
        pointer-events: none;
    }
    .large-img{
        width:55%;
    }
    @media (max-width: 768px) {
        .viewport {
            -webkit-transform: scale(1.2, 1.2);
            -moz-transform: scale(1.2, 1.2);
            -ms-transform: scale(1.2, 1.2);
            -o-transform: scale(1.2, 1.2);
            transform: scale(1.2, 1.2);
        }
    }


</style>
