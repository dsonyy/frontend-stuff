function showEmail(e) {
    let email = "email" + "@" + "example" + ".com";
    e.innerHTML = email;
    e.onclick = null;
    e.href = "mailto:" + email;
}

function validateForm() {
    let error = false;
    let form = document.forms["contact"];
    if (form["email"].value.trim() == "") {
         form["email"].classList.add("error-placeholder");
         error = true;
    }
    if (form["contact"].value.trim() == "") {
         form["contact"].classList.add("error-placeholder");
         error = true;
    }
    if (!error) {
        document.getElementById("logo-contact").style.backgroundImage = "url('img/contact-full.gif')";
    }
}

function clearError(e){
    e.classList.remove("error-placeholder");
}