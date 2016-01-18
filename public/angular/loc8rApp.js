angular.module('loc8rApp', []);

var locationsListCtrl = function($scope, loc8rData){
  $scope.message = "Searching for nerby places";
  loc8rData
    .success(function(data){
      $scope.message = data.length > 0 ? "" : "No locations found";
      $scope.data = {locations: data};
    })
      .error(function(err){
      console.log(err);
      $scope.message = "Sorry, something's gone wrong";
      });
};

var _isNumeric = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var formatDistance = function() {
  return function(distance){
    var numDistance, unit;
    if (distance && _isNumeric(distance)) {
      if (distance > 1){
        numDistance = parseFloat(distance).toFixed(1);
        unit = 'km';
      } else {
        numDistance = parseInt(distance * 1000,10);
        unit = 'm';
      }
      return numDistance + unit;
    } else {
      return "?";
    }
  };
};

var ratingStars = function(){
  return{
    scope: {
      thisRating: '=rating'
    },
    templateUrl: "/angular/rating-stars.html"
  };
};

var loc8rData = function($http){
  return $http.get('/api/locations?lng=-0.79&lat=51.3&maxDistance=500');
}

var geolocation = function(){
  var getPosition = function(cbSuccess, cbError, cbNoGeo){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
    } else {
      cbNoGeo();
    };
    return {
      getPosition: getPosition
    };
  };
}

angular
  .module('loc8rApp')
  .controller('locationsListCtrl', locationsListCtrl)
  .filter('formatDistance', formatDistance)
  .directive('ratingStars', ratingStars)
  .service('loc8rData', loc8rData);
