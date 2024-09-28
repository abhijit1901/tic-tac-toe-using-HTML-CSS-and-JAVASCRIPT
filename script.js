let restart=document.querySelector(".res-button");
let allSubDiv=document.querySelectorAll(".sub-div");
let playerName=document.querySelector(".result");
let announcement=document.querySelector(".announcement")
let backgroundMusic=new Audio("/assets/background music.wav")
let circleAudio=new Audio("/assets/circle audio.wav")
let crossAudio=new Audio("/assets/cross audio.wav")
let winnerAudio=new Audio("/assets/winner audio.wav")
let drawAudio=new Audio("/assets/wrong-47985.wav")
let volumeUp=document.querySelector(".volume-up")



let board=  [   ['','',''],
                ['','',''],
                ['','','']   ];

let player1;
let player2;
let count=0;

    restart.addEventListener("click",()=>{
        count=0;
        playerName.innerText="";
        announcement.innerText="start by clicking the box";
        board=  [   ['','',''],
                    ['','',''],
                    ['','','']   ];
        console.log(board); 
        winnerAudio.pause();
        for(subDiv of allSubDiv){
            subDiv.innerText="";
            subDiv.classList.remove("winning-color");
            subDiv.classList.remove("draw-color");
            subDiv.addEventListener("click",subDivPress);
        }
    })

function subDivPress(){
    announcement.innerText="";
    let btn=this;
    subDivIndex=btn.getAttribute("id");
    console.log(subDivIndex);
    playerInput(subDivIndex);
    btn.removeEventListener("click",subDivPress);
}

function checkWinner(){
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            let winnerBoxr0=document.getElementById("btn-"+i+","+0)
            let winnerBoxr1=document.getElementById("btn-"+i+","+1)
            let winnerBoxr2=document.getElementById("btn-"+i+","+2)
            winnerBoxr0.classList.add("winning-color")
            winnerBoxr1.classList.add("winning-color")
            winnerBoxr2.classList.add("winning-color")
            console.log(board[i][0] + " wins!");
            playerName.innerText= board[i][0] + " wins!";
            announcement.innerText="play again !!!"
            winnerAudio.loop=true;
            winnerAudio.play();
            return true;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            let winnerBoxc0=document.getElementById("btn-"+0+","+i)
            let winnerBoxc1=document.getElementById("btn-"+1+","+i)
            let winnerBoxc2=document.getElementById("btn-"+2+","+i)
            winnerBoxc0.classList.add("winning-color")
            winnerBoxc1.classList.add("winning-color")
            winnerBoxc2.classList.add("winning-color")
            console.log(board[0][i] + " wins!");
            playerName.innerText= board[0][i] + " wins!";
            announcement.innerText="play again !!!"
            winnerAudio.loop=true;
            winnerAudio.play();
            return true;
        }
    }
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        let winnerBoxD0=document.getElementById("btn-"+0+","+0)
        let winnerBoxD1=document.getElementById("btn-"+1+","+1)
        let winnerBoxD2=document.getElementById("btn-"+2+","+2)
        winnerBoxD0.classList.add("winning-color")
        winnerBoxD1.classList.add("winning-color")
        winnerBoxD2.classList.add("winning-color")
        console.log(board[0][0] + " wins!");
        playerName.innerText= board[0][0] + " wins!";
        announcement.innerText="play again !!!"
        winnerAudio.loop=true;
        winnerAudio.play();
        return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        let winnerBoxUD0=document.getElementById("btn-"+0+","+2)
        let winnerBoxUD1=document.getElementById("btn-"+1+","+1)
        let winnerBoxUD2=document.getElementById("btn-"+2+","+0)
        winnerBoxUD0.classList.add("winning-color")
        winnerBoxUD1.classList.add("winning-color")
        winnerBoxUD2.classList.add("winning-color")
        console.log(board[0][2] + " wins!");
        playerName.innerText= board[0][2] + " wins!";
        announcement.innerText="play again !!!"
        winnerAudio.loop=true;
        winnerAudio.play();
        return true;
    }
    if (count === 9) {
        console.log("It's a draw!");
        playerName.innerText= "both of you tried well..";
        announcement.innerText="play again !!!"
        for(subDiv of allSubDiv){
            subDiv.classList.add("draw-color");
        }
        drawAudio.play();
        return true;
    }
    return false;
}

for(subDiv of allSubDiv){
    subDiv.addEventListener("click",subDivPress);
}

function playerInput(divid){
    let box=document.getElementById(divid);
    count++;
    if(count%2==0){
        circleAudio.play();
        box.innerText="O";
        let row =parseInt(divid.charAt(4));
        let column =parseInt(divid.charAt(6));
        board[row][column]="0";
        console.log("audio played")
        checkWinner();
    }
    else{
        crossAudio.play();
        box.innerText="X";
        let row =parseInt(divid.charAt(4));
        let column =parseInt(divid.charAt(6));
        board[row][column]="X";
        console.log("audio played")
        checkWinner();
    }
    if(checkWinner()){
        for(subDiv of allSubDiv){
            subDiv.removeEventListener("click",subDivPress);
        }
    }
}
// volume button element
let volumeButton= document.querySelector(".volume-button");

// bg music event
backgroundMusic.loop=true;
volumeButton.addEventListener("click",()=>{
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        volumeUp.setAttribute("src","/assets/volume-up1.jpg")
    } 
    else{
        backgroundMusic.pause();
       volumeUp.setAttribute("src","/assets/mute_icon.jpg")
    }
});

