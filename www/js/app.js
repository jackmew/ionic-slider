(function() {

var app = angular.module('starter', ['ionic'])

app.controller('SlideCtrl', function($scope) {

  $scope.slides = [] ;
  for(var i = 0 ; i < 5 ; i++) {
    $scope.slides.push({
      title: 'Slider #' + i ,
      content: 'Slider content #' + i 
    });
  }

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