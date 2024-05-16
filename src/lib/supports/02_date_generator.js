function generateDateTimeString() {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Add leading zero if needed
  const day = ("0" + date.getDate()).slice(-2); // Add leading zero if needed
  const hours = ("0" + date.getHours()).slice(-2); // Add leading zero if needed
  const minutes = ("0" + date.getMinutes()).slice(-2); // Add leading zero if needed

  // Concatenate all parts to form the datetime string
  const dateTimeString = year + month + day + hours + minutes;

  return dateTimeString;
}

module.exports = { generateDateTimeString };
