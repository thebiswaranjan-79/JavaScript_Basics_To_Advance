class Product {
  name;
  price;
  category;
  description;
  rating;

  constructor(name, price, category, description, rating) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.description = description;
    this.rating = rating;
  }

  // These are the Member Functions
  addToCart() {
    console.log("Product added to cart");
  }

  removeFromCart() {
    console.log("Product removed from cart");
  }

  displayCart() {
    console.log("Displaying cart");
  }

  buyProduct() {
    console.log("Product bought");
  }
}

// How new keywords Works ?
/**
```
    Every time we call new, it does the following 4 step procedure:\
        1. It creates a brand new plain & absolutely empty object.
        2. It calls the constructor of the class and passes the newly created object (not as a
        parameter) but inside a keyword called as this . So constructor automatically has access
        to the this keyword and when we call new , then the this keyword has access to the plain
        object created in step 1 and constructor now can use the this keyword inside it. And then
        let iphone = new Product();
        whatever is logic of constructor it is executed and the object is initialized.
        
``` */

let iphone = new Product(
  "Iphone 12",
  80000,
  "Electronics",
  "Apple Iphone 12",
  4.5
);
iphone.addToCart();
console.log(iphone);

// It has an exception, this keyword will not refer to the call site if used inside an arrow function
// In case of arrow functions, this is resolved using lexical scoping.
// In this code, this is present inside the arrow function, hence we will resolve it lexically.

let obj = {
  x: 10,
  y: 20,
  fn: function () {
    const arrow = () => {
      console.log(this.x, this.y);
    };
    arrow();
  },
};

obj.fn();

// 1. Is this defined in the scope of arrow function ? No
// 2. We go one scope up, i.e inside function fn.
// 3. Is this defined inside fn? yes, because fn is a normal function, we have a definition of
// this inside it which is the call site
// 4. Who is the call site ? Obj object which is responsible to trigger fn is the call site
// 5. Hence this refers to obj object and when we call arrow function we get output as 10 20 .
