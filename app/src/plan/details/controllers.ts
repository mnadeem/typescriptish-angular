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

		static $inject = ['$scope', '$log', '$timeout'];

        constructor($scope: PlanDetailsModel, $log: ng.ILogService, $timeout:ng.ITimeoutService) {

        }
	}
	
	angular.module('smpl-typescriptish-angular.plan.details.controllers').controller('planDetailsCtr', PlanDetailsCtr);
}