var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");

var Request = require("sdk/request").Request;

var { setTimeout, clearTimeout } = require("sdk/timers");

var idTime = setTimeout(function() {
  	
}, 1000);


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

		

		var quijote = Request({
		  url: "https://s3-us-west-2.amazonaws.com/filesstaticpulzo/pulzo-lite/jsons/admin/latest.json",
		  contentType: "json",
		  onComplete: function (response) {
		  	
		  	json = response.json;

		  }
		});

		quijote.get();

		/*
		var myRequest = new Request('https://s3-us-west-2.amazonaws.com/filesstaticpulzo/pulzo-lite/jsons/admin/latest.json');

		fetch(myRequest).then(function(response) {
		  	
		  	response.json().then(function(json) {
		  		console.log(json);
		  	});

		});
		

		
		Request({
			  url: "https://s3-us-west-2.amazonaws.com/filesstaticpulzo/pulzo-lite/jsons/admin/latest.json",
			  onComplete: function (response) {
			    console.log(response.body);
			  }
		}).get();
		*/
		
	}


	
}

function handleHide(){
	button.state('window', {checked: false});
}