/// <reference path='../../includes.ts' />

module sample { 

	/**
	 * @ngdoc controller
	 * @module smpl-typescriptish-angular.plan.details.controllers
	 * @name planDetailsCtr
	 * @requires $scope, $log, $timeout
	 * @description
	 * # planDetailsCtr
	 * Controller to manage the plan details
	 */
	export class PlanDetailsCtr {
		public injection(): Array<any> {
            return [
                PlanDetailsCtr
            ]
        }

        constructor($scope: PlanDetailsModel, $log: ng.ILogService, $timeout:ng.ITimeoutService) {

        }
	}
	
	angular.module('smpl-typescriptish-angular.plan.details.controllers').controller('planDetailsCtr', sample.PlanDetailsCtr);
}