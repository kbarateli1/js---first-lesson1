
დავალება 1

let  user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
  
console.log(user.studentstatus);


დავალება 2 


1. 

var names = ["giorgi", "levani", "gurami"];
  for (var i= 3; i<names.length; i++){
      console.log(names[i]);
  }

2. 

var names = ["giorgi", "levani", "gurami"];
var item = 4;
while (item<names.length) {
    console.log(names[item]);
    item++;
}


დავალება 3 .

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (var i= 0; i<numbers.length; i++){
          if (numbers[x] > 5) {
            console.log(numbers[x]);
          }
      }



let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let x = 0; x < numbers.length; x++) {
        if (numbers[x] > 5) {
    console.log(numbers[x]);
  }
}


დავალება 4. 

მოცემული მაისივიდან კონსოლში გამოვიტანოთ მარტო ის ობიექტი რომლის status პროეპრტი მნიშვნელობა არის true;
 
let users =  [
    {username:'test1', status: false},
    {username:'test2', status: false},
    {username:'test3', status: true}
];

// console.log(users[2]);

for(let x=0; x<users.length;x++){
    if (users[x].status ===true) {
        console.log(users[x]);
    }
}





დავალება 5

let user = {
    name: 'giorgi',
    age: 27,
    studentstatus: 'active'
}

if (user.age > 18 && user.studentstatus === 'active') {
    console.log("HELLO");
}

if (user.name === 'giorgi') {
    console.log("Hello Giorgi");
}

if (user.studentstatus === "active" || newUser.age < 25) {
    console.log("Hello World");
} else {
    console.log("ERROR");
}


დავალება 6
let array = ["watermelon", "pear", 10, 45, 50, "apple", "ananas"];
for (let x = 0; x < array.length; x++) {
    if (typeof array[x] === "string") {
        console.log(array[x]);
    }
}








