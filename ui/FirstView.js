//FirstView Component Constructor
function FirstView() {	
		
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView(); //
	
	var ourURL = 'http://g2lnxdev.com/gumbo/'; 
	
	var wView = Ti.UI.createWebView({
		url:ourURL,
		center:'50%',
		top:40,
		width:'100%',
		height:'100%'
	});	
	
	var NavBar = require('ui/NavBar');
	var navBar = new NavBar();	 
	self.add(navBar.getButtons());
	navBar.getButtons().show();
	
	Ti.App.addEventListener('home.selected', function(){
		//alert('home clicked');
		wView.goBack();
	});		

	wView.reload();
	self.add(wView);
	

	var LoadingIndicator = require('ui/LoadingIndicator'); 
	var loadingIndicator = new LoadingIndicator();
	loadingIndicator.hide();
	self.add(loadingIndicator);
	return self;
}

module.exports = FirstView;



