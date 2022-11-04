function max( s,b){
    if(s>b){
        return s
       }
        else{
           return b
        }
}
  
  

    function maxOfThree(a,b,c){
        if(a>b){
            if(a>c){
                return a;
            }   
            else{
                return c;
            } 
        }
        else{
            if(b>c){
                return b;
            }
            else{
                return c;
            }
        }
    }
 

       function isVowel(char){
         switch(char){
            case 'a': return true; break;
            case 'e': return true; break;
            case 'i': return true; break;
            case 'o': return true; break;
            case 'u': return true; break;
            default: return false;
         }  
    }

    function sum(a){
      sum =0;
      for(let i = 0; i < a[i].length;i++){
        sum +=a[i];
      }
      return sum;
    }

    function multiply(a){
        product=1;
        for(let i = 0; i < a[i].length;i++){
          product * a[i];
        }
        return product;
      }

      function reverse(str){
        let revString="";
         for(let i =str.length-1; i>=0; i--){
            revString =revString + str[i];
         }
         return revString;
            
         }
         alert (reverse("Shamim"));


         function findLongWord(str){
           maxlength= str[0].length;
            for(var i = 0; i < str.length; i++){
                 if(str[i].length > maxlength){
                    maxlength = str[i].length;
                 }
            }
            return str[i].length;
         }

         function filterLongWords(str,num){
                return str.filter(x=>x.length>num)
         }

     
         

         function myFunctionTest(expected, found) {
            if (expected === found) {
              return "TEST SUCCEEDED";
            } else {
              return "TEST FAILED.  Expected " + expected + " found " + found;
            }
          }
        
          console.log("Expected output of max(45,55) is 55  " + myFunctionTest(55, max(45, 55))); //max(a,b)
          console.log("Expected output of maxOfThree(30,20,40) is 40  " + myFunctionTest(40, maxOfThree(30,20,40))); //maxOfThree(a,b,c)
          console.log("Expected output of isVowel('e') is true  " + myFunctionTest(true, isVowel('e'))); //isVowel(e)
          console.log("Expected output of sum([2,2,3,4,5]) is 16" + myFunctionTest(16, sum([2,2,3,4,5]))); //sum(a)
          console.log("Expected output of multiply([2,1,5,4,4]) is 160" + myFunctionTest(160, multiply([2,1,5,4,4]))); //multiply(a)
          console.log("Expected output of reverse(Shamim) is mimahS" + myFunctionTest("Shamim", reverse("Shamim"))); //reverse(str)
          console.log("Expected output of findLongestWord([The, longestWord, people]) is 11 " + myFunctionTest(11, findLongestWord(["The", "longestWord", "people"]))); //findLongestWord(str)
          console.log("Expected output of filterLongWords([The, longestWord, people]) is ['The', 'longestWord', 'people']  " + myFunctionTest(["The", "longestWord", "people"], filterLongWords(["The", "longestWord", "people"],6))); //filterLongWords(str , val)
        
