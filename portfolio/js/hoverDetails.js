
function showHoverDetails(text) {
    document.getElementById("details-default").style.display = "none";
    document.getElementById("details-hover").innerHTML = "<p>" + text + "</p>";
}

function hideHoverDetails() {
    document.getElementById("details-default").style.display = "block";
    document.getElementById("details-hover").innerHTML = "";
}
