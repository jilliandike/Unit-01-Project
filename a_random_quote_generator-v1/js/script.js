/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    source: "Robert Frost",
    citation: "The Road Not Taken by Robert Frost",
    year: "1916"
  },
  {
    quote: "Blessed is he who plants trees under whose shade he will never sit.",
    source: "M. Trottier",
    citation: "The Pall Mall Gazette",
    year: "1868"
  },
  {
    quote: "The two most important days in your life are the day you are born and the day you find out why.",
    source: "Mark Twain"
  },
  {
    quote: "Go confidently in the direction of your dreams.  Live the life you have imagined.",
    source: "Henry David Thoreau"
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    source: "Booker T. Washington"
  }
];
console.log(quotes);

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);