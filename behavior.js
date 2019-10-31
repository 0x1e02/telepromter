const SPEED = 500;
const PRE_READ = 5;
const TEXTS = ["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."]


counter = 0;

function telepromter(text){
    var text = text.split(" ");
    var display = document.getElementById("display");
    var intervall = setInterval(function(){
        var slice = text.slice(counter, counter+PRE_READ);
        var highlight = document.createElement("div");
        highlight.setAttribute("class", "highlight");
        highlight.innerText = slice.shift();
        display.innerHTML = "<div class='highlight'>" + slice.shift() + "</div> " + slice.join(" ");
        if (counter++ == text.length){
            clearInterval(intervall);
        }
    }, SPEED);
}

document.onclick = function(){
    telepromter(TEXTS[0]);
}
