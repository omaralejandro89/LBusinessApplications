/**
 * Created by Omar on 10/17/14.
 */
(function() {
    'use strict';

    angular
        .module('app.products')
        .controller('ProductEditController', ['product', '$state', ProductEditController]);

    /* @ngInject */
    function ProductEditController(product, $state) {
        /* jshint validthis: true */
        var vm = this;

        vm.product = product;
        vm.activate = activate;
        //Info
        vm.open = open;
        vm.submit= submit;
        vm.cancel = cancel;
        //Search
        vm.addTags = addTags;
        vm.removeTags = removeTags;

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

        //Info
        function open($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened
        }

        function submit(isValid) {
            if (isValid) {
                vm.product.$save(function (data) {
                    toastr.success("Save Successfull");
                });
            } else {
                alert("Please correct the validation errors first.");
            }

        }

        function cancel() {
            $state.go('productList');
        }

        //Search
        function addTags(tags) {
            if (tags) {
                var array = tags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                vm.newTags = "";
            }
            else {
                alert("Please enter one or more tags separated by commas")
            }
        }

        function removeTags(idx) {
            vm.product.tags.splice(idx, 1);
        }


    }


})();