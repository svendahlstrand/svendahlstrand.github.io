$(function() {
  if (!supportsInputType("search"))
  {
    setHelpText($("input[name=q]"));

    $("input[placeholder]").focus(function() {
      if($(this).val() == $(this).attr("placeholder")) {
        $(this).css("color", "").val("");
      }
    }).blur(function() {
      if($(this).val() == "") {
        setHelpText(this);
      }
    });
  }

  function setHelpText(element) {
    $(element).css("color", "#ccc").val($(element).attr("placeholder"));
  }

  function supportsInputType(type) {
    var input = document.createElement("input");
    input.setAttribute("type", type);
    return input.type !== "text";
  }
});