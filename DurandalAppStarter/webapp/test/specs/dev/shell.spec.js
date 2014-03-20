/*global jasmine, describe, beforeEach, it, expect, require */

define( ['module!shell'], function ( Shell ) {

    describe('[Module: Shell]: Suite to test the module Shell >', function() {
        "use strict";
       // var shell = require('viewmodels/shell');

        it('should have a "router" property', function() {
            expect(Shell.router).toBeDefined();
        });

        // it('should have a "search" property of type function', function() {
        //     expect(Shell.search).toBeDefined();
        // });

        describe('activate', function() {

            it('should be a property of type function', function() {
                expect(Shell.activate).toBeDefined();
            });

            it('should return a promise  ', function() {
                expect(Shell.activate().then).toBeDefined();
            });

        });

    });
});

