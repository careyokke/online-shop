$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $("input#name").val();
    var address = $("#address").val();
    var clothing = parseInt($("#clothing").val());
    var food = parseInt($("#food").val());



    $(".name").append(name);
    $(".address").append(address);
    $(".total").append(clothing + food);

    event.preventDefault();
  });
});
