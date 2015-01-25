/// <reference path='../../includes.ts' />

module sample {
	'use strict'

	/**
	 * @ngdoc directive
	 * @module smpl-typescriptish-angular.components.confirmation.directives
	 * @name ngReallyClick
	 * @restrict A
	 * @scope Isolated
	 * @description
	 * # ngReallyClick
	 * Directive to get user confirmation
	 */
	export class NgReallyClick implements ng.IDirective {

    	static $inject = ['$log', '$parse', '$modal'];
    	public injection(): Array<any> {
            var directive = ($log:ng.ILogService, $parse : ng.IParseService, $modal:ng.ui.bootstrap.IModalService) =>
	        {
	            return new NgReallyClick($log,$parse, $modal);
	        };

            return [
                () => { 
                    return directive;
                }
            ]
        }

        public templateUrl: string;
    	public restrict: string;
    	public scope: Object;
    	private $log:ng.ILogService;
    	private $parse : ng.IParseService;
    	private $modal:ng.ui.bootstrap.IModalService;

        constructor($log:ng.ILogService, $parse : ng.IParseService, $modal:ng.ui.bootstrap.IModalService) {
            this.templateUrl = 'partials/templates/directive.html'
            this.restrict = 'A'
			this.scope   = {ngReallyClick:"&"};        

        }

        public link ($scope: ReallyClickModel, element: JQuery, attributes: NgReallyClickAttributes): void {
            element.bind('click', function() {
                 var message = attributes.ngReallyMessage || "Are you sure ?";

                 var modalInstance = this.$modal.open({
                	 templateUrl: 'src/components/confirmation/confirmation.tpl.html',
                	 size: 'sm',
                	 resolve: {
            	        confirmationMessage: function () {
            	          return message;
            	        }
            	      },
                	 controller: 'modalInstanceCtrl'
                 });
                 $scope.$apply();
                 modalInstance.result.then(function(confirmed) {
                	 confirmed = confirmed || false;
                	 //$parse method, this allows parameters to be passed
                     var invoker = this.$parse(attributes.ngReallyClick);
                     $scope.ngReallyClick({confirmed:confirmed});
                 }, function() {
                	 this.$log.info('Confirmation Modal dismissed at: ' + new Date());
                	 //$parse method, this allows parameters to be passed
                     var invoker = this.$parse(attributes.ngReallyClick);
                     $scope.ngReallyClick({confirmed:false});
                 });

               });
        }

	}

	export interface NgReallyClickAttributes extends ng.IAttributes {
			ngReallyMessage: string;
			ngReallyClick : string;		
	}

	angular.module('smpl-typescriptish-angular.components.confirmation.directives')
		.directive('ngReallyClick', NgReallyClick.prototype.injection());
}
