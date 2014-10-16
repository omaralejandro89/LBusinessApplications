/**
 * Created by Omar on 10/16/14.
 */
(function() {
    'use strict';

    angular
        .module('app.core')
        .config(['$stateProvider', '$urlRouterProvider',
                function($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise("/");

                    $stateProvider
                        //Products
                        .state("home", {
                        url: "/",
                        templateUrl: "src/app/welcome.html"
                        })
                        .state("productList", {
                            url: "/products",
                            templateUrl: "src/app/products/productListView.html",
                            controller: "ProductListController as vm"
                        })
                        .state("productEdit", {
                            url: "/products/edit/:productId",
                            templateUrl: "src/app/products/productEditView.html",
                            controller: "ProductEditController as vm"
                        })
                }
        ])




})();