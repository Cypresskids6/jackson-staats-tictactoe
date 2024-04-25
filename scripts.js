let currentTurn = 0;
let gameOver = false;

// playerturns = 0, 2, 4, 6, 8...
// AI turns = 1, 3, 5, 7, 9...

const button1 = document.getElementById("sq0")
const button2 = document.getElementById("sq1")
const button3 = document.getElementById("sq2")
const button4 = document.getElementById("sq3")
const button5 = document.getElementById("sq4")
const button6 = document.getElementById("sq5")
const button7 = document.getElementById("sq6")
const button8 = document.getElementById("sq7")
const button9 = document.getElementById("sq8")

const box = document.querySelector(".box");

let buttonList = [ //array

    button1, button2, button3, button4, button5, button6, button7, button8, button9
]
Gameplay();     //funtion call
function Gameplay(){    //function deffinition
 buttonList.forEach(button => { //arrow funtion
    button.oncclick = () => {
        let pTag = button.children[0];
        if(currentTurn % 2 == 0){
            currentTurn++; //iterator, adds 1
            pTag.innerHTML = "X"; //changes the text 
            button.Disabled = true;
            buttonList.splice(button.classList.indexOf(button),1);
            checkWin();
            if(gameOver == false){
                AITurn(buttonList);
            }
        }
    };
});

}

function AITurn(List){
    if(List.length > 0){
let random = Math.floor(Math.random() * List.length);
let aiChoice = List[random];
aiChoice = List[random];
List.splice(buttonList.indexOf(aiChoice),1);
let pTag = aiChoice.children[0];
pTag.innerHTML = "0"
currentTurn++;
checkWin();
    }
}

function checkWin(){

}