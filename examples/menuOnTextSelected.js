var tabs = requite("sdk/tabs");

tabs.open({
	url: "http://www.pulzo.com",
	onReady: runScript
})

function runScript(tab) {
  tab.attach({
    	contentScript: "document.body.style.border = '5px solid red';"
  });
}