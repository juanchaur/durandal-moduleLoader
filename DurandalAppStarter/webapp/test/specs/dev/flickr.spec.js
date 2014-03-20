/*global jasmine, describe, beforeEach, it, expect, require */
define( ['knockout', 'module!flickr'], function ( ko, Flickr ) {

    describe('[Module: Flickr]: Suite to test the module Flickr >', function() {
        "use strict";

        //var flickr = require('viewmodels/flickr');
        //var ko = require('knockout');
        
        it('should return a "model" property', function() {
            expect(Flickr.model).toBeDefined();
        });

        it('"model" property should be an object', function() {
            expect(Flickr.model.constructor.name).toEqual('Object');
        });

        it('"model" property should have "images" as ko.observableArray ', function() {
            expect(ko.isObservable(Flickr.model.images)).toBeTruthy();
            expect(ko.unwrap(Flickr.model.images).length).toBeDefined();
        });

        it('should have a "activate" property of type function', function() {
            expect(typeof Flickr.activate).toBe('function');
        });

        it('should have a "select" property of type function', function() {
            expect(typeof Flickr.select).toBe('function');
        });

        it('should have a "canDeactivate" property of type function', function() {
            expect(typeof Flickr.canDeactivate).toBe('function');
        });

    });

});
