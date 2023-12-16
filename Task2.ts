//Add function
console.log("\n -- Add Function --\n");
function add(a:number, b:number){
     return a + b;
}
let result = add(10, 2);
console.log('Sum is:', result);

//Even and Odd function
console.log("\n -- Even and Odd Function --\n");
function EvenOdd(a:number){
  if (a % 2 == 0) {
    console.log(`${a} is even`);
    } else{
      console.log(`${a} is odd`)
      };
}
EvenOdd(7);


//Area function
console.log("\n -- Area Function --\n");
function Area(hight:number,width:number){
  let area = hight * width;
  return `Area of rectangle is ${area}`;
}
let rect_area = Area(5.6,4);
console.log(rect_area);


//reverseString function
console.log("\n -- reverseString Function -- \n");
function reverseString(a:string){
  let reversedStr = a.split("").reverse().join("");
  return `${reversedStr}`;
}
let strReverse = reverseString("My name is Ahmed khan!");
console.log(strReverse);

//convertCelsiusToFahrenheit
console.log("\n -- ConvertCelsiusToFahrenheit Function --\n");
function convertCelsiusToFahrenheit(a:number){
  let fahrenheit = ((a*9/5)+32).toFixed(2);
  return `${fahrenheit} degree Fahrenheit\n`;
}
let celsius = convertCelsiusToFahrenheit(38);
console.log(celsius);