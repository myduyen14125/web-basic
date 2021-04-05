let list = document.getElementById('list');
let elName = document.getElementById('fullname').value;
let elAge = document.getElementById('age').value;
let model = document.getElementById("box-model");
let btn = document.getElementById("btn");
model.style.display = "none";

function myFunction(e) {
    e.preventDefault();
    let elName = document.getElementById('fullname').value;
    console.log(elName);
    list.innerHTML += '<li>' + elName + '</li>';
}

function check(){
   if(elName < 'A' || elName > 'z' || elName == null || elName == ""){
       model.style.display = "block";
   }
}

function close(){
    model.style.display = "none";
}


btn.addEventListener("click", function(e) { //async
    close();
});



