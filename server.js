const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

const DATA_FILE = path.join(__dirname, 'data.json');

app.set('port', process.env.PORT || 3001);

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((_, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get('/foods/:searchInput', (req, res) => {
  const searchedInput = req.params.searchInput;

  fs.readFile(DATA_FILE, (_, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    const filteredData = JSON.parse(data).filter((f) =>
      f.name.toLowerCase().includes(searchedInput.toLowerCase())
    );
    res.json(filteredData);
  });
});

app.post('/foods', (req, res) => {
  fs.readFile(DATA_FILE, (_, data) => {
    const foods = JSON.parse(data);

    const newFood = {
      id: foods[foods.length - 1].id + 1,
      name: req.body.name,
      calories: req.body.calories,
      protein: req.body.protein,
      carbs: req.body.carbs,
      fat: req.body.fat,
      fiber: req.body.fiber,
    };

    foods.push(newFood);

    fs.writeFile(DATA_FILE, JSON.stringify(foods, null, 2), () => {
      res.status(201).json(newFood);
    });
  });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
