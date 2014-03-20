/*global jasmine, describe, beforeEach, it, expect, require */

define( ['module!header'], function ( Header ) {

    describe('[Module: header]: Suite to test the module header >', function() {
        "use strict";
       // var shell = require('viewmodels/shell');

        it('should have a "router" property', function() {
            expect(Header.router).toBeDefined();
        });

        it('should have a "search" property of type function', function() {
            expect(Header.search).toBeDefined();
        });

        describe('activate', function() {

            it('should be a property of type function', function() {
                expect(Header.activate).toBeDefined();
            });
        });

    });
});

