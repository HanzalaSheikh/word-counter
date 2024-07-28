let word = document.getElementById('word');
let character = document.getElementById('character');
let sentence = document.getElementById('sentence');


function mainFunction() {
    let text = document.getElementById('text-area').value;
    character.innerHTML = text.length;
    let countWord = text.trim().split(" ");
    let result = countWord.filter( (element) => {
        return element;
    }).length;
    word.innerHTML = result;
    let sentenceCount = text.trim().split(".");
    sentence.innerHTML = sentenceCount.filter( (element) => {
        return element;
    }).length;
    result.filter()

};