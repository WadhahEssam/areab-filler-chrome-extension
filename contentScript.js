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
    value: "3401846309"
  },
  {
    type: "تاریخھ",
    value: "11/11/2019"
  },
  {
    type: "رمز العقار",
    value: "عقار ١٢ب"
  },
  {
    type: "صادر من",
    value: "الرياض - الدرعية"
  },
  {
    type: "رقم الرخصة",
    value: "1038741893071"
  },
  {
    type: "تاریخھا",
    value: "12/12/2019"
  },
  {
    type: "عمر العقار",
    value: "90"
  },
  {
    type: "طالب التقييم",
    value: "بنك الرباض"
  },
  {
    type: "جوال صاحب الطلب",
    value: "0553748884"
  },
  {
    type: "إسم المالك",
    value: "محمد"
  },
  {
    type: "هاتف العميل",
    value: "055958000"
  },
  {
    type: "رقم المخطط",
    value: "08236302"
  },
  {
    type: "رقم القطعة",
    value: "93799468"
  },
  {
    type: "شمال",
    value: "12"
  },
  {
    type: "طول",
    value: "12"
  },
  {
    type: "جنوب",
    value: "15"
  },
  {
    type: "طول",
    value: "15"
  },
  {
    type: "شرق",
    value: "17"
  },
  {
    type: "طول",
    value: "17"
  },
  {
    type: "غرب",
    value: "18"
  },
  {
    type: "طول",
    value: "18"
  },
  {
    type: "أقرب شارع",
    value: "شارع الملك عبدالله"
  },
  {
    type: "الأحواش",
    value: "بلاط"
  },
  {
    type: "الإستقبال",
    value: "سراميك"
  },
  {
    type: "المدخل",
    value: "بورسلان"
  },
  {
    type: "الغرف",
    value: "خشب"
  },
  {
    type: "شمال",
    value: "خرسانة"
  },
  {
    type: "جنوب",
    value: "خرسانة"
  },
  {
    type: "شرق",
    value: "خرسانة"
  },
  {
    type: "غرب",
    value: "خرسانة"
  },
  {
    type: "نوع العزل",
    value: "عادي"
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
    value: "10,000"
  },
  {
    type: "إیجارھا",
    value: "20,000"
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

function isChecked(type) {
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].trim() == type.trim()) {
      return true;
    }
  }
  return false;
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
      
      // في حالة تقییم عمارة سكنیة أو تجاریة یتم تحدید
      // comment it if you don't want it ( it has to be at the beggining )
      document.querySelector('input[type="checkbox"].labelMargin').click()

      var allInputs = document.querySelectorAll('input.form-control');
      for (var i = 0; i < allInputs.length; i++) {
        var type = allInputs[i].parentElement.parentElement.children[0].textContent;
        var value = getValue(type);
        console.log('type : ' + type + ' / value : ' + value);

        if (value == 'Date') {
          console.log('this is a date');
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

      // المنطقة و المدينة و الحي
      document.getElementById('fill-regions').click();

      // المنطقة و المدينة و الحي
      document.getElementById('fill-property-type').click();

  });
  
