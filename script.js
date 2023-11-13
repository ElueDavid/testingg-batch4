var button = document.querySelector(".btn");
var indiCate = document.querySelector(".indication");


function validate() {
    var email = document.querySelector(".mail").value;
    var passD = document.querySelector(".pd").value;
    if(email.match(/^[(\w\d\W)+]+@[\w+]+\.[\w+]{2,3}$/i) && passD.length >= 6) {
        indiCate.classList.add("active")
        indiCate.innerHTML = "password ok";
        button.classList.add("active")
        button.setAttribute("href", "page.html")
    }
    else {
        indiCate.classList.remove("active")
        button.classList.remove("active")
        button.setAttribute("href", "#")
        indiCate.innerHTML = "password should be at least 6 characters*";
    }
}
validate()