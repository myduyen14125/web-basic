let sub = document.getElementById("sub");
let tooltip = document.getElementById("tooltip");
let nameInput = document.getElementById("name");
let inputNameBeforeCancel = "";
tooltip.style.display = "none";

nameInput.addEventListener("keypress", (e) => {
  let msg = validateName(nameInput.value);
  if (msg) {
    tooltip.style.display = "block";
  } else {
    tooltip.style.display = "none";
  }
});

let preview_img = function (hehe) {
  let img = document.getElementById("preview-img");
  img.src = URL.createObjectURL(hehe.target.files[0]);
  img.style.display = "block";
};

document.querySelector("#avt").onchange = preview_img;

let i = 1;

function validateName(name) {
  let elName = name.trim();
  if (elName.length == 0) {
    return true;
  }
  if (elName.charAt(0) <= "9" && elName.charAt(0) >= "0") {
    return true;
  } else return null;
}

function addRow(hehe) {
  hehe.preventDefault();

  let dem = 0;
  let elName = document.getElementById("name").value;
  let msg = validateName(elName);
  if (msg) {
    tooltip.style.display = "block";
    return;
  }

  // for (let j = 0; j < elName.length; j++) {
  //   if (elName[j] >= "0" && elName[j] <= "9") {
  //     dem = 1;
  //     tooltip.style.display = "block";
  //     break;
  //   }
  // }
  let table = document.getElementById("table");
  let newRow = table.insertRow(table.length);
  newRow.id = "row" + i;

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);

  cell1.innerHTML += i;
  cell2.innerHTML +=
    '<input type="text" id="input' +
    i +
    '" readonly value="' +
    document.getElementById("name").value +
    '">' +
    '<span class="tooltiptext" id="tooltip' +
    i +
    '" style = "display: none; font-size: 12px; color: white;">Only accept names as alphabetic characters!</span>';
  let x = document.getElementById("choose").selectedIndex;
  if (x == 1) {
    cell3.innerHTML +=
      '<select id = "select' +
      i +
      '">' +
      "<option>" +
      document.getElementsByTagName("option")[x].value +
      "</option>" +
      '<option style = "display: none">' +
      document.getElementsByTagName("option")[x + 1].value +
      "</option>" +
      '<option style = "display: none">' +
      document.getElementsByTagName("option")[x + 2].value +
      "</option>";
  }
  if (x == 2) {
    cell3.innerHTML +=
      '<select id = "select' +
      i +
      '">' +
      "<option>" +
      document.getElementsByTagName("option")[x].value +
      "</option>" +
      '<option style = "display: none">' +
      document.getElementsByTagName("option")[x + 1].value +
      "</option>" +
      '<option style = "display: none">' +
      document.getElementsByTagName("option")[x - 1].value +
      "</option>";
  }
  if (x == 3) {
    cell3.innerHTML +=
      '<select id = "select' +
      i +
      '">' +
      "<option>" +
      document.getElementsByTagName("option")[x].value +
      "</option>" +
      '<option style = "display: none">' +
      document.getElementsByTagName("option")[x - 1].value +
      "</option>" +
      '<option style = "display: none">' +
      document.getElementsByTagName("option")[x - 2].value +
      "</option>";
  }

  let img = document.getElementById("preview-img");
  let imgObj = document.createElement("IMG");
  imgObj.src = img.src;
  imgObj.style.display = "block";
  cell4.appendChild(imgObj);

  cell5.innerHTML +=
    '<button id="btnEdit' +
    i +
    '" onclick="editRow(this)">Edit</button>' +
    '<button id="btnRemove' +
    i +
    '" onclick="removeRow(this)">Remove</button>' +
    '<button id="btnSave' +
    i +
    '" onclick="saveRow(this)" style ="display: none;">Save</button>' +
    '<button id="btnCancel' +
    i +
    '" onclick="cancelRow(this)" style ="display: none;">Cancel</button>';
  i++;
  tooltip.style.display = "none";

  let object = {
    order: i,
    name: elName,
    select: option,
    photo: img
  }
  localStorage.setItem('object', JSON.stringify(object));
}

document.querySelector("#form").onsubmit = addRow;

function editRow(event) {
  let id = event.id.substring(7); //btnEdit1
  document.getElementById("input" + id).readOnly = false;
  inputNameBeforeCancel = document.getElementById("input" + id).value;
  let x = document.getElementById("select" + id).selectedIndex;
  console.log(x);
  if (x == 1) {
    cell3.innerHTML +=
      '<option style = "display: block">' +
      document.getElementsByTagName("option")[x].value +
      "</option>" +
      '<option style = "display: block">' +
      document.getElementsByTagName("option")[x + 1].value +
      "</option>" +
      '<option style = "display: block">' +
      document.getElementsByTagName("option")[x + 2].value +
      "</option>";
  }
  if (x == 2) {
    cell3.innerHTML =
      '<select id = "select' +
      id +
      '">' +
      '<option style = "display: block">' +
      document.getElementsByTagName("option")[x].value +
      "</option>" +
      '<option style = "display: block">' +
      document.getElementsByTagName("option")[x + 1].value +
      "</option>" +
      '<option style = "display: block">' +
      document.getElementsByTagName("option")[x - 1].value +
      "</option>";
  }
  if (x == 3) {
    cell3.innerHTML =
      '<select id = "select' +
      id +
      '">' +
      '<option style = "display: block">' +
      document.getElementsByTagName("option")[x].value +
      "</option>" +
      '<option style = "display: block">' +
      document.getElementsByTagName("option")[x - 1].value +
      "</option>" +
      '<option style = "display: block">' +
      document.getElementsByTagName("option")[x - 2].value +
      "</option>";
  }

  document.getElementById("btnEdit" + id).style.display = "none";
  document.getElementById("btnRemove" + id).style.display = "none";
  document.getElementById("btnSave" + id).style.display = "inline-block";
  document.getElementById("btnCancel" + id).style.display = "inline-block";
  i++;
}

function removeRow(element) {
  let id = element.id.substring(9); //btnRemove+i
  document.getElementById("row" + id).style.display = "none";
}

function saveRow(element) {
  let id = element.id.substring(7);
  let dem = 0;
  let elName = document.getElementById("input" + id).value;
  if (elName.trim().length == 0) {
    document.getElementById("tooltip" + id).style.display = "block";
    return;
  } else {
    for (let j = 0; j < elName.length; j++) {
      if (elName[j] >= "0" && elName[j] <= "9") {
        dem = 1;
        document.getElementById("tooltip" + id).style.display = "block";
        break;
      }
    }
    if (dem == 0) {
      document.getElementById("input" + id).readOnly = true;
      document.getElementById("btnEdit" + id).style.display = "inline-block";
      document.getElementById("btnRemove" + id).style.display = "inline-block";
      document.getElementById("btnSave" + id).style.display = "none";
      document.getElementById("btnCancel" + id).style.display = "none";
      document.getElementById("tooltip" + id).style.display = "none";
    }
  }
}

function cancelRow(element) {
  let id = element.id.substring(9);
  document.getElementById("input" + id).value = inputNameBeforeCancel;
  document.getElementById("tooltip" + id).style.display = "none";
  document.getElementById("input" + id).readOnly = true;
  document.getElementById("btnEdit" + id).style.display = "inline-block";
  document.getElementById("btnRemove" + id).style.display = "inline-block";
  document.getElementById("btnSave" + id).style.display = "none";
  document.getElementById("btnCancel" + id).style.display = "none";
}