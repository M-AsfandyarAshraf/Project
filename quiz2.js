// Section II Q1

var ageToNum = (num) => {

    return num * 365;
}

console.log(ageToNum(1));




// Section II q2

var isPalindrome = (s) => {
    var arr = s.split("");
    console.log(arr);
    arr = arr.reverse();
    console.log(arr);
    var str = arr.join('');
    console.log(str);
    if (s === str) {
        return true;
    }
    else {
        return false;
    }
}


console.log("Is this a palindrome? ");
console.log(isPalindrome("racecar"));


// Section III q3

var formatNumber = (n, d) => {
    n = n.toFixed(d);
    console.log(n);
}


formatNumber(23.3434323, 1);




// Section III q2

document.addEventListener('submit', function (event) {

    if (invalidInput()) {
        event.preventDefault();
        alert("Invalid input. Should be greater than 5 digits long");

    }


})

var invalidInput = () => {
    var input = document.getElementById('entry').value;
    var len = input.length;
    var num = Number(input);
    if (len <= 5 || Number.isNaN(num)) {
        return true;
    }
    else {
        sumOfOdd(input, len);
        return false;
    }

}


var sumOfOdd = (input, len) => {

    var arr = input.split("");

    var total = 0;

    arr.forEach(element => {
        if (Number(element) % 2 !== 0) {
            total += Number(element);
        }
    });

    alert(`The sum of odd digits is ${total}`);
}



// Section III q4


var AgeCalculator = () => {
    var DOB = document.getElementById("age").value;
    // var today = (new Date()).toLocaleDateString('en-US');
    var dob = new Date(DOB);
    var today = Date.now();


    if (today > dob) {

        var diffday = Math.floor((today - dob) / (1000 * 60 * 60 * 24));

        var years = Math.floor(diffday / 365);
        var months = Math.floor((diffday % 365) / 31);
        var days = Math.floor((diffday % 365) % 31);

        alert("Your age is : " + years + " Years,  " + months + " Months, " + days + "Days");
    }

}





// Section IV q1


var matrixValidate = () => {
    var rowA = document.getElementById("rowA").value;
    var colA = document.getElementById("colA").value;
    var rowB = document.getElementById("rowB").value;
    var colB = document.getElementById("colB").value;


    if (colA !== rowB) {
        alert("Incompatible matrices");
    }
    else {
        document.getElementById("dimension").style.display = "none";
        document.getElementById("matrix").style.display = "block";
        document.getElementById("matrixBtn").addEventListener("click", () => { matrixMultiply(rowA, rowB, colA, colB) });

    }

}


var matrixMultiply = (rowA, rowB, colA, colB) => {

    // var arr = new Array();
    var arrA = new Array();
    var arrB = new Array();
    var matA = new Array();
    var matB = new Array();
    var matC = new Array();
    var result = new Array();
    var count;
    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;

    arrA = a.split(',');
    arrB = b.split(',');
    arrA = arrA.map(Number);
    arrB = arrB.map(Number);


    try {

        if (arrA.length !== (rowA * colA) || arrB.length !== (rowB * colB)) {
            var err = "Input doesnt match the dimensions provided earlier!";
            throw err;

        }

    }
    catch (err) {
        alert(err);
    }

    while(arrA.length) matA.push(arrA.splice(0,colA));
    while(arrB.length) matB.push(arrB.splice(0,colB));

 

    for (var i=0; i<rowA; i++)
    {

        for(var j=0; j<colB; j++)
        {
            count=0;
            for(var k=0; k<colA; k++)
            {
                count += (matA[i][k] * matB[k][j]);
                  
            } 
            matC.push(count);

        }
    }
    
    while(matC.length) result.push(matC.splice(0,colA));
    alert("The resultant matrix is "+result);
    console.log(result);


}


var counter =() => {
    var c = Number(document.getElementById("counter").innerHTML);
    c += 1;
    document.getElementById("counter").innerHTML = c;
}