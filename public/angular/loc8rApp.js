angular.module('loc8rApp', []);

var locationsListCtrl = function($scope){
  $scope.data = {
    locations: [{
      name: 'Burger Queen',
      address: '125 High Street, Reading, RG6 IPS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', "Premium wifi"],
      distance: '0.296456',
      _id: '5370a35f2536f6785f8dfb6a'
    },{
      name: 'Costy',
      addess: '125 High Street, Reading, RG6 IPS',
      rating: 5,
      facilities: ['Hot Drinks', "Food", "Alcoholic Drinks"],
      distance: "0.7865456",
      _id: '5370a35f2536f6785f8dfb6a'
    }]};
};

angular
  .module('loc8rApp')
  .controller('locationsListCtrl', locationsListCtrl);
