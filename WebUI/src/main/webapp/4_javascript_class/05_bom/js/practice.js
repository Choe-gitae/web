window.onload = function() {
	
   winObj = window.open("9_sub.html","","width=500,height=500");
   var sel = document.frm.city;
   sel.onchange=function(){
      //alert("OK");
      winObj.fm.result.value = sel.value;
   }
   
}