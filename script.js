/*A function that prints the reverse of a number greater than 5*/
  function spinWords(str){
    if(str.length >= 5){
      return str.split('').reverse().join('') //if statement checks for words with length greater than or equal to 5
    }else{
      return str.split('').join('')
    }// returns words that are not equal to 5
  }
  console.log(spinWords('joyful'))