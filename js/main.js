for (i=0 ; i< 100 ; i++) {
    var j = i+1;
    if (j%15 == 0) {
        document.getElementById("lista").innerHTML += "<li>" + "FizzBuzz" + "</li>";
    }
    else if (j%5 == 0) {
        document.getElementById("lista").innerHTML += "<li>" + "Buzz" + "</li>";
    }
    else if (j%3 == 0) {
        document.getElementById("lista").innerHTML += "<li>" + "Fizz" + "</li>";
    }
    else {
        document.getElementById("lista").innerHTML += "<li>" + j + "</li>";
    }
}