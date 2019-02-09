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
        urls: ["http://a.popin.cc/*", "https://a.popin.cc/*", "http://ads-twitter.com/*", "https://ads-twitter.com/*", "http://adservice.google.co.jp/*", "https://adservice.google.co.jp/*", "http://adservice.google.com/*", "https://adservice.google.com/*", "http://adsymptotic.com/*", "https://adsymptotic.com/*", "http://advertising.com/*", "https://advertising.com/*", "http://aid.send.microad.jp/*", "https://aid.send.microad.jp/*", "http://analytics.twitter.com/*", "https://analytics.twitter.com/*", "http://aw.dw.impact-ad.jp/*", "https://aw.dw.impact-ad.jp/*", "http://b.logly.co.jp/*", "https://b.logly.co.jp/*", "http://bigmining.com/*", "https://bigmining.com/*", "http://cdn.bigmining.com/*", "https://cdn.bigmining.com/*", "http://cm.g.doubleclick.net/*", "https://cm.g.doubleclick.net/*", "http://connect.facebook.net/*", "https://connect.facebook.net/*", "http://doubleclick.com/*", "https://doubleclick.com/*", "http://doubleclick.net/*", "https://doubleclick.net/*", "http://facebook.com/*", "https://facebook.com/*", "http://facebook.net/*", "https://facebook.net/*", "http://google-analytics.com/*", "https://google-analytics.com/*", "http://googletagmanager.com/*", "https://googletagmanager.com/*", "http://in.treasuredata.com/*", "https://in.treasuredata.com/*", "http://l.logly.co.jp/*", "https://l.logly.co.jp/*", "http://ogs.google.com/*", "https://ogs.google.com/*", "http://penta.a.one.impact-ad.jp/*", "https://penta.a.one.impact-ad.jp/*", "http://relay-dsp.ad-m.asia/*", "https://relay-dsp.ad-m.asia/*", "http://securepubads.g.doubleclick.net/*", "https://securepubads.g.doubleclick.net/*", "http://smartnews-ads.com/*", "https://smartnews-ads.com/*", "http://taboola.com/*", "https://taboola.com/*", "http://tshop.r10s.jp/*", "https://tshop.r10s.jp/*", "http://www.google-analytics.com/*", "https://www.google-analytics.com/*", "http://www.googletagmanager.com/*", "https://www.googletagmanager.com/*", "http://www.googletagservices.com/*", "https://www.googletagservices.com/*"]
    },
    // extraInfoSpec
    ["blocking"]);
