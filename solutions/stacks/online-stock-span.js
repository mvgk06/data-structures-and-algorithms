/*

Brute force

Time - O(n^2)
Space - O(1)

*/

const StockSpanner = () => {
  this.arr = [];
};

StockSpanner.prototype.next = function (price) {

  this.arr.push(price);
  const curr = this.arr[this.arr.length - 1];
  let count = 0;

  for (let i = this.arr.length - 1; i >= 0; i--) {
    if (this.arr[i] <= curr) {
      count++;
    } else {
      break;
    }
  }

  return count;
};

/*

Stack - TO UPDATE

Time - O(n)
Space - O(n)

*/
