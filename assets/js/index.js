// 'use strict';
var app = angular.module('bmApp', []);
app.value('profile', ["Объект №1","Объект №2"]);

app.directive('setClassWhenAtTop',['$window', function ($window) {
  var $win = angular.element($window); // wrap window object as jQuery object

  return {
    restrict: 'A',
    link: function (scope, element, attrs) {

      var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
          offsetTop = element[0].offsetTop; // get element's offset top relative to document
   
      $win.on('scroll', function (e) {
 // console.log(window.scrollY);
        if (window.scrollY >= offsetTop) {
          element.addClass(topClass);
        } else {
          element.removeClass(topClass);
        }
      });
    }
  };
}]);

app.controller('bmController', ['$scope', 'profile', function($scope, profile) {
	$scope.profile = profile;
}]);





