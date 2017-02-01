export default () => {
  let estimate = 0

  for (let k = 1; k <= 999999999; k++) {
    estimate += (k % 2 === 0 ? -1 : 1) / (2 * k - 1)
  }

  return 4 * estimate
}
