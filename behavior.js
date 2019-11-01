const SPEED = 300;
const PRE_READ = 10;
const TEXTS = ["Die Kritik nach dem CDU-Debakel in Thüringen an Angela Merkel wächst. Zwar hat die Kanzlerin die Führung der Partei vor einem Jahr an Annegreat Kramp-Karrenbauer angegeben. Doch das tatenlose Zusehen der Demontage ihrer Wunschnachfolgerin beunruhigt immer mehr Christdemokraten. Trigema-Chef Wolfgang Grupp erklärt, welche Voraussetzungen für einen Generationenwechsel unabdingbar sind – in der Wirtschaft sowohl als auch in der Politik. Von FOCUS-Online-Redakteur Ulf Lüdeke"];


function telepromter(text){
    var text = text.split(" ");
    display = document.getElementById("display");
    display.innerHTML = text.map(x => `<span>${x}</span>`).join(" ");
    let x = 0;
    let speed = SPEED;
    var intervall = setInterval(function(){
        const child = display.children[x];
        child.className = "highlight";
        window.scrollTo({left: display.children[x].getBoundingClientRect().x + window.scrollX - 300, behavior: 'smooth'});
        x++;
    }, speed);
}

document.onclick = function(){
    /* does start a new instacne on every click. be sure to click just once */
    telepromter(TEXTS[0]);
}
