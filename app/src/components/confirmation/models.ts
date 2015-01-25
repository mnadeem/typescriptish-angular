/// <reference path='../../includes.ts' />
module sample {
	'use strict'
	
	export interface ModalInstanceModel extends ng.IScope {
		ok : Function;
		cancel : Function;
		message: string;
	}
	
	export interface ReallyClickModel extends ng.IScope {
		ngReallyClick : Function;
	}

}
