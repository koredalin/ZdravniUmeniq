(function(){
  
  // Define Encoder
  function encoder(str) {
    // encode the characters that bugs the test case
    str = str.replace(/\+/g, '%2B');
    str = str.replace(/&amp;/g,'%26');
    str = str.replace(/&/g , '%26');
    // URI safe encoding
    str = encodeURIComponent(str);
    // repace chars to sync with Ruby URI.encode/decode
    str = str.replace(/%2F/g,'/');
    // return a URL Safe string
    return str
  }
  
  function text_encoder(str) {
    str = str.replace(/%/g , '%25');
    str = encodeURIComponent(str);
    return str
  }
  
  
  // what's the skin ?
  var sk = svejo_skin  || '';
  
  // button dimensions depending on the skin
  var h;
  var w;
  switch(sk) {
    
    case 'compact' :
      h=25;
      w=100;
      break;
      
    default :
      h=65;
      w=55
      break;
    }
  
  // what's the url ?
  var url       = encoder(svejo_url || window.location.href);
  //var friend    = encoder(window.location.href);
  
  //if (typeof svejo_title=='string') {
  //  svejo_title = text_encoder(svejo_title);
  //} else {
  //  svejo_title = text_encoder(document.title);
  //}
  
  //if (typeof svejo_summary=='string') {
  //  svejo_summary = text_encoder(svejo_summary);
  //}
  
  // place the button
  document.write("<iframe src='http://svejo.net/tools/button?url="
      + url
    + (typeof svejo_theme    =='string'? ("&amp;theme="    + svejo_theme)    :'')
    + (sk?("&amp;svejo_skin="+sk):'')
    + (typeof site_charset   =='string'? ("&amp;charset="  + site_charset)   :'')
    + (typeof svejo_bgcolor  =='string'? ("&amp;bgcolor="  + svejo_bgcolor)  :'')
    + "' height='"
      + h
    + "' width='"
      + w
    + "' frameborder='0' scrolling='no'></iframe>");
})()
