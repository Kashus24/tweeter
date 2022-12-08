// hard code data for examples
$(document).ready(function () {

  const data = [

  ]

  const renderTweets = function (tweets) {

    $('.tweet-container').empty();

    for (let tweet of tweets) {

      let addedTweet = createTweetElement(tweet);

      $('.tweet-container').prepend(addedTweet);
    }
  }

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  const createTweetElement = function (tweet) {
    // console.log(tweet);
    let $tweet = `

    <article class="user">
    <div class="tweet-holder">
      <div class="tweet-header">
        <div>
          <img src="${escape(tweet.user.avatars)}">${escape(tweet.user.name)}
          <!-- <h4>Newton</h4> -->
        </div>
        <h4>${escape(tweet.user.handle)}</h4>
      </div>
      <p class="tweeted-words"> ${escape(tweet.content.text)}</p>
    
    <footer>
      <p class="timeago">${escape(timeago.format(tweet.created_at))}</p>
      <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-sharp fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
     </div>
    </footer>
  </article>
  `;

    return $tweet;
  }


  renderTweets(data);


  const noChars = () => {
    let err = ' 🔺 Tweet must be atleast 1 characters! 🔺 ';
    $('.error-message').text(err);

  }

  const overChars = () => {
    let err = ' 🔺 Tweet must be less than 140 characters! 🔺 ';
    $('.error-message').text(err);
  }



  $('#main-form').submit((event) => {
    event.preventDefault();
    

    $('.error-message').slideUp();

    const serializedData = $('#main-form').serialize();
  
    // getting length of text box for tweets
    const textBoxChars = $('.borderless-box').val().length;

    //applying alert based on situation
    if (textBoxChars === 0) {
      $('.error-message').slideDown('slow',noChars());
    } else if (textBoxChars > 140) {
      $('.error-message').slideDown('slow', overChars());
    } else {

    $.ajax('/tweets', { method: 'POST', data: serializedData })
      .then(function () {
        loadTweets();
      });
    }
  });


  


  const loadTweets = () => {
    $.get('/tweets', function (tweets) {
      renderTweets(tweets);
    }); 
  };


  loadTweets();

});
  // const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
//   console.log($tweet); 
//   $('#tweet-container').append($tweet);

// })