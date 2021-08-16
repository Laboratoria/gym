const encode = (character) => {
  // prettier-ignore
  const codes = {a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.."};

  return codes[character];
};

const encodeWord = (word) => Array.from(word).map(encode).join("");

const uniqueMorseRepresentations = (words) =>
  new Set(words.map(encodeWord)).size;
