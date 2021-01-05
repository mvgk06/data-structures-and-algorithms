/*

Sorting

Time - O(nlogn)
Space - O(1)

*/

const findDuplicateAndMissing1 = (arr) => {

  arr.sort((a, b) => {
    return a - b;
  });

  let repeating, missing;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      repeating = arr[i];
    }
    if (arr[i] != i + 1) {
      missing = i + 1;
    }
  }

  console.log("Missing = ", missing, ", Repeating = ", repeating);
};

/*

Counting sort or Map

Time - O(n)
Space - O(n)

*/

const findDuplicateAndMissing2 = (arr) => {

  let repeating, missing;
  const count = new Array(arr.length + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  for (let i = 1; i < count.length; i++) {
    if (count[i] === 0) {
      missing = i;
    }
    if (count[i] > 1) {
      repeating = i;
    }
  }

  console.log("Missing = ", missing, ", Repeating = ", repeating);
};

/*

Swap sort 

Time - O(n)
Space - O(1)

*/

const findDuplicateAndMissing3 = (arr) => {

  let i = 0;

  while (i < arr.length) {
    if (arr[i] == arr[arr[i] - 1]) {
      i++;
    } else {
      const temp = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = temp;
    }
  }

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] != j + 1) {
      console.log("Missing = ", j + 1, ", Repeating = ", arr[j]);
    }
  }
};