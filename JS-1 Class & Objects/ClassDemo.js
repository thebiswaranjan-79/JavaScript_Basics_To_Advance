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

let iphone = new Product("Iphone 12", 80000, "Electronics", "Apple Iphone 12", 4.5);
iphone.addToCart();
console.log(iphone);