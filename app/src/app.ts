/// <reference path='includes.ts' />

module sample {
	'use strict'
	
	/**
	 * @ngdoc module
	 * @name smpl-typescriptish-angular
	 * @requires ngAnimate, ngCookies, ngResource, ui.router, ngSanitize
	 * @description
	 * # smpl-typescriptish-angular
	 *
	 * Main module of the application.
	 */
	 //var myapp: ng.IModule = angular.module('app', ['ngRoute'])

	  angular.module('smpl-typescriptish-angular', [
	    'ngAnimate',
	    'ngCookies',
	    'ngResource',
	    'ui.router',
	    'ngSanitize',
		'app-templates',
		'ui.bootstrap',
		'smpl-typescriptish-angular.plan'
	  ]);
}



