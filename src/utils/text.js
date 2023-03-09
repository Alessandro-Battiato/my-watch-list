/* credits https://stackoverflow.com/a/1199420 */
export function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
}
