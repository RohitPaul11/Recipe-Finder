const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://RohitPaulChoudhury:rohit@dranzer.pzcbbeu.mongodb.net/Recipe_finder')
  .then(() => {
    console.log("Connected to Db");
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch((error) => {
    console.error("Connection to DB failed:", error);
  });

const ingredientSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  weight: Number,
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

//for adding the recipes
app.post('/Addingredient', async (req, res) => {
  try {
    const { name, ingredients, weight } = req.body;
    console.log(ingredients);

    const newIngredient = new Ingredient({ name, ingredients, weight });

    await newIngredient.save();

    res.status(201).json(newIngredient); 

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// for getting the recipe
app.get('/getRecipes', async (req, res) => {
  try {
    const recipes = await Ingredient.find();
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

