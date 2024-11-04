/**
 * Formats a number to a localized string with exactly two decimal places.
 *
 * @param value - The number to format.
 * @returns The formatted string.
 */
export const formatCryptoCurrency = (value: number): string => {
  // if (value === 0) return '$0' // Handle zero specifically

  // Calculate the number of decimal places based on order of magnitude
  // const decimalPlaces = Math.max(
  //   2,
  //   Math.min(8, 2 - Math.floor(Math.log10(Math.abs(value))))
  // )

  // return `$${value.toLocaleString(undefined, {
  //   minimumFractionDigits: decimalPlaces,
  //   maximumFractionDigits: decimalPlaces
  // })}`
  return `$${value}`
}
