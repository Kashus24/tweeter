$(document).ready(function() {

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

   // console.log($(this).parents().find('counter'));
  });




  // --- our code goes here ---
});


// document.addEventListener("blur", () => {
//   alert("fuzzy");
// });

// document.addEventListener("keydown", function() {
//   console.log(this);
// });

/*
document.addEventListener("keyup", () => {
  alert("key goes up up");
});

document.addEventListener("keypress", () => {
  alert("key was pressed");
});

document.addEventListener("change", () => {
  alert("its all different");
});

document.addEventListener("input", () => {
  alert("inputed info");
});
*/