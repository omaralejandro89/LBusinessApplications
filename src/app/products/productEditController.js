/**
 * Created by Omar on 10/17/14.
 */
(function() {
    'use strict';

    angular
        .module('app.products')
        .controller('ProductEditController', ['product',ProductEditController]);

    /* @ngInject */
    function ProductEditController(product) {
        /* jshint validthis: true */
        var vm = this;

        vm.product = product;
        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
        }

        if (vm.product &&vm.product.productId) {
            vm.title = "Edit: " + vm.product.productName;
        }
        else {
            vm.title = "New Product"
        }




    }


})();