describe([
	'module!station'
], function(
	testee
) {

	'use strict';

	describe(function() {
		it('Should have a public API', function() {
			expect(typeof testee.getPosition).toEqual('function');

		});

	});

})
