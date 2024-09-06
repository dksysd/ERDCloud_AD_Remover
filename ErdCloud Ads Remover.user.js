// ==UserScript==
// @name         ErdCloud Ads Remover
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://www.erdcloud.com/d/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=erdcloud.com
// @grant        none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    function removeAds() {
        $('.erd-ads-area').attr('style', 'width: 0 !important');
        $('.erd-container').attr('style', 'width: 100% !important');
        $('.js-btn-fullscreen').click();
        setTimeout(()=>{
            $('.js-btn-fullscreen').click()
        }, 50);
    }

    const adsAreaWidth = $('.erd-ads-area').width();
    if (adsAreaWidth > 0) {
        removeAds();
    }
})();
