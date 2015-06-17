angular.module('qrrific').controller('QrCtrl', ['$scope', '$http', '$location', 'QrServ', function($scope, $http, $location, QrServ){

	"use strict";

	var items = QrServ.getItems();
	console.log("retrieved %o", items);
	
	var opts = QrServ.getOpts();
	opts.text = angular.toJson(items);
	$("#canvas1").qrcode(opts);

}]);


	