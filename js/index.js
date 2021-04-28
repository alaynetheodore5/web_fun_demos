// is the sring a palindrome? "hello" "racecar" create a function to check if string is a palindrome.
// return True/False.

function isPalindrome(str){
  for(var i=0; i< Math.floor(str.length/2); i++){
    console.log(i);
    console.log(str[i]);
    if(str[i] != str[str.length-1-i]){
      return false;
    }
  }
  return true;
}

// console.log(isPalindrome("hello"));

function isPalindrome2(str){
  let reverse = "";
  for(var i=str.length-1; i>=0; i--){
    reverse += str[i];
  }
  if(reverse === str){
    return true;
  }
  return false;
}

console.log(isPalindrome2("mom"));