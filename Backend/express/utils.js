// console.log('welcome');

//  export literal

// module.exports.msg = "Welcome to Node.js"

// export object

// module.exports = {
//  productName:"MacBook Pro",
//  price:2000,
//  currency: "USD"
// };

// export function
const greeting = () => {
  console.log(`Welcome HOME`);
};

const add = (a, b) => {
  console.log(a + b);
};

module.exports = {
  greeting,
  add,
};
