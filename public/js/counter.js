'use strict';

function updateElements(localEl, globalEl)
{
    localEl.text(sessionStorage.localCounter);
    globalEl.text(sessionStorage.globalCounter);
}
function initCounters(localEl, globalEl)
{
    sessionStorage.localCounter = 0;
    $.get('/get',function(data) {
       sessionStorage.globalCounter = data ? data : 0;
    });
    updateElements(localEl,globalEl);
}

function incrementAndUpdate(localEl,globalEl) {
    sessionStorage.localCounter = 1 + parseInt(sessionStorage.localCounter,10);
    $.get('/click');
    $.get('/get', function(data) {
        sessionStorage.globalCounter = data ? data : 0;
    });
    updateElements(localEl,globalEl);
}