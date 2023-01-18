

    
    // alert("helllo");
    document.addEventListener("submit", function(event){
        if(validate()) {
            event.preventDefault();
        }


    });

var validate = () => {


    var email = document.getElementById("email");
    var name = document.getElementById("name");
    var project = document.getElementById("project");
    var subject = document.getElementById("subject");

    var mailformat = /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;

    
    if(email.value.match(mailformat) || name.value==="" || name.value==="" || subject.value==="" )
    {
                
        return false;
        

    }
    else{
        email.style.borderColor ="Red"
        document.getElementById("email_error").style.display = "block";
        return true;
    }
    
}
