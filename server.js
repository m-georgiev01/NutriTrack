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
    const filteredData = JSON.parse(data).foods.filter((f) =>
      f.name.toLowerCase().includes(searchedInput.toLowerCase())
    );
    res.json(filteredData);
  });
});

app.post('/foods', (req, res) => {
  fs.readFile(DATA_FILE, (_, data) => {
    const jsonData = JSON.parse(data);

    const newFood = {
      id: jsonData.foods[jsonData.foods.length - 1].id + 1,
      name: req.body.name,
      calories: req.body.calories,
      protein: req.body.protein,
      carbs: req.body.carbs,
      fat: req.body.fat,
      fiber: req.body.fiber,
    };

    jsonData.foods.push(newFood);

    fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), () => {
      res.status(201).json(newFood);
    });
  });
});

app.get('/selected-foods', (_, res) => {
  fs.readFile(DATA_FILE, (_, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data).selectedFoods);
  });
});

app.post('/selected-foods', (req, res) => {
  fs.readFile(DATA_FILE, (_, data) => {
    const jsonData = JSON.parse(data);

    const newSelectedFood = {
      id: req.body.id,
      name: req.body.name,
      calories: req.body.calories,
      protein: req.body.protein,
      carbs: req.body.carbs,
      fat: req.body.fat,
      fiber: req.body.fiber,
    };

    jsonData.selectedFoods.push(newSelectedFood);

    fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), () => {
      res.status(201).json(newSelectedFood);
    });
  });
});

app.delete('/selected-foods/:id', (req, res) => {
  const foodIdToDelete = Number(req.params.id);
  fs.readFile(DATA_FILE, (_, data) => {
    const jsonData = JSON.parse(data);
    const indexToDelete = jsonData.selectedFoods.findIndex(
      (f) => f.id === foodIdToDelete
    );

    jsonData.selectedFoods.splice(indexToDelete, 1);

    fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), () => {
      res.status(200).send('Selected food item deleted successfully');
    });
  });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
