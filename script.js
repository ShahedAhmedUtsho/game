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
    document.addEventListener('keyup', keybord)
    

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
    
        } else  {



            






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
    hiddenById('score')
   showById('playground')
   continueGame()

    scoreCount = 0;
lifeCount = 3;

document.getElementById('scoreSpan').innerText = scoreCount;
document.getElementById('lifeSpan').innerText = lifeCount;
document.getElementById('lastScore').innerText = scoreCount;

   
   
}
let playAgain = document.getElementById('playAgain');

function enterCheck(event) {
    let playHave = document.getElementById('playground').classList;
    let playContainCheck = playHave.contains("hidden");
    let scoreHave = document.getElementById('score').classList;
    let scoreContainCheck = scoreHave.contains("hidden");
    let wellHave = document.getElementById('wellcome').classList;
    let wellContainCheck = wellHave.contains("hidden");

    if(playContainCheck && scoreContainCheck && !wellContainCheck ){
        //     play()
        // }
        play()
        
        
    }


     if (event.key === "Enter") {
        if (playContainCheck && wellContainCheck ) {
        playAgain.click();

          lifeCount = lifeCount+1
        }

    }
    
}












let playBtn = document.getElementById('play');
playBtn.addEventListener('click', play);


playAgain.addEventListener('click', clear)

    document.addEventListener('keyup',enterCheck)


function noti(){
    console.log("clilicked")
}

playAgain.addEventListener('click', noti)

