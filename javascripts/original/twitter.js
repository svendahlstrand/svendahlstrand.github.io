$(function() {
  var box = $("#statuses_count");
  var statuses_count = $.cookie("statuses_count");
  var status_text = $.cookie("status_text");

  if(!statuses_count || !status_text) {
    $.getJSON("https://api.twitter.com/1/users/show.json?screen_name=svendahlstrand&include_entities=true&callback=?", function(data) {
      $.cookie("statuses_count", data.statuses_count, { path: "/", expires: 0.003473 });
      $.cookie("status_text", twttr.txt.autoLink(data.status.text), { path: "/" });

      box.text(data.statuses_count);
      box.fadeIn("slow", function() {
        var paragraph = $('<div id="tweet"><p>' + twttr.txt.autoLink(data.status.text) + "</p></div>").hide();
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
