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

  reviewModalCtrl.$inject = ['$modalInstance', 'loc8rData', 'locationData'];
  function reviewModalCtrl ($modalInstance, loc8rData, locationData) {
    var vm = this;
    vm.locationData = locationData;

    vm.onSubmit = function(){
      vm.formError = "";
      if(!vmformData.name || !vm.formData.rating || !vm.formData.reviewText){
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        vm.doAddReview(vm.locationData.locationid, vm.formData);
      }
    };

    vm.doAddReview = function(locationid, formData){
      loc8rData.addReviewById(locationid, {
        author: formData.name,
        rating: formData.rating,
        reviewText : formData.reviewText
      })
        .success(function(data){
          console.log("Success!");
        })
        .error(function(data){
          vm.formError = "Your review has not been saved, try again";
        });
      return false;
    };

    vm.modal = {
      cancel: function() {
        $modalInstance.dismiss('cancel');
      }
    };
  }
})();
