import chalk from 'chalk';
import inquirer from 'inquirer';

// ERROR HANDLER CODE......
let total:any=0; 
//Wellcome message
//chalk package is used to add colors....
let wellcomeMessage : string = "WELL TO MY SUPERMART";
console.log(chalk.black("***************************************"));
console.log(chalk.greenBright("|---------"+wellcomeMessage+"---------|"));
console.log(chalk.black("***************************************\n"));


console.log("***************************************");
console.log(chalk.greenBright("|------- Discount Offer is On -----|\n"));
console.log("***************************************");

console.log("1. On 500 Total Bill discount will be: 20 Rs\n");
console.log("2. On 700 Total Bill discount will be: 30 Rs\n");
console.log("3. On 900 Total Bill discount will be: 40 Rs\n");
console.log("3. On 1000 and above Total Bill discount will be: 50 Rs\n");


//Menu
// its an async function beacuse here we are using await so it, will stop the whole program execution while waiting for the input to enter (asynchronous operations to complete).

const Menu = async  () => {
console.log("------------------");
console.log("|----  MENU -----|");
console.log("------------------\n");

console.log("What do you Want from the following Menu:");
let Menuu : string[] = ["Fruits","Vegetables", "Bakery", "Checkout\n"];
for(let i=0; i<Menuu.length;i++){
  console.log("\n" + i + "." + Menuu[i]);
}

//using inqurer to take input from user
const Select = await inquirer.prompt([{
  type:'input',
  name:'selectedItem',
  message: 'Enter the category number to purchase or Pay:',
}]);

const selectedItem = parseInt(Select.selectedItem, 10);

if(selectedItem == 0){
  Fruits();
}else if(selectedItem == 1){
 Vegetables();
}else if(selectedItem == 2){
  Bakery();
}else if(selectedItem == 3){
 checkoutProcess();
}else{
  console.log("Invalid Input! Try Again...");
  Menu();
}};


//Checkout process anonamoys function
const checkoutProcess = async () => {
  console.log('\nCheckout Process\n');
  console.log('Choose a payment method:\n');

  // Nested loop for payment options
  const paymentOptions = ['Credit Card', 'Debit Card', 'PayPal', 'Cash'];
  for (let i = 0; i < paymentOptions.length; i++) {
    console.log( i+"."+  `${paymentOptions[i]}`);
  }

  const paymentChoice = await inquirer.prompt([{
    type: 'input',
    name: 'payment',
    message: 'Enter the number of your preferred payment method:',
  }]);

  const paymentMethod = parseInt(paymentChoice.payment, 10);

  if (!isNaN(paymentMethod) && paymentMethod >= 0 && paymentMethod <= paymentOptions.length) {
    console.log("\nThank you for choosing " + `${paymentOptions[paymentMethod]}` + " as your payment method.\n");
    TotalBill();
  } else {
    console.log('Invalid payment method. Try again.');
    checkoutProcess();
  }
};


//Payment function (after payment again ask to shop or exit)
const TotalBill =async () => {
  let discount=0;
  if(total <= 500 && total >= 300){
    console.log("Your Total bill is:" + total);
    total-=20;
    discount+=20;
    console.log("After: "+ discount + " RS discount total bill is: " + total);
    console.log('Payment successful!');
  }else if(total >=500 && total<=700 ){
    console.log("Your Total bill is:" + total);
    total-=30;
    discount+=30;
    console.log("After: "+ discount + " RS discount total bill is: " + total);
    console.log('Payment successful!');
  }else if(total > 700 && total<=900){
    console.log("Your Total bill is:" + total);
    total-=40;
    discount+=40;
    console.log("After: "+ discount + " RS discount total bill is: " + total);
    console.log('Payment successful!');

  }else if(total > 900){
    console.log("Your Total bill is:" + total);
    total-=50;
    discount+=50;
    console.log("After: "+ discount + " RS discount total bill is: " + total);;
    console.log('Payment successful!');

  }else{
    console.log("\nYou got no discount!! \n-> Your total bill is: "+ total);
    console.log('Payment successful!');

  }

  console.log("\n1. Again shopping \n2. Exit");
  let AgainShopping = await inquirer.prompt([{
    type:"input",
    name:"Answer",
    message:"Do you want to do shopping again?"
  }])
  const Answer = parseInt(AgainShopping.Answer, 10)
  if (Answer === 1){
    Menu();
    total=0;
    discount=0;
    } else if (Answer === 2){
      process.exit();
      } else{
        console.log("\nInvalid input!\n");
        process.exit();
      }
 };


//Fruit list
const Fruits = async () => { 
  //Display fruit Menu.
  console.log("\n Fruits Items List:");

  let fruitsList : string[] = ["Apple","Orange", "Grapes\n"];
  for (var i=0;i<fruitsList.length;i++){
       console.log("\n" + i + "."  + fruitsList[i]);
  }

  const Select = await inquirer.prompt([{
    type:'input',
    name:'selectedItem',
    message: 'Enter the  item number to purchase:',
  }]);
 const selectedItem = parseInt(Select.selectedItem, 10);

if(selectedItem == 0){
  Quantity("Apple");
}else if(selectedItem == 1){
  Quantity("Orange");
}else if(selectedItem == 2){
  Quantity("Grapes");
}else{
  console.log("\nInvalid Input! Try Again...\n");
  Fruits();
}};


// Vegetable list
const Vegetables = async () => {
  // Display vegetable menu
  console.log("\nVegetables Items List:");

  let vegetablesList: string[] = ["Carrot", "Patato", "Spinach\n"];
  for (let i = 0; i < vegetablesList.length; i++) {
    console.log("\n" + i + "." + vegetablesList[i]);
  }

  const Select = await inquirer.prompt([{
    type: 'input',
    name: 'selectedItem',
    message: 'Enter the item number to purchase:',
  }]);
  const selectedItem = parseInt(Select.selectedItem, 10);

  if (selectedItem === 0) {
    Quantity("Carrot");
  } else if (selectedItem === 1) {
    Quantity("Patato");
  } else if (selectedItem === 2) {
    Quantity("Spinach");
  } else {
    console.log("\nInvalid Input! Try Again...\n");
    Vegetables();
  }
};


// Bakery list
const Bakery = async () => {
  // Display bakery menu
  console.log("\nBakery Items List:");

  let bakeryList: string[] = ["Bread", "Egg", "Cake\n"];
  for (let i = 0; i < bakeryList.length; i++) {
    console.log("\n" + i + "." + bakeryList[i]);
  }

  const Select = await inquirer.prompt([{
    type: 'input',
    name: 'selectedItem',
    message: 'Enter the item number to purchase:',
  }]);
  const selectedItem = parseInt(Select.selectedItem, 10);

  if (selectedItem === 0) {
    Quantity("Bread");
  } else if (selectedItem === 1) {
    Quantity("Egg");
  } else if (selectedItem === 2) {
    Quantity("Cake");
  } else {
    console.log("\nInvalid Input! Try Again...\n");
    Bakery();
  }
};


//Quntaity function (Display price and take Quantity of item to purchase)
const Quantity = async (name : string) => {

  if(name == "Apple"){
    console.log("\n<< One-Kilo 200 RS >>\n");
  }else if(name == "Orange"){
    console.log("\n<< One-Kilo 50 RS >>\n");
  }else if( name == "Grapes"){
    console.log("\n<< One-Kilo 30 RS >>\n");
  }else if (name === "Carrot") {
    console.log("\n<< One-Kilo 60 RS >>\n");
  } else if (name === "Broccoli") {
    console.log("\n<< One-Kilo 90 RS >>\n");
  } else if (name === "Spinach") {
    console.log("\n<< One-Kilo 250 RS >>\n");
  }else if (name === "Bread") {
    console.log("\n<< One Bread 80 RS >>\n");
  } else if (name === "Egg") {
    console.log("\n<< One Dozen 120 RS >>\n");
  } else if (name === "Cake") {
    console.log("\n<< One Cake 350 RS >>\n");
  } else{
    console.log("\nError! Try again...\n");
    Menu();
  }

  const quantityAnswer = await inquirer.prompt ([{
    type:'input',
    name:"quantity",
    message:"How much kilo " + `${name}` +  " would you like: "
  }])
  const quantity = parseInt(quantityAnswer.quantity, 10);

  if(name == "Apple" && !isNaN(quantity)){
    total+= quantity * 200;
    console.log("\n" + `${quantity} ${name}` +  " are packed!!! Anything else? \n");
  }else if(name == "Orange" && !isNaN(quantity)){
    total+= quantity * 50;
    console.log("\n" + `${quantity} ${name}` +  " are packed!!! Anything else? \n");
    }else if(name == "Grapes" && !isNaN(quantity)){
      total+= quantity * 30;
      console.log("\n" + `${quantity} ${name}` +  " are packed!!! Anything else? \n");
    }else if (name === "Carrot" && !isNaN(quantity)) {
      total += quantity * 60;
      console.log("\n" + `${quantity} ${name}` + " are packed!!! Anything else? \n");
    } else if (name === "Broccoli" && !isNaN(quantity)) {
      total += quantity * 90;
      console.log("\n" + `${quantity} ${name}` + " are packed!!! Anything else? \n");
    } else if (name === "Spinach" && !isNaN(quantity)) {
      total += quantity * 250;
      console.log("\n" + `${quantity} ${name}` + " are packed!!! Anything else? \n");
    }else if (name === "Bread" && !isNaN(quantity)) {
      total += quantity * 80;
      console.log("\n" + `${quantity} Loaves of ${name}` + " are packed!!! Anything else? \n");
    } else if (name === "Egg" && !isNaN(quantity)) {
      total += quantity * 120;
      console.log("\n" + `${quantity} Dozen ${name}` + " are packed!!! Anything else? \n");
    } else if (name === "Cake" && !isNaN(quantity)) {
      total += quantity * 350;
      console.log("\n" + `${quantity} ${name}` + " is packed!!! Anything else? \n");
    } else{
      console.log("\nInvalid Input! Try Again...\n");
    }
  Menu();
}


Menu();

