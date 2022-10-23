window.onload = function() {
	
      var sel = fm.site;
      
      for (let i = 0; i < sel.length; i++) {
         sel[i].onclick = function() {
            //alert(this.value);
            opener.frm.result.value = this.value;
         }
      }
}