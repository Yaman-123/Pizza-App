// routes/pizzaRoutes.js

const express = require('express');
const router = express.Router();
const { getAllPizzas, getPizzasByPriceRange, createPizza,getPizzaByName } = require('../controller/PizzaController');
router.post('/pizzas', createPizza);
router.get('/getpizzas', getAllPizzas);
router.get('/getpizzasprice/:range', getPizzasByPriceRange);

router.get('/getpizzabyname/:name', getPizzaByName);

module.exports = router;
