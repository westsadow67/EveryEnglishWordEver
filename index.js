const textInputElement = document.getElementById("textInput");
const stringSeedElement = document.getElementById("stringSeed");

const seedInputElement = document.getElementById("seedInput");
const seedStringElement = document.getElementById("seedString");

const everySentenceElement = document.getElementById("everySentence");
  
//ASCII control & printable characters
/*const asciiMinShift = 0;
const numOfLetters = BigInt(127);*/

//ASCII printable characters
const asciiMinShift = 32;
const numOfLetters = BigInt(95);

function CStrTSeed() 
{
    var inputString = textInputElement.value;
    var BackwardsCounter = 0;
    var seeder = BigInt(0);

    BackwardsCounter = inputString.length - 1;
    for (var i = 0; i < inputString.length; i++)
    {
        var inputValue = BigInt(inputString.charCodeAt(i) - asciiMinShift);
        seeder += inputValue * numOfLetters ** BigInt(BackwardsCounter);
        BackwardsCounter--;
    }
    stringSeedElement.textContent += inputString;
    stringSeedElement.innerHTML += "'s Seed:<br>";
    stringSeedElement.textContent += seeder;
    stringSeedElement.innerHTML += "<br>";
}

function CSeedTStr() 
{
    var inputNumber = BigInt(seedInputElement.value);

    for (var j = -1; j < 2; j++)
    {
        var seedPad = inputNumber + BigInt(j);
        seedStringElement.innerHTML += "#" + seedPad + ":<br>";
		
		var returner = seedPad;
		var powerIncrement = 0;
		while(returner >= 1)
		{
			powerIncrement++;
			returner = returner/numOfLetters;
		}
		
        for (var i = powerIncrement - 1; i >= 0; i--)
        {
            var letterNum = seedPad / numOfLetters ** BigInt(i) % numOfLetters;
            seedStringElement.innerHTML += String.fromCharCode(Number(letterNum) + asciiMinShift);
        }
        seedStringElement.innerHTML += "<br>";
    }
}

//for sentenceLength 1 is seeds #0 to #94 or (95 ^ 1) -1
//for sentenceLength 2 is seeds #95 to #9024 or (95 ^ 2) -1
//for sentenceLength 3 is seeds #9025 to #857374 or (95 ^ 3) -1
//for sentenceLength 4 is seeds #857375 to #81450624 or (95 ^ 4) -1
//for sentenceLength 5 is seeds #81450625 to #7737809374 or (95 ^ 5) -1
//for sentenceLength 6 is seeds #7737809375 to #735091890624 or (95 ^ 6) -1
//for sentenceLength 7 is seeds #735091890625 to #69833729609374 or (95 ^ 7) -1
//for sentenceLength 8 is seeds #69833729609375 to #6634204312890624 or (95 ^ 8) -1
//for sentenceLength 9 is seeds #6634204312890625 to #630249409724609374 or (95 ^ 9) -1
//for sentenceLength 10 is seeds #630249409724609375 to #59873693923837890624 or (95 ^ 10) -1
var startingInt = BigInt(0);
var XSeeds = BigInt(95);
var Shifter = 0;
function LoadXSeeds()
{
    for (var thisSeed = startingInt; thisSeed < startingInt + XSeeds; thisSeed++)
    {
        everySentenceElement.innerHTML += "#" + thisSeed + " :";
        var returner = thisSeed;
        var sentenceLength = 0;
        while(returner >= 1)
        {
            sentenceLength++;
            returner = returner/numOfLetters;
        }
        console.log(sentenceLength);
        
        for (var i = sentenceLength - 1; i >= 0; i--)
        {
            var letterNum = thisSeed / numOfLetters ** BigInt(i) % numOfLetters;
            everySentenceElement.innerHTML += String.fromCharCode(Number(letterNum) + asciiMinShift);
        }
        everySentenceElement.innerHTML += "<br>";

        Shifter++;
        if (Shifter == numOfLetters)
        {
            everySentenceElement.innerHTML += "<br>";
            Shifter = 0;
        }
    }
    startingInt += XSeeds;
}
LoadXSeeds();

//Old Why of doing it before BigInt
/*var seed = 0;
sentenceLength = 6;
seed = Math.pow(numOfLetters, 10) * seed;
everySentenceElement.innerHTML += "#" + seed + " :";
for (var i = sentenceLength - 1; i >= 0; i--)
{
    var letterNum = Math.floor(seed / Math.pow(numOfLetters, i) % numOfLetters);
    everySentenceElement.innerHTML += String.fromCharCode(letterNum + asciiMinShift);
}
everySentenceElement.innerHTML += "\n";*/
