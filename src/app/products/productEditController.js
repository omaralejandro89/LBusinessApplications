/**
 * Created by Omar on 10/17/14.
 */
(function() {
    'use strict';

    angular
        .module('app.products')
        .controller('ProductEditController', ['product', '$state', 'productService', ProductEditController]);

    /* @ngInject */
    function ProductEditController(product, $state, productService) {
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
        //Price
        vm.priceOption = "percent";
        vm.marginPercent = marginPercent;
        vm.calculatePrice = calculatePrice;

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

        //Price
        function marginPercent() {
            return productService.calculateMarginPercent(vm.product.price, vm.product.cost);
        }

        function calculatePrice () {
            var price = 0;

            if (vm.priceOption == 'amount') {
                price = productService.calculatePriceFromMarkupAmount(vm.product.cost, vm.markupAmount);
            }

            if (vm.priceOption == 'percent') {
                price = productService.calculatePriceFromMarkupPercent(vm.product.cost, vm.markupPercent);
            }

            vm.product.price = price;
        };




    }


})();