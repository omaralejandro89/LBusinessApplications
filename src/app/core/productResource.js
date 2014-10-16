/**
 * Created by Omar on 10/16/14.
 */
(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('productResource', ['$resource', productResource]);

    /* @ngInject */
    function productResource($resource) {
        return $resource("/api/products/:productId")
    }


})();


