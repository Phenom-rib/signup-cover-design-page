console.log('welcome')
console.error('this is an error')
console.warn('this is a warning text')
// let,const, var


let name = 'esther';
const height = 193;
var hobby = 'hobby';

console.log(height);
console.log(name);
console.log(hobby);

// primitave data types=stringe, numbers, boolean, null, undefined 
const firstname = 'david';
const currentyear = 2025;
const today = true;
const y = undefined;
const age = 12
let j;

console.log(typeof today);
console.log(typeof y);
console.log(typeof j);
console.log(typeof currentyear);
console.log(typeof firstname);

//concatenantion
console.log(' his nsme is ' + firstname + ' and he is ' + age + ' years old ')

// arithmetatic operations: +, -, *, /** , ++,--, %.

let a = 10;
let b = 7;

console.log (a+b);
console.log (a-b);
console.log (a*b);
console.log (a**b);
console.log (a%b);

// comparison >, <. <=, >=
var num1 = 30;
var num2 = "35";

/*console.log(num1==num2)*/

// conditional statements
if (num1==num2){
    console.log('CORRECT')
} else{
        console.log('INCORRECT')
    }

    
    document.write('<h1>js Text</h1>')


    //instance  
function country(capital,currency,continent){
    this.capital=capital;
    this.currency=currency;
    this.continent=continent;
}
let mycountry = new country("washington", "US Dollars", "America")
console.log( mycountry instanceof country)
console.log(mycountry.continent)
console.log(mycountry.capital)
console.log(mycountry.currency)


// STRING LENGTH

const ourvalues = 'good day everyone'

console.log(ourvalues.length)

const come = 'manner is the best gift of life'
console.log(come.length)


// substring
const course = 'General Studies'

console.log(course.substring(0,10))

console.log(course.substring(0,7).toUpperCase());


// ARRAYS
// constructor
const money = new Array(1000,5000,10000,1000000)
console.log(money);

// second method of arrays
const food = ['garri','beans','plantain',]

console.log(food);
console.log(food[2]);

food[3] = 'yam';
food.push('semo');
food.unshift('pap');
food.pop ();
console.log(food);

console.log(Array.isArray(food));

console.log(food.indexOf('beans'));

// objects

const person = {
    firstname: 'David',
    middle: 'Sunny',
    surname: 'Mazi',
    age: 42,
    hobbies: ['reading','drinking','watching football',],
    address: {
        kingdom: '13 artilery bridge',
        city: 'los angeles',
        state: 'california',

    }
}

console.log(person);
console.log(person.age);
console.log(person.firstname,person.middle,person.surname);
console.log(person.hobbies[2]);
console.log(person.address.city);

person.email = 'mazi@gmail.com'
console.log(person.email)

const todos = [
    {
        id:1,
        text: 'class with student',
        isCompleted: true
    },

     {
        id:2,
        text: 'bank transfer for students',
        isCompleted: false
    },

     {
        id:3,
        text: 'buy food for students',
        isCompleted: false
    }
]

console.log(todos[2].text);

const boost = {
    firstname: 'chisom',
    middlename: 'faustina',
    lastname: 'umeadi',
    age: 22,
    hobbies: ['playing basketball','volleyball', 'dancing',],
    address: {
        village: 'Nneogidi',
        clan: 'umuulum',
        city: 'Agulu',
        state: 'Anambra',
    },
    skills: ['coding', 'graphic design', 'keyboardist'],
    friends: ['bomboy','peter', 'jhonson'],
    closevillages: {
      
    } 
}

// today lesssons
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// FOR LOOPS
for(let i = 0; i <= 5; i++) {
    console.log(i);
    console.log(' the for loop number is' + i);
}

// WHILE LOOP  
let i = 0
while(i < 10) {
    console.log(i)
    i++
}

// loop through arrays 
// method 1
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}


// second method
for(let todo of todos) {
    console.log(todo.isCompleted)
}
// meethod three
// foreach
todos.forEach(function(eye) {
    console.log(eye.id)
})
// map
const todotext =  todos.map(function(todo){
    return todo.text;
})

console.log(todotext)

// filter 
const todoisCompleted = todos.filter(function(todo){
    return todo.isCompleted === false || true;
}).map(function(todo){
    return todo.text
})

console.log(todoisCompleted)

// conditional statement
// === is a comparison operator

var k = 1

if(k > 10) {
    console.log('k is greater than 10')
} else{
    console.log('k is less than 10')
}

// if, else if
var k = 10

if (k === 10) {
    console.log('k is 10')
} else if(k > 10) {
    console.log('k is grater than 10')
} else {
    console.log('k is less thsn 10')
}

// tenary
const s = 0;

const color = s > 10 ? 'blue' : 'white';

console.log(color);

// swittes
switch(color) {
    case 'blue':
        console.log('the color is blue');
        break;
    case 'white': 
        console.log('the color is white');
        break;
    default: 
          console.log('the color is neither blue nor white');
        break;
}

// functions
function add(num1, num2) {
    console.log(num1 + num2)
}


add(1,2)

// ex-2
function sub(num1=12, num2=11){
    console.log(num1-num2)
};
sub(20,7)

// three arrow function
const div =(num1=10, num2=30) => console.log(num1 / num2)
div()
// 
const number = (num1, num2) => num1 / num2;

console.log(number(10,2));

// one value
const one = num1 => num1*2;

console.log(one(4))





// 4th nov, 2025
// today
// constructor
function company(name, abbreviation, year) {
    this.name = name;
    this.abbreviation = abbreviation;
    this.year = year;
}

const mycompany = new company('skillboost', 'skill', 'o4-03-2001')

console.log(mycompany);

function company(name, abbreviation, year) {
    this.name = name;
    this.abbreviation = abbreviation;
    this.year = new Date (year);
}

company.prototype.getEstYear = function() {
    return this.year.getEstYear();
}

const my = new company('caprison', 'bobo', '9-7-2012')

console.log(my.year);

// es6 classes
class Woman {
    constructor(firtName, lastName, dob) {
        this.firtName = firtName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    // get birth year
    getBirthYear() {
        return this.dob.getFullYear();
    }
    // get full name
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
 

const halima = new Woman('halima', 'john', '4-11-2005')
console.log(halima)

// DOM manipulation (Document Object Model)

console.log(window)

// ELEMENT SELECTOR
// SINGLE ELEMENT SELECTOR
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

// mutiple element selector
console.log(document.querySelectorAll('.item'));
console.log(document.getAnimations('li'));
console.log(document.getElementsByClassName('item'));

const item = document.querySelectorAll('item');
item.forEach((item) => console.log(item));

// manipulating the dom
const ul = document.querySelector('.items');
 ul.remove();
//  ul.lastElementChild.remove();
//  ul.children[1].remove()
//  ul.firstElementChild.textContent = 'buy us food';
//  ul.children[1].innerText = 'i must buy you food';
//  ul.lastElementChild.innerHTML = '<h1>GOODBYE</h1>';


const btn = document.querySelector('.btn');
 btn.style.background = 'red';


//  today
// 11/6/2025
//events
//mouse events
//mouseover, mouseout
// btn.addEventListener('click', e =>{
    // e.preventDefault();
    // console.log('click')
    //document.querySelector('#my-form').computedStyleMap.background
   // document.querySelector('body').classList.add('bg-dark');
    // document.querySelector('.items')
    // .lastElementChild.innerHTML = '<h1>Button Clicked</h1>'
// });

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

// DATE OBJECT
const date = new Date()
document.getElementById('date').innerHTML = date
document.getElementById('date').innerHTML += "<br>" +date.getDay()
document.getElementById('date').innerHTML += "<br>" +date.getHours()
document.getElementById('date').innerHTML += "<br>" +date.getMonth()


// switch
let day = new Date();

switch(date.getDay()) {
    case 0:
        document.getElementById('switch').innerHTML = "today is sunday";
        break;
     case 1:
        document.getElementById('switch').innerHTML = "today is monday";
        break;
     case 2:
        document.getElementById('switch').innerHTML = "today is tuesday";
        break;
     case 3:
        document.getElementById('switch').innerHTML = "today is wednesday";
        break;
     case 4:
        document.getElementById('switch').innerHTML = "today is thursday";
        break;
     case 5:
        document.getElementById('switch').innerHTML = "today is friday";
        break;
     case 6:
        document.getElementById('switch').innerHTML = "today is saturday";
        break;
}

