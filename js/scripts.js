
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
  //test8:
  if (word.trim().length === 0) {
    return 0;
  }
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

// UI Logic

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", function () {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});

function boldPassage(word, text) {
  //test1:
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return null;
  }
  //test2, test3, test4
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function (element) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    p.append(" ");
  });
  return p;
}