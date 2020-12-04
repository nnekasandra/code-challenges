/*A program that takes a string of words and returns the string but with words greater or equal to 5 reversed*/
function spinWords(str){
  /* function takes in a str argument and returns the string but with words greater than 5 reversed*/
  str = str.split(' ') ;// coverts str argument to an array of words
   for(var i = 0; i<str.length; i++){
      //for loop loops through the items in the array using the index and length of arrray as conditions
     if(str[i].length >= 5){
       //if statement checks for the length of each items in the array that is greater than or equal to 5
       str[i] = str[i].split('').reverse().join('');// reverses any strings that fulfills the condition of the if statement
     }
   }
    return str.join(' '); // joins the array items to form the string and returns it
}
console.log(spinWords('Hello dear'))
console.log(spinWords('I can do anything I put my mind to'))
//calls the function with the parameter and logs it to the console