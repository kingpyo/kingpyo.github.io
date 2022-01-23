const nightDayForm = document.querySelector("#nightday-button");
const nightDayButton = document.querySelector("#nightday-button button");

const imgId = document.querySelector("#img");

const colorList = [
    "#E8EDEA",
    "#ebf7ff",
    "#ebfae8",
    "#fdfbef"
]


const chosenBackgrounColor = colorList[Math.floor(Math.random()*colorList.length)];
document.body.style.backgroundColor = chosenBackgrounColor;

function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
function setColor(color) {
    document.body.style.color = color;
}

function setToDoInputColor(color) {
    document.querySelector("#todo_input").style.borderColor = color;
}

function setLoginInputColor(color) {
    document.querySelector("#login_input").style.borderColor = color;
}

function nightDayHandler(){
    if (nightDayButton.value === 'Day') {
        setBackgroundColor(chosenBackgrounColor);
        setColor("#35363A");
        setToDoInputColor("black");
        setLoginInputColor("black");
        imgId.src = "img/light.png"
        nightDayButton.value = 'Night';
    } else {
        setBackgroundColor("#35363A");
        setColor("#E8EDEA");
        setToDoInputColor("white");
        setLoginInputColor("white");
        imgId.src = "img/black.png"
        nightDayButton.value = 'Day'
        ;
    }
}

nightDayForm.addEventListener("click", nightDayHandler)
