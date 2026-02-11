document.getElementById('launchBtn').addEventListener('click', () => {
  // Opens a new "focused" window to the site of your choice
  chrome.windows.create({
    url: "https://www.google.com",
    type: "popup", // Removes the toolbar/address bar for a 'clean' app look
    focused: true
  });
});

// This part 'lies' to websites about your browser (User-Agent Spoofing)
chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [{
    "id": 1,
    "priority": 1,
    "action": {
      "type": "modifyHeaders",
      "requestHeaders": [
        { "header": "user-agent", "operation": "set", "value": "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0" }
      ]
    },
    "condition": { "urlFilter": "*", "resourceTypes": ["main_frame"] }
  }],
  removeRuleIds: [1]
});