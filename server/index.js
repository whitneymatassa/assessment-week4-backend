const express = require("express");
const cors = require("cors");
const res = require("express/lib/response");
const { send } = require("express/lib/response");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["You're going to win an award", 
            "You are going to be a huge success", 
            "You will travel the world", 
            "You are going to be very rich", 
            "You will write a book",
  ];

  let fortuneIndex = Math.floor(Math.random()*fortunes.length);
  let randomFortune = fortunes[fortuneIndex];
  res.status(200).send(randomFortune);

});

app.get("/api/quote", (req, res) => {
  const quotes = ['"You do not find the happy life, you make it!" - Camilla Kimball', 
            '"The most wasted of days is one without laughter." - EE Cumings', 
            '"Make each day a masterpiece." - John Wooden', 
  ];

  let quoteIndex = Math.floor(Math.random()*quotes.length);
  let randomQuote = quotes[quoteIndex];
  res.status(200).send(randomQuote);

});


const newName = []
const id = 1

app.get(`/api/name`, (req, res) => {
  res.status(200).send(newName)
});

app.post('/api/name', (req, res) => {
  const { name } = req.body;
  let addName = {
    id: id,
    name: name
  };
  items.push(addName)
  id++

  res.status(200).send(newName);
});

app.delete(`/api/name/:id`, (req, res) => {
  let index = names.findIndex(elem => elem.id === + req.params.id)
  names.splice(index,1)
  res.status(200).send('name deleted')
});


app.get(`api/vacations`, (req, res) => {
  const message = "Thanks for submitting your preference!"
  res.status(200).send(message);
});