# _Text Analyzer_

#### By _**Lauren Schrader**_

#### _Text Analyzer._

## Technologies Used

* **HTML** - For designing the structure of each page.
* **JS** - For handling interface logic.
* **CSS** - For styling the content of the pages.
* **Git/GitHub** - For tracking all changes made to the project.
* **VSCode** - The code editor used for writing all code of the project.

## Description



## Setup/Installation Requirements

## Tests (TDD) 

Describe: wordCounter()

Test1: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1
Notes:

Test2: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2
Notes:

Test3: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0
Notes: Utilize string.length to check that length is 0.

Test4: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0
Notes: Utilize String.prototype.trim() to trim all whitespace from both ends of the string.

Test5: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2
Notes: Utilize Number() (built-in JavaScript function) which either returns a  number or NaN. 

Number("16") will return 16 while Number("hi") returns NaN. So if something's not a number (NaN), we will increment our wordCount. If it is a number, we won't increment it.

Also, we changed parameter variable name from "word" to "element" to accurately reflect that it may not always be a word..

Describe: numberOfOccurrencesInText()

Test1: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0
Notes:

Test2: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1
Notes:

Test3: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0
Notes:

Test4: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4
Notes: Once again, we split the text passage into an array and create a wordCount that starts at 0. We loop through this array, and if the word we've passed into our function is equal to the element in textArray, we've found an instance of the word and we can increment wordCount by one. Finally, we return wordCount.

Test5: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3
Notes: Utilize String.prototype.toLowerCase() on both word and element to account for uppercase/lowercase variations.

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3
Notes: Utilize  String.prototype.includes(), which checks to see if a string includes another string or character. Essentially, use this function to check whether the word (e.g. red) is included in text (e.g. ["Red!", "Red.", "I", "like", "red,", "don't", "you?"]) regardless of anything else included, like punctuation.

So, we updated conditional here:
element.toLowerCase().includes(word.toLowerCase())

Test7: "It should omit the following words: "zoinks", "muppeteer", "biffaroni", and "loopdaloop"
Code:
const text = "Red! zoinks, muppeteer, biffaroni, and loopdaloop Red. ";
const word = "zoinks", "muppeteer", "biffaroni", "loopdaloop";
omitOffensiveWords(word, text);
Expected Output: "
Notes: Utilize  String.prototype.includes(), which checks to see if a string includes another string or character. Essentially, use this function to check whether the word (e.g. red) is included in text (e.g. ["Red!", "Red.", "I", "like", "red,", "don't", "you?"]) regardless of anything else included, like punctuation.

Test8: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
numberOfOccurrencesInText(word, text);
Expected Output: 0
Notes: We add a conditional to check if the word parameter has 0 characters in it after being trimmed, and if so, return 0:

...
if (word.trim().length === 0) {
  return 0;
}
...

Describe: boldPassage()

Test1: "It should return null if no word or text is entered."
Code:
const text = "";
const word = "";
boldPassage(word, text);
Expected Output: null
Notes: Implemented: 

if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return null;
  }



## Known Bugs

_No known bugs or issues. If you find any, please report them._

## License

[MIT](./License.txt)

_For any issues, questions, or concerns about this application, contact the author: laurenschrader123@gmail.com_