define('backbone-csrf', [
    'jquery'
], function($) {
    'use strict';

    return {
        initialize: function() {
            var token = $("meta[name='csrf-token']").attr('content') || '';
            if (token) {
                $.ajaxSetup({
                    headers: {'X-CSRF-Token': token}
                });
            }
        }
    };
});
