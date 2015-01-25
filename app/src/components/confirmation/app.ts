/// <reference path='../../includes.ts' />

module sample {
	'use strict'
	
	/**
	 * @ngdoc module
	 * @name smpl-typescriptish-angular.components.confirmation.directives
	 * @description
	 *  smpl-typescriptish-angular.components.confirmation.directives
	 *
	 * smpl-typescriptish-angular.components.confirmation.directives module of the application.
	 */
	 angular
		.module('smpl-typescriptish-angular.components.confirmation.directives',['ui.bootstrap']);
	 
	 /**
	  * @ngdoc module
	  * @name smpl-typescriptish-angular.components.confirmation.controllers
	  * @description
	  * smpl-typescriptish-angular.components.confirmation.controllers
	  *
	  * smpl-typescriptish-angular.components.confirmation.controllers module of the application.
	  */
	  angular
	 	.module('smpl-typescriptish-angular.components.confirmation.controllers',['ui.bootstrap']);
	 
	 /**
	 * @ngdoc module
	 * @name smpl-typescriptish-angular.components.confirmation
	 * @description
	 * # smpl-typescriptish-angular.components.confirmation
	 *
	 * smpl-typescriptish-angular.components.confirmation module of the application.
	 */
	 angular
		.module('smpl-typescriptish-angular.components.confirmation', [
		'smpl-typescriptish-angular.components.confirmation.directives',
		'smpl-typescriptish-angular.components.confirmation.controllers'
		]);
}