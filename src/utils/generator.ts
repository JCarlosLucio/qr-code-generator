/**
 * Returns a string with special characters \ ; , " and : escaped with a backslash as in MECARD encoding.
 * @param str
 * @returns
 */
export const mecardEncoding = (str: string): string => {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/"/g, '\\"')
    .replace(/:/g, '\\:');
};
