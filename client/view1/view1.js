'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http', function($scope, $http) {

	$scope.region = {};
	$scope.regions = [
		{region: 'Canada'},
		{region: 'Mexico'},
		{region: 'United States'}
	];

	$scope.year = {};
	$scope.years = [
	  {year:'2003'},
	  {year:'2004'},
	  {year:'2005'},
	  {year:'2006'},
	  {year:'2007'},
	  {year:'2008'},
	  {year:'2009'},
	  {year:'2010'},
	  {year:'2011'},
	  {year:'2012'},
	  {year:'2013'},
	  {year:'2014'}
	];
		
	$scope.make = {}
	$scope.model = {}
	$scope.submodel = {}

	$scope.getMakes = function(selectedyear, selectedregion) {

		$scope.make.selected = undefined;
	    $scope.model.selected = undefined;
	    $scope.submodel.selected = undefined;
 

		$http({
	   		method: 'GET',
	    	url: 'http://gfx.mviewlabs.net:3000/api/Transmissions?filter[where][and][0][yearid]=' + selectedyear.year + '&filter[where][and][1][regionname]=' + selectedregion,
	  	}).success(function(data, status) {
	  		$scope.results = data;

	  	}).error(function(data, status) {
	    	console.log('error' + status);
	 	});
	};


	$scope.isActive = function(user) {
	    return user.User.Stats[0].active === "1";
	};

	$scope.disable = function(scope) {
    	$scope.disabled = true;
  	};

  	$scope.enable = function() {
    	$scope.disabled = false;
  	};

  	$scope.clear =  function() {
  		$scope.year.selected =  undefined;
  		$scope.make.selected = undefined;
	    $scope.model.selected = undefined;
	    $scope.submodel.selected = undefined;
  	}



 }]);

