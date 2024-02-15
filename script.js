let scoreCount = 0;
let lifeCount = 3;




function hiddenById(idName) {
    document.getElementById(idName).classList.add('hidden');

}

function showById(idName) {
    document.getElementById(idName).classList.remove('hidden');
}


function continueGame() {

    let num = Math.random() * 25;
    let random = Math.round(num);
    let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    let alphabet = alphabetArray[random];
    document.getElementById('Alphabet').innerText = alphabet;

    let keybordalpha = document.getElementById(alphabet);
    keybordalpha.classList.add('bg-[#FFA500]')
}

function removeClass(idName) {

    document.getElementById(idName).classList.remove('bg-[#FFA500]');
}


function play() {
    hiddenById('wellcome')
    showById('playground')
    continueGame()


}




function keybord(event) {
    let gamerpress = event.key;
    let prasedKey = gamerpress.toLowerCase();

    let expectedKey = document.getElementById('Alphabet').innerText;
    expectedKey = expectedKey.toLowerCase();


    if (expectedKey === prasedKey) {

        removeClass(expectedKey)
        scoreCount++


        document.getElementById('scoreSpan').innerText = scoreCount;
        document.getElementById('lastScore').innerText = scoreCount

        continueGame()

    } else {
        lifeCount--
        if (lifeCount === 0) {
            hiddenById('playground')
            showById('score');
           
            removeClass(expectedKey)

        }

        document.getElementById('lifeSpan').innerText = lifeCount;



    }

}

function clear(){

     scoreCount = 0;
 lifeCount = 3;

 document.getElementById('scoreSpan').innerText = scoreCount;
 document.getElementById('lifeSpan').innerText = lifeCount;
 document.getElementById('lastScore').innerText = scoreCount;

    
    hiddenById('score')
    showById('playground')



    













    continueGame()



   
}








let playBtn = document.getElementById('play');
playBtn.addEventListener('click', play);
let playAgain = document.getElementById('playAgain');
playAgain.addEventListener('click', clear)

document.addEventListener('keyup', keybord)