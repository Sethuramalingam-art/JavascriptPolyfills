// Polyfills for filter function

Array.prototype.myFilter = function (callbackFn) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callbackFn.call(this, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

function filterFunction() {
  let x = [
    { id: 1, name: "Sethu" },
    { id: 2, name: "Saran" },
    { id: 3, name: "Magi" },
  ];

  const result = x.myFilter((val, index) => val.name === "Sethu");
  console.log(result);
}

console.log(filterFunction());
