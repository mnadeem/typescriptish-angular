/// <reference path='../../includes.ts' />

module sample {
	'use strict'

	/**
	 * @ngdoc controller
	 * @module smpl-typescriptish-angular.components.confirmation.controllers
	 * @name modalInstanceCtrl
	 * @description
	 * # modalInstanceCtrl
	 * Controller to manage the modal instance
	 */
	export class ModalInstanceCtrl {
		
		// $inject annotation.
		// It provides $injector with information about dependencies to be injected into constructor
		// it is better to have it close to the constructor, because the parameters must match in count and type.
		// See http://docs.angularjs.org/guide/di
		public static $inject = ['$scope', '$modalInstance', 'confirmationMessage'];

		// dependencies are injected via AngularJS $injector
		// controller's name is registered in this file at the end of the module
        constructor($scope: ModalInstanceModel, $modalInstance:ng.ui.bootstrap.IModalServiceInstance, confirmationMessage:string) {
			
			$scope.message = confirmationMessage;
			$scope.ok = () => {
				$modalInstance.close(true);			
			};
			
			$scope.cancel = () => {
				$modalInstance.dismiss('cancel');			
			};
        }
	}
	angular.module('smpl-typescriptish-angular.components.confirmation.controllers').controller('modalInstanceCtrl', ModalInstanceCtrl);
}