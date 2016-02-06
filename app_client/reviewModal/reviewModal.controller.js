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

    vm.onSubmit = function(){
      vm.formError = "";
      if(!vmformData.name || !vm.formData.rating || !vm.formData.reviewText){
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        console.log(vm.formData);
        return false;
      }
    };

    vm.modal = {
      cancel: function() {
        $modalInstance.dismiss('cancel');
      }
    };
  }
})();
