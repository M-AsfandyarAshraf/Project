

    
    // alert("helllo");
    document.addEventListener("submit", function(event){
        if(validate()) {
            event.preventDefault();
        }


    });

var validate = () => {


    var email = document.getElementById("email").value;
    var name = document.getElementById("name");
    var project = document.getElementById("project");
    var subject = document.getElementById("subject");
    
    if((!email.innerHTML   includes("@") && !email.includes(".")) || empty)
    {
        email.style.backgroundColor = "red";
        email.style.borderBlockColor = "red";
        alert("00");
        return true;

    }
    
}
