console.log('areab extension is running');

///////////////////////////////////////////////////// Language Check /////////////////////////////////////////////////////////////
setInterval(function () {
  var language = document.querySelector('#page-wrapper > div.row.border-bottom.site-main-navbar > nav > ul > li:nth-child(1) > div > select').selectedIndex;
  if (language == 1) {
    chrome.storage.sync.set({'language': 'arabic'}, function() {
      // nothing
    });
  } else {
    chrome.storage.sync.set({'language': 'english'}, function() {
      // nothing
    });
  }
}, 1000);
/////////////////////////////////////////////////////////// Values ///////////////////////////////////////////////////////////////
var values = [
  {
    type: "افتراضي",
    value: "TEST"
  },
  {
    type: "",
    value: "Date"
  },
  {
    type: "رقم التكليف",
    value: Math.floor(Math.random() * 9999999) + ""
  },
  {
    type: "رمز العقار",
    value: "رمز العقاار"
  },
];


function getValue(type) {
  for (var i = 0; i < values.length; i++) {
    if (values[i].type.trim() == type.trim()) {
      console.log(values[i].value);
      return (values[i].value);
    }
  }
  // if it didin't find it will return the default value
  return values[0].value;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function setNativeValue(element, value) {
  const { set: valueSetter } = Object.getOwnPropertyDescriptor(element, 'value') || {}
  const prototype = Object.getPrototypeOf(element)
  const { set: prototypeValueSetter } = Object.getOwnPropertyDescriptor(prototype, 'value') || {}

  if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value)
  } else if (valueSetter) {
    valueSetter.call(element, value)
  } else {
    throw new Error('The given element does not have a value setter')
  }
}

// this code will perform when you click the fill button
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  request.greeting);
      
      var allInputs = document.querySelectorAll('input.form-control');
      for (var i = 0; i < allInputs.length; i++) {
        var type = allInputs[i].parentElement.parentElement.children[0].textContent;
        var value = getValue(type);
        console.log('type : ' + type + ' / value : ' + value);

        if (value == 'Date') {
          console.log('this is a date');
          allInputs[i].click();
          var weeks = allInputs[i].parentElement.parentElement.parentElement.children[1].children[0].children[3].children[1].children;
          var days = weeks[weeks.length - 1].children;
          var lastDay = days[days.length-1];
          lastDay.click();
        } 
        else {
          setNativeValue(allInputs[i],  value);
          allInputs[i].dispatchEvent(new Event('input', { bubbles: true }));
        }
      }

      // المنطقة و المدينة و الحي
      document.getElementById('fill-regions').click()

      sendResponse({farewell: "this will appear in the popup console"});
  });
  
