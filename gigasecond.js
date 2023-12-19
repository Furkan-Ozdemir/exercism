//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const gigasecond = (date) => {
  const timeInSeconds = date.getTime() / 1000;
  const GIGASECOND = 1000000 * 1000;
  return new Date((GIGASECOND + timeInSeconds) * 1000);
};
