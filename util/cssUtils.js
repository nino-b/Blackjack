  /**
   * Fetches CSS styles from CSS file and converts it into text format,
   * so we can work with it.
   * 
   * @param {string} url - URL of the CSS file.
   * @returns {Promise<string>} A promise that resolves to the text content of the fetched CSS file.
   * @throws {Error} Throws an error if the fetch request fails.
   */
  async function fetchCSS(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch CSS URL: ${url}`);
    }
    return response.text();
  }

  export { fetchCSS }