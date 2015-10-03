/* Using ajax call on http://api.forismatic.com/api/1.0 to retrieve 
*  random quotes and allow the user to tweet them directly from the 
*  app.
*  NB: The tweet widget needs small hack to function properly.
*  ie. it must be removed and rebuilt for each new quote so that
*  the new quote text will appear in the tweet text box.
*/

$(document).ready(function() {
  function getQuote() {
      $.ajax({
        type: "POST",
        url: 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en',
        success: function(quote) {
          $('#quote').empty().append(quote.quoteText);
          $('#author').empty().append("- ", quote.quoteAuthor);
          console.log("Reset tweet data...", quote.quoteText);
          // Remove existing iframe
          $('#tweetBtn iframe').remove();
          // Generate new markup for tweet button widget
          var tweetBtn = $('<a></a>').addClass('twitter-share-button')
            .attr('href', 'http://twitter.com/share').attr('data-url',
              'www.freecodecamp.com').attr('data-text', $('#quote').text() +
              $('#author').text());
          $('#tweetBtn').append(tweetBtn);
          twttr.widgets.load();
        }
      });
    }
  // Handler for button to get new quote
  $('#top-btn').on('click', function(ev) {
    ev.preventDefault();
    console.log("go get the quote...");
    // Call to get quote and append to the relevant DOM elements
    getQuote();
  });
  getQuote();
});