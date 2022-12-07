// hard code data for examples
$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  

  const renderTweets = function(tweets) {

    for (let tweet of tweets) {
  
      let addedTweet = createTweetElement(tweet);
  
      $('.tweet-container').prepend(addedTweet);
    }
  }



const createTweetElement = function(tweet) {
  // console.log(tweet);
  let $tweet = `

    <article class="user">
    <div class="tweet-holder">
      <div class="tweet-header">
        <div>
          <img src="${tweet.user.avatars}">${tweet.user.name}
          <!-- <h4>Newton</h4> -->
        </div>
        <h4>${tweet.user.handle}</h4>
      </div>
      <p class="tweeted-words"> ${tweet.content.text}</p>
    
    <footer>
      <p>${tweet.created_at}</p>
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

});
  // const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
//   console.log($tweet); 
//   $('#tweet-container').append($tweet);

// })