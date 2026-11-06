const kotek = document.getElementById("kotek");
const button = document.getElementById("start");
const setting = document.getElementById("setting")
const display = document.getElementById("speed-display");
const liczba_disp = document.getElementById("liczba");
const settings_div = document.getElementById("settings")
liczba_disp.style.display = 'none';
setting.value = "0.5";
let speed = 0.5;
let liczba = 0;
let gra = false;
let obrazek = 0;
let clicked = false;
let interval;

function endgame() {
    gra = false;
    liczba_disp.innerText = `Wynik: ${liczba}`;
    button.style.display = 'inline';
    kotek.style.display = 'none';
    settings_div.style.display = 'block';
    clearInterval(interval);
}

function updatecat() {
    //zdjecia kotow z cataas.com
    obrazek = Math.floor(Math.random()*8);
    kotek.src = `kotki/${obrazek}.jpg`;
}

function numberup() {
    if((String(liczba).includes("7") || liczba % 7 == 0) && !clicked) {
        endgame();
        return;
    }
    clicked = false;
    liczba++;
    liczba_disp.innerText = ""+ liczba;
    console.log(liczba);
    
}

function startgame() {
    kotek.style.display = 'inline';
    button.style.display = "none";
    liczba_disp.style.display = 'flex';
    liczba = 1;
    liczba_disp.innerText = liczba;
    gra = true;
    settings_div.style.display = 'none';
    updatecat();
    interval = setInterval(numberup, speed*1000);
}


button.addEventListener("click", startgame);
setting.addEventListener("input", () => {
    speed = setting.value;
    display.innerText = speed + "s";
})

kotek.addEventListener("click", () => {
    if((String(liczba).includes("7") || liczba % 7 == 0) && !clicked) {
        updatecat();
    }
    else if(!clicked) {
        endgame();
    }
    clicked = true;
}
)