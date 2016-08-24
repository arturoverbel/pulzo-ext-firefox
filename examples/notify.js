var notifications = require("sdk/notifications");
notifications.notify({
  title: "Jabberwocky",
  text: "'Twas brillig, and the slithy toves",
  data: "did gyre and gimble in the wabe",
  onClick: function (data) {
    console.log(data);
    // console.log(this.data) would produce the same result.
  }
});