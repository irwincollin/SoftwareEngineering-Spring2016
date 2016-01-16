angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    var clearForm = function() {
      $scope.newListing = {
        coordinates: {}
      };
    }
    clearForm();

    $scope.addListing = function() {
      var newListingToInsert = {
        name: $scope.newListing.name,
        code: $scope.newListing.code,
        address: $scope.newListing.address,
        coordinates: {
          latitude: $scope.newListing.coordinates.latitude,
          longitude: $scope.newListing.coordinates.longitude
        }
      }
      $scope.listings.push(newListingToInsert);
      clearForm();
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(item) {
      $scope.detailedInfo = item;
      $scope.detailedInfo.showDetails = true
      $scope.selectedItem = item;
    };

    $scope.pinClicked = function(pin) {
      var index = this.id;
      var listing = $scope.listings[index];
      $scope.showDetails(listing);
    }
  }
]);
