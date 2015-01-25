/// <reference path='../../includes.ts' />

module sample {
	'use strict'

	angular.module('smpl-typescriptish-angular.components.confirmation.controllers').controller('modalInstanceCtrl', ModalInstanceCtrl.prototype.injection());
	
	/**
	 * @ngdoc controller
	 * @module smpl-typescriptish-angular.components.confirmation.controllers
	 * @name modalInstanceCtrl
	 * @description
	 * # modalInstanceCtrl
	 * Controller to manage the modal instance
	 */
	export class ModalInstanceCtrl {

		public injection(): Array<any> {
            return [
                ModalInstanceCtrl
            ]
        }

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
}