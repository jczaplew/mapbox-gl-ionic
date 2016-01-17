angular.module('starter.controllers', [])

.controller('AppCtrl', function() { })

.controller('MapCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.$on('$ionicView.enter', function() {
    $ionicSideMenuDelegate.canDragContent(false);
  });
  $scope.$on('$ionicView.leave', function() {
    $ionicSideMenuDelegate.canDragContent(true);
  });

  mapboxgl.accessToken = 'pk.eyJ1IjoiamN6YXBsZXdza2kiLCJhIjoiWnQxSC01USJ9.oleZzfREJUKAK1TMeCD0bg';
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/jczaplewski/cigmb1q45000yaaknp766niu2',
      center: [-89.40, 43.07],
      zoom: 5
  });

  map.addControl(new mapboxgl.Navigation({position: 'bottom-left'}));

});
