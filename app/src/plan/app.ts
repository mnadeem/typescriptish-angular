/// <reference path='../includes.ts' />

module app {
    'use strict'

 
	 /**
	 * @ngdoc module
	 * @name smpl-typescriptish-angular.app
	 * @requires smpl-typescriptish-angular.components, smpl-typescriptish-angular.plan.details, ui.router
	 * @description
	 * # smpl-typescriptish-angular.app
	 *
	 * Main module of the application.
	 */
	 angular
	  .module('smpl-typescriptish-angular.plan', [
		'smpl-typescriptish-angular.components',
		'smpl-typescriptish-angular.plan.details',
		'ui.router'
	  ]);
}