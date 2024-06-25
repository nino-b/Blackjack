


export default function convertToDate(dateStr) {
  const [day, month, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day);
}