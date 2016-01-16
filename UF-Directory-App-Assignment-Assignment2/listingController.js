angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.selectedItem = undefined;
    $scope.infoPane = '';

    var clearForm = function() {
      $scope.tempListing = {
        coordinates: {}
      };
    }
    clearForm();

    var copyListing = function(listing) {
      var listingCopy = {
        name: listing.name,
        code: listing.code,
        address: listing.address,
        coordinates: {
          latitude: listing.coordinates.latitude,
          longitude: listing.coordinates.longitude
        }
      }
      return listingCopy;
    }

    $scope.startAddListing = function() {
      $scope.infoPane = "addListing";
      clearForm();
    }

    $scope.addListing = function() {
      $scope.listings.push(copyListing($scope.tempListing));
      clearForm();
    };

    $scope.editListing = function() {
      $scope.selectedItem.name = $scope.tempListing.name;
      $scope.selectedItem.code =  $scope.tempListing.code;
      $scope.selectedItem.address =  $scope.tempListing.address;
      $scope.selectedItem.coordinates.latitude =  $scope.tempListing.coordinates.latitude;
      $scope.selectedItem.coordinates.longitude =  $scope.tempListing.coordinates.longitude;
      clearForm();
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };

    $scope.editDetails = function(item) {
      $scope.selectedItem = item;
      $scope.tempListing = copyListing(item);
      $scope.infoPane = "editDetails";
    };

    $scope.showDetails = function(item) {
      $scope.selectedItem = item;
      $scope.infoPane = "showDetails";
    };

    $scope.pinClicked = function(pin) {
      var index = this.id;
      var listing = $scope.listings[index];
      $scope.showDetails(listing);
    }
  }
]);
