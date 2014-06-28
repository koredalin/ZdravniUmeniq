function check(form) {
	
	var x = form.Email.value;
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if (form.Name.value == "" || form.SName.value == "" || form.City.value == ""  || form.Email.value == "" || !filter.test(x) || /*form.Phone.value == "" ||*/ form.Country.value == 0 || /*form.PostCode.value == "" || form.Address.value == "" ||*/ form.password.value == "" || form.password.value.length<6 || form.REPassword.value == "" || (form.REPassword.value != form.password.value  && form.REPassword.value != "" && form.password.value != "") /*|| (eval("form.Accept.checked") == false)*/) {
	/*  if (eval("form.Accept.checked") == false) {
		document.getElementById("cAccept").style.display='inline';
	  }else{
		document.getElementById("cAccept").style.display='none';		
	  }*/

	if (form.Name.value == "" ) {
		document.getElementById("cName").style.display='inline';
	  }else{
		document.getElementById("cName").style.display='none';
	  }
	  if (form.SName.value == "") {
		document.getElementById("cSName").style.display='inline';
	  }else{
		document.getElementById("cSName").style.display='none';
	  }

	  if (form.Email.value == "") {
		document.getElementById("cEmail").style.display='inline';
	  }else{
		document.getElementById("cEmail").style.display='none';
	  }	
	  if (!filter.test(x) ){
		document.getElementById("cEmail").style.display='inline';		
	  }else{
		document.getElementById("cEmail").style.display='none';		
	  }

	  /*if (form.Phone.value == "") {
		document.getElementById("cPhone").style.display='inline';	
	  }else{
		document.getElementById("cPhone").style.display='none';	
	  }*/

	  if (form.City.value == "") {
		document.getElementById("cCity").style.display='inline';	
	  }else{
		document.getElementById("cCity").style.display='none';	
	  }

	  if (form.Country.value == 0) {
		document.getElementById("cCountry").style.display='inline';
	  }else{
		document.getElementById("cCountry").style.display='none';
	  }
	 /* if (form.PostCode.value == "") {
		document.getElementById("cPostCode").style.display='inline';
	  }else{
		document.getElementById("cPostCode").style.display='none';
	  }	  
	  if (form.Address.value == "") {
		document.getElementById("cAddress").style.display='inline';
	  }else{
		document.getElementById("cAddress").style.display='none';
	  }*/
	  if (form.password.value == "" || form.password.value.length<6) {
		document.getElementById("cpassword").style.display='inline';
	  }else{
		document.getElementById("cpassword").style.display='none';
	  }
	 if (form.REPassword.value == "") {
		document.getElementById("cREPassword").style.display='inline';
	  }else{
		document.getElementById("cREPassword").style.display='none';
	  }
	 if (form.REPassword.value != form.password.value  && form.REPassword.value != "" && form.password.value != ""){
		document.getElementById("cPasswordStat").style.display='block';		
	  }else{
		document.getElementById("cPasswordStat").style.display='none';		
	  }	 
	 
		return false ;
} return true ;}


function showform(id){
		document.getElementById('f_form').style.display='block';
		document.getElementById('f_dlink').style.display='none';
}

function showterms(){
		document.getElementById('terms').style.display='block';
}

function checksend(form, ind) {
	
	var x = form.Email.value;
	var y = form.OtherEmail.value;

	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if ((form.Name && form.Name.value == "") || form.OtherName.value == "" || form.OtherEmail.value == "" || (form.Email && form.Email.value == "") || (form.Email &&  !filter.test(x)) || !filter.test(y) ) {

	if (form.Name && form.Name.value == "" ) {
		document.getElementById("cName").style.display='inline';
	  }else if(document.getElementById("cName")){
		document.getElementById("cName").style.display='none';
	  }

	  if (form.OtherName.value == "") {
		document.getElementById("cOtherName").style.display='inline';
	  }else{
		document.getElementById("cOtherName").style.display='none';
	  }

	 if (form.Email && form.Email.value == "") {
		document.getElementById("cEmail").style.display='inline';
	  }else if(document.getElementById("cEmail")){
		document.getElementById("cEmail").style.display='none';
	  }	
	  if (form.Email && !filter.test(x) ){
		document.getElementById("cEmail").style.display='inline';		
	  }else if(document.getElementById("cEmail")){
		document.getElementById("cEmail").style.display='none';		
	  }

	  if (form.OtherEmail.value == "") {
		document.getElementById("cOtherEmail").style.display='inline';
	  }else{
		document.getElementById("cOtherEmail").style.display='none';
	  }	
	  if (!filter.test(y) ){
		document.getElementById("cOtherEmail").style.display='inline';		
	  }else{
		document.getElementById("cOtherEmail").style.display='none';		
	  }
 
		return false ;
} return true ;}


function showform_article(id){
		document.getElementById('q_form').style.display='none';
		document.getElementById('f_form').style.display='none';
		document.getElementById('q_dlink').style.display='block';
		document.getElementById('f_dlink').style.display='block';
	if (id==1){
		document.getElementById('q_form').style.display='block';
		document.getElementById('q_dlink').style.display='none';
	} else if (id==2){
		document.getElementById('f_form').style.display='block';
		document.getElementById('f_dlink').style.display='none';
	}
}

function showform_calendar(){
		document.getElementById('r_dlink').style.display='none';
		document.getElementById('r_form').style.display='block';
}

function showform_p_section(){
		document.getElementById('f_form').style.display='block';
		document.getElementById('q_dlink').style.display='none';

}

function showformBook(id){
		document.getElementById('q_form').style.display='none';
		document.getElementById('f_form').style.display='none';
		document.getElementById('faq_list').style.display='none';
		document.getElementById('q_dlink').style.display='block';
		document.getElementById('f_dlink').style.display='block';
		document.getElementById('faq_link').style.display='block';
	if (id==1){
		document.getElementById('q_form').style.display='block';
		document.getElementById('q_dlink').style.display='none';
	} else if (id==2){
		document.getElementById('f_form').style.display='block';
		document.getElementById('f_dlink').style.display='none';
	} else if (id==3){
		document.getElementById('faq_list').style.display='block';
		document.getElementById('faq_link').style.display='none';
	}
}

function showform_blog(id){
	if(id!=3)
	{
		document.getElementById('c_list').style.display='none';
		document.getElementById('f_form').style.display='none';
		document.getElementById('c_dlink').style.display='block';
		document.getElementById('f_dlink').style.display='block';
	}
	if (id==1){
		document.getElementById('c_list').style.display='block';
		document.getElementById('c_dlink').style.display='none';
	} else if (id==2){
		document.getElementById('f_form').style.display='block';
		document.getElementById('f_dlink').style.display='none';
	}else if (id==3){
		document.getElementById('q_form').style.display='block';
		document.getElementById('c_dlink').style.display='none';
	}

	
}

function showform_q(){
	document.getElementById('q_form').style.display='block';
	document.getElementById('q_dlink').style.display='none';
}

function show_newsletter(){
	document.getElementById('newsletter_form').style.display='block';
	document.getElementById('newsletter_link').style.display='none';
}


function checksubscribe(form, ind) {
	
	var x = form.Email.value;

	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if ((form.Name && form.Name.value == "") || (form.Email && form.Email.value == "") || (form.Email &&  !filter.test(x)) || !filter.test(y) || (form.Country && form.Country.value == "")) {

	if (form.Name && form.Name.value == "" ) {
		document.getElementById("cName").style.display='inline';
	  }else if(document.getElementById("cName")){
		document.getElementById("cName").style.display='none';
	  }
	 if (form.Email && form.Email.value == "") {
		document.getElementById("cEmail").style.display='inline';
	  }else if(document.getElementById("cEmail")){
		document.getElementById("cEmail").style.display='none';
	  }	
	  if (form.Email && !filter.test(x) ){
		document.getElementById("cEmail").style.display='inline';		
	  }else if(document.getElementById("cEmail")){
		document.getElementById("cEmail").style.display='none';		
	  }
	 if (form.Country && form.Country.value == "") {
		document.getElementById("cCountry").style.display='inline';
	  }else if(document.getElementById("cEmail")){
		document.getElementById("cCountry").style.display='none';
	  }	
 
		return false ;
} return true ;}


function checkfounderror(form, ind) {
	
	var x = form.Email.value;

	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if ((form.Name && form.Name.value == "") || (form.Email && form.Email.value == "") || (form.Email &&  !filter.test(x)) || !filter.test(y) || (form.Description && form.Description.value == "")	 || (form.ErrorUrl && form.ErrorUrl.value == "")
) {

	if (form.Name && form.Name.value == "" ) {
		document.getElementById("cName").style.display='inline';
	  }else if(document.getElementById("cName")){
		document.getElementById("cName").style.display='none';
	  }
	if (form.Description && form.Description.value == "" ) {
		document.getElementById("cDescription").style.display='inline';
	  }else if(document.getElementById("cDescription")){
		document.getElementById("cDescription").style.display='none';
	  }
	if (form.ErrorUrl && form.ErrorUrl.value == "" ) {
		document.getElementById("cErrorUrl").style.display='inline';
	  }else if(document.getElementById("cErrorUrl")){
		document.getElementById("cErrorUrl").style.display='none';
	  }
	 if (form.Email && form.Email.value == "") {
		document.getElementById("cEmail").style.display='inline';
	  }else if(document.getElementById("cEmail")){
		document.getElementById("cEmail").style.display='none';
	  }	
	  if (form.Email && !filter.test(x) ){
		document.getElementById("cEmail").style.display='inline';		
	  }else if(document.getElementById("cEmail")){
		document.getElementById("cEmail").style.display='none';		
	  }
 
		return false ;
} return true ;}

function langs(control)	{	if (control == 1)	{document.getElementById('langs').style.display='block';}
							else 				{document.getElementById('langs').style.display='none';}
						}

function checkprofile(form) {
	
	var x = form.Email.value;
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if (form.Name.value == "" || form.SName.value == "" || form.City.value == "" || form.Email.value == "" || !filter.test(x) /*|| form.Phone.value == ""*/ || form.Country.value == 0 /*|| form.PostCode.value == "" || form.Address.value == ""*/  || (form.password.value.length<6 && form.password.value!='') || (form.REPassword.value == "" && form.password.value!='')|| (form.REPassword.value != form.password.value  && form.REPassword.value != "" && form.password.value != "")) {




	if (form.Name.value == "" ) {
		document.getElementById("cName").style.display='inline';
	  }else{
		document.getElementById("cName").style.display='none';
	  }
	  if (form.SName.value == "") {
		document.getElementById("cSName").style.display='inline';
	  }else{
		document.getElementById("cSName").style.display='none';
	  }

	  if (form.Email.value == "") {
		document.getElementById("cEmail").style.display='inline';
	  }else{
		document.getElementById("cEmail").style.display='none';
	  }	
	  if (!filter.test(x) ){
		document.getElementById("cEmail").style.display='inline';		
	  }else{
		document.getElementById("cEmail").style.display='none';		
	  }
/*
	  if (form.Phone.value == "") {
		document.getElementById("cPhone").style.display='inline';	
	  }else{
		document.getElementById("cPhone").style.display='none';	
	  }
*/
	  if (form.City.value == "") {
		document.getElementById("cCity").style.display='inline';	
	  }else{
		document.getElementById("cCity").style.display='none';	
	  }

	  if (form.Country.value == 0) {
		document.getElementById("cCountry").style.display='inline';
	  }else{
		document.getElementById("cCountry").style.display='none';
	  }
/*	  if (form.PostCode.value == "") {
		document.getElementById("cPostCode").style.display='inline';
	  }else{
		document.getElementById("cPostCode").style.display='none';
	  }	  
	  if (form.Address.value == "") {
		document.getElementById("cAddress").style.display='inline';
	  }else{
		document.getElementById("cAddress").style.display='none';
	  }*/
	  if (form.password.value!='' || (form.password.value.length<6 && form.password.value!='')) {
		document.getElementById("cpassword").style.display='inline';
	  }else{
		document.getElementById("cpassword").style.display='none';
	  }
	 if (form.REPassword.value == "" && form.password.value!='') {
		document.getElementById("cREPassword").style.display='inline';
	  }else{
		document.getElementById("cREPassword").style.display='none';
	  }
	 if (form.REPassword.value != form.password.value  && form.REPassword.value != "" && form.password.value != ""){
		document.getElementById("cPasswordStat").style.display='block';		
	  }else{
		document.getElementById("cPasswordStat").style.display='none';		
	  }	 
	 
		return false ;
} return true ;}




function checkorder(form) {
	
	var x = form.Email.value;
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if (form.Name.value == "" || form.Fname.value == "" || form.City.value == "" || form.Email.value == "" || !filter.test(x) || form.Phone.value == "" || form.PostCode.value == "" || form.Address.value == "" ) {


	if (form.Name.value == "" ) {
		document.getElementById("cName").style.display='inline';
	  }else{
		document.getElementById("cName").style.display='none';
	  }
	  if (form.Fname.value == "") {
		document.getElementById("cFname").style.display='inline';
	  }else{
		document.getElementById("cFname").style.display='none';
	  }
	  if (form.City.value == "") {
		document.getElementById("cCity").style.display='inline';
	  }else{
		document.getElementById("cCity").style.display='none';
	  }
	  if (form.Email.value == "") {
		document.getElementById("cEmail").style.display='inline';
	  }else{
		document.getElementById("cEmail").style.display='none';
	  }	
	  if (!filter.test(x) ){
		document.getElementById("cEmail").style.display='inline';		
	  }else{
		document.getElementById("cEmail").style.display='none';		
	  }

	  if (form.Phone.value == "") {
		document.getElementById("cPhone").style.display='inline';	
	  }else{
		document.getElementById("cPhone").style.display='none';	
	  }

	  if (form.PostCode.value == "") {
		document.getElementById("cPostCode").style.display='inline';
	  }else{
		document.getElementById("cPostCode").style.display='none';
	  }	  
	  if (form.Address.value == "") {
		document.getElementById("cAddress").style.display='inline';
	  }else{
		document.getElementById("cAddress").style.display='none';
	  }
	 
		return false ;
} return true ;}

function checkquestionform(form){
	  if (form.Question.value == "") {
		document.getElementById("cQuestion").style.display='inline';
		return false ;
	  }else{
		document.getElementById("cQuestion").style.display='none';
		return true ;
	  }
}

function f_show_hide(id){
	var show = document.getElementById(id).style.display;
	if (show=='none'){
		document.getElementById(id).style.display = 'block';
	}
	else if (show=='block')
	{
		document.getElementById(id).style.display = 'none';
	}
}