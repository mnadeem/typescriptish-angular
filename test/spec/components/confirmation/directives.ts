/// <reference path='../../includes.ts' />
/// <reference path='../../../../app/src/components/confirmation/app.ts' />
/// <reference path='../../../../app/src/components/confirmation/directives.ts' />

'use strict';

describe('Directive:ngReallyClick',  () => {

	var element : ng.IAugmentedJQuery, scope:ng.IScope;

	beforeEach(() => {
		module('smpl-typescriptish-angular');

		inject(function ($rootScope, $log:ng.ILogService, $parse : ng.IParseService, $modal:ng.ui.bootstrap.IModalService, $compile:ng.ICompileService) {
			scope = $rootScope.$new();

			element = angular.element('<button type="button" class="btn btn-default" ng-really-message="Are you sure, dude?" ng-really-click="reallyDelete(item)">Open</button>');
			spyOn(element, "bind");
			element = $compile(element)(scope);
			scope.$digest();
		});

	});

 	it('Sampl test', () => {
        //expect(element.bind).toHaveBeenCalled();
    });
});
