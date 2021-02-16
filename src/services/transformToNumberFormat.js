export default function transformToNumberFormat(number, digits = 2) {
  if (
    typeof parseFloat(number) !== "number" ||
    Number.isNaN(parseFloat(number))
  ) {
    return "-";
  }

  return parseFloat(number).toLocaleString("de", {
    minimumFractionDigits: 2,
    maximumFractionDigits: digits,
  });
}
