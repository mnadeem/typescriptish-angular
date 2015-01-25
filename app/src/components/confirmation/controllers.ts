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
		
		static $inject = ['$scope', '$modalInstance', 'confirmationMessage'];


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