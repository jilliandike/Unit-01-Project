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
const quotes = [
  {
    quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    source: "Robert Frost",
    citation: "The Road Not Taken",
    year: "1916",
    about: "Robert Lee Frost was an American poet."
  },
  {
    quote: "Blessed is he who plants trees under whose shade he will never sit.",
    source: "M. Trottier",
    citation: "The Pall Mall Gazette",
    year: "1868"
  },
  {
    quote: "The two most important days in your life are the day you are born and the day you find out why.",
    source: "Mark Twain",
    about: "Samuel Langhorne Clemens, known by the pen name Mark Twain, was an American writer, humorist, and essayist."
  },
  {
    quote: "Go confidently in the direction of your dreams.  Live the life you have imagined.",
    source: "Henry David Thoreau",
    about: "Henry David Thoreau was an American naturalist, essayist, poet, and philosopher."
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    source: "Booker T. Washington",
    about: "Booker Taliaferro Washington was an American educator, author, and orator."
  }
];
console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
const randomNumber = Math.floor(Math.random() * 5);
  
// 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
const getRandomNumber = quotes[randomNumber];

  // 3. Return the variable storing the random quote object
  console.log(getRandomNumber);
  return getRandomNumber
} getRandomQuote();


/***
 * `printQuote` function
***/
function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
const newQuote = getRandomQuote();

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
const html = `[
  <p class= "quotes">randomQuote.quote
  <p class= "source">randomQuote.source
]`
  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
  if (quotes.citation){
    html += <span class='randomQuote.citation'></span>;
  }

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
  if (quotes.year){
    html += <span class='randomQuote.year'></span>;
  };

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
html += `</p>.`

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
  main.innerHTML += html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);