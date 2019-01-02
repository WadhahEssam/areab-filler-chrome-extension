var fillButton = document.getElementById('fill-button');
var fillAllButton = document.getElementById('fill-all-button');
var languageWanring = document.getElementById('change-language-warning');

fillButton.addEventListener('click', function () {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: "fill"}, function(response) {
      console.log('message received');
    });
  });
})

fillAllButton.addEventListener('click', function () {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: "fill-all"}, function(response) {
      console.log('message received');
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
