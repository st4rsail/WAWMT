var win = Titanium.UI.currentWindow;
win.barColor = '#111111';
win.backgroundImage = 'images/video2-bg.jpg';

var data = [
{title: 'Airfield'   , hasChild: true, leftImage: 'images/tiny/airfield.png'   , url: 'http://m.youtube.com/watch?v=qKfSzgXDcTY' },
{title: 'Asylum'     , hasChild: true, leftImage: 'images/tiny/asylum.png'     , url: 'http://m.youtube.com/watch?v=2p-QOL49gSU' },
{title: 'Castle'     , hasChild: true, leftImage: 'images/tiny/castle.png'     , url: 'http://m.youtube.com/watch?v=FHAX2GAZtZY' },
{title: 'Cliffside'  , hasChild: true, leftImage: 'images/tiny/cliffside.png'  , url: 'http://m.youtube.com/watch?v=qosG6CxRcB0' },
{title: 'Courtyard'  , hasChild: true, leftImage: 'images/tiny/courtyard.png'  , url: 'http://m.youtube.com/watch?v=9OKyx3o4ifc' },
{title: 'Dome'       , hasChild: true, leftImage: 'images/tiny/dome.png'       , url: 'http://m.youtube.com/watch?v=f8tycXUO71c' },
{title: 'Downfall'   , hasChild: true, leftImage: 'images/tiny/downfall.png'   , url: 'http://m.youtube.com/watch?v=69hLgWcABkM' },
{title: 'Hangar'     , hasChild: true, leftImage: 'images/tiny/hangar.png'     , url: 'http://m.youtube.com/watch?v=uMSCAUP52G0' },
{title: 'Makin'      , hasChild: true, leftImage: 'images/tiny/makin.png'      , url: 'http://m.youtube.com/watch?v=PZ7dXvNeo78' },
{title: 'Outskirts'  , hasChild: true, leftImage: 'images/tiny/outskirts.png'  , url: 'http://m.youtube.com/watch?v=5bo8QVqLJ0k' },
{title: 'Roundhouse' , hasChild: true, leftImage: 'images/tiny/roundhouse.png' , url: 'http://m.youtube.com/watch?v=o7WX-4_I5-w' },
{title: 'Seelow'     , hasChild: true, leftImage: 'images/tiny/seelow.png'     , url: 'http://m.youtube.com/watch?v=Vax7Bhsm88U' },
{title: 'Upheaval'   , hasChild: true, leftImage: 'images/tiny/upheaval.png'   , url: 'http://m.youtube.com/watch?v=ND80oP8Gtyo' }
];

var tableView = Titanium.UI.createTableView({
	data: data,
	headerTitle:'Internet connection is required to watch these videos.',
	backgroundColor: 'transparent'
});

function loadWebView(title, link) {
	var webView = Titanium.UI.createWebView({url: link, controls: true});
	var win = Titanium.UI.createWindow({title: title});
	win.barColor = '#111111';
	win.orientationModes = [
		Titanium.UI.PORTRAIT,
		Titanium.UI.LANDSCAPE_LEFT,
		Titanium.UI.LANDSCAPE_RIGHT
	];

	// web controls
	var bb2 = Titanium.UI.createButtonBar({
		labels:['Back', 'Reload', 'Forward'],
		backgroundColor:'#111'
	});
	var flexSpace = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	win.setToolbar([flexSpace,bb2,flexSpace]);
	webView.addEventListener('load',function(e)
	{
		Ti.API.debug("url = "+webView.url);
		Ti.API.debug("event url = "+e.url);
	});
	bb2.addEventListener('click',function(ce)
	{
		if (ce.index == 0)
		{
			webView.goBack();
		}
		else if (ce.index == 1)
		{
			webView.reload();
		}
		else
		{
			webView.goForward();
		}
	});
	// END of web controls

	win.add(webView);
	Titanium.UI.currentTab.open(win,{animated: true});
}

tableView.addEventListener('click', function(e)
{
	loadWebView(e.rowData.title ,e.rowData.url);
});

win.add(tableView);
