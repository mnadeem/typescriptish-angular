/// <reference path='../includes.ts' />

module sample {
	'use strict'

	 /**
	 * @ngdoc overview
	 * @name smpl-typescriptish-angular
	 * @requires $stateProvider
	 * @description
	 *
	 * Configures the @module smpl-typescriptish-angular $stateProvider
	 */
	angular
	  .module('smpl-typescriptish-angular.plan')
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider:ng.ui.IStateProvider, $urlRouterProvider : ng.ui.IUrlRouterProvider) {
			
			// For any unmatched url, redirect to /plan
			$urlRouterProvider.otherwise("/plan");
	
			$stateProvider.state('plan', {
				url : '/plan',
				templateUrl : 'src/plan/main.tpl.html'
			}).state('details', {
				url : '/details',
				templateUrl : 'src/plan/details/main.tpl.html'
			}).state('summary', {
				url : '/summary',
				templateUrl : 'src/plan/summary/main.tpl.html'
			});
		}]);
}



