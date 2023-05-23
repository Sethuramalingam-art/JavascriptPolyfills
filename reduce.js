const x = [3, 4, 3, 4, 2];

Array.prototype.myReduceFn = (calBackFn, initalValue) => {
  let accumulator = initalValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = calBackFn.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

function reduceArr() {
  return x.myReduceFn((total, elem) => total + elem);
}

console.log(reduceArr());
