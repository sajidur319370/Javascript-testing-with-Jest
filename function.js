const sum = (a, b) => {
  return a + b;
};
function myFunction(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid Input");
  }
}
function fetchData(callback) {
  setTimeout(() => {
    callback("Sajidur Rahman");
  }, 1000);
}

function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("SAJIDUR RAHMAN");
    }, 1000);
  });
}


module.exports = [sum, myFunction];
module.exports = fetchData;
module.exports = fetchPromise;
