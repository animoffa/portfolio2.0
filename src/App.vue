<template>
  <div id="app">
    <Main/>

  </div>
</template>

<script>

  import Main from "./components/main.vue"

  export default {
    name: 'app',
    components:{
      Main
    }
  }
</script>

<style>

  @font-face {
    font-display: swap;
    font-family: "Futura PT";
    src: local("Futura PT Book"), local("Futura-PT-Book"), url("assets/font/FuturaPT/book/FuturaPT-Book.woff2") format("woff2"), url("assets/font/FuturaPT/book/FuturaPT-Book.woff") format("woff"), url("assets/font/FuturaPT/book/FuturaPT-Book.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-display: swap;
    font-family: "Futura PT";
    src: local("Futura PT Medium"), local("Futura-PT-Medium"), url("assets/font/FuturaPT/medium/FuturaPT-Medium.woff2") format("woff2"), url("assets/font/FuturaPT/medium/FuturaPT-Medium.woff") format("woff"), url("assets/font/FuturaPT/medium/FuturaPT-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-display: swap;
    font-family: "Futura PT";
    src: local("Futura PT Bold"), local("Futura-PT-Bold"), url("assets/font/FuturaPT/bold/FuturaPT-Bold.woff2") format("woff2"), url("assets/font/FuturaPT/bold/FuturaPT-Bold.woff") format("woff"), url("assets/font/FuturaPT/bold/FuturaPT-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-display: swap;
    font-family: "Futura PT";
    src: local("Futura PT Heavy"), local("Futura-PT-Heavy"), url("assets/font/FuturaPT/heavy/FuturaPT-Heavy.woff2") format("woff2"), url("assets/font/FuturaPT/heavy/FuturaPT-Heavy.woff") format("woff"), url("assets/font/FuturaPT/heavy/FuturaPT-Heavy.ttf") format("truetype");
    font-weight: 900;
    font-style: normal;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  html {
    font-family: "Futura PT", sans-serif;
    font-size: 62.5%;
    font-style: normal;
    background:#f9f9f9;
    font-weight: 500;
    -webkit-animation: bugfix infinite 1s;
    line-height: 1.2;
    margin: 0;
    color: #272727;
    padding: 0;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    overflow-x: hidden;
  }
  :root {
    --swiper-theme-color: black;
  }
  body,
  input,
  textarea {
    font-size: 62.5%;
    font-style: normal;
    font-weight: normal;
    -webkit-animation: bugfix infinite 1s;
    line-height: 1.2;
    position: relative;
    margin: 0;
    padding: 0;
  }
  .mobile {
    display: none;
  }
  a,
  a:hover {
    text-decoration: none;
  }
  .mobile {
    display: none;
  }
  button,
  input,
  a,
  textarea {
    outline: none;
    cursor: pointer;
  }
  button:focus,
  input:focus,
  a:focus,
  textarea:focus {
    outline: none;
  }
  button:active,
  input:active,
  a:active,
  textarea:active {
    outline: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;
    padding: 0;
  }
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    display: block;
    padding: 0;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  img {
    max-width: 100%;
    vertical-align: middle;
  }
  .btn {
    border: none;
  }
  .button {
    font-size: 1.8rem;
    font-weight: 600;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .button img {
    width: 6.9rem;
    padding-right: 2rem;
  }

  ul {
    padding: 0;
    margin: 0;
  }
  ul li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .container {
    width: 147rem;
    margin: 0 auto;
    padding: 0 5rem;
    position: relative;
    max-width: unset;
  }
  .hidden {
    overflow: hidden;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  @media (max-width: 112em) {
    html {
      font-size: 9px;
    }
  }
  @media (max-width: 105em) {
    html {
      font-size: 8.75px;
    }
  }
  @media (max-width: 91.5em) {
    html {
      font-size: 7.9px;
    }
  }
  @media (max-width: 91em) {
    html {
      font-size: 8.4px;
    }
  }
  @media (max-width: 90em) {
    html {
      font-size: 7.9px;
    }
  }
  @media (max-width: 80em) {
    html {
      font-size: 7.2px;
    }
  }
  @media (max-width: 72em) {
    html {
      font-size: 6.5px;
    }
  }
  @media (max-width: 64em) {
    html {
      font-size: 5.5px;
    }
  }
  @media (max-width: 48em) {
    html {
      font-size: 10px;
      -webkit-text-size-adjust: none;
    }
    .desk {
      display: none;
    }
    body {
      -webkit-text-size-adjust: none;
    }
    .mobile {
      display: block;
    }
    .container {
      margin: 0 auto;
      width: auto;
    }
    .button img {
      width: 10.2rem;
      padding-right: 3rem;
    }
    .button {
      font-size: 3.2rem;
    }

  }
  @media (max-width: 44em) {
    html {
      font-size: 9px;
    }
  }
  @media (max-width: 38em) {
    html {
      font-size: 8px;
    }
  }
  @media (max-width: 34em) {
    html {
      font-size: 7px;
    }
  }
  @media (max-width: 30em) {
    html {
      font-size: 6px;
    }
  }
  @media (max-width: 26em) {
    html {
      font-size: 5.1px;
    }
  }
  @media (max-width: 22.5em) {
    html {
      font-size: 4.5px;
    }
  }
  @media (max-width: 21em) {
    html {
      font-size: 4.4px;
    }
  }
</style>
