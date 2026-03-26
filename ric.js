let price = 100
let discount = 0.2
let balance = 500
console.log(`You have a balance of ${balance} dollars.`)
console.log(`The price of an item is ${price} dollars.`) 
let firstName = "Rick"
console .log(typeof firstName) 
console .log(`Hello ${firstName}!`)
let online = true
console .log(typeof online)
console .log(`Are you technically online? ${online}`) 
let students = 30
students **= 2
console.log('students', students) 
console.log(`There are ${students} students in the class.`) 
let x = 10
x += 5
console.log('x', x) 
console.log(`The value of x is ${x}.`) 
//
const pi = 3.14
let radius
let circumference

document.getElementById('submit-button').onclick = function() {
  radius = document.getElementById('radius').value
    circumference = 2 * pi * radius
    document.getElementById('circumference-result').textContent = `The circumference of the circle is ${circumference} cm.` 
} 
//creating a counter project
const increamentbutton = document.getElementById('increamentbutton')
const decreamentbutton = document.getElementById('decreamentbutton')
const resetbutton = document.getElementById('resetbutton') 
let counter = 0
increamentbutton.onclick = function() {
    counter++
    document.getElementById('counter').textContent = counter
} 
decreamentbutton.onclick = function() {
    counter--
    document.getElementById('counter').textContent = counter
}
resetbutton.onclick = function() {
    counter = 0   
    document.getElementById('counter').textContent = counter
} 
console.log(Math.PI) 
let m = 60
let n = 4
let z 
//z= Math.round(m) used to round a number up(also used to remove decimal places)
//z = Math.floor(m) used to round a number down especially when you jus want a whole number with no decimal places
//z = Math.ceil(m)
//z = Math.trunc(m) 
//z = Math.sqrt(m) 
//z = Math.pow(m, n) 
z = Math.cos(m) 
console.log(z) 
const min = 34 
const max = 56
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min 
console.log(randomNum) 
//Random number generator 
const rollbutton = document.getElementById('rollbutton') 
const rollresult = document.getElementById('rollresult') 
const minRoll = 324
const maxRoll = 654
let rollValue
rollbutton.onclick = function() {
    rollValue = Math.floor(Math.random() * (maxRoll - minRoll + 1)) + minRoll
    rollresult.textContent = `You rolled a ${rollValue}!`
} 
let age = 25
if (age <= 25) {
    console.log('You are still a minor')
} else { 
    console.log('You are an adult')
    
} 
const mytext = document.getElementById('mytext')
const mytbutton = document.getElementById('mysubmitbutton') 
const myresults = document.getElementById('myresults') 
let studentage
mysubmitbutton.onclick = function() { 

studentage = mytext.value
studentage = Number(studentage) 

if (studentage>=23) {
    console.log('You are eligible to drive on the road')
    myresults.textContent = 'You are eligible to drive on the road'
}
else  if (studentage ==0 ) {
    console.log ('You were just born')
myresults.textContent = 'You were just born'
}
 else {
    console.log('You are not eligible to drive on the road')
    myresults.textContent = 'You are not eligible to drive on yhe road'

 } 
} 
//application of IF and else function in html
const mycheckbox = document.getElementById('mycheckbox')
const myvisa = document.getElementById('myvisa')
const mypaypal = document.getElementById('mypaypal')
const mymastercard = document.getElementById('mymastercard')
const submittbutton = document.getElementById('submittbutton')
const subresult = document.getElementById('subresult')
const paymentresult = document.getElementById('paymentresult')
submittbutton.onclick = function () {
    if (mycheckbox.checked) {
        subresult.textContent = 'You have subscribed'
    }
    else {
        subresult.textContent = 'You have not subscribed'
    }
    if (myvisa.checked) {
        paymentresult.textContent = 'you are paying with visa'
    }
    else if (mypaypal.checked) {
        paymentresult.textContent = 'You are paying with paypal'
    }
    else if (mymastercard.checked) {
        paymentresult.textContent = 'You are paying with mastercard'
    }
} 
//Using switch(it is an alternative instead of using multiple else if commands)
let day = 'pizza'
switch (day) {
    case 1:
        console.log('It is on a sunday')
        break;
    case 2:
        console.log('It is on a Monday')
        break;
    case 3:
    console.log('it is on a tuesday')
        break;
    case 4:
        console.log('It is on a wednesday')
        break;
    case 5:
        console.log('It is on a thursday')
        break;
    case 6:
        console.log('it  is on a friday')
        break;
    case 7:
        console.log('it is on a saturday')
        break;
    default:
        console.log('${day}')
}  
let username = 'musyoki'
//console.log(username.charAt(0))
//console.log(username.indexOf('y')) 
//console.log(username.toUpperCase()) 
console.log(username.repeat(2)) 
let phonenumber = '123-647-363'
phonenumber = phonenumber.replaceAll('-', '')
console.log(phonenumber) 
let number = '638353853673656'
number = number.padStart('17','4') 
console.log(number) 
//creating a substring
// formulae is string.slice(start, end)
const fullName = 'Mbui Musyoki'
let firstname = fullName.slice(0, 4) 
console.log(firstname) 
let lastname = fullName.slice(5,12)
console.log(lastname) 
const email = 'musyoki@gmail.com'
let uesrname = email.slice(0, email.indexOf("@")) 
console.log(username) 
let extension = email.slice(email.indexOf("@")+1) 
console.log(extension)

//*LOGICAL OPERATORS
// they are used to cmbine or manipulate boolean values
//They are of three types
//             AND = && when using this both conditions have to be met 
//             OR = || when using this only one of the conditions have to be met
//              NOT = !
const temp = 34
if (temp>0 && temp <=30) {
    console.log('The weather is GOOD')
    
} else {
    console.log('The weather is BAD')
    
} 
const time = 54
if (time<=50 || time>=60) {
    console.log('The time is bad')
    
} else {
    console.log('The weather is good')
    
} 
const issunny = false 
if (!issunny) {
    console.log('It is cloudy')
    
} else {
    console.log('It is sunny')
    
} 

// = assignment operators ( used to assign a variable to a value)
// == comparison operators ( compare if values are equal)
// === strict equality operator ( compare i fvalues and data type are equal)
// != inequality operator
// !== srict inequality operator




//while loop - repeat some code WHILE some condition is true
//example below
/*let game = ''
while(game==='' || game===null) {
    game = window.prompt('Enter your favourite sport')
}
console.log(`your favourite sport is ${game}`)*/

//do while loop
/*let favoritesport
do {
    favoritesport = window.prompt('Enter your favorite sport')
} while (!favoritesport) 
    console.log(`Your favorite sport is ${favoritesport}`) */

    // for loop - It repeats code for a LIMITED amount of time(thats the difference between a while loop and for loop)
    // There are 3 statements that can be used inside the bracket
    // One is the variable
    // the other is the condition to be met in order to stop the loop
    // the other one is to increment or decrement the counter
    /*for (let i = 1; i<=30; i++) {
        if (i==13) {
            continue //continue function is used to skip a number in this case 13 will be skipped.The break function can also be used here but it it s used to break out of the loop entirely
        } else {
            console.log(i)
        }
    } */

    //NUMBER GUESSING GAME
   /* const minvalue = 50
    const maxvalue = 300
    const answer = Math.floor(Math.random() * (maxvalue-minvalue + 1)) + minvalue 
    console.log(answer) 
    let attempts = 0
    let guess
    let running = true

    while(running) {
        guess = window.prompt(`Gueass a value between ${minvalue}-${maxvalue}`)
        guess = Number(guess)
            
         if(isNaN(guess)) {
            window.alert('Please enter a valid number')
        }   
        else if(guess < minvalue || guess > maxvalue){
            window.alert('Please enter a valid number')
        }
        else {
            attempts++
            if(guess < answer) {
                window.alert('TOO LOW! TRY AGAIN')
            }
            else if(guess > answer) {
                window.alert('TOO HIGH!! TRY AGAIN')
            }
            else{
                window.alert(`YOUR ANSWER IS CORRECT. IT IS ${answer} I TOOK YOU ${attempts} attempts`) 
                running = false
            }
         } 
        } */

        // Function - This is a section of reusable code
        function add(x, y) {
            let result = x+y
            return result
        }
        function subtract(x, y) {
            return x-y
        }
        function multiply(x, y) {
            return x*y
        }
        function isEven(number) {
            if (number % 2 === 0) {
                return true
                
            } else {
                return false
            } 
        }
        function isValidEmail(email){
            if (email.includes('@')) {
                return true
                
            } else {
                return false
                
            }
        }


          console.log(isValidEmail('ric@gmail.com')) 

          // variable scope -- This ia where a variable is recogniised and accessible(local or global)
          let y = 7 // This is a global variable
          function function1() {
            let y = 3 //This is a local variable (when i check my terminal or console the value of x will be 3 because the lical variable is given first priority)
            console.log(function1) 
          }

          const temperatureinput = document.getElementById('temperatureinput') 
          const celciustofahrenheit = document.getElementById('celciustofahrenheit')
          const fahrenheittocelcius = document.getElementById('fahrenheittocelcius')
          const submitbutton = document.getElementById('submitbutton')
          const results = document.getElementById('results') 
          let temperature 
           submitbutton.onclick = function convert() {
            if (celciustofahrenheit.checked) {
               temperature = Number (temperatureinput.value)
               temperature = temperature * 9 /5 +32
               results.textContent = temperature + '°F'
            }
            else if(fahrenheittocelcius.checked){
               temperature = Number (temperatureinput.value)
               temperature = (temperature - 32) * (5/9)
               results.textContent = temperature + '°C'
            }
            else {
                console.log('Please Select a unit')
                
            }
        }  

        // An Array- It is a variable like structure that can store more than one value
        let fruits = ['banana', 'passion', 'Guava']
        fruits.push("mango") // this is going to add mango to the list but you must assign it an index
        fruits.pop() // this is going to remove the last element
        fruits.unshift('mango') // Used to add elements at the beginning of your list 
        fruits.sort() // Used to sort the elements in alphabetical order
        fruits.sort().reverse() // Used to sort in reverse (from z to A)
        console.log(fruits [0]) 
        console.log(fruits[1])
        console.log(fruits[2]) 
        console.log(fruits[3]) 
        let noOfFruits = fruits.length // used to find out how many elements are in your array
          console.log(noOfFruits)

          //Spread Operator = (...) it allows an iterable such as an array or string to be expanded into separate elements
          let value = ['1', '2' ,'3', '4', '5']
          let maxvalue = Math.max(...value) /*The function of the 3 dots is to separate the array so without it we
                                                  cannot find the maximum value*/ 
          console.log(maxvalue)

          /* Rest parameters = (...rest) allow a function work with a variable number of elements by bundlng 
          them into an array */
          /*function openFridge(...food) {
            console.log(...food)
          }
          const food1 = 'chips'
          const food2 = 'sausages'
          const food3 = 'burgers'
          const food4 = 'hotdogs'
        openFridge(food1, food2, food3, food4)


        function makeonestring(...names) {
            return names.join('') 
        }
        let myNames = makeonestring ('Patrick', 'Jones', 'Krabs', 'Alejandro')
        console.log(myNames) 
        

        console.log(typeof 35) 
        const calculation = (a,b) 
        */
        //Dice Roller generator
        const diceinput = document.getElementById ('diceinput').value 
        const dicebutton = document.getElementById ('dicebutton')
        const diceresults = document.getElementById ('diceresults')
        const diceimages = document.getElementById ('diceimages')
        const values  = [] // Will be used to store the number values
        const images = []  // will be used to store the images of the dices 
        let dice = Number (document.getElementById('diceinput').value) 
        for (let i = 0; i<diceinput; i++) {
            const value = Math.floor(Math.random () * 6) + 1
            console.log(value)
        } 

        //random password generator (i will do later after i finish up with my learning of javascript)

        /*Callback--this is a function that is passed as an argument to another function
                    It is used to handle asychronous operations such as
                         -Reading a file
                         -Network requests
                         -Interacting with databases




        
    
