define(['plugins/router',
        'durandal/app',
        'config/config'], 
    function ( router, app, config ) {
    return {
        router: router,
        
        activate: function () {
            router.map( config.router ).buildNavigationModel();
            
            return router.activate();
        }
    };
});