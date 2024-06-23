/**
 * Fetches data from a specified URL and parses it as JSON or text  
 * 
 * @param {string} url - The URL to fetch data from.
 * @param {Boolean} [parseAsJSON=true] - Determines whether retrieved data should be parsed as JSON or text.
 * @returns {Promise<Object|undefined} The response data from the fetch request, or undefined if an error occurs.
 * @throws {Error} - If the fetch request fails or response status is not ok.
 */
async function fetchData(url, parseAsJSON = true) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    let data;
    if (parseAsJSON) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};