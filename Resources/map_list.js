var win = Titanium.UI.currentWindow;
var tabGroup = win.tabGroup;
win.barColor = '#111111';

var data = [
	{title: 'Airfield'   , hasChild: true, leftImage: 'images/tiny/airfield.png'   , map: 'images/maps/airfield.gif'   },
	{title: 'Asylum'     , hasChild: true, leftImage: 'images/tiny/asylum.png'     , map: 'images/maps/asylum.gif'     },
	{title: 'Castle'     , hasChild: true, leftImage: 'images/tiny/castle.png'     , map: 'images/maps/castle.gif'     },
	{title: 'Cliffside'  , hasChild: true, leftImage: 'images/tiny/cliffside.png'  , map: 'images/maps/cliffside.gif'  },
	{title: 'Courtyard'  , hasChild: true, leftImage: 'images/tiny/courtyard.png'  , map: 'images/maps/courtyard.gif'  },
	{title: 'Dome'       , hasChild: true, leftImage: 'images/tiny/dome.png'       , map: 'images/maps/dome.gif'       },
	{title: 'Downfall'   , hasChild: true, leftImage: 'images/tiny/downfall.png'   , map: 'images/maps/downfall.gif'   },
	{title: 'Hangar'     , hasChild: true, leftImage: 'images/tiny/hangar.png'     , map: 'images/maps/hangar.gif'     },
	{title: 'Makin'      , hasChild: true, leftImage: 'images/tiny/makin.png'      , map: 'images/maps/makin.gif'      },
	{title: 'Outskirts'  , hasChild: true, leftImage: 'images/tiny/outskirts.png'  , map: 'images/maps/outskirts.gif'  },
	{title: 'Roundhouse' , hasChild: true, leftImage: 'images/tiny/roundhouse.png' , map: 'images/maps/roundhouse.gif' },
	{title: 'Seelow'     , hasChild: true, leftImage: 'images/tiny/seelow.png'     , map: 'images/maps/seelow.gif'     },
	{title: 'Upheaval'   , hasChild: true, leftImage: 'images/tiny/upheaval.png'   , map: 'images/maps/upheaval.gif'   }
];

var tableView = Titanium.UI.createTableView({
	data: data,
	backgroundColor: 'transparent'
});

function loadWebView(url, title) {
	var mapView = Titanium.UI.createWebView({url: url});
	var win = Titanium.UI.createWindow({title: title});
	win.barColor = '#111111';
	win.add(mapView);
	Titanium.UI.currentTab.open(win,{animated: true});
}

tableView.addEventListener('click', function(e)
{
	if (e.rowData.map)
	{
		if (Titanium.Platform.name == 'iPhone OS') {
			var win = Titanium.UI.createWindow({
				url: 'map.js',
				title: e.rowData.title,
				mapImage: e.rowData.map
			});
			Titanium.UI.currentTab.open(win,{animated: true});
		} else {
			// webview for android
			loadWebView(e.rowData.url, e.rowData.title);
		}
	}
});

win.add(tableView);
Titanium.UI.currentTab.open(win,{animated: true});
