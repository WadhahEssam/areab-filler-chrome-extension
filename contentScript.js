console.log('hello this is perfectly working fine and everything is working as expected')

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

// things i will have to do tomorrow 
// check the all the types 
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  request.greeting);


      // this will print the label of the input
      console.log(document.querySelector('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(5) > div:nth-child(1) > div > input').parentElement.parentElement.children[0].textContent);

      // رقم التكليف
      var element = document.querySelector('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(2) > div:nth-child(1) > div > input')
      setNativeValue(element,  Math.floor(Math.random() * 9999999) + "");
      element.dispatchEvent(new Event('input', { bubbles: true }));

      // رمز العقار
      var element = document.querySelector('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(2) > div:nth-child(2) > div > input')
      setNativeValue(element,  "رمز العقار");
      element.dispatchEvent(new Event('input', { bubbles: true }));

      // تاريخ التكليف
      document.querySelector('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(2) > div:nth-child(3) > div > div.react-datepicker-wrapper > div > input').click();
      document.querySelector('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(2) > div:nth-child(3) > div > div.react-datepicker-popper > div > div.react-datepicker__month-container > div.react-datepicker__month > div:nth-child(2) > div.react-datepicker__day.react-datepicker__day--tue').click();

      // تاريخ التسليم
      document.querySelector('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(2) > div:nth-child(4) > div > div > div > div > input').click();
      document.querySelector('#page-wrapper > div.overflow-container > form > div > div.row.ibox-content.arabic > div.formSection.property_data > div:nth-child(2) > div:nth-child(4) > div > div > div.react-datepicker-popper > div > div.react-datepicker__month-container > div.react-datepicker__month > div:nth-child(5) > div.react-datepicker__day.react-datepicker__day--sat.react-datepicker__day--weekend').click();


      // المنطقة و المدينة و الحي
      document.getElementById('fill-regions').click()

      sendResponse({farewell: "this will appear in the popup console"});
  });
  
