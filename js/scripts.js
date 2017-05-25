$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var slumLordInput = $("input#slumLord").val();
    var objectInput = $("input#object").val();
    var scentInput= $("input#scent").val();
    var verbInput = $("input#verb").val();
    var yourNameInput = $("input#yourName").val();

    $(".slumLord").text(slumLordInput);
    $(".object").text(objectInput);
    $(".scent").text(scentInput);
    $(".verb").text(verbInput);
    $(".yourName").text(yourNameInput);

    $("#story").show();

    event.preventDefault();
  });
});
