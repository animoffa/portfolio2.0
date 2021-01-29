<template>
    <div class="main" v-scroll="handleScroll">
        <header>
            <div class="header-wrapper">
                <div class="mobile">
                    <div class="burger" @click="toggleMenu">
                        <img src="../assets/img/burger.svg" v-if="menuClosed" alt="menu" class="burger"/>
                        <img src="../assets/img/close.svg" alt="close" v-else/>
                    </div>
                </div>
                <a class="logo-text" href="#first">
                    <div class="logo-container desktop">
                        <img src="../assets/img/lotus.svg" class="logo" alt="logo"/>
                    </div>
                    <div class="text">
                        <p>Anastasiia Fomina</p>
                        <p>vue-developer</p>
                    </div>
                </a>
                <nav class="nav">
                    <div>
                        <ul class="mynav">
                            <li><a href="#Knowledge" class="menu-item">Knowledge</a></li>
                            <li><a href="#Experience" class="menu-item">Experience</a>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <ul class="mynav">
                            <li><a href="#Works" class="menu-item">Works</a></li>
                            <li><a href="#Contacts" class="menu-item">Contacts</a></li>
                            <li><a href="#About" class="menu-item">About</a></li>
                        </ul>
                    </div>
                </nav>
                <div class="phone-container desktop">
                    <a class="phone" href="tel:89154974446">+7 (915) 497-44-46</a>
                    <p class="under-phone">call me</p>
                </div>
                <a class="mobile" href="tel:89154974446">
                    <img src="../assets/img/phone.svg" alt="call" class="phone-mob"/>
                </a>
            </div>
        </header>
        <div class="body">
            <div class="block" id="first">
                <div class="graduation-block">
                    <img src="../assets/img/lines1.svg" class="lines1"/>
                    <p class="h1">Hello, I`m Stacy</p>
                    <p class="subtitle">vue frontend developer</p>
                    <img src="../assets/img/lines2.svg" class="lines2"/>
                </div>
            </div>
            <div class="block" id="Knowledge">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-block svg-block-first" viewBox="0 0 1440 320">
                    <path fill="#f2f2f2" fill-opacity="1"
                          d="M0,192L80,202.7C160,213,320,235,480,213.3C640,192,800,128,960,106.7C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-block svg-block-second" viewBox="0 0 1440 320">
                    <path fill="#f9f9f9" fill-opacity="1"
                          d="M0,192L80,202.7C160,213,320,235,480,213.3C640,192,800,128,960,106.7C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
                <div class="container">
                    <h2>Competence</h2>
                    <div class="Knowledge-content">
                        <div class="left-side">

                            <ul class="list">
                                <li>Vue, Vuex, VueRouter, Nuxt</li>
                                <li>JS</li>
                                <li>HTML5/CSS3 (adaptive, pixelPerfect)</li>
                                <li>Rest API</li>
                                <li>Had practice in Backend (Express.js, MongoDB, NodeJS)</li>
                                <li>Worked with React & Redux stack</li>
                                <li>Less,sass</li>
                                <li>Git, github</li>
                                <li>Webpack, gulp</li>
                            </ul>
                        </div>
                        <Cube class="cube1"/>
                        <svg viewBox="0 0 200 200" class="figure" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#F1F0ED"
                                  d="M26.7,-36.8C31.2,-28.1,29,-16.4,36.1,-2.5C43.2,11.4,59.5,27.6,57.1,34.2C54.8,40.9,33.8,38.1,18.2,38.9C2.7,39.7,-7.5,44.1,-17.6,42.9C-27.8,41.6,-37.8,34.6,-37.4,26.1C-37,17.5,-26.2,7.4,-23,-2.9C-19.7,-13.1,-24.1,-23.6,-21.6,-32.7C-19,-41.8,-9.5,-49.6,0.8,-50.5C11.1,-51.5,22.2,-45.6,26.7,-36.8Z"
                                  transform="translate(100 100)"/>
                        </svg>
                        <svg viewBox="0 0 200 200" class="figure-2" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#F9F9F9"
                                  d="M26.7,-36.8C31.2,-28.1,29,-16.4,36.1,-2.5C43.2,11.4,59.5,27.6,57.1,34.2C54.8,40.9,33.8,38.1,18.2,38.9C2.7,39.7,-7.5,44.1,-17.6,42.9C-27.8,41.6,-37.8,34.6,-37.4,26.1C-37,17.5,-26.2,7.4,-23,-2.9C-19.7,-13.1,-24.1,-23.6,-21.6,-32.7C-19,-41.8,-9.5,-49.6,0.8,-50.5C11.1,-51.5,22.2,-45.6,26.7,-36.8Z"
                                  transform="translate(100 100)"/>
                        </svg>
                        <svg viewBox="0 0 200 200" class="figure-2 figure-3" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#F1F0ED"
                                  d="M40.9,24.7C26.5,48.5,-29.9,49.2,-43.8,25.7C-57.6,2.1,-28.8,-45.6,-0.6,-45.9C27.6,-46.2,55.3,0.8,40.9,24.7Z"
                                  transform="translate(100 100)"/>
                        </svg>
                        <!--                        <img src="../assets/img/кружочки.svg" class="circles"/>-->
                    </div>
                </div>
            </div>
            <div class="block" id="Experience">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-block svg-experience" viewBox="0 0 1440 220">
                    <path fill="#f2f2f2" fill-opacity="1"
                          d="M0,160L80,154.7C160,149,320,139,480,122.7C640,107,800,85,960,96C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
                <div class="container">
                    <h2>Experience</h2>
                    <img src="../assets/img/ellipse.svg" class="e1"/>
                    <img src="../assets/img/ellipse2.svg" class="e2"/>
                    <div class="content">
                        <div class="card" v-for="(card,i) of cards" :key="i" :id="i" v-scroll="animateCards">
                            <img :src="card.img">
                            <p class="title">{{card.title}}</p>
                            <p class="subtitle">{{card.subtitle}}</p>
                            <div class="line"></div>
                            <div class="date">{{card.date}}</div>
                            <div class="text">{{card.text}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block" id="Works">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-block svg-works" viewBox="0 0 1440 220">
                    <path fill="#f9f9f9" fill-opacity="1"
                          d="M0,160L80,154.7C160,149,320,139,480,122.7C640,107,800,85,960,96C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
                <div class="container">
                    <h2>Works</h2>

                    <div ref="sliderContainer" id="sliderContainer" class="slider-container" v-touch:swipe.left="next"
                         v-touch:swipe.right="prev">
                        <div id="slider-track" class="slider-track">
                            <div class="slider-item" v-for="(slide,i) of slides" :key="i">
                                <div class="img-container">
                                    <img :src="slide.photo"/>

                                </div>
                                <div class="text">
                                    <p class="title">{{slide.title}}</p>
                                    <p class="subtitle">{{slide.subtitle}}</p>
                                    <p class="description">{{slide.description}}</p>
                                    <a class="button" :href="slide.ref">View</a>
                                </div>
                            </div>
                        </div>
                        <div class="slider-buttons">
                            <button class="btn-next" v-bind:disabled="currentSlide===slides.length" @click="next">
                                <img src="../assets/img/next.svg" alt="next"/>
                            </button>
                            <button class="btn-prev" v-bind:disabled="position===0" @click="prev">
                                <img src="../assets/img/next.svg" alt="next"/>
                            </button>
                        </div>
                    </div>

                    <div class="line-empty">
                        <div class="line-full"
                             :style="{width: ((currentSlide)/slides.length)*100+ '%'}"></div>
                    </div>
                </div>
            </div>
            <div class="block" id="Contacts">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-block svg-contacts" viewBox="0 0 1440 220">
                    <path fill="#f5f4f1" fill-opacity="1"
                          d="M0,160L80,154.7C160,149,320,139,480,122.7C640,107,800,85,960,96C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
                <img src="../assets/img/figure.svg" class="figure-form"/>
                <div class="container">
                    <h2>Contact me</h2>
                    <img src="../assets/img/ellipse.svg" class="e1"/>
                    <img src="../assets/img/ellipse2.svg" class="e2"/>
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label class="input-label">
                                <input class="name" type="text" placeholder="Name"
                                       :class="{'input-error':!(!formClicked||name)}" v-model.trim="name"/>
                                <span class="error">fill the field</span>
                                <span> Your name *</span>
                            </label>
                            <label class="input-label">
                                <input class="company" type="text" placeholder="Company name"
                                       :class="{'input-error':!(!formClicked||company)}" v-model.trim="company"/>
                                <span class="error">fill the field</span>
                                <span> Company name *</span>
                            </label>
                        </div>
                        <label class="input-label comment-label">
                            <input class="comment" :class="{'input-error':!(!formClicked||comment)}" type="text"
                                   placeholder="Рroposal" v-model.trim="comment"/>
                            <span class="error">fill the field</span>
                            <span>Comment *</span>
                        </label>
                        <button class="button" type="submit" id="formButton"
                                :disabled="isLoading||isSent">
                            <div class="lds-ring" v-if="isLoading">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <span v-else>Send</span></button>
                        <template v-if="isSent">
                        <div v-if="!isSendError" class="banner success-banner">
                            Your email has been successfully sent
                        </div>
                        <div v-else class="banner error-banner">О
                            Send error:( Please try again.
                        </div>
                        </template>
                    </form>
                </div>
            </div>
            <div class="block" id="About">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-block svg-about" viewBox="0 0 1440 220">
                    <path fill="#f9f9f9" fill-opacity="1"
                          d="M0,160L80,154.7C160,149,320,139,480,122.7C640,107,800,85,960,96C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
                <div class="container">
                    <h2>About me</h2>
                    <div class="text">

                        <p>
                            I can make a website for you according to your template using vue.js or jQuery.</p>
                        <p>My github: <a>https://github.com/animoffa</a>. </p>

                        <p class="h4">I want to do being working for you</p>
                        <p>I think that junior vue-developer vacancy is right for me.</p>
                        <p>I want to make great user interfaces for your sites. I enjoy creating beautiful, animated interfaces.
                            By now I want to perfect my skills in vue.js.</p>
                        <p>I'm a third year student at the Moscow University of Communications and Informatics and I am studying for the specialty "software engineer".</p>
                        <p>I can work both full-time and part-time. I prefer remote work but I'm ready to consider a job in Moscow</p>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="logo-text">
                <div class="logo-container">
                    <img src="../assets/img/lotus.svg" class="logo" alt="logo"/>
                </div>
                <a class="text" href="#first">
                    <p class="footer-text">Anastasiia Fomina</p>
                    <p>vue-developer</p>
                </a>
            </div>
            <div class="phone-container">
                <a class="phone" href="tel:89154974446">+7 (915) 497-44-46</a>
                <a class="under-phone" href="mailto:animoffa1352@gmail.com">animoffa1352@gmail.com</a>
            </div>
        </footer>

    </div>
</template>
<script>
    import Cube from "./cube.vue"
    import Vue from 'vue'
    import {APIService} from "../services/APIService"

    Vue.directive('scroll', {
        inserted: (el, binding) => {
            const f = (evt)=> {
                if (binding.value(evt, el)) {
                    window.removeEventListener('scroll', f)
                }
            }
            window.addEventListener('scroll', f)
        }
    })
    export default {
        components: {
            Cube
        },

        data() {
            return {
                menuClosed: true,
                name: '',
                comment: '',
                company: '',
                isLoading: false,
                isSent: false,
                formClicked: false,
                slides: [
                    {
                        title: "My books",
                        description:
                            "Web application with authorization to write" +
                            "the books that are read." +
                            "Frontend: done with vue, vueRouter. Implemented: search, sorting, pagination." +
                            "Backend: express, js, mongoDB",
                        subtitle: "vue web app",
                        photo: require('../assets/img/slide1.png'),
                        ref: "https://vue-books.herokuapp.com/ "
                    },
                    {
                        title: "Quiz",
                        description:
                            "this is a small vue basics quiz using vuex with theme switching",
                        subtitle: "vue & vuex web app",
                        photo: require('../assets/img/slide2.jpg'),
                        ref: "https://animoffa.github.io/quizVuex/"

                    },
                    {
                        title: "Bellman-Ford algorithm",
                        description: "It is a graphical implementation of the Bellman-Ford algorithm. With this program, you can calculate the shortest path from the first to the last point",
                        subtitle: "react app using canvas",
                        photo: require('../assets/img/slide3.jpg'),
                        ref: "https://animoffa.github.io/Bellman-Ford-algorithm/"
                    },
                    {
                        title: "PassOffice",
                        description: "My last landing page, the rest can be viewed in my github.",
                        subtitle: "landing page",
                        photo: require('../assets/img/passOffice.jpg'),
                        ref: "https://animoffa.github.io/passOffice-landing/"
                    },
                    {
                        title: "Очищение",
                        description: "Landing page, the rest can be viewed in my github.",
                        subtitle: "landing page",
                        photo: require('../assets/img/slide5.jpg'),
                        ref: "https://animoffa.github.io/detox-layout/index.html"
                    },
                    {
                        title: "Ты не одна",
                        description: "Landing page, the rest can be viewed in my github.",
                        subtitle: "landing page",
                        photo: require('../assets/img/slide6.jpg'),
                        ref: "https://animoffa.github.io/layout-not-alone/"
                    }
                ],
                cards: [
                    {
                        img: require('../assets/img/request.svg'),
                        title: "Request",
                        subtitle: "front-end developer",
                        text: "Made responsive, pixel perfect sites, using pure js and jquery. The projects was built by Gulp.",
                        date: "08.2020 - 11.2020",
                    },
                    {
                        img: require('../assets/img/suitcase.svg'),
                        title: "Freelance",
                        subtitle: "front-end developer",
                        text: "I made landing pages using jquery. Sometimes there were small works on react/redux stack.",
                        date: "11.2019 - 07.2020",
                    },
                    {
                        img: require('../assets/img/education.svg'),
                        title: "Non-profit experience",
                        subtitle: "front-end developer",
                        text: "During this time I have been learning vue (and many libraries from its ecosystem) and advanced javascript.",
                        date: "10.2018 - 08.2020 11.2020 - now",
                    },
                ],
                position: 0,
                currentSlide: 1,
                isSendError: false
            }
        },

        methods: {
            animateCards(evt, el) {
                // вынести в сss класс и динамически тегу добавлять класс
                if (window.innerWidth > 1800) {
                    if (window.scrollY > 900) {
                        el.setAttribute(
                            'style',
                            'opacity: 1; transform: translate3d(0, -10px, 0); left:0'
                        )
                    }
                    return window.scrollY > 1000
                } else if (window.innerWidth > 1465) {
                    if (window.scrollY > 900) {
                        el.setAttribute(
                            'style',
                            'opacity: 1; transform: translate3d(0, -10px, 0); left:0'
                        )
                    }
                    return window.scrollY > 1000
                } else if (window.innerWidth > 1000) {

                    if (window.scrollY > 700) {
                        el.setAttribute(
                            'style',
                            'opacity: 1; transform: translate3d(0, -10px, 0); left:0'
                        )
                    }
                    return window.scrollY > 800
                } else if (window.innerWidth > 768) {
                    if (window.scrollY > 280) {
                        el.setAttribute(
                            'style',
                            'opacity: 1; transform: translate3d(0, -10px, 0); left:0'
                        )
                    }
                    return window.scrollY > 380
                } else if (window.innerWidth > 545) {
                    if (window.scrollY > 1200) {
                        document.getElementById("0").setAttribute(
                            'style',
                            'opacity: 1; transform: translate3d(0, -10px, 0); left:0'
                        )
                    }
                    if (window.scrollY > 1750) {
                        document.getElementById("1").setAttribute(
                            'style',
                            'opacity: 1; transform: translate3d(0, -10px, 0); left:0'
                        )
                    }
                    if (window.scrollY > 2350) {
                        document.getElementById("2").setAttribute(
                            'style',
                            'opacity: 1; transform: translate3d(0, -10px, 0); left:0'
                        )
                    }
                    return window.scrollY > 2530
                } else {
                    if (window.scrollY > 250) {
                        document.getElementById("0").setAttribute(
                            'style',
                            'opacity: 1; transform: translate3d(0, -10px, 0); left:0'
                        )
                    }
                    if (window.scrollY > 612) {
                        document.getElementById("1").setAttribute(
                            'style',
                            'opacity: 1; transform: translate3d(0, -10px, 0); left:0'
                        )
                    }
                    if (window.scrollY > 930) {
                        document.getElementById("2").setAttribute(
                            'style',
                            'opacity: 1; transform: translate3d(0, -10px, 0); left:0'
                        )
                    }
                    return window.scrollY > 1000

                }

            },
            async onSubmit() {
                let {name, company, comment} = this;
                this.formClicked = true;
                if (name && company && comment) {
                    this.isLoading = true;
                    try {
                        await APIService.sendMail(name, company, comment)
                    } catch (e) {
                        console.error("Error while fetching: " + e.toString());
                        this.isSendError = true;
                    }
                    name = '';
                    company = '';
                    comment = '';
                    this.isLoading = false;
                    this.isSent = true;
                }
            },
            toggleMenu() {
                this.menuClosed = !this.menuClosed;
                if (this.menuClosed === true) {
                    document.querySelector("html").classList.remove("overflow");
                    document.querySelector("nav").classList.remove("open-menu");
                } else {
                    document.querySelector("html").classList.add("overflow");
                    document.querySelector("nav").classList.add("open-menu");

                }

            },

            next() {
                if (this.currentSlide < this.slides.length) {
                    this.currentSlide += 1;
                    const itemWidth = document.querySelector(".slider-container").clientWidth;
                    const itemsLeft = this.slides.length - (Math.abs(this.position) + itemWidth) / itemWidth;
                    this.position -= itemsLeft >= 1 ? itemWidth : itemsLeft * itemWidth;
                    this.setPosition();
                }
            },
            prev() {
                if (this.currentSlide > 1) {
                    this.currentSlide -= 1;
                    const itemWidth = document.querySelector(".slider-container").clientWidth;
                    const itemsLeft = Math.abs(this.position) / itemWidth;
                    this.position += itemsLeft >= 1 ? itemWidth : itemsLeft * itemWidth;
                    this.setPosition();
                }

            },
            setPosition() {
                document.querySelector(".slider-track").style.transform = `translateX(${this.position}px)`;
            },

            handleScroll() {
                document.querySelectorAll(".block").forEach((el) => {
                    const top = el.getBoundingClientRect().top + pageYOffset - 150;
                    const bottom = top + 1000;
                    const scroll = window.scrollY;
                    const id = el.id;
                    if (scroll > top && scroll < bottom) {
                        document.querySelectorAll(".menu-item").forEach((el) => {
                            el.classList.remove("active-menu");
                        });
                        document.querySelector('a[href="#' + id + '"]').classList.add('active-menu');
                    }
                })

                const cube = document.querySelector(".cube1");
                const scroll = window.scrollY;
                if (scroll > 200 || scroll < 240) {
                    cube.classList.add("cube-position");
                }

            },
        },
    }


</script>
<style lang="less">
    @gray-text: #938a7a;
    @h2-gray: #929686;
    @brown-text: #c67e54;
    @main1: #9A582E;
    @header-bg: #eee;

    .svg-block {
        position: absolute;
        min-width: 300rem;
        z-index: 2;
        left: 0;
        top: 75rem;

        @media (max-width: 768px) {
            display: none;

        }

        &-second {
            @media (max-width: 768px) {
                top: 53rem;
                display: block;
            }
        }

        &-first {
            top: 70rem;
            transform: rotate(-2deg);

            @media (max-width: 768px) {
                top: 43rem;
                display: block;
            }
        }
    }

    .svg-experience {
        top: 159rem;
    }

    .svg-works {
        top: 237rem;
    }

    .svg-contacts {
        top: -31rem;
    }

    .svg-about {
        top: 420rem;
    }

    .active-menu {
        border-bottom: 2px solid @main1;
    }

    .phone-mob {
        width: 5.9rem;
        height: 5.9rem;
    }

    .burger {
        width: 6rem;
        height: auto;
    }

    header {
        background: @header-bg;
        color: #350d0d;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 3rem;

        position: fixed;
        width: 100%;
        z-index: 30;
        @media (max-width: 768px) {
            padding: 3.5rem 3rem;
        }
    }

    .logo-container {
        width: 5.8rem;
        height: auto;
    }

    .logo-text {
        display: flex;
        align-items: center;
        border-bottom: none;

        .text {
            margin-left: 3rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            p {
                font-size: 1.6rem;
                color: #272727;

                @media (max-width: 768px) {
                    font-size: 2.5rem;
                }
            }

            p:first-child {
                color: #77411e;
                font-size: 2.2rem;
                font-weight: 600;
                font-family: serif;

                @media (max-width: 768px) {
                    font-size: 3.8rem;
                }
            }

            @media (max-width: 768px) {
                margin-left: 0;
                align-items: center;
            }
        }
    }

    .header-wrapper {
        width: 165.3rem;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        align-items: center;
    }

    .logo {
        width: 100%;
    }

    nav {
        width: 58%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 768px) {
            max-height: 0;
            overflow: hidden;
            transition: max-height 1s;
            position: absolute;
            background: @header-bg;
            top: 13rem;
            align-items: flex-start;
            left: 0;
            width: 100%;
            flex-direction: column;

            div:first-child {
                margin-top: 4rem;
            }

            div:last-child {
                margin-bottom: 3rem;
            }

            div {
                margin-left: 6rem;
            }

            .mynav {
                flex-direction: column;

                li {
                    display: flex;
                    margin-bottom: 2rem;
                }

                li a {
                    font-size: 3rem;
                }

                .menu-item {
                    border-bottom: 2px solid transparent;
                }

                .active-menu {
                    border-bottom: 2px solid @main1;
                }
            }
        }
    }

    nav > div {
        display: flex;
        width: 23%;
        justify-content: space-between;
    }

    nav > div:last-child {
        width: 31%;
    }

    nav > div ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .phone-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .phone {
        font-size: 1.8rem;
        font-weight: 900;
        color: #77411e;
    }

    .under-phone {
        font-size: 1.6rem;
    }

    li a {
        color: #350d0d;
        font-size: 1.9rem;
    }

    #first {
        width: 100%;
        height: 120rem;
        background-size: cover;
        background: url('../assets/img/desk-1.png') center;
        z-index: 2;
        position: relative;
        @media (max-width: 768px) {
            background: url('../assets/img/mob-1.png') center no-repeat;
            background-size: contain;
            height: 100rem;
        }

        .graduation-block {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            top: 16rem;
            width: 78.5rem;
            height: 23.7rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;


            .lines1, .lines2 {
                position: absolute;
                top: 0;
                left: 0;
                width: 15.6rem;
                height: auto;

                @media (max-width: 768px) {
                    left: 10rem;
                    width: 13.6rem;
                }
            }

            .lines2 {
                left: auto;
                top: auto;
                right: 0;
                bottom: 0;

                @media (max-width: 768px) {
                    right: 9rem;
                }
            }

            .h1 {
                font-size: 3.5rem;
                color: @brown-text;
                font-weight: 600;
                margin-bottom: 2rem;

                @media (max-width: 768px) {
                    font-size: 3.8rem
                }
            }

            .subtitle {
                font-size: 2.2rem;
                color: @gray-text;

                @media (max-width: 768px) {
                    font-size: 2.6rem
                }
            }
        }

    }

    h2 {
        text-align: left;
        color: @h2-gray;
        font-size: 4.5rem;
        margin-bottom: 1rem;
        font-weight: 500;
        z-index: 10;
        position: relative;

        @media (max-width: 768px) {
            font-size: 5rem;
        }
    }

    p {
        font-size: 2rem;

        @media (max-width: 768px) {
            font-size: 3rem;
        }
    }

    #Knowledge {
        background: #f9f9f9;
        margin-bottom: 10rem;
        padding-top: 10rem;
        @media (max-width: 768px) {
            margin-bottom: 18rem;
        }

        .container {
            width: 133rem;
            max-width: 100%;
        }
    }

    .Knowledge-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 768px) {
            flex-direction: column;
        }

        .square {
            position: absolute;
            width: 100rem;
            left: auto;
            right: -108rem;
            z-index: 3;
            top: -39rem;
        }

        .circles {
            width: 23rem;
            position: absolute;
            left: auto;
            right: -35rem;
            top: 31rem;
        }

        .left-side {
            padding-top: 4rem;
            width: 36%;

            @media (max-width: 768px) {
                width: 100%;
                margin-bottom: 13rem;
            }
        }

        p {
            margin-bottom: 2.5rem;
            text-align: left;

            @media (max-width: 768px) {
                margin-bottom: 5rem;
            }
        }

        .list {
            li {
                text-align: left;
                font-size: 2rem;
                display: flex;
                margin-bottom: 1.5rem;
                align-items: flex-start;

                @media (max-width: 768px) {
                    margin-bottom: 2.3rem;
                    font-size: 3rem;
                }
            }

            li:before {
                content: '';
                margin-right: 1rem;
                width: 0.8rem;
                display: block;
                margin-top: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
                background: @h2-gray;

                @media (max-width: 768px) {
                    margin-top: 1.4rem;
                    width: 1rem;
                    height: 1rem;
                }
            }
        }
    }

    .e1, .e2 {
        position: absolute;
        top: 44rem;
        left: 2rem;
        width: 2.5rem;
        height: 2.5rem;

        @media (max-width: 768px) {
            top: 90rem;
            left: 1rem;
        }
    }

    .e2 {
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        top: 35rem;
        left: 6rem;

        @media (max-width: 768px) {
            top: 85rem;
        }
    }

    #Experience {
        background: #f2f2f2;
        padding: 7rem 0 17rem;

        @media (max-width: 768px) {
            padding: 9rem 0;
        }

        h2 {
            color: @brown-text;
            margin-top: 2rem;
            margin-bottom: 4.5rem;

            @media (max-width: 768px) {
                font-size: 5rem;
                margin-bottom: 6rem;
            }
        }

        .content {
            display: flex;
            justify-content: space-between;
            width: 108rem;
            margin: 0 auto;
            align-items: center;

            @media (max-width: 768px) {
                flex-direction: column;
                width: 100%;
            }

            .card {
                width: 32rem;
                height: 42.5rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                justify-content: space-between;
                padding: 4rem 6.5rem;
                transition: 2s;
                background: #FFFFFF;
                box-shadow: 10px 10px 14px rgba(0, 0, 0, 0.15);
                border-radius: 20px;

                &:first-child {
                    left: -80rem;
                }

                &:last-child {
                    left: 80rem;
                }

                @media (max-width: 768px) {
                    width: 80%;
                    left: -70rem;
                    position: relative;
                    margin-bottom: 8rem;
                    height: auto;
                    padding: 6rem 10rem;
                    &:first-child, &:last-child {
                        left: -70rem;
                    }
                }
            }


            img {
                width: 9rem;
                height: 9rem;
                margin-bottom: 1rem;
                @media (max-width: 768px) {
                    width: 15rem;
                    height: 15rem;
                    margin-bottom: 3.5rem;
                }
            }

            .title {
                font-size: 2.5rem;
                margin-bottom: 1rem;

                @media (max-width: 768px) {
                    font-size: 4rem;
                    margin-bottom: 2rem;
                }
            }

            .subtitle {
                font-size: 1.8rem;
                color: #9d9d9d;
                margin-bottom: 1rem;

                @media (max-width: 768px) {
                    font-size: 2.9rem;
                    margin-bottom: 1em;
                }
            }

            .line {
                width: 9.5rem;
                height: 1px;
                background: #272727;
                margin-bottom: 1.5rem;

                @media (max-width: 768px) {
                    height: 1px;
                    width: 12rem;
                    margin-bottom: 4rem;
                }
            }

            .date {
                font-size: 1.8rem;
                margin-bottom: 1rem;

                @media (max-width: 768px) {
                    font-size: 2.9rem;
                    margin-bottom: 2rem;
                }
            }

            .text {
                font-size: 1.6rem;
                color: #c4c4c4;

                @media (max-width: 768px) {
                    font-size: 2.7rem;
                }
            }
        }
    }

    #Works {
        padding: 4rem 0 18rem;

        @media (max-width: 768px) {
            padding: 7rem 0 18rem;
        }

        h2 {
            margin-bottom: 8rem;
        }

        .text {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 29%;

            @media (max-width: 768px) {
                width: 98%;
            }
        }

        .slider-container {
            overflow: hidden;
            margin: 0 auto;
            border-radius: 37px;
            width: 135rem;
            height: 66.3rem;
            box-shadow: 10px 10px 26px 5px rgba(0, 0, 0, 0.15);

            @media (max-width: 768px) {
                width: 95%;
                height: auto;
                border-radius: 25px;
            }
        }

        .slider-track {
            display: flex;
            transition: 2s;
        }

        .slider-item {
            height: 66.3rem;
            min-width: 135rem;
            background: #FFFFFF;
            display: flex;
            padding: 5.3rem;
            justify-content: space-between;
            align-items: center;

            @media (max-width: 768px) {
                flex-direction: column;
                min-width: 100%;
                justify-content: flex-start;
                height: auto;
                padding: 7rem 5.3rem 7rem;
                position: relative;
            }

            .img-container {
                width: 67%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                @media (max-width: 768px) {
                    width: 100%;
                }

                img {
                    margin-bottom: 5rem;

                }

                & > div {
                }
            }

            .title {
                font-size: 3.3rem;
                margin-bottom: 1rem;

                @media (max-width: 768px) {
                    font-size: 4rem;
                    margin-bottom: 1.5rem;
                }
            }

            .subtitle {
                font-size: 2rem;
                margin-bottom: 3rem;
                color: #9d9d9d;

                @media (max-width: 768px) {
                    font-size: 3rem;
                    margin-bottom: 4rem;
                }
            }

            .description {
                color: #c4c4c4;
                margin-bottom: 5rem;
                font-size: 1.8rem;

                @media (max-width: 768px) {
                    font-size: 2.8rem;
                    margin-bottom: 7rem;
                }
            }

            .button {
                @media (max-width: 768px) {
                    font-size: 3rem;
                    width: 100%;
                    height: 8rem;
                }

            }

        }

        .btn-next, .btn-prev {
            position: absolute;
            top: 40rem;
            left: 138rem;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
            border: 1px solid #A9A28C;
            width: 6.5rem;
            height: 6.5rem;
            box-shadow: 0 0 0 3px white, 0px 15px 40px rgba(0, 0, 0, 0.14);

            img {
                width: 2.1rem;
                height: 2.1rem;
            }

            @media (max-width: 768px) {
                display: none;
            }
        }

        .btn-prev {
            top: 40rem;
            left: 2rem;

            img {
                transform: rotate(180deg);
            }
        }

        .btn-prev[disabled], .btn-next[disabled] {
            img {
                opacity: 0.5;
            }
        }

        .line-empty {
            position: relative;
            top: -7rem;
            height: 1rem;
            left: 4%;
            width: 92%;
            border-radius: 50px;
            background: #efefef;

            @media (max-width: 768px) {
                top: auto;
                bottom: -8rem;
                height: 1.3rem;
                left: 10%;
                position: absolute;
                width: 80%;


            }
        }

        .line-full {
            background: #c6c2b3;
            transition: 1s;
            height: 1rem;
            border-radius: 50px;

            @media (max-width: 768px) {
                height: 1.3rem;
            }
        }
    }

    .input-label {
        display: flex;
        flex-direction: column;
        width: 45%;
        transition: 1s;
        align-items: flex-start;
        @media (max-width: 768px) {
            width: 100%;
        }

        span {
            font-size: 1.9rem;
            font-weight: 900;
            transition: 1s;
            margin-bottom: 0.9rem;
            order: 1;

            @media (max-width: 768px) {
                margin-bottom: 2rem;
                font-size: 3.3rem;
            }
        }


        input {
            border: none;
            outline: none;
            order: 2;
            transition: 1s;
            line-height: 3.6rem;
            border-bottom: 1px solid #c4c4c4;
            font-size: 1.7rem;
            width: 100%;
            font-family: "Futura PT", sans-serif;

            @media (max-width: 768px) {
                line-height: 6rem;
                font-size: 3.2rem;
            }
        }

        input:focus, input:active {
            border-bottom: 1px solid @brown-text;

            & ~ span {
                color: @brown-text;
            }
        }

        .error {
            display: none;
            order: 3;
            transition: 1s;
            font-weight: 400;
            margin-top: 0.4rem;
        }

        .input-error {
            border-bottom: 1px solid #FF0000;

            & + .error {
                content: "Поле не заполнено";
                display: block;
                font-size: 1.2rem;
                color: #FF0000;

                @media (max-width: 768px) {
                    font-size: 2.2rem;
                }
            }
        }
    }

    .figure {
        width: 160rem;
        position: absolute;
        z-index: 2;
        top: -73rem;
        transform: rotate(15deg);
        left: 87rem;

        &-2 {
            width: 153rem;
            position: absolute;
            z-index: 3;
            top: -70rem;
            transform: rotate(15deg);
            left: 93rem;
        }

        &-3 {
            width: 36rem;
            position: absolute;
            z-index: 4;
            top: 3rem;
            left: 134rem;

        }

        &-form {
            width: 74rem;
            height: 52rem;
            position: absolute;
            z-index: 1;
            top: 50%;
            left: 50%;
            transform: translate(-48.5%, -48%);
        }
    }

    form {
        box-shadow: 6px 9px 25px rgba(0, 0, 0, 0.09);
        width: 73rem;
        margin: 0 auto;
        position: relative;
        z-index: 10;
        background-color: white;
        border-radius: 2rem;
        padding: 6rem 6.5rem 5rem;
        display: flex;
        flex-direction: column;

        @media (max-width: 768px) {
            width: 100%;
            padding: 8rem 6rem;
            border-radius: 20px;

        }

        label {
            margin-bottom: 4rem;
            width: 47%;

            @media (max-width: 768px) {
                margin-bottom: 9rem;
                width: 100%;
            }
        }

        .comment-label {
            width: 100%;
            margin-bottom: 6rem;

            @media (max-width: 768px) {
                margin-bottom: 9rem;
            }
        }

        .form-group {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            @media (max-width: 768px) {
                flex-direction: column;
            }
        }
    }

    button, .button {
        width: 25rem;
        height: 6rem;
        background: #c6c2b3;
        color: white;
        border: 1px solid white;
        box-shadow: 0 0 0 0.4rem #c6c2b3;
        border-radius: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Futura PT', sans-serif;
        font-weight: 900;

        &:hover {
            background: #b0a899;
            box-shadow: 0 0 0 0.4rem #b0a899;
        }

        &:disabled {
            background: rgba(198, 194, 179, 0.73);
            box-shadow: 0 0 0 0.4rem rgba(198, 194, 179, 0.73);
        }

        &:active, &:focus {
            background: #b0a99b;
            box-shadow: 0 0 0 0.4rem #b0a99b;
        }
    }


    form .button {
        width: 100%;
        height: 5.5rem;

        @media (max-width: 768px) {
            height: 7.5rem;
        }
    }

    #Contacts {
        background: #f5f4f1;
        padding: 7rem 0 17rem;
        position: relative;

        @media (max-width: 768px) {
            padding: 9rem 0 12rem;
        }

        h2 {
            color: @brown-text;
            margin-top: 2rem;
            margin-bottom: 4.5rem;

            @media (max-width: 768px) {
                margin-bottom: 6rem;
            }
        }
    }

    #About {
        padding: 7rem 0 11rem;

        h2 {
            margin-bottom: 6rem;
        }

        .text {
            width: 75%;
            margin: 0 auto;

            @media (max-width: 768px) {
                width: 90%;
            }

            p {
                font-size: 1.8rem;
                text-align: left;
                font-weight: 300;
                margin-bottom: 2.5rem;

                @media (max-width: 768px) {
                    font-size: 2.6rem;
                    line-height: 4rem;
                }
            }

            .h4 {
                font-size: 2.5rem;
                margin-top: 4rem;

                @media (max-width: 768px) {
                    font-size: 3.5rem;
                    margin-top: 6rem;
                    font-weight: 500;
                }

            }
        }
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4rem 12rem 3rem;
        border-top: 1px solid #dad7d2;

        @media (max-width: 768px) {
            padding: 5rem 5rem 4rem;
        }

        .under-phone {
            font-size: 1.5rem;
            color: #272727;

            @media (max-width: 768px) {

                font-size: 2rem;
            }
        }

        .phone {
            font-size: 1.9rem;
            margin-bottom: 0.3rem;
            color: #272727;

            @media (max-width: 768px) {
                font-size: 2.4rem;
                margin-bottom: 0.7rem;
            }
        }

        .logo-text .text p:first-child {
            color: #272727;
        }

        .logo-text .logo-container {
            @media (max-width: 768px) {
                display: none;
            }
        }

        .logo-text .text {
            @media (max-width: 768px) {
                align-items: baseline;
            }
        }
    }

    .desktop {
        @media (max-width: 768px) {
            display: none;
        }
    }

    .mobile {
        display: none;
        @media (max-width: 768px) {
            display: flex;
        }
    }

    .open-menu {
        max-height: 60rem;
    }

    footer .logo-text .text .footer-text {
        @media (max-width: 768px) {
            font-size: 3rem;
        }
    }

    .lds-ring {
        display: inline-block;
        position: relative;
        width: 6rem;
        height: 6rem;
    }

    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 3rem;
        height: 3rem;
        margin-top: 1.5rem;
        border: 0.2rem solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }

    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }

    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }

    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .banner {
        width: 100%;
        height: 4.4rem;
        font-size: 1.7rem;
        padding-left: 2rem;
        margin-top: 2rem;
        display: flex;
        align-items: center;
        border: 1px solid #FF0000;
        background: rgba(255, 0, 0, 0.1);
        @media (max-width: 768px) {
            font-size: 3rem;
            padding: 2rem 0 2rem 3rem;
            height: auto;
            margin-top: 3.5rem;
        }

    }

    .success-banner {
        border: 1px solid #10cb11;
        background: rgba(17, 255, 0, 0.1);
    }


</style>
