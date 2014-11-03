
/*eslint-disable no-unused-vars, wrap-iife */
//used in the HTML file

var counter = (function() {
/*eslint-enable no-unused-vars */
    'use strict';

    if (typeof $ === 'undefined') {
        throw new Error('No JQuery found');
    }
    var localCounter = 0;

    function setContent(element, value)
    {
        element.text(value);
    }

    var initCounters = function initCounters(localEl, globalEl) {
        localCounter = 0;
        setContent(localEl, localCounter);
        setContent(globalEl,'?');

        $.get('/get', function (data) {
            setContent(globalEl, data || 0);
        });
    };

    function incrementAndUpdate(localEl, globalEl) {
        localCounter = 1 + parseInt(localCounter, 10);
        setContent(localEl,localCounter);
        $.get('/click', function (data) {
            setContent(globalEl, data || 0);
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
        incrementAndUpdate: incrementAndUpdate,
        initCounters: initCounters
    };
})();