let list = document.getElementById('list');
let elName = document.getElementById('fullname').value;
let i;
let elAge = document.getElementById('age').value;
let model = document.getElementById("box-model");
let btn = document.getElementById("btn");
let dem = 0;

model.style.display = "none";

function myFunction(e) {
    e.preventDefault();
    let elName = document.getElementById('fullname').value;
    let elAge = document.getElementById('age').value;
    for (i = 0; i < elName.length; i++){
        if (elName[i] >= '0' && elName[i] <= '9') 
            dem=1;
            model.style.display = "block";
            break;
    }
    if(dem=0)(list.innerHTML += '<li">' + '<pre>' +  "Name: " + elName + "    Age: " + elAge + '</pre>'+ '</li>');
}


function close(){
    model.style.display = "none";
}

btn.addEventListener("click", function(e) { //async
    close();
});



