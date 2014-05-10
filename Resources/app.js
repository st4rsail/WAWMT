// Globals
// Titanium.App.freeware = false;
// Titanium.App.adware = false;

if (Titanium.Platform.name == 'iPhone OS') {
	Titanium.UI.setBackgroundColor('#fff');
} else {
	Titanium.UI.setBackgroundColor('#000');
}

var tabGroup = Titanium.UI.createTabGroup();

var mapWin = Titanium.UI.createWindow({
	titleImage: 'images/title.png',
	backgroundImage: 'images/map-bg.jpg',
	title: 'Maps'
});

var mapTab = Titanium.UI.createTab({
	icon: 'images/tabs/world.png',
	title: 'Maps',
	window: mapWin
});

var video1Win = Titanium.UI.createWindow({
	url: 'videos1.js',
	titleImage: 'images/title.png',
	title: 'Maps'
});

var video1Tab = Titanium.UI.createTab({
	icon: 'images/tabs/movie.png',
	title: 'Offense',
	window: video1Win
});

var video2Win = Titanium.UI.createWindow({
	url: 'videos2.js',
	titleImage: 'images/title.png',
	title: 'Maps'
});

var video2Tab = Titanium.UI.createTab({
	icon: 'images/tabs/movie.png',
	title: 'Defense',
	window: video2Win
});

var tacticWin = Titanium.UI.createWindow({
	url: 'tactic_list.js',
	titleImage: 'images/title.png',
	backgroundImage: 'images/tactic-bg.jpg',
	title: 'Maps'
});

var tacticTab = Titanium.UI.createTab({
	icon: 'images/tabs/briefcase.png',
	title: 'Tactics',
	window: tacticWin
});

var aboutWin = Titanium.UI.createWindow({
	url: 'about.js',
	titleImage: 'images/title.png',
	backgroundImage: 'images/about-bg.jpg',
	title: 'MW2 Map Tactics'
});

var aboutTab = Titanium.UI.createTab({
	icon: 'images/tabs/speechmedia.png',
	title: 'About',
	window: aboutWin
});

if (Titanium.Platform.name == 'iPhone OS') {
	mapWin.backgroundColor = '#fff';
	video1Win.backgroundColor = '#fff';
	video2Win.backgroundColor = '#fff';
	tacticWin.backgroundColor = '#fff';
	aboutWin.backgroundColor = '#fff';
} else {
	mapWin.backgroundColor = '#000';
	video1Win.backgroundColor = '#000';
	video2Win.backgroundColor = '#000';
	tacticWin.backgroundColor = '#000';
	aboutWin.backgroundColor = '#000';
}

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
	win.add(mapView);
	mapTab.open(win,{animated: true});
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
			win.barColor = '#111111';
			mapTab.open(win,{animated: true});
		} else {
			// webview for android
			loadWebView(e.rowData.url, e.rowData.title);
		}
	}
});

mapWin.barColor = '#111111';
video1Win.barColor = '#111111';
video2Win.barColor = '#111111';
tacticWin.barColor = '#111111';
aboutWin.barColor = '#111111';

mapWin.add(tableView);

tabGroup.addTab(mapTab);
tabGroup.addTab(tacticTab);
tabGroup.addTab(video1Tab);
tabGroup.addTab(video2Tab);
tabGroup.addTab(aboutTab);
tabGroup.open();
tabGroup.setActiveTab(0);

// Rater pop-up
// if (Titanium.Platform.name == 'iPhone OS') {
// 	Ti.include("rater.js");
// 	Rater.init("COD4 Map Tactics","http://phobos.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=383062530");
// 	Rater.run();
// }
