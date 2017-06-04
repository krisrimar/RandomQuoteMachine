
var tweetLink = "https://twitter.com/intent/tweet?text=";
var randomQuoteGeneratorLink = "http://quotes.stormconsultancy.co.uk/random.json";

$(document).ready(function(){

  $('#quote-text').html("Loading quote...");
  $('#quote-author').text("Unknown");

  $.ajax( {
    type: "GET",
    url: randomQuoteGeneratorLink,
    success: function(data) {
      $('#quote-text').html(data.quote);
      $('#quote-author').text(data.author);
      $("#tweet-link").attr("href", tweetLink + '"' + data.quote.toString() + '" quote by ' + data.author.toString());
    },
    error: function(error) {
      $('#quote-text').html("Error loading quoute text :(");
      $('#quote-author').text("Unknown");
    },
    cache: false
  });
$('#generate-quote').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: randomQuoteGeneratorLink,
      success: function(data) {
        $('#quote-text').html(data.quote);
        $('#quote-author').text(data.author);
        $("#tweet-link").attr("href", tweetLink + '"' + data.quote.toString() + '" quote by ' + post.author.toString());
      },
      error: function(error) {
        $('#quote-text').html("Error loading quoute text :(");
        $('#quote-author').text("Unknown");
      },
      cache: false
    });
  });
});
