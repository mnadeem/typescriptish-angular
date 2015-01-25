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

    	public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
    	public scope = {ngReallyClick:"&"};
    	public restrict = 'A';    	

    	constructor($log:ng.ILogService, $parse : ng.IParseService, $modal:ng.ui.bootstrap.IModalService) {
			
			this.link = (scope: ReallyClickModel, element: ng.IAugmentedJQuery, attrs: NgReallyClickAttributes) =>
	        {
	            element.bind('click', function() {
                 var message = attrs.ngReallyMessage || "Are you sure ?";

                 var modalInstance = $modal.open({
                	 templateUrl: 'src/components/confirmation/confirmation.tpl.html',
                	 size: 'sm',
                	 resolve: {
            	        confirmationMessage: function () {
            	          return message;
            	        }
            	      },
                	 controller: 'modalInstanceCtrl'
                 });
                 scope.$apply();
                 modalInstance.result.then(function(confirmed) {
                	 confirmed = confirmed || false;
                	 //$parse method, this allows parameters to be passed
                     var invoker = $parse(attrs.ngReallyClick);
                     scope.ngReallyClick({confirmed:confirmed});
                 }, function() {
                	 $log.info('Confirmation Modal dismissed at: ' + new Date());
                	 //$parse method, this allows parameters to be passed
                     var invoker = $parse(attrs.ngReallyClick);
                     scope.ngReallyClick({confirmed:false});
                 });

               });
	        };
        }

    	public static Factory()
	    {
	    	var directive = ($log:ng.ILogService, $parse : ng.IParseService, $modal:ng.ui.bootstrap.IModalService) =>
	        {
	            return new NgReallyClick($log,$parse, $modal);
	        };
	
	        directive['$inject'] = ['$log', '$parse', '$modal'];

        	return directive;
	    }
	}

	export interface NgReallyClickAttributes extends ng.IAttributes {
			ngReallyMessage: string;
			ngReallyClick : string;		
	}

	angular.module('smpl-typescriptish-angular.components.confirmation.directives')
		.directive('ngReallyClick', NgReallyClick.Factory());
}
