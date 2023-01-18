


// alert("helllo");
document.addEventListener("submit", function (event) {
    if (validate()) {
        event.preventDefault();
    }


});

var validate = () => {


    var mailformat = /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;

    var email = document.getElementById("email");
    var fname = document.getElementById("name");
    var project = document.getElementById("project");
    var subject = document.getElementById("subject");

    if (email.value.match(mailformat) && (fname.value.length > 0) && (project.value.length > 0) && (subject.value.length > 0)) {

      
        return false;
        
    }


    else {
        if (!email.value.match(mailformat)) {
            email.style.borderColor = "Red";
            document.getElementById("email_error").style.display = "block";
        }
        if (fname.value.length == 0) {
            fname.style.borderColor = "Red";
            document.getElementById("name_error").style.display = "block";

        }
        if (project.value.length == 0) {
            project.style.borderColor = "Red";
            document.getElementById("project_error").style.display = "block";

        }
        if (subject.value.length == 0) {
            subject.style.borderColor = "Red";
            document.getElementById("subject_error").style.display = "block";

        }
        return true;
    }

}



document.addEventListener("keyup", function (event) {


    document.getElementById("email_error").style.display = "none";
    document.getElementById("name_error").style.display = "none";
    document.getElementById("project_error").style.display = "none";
    document.getElementById("subject_error").style.display = "none";
    document.getElementById("subject").style.borderColor = "Grey";
    document.getElementById("email").style.borderColor = "Grey";
    document.getElementById("name").style.borderColor = "Grey";
    document.getElementById("project").style.borderColor = "Grey";
    

});
