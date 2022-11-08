
//Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers
function sum(numbers){  
  return numbers.reduce((summation,element) => summation+element,0); 
}

function multiply(numbers){  
  return numbers.reduce((product,element)=>product*element,1); 
}

//reverse a string in reverse.
function reverse(str){
  return str.split('').reduce(( reverse, letter) => letter + reverse);
} 
        
         // filterLongwords that takes an array of words and an integer i and returns the array of words that are longer than i
function filterLongWords(str,num){
  return str.filter(x=>x.length>num)
}

  