$(function() {
  var help_text = "Sök igenom allt innehåll";
  set_help_text();

  $(":text").focus(function() {
    if($(this).val() == help_text) {
      $(this).val("").css("color", "");
    }
  }).blur(function() {
    if($(this).val() == "") {
      set_help_text();
    }
  });

  function set_help_text() {
    $(":text").val(help_text).css("color", "#ccc");
  }
});