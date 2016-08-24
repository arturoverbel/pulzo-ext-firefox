var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "pulzo-link",
  label: "Visita Pulzo.com",
  icon: "./icon-pulzo-16.png",
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("http://www.pulzo.com/");
}
