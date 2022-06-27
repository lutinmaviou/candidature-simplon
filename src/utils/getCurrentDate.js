export function getCurrentDate() {
  const newDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = newDate.toLocaleDateString("fr-FR", options);
  return `${date.charAt(0).toUpperCase()}${date.substring(1)}`;
}
