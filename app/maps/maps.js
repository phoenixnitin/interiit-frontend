angular.module('InstiMap', ['uiGmapgoogle-maps'])
    .controller('InstiMapController', function($scope) {
        $scope.map = { center: { latitude: 12.9952, longitude: 80.2380 }, zoom: 8 };
    });