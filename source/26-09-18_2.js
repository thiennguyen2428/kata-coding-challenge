/**
 * @description Alice and Bob were on a holiday. 
 * Both of them took many pictures of the places they've been, and now they want to show 
 * Charlie their entire collection. However, Charlie doesn't like this sessions, 
 * since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. 
 * He tells them that he will only sit during the session if they show the same motive at N times.
 * Luckily, Alice and Bob are able to encode the motive as a number. 
 * Can you help them to remove numbers such that their list contains each number only up to N times,
 * without changing the order?
 * #Task:
 * Given a list lst and a number N, create a new list that contains each number 
 * of list at most N times without reordering. 
 * For example if N = 2, and the input is [1,2,3,1,2,1,2,3], 
 * you take [1,2,3,1,2], drop the next [1,2] since this would lead to 
 * 1 and 2 being in the result 3 times,and then take 3, which leads to [1,2,3,1,2,3].
 */

// Solution 1: Using for loop and reduce method for count element
const deleteNthSol1 = (arr, n) => {
  const result = [];
  
  for (let i = 0; i < arr.length; ++i) {
    const count = result.reduce((temp, current) => {
      if (arr[i] === current) {
        return temp + 1;
      }
      return temp;
    }, 1);
    
    if (count <= n) {
      result.push(arr[i]);
    }
  }

  return result;
};

// Solution 2: Using cache object to store the same element appeared in the input array
const deleteNthSol2 = (arr, n) => {
  const cache = {};

  return arr.filter((val) => {
    cache[val] = (cache[val] || 0) + 1;

    return cache[val] <= n;
  });
};

module.exports = { deleteNthSol1, deleteNthSol2 };
