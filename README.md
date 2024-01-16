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
Notes:



## Known Bugs

_No known bugs or issues. If you find any, please report them._

## License

[MIT](./License.txt)

_For any issues, questions, or concerns about this application, contact the author: laurenschrader123@gmail.com_