
var tweetLink = "https://twitter.com/intent/tweet?text=";
//var randomQuoteGeneratorLink = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback";
var randomQuoteGeneratorLink = "http://quotes.stormconsultancy.co.uk/random.json";

$(document).ready(function(){

  $('#quote-author').text("Loading quote...");
  $('#quote-text').html("Unknown");

  $.ajax( {
    type: "GET",
    url: randomQuoteGeneratorLink,
    success: function(data) {
      var post = data; // The data is an array of posts. Grab the first one.
      $('#quote-author').text(post.author);
      $('#quote-text').html(post.quote);
      $("#tweet-link").attr("href", tweetLink + '"' + post.quote.toString() + '" quote by ' + post.author.toString());
    },
    cache: false
  });
$('#generate-quote').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: randomQuoteGeneratorLink,
      success: function(data) {
        var post = data; // The data is an array of posts. Grab the first one.
        $('#quote-author').text(post.author);
        $('#quote-text').html(post.quote);
        $("#tweet-link").attr("href", tweetLink + '"' + post.quote.toString() + '" quote by ' + post.author.toString());
      },
      cache: false
    });
  });
});
