/*A program statement that reads the array of string numbers containing two elements and returns a comma separated string containing the numbers that occur in both elements*/
      function findIntersection(strArr){
        /*function that takes an array of numbers containing two elements sorted and returns any numbers that occur in both elements*/
        let elem1 = strArr[0]; //elem1 variable holds the first element of strArr array
        let elem2 = strArr[1]; //elem2 variable holds the second element of strArr array
        elem1 = elem1.split(',') //converts the first elements of strArr to string items
        elem2 = elem2.split(',') //converts the second elements of strArr to string items
        console.log(elem2)
        /*Nested for loop that loops through the sub array items of strArr*/
        for(var i = 0; var i < elem1.length; i++){
          //for loop loops through the first item of strArr
          for (var j =0; var j = elem2.length; j++){
          //for loop loops through second item in strArr
          if(elem1[i] === elem[j]){
            //if statement checks for items in the elem1 and elem2 that are equal
            console.log(elem1[i] === elem[j]) //logs the equal items to the console
          } else{
            //runs when if condition is false
            console.log(false)
          }
          }
          elem1 = elem1.join(',')
          elem2 = elem2.join(',')
        }
      console.log(findIntersection(['1,3,4,5,6', '5,6,7,8,9']))