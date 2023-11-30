async function fetchNewQuote() {
  const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
  const apiKey = 'c7bdc24afcmsh8616024bfb9bffcp17e6a1jsnb1683e692a14';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    });

    const result = await response.json();
    displayQuote(result);
  } catch (error) {
    console.error('Error fetching quote:', error.message);
  }
}
function displayQuote(quote) {
  const quoteContent = document.getElementById('quote-content');
  const quoteOriginator = document.getElementById('quote-originator');
  const quoteTags = document.getElementById('quote-tags');

  quoteContent.textContent = quote.content || 'No content available';
  quoteOriginator.textContent = quote.originator ? `— ${quote.originator.name}` : '';
  quoteTags.textContent = quote.tags ? `Tags: ${quote.tags.join(', ')}` : '';
}
fetchNewQuote();
// new quote will be fetched just after click
const quoteButton = document.getElementById('quote-button');
quoteButton.addEventListener('click', fetchNewQuote);
