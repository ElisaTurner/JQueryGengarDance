$(document).ready(function() {

    // to enable radio button toggling
  
    $("input[type=radio]").click(function() {
  
      var previousValue = $(this).data("storedValue");
  
      if (previousValue) {
  
        $(this).prop("checked", !previousValue);
  
        $(this).data("storedValue", !previousValue);
  
      } else {
  
        $(this).data("storedValue", true);
  
        $("input[type=radio]:not(:checked)").data("storedValue", false);
  
      }
  
    });
  
    $("#hide").click(function() {
  
      $("#div").hide();
  
    });
  
    $("#show").click(function() {
  
      $("#div").show();
  
    });
  
    $("#toggle").click(function() {
  
      $("#div").toggle();
  
    });
  
    $("#slideup").click(function() {
  
      $("#div").slideUp();
  
    });
  
    $("#slidedown").click(function() {
  
      $("#div").slideDown();
  
    });
  
         $("#slidetoggle").click(function() {
  
      $("#div").slideToggle();
  
    });
  
    $("#fadeto").click(function() {
  
      $("#div").fadeTo(10, 0.1);
  
    });

    $("#fadein").click(function() {
  
      $("#div").fadeIn(100);
  
    });
  
    $("#fadeout").click(function() {
  
      $("#div").fadeOut();
  
    });
})