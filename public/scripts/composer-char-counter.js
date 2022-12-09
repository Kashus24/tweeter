$(document).ready(function() {

  //total character counter color based on value remaining
  $('#tweet-text').on("input", function () {

    const charValue = $(this).val();
    const charLength = charValue.length;
    const finalLength = 140 - charLength;

    if (finalLength > 0) {
      $("output[name='counter']").val(finalLength).css('color', 'black');
    }
    else {
      $("output[name='counter']").val(finalLength).css('color', 'red');
    }
  });
});


