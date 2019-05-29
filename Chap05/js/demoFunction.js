function square(number) {
    var result = number * number;
    return result;
}

var square02 = square(2);
document.write(2 + " binh phuong = " + square02 + "<br>");

var square05 = square(5);
document.write(5 + " binh phuong = " + square05);


function binhPhuong() {
    var input = document.getElementById("nhap").value;
    var result = square(input);
    document.getElementById("result").innerHTML = result;
}