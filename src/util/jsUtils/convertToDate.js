
/**
 * Converts a date string in 'day/month/year' format to a JavaScript Date object.
 *
 * @param {string} dateStr - The date string to convert (format: 'day/month/year').
 * @returns {Date} The corresponding Date object.
 */

export default function convertToDate(dateStr) {
  const [day, month, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day);
}