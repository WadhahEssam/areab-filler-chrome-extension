document.getElementById('fill-button').addEventListener('click', function () {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "( this will appear in the browser console )"}, function(response) {
      // console.log(response.farewell);
    });
  });
})

setInterval(function () {
  chrome.storage.sync.get(['language'], function(result) {
    console.log('language currently is ' + result.language);
  });
}, 1000)
