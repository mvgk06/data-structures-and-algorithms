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

Stack

Time - O(n)
Space - O(n)

*/

const StockSpanner2 = function () {
  this.stack = [];
  this.priceIndex = 0;
};

StockSpanner2.prototype.next = function (price) {

  if (this.stack.length === 0) {
    this.stack.push([this.priceIndex, price]);
    this.priceIndex++;
    return 1;
  }

  while (this.stack.length != 0 && this.stack[this.stack.length - 1][1] <= price) {
    this.stack.pop();
  }

  let result;

  if (this.stack.length === 0) {
    result = this.priceIndex + 1;
  }
  else {
    result = this.priceIndex - this.stack[this.stack.length - 1][0];
  }

  this.stack.push([this.priceIndex, price]);
  this.priceIndex++;

  return result;

};