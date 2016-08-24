require("sdk/ui/button/action").ActionButton({
  id: "list-tabs",
  label: "List Tabs",
  icon: "./icon-16.png",
  onClick: listTabs
});

function listTabs() {
  var tabs = require("sdk/tabs");
  for (let tab of tabs)
    console.log(tab.url);
}