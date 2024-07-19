// Define constants for elements in your HTML
const quote = document.getElementById("quote"); // Finds an element with id="quote" in your HTML and assigns it to the variable `quote`
const author = document.getElementById("author"); // Finds an element with id="author" in your HTML and assigns it to the variable `author`

// Define the API URL to fetch a random quote
const api_url = "https://api.quotable.io/random";

// Define an asynchronous function `getquote` that accepts a URL parameter `url`
async function getquote(url) {
    // Send a fetch request to the provided URL and wait for the response
    const response = await fetch(url);

    // Extract JSON content from the response and wait for it to be parsed
    var data = await response.json();

    // Update the inner HTML of the `quote` element with the quote content from the API response
    quote.innerHTML = data.content;

    // Update the inner HTML of the `author` element with the author from the API response
    author.innerHTML = data.author;
}
