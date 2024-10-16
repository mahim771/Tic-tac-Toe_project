const allBtn = document.querySelectorAll('#btn')
const Msg = document.querySelector('.msg')
const reStart = document.querySelector('.restart')


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

let playGame = true;
let count = 0;
allBtn.forEach((item) =>
{
    item.addEventListener('click',() =>
    {
        if(playGame)
        {
            item.innerText = 'X';
            playGame = false;
        }else
        {
            item.innerText = 'O';
            playGame = true;
        }

        item.disabled = true;
        count ++;
        const isDraw = checkWinner();
        if(!isDraw && count === winPatterns.length+1 )
        {
            drawGame();
        }
    })
   
   
})
const drawGame = () =>
{
    Msg.innerHTML = `<h2> Draw Game .Please try again</h2<`
}
function checkWinner()
{
    for(let pattern of winPatterns)
    {
        const val1 = (allBtn[pattern[0]].innerText)
        const val2 = (allBtn[pattern[1]].innerText)
        const val3 = (allBtn[pattern[2]].innerText);

        if(val1 !== '' && val2 !== '' && val3 !== '')
        {
            if(val1 === val2 && val2 === val3)
            {
                console.log('win')
                Msg.innerHTML = `<h1>Winner is ${val1}</h2>`
                disableBtn();
            }
        }
    }
}

const disableBtn = () =>
{
    for(let btn of allBtn)
    {
        btn.disabled = true;
    }
}
const enableBoxes = () =>
{
    for(let btn of allBtn)
    {
        btn.disabled = false;
        btn.innerText = '';
    }
}

const restGane = () =>
{
    playGame = true;
    count = 0;
    enableBoxes();
}

reStart.addEventListener('click', restGane)




