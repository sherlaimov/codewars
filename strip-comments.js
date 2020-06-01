function stripComments(input, markers) {
  const result = markers.reduce((acc, b) => {
    const reg = new RegExp(`(${b}\\s\\w+|${b}\\w+)`, "gi");
    console.log(acc);
    acc = acc.replace(/\n/g, "\\n");
    acc = acc.replace(reg, "");
    console.log(acc);
    return acc;
  }, input);
  return result;
}

const input = "apples, plums % and bananas\npears\noranges !applesauce %ama";
const r = stripComments(input, ["%", "!"]);
r; //?
//  "apples, plums\npears\noranges"

// const reg = new RegExp(`(%\\s\\w+|%\\w+)`, "gi");
// console.log(reg);

// const t = input.replace(reg, "");

// console.log(t);
