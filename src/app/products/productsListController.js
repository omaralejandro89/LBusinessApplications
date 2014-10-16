/**
 * Created by Omar on 10/16/14.
 */
(function() {
    'use strict';

    angular
        .module('app.products')
        .controller('ProductListController', ['dataservice', ProductListController]);

    function ProductListController(dataservice) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'ProductController';
        vm.products = dataservice.getProducts();
        vm.showImage = false;
        vm.toggleImage = toggleImage;


        activate();

        ////////////////

        function activate() {
        }

        function toggleImage() {
            vm.showImage= !vm.showImage;
        }
    }

})();


