define(['jquery'], function ($) {

    'use strict';

    function init(container, isCreate) {
        $(function () {
            console.log("Active");

            $('.home-slider-container img:gt(0)').hide();  //hide all pic except first pic
            setInterval(function () {
                $('.home-slider-container :first-child').fadeOut(1500)
                .next('img').fadeIn(1500).end().appendTo('.home-slider-container');    //hien thi slide show, cai end cuoi append de chay lai tu dau
            }
            , 4000);    //time to change image 4s
        })
    }

    return {
        init: function (container, isCreate) {
            return init(container, isCreate);
        }
    };
});