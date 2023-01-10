let whitelist;
let blacklist;
let x;
try {
    chrome.storage.sync.get(whitelist, (a) => {
        whitelist = a.whitelist;
    });
} catch (exception) {
    const whitelist = ["cusd", "infinitecampus", "slides.google.com", "khanacademy.org", 
                "brainpop.com", "bim.easyaccessmaterials", "code.org", "w3schools", 
                "wikipedia.org", "stackoverflow", "clever.com", "quizlet.com", "blooket", 
                "quizz", "kahoot.it", "scratch.mit.edu", "gimkit", ".edu", ".gov", "google.com"]; 
    x = exception;
    chrome.storage.sync.set({
        whitelist: whitelist,
        blacklist: blacklist
    })
}
try {
    chrome.storage.sync.get(blacklist, (a) => {
        blacklist = a.blacklist;
    });
} catch {
    blacklist = ["scratch.mit.edu"];
    chrome.storage.sync.set({
        whitelist: whitelist,
        blacklist: blacklist
    })
}

let url;
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    const start = Date.now();
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        url = tabs[0].url;
    });
    console.log(url);
    for (let i = l = 0; i < whitelist.length; i++) {
        if (url && (url.toString().includes(whitelist[i]) && !(url.toString().includes(blacklist[i < blacklist.length ? i : blacklist.length - 1])))) {
            chrome.tabs.sendMessage(tabId, {
                block: false,
                url: url,
                whitelist: whitelist,
                blacklist: blacklist,
                t: start,
                id: tabId,
                x: x
            })
        } else if (url.toString().includes(blacklist[i < blacklist.length ? i : blacklist.length - 1])) {
            chrome.tabs.sendMessage(tabId, {
                block: true,
                url: url,
                whitelist: whitelist,
                blacklist: blacklist,
                t: start,
                id: tabId,
                x: x
            })
        } else {
            l++
        }
        if (l == whitelist.length) {
            chrome.tabs.sendMessage(tabId, {
                block: true,
                url: url,
                whitelist: whitelist,
                blacklist: blacklist,
                t: start,
                id: tabId,
                x: x
            })
        }
    }
})