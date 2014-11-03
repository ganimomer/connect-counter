
/*eslint-disable no-unused-vars, wrap-iife */
//the var counter is called in the HTML file
var counter = (function() {
/*eslint-enable no-unused-vars */
    'use strict';

    if (typeof $ === 'undefined') {
        throw new Error('No JQuery found');
    }
    var localCounter = 0;

    function initCounters(localEl, globalEl) {
        localCounter = 0;
        localEl.text(localCounter);

        $.get('/get', function (data) {
            globalEl.text(data || 0);
        });
    };

    function incrementAndUpdate(localEl, globalEl) {
        localCounter++;
        localEl.text(localCounter);
        $.get('/click', function (data) {
            globalEl.text(data || 0);
        });
    }

    return {
        init: function() {
            var $localEl = $('#timesLocal'),
                $globalEl = $('#timesGlobal');
            initCounters($localEl,$globalEl);
            $('#incrementCtr').click(function() {
                incrementAndUpdate($localEl,$globalEl);
            });
        },
        incrementAndUpdate: incrementAndUpdate
    };
})();