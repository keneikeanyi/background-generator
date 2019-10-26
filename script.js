var gradientDisplay = document.querySelector(".gradient_display");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background =
    "linear-gradient(to right,"
    + color1.value
    + ","
    + color2.value
    +")";

    gradientDisplay.textContent = body.style.background +";";
}



















// let pen={
//     type:'ballpoint',
//     color:'black',
//     cost:10
// };
// //objectname.propertyname
// //objectname['propertyname']
// console.log(pen.cost);
// //example
// let emily={
//     age:16,
//     school: 'DPS',
//     class:'10th std',
//     subjects :['physics','chemistry','biology','maths']
// };
// console.log(emily.subjects[1]);


// var database = [
//     {
//         username:"Ikeanyi",
//         password:"123456"
//     }
// ];

// var newsfeed = [
//     {
//         username:"Bobby",
//         timeline:"So tire from all learning!."
//     },
//     {
//         username:"Sally",
//         timeline:"Javascript is sooooo cool!"
//     },
// {
//     userName: "Mitch",
//     timeline:"Javascript is preeetyy cool!"
// }
// ];

// function signin(username,password){
//     if(username === database[0].username &&
//     password === database[0].password){
//         console.log(newsfeed);
//     } else {
//         alert("Sorry,username and password!");
//     }
// }

// var userNamePrompt = prompt("What\'s your username?");
// var passwordPrompt = prompt("What\'s your password?");

// signIn(userNameprompt, passwordprompt);
