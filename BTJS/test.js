let inputName = document.getElementById("name").value;
let inputAge = document.getElementById("age").value;
let add = document.getElementById("add");

add.addEventListener("click", function() {
    
    if (typeof inputName === 'string'){
        alert("Okay desu");
    }
    else{
        alert("Nhập lại đi hehe");
    }
});

/*let a = document.getElementById("name");
if (typeof a === 'string'){
    console.log("Okay desu");
    alert("Okay");
}
else{
    console.log("Nhap lai di eu");
    alert("Nhap lai di eu");
}
*/
/*function click(){
    //Check name and age
    let inputName = document.getElementById("name");
    let inputAge = document.getElementById("age");
    if (typeof inputName === 'string'){
        alert("Okay");
    }
    else{
        alert("Nhap lai");
    }
*/