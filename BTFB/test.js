let symbol = document.getElementById("symbol");
let arrow = document.getElementById("arrow");
let search = document.getElementById("search");
let input = document.getElementById("input");
let smallBubbles = document.getElementsByClassName("small-bubble");

arrow.style.display = "none";
input.addEventListener("focusin", function(e){
    symbol.style.display = "none";
    arrow.style.display = "inline";
    search.style.marginLeft = "0";
});
input.addEventListener("focusout", function(e){
    symbol.style.display = "inline";
    arrow.style.display = "none";
    search.style.marginLeft = "15px";
});

for(let i = 0; i < smallBubbles.length; i++){
    let id = Number(smallBubbles[i].getAttribute("id"));
    let img = document.getElementById("li" + id);
    smallBubbles[i].addEventListener("click", function(e){
        img.style.display = "none";
    })
}
