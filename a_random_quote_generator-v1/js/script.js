/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/* This is an array of quotes to display. 
They all include a quote and a source. 
Some also include a citation, year, and/or about property.
*/
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

/**
 * Returns a random quote from the quotes array.
 *
 * @param {number} randomNumber - A random number between 0 and 5.
 * @param {string} getRandomNumber - Uses the random number to grab an object from the 'quotes' array.
 * @return {string} - Returns the random quote from the array.
 */
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * 5);
  const getRandomNumber = quotes[randomNumber];
  return getRandomNumber
} getRandomQuote();


/**
 * Displays a new quote every time the user clicks
 * "Show another quote" button on the page.
 *
 * @param {string} newQuote - Calls the getRandomQuote function.
 * @param {string} html - Initiates the html string.
 * @return {string} - Returns the quote, source, and other applicable classes.
 */
function printQuote() {
  let newQuote = getRandomQuote(quotes);
  let html = `
    <p class= "quote">${newQuote.quote}
    <p class= "source">${newQuote.source}
    `
    if (newQuote.citation){
      html += `<span class="citation">${newQuote.citation}</span>`;
    }

    if (newQuote.year){
      html += `<span class="year">${newQuote.year}</span>`;
    }

    if (newQuote.about){
      html += `<br><span class="about">${newQuote.about}</span>`;
    };
    html += `</p>`
  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);