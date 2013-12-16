//Application Window Component Constructor
function ApplicationWindow() {
	
	//load component dependencies
	var FirstView = require('ui/FirstView');
	
	
				
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:false,
		exitOnClose:false
	});

	//construct UI
	var firstView = new FirstView();
	self.add(firstView);	 	
		
	return self;
}

/*
 * Aim to have only ONE window per application (single execution context) to avoid memory leak pitfalls 
 * https://wiki.appcelerator.org/x/I4CeAQ  
 */

//make constructor function the public component interface
module.exports = ApplicationWindow;

/*
 * See CommonJS references for definition / explanation of module.exports as of Titanium SDK 1.8
 * https://wiki.appcelerator.org/x/IYCeAQ
 */

