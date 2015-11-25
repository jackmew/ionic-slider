(function() {

var app = angular.module('starter', ['ionic'])

app.controller('SlideCtrl', function($scope) {

  $scope.slides = [
    {
      title: 'Slider #1' ,
      content: 'Content #1',
      bgColor: 'rgb(67,135,241)'
    },
    {
      title: 'Slider #2' ,
      content: 'Content #2',
      bgColor: 'rgb(232,234,99)'
    },
    {
      title: 'Slider #3' ,
      content: 'Content #3',
      bgColor: 'rgb(235,101,235)'
    }
  ];

  $scope.activeSlide = 0 ;
  $scope.setSlide = function(index) {
    $scope.activeSlide = index ;
  };

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

}());