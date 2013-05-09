function handleClick(tab) {
  chrome.tabs.executeScript(null, { file: "javascript/jquery-2.0.0.min.js" }, function() {
    chrome.tabs.executeScript(null, {
      file: "javascript/highlight.js"
    });
  });
}

chrome.browserAction.onClicked.addListener(handleClick);
