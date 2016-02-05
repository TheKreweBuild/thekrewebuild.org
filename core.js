window.onload = function () {
	//--- Setup menu.
	document.getElementById("linkHome").addEventListener("click", function() { window.openArticle("Home"); });
	document.getElementById("linkSocial").addEventListener("click", function() { window.openArticle("Social"); });
	document.getElementById("linkEvents").addEventListener("click", function() { window.openArticle("Events"); });
	document.getElementById("linkMedia").addEventListener("click", function() { window.openArticle("Media"); });

	//--- Setup article social.
	document.getElementById("linkSocialFacebook").addEventListener("click", function() { window.location.href = "https://www.facebook.com/groups/130205153835380/"; });
	document.getElementById("linkSocialTwitter").addEventListener("click", function() { window.location.href = "https://twitter.com/thekrewebuild"; });
	document.getElementById("linkSocialGlobe").addEventListener("click", function() { window.location.href = "http://www.mapcustomizer.com/map/Krewe of Build"; });

	//--- Setup article events.
	var arrEvents = [
		{ Key: "linkEventTelerik", Address: "http://www.telerik.com/blogs/telerik-party-at-build-join-us" },
	];

	for (var intEvent = 0; intEvent < arrEvents.length; intEvent++) {
		(function () {
			var objEvent = arrEvents[intEvent];
			document.getElementById(objEvent.Key).addEventListener("click", function () { window.location.href = objEvent.Address; });
		}());
	}

	//--- Setup article media.
	var arrMedias = [
		{ Key: "linkDownloadLogotype", Address: "https://az716616.vo.msecnd.net/thekrewebuild/content/Logotype.psd" },
		{ Key: "linkDownloadWebDesign", Address: "https://az716616.vo.msecnd.net/thekrewebuild/content/WebDesign.psd" },
		{ Key: "linkDownloadSanFrancisco", Address: "https://az716616.vo.msecnd.net/thekrewebuild/content/SanFrancisco.psd" }
	];

	for (var intMedia = 0; intMedia < arrMedias.length; intMedia++) {
		(function () {
			var objMedia = arrMedias[intMedia];
			document.getElementById(objMedia.Key).addEventListener("click", function () { window.location.href = objMedia.Address; });
		}());
	}

	//--- Initiate first view.
	if (window.location.hash === "") {
		window.openArticle("Home");
	} else {
		window.openArticle(window.location.hash.substring(1));
	}

	//--- Initiate countdown.
	var intCountTo = new Date(Date.UTC(2016, 03, 30, 15, 30, 0, 0)).getTime();

	setInterval(function () {
		var objNow = new Date().getTime();

		if (intCountTo > objNow) {
			var intTimeLeft = (intCountTo - objNow);

			var intDays = (intTimeLeft > 86400000) ? Math.floor(intTimeLeft / 86400000) : 0;
			intTimeLeft = intTimeLeft - intDays * 86400000;

			var intHours = (intTimeLeft > 3600000) ? Math.floor(intTimeLeft / 3600000) : 0;
			intTimeLeft = intTimeLeft - intHours * 3600000;

			var intMinutes = (intTimeLeft > 60000) ? Math.floor(intTimeLeft / 60000) : 0;
			intTimeLeft = intTimeLeft - intMinutes * 60000;

			var intSeconds = (intTimeLeft > 1000) ? Math.floor(intTimeLeft / 1000) : 0;
			var strResult = "";

			if (intDays < 10) {
				strResult += "0" + intDays + ":";
			} else {
				strResult += intDays + ":";
			}

			if (intHours < 10) {
				strResult += "0" + intHours + ":";
			} else {
				strResult += intHours + ":";
			}

			if (intMinutes < 10) {
				strResult += "0" + intMinutes + ":";
			} else {
				strResult += intMinutes + ":";
			}

			if (intSeconds < 10) {
				strResult += "0" + intSeconds;
			} else {
				strResult += intSeconds;
			}
		} else {
			strResult = "We have lift off!";
		}

		document.querySelector(".Countdown").innerHTML = strResult;
	}, 1000);
};

window.openArticle = function (_Name) {
	document.getElementById("articleHome").className = "Hide";
	document.getElementById("articleSocial").className = "Hide";
	document.getElementById("articleEvents").className = "Hide";
	document.getElementById("articleMedia").className = "Hide";

	document.getElementById("article" + _Name).className = "Show";

	if (window.location.hash !== _Name) {
		window.location.hash = _Name;
	}
}