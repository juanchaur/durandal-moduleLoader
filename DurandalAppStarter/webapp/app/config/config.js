define([], function () {
	var oMyConfig;

	oMyConfig = {
		router: [
			{ 
				route: '',
				title:'Welcome',
				moduleId: 'module!welcome',
				nav: true
			},

			{ 
				route: 'flickr',
				//moduleId: 'viewmodels/flickr',
				moduleId: 'module!flickr',
				title: 'Flickr',
				nav: true
			},
			{
				route: 'childRoute(:id)*details',
				moduleId: 'module!childRoute',
				title: 'Durandal Child Router',
				nav: true,
				hash: '#childRoute'
			}
		],

		subRouter: [
			{
				route: 'bill',
				moduleId: 'module!bill',
				title: 'Bill',
				nav: true
			},
			{
				route: 'financial',
				moduleId: 'module!financial',
				title: 'Financial',
				nav: true
			},
			{
				route: 'summary',
				moduleId: 'modules!summary',
				title: 'Summary',
				nav: true
			}
		]
	};

	return oMyConfig;
});