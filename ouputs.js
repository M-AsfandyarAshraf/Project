
var intersection = (a, b) => {

    var inter = [];

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                inter.push(a[i]);
            }
        }
    }

    return inter;
};



var union = (a, b) => {

    var u = [];
    var inter = intersection(a, b);


    for (var i = 0; i < a.length; i++) {

        if (!inter.includes(a[i]) && !u.includes(a[i])) {
            u.push(a[i]); 
        }
    }

    for (var j = 0; j < b.length; j++) {

        if (!inter.includes(b[j]) && !u.includes(b[j])) {
            u.push(b[j]);
        }
    }

    return (u.concat(inter)).sort();
};




var isOdd = (a) => {
    if (typeof a == 'number')
    {
        if ((a%2) !== 0){return true; }
        else {return false;}
    }
    else {
        arr = [];

        for (var i = 0; i < a.length; i++) {
            
            if((a[i] % 2 ) > 0 )
            {
                arr.push(true);
            }
            else
            {
                arr.push(false)
            }
            
        }
        return arr;
    

    }

};


var isEven = (a) => {

    arr=[];
    narr=[];
    arr.push(isOdd(a));
    
    for (var i = 0; i < arr.length; i++) {
    
        narr[i] = !arr[i];
    }
        
    return narr;

};

var sum = (a) => {

    return a.reduce(myFunc);
    function myFunc(total, value)
    {
        return total+value;
    }
}


var isPrime = (a) => {

    arr=[]
    arr.push(a);
    return a.map(myFunc);
    function myFunc(value)
    {
        check = 0;
        if(value>1)
        {
            for( var i=2; i<(value); i++)
            {
                if((value%i) == 0)
                {
                    check++;
                    break;
                }
            }
            if (check === 0){ return true;}
            else{return false;}

        }
        else{return false;}
    }
}


var square = (a) => {

    arr=[]
    arr.push(a);
    return a.map(myFunc);

    function myFunc(value)
    {
        return value*value;
    }
}

var fibonacci = (a) => {

    arr = [];
    for (var i = 0; i < a; i++) {
        arr.push(fib(i));
    }


    function fib(num) {
        if (num < 2) {
            return num;
        }
        else {
            return fib(num - 1) + fib(num - 2);
        }
    }

    
    return arr;

}





// Outputting
a = [1,2,3,4,5,6,7,8,9];
b = [4, 5, 6, 7, 8, "wdw"];
console.log("The Intersection set for the two inputs is " + intersection(a, b));
console.log("The Union set for the two inputs is " + union(a, b));
console.log("The odd elements in the input array are: " + isOdd(a));
console.log("The even elements in the input array are: " + isEven(a));

console.log("The sum of the elements in the input array is: " + sum(a));
console.log("The prime elements in the input array are: " + isPrime(a));
console.log("The square elements in the input array are: " + square(a));

console.log("The first n elements of the fibonacci sequence are: " + fibonacci(a));