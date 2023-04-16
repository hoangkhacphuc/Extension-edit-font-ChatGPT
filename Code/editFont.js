var body = document.getElementsByTagName("body")[0];

chrome.storage.sync.get(["font", "open"], function (items) {
    if (items.open) {
      document.body.style.fontFamily = items.font;
    }
  });
  