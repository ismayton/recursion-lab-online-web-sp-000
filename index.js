function printString(myString)
{
  console.log(myString[0]);
  if(myString.length > 1)
  {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  }
  else
  {
    return true;
  }
}

function reverseString(myString) 
{
  if (myString === "")
  {
    return "";
  }
  else
  {
<<<<<<< HEAD
=======
    console.log(myString);
>>>>>>> 159498cc600ce4a0a1c854524b17e2878d18f6cf
    return reverseString(myString.substring(1)) + myString.substring(0, 1);
  }
}


function isPalindrome(myString)
{
<<<<<<< HEAD
  if(myString.length > 1)
  {
    if (myString[0] == myString[myString.length - 1])
    {
      let mySubString = myString.substring(1, myString.length - 1); 
      return isPalindrome(mySubString);
    }
    else
    {
      return false;
    }
  }
  return true;
=======
  reverseString(myString)
  if (reverseString(myString) == myString)
  {
    return true;
  }
  else
  {
    return false;
  }
>>>>>>> 159498cc600ce4a0a1c854524b17e2878d18f6cf
}

function addUpTo(array, index)
{
<<<<<<< HEAD
  if(index > 0)
  {
    {
      return addUpTo(array, index - 1) + array[index]
    }
=======
  if(index > 1)
  {
    return addUpTo(array, index) + array[index - 1]
>>>>>>> 159498cc600ce4a0a1c854524b17e2878d18f6cf
  }
  else
  {
    return array[index]
  }
}

<<<<<<< HEAD
function maxOf(array)
{
  if(array.length > 1)
  {
    if(array[0] > array[1])
    {
      let newArray = array[0] + array.slice(2)
      return maxOf(newArray)
    }
    else
    {
      let newArray = array.slice(1)
      return maxOf(newArray)
    }
  }
  else
  {
    return array[0];
  }
}

function includesNumber(array, number)
{
  if(array[0] == number)
  {
    return true;
  }
  else if(array.length > 1)
  {
    let newArray = array.slice(1);
    return includesNumber(newArray, number);
  }
  else
  {
    return false;
  }
}
=======
maxOf(array)
{
  
}

includesNumber(num)
{
  
}
>>>>>>> 159498cc600ce4a0a1c854524b17e2878d18f6cf
