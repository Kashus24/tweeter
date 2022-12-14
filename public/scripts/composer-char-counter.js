$(document).ready(function() {

  //total character counter color based on value remaining
  $('#tweet-text').on("input", function () {

    const charValue = $(this).val().length;
    const finalLength = 140 - charValue;
    const parent = $(this).closest('form').find('.counter');
    
    $(parent).text(finalLength);

    if (finalLength < 0) {
      $('.counter').addClass('counter-red');
    } else {
      $('.counter').removeClass('counter-red');
    }
  });
});


