// controllers/pizzaController.js

const Pizza = require('../models/PizzaModel');
const createPizza = async (req, res) => {
  try {
    const user = req.body;
    const pizza = new Pizza(user);
    const newPizza = await pizza.save();
    res.status(201).json(newPizza);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getAllPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    return res.status(200).json({
      message: "Pizzas fetched successfully",
      result: pizzas,
      count: pizzas.length
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// controllers/studentController.js



const getPizzaByName = async (req, res) => {
  try {
    const { name } = req.params;
    const pizzaByName = await Pizza.find({ name });
    if (!pizzaByName) {
      return res.status(404).json({ message: 'Pizzaname not found' });
    }
    res.json(pizzaByName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPizzasByPriceRange = async (req, res) => {
  try {
    const range = req.params.range;
    let minPrice, maxPrice;

    switch (range) {
      case '100-200':
        minPrice = 100;
        maxPrice = 200;
        break;
      case '200-300':
        minPrice = 200;
        maxPrice = 300;
        break;
      // Add more cases as needed for different ranges

      default:
        res.status(400).json({ message: 'Invalid price range' });
        return;
    }

    const pizzas = await Pizza.find({ price: { $gte: minPrice, $lte: maxPrice } });
    res.json(pizzas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




const updatePizza = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const updatedPizza = await Pizza.findByIdAndUpdate(id, { name, price }, { new: true });
    res.json(updatedPizza);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePizza = async (req, res) => {
  try {
    const { id } = req.params;
    await Pizza.findByIdAndDelete(id);
    res.json({ message: 'Pizza deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  getAllPizzas, getPizzasByPriceRange, createPizza, getPizzaByName
}