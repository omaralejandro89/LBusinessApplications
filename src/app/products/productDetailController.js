/**
 * Created by Omar on 10/17/14.
 */
(function() {
    'use strict';

    angular
        .module('app.products')
        .controller('ProductDetailController', ['product', 'productService', ProductDetailController]);

    /* @ngInject */
    function ProductDetailController(product, productService) {
        /* jshint validthis: true */
        var vm = this;

        vm.product = product;

        vm.activate = activate;
        vm.title = 'Product Detail: ' + vm.product.productName;
        vm.marginPercent = productService.calculateMarginPercent(vm.product.price, vm.product.cost)

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }

        activate();

        ////////////////

        function activate() {
        }


    }


})();