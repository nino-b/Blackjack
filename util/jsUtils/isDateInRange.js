import convertToDate from "./convertToDate";



export default function isDateInRange(checkDateStr, startDateStr, endDateStr) {  
  /**
   * '  if (!startDateStr && !endDateStr) return true;  '
   * Means that Every date entry is correct if user did not specify time range.
  */ 
    if (!startDateStr && !endDateStr) return true;   
    let startDate = null;
    let endDate = null;

    const checkDate = convertToDate(checkDateStr);

    if (startDateStr) {
      startDate = convertToDate(startDateStr);

      if (!endDateStr) {
        return checkDate >= startDate;
      }
    }
    if (endDateStr) {
      endDate = convertToDate(endDateStr);
      if (!startDateStr) {
        return checkDate <= endDate;
      }
    }
    return checkDate >= startDate && checkDate <= endDate;
  }