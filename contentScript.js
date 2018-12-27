console.log('hello this is perfectly working fine and everything is working as expected')

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                request.greeting);
      sendResponse({farewell: "this will appear in the popup console"});
  });