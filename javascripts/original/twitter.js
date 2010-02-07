$(function() {
  var box = $("#statuses_count");
  var statuses_count = $.cookie("statuses_count");
  var status_text = $.cookie("status_text");

  if(statuses_count == null || status_text == null) {
    $.getJSON("http://twitter.com/users/show/svendahlstrand.json?callback=?", function(data) {
      $.cookie("statuses_count", data.statuses_count, { path: "/", expires: 0.003473 });
      $.cookie("status_text", data.status.text, { path: "/" });

      box.text(data.statuses_count);
      box.fadeIn("slow", function() {
        var paragraph = $('<div id="tweet"><p>' + data.status.text + "</p></div>").hide();
        $("#aside").append(paragraph);
        paragraph.fadeIn("slow");
      });
    });
  } else {
    box.text(statuses_count);
    box.show();
    $("#aside").append('<div id="tweet"><p>' + status_text + "</p></div>");
  }
});