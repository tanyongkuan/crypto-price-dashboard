/**
 * Formats a number to a localized string with exactly two decimal places.
 *
 * @param value - The number to format.
 * @returns The formatted string.
 */
export const formatCryptoCurrency = (value: number): string => {
  if (value === 0) return '$0' // Handle zero specifically

  // Calculate the number of decimal places based on order of magnitude
  const decimalPlaces = Math.max(
    2,
    Math.min(8, 2 - Math.floor(Math.log10(Math.abs(value))))
  )

  return `$${value.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  })}`
  //     if (value >= 1) {
  //         // For values >= 1, use 2 decimal places
  //         return `${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
  //       } else if (value > 0.0001) {
  //         // For values between 0.0001 and 1, use 4 decimal places
  //         return value.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 8 });
  //       } else {
  //         // For values <= 0.0001, use up to 8 decimal places
  //         return value.toLocaleString(undefined, { minimumFractionDigits: 6, maximumFractionDigits: 8 });
  //       }

  //   return `$${value.toLocaleString(undefined, {
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2
  //   })}`
}
