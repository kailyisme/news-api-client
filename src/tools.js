export function parseDate(dateString) {
  const regex = /^(\d{4})-(\d{2})-(\d{2})/;
  const matches = dateString.match(regex);
  const [_, year, month, day] = matches;
  return `${day}/${month}/${year}`;
}