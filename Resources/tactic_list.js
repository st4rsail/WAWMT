var win = Titanium.UI.currentWindow;
var tabGroup = win.tabGroup;
win.barColor = '#111111';

var data = [
	{title: 'Airfield'   , hasChild: true, leftImage: 'images/tiny/airfield.png'   , url: 'tactics/airfield.html'   },
	{title: 'Asylum'     , hasChild: true, leftImage: 'images/tiny/asylum.png'     , url: 'tactics/asylum.html'     },
	{title: 'Castle'     , hasChild: true, leftImage: 'images/tiny/castle.png'     , url: 'tactics/castle.html'     },
	{title: 'Cliffside'  , hasChild: true, leftImage: 'images/tiny/cliffside.png'  , url: 'tactics/cliffside.html'  },
	{title: 'Courtyard'  , hasChild: true, leftImage: 'images/tiny/courtyard.png'  , url: 'tactics/courtyard.html'  },
	{title: 'Dome'       , hasChild: true, leftImage: 'images/tiny/dome.png'       , url: 'tactics/dome.html'       },
	{title: 'Downfall'   , hasChild: true, leftImage: 'images/tiny/downfall.png'   , url: 'tactics/downfall.html'   },
	{title: 'Hangar'     , hasChild: true, leftImage: 'images/tiny/hangar.png'     , url: 'tactics/hangar.html'     },
	{title: 'Makin'      , hasChild: true, leftImage: 'images/tiny/makin.png'      , url: 'tactics/makin.html'      },
	{title: 'Outskirts'  , hasChild: true, leftImage: 'images/tiny/outskirts.png'  , url: 'tactics/outskirts.html'  },
	{title: 'Roundhouse' , hasChild: true, leftImage: 'images/tiny/roundhouse.png' , url: 'tactics/roundhouse.html' },
	{title: 'Seelow'     , hasChild: true, leftImage: 'images/tiny/seelow.png'     , url: 'tactics/seelow.html'     },
	{title: 'Upheaval'   , hasChild: true, leftImage: 'images/tiny/upheaval.png'   , url: 'tactics/upheaval.html'   }
];

var tableView = Titanium.UI.createTableView({
	data: data,
	backgroundColor: 'transparent'
});

tableView.addEventListener('click', function(e)
{
	var webView = Titanium.UI.createWebView({url: e.rowData.url});
	var win = Titanium.UI.createWindow({title: 'Tactics'});
	win.barColor = '#111111';
	win.backgroundImage = 'images/tactic-bg.jpg';
	win.orientationModes = [
		Titanium.UI.PORTRAIT
	];
	webView.backgroundColor = 'transparent';
	win.add(webView);
		
	Titanium.UI.currentTab.open(win,{animated: true});
});

win.add(tableView);
