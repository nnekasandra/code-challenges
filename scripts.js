 /*A program statement that reads the array of string numbers containing two elements and returns a comma separated string containing the numbers that occur in both elements*/
      function findIntersection(strArr){
          /*function that takes an array of numbers containing two elements sorted and returns any numbers that occur in both elements*/
          let elem1 = strArr[0]; //elem1 variable holds the first element of strArr array
          let elem2 = strArr[1]; //elem2 variable holds the second element of strArr array
          elem1 = elem1.split(',').sort() //converts the first elements of strArr to string items
          elem2 = elem2.split(',').sort() //converts the second elements of strArr to string items
          let intersectingNumbers = []; // created a variable to holds the values that intersect
          /*Nested for loop that loops through the sub array items of strArr*/
          for(var i = 0; i < elem1.length; i++){
            //for loop loops through the first item of strArr
            for (var j = 0; j < elem2.length; j++){
            //for loop loops through second item in strArr
            if(elem1[i] === elem2[j]){
              //if statement checks for items in the elem1 and elem2 that are equal
               intersectingNumbers.push(elem1[i])//pushes elem1 items that are equal to elem2 items to the intersectingNumbers array created
            }
           }
          }
        if (intersectingNumbers.length==0)//if statement that checks for when intersectingNumbers array is empty
        {
           intersectingNumbers == false //sets the output to be equal to false
        }
          return intersectingNumbers.join() //returns intersectingNumbers array to form a string
      }
      console.log(findIntersection(['1,3,4,0','5,6,7,8,9'])) //calls the function and logs it to the console