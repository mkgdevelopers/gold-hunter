window.onload = function(){
    printTable();

    setGold();
}
let score=0;
let moves=10;
let gameOver = false;
function printTable(){
    for(let i = 0 ; i < 25; i++){
        let box = document.createElement('div');
        box.id = i.toString();
        box.addEventListener("click",selectBox);
        document.getElementById('board').appendChild(box);
    }
}

function setGold(){
    for(let i = 0; i < 6;i++){
        let index = Math.floor(Math.random()*24);
        document.getElementById(index).classList='gold';
    }
    
}

function selectBox(){
    if(moves > 0){
        if(this.classList == "gold"){
            // console.log("Gold");
            this.style.backgroundImage = "url('gold.png')";
            score += 10;
            moves--;
            document.getElementById('score').innerHTML='Score : '+score.toString()+'<br>Moves : '+moves.toString();

        }
        else{
            // console.log("empty")
            this.style.backgroundImage = "url('empty.png')";
            moves--;
            document.getElementById('score').innerHTML='Score : '+score.toString()+'<br>Moves : '+moves.toString();


        }
    }
    else{
        document.getElementById('btn').style.display='block'
    }
}