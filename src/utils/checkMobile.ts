export const checkDevice = () => window.matchMedia(
  "only screen and (max-width: 760px)"
).matches;