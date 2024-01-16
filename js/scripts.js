// Business Logic

function wordCounter(text) {
  //test3, test4:
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  //test1, test2, test5
  textArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  //test2, test3, test 6
  textArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function omitOffensiveWords(text) {
  const offensiveWords = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];

  offensiveWords.forEach(word => {
    const wordPattern = new RegExp(word);

    if (text.includes(word)) {
      text = text.replace(wordPattern, '');
    }
  });

  return text;
}