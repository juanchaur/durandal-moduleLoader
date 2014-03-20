define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        
        activate: function () {
            router.map([
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
                }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});