/// <reference path='../../includes.ts' />
/// <reference path='../../../../app/src/components/confirmation/controllers.ts' />

'use strict';

describe('Controller:modalInstanceCtrl',  () => {

	var targetBeingTested;

	beforeEach(() => {

		module('smpl-typescriptish-angular.components.confirmation.controllers');

		inject(function ($rootScope, $controller) {

			targetBeingTested = $controller('modalInstanceCtrl', {
                $scope: $rootScope.$new()
            });
		});
		
	});

 	it('Sampl test', () => {
        expect(true).toBe(true);
    });
});
