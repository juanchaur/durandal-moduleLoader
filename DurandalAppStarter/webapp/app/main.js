requirejs.config({
    baseUrl: '/webapp/app',
    paths: {
        'text': '../../lib/require/text',
        'modulesLoader': '../../lib/requirejs-moduleLoader/modulesLoader',
        'durandal':'../../lib/durandal/js',
        'plugins' : '../../lib/durandal/js/plugins',
        'transitions' : '../../lib/durandal/js/transitions',
        //'knockout': '../../lib/knockout/knockout-2.3.0',
        'knockout': '../../lib/knockout/knockout-3.1.0',
        'bootstrap': '../../lib/bootstrap/js/bootstrap',
        'jquery': '../../lib/jquery/jquery-1.9.1'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    }
});

define(['durandal/system',
        'durandal/app',
        'durandal/viewLocator',
        'modulesLoader' ], function (system, app, viewLocator) {

    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Starter Kit';

    app.configurePlugins({
        router:true,
        dialog: true,
        widget: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        // We change the convention to use the hMVC convention
        // Dany modulesLoader
        viewLocator.convertModuleIdToViewId = function(moduleId) {
            var viewId;
            if (moduleId.indexOf('module!') !== -1) {
                viewId = require.modulePath(moduleId);
            }
            viewId = viewId.replace('/controllers/', '/templates/');
            viewId = viewId.replace('.js', '');

            return viewId;
        };

        //Show the app by setting the root view model for our application with a transition.
        //app.setRoot('viewmodels/shell', 'entrance');
        app.setRoot('module!shell', 'entrance');
    });
});