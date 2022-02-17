const sentence = "hello there from lighthouse labs";
// for (i = 0; i < sentence.length; i++) {
//   console.log(sentence[i]);
// }



// const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   process.stdout.write(char); //We repace console.log with process.stdout.write so it writes in in a line
// }

// setTimeout(() => {
//   for (const char of sentence) {
//     process.stdout.write(char); 
//   }
// }, 1000) 

let delay = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i])
  }, delay)
  delay += 50;
}

setTimeout(() => {
  process.stdout.write("\n");
}, delay);

// let delay = 0;
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char)
//   }, delay)
//   delay += 50;
// }