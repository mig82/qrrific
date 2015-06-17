angular.module('qrrific').controller('AlbCtrl', ['$scope', '$http', '$location', 'QrServ', function($scope, $http, $location, QrServ){

	"use strict";

	/*$http.get("/pets").success(function(res){
		$scope.user = res;
	});*/

	$scope.inventory = [
		{sk: "FISH-FRESH-01", ds: "merluza",	pr: 15.00, 	va: 0.21, un: "Kg"},
		{sk: "FISH-FRESH-02", ds: "dorada",		pr: 12.00, 	va: 0.21, un: "Kg"},
		{sk: "FISH-FRESH-03", ds: "camarones",	pr: 30.00, 	va: 0.21, un: "Kg"},
		{sk: "WINE-RESER-01", ds: "vino tinto",	pr: 7.00, 	va: 0.21, un: "Bottles"}
	];

	$scope.items = [];

	$scope.getQR = function(){

		QrServ.setItems($scope.items);
		$location.path('/getqr');
	};

	$scope.addProduct = function(product){

		console.log("Selected product is %o", product);

		var newItem = new Object();
		newItem.ds = product.ds;
		newItem.pr = product.pr;
		newItem.qt = 1;
		newItem.to = newItem.qt * newItem.pr;

		$scope.items.push(newItem);
		$scope.q = "";
	};

	$scope.clearSearch = function(){
		$scope.q = "";
	};

}]);


	