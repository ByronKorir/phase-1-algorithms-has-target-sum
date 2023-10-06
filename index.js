function hasTargetSum(array, target) {
  //looks through each item
  for(i=0;i<array.length;i++){
//looks through the rest of the item
    for(j=i+1;j<array.length;j++){
      //check if the addition === target 
      if(array[i]+array[j]===target){
        //returns true
        return true
      }
        
    }
    
  }
  //else returns false
  return false
  


}

/* 
  Write the Big O time complexity of your function here
*/
//quadratic time
//it takes the first number and adds it to the rest of the numbers
//and then checks it if equals to the target

/* 
  Add your pseudocode here
*/
//for (i=0;i<array.length;i++){
//   for(j=i+1;)
// }

/*
  Add written explanation of your solution here
*/
//looks through each item
//looks through the rest of the item
//check if the addition === target 
//returns true

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
