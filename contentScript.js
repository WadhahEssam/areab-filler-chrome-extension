console.log('areab extension is running');

///////////////////////////////////////////////////// Language Check /////////////////////////////////////////////////////////////
var oldLanguage = 2;
setInterval(function () {
  var currentLanguageSelect = document.querySelector('#page-wrapper > div.row.border-bottom.site-main-navbar > nav > ul > li:nth-child(1) > div > select');
  var currentLanguage = null;
  if (currentLanguageSelect !== null) {
    currentLanguage = currentLanguageSelect.selectedIndex;
  }
  if (oldLanguage != currentLanguage) {  
    if (currentLanguage == 1) {
      chrome.storage.sync.set({'language': 'arabic'}, function() {
        // nothing
      });
    } else {
      chrome.storage.sync.set({'language': 'english'}, function() {
        // nothing
      });
    }
  }
  oldLanguage = currentLanguage;
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
    value: "123ABC"
  },
  {
    type: "رقم الصك",
    value: "412405002777"
  },
  {
    type: "تاریخھ",
    value: "09/01/1440"
  },
  {
    type: "رمز العقار",
    value: "2015037"
  },
  {
    type: "صادر من",
    value: "المجمعة"
  },
  {
    type: "رقم الرخصة",
    value: "1/1218"
  },
  {
    type: "تاریخھا",
    value: "12/12/2019"
  },
  {
    type: "عمر العقار",
    value: "5"
  },
  {
    type: "طالب التقييم",
    value: "بنك الراجحي"
  },
  {
    type: "جوال صاحب الطلب",
    value: "0553748884"
  },
  {
    type: "إسم المالك",
    value: "بندر بن مطر بن مجري البديري"
  },
  {
    type: "هاتف العميل",
    value: "0535555305"
  },
  {
    type: "رقم المخطط",
    value: "1460"
  },
  {
    type: "رقم القطعة",
    value: "277"
  },
  {
    type: "شمال",
    value: "شارع عرض ١٥ متر"
  },
  {
    type: "طول",
    value: "21"
  },
  {
    type: "جنوب",
    value: "قطعة رقم ٢٧٥"
  },
  {
    type: "طول",
    value: "30"
  },
  {
    type: "شرق",
    value: "قطعة رقم ٢٧٨"
  },
  {
    type: "طول",
    value: "21"
  },
  {
    type: "غرب",
    value: "ممر مشاة عرض ٦ متر"
  },
  {
    type: "طول",
    value: "30"
  },
  {
    type: "أقرب شارع",
    value: "شارع الملك عبدالله"
  },
  {
    type: "الأحواش",
    value: "سراميك"
  },
  {
    type: "الإستقبال",
    value: "سراميك"
  },
  {
    type: "المدخل",
    value: "سراميك"
  },
  {
    type: "الغرف",
    value: "سراميك"
  },
  {
    type: "شمال",
    value: "طلاء"
  },
  {
    type: "جنوب",
    value: "طلاء"
  },
  {
    type: "شرق",
    value: "طلاء"
  },
  {
    type: "غرب",
    value: "طلاء"
  },
  {
    type: "نوع العزل",
    value: "حراري"
  },
  {
    type: "الأبواب الداخلیة",
    value: "خشبية"
  },
  {
    type: "الأبواب الخارجیة",
    value: "حديد"
  },
  {
    type: "عدد عدادات الكھرباء",
    value: "1"
  },
  {
    type: "رقم العداد",
    value: "82639948012"
  },
  {
    type: "عدد عدادات المیاه",
    value: "2"
  },
  {
    type: "رقم العداد",
    value: "1297840693846"
  },
  {
    type: "عدد الشقق",
    value: "3"
  },
  {
    type: "عدد المحلات التجاریة",
    value: "5"
  },
  {
    type: "إیجارھا",
    value: "10000"
  },
  {
    type: "إیجارھا",
    value: "20000"
  },
  {
    type: "أرض",
    value: "630"
  },
  {
    type: "أرض",
    value: "1000"
  },
  {
    type: "خط العرض",
    value: "20"
  },
  {
    type: "خط الطول",
    value: "50"
  },
  {
    type: "من الأعلى يساراً",
    value: "20"
  },
  {
    type: "من الأعلى يساراً",
    value: "80"
  },
  {
    type: "من الأعلى يميناً",
    value: "75"
  },
  {
    type: "من الأعلى يميناً",
    value: "31"
  },
  {
    type: "من الأسفل يساراً",
    value: "40"
  },
  {
    type: "من الأسفل يساراً",
    value: "55"
  },
  {
    type: "من الأسفل يميناً",
    value: "67"
  },
  {
    type: "من الأسفل يميناً",
    value: "70"
  },
];

var checkboxes = [
  'میاه',
  'صرف',
  'سلالم',
  'مصاعد',
  'حوائط حاملة',
  'داخل النطاق',
  'مسفلتة',
]

var radioButtons = [
  {
    name: 'caseOfEvaluation',
    value: 'new_building_with_spec_price',
  },
  {
    name: 'maintenance__radio',
    value: 'yes',
  },
  {
    name: 'legal_issues__radio',
    value: 'yes',
  },
  {
    name: 'concrete_ceiling__radio',
    value: 'yes',
  },
  {
    name: 'building_license__radio',
    value: 'no',
  },
  {
    name: 'ready_for_residence__radio',
    value: 'yes',
  },
  {
    name: 'property_inhabited__radio',
    value: 'no',
  },
]

var textareas = [
  {
    type: "افتراضي",
    value: "TEST"
  },
  {
    type: 'الرجاء التحديد',
    value: 'هناك معدات قديمة يجب اصلاحها'
  },
]

function isChecked(type) {
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].trim() == type.trim()) {
      return true;
    }
  }
  return false;
}

function getRadioValue(name) {
  for (var i =0; i < radioButtons.length; i++) {
    if (radioButtons[i].name.trim() == name.trim()) {
      return radioButtons[i].value;
    }
  }
  return null;
}

function changeMainNumber() {
  for (var i = 0; i < values.length; i++) {
    if (values[i].type.trim() == 'رقم التكليف') {
      values[i].value = Math.floor(Math.random() * 999999999) + "";
    }
  }
}

function getValue(type) {
  for (var i = 0; i < values.length; i++) {
    if (values[i].type.trim() == type.trim()) {
      var value = values[i].value;
      values.push(values.splice(i, 1)[0]);
      return value;
    }
  }
  // if it didin't find it will return the default value
  return values[0].value;
}

function getTextareaValue(type) {
  for (var i = 0; i < textareas.length; i++) {
    if (textareas[i].type.trim() == type.trim()) {
      var value = textareas[i].value;
      textareas.push(textareas.splice(i, 1)[0]);
      return value;
    }
  }
  // if it didin't find it will return the default value
  return textareas[0].value;
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


var isFilling = false;

function fillTask(id) {
  isFilling = true;
  setTimeout(function () {

    var allTasks = document.querySelectorAll('.link_task-create');
    allTasks[id-1].click();
    
    // اختيار ( إرسال ) ء
    document.getElementById('submit-task-extension').click();

    // في حالة تقییم عمارة سكنیة أو تجاریة یتم تحدید
    // comment it if you don't want it ( it has to be at the beggining )
    document.querySelector('input[type="checkbox"].labelMargin').click()

    // dealing with radio buttons ( this should be in the begginging ) 
    // because it opens new fields and text areas
    var allRadioButtons = document.querySelectorAll('input[type="radio"]');
    for (var i =0; i < allRadioButtons.length; i++) {
      var value = getRadioValue(allRadioButtons[i].name);
      if (value != null) {
        if (value == allRadioButtons[i].value) {
          allRadioButtons[i].click();
        }
      }
    }

    var allInputs = document.querySelectorAll('input.form-control');
    for (var i = 0; i < allInputs.length; i++) {
      var type = allInputs[i].parentElement.parentElement.children[0].textContent;
      var value = getValue(type);
      // console.log('type : ' + type + ' / value : ' + value);

      if (value == 'Date') {
        // console.log('this is a date');
        allInputs[i].click();
        var weeks = allInputs[i].parentElement.parentElement.parentElement.children[1].children[0].children[3].children[1].children;
        var days = weeks[weeks.length-1].children;
        var lastDay = days[days.length-1];
        lastDay.click();
      } 
      else {
        setNativeValue(allInputs[i],  value);
        allInputs[i].dispatchEvent(new Event('input', { bubbles: true }));
      }
    }

    // dealing with checkboxes
    var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < allCheckboxes.length; i++) {
      var checkboxType = allCheckboxes[i].parentElement.parentElement.textContent;
      if (isChecked(checkboxType)) {
        allCheckboxes[i].click();
      }
    }

    // dealting with text areas
    var allTextareas = document.querySelectorAll('textarea');
    for (var i = 0; i < allTextareas.length; i++) {
      var type = allTextareas[i].parentElement.textContent;
      var value = getTextareaValue(type);
      // console.log('type : ' + type + ' / value : ' + value);
      setNativeValue(allTextareas[i],  value);
      allTextareas[i].dispatchEvent(new Event('input', { bubbles: true }));
    }

    // المنطقة و المدينة و الحي
    document.getElementById('fill-regions').click();

    // fill all SELECT_INPUT vlues other than 
    // region , this is not customizable
    document.getElementById('fill-property-type').click();

    setTimeout(function () {
      document.querySelector('#page-wrapper > div.overflow-container > form > div > div.formButtons__cont > span > button').click();
    },1000);
    setTimeout(function () {
      document.querySelector('#body > div.swal2-container.swal2-center.swal2-fade.swal2-shown > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click();
    },2000);


    setTimeout(function () {

      // just go directly to the last one
      if (document.querySelector('.next') != null) {
        document.querySelectorAll('a')[document.querySelectorAll('a').length - 2].click();
      }
      setTimeout(function () {
        var allTasks = document.querySelectorAll('tr');

        allTasks[allTasks.length-1].children[14].children[0].click();

          setTimeout(function () {
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> to solve the date ( needs refactoring ) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            setTimeout(function () {
              document.getElementById('validate-task-extension').click();
            }, 1000)
            var allInputs = document.querySelectorAll('input.form-control');
            for (var i = 0; i < allInputs.length; i++) {
              var type = allInputs[i].parentElement.parentElement.children[0].textContent;
              var value = getValue(type);
              // console.log('type : ' + type + ' / value : ' + value);
  
              if (value == 'Date') {
                // console.log('this is a date');
                allInputs[i].click();
                var weeks = allInputs[i].parentElement.parentElement.parentElement.children[1].children[0].children[3].children[1].children;
                var days = weeks[weeks.length-1].children;
                var lastDay = days[days.length-1];
                lastDay.click();
              } 
              else {
                setNativeValue(allInputs[i],  value);
                allInputs[i].dispatchEvent(new Event('input', { bubbles: true }));
              }
            }
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            setTimeout(function () {
              document.querySelector('#page-wrapper > div.overflow-container > form > div > div.formButtons__cont > div > div:nth-child(2) > span > button').click();
              document.querySelector('#body > div.swal2-container.swal2-center.swal2-fade.swal2-shown > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click();
            }, 1200)
            setTimeout(function () {
              document.querySelector('#body > div.swal2-container.swal2-center.swal2-fade.swal2-shown > div > div.swal2-actions > button.swal2-cancel.swal2-styled').click();
            }, 1700)

            // going back to the all tasks page
            setTimeout(function() {
              // #side-menu > li:nth-child(4) > a
              document.querySelector('#side-menu > li:nth-child(4) > a').click();
              isFilling = false;
            }, 2200);
          }, 2000)

      }, 1000)
    }, 6000);
  }, 6000)

}

// this code will perform when you click the fill button
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  request.type);
      
      if (request.type == 'fill') {
        // في حالة تقییم عمارة سكنیة أو تجاریة یتم تحدید
        // comment it if you don't want it ( it has to be at the beggining )
        document.querySelector('input[type="checkbox"].labelMargin').click()

        // dealing with radio buttons ( this should be in the begginging ) 
        // because it opens new fields and text areas
        var allRadioButtons = document.querySelectorAll('input[type="radio"]');
        for (var i =0; i < allRadioButtons.length; i++) {
          var value = getRadioValue(allRadioButtons[i].name);
          if (value != null) {
            if (value == allRadioButtons[i].value) {
              allRadioButtons[i].click();
            }
          }
        }

        var allInputs = document.querySelectorAll('input.form-control');
        for (var i = 0; i < allInputs.length; i++) {
          var type = allInputs[i].parentElement.parentElement.children[0].textContent;
          var value = getValue(type);
          // console.log('type : ' + type + ' / value : ' + value);

          if (value == 'Date') {
            // console.log('this is a date');
            allInputs[i].click();
            var weeks = allInputs[i].parentElement.parentElement.parentElement.children[1].children[0].children[3].children[1].children;
            var days = weeks[weeks.length-1].children;
            var lastDay = days[days.length-1];
            lastDay.click();
          } 
          else {
            setNativeValue(allInputs[i],  value);
            allInputs[i].dispatchEvent(new Event('input', { bubbles: true }));
          }
        }

        document.querySelectorAll('input[type="checkbox"]')

        // dealing with checkboxes
        var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
        for (var i = 0; i < allCheckboxes.length; i++) {
          var checkboxType = allCheckboxes[i].parentElement.parentElement.textContent;
          if (isChecked(checkboxType)) {
            allCheckboxes[i].click();
          }
        }

        // dealting with text areas
        var allTextareas = document.querySelectorAll('textarea');
        for (var i = 0; i < allTextareas.length; i++) {
          var type = allTextareas[i].parentElement.textContent;
          var value = getTextareaValue(type);
          // console.log('type : ' + type + ' / value : ' + value);
          setNativeValue(allTextareas[i],  value);
          allTextareas[i].dispatchEvent(new Event('input', { bubbles: true }));
        }

        // المنطقة و المدينة و الحي
        document.getElementById('fill-regions').click();

        // fill all SELECT_INPUT vlues other than 
        // region , this is not customizable
        document.getElementById('fill-property-type').click();
      } 
      else if (request.type == 'fill-all'){
          document.querySelector('#side-menu > li:nth-child(4) > a').click();

          // for testing
          // fillTask(1);

          var count = 0;
          setInterval(function () {
            if (isFilling == false) {
              if (count == 91) {
                console.log('completed all the forms');
              } 
              else if (count == 4){
                count++;
                // console.log('this form is not working');
              }
              else {
                console.log('filling ' + (count+1) + '/91');
                // changing the random value so no two tasks can have the same number
                fillTask(count+1);
                count++;
                changeMainNumber();
                // console.log('value is ' + getValue('رقم التكليف'));
              }
            }
          }, 1000)
      }

  });
  