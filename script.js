/*const name = 'Szymon';
const age = 21;
const meals = 'Pizza';
const dog = 'Zuzia';


console.log(name);
console.log(age);
console.log(meals);

console.log(`Cześć jestem ${name} i moim ulubionym daniem jest ${meals}!`);
console.log(`Cześć, jestem ${name}, a to jest ${dog} - mój pies!`);
console.log(dog + ' ma już ' + age);


let firstName = 'Tomek'
let age = 18

 
const favColor = 'niebieski'
const fav_meal = 'schabowy'
 
let current_Car
current_Car = 'Audi'
 
firstName = 'Ania'
let age2 = 24
let favColor2 = 'czerwony'


const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje'

console.log(text1.toUpperCase());
console.log(text2.toLowerCase());
console.log(text3.slice(6)); //wycina słowo
console.log(text4.includes('czy'));
console.log(text5.charAt(2));

//replaceALL('pies','kot') zamienia słowa
//split()

 
let x = 50;
let y = 30;

if(x>y){
    console.log(`${x} jest większe, niż ${y}`);
}


const color = 'blue';
const newColor ='green';

if (color === newColor){
    console.log('kolory się zgadzają');
}
else{
    console.log('kolory się nie zgadzają');
}



const x = 100;
const y = 50;
if(x>y){
    console.log('x > y');
}
else if(x===y){
    console.log('x > y');
}
else{
    console.log('x < y');
}



const promo = '20%';
switch (promo) {
    case '10%':
      console.log('Dziś mamy 10% zniżki!');
        break;
    case '20%':
        console.log('Dziś mamy 20% zniżki!');
        break;
    case '30%':
      console.log('Dziś mamy 30% zniżki!');
        break;
    default:
        console.log(`Dziś mamy ${promo} zniżki!`);

  }



const x = 10;
if(x%2==0){
    console.log('X jest parzyste');
}


const x = 50;

if(x >= 100){
    console.log('X > 100');
}
else if(x < 100 && x > 30){
    console.log(('X jest sredniakiem').toUpperCase());
}
else if(x < 30){
    console.log('X jest mały');
}




const color = ['blue','green','gray','white'];
for (let i=0;i<color.length;i++){
    console.log(color[i]);
}




const towns = ['Kraków','Warszawa','Rzeszów'];
for(let i=0;i<towns.length;i++){
    console.log(`To miasto nazywa się: ${towns[i]}`);
}




let x = 0;
while(x<10){
x +=2;
console.log(x);
}



let x = 20;
do{
x -= 3;
}while(x>0);
console.log(x);



const numbers = [5,8,10,23,48,60]
for (const number of numbers){
    console.log(number/5);
}



const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']
const numbers2 = [numbers.slice(0,2)]; 
console.log(numbers2);
const numbers3 = [numbers.slice(4,7)];
console.log(numbers3);
const randomStuff = [colors.splice(-2)];
console.log(randomStuff);
const newCars = cars.splice(2,4,'test');
console.log(newCars);




const letters = ['c','d'];
letters.unshift('a','b');
letters.push('e','f');
console.log(letters);
console.log(letters.includes('c'));



const numbers = [2,5,7,1,45];
const meals = ['hot-dog','burger'];
const tab = [...meals,...numbers];
console.log(tab);



const numbers = [1,5,13,26,48];
const newNumber = numbers.map(x => x * 5);
console.log(newNumber);

for(const x of newNumber){
    if(x % 2 === 0){
        console.log(`Liczba parzysta: ${x}`);
    }
    else    {
        console.log(`Liczba nieparzysta: ${x}`);
    }
}




const color = ['zielony'];
color.unshift('niebieski');
color.push('czarny');
for(let i=0;i<color.length;i++){
    console.log(`Mój ulubiony kolor to: ${color[i].toUpperCase()}`);
    console.log(`Mój ulubiony kolor to: ${color[i].charAt(0).toUpperCase() + color[i].slice(1)}`);
}




const cars = 'Audi, Mercedes, BMW, Nissan, Dodge';
const carsArr = console.log(cars.split(', '))
console.log(carsArr);

carsArr.length > 3 ? console.log('Jest ok') : console.log('Nie jest okej');

if(carsArr.includes('Audi')){
    carsArr.push('Lamborghini');
}
else {
    carsArr.pop()
}
console.log(carsArr);




function test(){
    console.log('elo');
}

test()




const hello = (name = 'drogi użytkowniku') => {
    console.log(`Cześć ${name}, jak się masz?`)
}
hello()
hello('Klaudia')







let score; 
const add = (x,y) => {
    score = x + y; 
    score % 2 === 0 ? evenMsg() : oddMsg()
} 

const evenMsg = () => {
    console.log(`Liczba ${score} jest przysta.`)
}
 

const oddMsg = () => {
    console.log(`Liczba ${score} jest nieprzysta.`)
}

add(2,2)




let celsius;
let temp;
const fahrenheit = (x) => {
    celsius = x;
    temp = celsius * 1.8 + 32;
    console.log(`${x} stopni C, ${celsius} stopni F`);

}
fahrenheit(20);



let num = 10;
let numbers = [];

for(let i=0;i<num;i++){
    numbers[i]=i;
}
console.log(numbers);

const check = x => {  
        (x % 3 === 0 && x != 0) ? console.log(`${x} jest podzielne przez 3`) : console.log(`${x} nie jest podzielne przez 3 lub X = 0`)
    
}
check(3);

numbers.forEach(check);

*/

const ulList = document.createElement('ul')
const liItem = document.createElement('li')
liItem.textContent = 'cześć'

document.body.appendChild(ulList)
ulList.appendChild(liItem)

const divList = document.querySelector('div')
const p = document.createElement('p')
//divList.appendChild(p);
divList.append(p,'Cześć')


















