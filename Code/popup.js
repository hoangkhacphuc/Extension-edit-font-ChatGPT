// This file is used to control the popup.html file

// Handle the click event on the status button

var open = document.getElementById('status');
var fontSelect = document.getElementById('font-select');
var save = document.getElementById('btn-save-config');
var demo_font = document.getElementById('demo-font');

fontSelect.addEventListener('change', function (e) {
    e.preventDefault();
    demo_font.style.fontFamily = this.value;
});

open.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('active');
});

// Handling data when opening popup

var settingDefault = {
    font: 'Arial',
    open: false
}

var setting = {};

chrome.storage.sync.get(settingDefault, function (items) {
    if (items) {
        setting = items;
    }
    else {
        setting = settingDefault;
        chrome.storage.sync.set(settingDefault, function () {
            console.log('Default setting saved');
        });
    }
    fontSelect.value = setting.font;
    demo_font.style.fontFamily = setting.font;
    if (setting.open) {
        open.classList.add('active');
    }
    else {
        open.classList.remove('active');
    }
    console.log(setting);
});


// Handle the click event on the save button

save.addEventListener('click', function (e) {
    e.preventDefault();
    setting.font = fontSelect.value;
    setting.open = open.classList.contains('active');
    chrome.storage.sync.set(setting, function () {
        console.log('Setting saved');
    });

    // Close the popup
    window.close();
});