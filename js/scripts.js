// Business Logic

function wordCounter(text) {
  //test3:
  if (text.length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  //test1, test2
  textArray.forEach(function (word) {
    wordCount++;
  });
  return wordCount;
}