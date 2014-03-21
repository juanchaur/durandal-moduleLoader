
define([
	'plugins/http', 
	'durandal/app',
	'knockout',
	'plugins/router',
	'config/config'
	], function ( http, app, ko, router, config ) {
	

	'use strict';

	var childRouter = router
			.createChildRouter()
			.makeRelative({
				//moduleId:'ko',
				fromParent:true,
				hash: '#childRoute'
			})
			.map( config.subRouter )
			.buildNavigationModel();

	return {
		displayName: 'Child Router example',
		//the property on the view model should be called router
		router: childRouter,

		activate: function () {
		}
	}; 

});