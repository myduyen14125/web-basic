/*
Bài 1 : Viết chương trình Javascript để hiện thị ngày giờ
Bài 2 : Viết chương trình để in ra ngày tháng năm theo các định dạng mm-dd-
yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy
Bài 3 : Viết chương trình JavaScript để kiểm tra xem một số nguyên đã cho có
chuỗi chữ số tăng hay không
Bài 4 : Viết một chương trình JavaScript để thay thế mọi ký tự trong một chuỗi đã
cho với ký tự theo sau nó trong bảng chữ cái.
Bài 5 : Viết chương trình JavaScript để tạo chuỗi bằng cách sử dụng ba ký tự ở
giữa của một chuỗi có độ dài lẻ. Độ dài chuỗi phải lớn hơn hoặc bằng ba.
Bài 6 : Viết chương trình hiển thị số xuất hiện nhiều lần nhất trong mảng
Bài 7 : Viết chương trình để kiểm tra xem chuỗi chứa &#39;java&#39; hay không
Bài 8 : Viết một hàm để lấy tên tháng từ một số cụ thể ( ví dụ : 1 – Tháng một )
Bài 9: Viết một hàm JavaScript nhập một chuỗi và tìm từ dài nhất trong chuỗi
Bài 10 : Viết chương trình tạo form HTML nhập 2 số và in ra giá trị là số nguyên
tố giữa 2 số đó
*/
let sub = document.getElementById("sub");
let clear = document.getElementById("clear");
let output = document.getElementById("output");

function currentDate(){
    let output = document.getElementById("output");
    let today = new Date();
    let date = today.getFullYear()+"/"+(today.getMonth()+1)+"/"+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' - ' + time;
    output.innerHTML += "1. Date and Time: "+ (dateTime) + '<br>';
}


function fullDate(){
    let output = document.getElementById("output");
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth()+1;
    let year = today.getFullYear();
    if(date < 10) date = "0" + date;
    if(month < 10) month = "0" + month;
    let full1 = month+"-"+date+"-"+year +"  ";
    let full2 = month+"/"+date+"/"+year +"  ";
    let full3 = date+"-"+month+"-"+year +"  ";
    let full4 = date+"/"+month+"/"+year +"  ";
    output.innerHTML += "2. Full Date: "+ full1 + full2 + full3 + full4 + '<br>';
}


function checkIncreasedDigits(){
    let input = document.getElementById("inputNumber").value;
    let output = document.getElementById("output");
    let i = 1, dem = 0;
    let temp = input[0];
    while(i < input.length){
        if(temp >= input[i]){
            output.innerHTML += "3. Increased Digits: Wrong!" + '<br>'
            break;
        }
        else{
            temp = input[i];
            i++;
            dem++;
        }
    }
    if(dem == input.length -1) output.innerHTML += "3. Increased Digits: Yub!" + '<br>';
}

//Bài 4 : Viết một chương trình JavaScript để thay thế mọi ký tự trong một chuỗi đã

function changeString() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    let b = [];
    let temp;
    for (let i = 0; i < input.length; i++) {
            temp = input[i].charCodeAt() + 1;//s.charCodeAt(i) với i là số thứ tự
            b[i] = String.fromCharCode(temp);
        //console.log(temp);
    }
    output.innerHTML += "4. Change the next characters of string: "
    for(let i = 0; i < b.length; i++){
        output.innerHTML += b[i];
    }
    output.innerHTML += '<br>';  
}


//Bài 5 : Viết chương trình JavaScript để tạo chuỗi bằng cách sử dụng ba ký tự ởgiữa của một chuỗi có độ dài lẻ. Độ dài chuỗi phải lớn hơn hoặc bằng ba.
function createString(){
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    if(input.length >= 3 && input.length % 2 != 0)
        output.innerHTML += "5. Center substring: " + (input.substring( ((input.length-1)/2)-1, (input.length+3)/2)) + '<br>';
    else output.innerHTML += "5. String needs odd characters!" + '<br>' + '<br>';
}

sub.addEventListener("click", function(e){
    output.style.display = "block";
    currentDate();
    fullDate();
    checkIncreasedDigits();
    changeString();
    createString();
});

clear.addEventListener("click", function(e){
    output.style.display = "none";
})