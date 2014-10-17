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
                            abstract: true,
                            url: "/products/edit/:productId",
                            templateUrl: "src/app/products/productEditView.html",
                            controller: "ProductEditController as vm",
                            resolve: {
                                productResource: "productResource",

                                product: function(productResource, $stateParams) {
                                    var productId = $stateParams.productId;
                                    return productResource.get({ productId: productId }).$promise;
                                }
                            }
                        })
                        .state("productEdit.info", {
                            url: "/info",
                            templateUrl: "src/app/products/productEditInfoView.html"
                        })
                        .state("productEdit.price", {
                            url: "/price",
                            templateUrl: "src/app/products/productEditPriceView.html"
                        })
                        .state("productEdit.tags", {
                            url: "/tags",
                            templateUrl: "src/app/products/productEditTagsView.html"
                        })

                        .state("productDetail", {
                            url: "/products/:productId",
                            templateUrl: "src/app/products/productDetailView.html",
                            controller: "ProductDetailController as vm",
                            resolve: {
                                productResource: "productResource",

                                product: function(productResource, $stateParams) {
                                    var productId = $stateParams.productId;
                                    return productResource.get({ productId: productId }).$promise;
                                }
                            }
                        })
                }
        ])




})();