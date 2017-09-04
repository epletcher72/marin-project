function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en'
    }, 'google_translate_element');
}

var quail = {
    open: "6-8",
    dogs: 1,
    fishing: false,
    hiking: true,
    Horseback_Riding: true,
    Mountain_Biking: false,
    kayaking: false
}

$.get('/actiive', quail, function success(data, textStatus) {
    console.log(data)
    console.log(textStatus)
});
