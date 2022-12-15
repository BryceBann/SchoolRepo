// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    const words = str.split(" ")
    const newSentence = []
for( let word of words) {
    const wordArr = word.split("")
    wordArr[0] = wordArr[0].toUpperCase()
    newSentence.push(wordArr.join(""))
}
return newSentence.join(" ")
};
