//array basics
// let names =['sonam','kinley','choden'];

// names[3] ='sangay';
// names.push('james');
// names.unshift('gyeltshen');
// names.pop();

// console.log(names[2]);


const prompt = require("prompt-sync")();
// let consonantCount = 0;
// let vowelCount = 0;


// word =prompt("enter a word: ") ; 

// const vowels = "aeiou";

// for (let i = 0; i < word.length; i++) {   
//     let currentChar = word[i].toLowerCase();  

//     if (vowels.includes(currentChar)) {
//         vowelCount++;
//     } else if (currentChar >= 'a' && currentChar <= 'z') {
//         consonantCount++;
//     }
// }

// console.log("Vowel Count:", vowelCount);
// console.log("Consonant Count:", consonantCount);

// let vowel = 0;
// let constt = 0;

// let response;

// do {
//     let word = prompt('Enter any word: ');

//     for (let i = 0; i < word.length; i++) {

//         if (word[i] == 'a'  word[i] == 'e'  word[i] == 'i'  word[i] == 'o'  word[i] == 'u')
//          {
//             vowel++;
//         }else{
//             constt++
//         }
//     }
//     console.log('vowel: '+ vowel);
//     console.log('constt: '+ constt);
     
//     response = prompt('If you want to continue enter yes orelse no: ');
// } while (response == 'yes');






//vowels and consonant 
// let vowel = 0;
// let constt = 0;

// let response;

// do {
//     let word = prompt('Enter any word: ');

//     for (let i = 0; i < word.length; i++) {

//         if (word[i] == 'a'||  word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u')
//          {
//             vowel++;
//         }else if(word[i] != 'a' || word[i] != 'e'||  word[i] != 'i' || word[i] != 'o' || word[i] != 'u'){
//             constt++
//         }
//     }
//     console.log('vowel: '+ vowel);
//     console.log('constt: '+ constt);
     
//     response = prompt('If you want to continue enter yes orelse no: ');
// } while (response == 'yes');



//even and odd number
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//       console.log('Even number: ' + numbers[i]);
//     } 
   
// }

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 != 0) {
//       console.log('Odd number: ' + numbers[i]);
//     } 
// }
let choice;
let user=[];
let user1=prompt("enter 5 user: ");
let user2=prompt('enter 5 user: ');
let user3=prompt('enter 5 user: ');
let user4=prompt('enter 5 user: ');
let user5=prompt('enter 5 user: ');
do{
    let number=prompt('enter a number 0-4: ');

if(number==0){
    console.log(user1);
}else if(number==1){
    console.log(user2);
}else if(number==2){
    console.log(user3);
}else if(number==3){
    console.log(user4);
}else if(number==4){
    console.log(user5);
}
choice=prompt('do you want to continue yes for 1 and no for 0: ');
}while(choice!=0)

