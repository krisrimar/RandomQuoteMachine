
//LINKS

const tweetLink = "https://twitter.com/intent/tweet?text=";
const randomQuoteGeneratorLink = "http://quotes.stormconsultancy.co.uk/random.json";

//TEXT

const NO_QUOTE_ERROR_TEXT = "Error loading quote text :(";
const UNKNOWN_AUTHOR_TEXT = "Unknown";
const LOADING_QUOTE_TEXT = "Loading quote...";

//IDs

const quoteTextID = "#quote-text";
const quoteAuthorID = "#quote-author";
const generateQuoteID = "#generate-quote";
const tweetLinkID = "#tweet-link";

//CODE

const ajaxGetQuoteReqBody = {
  type: "GET",
  url: randomQuoteGeneratorLink,
  success: function(data) {
    $(quoteTextID).html(data.quote);
    $(quoteAuthorID).text(data.author);
    $(tweetLinkID).attr("href", tweetLink + '"' + data.quote.toString() + '" quote by ' + data.author.toString());
  },
  error: function(error) {
    $(quoteTextID).html(NO_QUOTE_ERROR_TEXT);
    $(quoteAuthorID).text(UNKNOWN_AUTHOR_TEXT);
  },
  cache: false
};

//MAIN

$(document).ready(function(){

  $(quoteTextID).html(LOADING_QUOTE_TEXT);
  $(quoteAuthorID).text(UNKNOWN_AUTHOR_TEXT);

  //When document loads, make first request to get quote
  $.ajax(ajaxGetQuoteReqBody);

  $(generateQuoteID).on('click', function(e) {
    $.ajax(ajaxGetQuoteReqBody);
  });
});
