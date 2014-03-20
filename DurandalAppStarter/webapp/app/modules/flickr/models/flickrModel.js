define(['knockout'], function (ko) {
	'use strict';
	
	return {
		displayName: 'Flickr',

		images: ko.observableArray([]),

		querySearch:  {
            tags: 'mount ranier', 
            tagmode: 'any', 
            format: 'json'
        },

        url: 'http://api.flickr.com/services/feeds/photos_public.gne',

	};
	
});