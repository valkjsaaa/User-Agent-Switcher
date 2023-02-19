chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((details) => {
    console.log("Rule matched: ", details);
});
console.log("background.js loaded");
