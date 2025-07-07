// ==UserScript==
// @name         Make /gacha/ visible again!
// @namespace    http://tampermonkey.net/
// @version      2025-07-07
// @description  Делает картинки на /gacha/ снова видимыми
// @author       novvux
// @match        https://2ch.hk/*
// @icon         https://2ch.hk/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const style = document.createElement("style")
    style.textContent = `.thread figure.post__image {display: block !important;}`;
    document.head.appendChild(style);
})();