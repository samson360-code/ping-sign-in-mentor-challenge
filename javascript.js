var form = document.getElementsByTagName("form")[0];
var email = document.querySelectorAll("input");
var invalid=document.getElementsByClassName("invalid");
function myFunction(event) {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email[0].value)) {
        email[0].style.outlineColor="red";
        invalid[0].style.display = "block";
    }
    else {
        email[0].style.outlineColor="var(--Blue)";
        invalid[0].style.display = "none";
        form.submit();
    }
}