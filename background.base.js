chrome.webRequest.onBeforeRequest.addListener(
    function(info) {
        console.log("Cat intercepted: " + info.url);
        var optionsUrl = chrome.extension.getURL("blocked.html");
        return {
            redirectUrl: optionsUrl
        };
    },
    // filters
    {
        urls: [$URLS_SRC_GENERATED]
    },
    // extraInfoSpec
    ["blocking"]);
