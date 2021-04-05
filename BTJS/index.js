let list = document.getElementById('list');
let elName = document.getElementById('fullname').value;
let elAge = document.getElementById('age').value;
let model = document.getElementById("box-model").style.display = "none";

function myFunction(e) {
    e.preventDefault();
    let elName = document.getElementById('fullname').value;
    console.log(elName);
    list.innerHTML += '<li>' + elName + '</li>';
}

function check(){
   if(elName < 'A' || elName > 'z' || elName == null || elName == ""){
       let model = document.getElementById("box-model").style.display = "block";
   }
}

function close(){
    let model = document.getElementById("box-model").style.display = "none";
}
