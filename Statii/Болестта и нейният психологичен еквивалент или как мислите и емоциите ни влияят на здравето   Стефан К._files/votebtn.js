function urlencode(str) {
str = str.replace(/\+/g, '%2B');
str = str.replace(/&amp;/g,'%26');
str = str.replace(/&/g , '%26');
str = encodeURIComponent(str);
str = str.replace(/%2F/g,'/');
return str
}
function tblwidget(){
tblstr="";
if(window.col1)tblstr+="&col1="+col1;
if(window.blog_id)blog_id=parseInt(window.blog_id);else blog_id=0;
if(window.url)url=urlencode(window.url);else return;
if(!window.btntype)btntype = 1;
sizes={1:[65,34],2:[65,34],3:[53,27],4:[108,16],5:[87,61],6:[135,18],7:[100,25],8:[100,25],9:[55,65],10:[200,34]};
tblstr=tblstr.replace(/#/g,'');
if(window.tblwho){tblstr+='&who=1';$sza=280;}else{$sza=0;}
document.write("<iframe src='http://topbloglog.com/vote-button.php?type="+btntype+"&blog_id="+blog_id+tblstr+"&url="+
url+"' height='"+sizes[btntype][1]+"' width='"+($sza+sizes[btntype][0])+"' frameborder='0' scrolling='no'></iframe>");
}
tblwidget();
