if (document.addEventListener) {
  DOMContentLoaded = function() {
    document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
    initSvejoButton();
  };
} else if (document.attachEvent) {
  DOMContentLoaded = function() {
    // Make sure body exists, at least, in case IE gets a little overzealous
    if (document.readyState === "complete") {
      document.detachEvent("onreadystatechange", DOMContentLoaded);
      initSvejoButton();
    }
  };
}

// Catch cases where $(document).ready() is called after the
// browser event has already occurred.
if (document.readyState === "complete") {
  // Handle it asynchronously to allow scripts the opportunity to delay ready
  setTimeout(initSvejoButton, 1);
}

// Mozilla, Opera and webkit nightlies currently support this event
if (document.addEventListener) {
  // Use the handy event callback
  document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
  // A fallback to window.onload, that will always work
  //window.addEventListener( "load", jQuery.ready, false );
  window.addEventListener("load", initSvejoButton, false);
  // If IE event model is used
} else if (document.attachEvent) {
  // ensure firing before onload,
  // maybe late but safe also for iframes
  document.attachEvent("onreadystatechange", DOMContentLoaded);
  // A fallback to window.onload, that will always work
  window.attachEvent("onload", initSvejoButton);
}

// Load Svejo Button
function initSvejoButton(){
  try {
    link = document.getElementById('svejo-button');
    link.innerHTML = "";
    link_data_url  = link.getAttribute("data-url");
    link_data_url  = encodeURIComponent(link_data_url);
    link_data_type = link.getAttribute("data-type");
    iframe = document.createElement("iframe");
    // new button render from inside the old one
    data_size = 'standard'
    if (link_data_type == 'standard') {
      data_size = 'vertical';
    }
    if (link_data_type == 'compact') {
      data_size = 'horizontal';
    }
    data_href = link_data_url
    iframe.setAttribute("src", "http://svejo.net/button/beta?href=" + data_href + "&size=" + data_size);
    //iframe.setAttribute("src", "http://svejo.net/button?type="+link_data_type+"&url="+link_data_url);
    //
    if (link_data_type == "standard") {
      iframe.setAttribute("width",  "51");
      iframe.setAttribute("height", "60");
      iframe.setAttribute("style", "border:0; overflow:hidden; width:51px; height:60px;");
    }
    if (link_data_type == "compact") {
      iframe.setAttribute("width", "100");
      iframe.setAttribute("height", "18");
      iframe.setAttribute("style", "border:0; overflow:hidden; width:100px; height:18px;");
    }
    iframe.setAttribute("allowtransparency", "true");
    iframe.setAttribute("frameBorder", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("tabindex", "0");
    link.parentNode.replaceChild(iframe, link);
  } catch(err) {
    // there is no button on page
    // do nothing
  }
}
