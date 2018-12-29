var fillButton = document.getElementById('fill-button');
var languageWanring = document.getElementById('change-language-warning');

fillButton.addEventListener('click', function () {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "( this will appear in the browser console )"}, function(response) {
      // console.log(response.farewell);
    });
  });
})


chrome.storage.sync.get(['language'], function(result) {
  if (result.language == 'arabic') {
    languageWanring.style.display = 'none';
  } else {
    languageWanring.style.display = 'block';
  }
});

setInterval(function () {
  chrome.storage.sync.get(['language'], function(result) {
    if (result.language == 'arabic') {
      languageWanring.style.display = 'none';
    } else {
      languageWanring.style.display = 'block';
    }
  });
}, 500)
