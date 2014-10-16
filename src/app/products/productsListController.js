/**
 * Created by Omar on 10/16/14.
 */
(function() {
    'use strict';

    angular
        .module('app.products')
        .controller('ProductListController', ['productResource', ProductListController]);

    function ProductListController(productResource) {
        /* jshint validthis: true */
        var vm = this;

        //vm.products // //dataservice.getProducts();
        vm.activate = activate;
        vm.title = 'ProductController';
        vm.showImage = false;
        vm.toggleImage = toggleImage;


        activate();

        ////////////////

        function activate() {
            return productResource.query(function(data) {
                vm.products = data;
            });
        }

      //  function products() {
      //
      //  }

        function toggleImage() {
            vm.showImage= !vm.showImage;
        }
    }

})();


