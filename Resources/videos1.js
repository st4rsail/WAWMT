var win = Titanium.UI.currentWindow;
win.barColor = '#111111';
win.backgroundImage = 'images/video1-bg.jpg';

var data = [
{title: 'Airfield'   , hasChild: true, leftImage: 'images/tiny/airfield.png'   , url: 'http://m.youtube.com/watch?v=2AzDvnneBvM' },
{title: 'Asylum'     , hasChild: true, leftImage: 'images/tiny/asylum.png'     , url: 'http://m.youtube.com/watch?v=HQD26bwer0k' },
{title: 'Castle'     , hasChild: true, leftImage: 'images/tiny/castle.png'     , url: 'http://m.youtube.com/watch?v=zF0hUwkPNQk' },
{title: 'Cliffside'  , hasChild: true, leftImage: 'images/tiny/cliffside.png'  , url: 'http://m.youtube.com/watch?v=XNgkcyhJwW4' },
{title: 'Courtyard'  , hasChild: true, leftImage: 'images/tiny/courtyard.png'  , url: 'http://m.youtube.com/watch?v=vpGvgDWR6mQ' },
{title: 'Dome'       , hasChild: true, leftImage: 'images/tiny/dome.png'       , url: 'http://m.youtube.com/watch?v=3e9-swCl_UQ' },
{title: 'Downfall'   , hasChild: true, leftImage: 'images/tiny/downfall.png'   , url: 'http://m.youtube.com/watch?v=s72GCDwaEFE' },
{title: 'Hangar'     , hasChild: true, leftImage: 'images/tiny/hangar.png'     , url: 'http://m.youtube.com/watch?v=gHL6EwksGLg' },
{title: 'Makin'      , hasChild: true, leftImage: 'images/tiny/makin.png'      , url: 'http://m.youtube.com/watch?v=fNVk_MsFEFI' },
{title: 'Outskirts'  , hasChild: true, leftImage: 'images/tiny/outskirts.png'  , url: 'http://m.youtube.com/watch?v=xPXC_h_z_7U' },
{title: 'Roundhouse' , hasChild: true, leftImage: 'images/tiny/roundhouse.png' , url: 'http://m.youtube.com/watch?v=h_XNE1Pmlyo' },
{title: 'Seelow'     , hasChild: true, leftImage: 'images/tiny/seelow.png'     , url: 'http://m.youtube.com/watch?v=bKUG798u6Ck' },
{title: 'Upheaval'   , hasChild: true, leftImage: 'images/tiny/upheaval.png'   , url: 'http://m.youtube.com/watch?v=KyZXF9POZpU' }
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
