window.alert("1) Name can be changed before the completion of the 1st match.\n2) Click on the tick button to submit your name.\nGOOD LUCK!");
let count=0;
//setting up player 1
const name1=document.querySelector('.players .player1 input');
const points1=document.querySelector('.players .player1 .points');
let resultName1=document.querySelector('.result .player1');
points1.onclick=()=>{
    points1.innerText='0';
    resultName1.innerText=name1.value;
}


//setting up player 2
const name2=document.querySelector('.players .player2 input');
const points2=document.querySelector('.players .player2 .points');
let resultName2=document.querySelector('.result .player2');
points2.onclick=()=>{
    points2.innerText='0';
    resultName2.innerText=name2.value;
}


const playerO='O';
const playerX='X';
let currPlayer=playerO;


function resetBoard()
{
    count=0;
    currPlayer=playerO;
    let eleArray=document.querySelectorAll('.box');
    eleArray.forEach(element=>{
        element.innerText='';
        element.classList.remove('disable','changeBoxColor','doColorRed');
        element.classList.add('doColorWhite');
    })
    resultName1.classList.remove('markGreen','markRed','markgrey');
    resultName1.innerText=name1.value;
    resultName2.classList.remove('markGreen','markRed','markgrey');
    resultName2.innerText=name2.value;
}


function winCheck()
{
    const conditions=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    let eleArray=document.querySelectorAll('.box');
    for(i=0;i<8;i++)
    {
        if(eleArray[conditions[i][0]].innerText!='' && eleArray[conditions[i][0]].innerText==eleArray[conditions[i][1]].innerText && eleArray[conditions[i][1]].innerText==eleArray[conditions[i][2]].innerText)
        {
            for(j=0;j<9;j++)
            {
                if(j!=conditions[i][0] && j!=conditions[i][1] && j!=conditions[i][2])
                {
                    eleArray[j].classList.remove('doColorWhite');
                    eleArray[j].classList.add('doColorRed','disable');
                }
            }
            for(j=0;j<3;j++)
            {
                eleArray[conditions[i][j]].classList.remove('doColorWhite');
                eleArray[conditions[i][j]].classList.add('changeBoxColor');
            }
            if(eleArray[conditions[i][0]].innerText=='O')
            {
                resultName1.classList.add('markGreen');
                resultName1.innerHTML+='<img src="won.png" alt="Won">';
                resultName2.classList.add('markRed');
                resultName2.innerHTML+='<img src="lose.png" alt="Lose">';
                points1.innerText++;
                points1.classList.add('disable');
                points2.classList.add('disable');
                name1.classList.add('disable');
                name2.classList.add('disable');
            }
            else
            {
                resultName2.classList.add('markGreen');
                resultName2.innerHTML+='<img src="won.png" alt="Won">';
                resultName1.classList.add('markRed');
                resultName1.innerHTML+='<img src="lose.png" alt="Lose">';
                points2.innerText++;
                points2.classList.add('disable');
                points1.classList.add('disable');
                name2.classList.add('disable');
                name1.classList.add('disable');
            }
            return true;
        }
    }
    return false;
}


function flip(currPlayer)
{
    if(currPlayer==playerX)
        return playerO;
    else
        return playerX;
}


let flagForDraw=true;
let eleArray=document.querySelectorAll('.box');
eleArray.forEach(element=>{
    element.onclick=()=>{
        count++;
        element.classList.add('doColorWhite');
        element.innerText=currPlayer;
        element.classList.add('disable');
        if(winCheck())
            c=10;
        else
        {
            currPlayer=flip(currPlayer);
            if(count==9)
            {
                resultName1.innerHTML='DRAW ! <img src="draw.png" alt="Draw">';
                resultName2.innerHTML='DRAW ! <img src="draw.png" alt="Draw">';
                points1.classList.add('disable');
                points2.classList.add('disable');
                name1.classList.add('disable');
                name2.classList.add('disable');
            }
        }
    }
});

