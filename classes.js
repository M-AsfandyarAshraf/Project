// Task 1
class Shape {
    names;
    sides;
    sideLength;
    constructor(names, sides, sideLength) {
        this.names = names;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        console.log(this.sides * this.sideLength);
    }

}


let square = new Shape('square', 4, 5);

square.calcPerimeter();

let triangle = new Shape('triangle', 3, 3);

triangle.calcPerimeter();




// Task 2
// Implement a class Player having PlayerID, PlayerName, PlayerRuns, PlayerDateofBirth,PlayerShirtNumber.
// ●	It should also have methods DisplayInfo(), GetRuns(), AddRuns() that prints the splayers info, total runs of the player and can add runs.
// ●	You should also create a class variable that stores total runs of all the players and there should be a
// ●	method that displays the class variable

class Player {

    PlayerID;
    PlayerName;
    PlayerRuns;
    PlayerDateOfBirth;
    PlayerShirtNumber;

    static ToatalRuns = 0;


    constructor(ID, Names, Runs, DOB, Shirt) {
        this.PlayerID = ID;
        this.PlayerName = Names;
        this.PlayerRuns = Runs;
        this.PlayerDateOfBirth = DOB;
        this.PlayerShirtNumber = Shirt;
        Player.ToatalRuns = Player.ToatalRuns + Runs;

    }

    DisplayInfo() {
        console.log(`PlayerID: ${this.PlayerID}`);

        console.log(`Player Name: ${this.PlayerName}`);


        console.log(`Player DOB: ${this.PlayerDateOfBirth}`);

    }

    AddRuns(runs) {
        this.PlayerRuns = this.PlayerRuns + runs;
        Player.ToatalRuns = Player.ToatalRuns + runs;

    }

    GetRuns() {
        console.log(this.PlayerRuns);
    }

}


// var babar = new Player(1, 'Babar', 2020, '12/12/12', 12);
// babar.DisplayInfo();
// babar.GetRuns();
// babar.AddRuns(30);
// babar.GetRuns();
// console.log(Player.ToatalRuns);
// var rizwan = new Player(2, 'Rizwan', 1000, '01/01/05', 31);
// rizwan.DisplayInfo();
// rizwan.GetRuns();
// console.log(Player.ToatalRuns);
// rizwan.AddRuns(50);
// rizwan.GetRuns();
// console.log(Player.ToatalRuns);



// Task 3:
// ●	Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

library.forEach(i => {
    console.log(`Book Name:  ${i.title}`);
    console.log(`Author Name:  ${i.author}`);
    console.log(`Reading Status:  ${i.readingStatus}`);

});




// // Task 4:

// // ●	Make a Bank Account class with attributes accountId , accountTitle, balance, emailID. Make each variable private. 
// Initialize all the attributes and make them private. Make settes(mutators) and getters(accessors) for all the variables. 
// Now make a method withdrawAmount(amount) and depositAmount(amount). 
// Each will have a parameter of some amount. For withdrawAmount() display user the amount that has been withdrawn and remaining balance .
//  Make sure that amount that is being withdrawn is not greater than the balance.
//   For depositAmount() add the amount and show the current balance.

class BankAccount {

    #accountID;
    #accountTitle;
    #balance;
    #emailID;
    get getAccount() {
        return this.#accountID;
    };

    set setAccount(id) {
        this.#accountID = id;
    };

    get getTitle() {
        return this.#accountTitle;
    };
    set setTitle(newtitle) {
        this.#accountTitle = newtitle;
    };

    get getBalance() {
        return this.#balance;
    };

    set setBalance(bal) {

        this.#balance = bal;
    };

    get getEmail() {
        return this.#emailID;
    };

    set setEmail(e) {
        this.#emailID = e;
    };


    constructor(title, email) {
        this.#accountID = Math.random * 1000;
        this.#accountTitle = title;
        this.#balance = 0;
        this.#emailID = email;

    }


    withdrawAmount(amount) {
        if (amount > this.getBalance) {
            console.log("Insufficient Balance");
        }
        else {
            this.setBalance = this.getBalance - amount;
            console.log(`Amount withdrawn:  ${amount}`);
            console.log(`Amount remaining:  ${this.getBalance}`);
        }
    }

    depositAmount(amount) {
        this.setBalance = this.getBalance + amount;
        console.log(`Amount deposited:  ${amount}`);
        console.log(`New Balamce: ${this.getBalance}`)
    }

}

var john = new BankAccount('John Doe', 'john@doe.com');

john.depositAmount(50);

john.depositAmount(50);
john.depositAmount(10000);


john.withdrawAmount(50);

john.withdrawAmount(50);
john.withdrawAmount(10000);
john.withdrawAmount(50);
john.depositAmount(50);
john.withdrawAmount(50);