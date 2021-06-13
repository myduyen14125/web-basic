let hiddenBar = document.getElementById("hidden-bar");
let headerBox = document.getElementById("header-box");
let count = 0;
let x = window.matchMedia("(max-width: 1200px)");

// Scrollpy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
  })
  

// Resize screen 
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

// JS choose each page
// let homeButton = document.getElementById("home-button"); 
// let aboutButton = document.getElementById("about-button");
// let resumeButton = document.getElementById("resume-button");
// let portfolioButton = document.getElementById("portfolio-button");
// let blogButton = document.getElementById("blog-button");
// let contactButton = document.getElementById("contact-button");

// let homePage = document.getElementById("home-page");
// let aboutPage = document.getElementById("about-page");
// let resumePage = document.getElementById("resume-page");
// let portfolioPage = document.getElementById("portfolio-page");
// let blogPage = document.getElementById("blog-page");
// let contactPage = document.getElementById("contact-page");

// // Default of the screen when open CV
// homeButton.style.backgroundColor = "#0f7bff";
// homePage.style.display = "block";



// Invalid input contact
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let subjectInput = document.getElementById("subjectInput");
let messageInput = document.getElementById("messageInput");

let invalidModel = document.getElementById("invalid-model");
let contactForm = document.getElementById("contact-form");


contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    invalidModel.style.display = "flex";
    invalidModel.style.backgroundColor = "#d4edda";
    invalidModel.style.color = "#366540";
    invalidModel.innerText = "Your message has been sent !!!"
})

function invalidInput(){
    if(!nameInput.checkValidity()){
        invalidModel.style.display = "flex";
        invalidModel.style.backgroundColor = "#f6d7d9";
        invalidModel.style.color = "#722324";
        invalidModel.innerText = "Name is required";
    }
    else if(!emailInput.checkValidity()){
        invalidModel.style.display = "flex";
        invalidModel.style.backgroundColor = "#f6d7d9";
        invalidModel.style.color = "#722324";
        invalidModel.innerText = "Email is required";
    }
    else if(!subjectInput.checkValidity()){
        invalidModel.style.display = "flex";
        invalidModel.style.backgroundColor = "#f6d7d9";
        invalidModel.style.color = "#722324";
        invalidModel.innerText = "Subject is required";
    }
    else if(!messageInput.checkValidity()){
        invalidModel.style.display = "flex";
        invalidModel.style.backgroundColor = "#f6d7d9";
        invalidModel.style.color = "#722324";
        invalidModel.innerText = "Message is required";
    }
}

//Zoom photo -> change: zoom photo just be a model 
// let zoomPhoto = document.getElementsByClassName("fa-search-plus");

// for(let i = 0; i < zoomPhoto.length; i++){
//     // let id = Number(zoomPhoto[i].getAttribute("id"));
//     // let img = document.getElementById("photo" + id);
//     zoomPhoto[i].addEventListener("click", function(){
//         alert("heheh helo");
//     })
// }
