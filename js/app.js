// variables 
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGameBtn= document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
var missed = 0;

// Start game event listener
startGameBtn.addEventListener('click', ()=>{
   overlay.style.display = 'none';
});

// Arrays

phrases = [
    "animals are very interesting creatures",
    "bunnies can hop really fast",
    "cats can meow and hiss",
    "dogs can bark and play fetch",
    "elephants are very cute and love to eat peanuts"
];

// Functions

function getRandomPhraseAsArray(array){
    // get a random number to use as an index
    const num = Math.floor(Math.random() * phrases.length);
    // access the phrase at that index
    const phraseString = array[num];
    // split the phrase into a new array of characters and store it in characterArray
    const characterArray = phraseString.split('');
    // return characterArray


    return characterArray;







};
// getRandomPhraseAsArray(phrases);








// Event Listeners















