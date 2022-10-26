$(function(){
	
	var topDiv = $(".tabSet");
	var anchors = topDiv.find("ul.tabs a");
	var panelDivs = topDiv.find("div.panels > div.panel");
	
	anchors.show();
	panelDivs.hide();
	
	var lastAnchor = anchors.filter(".on");
	var lastPanel = $(lastAnchor.attr("href"));
	lastPanel.show();
	
	anchors.click(function(){
		var currentAnchor = $(this);
		var currentPanel = $(currentAnchor.attr("href"));
		
		lastPanel.hide();
		currentPanel.show();
		
		lastAnchor.removeClass("on");
		currentAnchor.addClass("on");
		
		lastAnchor = currentAnchor;
		lastPanel = currentPanel;
	})
	
})