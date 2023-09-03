var headerPlaceholder = document.getElementById("header");
var footerPlaceholder = document.getElementById("footer");
var mainContent = document.querySelector("section.main");
var xhrHeader = new XMLHttpRequest();
var xhrFooter = new XMLHttpRequest();
var partialheaderURL = "partials/header.html";
var partialfooterURL = "partials/footer.html";

xhrHeader.onreadystatechange = function () {
  if (xhrHeader.readyState === 4 && xhrHeader.status === 200) {
    headerPlaceholder.innerHTML = xhrHeader.responseText;
    var headerHeight = headerPlaceholder.clientHeight;
    mainContent.style.height = "calc(100vh - " + headerHeight + "px)";
    console.log({ headerHeight });
  }
};

xhrFooter.onreadystatechange = function () {
  if (xhrFooter.readyState === 4 && xhrFooter.status === 200) {
    footerPlaceholder.innerHTML = xhrFooter.responseText;
  }
};

xhrHeader.open("GET", partialheaderURL, true);
xhrFooter.open("GET", partialfooterURL, true);

xhrHeader.send();
xhrFooter.send();
