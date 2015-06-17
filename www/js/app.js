
//var app = angular.module('qrrific', ['ngRoute', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap'])
var app = angular.module('qrrific', ['ngRoute', 'ngAnimate', 'ngSanitize'])

.config(['$routeProvider', function($routeProvider) {
	
	"use strict";

	

	$routeProvider.when('/', {
		templateUrl: 'views/albaran.html',
		//controller: "BeginController"
	});

	$routeProvider.when('/home', {
		templateUrl: 'views/albaran.html',
		//controller: "HomeController"
	});

	$routeProvider.when('/getqr', {
		templateUrl: 'views/qrcode.html'
	});

	$routeProvider.when('/qrscan', {
		templateUrl: 'views/qrscan.html'
	});

	$routeProvider.otherwise({ redirectTo: '/home' });

}])

.run(function(){
	
	console.log('Starting QRifik...');

	//gettextCatalog.setCurrentLanguage('en');
	//gettextCatalog.debug = true;
});