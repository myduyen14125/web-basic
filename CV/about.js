let hiddenBar = document.getElementById("hidden-bar");
let headerBox = document.getElementById("header-box");
let count = 0;
let x = window.matchMedia("(max-width: 1200px)");

function reszieScreen(x){
    if(x.matches){
        headerBox.style.transform = "translate(-260px)";
        hiddenBar.style.display = "block";
    }
    else{
        headerBox.style.transform = "translate(0px)";
        hiddenBar.style.display = "none";        
    }
}
reszieScreen(x);
x.addEventListener("change", reszieScreen);

hiddenBar.addEventListener("click", function(e){
    count ++;
    if(count % 2 != 0){
        headerBox.style.transform = "translateX(0)";
        headerBox.style.zIndex = "100";
        hiddenBar.style.transform = "translateX(260px)";
        hiddenBar.innerHTML = "X";
    }
    else{
        headerBox.style.transform = "translateX(-260px)";
        hiddenBar.style.transform = "translateX(0px)";
        hiddenBar.innerHTML = '<div class="fa fa-bars">' + '</div>';        
    }

})
