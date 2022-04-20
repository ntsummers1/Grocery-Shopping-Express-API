# Welcome to my Grocery-Shopping-Express-API

<a href="https://nodejs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
<a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
<a href="https://mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="react" width="40" height="40"/> </a>

## Project Information

This project was created using Node.js, Express, and MongoDB. Its a Restful CRUD api that allows the user to fetch products from a grocery store and have them returned in a json output. An example of what fetching all the products looks like is as follows: 

```
{
 "categories": ["All", "Snacks", "Fruits", "Vegetables", "Beverages", "Fish", "Meat", "Household", "Pharmacy"],  
 "products" : [
    {
      "id": 1,
      "name": "Doritos Tor. Chips Cool Ranch",
      "price": 3.59,
      "category": ["Snacks"],
      "instock": true,
      "img": "imgs/doritos-cool-ranch.png"
    },
    {
      "id": 2,
      "name": "Doritos Tor. Chips Flamin Hot",
      "price": 3.59,
      "category": ["Snacks"],
      "instock": true,
      "img": "imgs/doritos-flamin-hot.png"
    },
    {
      "id": 86,
      "name": "Organic Lemons by the pound",
      "price": 0.39,
      "category": ["Fruits"],
      "instock": true,
      "img": "imgs/lemon.png"
    },
    {
      "id": 82,
      "name": "Organic Kiwi Fruit by the pound",
      "price": 0.63,
      "category": ["Fruits"],
      "instock": true,
      "img": "imgs/kiwi.png"
    }
  ]
}
```

There are also routes in this API to handle finding products by name, adding new products to the DB, deleting products, deleting all products, and updating products.

### Setting up the project

To run the application you are going to need the db.config.js file that contains the DB key and password. You can request this from myself (Nick). 

Assuming I've given you this DB access, you can do the following to run the application:

`npm install`

`npm start`

Running these commands will install all the dependencies and the launch the API. You can view the api at http://localhost:8080/

An example endpoint that you can call when running the API is the get all products endpoint. That endpoints url is http://localhost:8080/api/products
