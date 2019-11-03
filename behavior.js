/* This code is optimized for german language. The detection of syllables for example may not work properly in other languages */

const SPEED = 190;
const mono_phonetics = ["au", "ei", "ai", "ey", "ay", "eu", "äu", "ui", "ie", "a", "e", "i", "o", "u", "ä", "ö", "ü"];
/* This exercpt is credited to https://www.focus.de/politik/deutschland/interview-mit-wolfgang-grupp-trigema-chef-verraet-wie-er-seine-nachfolge-regelt-und-was-merkel-daraus-lernen-kann_id_11297835.html */
const TEXTS = ["Die Kritik nach dem CDU-Debakel in Thüringen an Angela Merkel wächst. Zwar hat die Kanzlerin die Führung der Partei vor einem Jahr an Annegreat Kramp-Karrenbauer angegeben. Doch das tatenlose Zusehen der Demontage ihrer Wunschnachfolgerin beunruhigt immer mehr Christdemokraten. Trigema-Chef Wolfgang Grupp erklärt, welche Voraussetzungen für einen Generationenwechsel unabdingbar sind – in der Wirtschaft sowohl als auch in der Politik. Von FOCUS-Online-Redakteur Ulf Lüdeke"];


function count_vocals(word){
    word = Array.from(word.toLowerCase());
    for (let i = 0; i<word.length; i++){
        let truth_map = mono_phonetics.map( x => word.join("").slice(i, i+x.length) == x);
        let j = truth_map.indexOf(true);
        if (j != -1){
            word[i] += word.splice(i+1, mono_phonetics[j].length-1);
        }
    }
    /* don't touch it works.. thats good enough */
    return word.filter(x=>Array.from(x)
    .map(y => ! "aeiouäöü".includes(y))
    .reduce((a,b) => a+b) == 0).length;
}

function telepromter(text){
    var text = text.split(" ");
    let display = document.getElementById("display");
    let x = 0;
    let speed = 0;
    display.innerHTML = text.map(x => `<span>${x}</span>`).join(" ");

    function timeout(){
        const child = display.children[x];
        setTimeout(function(){
            child.className = "highlight";
            speed = SPEED * (count_vocals(display.children[x].innerHTML));
            window.scrollTo({left: display.children[x].getBoundingClientRect().x + window.scrollX - 300, behavior: 'smooth'});
            if (++x < text.length){
                timeout();
            }
            
        }, speed);
    }
    timeout();
}

document.onclick = function(){
    /* does start a new instacne on every click. be sure to click just once */
    telepromter(TEXTS[0]);
}
