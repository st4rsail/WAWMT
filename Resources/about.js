var win = Titanium.UI.currentWindow;
var tabGroup = win.tabGroup;
win.barColor = '#111111';

var aboutView = Titanium.UI.createView({
	title: 'About'
	// backgroundImage: 'images/bg.jpg'
});

var aboutWebView = Titanium.UI.createWebView({url: 'about.html'});

win.add(aboutWebView);
