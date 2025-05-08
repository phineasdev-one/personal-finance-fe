export function formatDateTimeStamp(dateStr: string) {
  if (!dateStr) return "Invalid Date";

  const parts = dateStr.split(/[/\s:]/);
  if (parts.length < 4) return "Invalid Date";

  const [day, month, year, hour, minute] = parts.map(Number);

  if (isNaN(day) || isNaN(month) || isNaN(year) || isNaN(hour) || isNaN(minute)) {
    return "Invalid Date";
  }

  const date = new Date(year, month - 1, day, hour, minute);
  if (isNaN(date.getTime())) return "Invalid Date";

  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}
