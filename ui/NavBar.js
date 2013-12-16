function NavBar() {

	var self = Ti.UI.createView( { zIndex:600, top:0, height: 40, backgroundGradient:{type:'linear', colors:['#666666','#999999'], startPoint:{x:0,y:0}, endPoint:{x:'100%',y:'100%'}, backFillStart:true} } );
	
	var homeBtn = Titanium.UI.createButton({ 
		title:'Home', 
		width:50, 
	    height:20, 
	    style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
	    borderRadius:5, 
	    font:{fontSize:12,fontWeight:'bold'}, 
	    backgroundGradient:{type:'linear', colors:['#000001','#666666'], startPoint:{x:0,y:0}, endPoint:{x:2,y:50}, backFillStart:false}, 
	    borderWidth:1, 
	    borderColor:'#666',
	    left: 10,
	    top: 10,
	    zIndex: 650 
	    }); 	
	self.add(homeBtn);	
	
	homeBtn.addEventListener('click', function(e) {
		Ti.API.info('homeBtn fired');
		Ti.App.fireEvent('home.selected');	
	});
	
	this.view = self;
}

NavBar.prototype.getButtons = function()
{
	return this.view;	
}


module.exports = NavBar;
