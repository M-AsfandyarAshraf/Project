var dayOfWeek = (day) => {


    switch (day) {
        case "Sunday":
        case "sunday":
            day = 1;
            break;
        case "Monday":
        case "monday":
            day = 2;
            break;
        case "Tuesday":
        case "tuesday":
            day = 3;
            break;
        case "Wednesday":
        case "wednesday":
            day = 4;
            break;
        case "Thursday":
        case "thursday":
            day = 5;
            break;
        case "Friday":
        case "friday":
            day = 6;
            break;
        case "Saturday":
        case "saturday":
            day = 7;
            break;
        default:
            day = "Invalid Input";
            break;
    };

    return day;
}




var form  = document.getElementById('dayofweek');


form.addEventListener('submit', (event) => {

    event.preventDefault();


    var day  = form.elements['day']; 
    let d = day.value;
    var numberOfDay = dayOfWeek(d);
    
    // alert("The day of the week is "+numberOfDay);
    document.getElementById('output').innerHTML = numberOfDay;

    $("#myModal").modal();


});







