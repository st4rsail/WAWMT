// RATER MODULE for Appcelerator Titanium
/*
WHAT IS IT:
Create a cycling reminder to go rate your app at the App Store. Tracks 
the app launch count, and reminds the user every 20 launches (configurable) to 
rate the app, with a click to launch the app page in the App Store.

Reminders stop if the user clicks the "Rate Now" or "Don't Remind Me" options.

USAGE:
In your app.js (or elsewhere), call:
	Ti.include("rater.js");
	Rater.init("[Your app name]","[Your app's App Store URL]");
	Rater.run();

ABOUT:
Created by Greg Pierce, http://agiletortoise.com
*/

var Rater = {
	appName:'',
	appURL:'',
	interval:20
};

Rater.data = {
	launchCount:0,
	neverRemind:false
};

Rater.load = function() {
	var prop = Ti.App.Properties.getString("RaterData", null);
	if(prop) {
		Rater.data = JSON.parse(prop);
	}
	Rater.data.launchCount++;
	Rater.save();
};
Rater.save = function() {
	Ti.App.Properties.setString("RaterData", JSON.stringify(Rater.data));
};
Rater.message = function() {
	var msg = "You've launched \"" + Rater.appName + "\" " + Rater.data.launchCount + " times.  Please rate us at the App Store!";
	return msg;
};
Rater.run = function() {
	if(Rater.data.neverRemind || Rater.data.launchCount % Rater.interval != 0) { return; }
	var a = Ti.UI.createAlertDialog({
		title:"Feedback",
		message:Rater.message(),
		buttonNames:["Rate Now", "Don't Remind Me", "Not Now"],
		cancel:2
	});
	a.addEventListener('click',function(e){
		switch(e.index) {
			case 0 : // rate
				Rater.data.neverRemind = true;
				Rater.save();
				Ti.Platform.openURL(Rater.appURL);
				break;
			case 1 : // don't remind
				Rater.data.neverRemind = true;
				Rater.save();
				break;
		}
	});
	a.show();
};

Rater.init = function(_appName, _appURL) {
	Rater.load();
	Rater.appName = _appName;
	Rater.appURL = _appURL;
};
