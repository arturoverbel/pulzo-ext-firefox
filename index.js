var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");

var Request = require("sdk/request").Request;

var { setTimeout, clearTimeout } = require("sdk/timers");

var idTime = setTimeout(function() {
  	
}, 1000


var button = ToggleButton({
	id: "pulzo",
	label: "Pulzo",
	icon: {
	    "16": "./icon-pulzo-16.png",
	    "32": "./icon-pulzo-32.png",
	    "64": "./icon-pulzo-64.png"
	},
	onChange: handleChange
});

function handleChange(state){

	if( state.checked){
		panels.Panel({
			contentURL: self.data.url("http://www.pulzo.com/latest"),
			width: 360,
		  	height: 500,
			onHide: handleHide
		}).show({
			position: button
		});

		Request({
			  url: "https://api.twitter.com/1.1/application/rate_limit_status.json",
			  onComplete: function (response) {
			    if (response.json.remaining_hits) {
			      latestTweetRequest.get();
			    } else {
			      console.log("You have been rate limited!");
			    }
			  }
		}).get();
		
	}


	
}

function handleHide(){
	button.state('window', {checked: false});
}