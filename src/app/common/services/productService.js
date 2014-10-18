/**
 * Created by Omar on 10/17/14.
 */
(function() {
    'use strict';

    angular
        .module('app.common')
        .factory('productService', productService);

    /* @ngInject */
    function productService() {
        var service = {
           calculateMarginPercent : calculateMarginPercent,
           calculateMarginAmount: calculateMarginAmount,
           calculatePriceFromMarkupPercent: calculatePriceFromMarkupPercent,
           calculatePriceFromMarkupAmount: calculatePriceFromMarkupAmount
        };

        return service;

        ////////////////

        function calculateMarginPercent(price, cost) {
            var margin = 0;
            if (price && cost) {
                margin = (100* (price - cost)) / price;
            }
            margin = Math.round(margin);
            return margin
        }

        function calculateMarginAmount(price, cost) {
            var margin = 0;
            if (price && cost) {
                margin = price - cost;
            }
            return margin;
        }

        function calculatePriceFromMarkupPercent(cost, percent) {
            var price = cost;
            if (cost && percent) {
                price = cost + (cost * percent / 100);
                price = (Math.round(price * 100)) / 100;
            }
            return price
        }

        function calculatePriceFromMarkupAmount(cost, amount) {
            var price = cost;
            if (cost && amount) {
                price = cost + amount;
                (Math.round(price * 100)) / 100;
            }
            return price;
        }


    }


})();