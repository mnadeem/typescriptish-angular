/// <reference path='includes.ts' />

module sample {
	'use strict'

	angular.module('smpl-typescriptish-angular')
	  .constant('APP_HOME_URL', '/xyz/app');

	/**
	 * @ngdoc overview
	 * @name smpl-typescriptish-angular
	 * @requires $httpProvider
	 * @description
	 *
	 * Configures the @module smpl-typescriptish-angular $httpProvider to disable IE caching
	 */
	angular
	  .module('smpl-typescriptish-angular')
	  .config(['$httpProvider', '$httpProvider', function($httpProvider : ng.IHttpProvider) {
	    //initialize get if not there
	    if (!$httpProvider.defaults.headers.get) {
	        $httpProvider.defaults.headers.get = {};    
	    }
	    //disable IE ajax request caching
	    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
	 }]);

}



