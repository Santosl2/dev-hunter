/* eslint-disable no-promise-executor-return */
export function delay(ms = 2000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
