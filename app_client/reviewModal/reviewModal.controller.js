(function(){
  angular
    .module('loc8rApp')
    .controller('reviewModalCtrl', reviewModalCtrl);

  var modalInstance = $modal.open({
    templateUrl: '/reviewModal/reviewModal.view.html',
    controller: 'reviewModalCtrl as vm',
    resolve: {
      locationData: function(){
        return{
          locationid: vm.locationid,
          locationName: vm.data.location.name
        };
      }
    }
  });

  reviewModalCtrl.$inject = ['$modalInstance', 'locationData'];
  function reviewModalCtrl ($modalInstance, locationData) {
    var vm = this;
    vm.locationData = locationData;

    vm.modal = {
      cancel: function() {
        $modalInstance.dismiss('cancel');
      }
    };
  }
})();
