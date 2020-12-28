// let badAnswer = new RegExp("[^\\W\\d_]+");

// function hey(message){
//     if(badAnswer.test(message) === true && message === message.toUpperCase() && message.endsWith("?")){

//         console.log('yes');
//     }else{
//         console.log('faux');
//     }
// }

// hey('DD:)?');

// let badAnswerdv = new RegExp("^[A-Z0-9_\\s]{0,}\\?$");


/*const myTodos = ["Buy Bread", "Go to gym", "Record youtube videos"];

const newTodos = [{
    title: "Buy Bread",
    isDone: false,
}, {
    title: "Go to gym",
    isDone: false,
}, {
    title: "Record youtube videos",
    isDone: true,
}]

const index = newTodos.findIndex(function(todo,index){
    console.log(todo);
    
    return todo.title === "Buy Bread";
})
console.log(index);

const findTodo = function(myTodos, tittle){
    const index = myTodos.findIndex(function(todo, index){
        return todo.title.toLowerCase() === tittle.toLowerCase();
    })
    return myTodos[index];
}

let printMe = findTodo(newTodos, "buy bread");
console.log(printMe);

const findTodo = function(myTodos, title){
    const titleReturned = myTodos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase();
    })
    return titleReturned;
}

let printMe = findTodo(newTodos, "record youtube videos");
console.log(printMe);

sayHello = (name => `Hello there, ${name} !`;
console.log(sayHello('Fadel'));

const todos = [{
    title: "Buy bread",
    isDone: true
}, {
    title: "Go to gym",
    isDone: false
}, {
    title: "Do Qi gong",
    isDone: true
}, {
    title: "Make sport",
    isDone: true
}, {
    title: "Send money",
    isDone: false
}, {
    title: "Go to toilets",
    isDone: false
}]

const notDone = todos.filter((todo) => todo.isDone === false);
notDone.forEach(todo => console.log(todo.title))

console.log(notDone);


let john = {
    name: 'I am John',
    age: 24,
    isActive: true
};

let marry = {
    name: 'I am Marry',
    age: 23,
    isActive: true
};

let sam = {
    name: 'I am Sam',
    age: 29,
    isActive: false
};

let users = new Map();

users.set('john', john);
users.set('marry', marry);
users.set('sam', sam);

for (const [key, value] of users.entries()) {
    console.log(`${key} s'appelle "${value.name}".`);
}


let arrOfArr = [["One", "1"], ["Two", "2"], ["Three", "3"]];

let newMap = new Map(arrOfArr);

console.log(newMap);*/


//SOMME D'UNE PROPRIETE DANS UN TABLEAU
const countries = [{
    name: "France",
    pib: 2583,
    area: 643801
}, {
    name: "Senegal",
    pib: 16.37,
    area: 196712
}, {
    name: "Indonesia",
    pib: 1016,
    area: 1905000
}, {
    name: "Singapour",
    pib: 324,
    area: 722
}, {
    name: "Ethiopia",
    pib: 81,
    area: 1104
}, {
    name: "United States",
    pib: 19390,
    area: 9834
}];
const calculPib = (arr) => {
    let pibTotal = 0;
    arr.forEach(country => pibTotal += country.pib);
    console.log(pibTotal);
    return pibTotal;
};
// calculPib(countries);


//WICH PART
const ecologicalIndicator = [{
    name: "Humans",
    co2Emission: 20,
    o2Emission: 7
}, {
    name: 'Trees',
    co2Emission: 10,
    o2Emission: 50
}, {
    name: 'Animals',
    co2Emission: 10,
    o2Emission: 5
}, {
    name: 'Sea',
    co2Emission: 1,
    o2Emission: 20
}, {
    name: 'Ground',
    co2Emission: 5,
    o2Emission: 12.5
}, {
    name: 'Clouds',
    co2Emission: 0,
    o2Emission: 0
}];
const ecologicalBilan = (arrayEco) => {
    co2Total = 0;
    o2Total = 0;
    arrayEco.forEach(indicator => {
        co2Total += indicator.co2Emission;
        o2Total +=  indicator.o2Emission;
    });
    if(co2Total > o2Total){
        console.log("Impact négatif :(");
        return "Impact négatif :(";
    } else if(co2Total < o2Total) {
        console.log("Impact positif :)");
        return "Impact positif :)";
    } else {
        console.log("Impact neutre !");
        return "Impact neutre !"
    };
};
// ecologicalBilan(ecologicalIndicator);


// FOR EVERY
const persons = [{
    name: "John",
    age: 25
}, {
    name: "Will",
    age: 35
}, {
    name: "Abdou",
    age: 21
}, {
    name: "Cheikh",
    age: 69
}, {
    name: "Paul",
    age: 80
}, {
    name: "Fatou",
    age: 46
}];
const oldPeople = (arrayOld) =>{
    const thirdAge = arrayOld.filter((person) => person.age >= 60);
    console.log(thirdAge.length);
    return thirdAge.length;
};
// oldPeople(persons);


// FOR EVERY 2
const oldPersons = [{
    name: "John",
    age: 25,
    tag: ""
}, {
    name: "Will",
    age: 35,
    tag: ""
}, {
    name: "Abdou",
    age: 21,
    tag: ""
}, {
    name: "Cheikh",
    age: 69,
    tag: ""
}, {
    name: "Paul",
    age: 80,
    tag: ""
}, {
    name: "Fatou",
    age: 46,
    tag: ""
}];
const oldPeople2 = (arrayold2) =>{
    const thirdAgeOld = arrayold2.filter((person) => person.age >= 60);
    thirdAgeOld.forEach(person => person.tag = "old");
    console.log(arrayold2);
    return arrayold2;
};
// oldPeople2(oldPersons);


//REDUCE
const planks = [{
   lengt: 1,
   width: 2,
   thickness: 3 
}, {
    lengt: 4,
    width: 5,
    thickness: 6
}, {
    lengt: 7,
    width: 8,
    thickness: 9,
}, {
    lengt: 10,
    width: 11,
    thickness: 12
}, {
    lengt: 13,
    width: 14,
    thickness: 15
}, {
    lengt: 16,
    width: 17,
    thickness: 19
}];
const totalProperty = (array) => {
    let init = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let elementValue = Object.values(element);
        for (const property in elementValue){
            init += elementValue[property];
        }
    }
    console.log(init);
    return init;
}
totalProperty(planks);