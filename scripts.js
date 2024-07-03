// Question one using For Loop

function sumArray(arr) {
    var arr = [2, 34, 7, 99, 24];

    let sum = 0; 

for (let i = 0; i < arr.length; i++) {
     sum += arr[i]; } 


  console.log(sum);
}

sumArray()

// Question two using For loop

const stringCheck = "Was it a car or a cat I saw?";

function isPalindrome(str) {
    const formattedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const length = formattedStr.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (formattedStr[i] !== formattedStr[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(stringCheck));

// Question 3 Using For Loop

const testNumber = 17;

    function isPrime(number) {
       
        if (number <= 1) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }

        return true;
    }
    
   
    console.log(isPrime(testNumber)); 
    
// Question 4 Using For Loop

const initialArray = [`ade`, `julius`, `samson`, `faith`];

    function reverseArray(arr) {
        const reversedArray = []; 
    
        for (let i = arr.length - 1; i >= 0; i--) {
            reversedArray.push(arr[i]);
        }
    
        return reversedArray;
    }
      
    const reversed = reverseArray(initialArray);
    console.log(reversed); 
    

   

