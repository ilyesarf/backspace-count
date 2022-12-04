var storage = chrome.storage.sync;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        storage.set({"hits": request.hits});
        sendResponse({confirm: "done"});
    }
);