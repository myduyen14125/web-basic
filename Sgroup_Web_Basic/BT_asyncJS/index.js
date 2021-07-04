let list = document.getElementById('list');
let elName = document.getElementById('fullname').value;
let i;
let model = document.getElementById("box-model");
let btn = document.getElementById("btn");


model.style.display = "none";
function close(){
    model.style.display = "none";
}
btn.addEventListener("click", function(e) { //async
    close();
});

async function myFunction(e) {
    e.preventDefault();

    let dem = 0;
    let elName = document.getElementById('fullname').value;
    for (i = 0; i < elName.length; i++){
        if (elName[i] >= '0' && elName[i] <= '9') {
            dem = 1;
            model.style.display = "block";
            break;
        }
    }
    if(dem == 0){
        await axios.post('https://6065d36cb8fbbd00175677e7.mockapi.io/s-group/users', {
        name: elName
        })
        let users = await axios.get("https://6065d36cb8fbbd00175677e7.mockapi.io/s-group/users");
        //console.log(users.data);
        users.data.forEach(function(user) {
        console.log(user.name);
        list.innerHTML += '<li>'+ user.name + '</li>';
    }); 
    }       
}




