var button = require("sdk/ui/button/action").ActionButton({
  id: "style-tab",
  label: "Style Tab",
  icon: "./icon-pulzo-16.png",
  onClick: function() {
    require("sdk/tabs").activeTab.attach({
      contentScript: 'document.body.style.border = "5px solid red";'
    });
  }
});