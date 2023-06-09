const textInputElement = document.getElementById("textInput");
const stringSeedElement = document.getElementById("stringSeed");

const seedInputElement = document.getElementById("seedInput");
const seedStringElement = document.getElementById("seedString");

const everySentenceElement = document.getElementById("everySentence");

const asciiMinShift = 32;
const numOfLetters = 95;

function CStrTSeed() 
{
    var inputString = textInputElement.value;
    var BackwardsCounter = 0;
    var seeder = 0

    BackwardsCounter = inputString.length - 1;
    for (var i = 0; i < inputString.length; i++)
    {
        var inputValue = inputString.charCodeAt(i) - asciiMinShift;
        seeder += inputValue * Math.pow(numOfLetters, BackwardsCounter);
        BackwardsCounter--;
    }

    stringSeedElement.innerHTML += "\n";
    stringSeedElement.innerHTML += inputString + "'s Seed:" + seeder;
}

function CSeedTStr() 
{
    var inputNumber = seedInputElement.value;

    for (var j = -1; j < 2; j++)
    {
        var seedPad = parseInt(inputNumber) + j;
        seedStringElement.innerHTML += "#" + seedPad + " :";
        for (var i = inputNumber.length - 1; i >= 0; i--)
        {
            var letterNum = Math.floor(seedPad / Math.pow(numOfLetters, i) % numOfLetters);
            seedStringElement.innerHTML += String.fromCharCode(letterNum + asciiMinShift);
        }
        seedStringElement.innerHTML += "\n";
    }
}

var seed = 0;
var sentenceLength = 2;

for (var j = 0; j <= 94; j++)
{
    seed = j;
    everySentenceElement.innerHTML += "#" + seed + " :";
    for (var i = sentenceLength - 1; i >= 0; i--)
    {
        var letterNum = Math.floor(seed / Math.pow(numOfLetters, i) % numOfLetters);
        everySentenceElement.innerHTML += String.fromCharCode(letterNum + asciiMinShift);
    }
    everySentenceElement.innerHTML += "\n";
}