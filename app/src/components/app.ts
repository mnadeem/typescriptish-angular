/// <reference path='../includes.ts' />

module app {
    'use strict'

 
	 /**
	 * @ngdoc module
	 * @name smpl-typescriptish-angular.components
	 * @requires smpl-typescriptish-angular.components.navigation, smpl-typescriptish-angular.components.confirmation
	 * @description
	 * # smpl-typescriptish-angular.components
	 *
	 * Main module for components
	 */
	 angular
		.module('smpl-typescriptish-angular.components', [
		'smpl-typescriptish-angular.components.confirmation'
		]);
}