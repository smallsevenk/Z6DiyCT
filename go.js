﻿(function () {
    chrome.tabs.getCurrent(function (tab) {
        chrome.tabs.update(tab.id, {
            'url': 'https://www.baidu.com/',
            'selected': true
        });
    });
})();
