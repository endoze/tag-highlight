function handleClick(tab) {
  chrome.tabs.executeScript(null, { file: "jquery-2.0.0.min.js" }, function() {
    chrome.tabs.executeScript(null, {
      file: "highlight.js"
    });
  });
}

chrome.browserAction.onClicked.addListener(handleClick);
