/// <reference path='../../includes.ts' />

'use strict';

describe('Controller:modalInstanceCtrl',  () => {
	
	var counter;
	
	beforeEach(() => {
		counter = 0;
	});


	it('increments value', () => {
		counter ++;
		expect(counter).toBe(1);
	});
});
