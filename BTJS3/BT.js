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

sub.addEventListener("click", function(e){
    output.style.display = "block";
    currentDate();
    fullDate();
    checkIncreasedDigits();
    changeString();
    createString();
    findInString();
    checkString();
    nameOfMonth();
    longestWordOfString();
    primeNumber();
});

clear.addEventListener("click", function(e){
    output.innerHTML = null;
})

function currentDate(){
    let output = document.getElementById("output");
    let today = new Date();
    let date = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' - ' + time;
    output.innerHTML += "1. Date and Time: "+ (dateTime) + '<br>' + '<br>';
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
    output.innerHTML += "2. Full Date: "+ full1 + full2 + full3 + full4 + '<br>' + '<br>';
}


function checkIncreasedDigits(){
    let input = document.getElementById("input3").value;
    let output = document.getElementById("output");
    let i = 1, count = 0;
    let temp = input[0];
    while(i < input.length){
        if(temp >= input[i]){
            output.innerHTML += "3. Increased Digits: Wrong!" + '<br>' + '<br>';
            break;
        }
        else{
            temp = input[i];
            i++;
            count++;
        }
    }
    if(count == input.length -1) output.innerHTML += "3. Increased Digits: Yub!" + '<br>' + '<br>';
}

//Bài 4 : Viết một chương trình JavaScript để thay thế mọi ký tự trong một chuỗi đã

function changeString() {
    let input = document.getElementById("input4").value;
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
    output.innerHTML += '<br>' + '<br>';  
}


//Bài 5 : Viết chương trình JavaScript để tạo chuỗi bằng cách sử dụng ba ký tự ởgiữa của một chuỗi có độ dài lẻ. Độ dài chuỗi phải lớn hơn hoặc bằng ba.
function createString(){
    let input = document.getElementById("input5").value;
    let output = document.getElementById("output");
    if(input.length >= 3 && input.length % 2 != 0)
        output.innerHTML += "5. Center substring: " + (input.substring( ((input.length-1)/2)-1, (input.length+3)/2)) + '<br>'+ '<br>';
    else output.innerHTML += "5. String needs odd characters!" + '<br>'+ '<br>';
}


//Bài 6 : Viết chương trình hiển thị số xuất hiện nhiều lần nhất trong mảng
function findInString(){
    let input = document.getElementById("input6").value;
    let save = input ;
    let max = 0, letter;
    for (let i = 0; i < input.length; i++){
        let count = 0;
        for (let j = 0; j < input.length; j++){
            if (save[i] == input[j]){
                count ++;
                if(count > max) max = count;
            }
        }
        letter = input[i];
    }
    if(max == 1) output.innerHTML += "6. String has equal number of each character" + '<br>'+ '<br>';
    else output.innerHTML += "6. Find letters have most in string: "+ letter +". Times: "+ max + '<br>'+ '<br>';
    //console.log(letter);
}

//Bài 7 : Viết chương trình để kiểm tra xem chuỗi chứa &#39;java&#39; hay không
function checkString(){
    let input = document.getElementById("input7").value;
    let output = document.getElementById("output");
    let count = 0;
    for (let i = 0; i < input.length; i++){
        if (input.substring(i, i + 4) == "java"){
            output.innerHTML += "7. String has 'java'" + '<br>'+ '<br>';
            count = 1; 
        }
    }
    if (count == 0) {
        output.innerHTML += "7. String doesn't have 'java'." + '<br>'+ '<br>';
    }
}

function isIncludeJava(str) {
    let res = str.indexOf("java");
    if(res != -1) return true;
    return false;
}
//Bài 8 : Viết một hàm để lấy tên tháng từ một số cụ thể ( ví dụ : 1 – Tháng một )
function nameOfMonth(){
    let input = document.getElementById("input8").value;
    let output = document.getElementById("output");
    switch(input){
        case '1': output.innerHTML += "8. January" + '</br>'+ '<br>'; break;
        case '2': output.innerHTML += "8. February" + '</br>'+ '<br>'; break;
        case '3': output.innerHTML += "8. March" + '</br>'+ '<br>'; break;
        case '4': output.innerHTML += "8. April" + '</br>'+ '<br>'; break;
        case '5': output.innerHTML += "8. May" + '</br>'+ '<br>'; break;
        case '6':output.innerHTML += "8. June" + '</br>'+ '<br>'; break;
        case '7':output.innerHTML += "8. July" + '</br>'+ '<br>'; break;
        case '8':output.innerHTML += "8. August" + '</br>'+ '<br>'; break;
        case '9': output.innerHTML += "8. September" + '</br>'+ '<br>'; break;
        case '10':output.innerHTML += "8. October" + '</br>'+ '<br>'; break;
        case '11': output.innerHTML += "8. November" + '</br>'+ '<br>'; break;
        case '12':output.innerHTML += "8. December" + '</br>'+ '<br>'; break;
    }
}
//Bài 9: Viết một hàm JavaScript nhập một chuỗi và tìm từ dài nhất trong chuỗi
function longestWordOfString(){
    let input = document.getElementById("input9").value;
    let output = document.getElementById("output");
    let words = input.split(' ');//hàm slit(' ') cắt chuỗi thành một mảng các kí tự
    let maxLength = 0, longestWord;
    for (let i = 0; i < words.length; i++){
        if(words[i].length > maxLength){
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }
    output.innerHTML += "9. Longest words of string: ";
    for (let i = 0; i < words.length; i++){
        if (words[i].length == maxLength) 
        output.innerHTML += words[i] + " ";
    }
    output.innerHTML += '<br>'+ '<br>';
}
//Bài 10 : Viết chương trình tạo form HTML nhập 2 số và in ra giá trị là số nguyên tố giữa 2 số đó
function primeNumber(){
    let a = +document.getElementById("inputA").value;
    let b = +document.getElementById("inputB").value;
    let output = document.getElementById("output");
    let count = 0;
    output.innerHTML += "10. Prime number: ";
    for (let i = a; i <= b; i++){
        for(let j = 2; j <= Math.sqrt(i); j++ ){
            if(i % j == 0) {count ++;}
        }
        if(i == 1) count++;
        if(count == 0) output.innerHTML += i + " ";
        count = 0;
    }
    output.innerHTML += '<br>'+ '<br>';
}