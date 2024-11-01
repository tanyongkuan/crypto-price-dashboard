export const mergeClasses = (...classes: Array<string | undefined>) => {
  return classes.filter(Boolean).join(' ')
}
