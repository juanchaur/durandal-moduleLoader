
define(['durandal/app',
		'plugins/router',
		'knockout',
		'model!headerModel'
	], function ( app, router, ko, headerModel ) {
	
	'use strict';

	return {
		model: headerModel,
		router: router,
		//It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
		search: function () {
			app.showMessage('Search not yet implemented...');
		},
		activate: function() {
         
		},

	};
});