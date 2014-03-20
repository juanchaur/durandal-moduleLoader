define( [ 'module!welcome' ], function ( Welcome ) {
    
    /*global jasmine, describe, beforeEach, it, expect, require */
    describe('[Module: Welcome]: Suite to test the module Welcome >', function() {
        "use strict";
    
        //var Welcome = require('viewmodels/welcome');

        it('should be a constructor function', function() {
            var oConstructor = new Welcome();
            expect( oConstructor.constructor).toEqual( Welcome );
        });

        describe('Testing the instance of Welcome', function() {
            var oConstructor = new Welcome();

            it('should have a "displayName" property', function() {
                expect( oConstructor.displayName).toBeDefined();
            });

            it('should have a "description" property', function() {
                expect( oConstructor.description).toBeDefined();
            });

            it('should have a "features" property', function() {
                expect( oConstructor.features).toBeDefined();
            });

            it('features should be of type Array', function(){
                expect( oConstructor.features.constructor.name).toEqual("Array");
                expect( oConstructor.features.length).toBeDefined();
            });

            it('should have a "counter" property', function() {
                expect( oConstructor.counter).toBeDefined();
            });

            it('"counter" property should be a number', function() {
                expect( typeof oConstructor.counter).toEqual("number");
            });

            it('should have a "anotherFeatures" property', function() {
                expect( oConstructor.anotherFeatures).toBeDefined();
            });

            it('features should be of type Array', function(){
                expect( oConstructor.anotherFeatures.constructor.name).toEqual("Array");
                expect( oConstructor.anotherFeatures.length).toBeDefined();
            });
        });
        
    });
});
