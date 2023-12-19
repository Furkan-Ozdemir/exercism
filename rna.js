//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const pairs = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};
export const toRna = (sequence) => {
  if (sequence.length === 1) {
    return pairs[sequence];
  } else if (sequence.length === 0) return "";
  else {
    let str = "";
    for (const item of sequence) {
      str += pairs[item];
    }
    return str;
  }
};
