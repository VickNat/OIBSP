import express from 'express'
import cors from 'cors'
import { PORT } from './config.js'
import { v2 as cloudinary } from 'cloudinary';
import './db.js'
import { User } from './models/userModel.js';
import Ingredient from './models/ingredientModel.js';

const app = express()

app.use(express.json())
app.listen(PORT, console.log("Server started"))

app.use(cors())

/**
 * Home
 */
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN Stack tutorial!")
})

/**
 * User
 */
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({})

    return res.status(201).send({
      counts: users.length,
      data: users
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message })
  }
})

app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params

    const user = await User.findById(id)

    return res.status(201).send(user)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message })
  }
})

app.post('/users', async (req, res) => {
  try {
    if (
      !req.body.fullName ||
      !req.body.password ||
      !req.body.email ||
      !req.body.role ||
      !req.body.verified
    ) {
      return res.status(400).send({
        message: "All fields are required."
      })
    }

    const newUser = {
      fullName: req.body.fullName,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role,
      verified: req.body.verified
    }

    const user = await User.create(newUser)
    return res.status(201).send(user)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message })
  }
})

/**
 * Ingredients
 */
// Initialize ingredients
const initializeIngredients = async () => {
  try {
    const existingIngredients = await Ingredient.find({})

    if (existingIngredients.length == 0) {
      const defaultIngredients = {
        pizzaBases: {
          pb1: 20,
          pb2: 20,
          pb3: 20,
          pb4: 20,
          pb5: 20
        },
        sauces: {
          sauce1: 20,
          sauce2: 20,
          sauce3: 20,
          sauce4: 20,
          sauce5: 20,
        },
        cheese: {
          cheese1: 20,
          cheese2: 20,
          cheese3: 20,
          cheese4: 20,
          cheese5: 20,
        },
        veggies: {
          veggie1: 20,
          veggie2: 20,
          veggie3: 20,
          veggie4: 20,
          veggie5: 20,
        },
        meat: {
          weight: 20
        }
      }

      const newIngredients = new Ingredient(defaultIngredients)
      console.log("Successfully created");
      newIngredients.save()
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message })
  }
}

initializeIngredients()

app.get('/ingredients', async (req, res) => {
  try {
    const temp = await Ingredient.find({});

    return res.status(200).send({
      counts: temp.length,
      data: temp
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

app.put('/ingredients/:id', async (req, res) => {
  try {
    const { id } = req.params

    const result = await Ingredient.findByIdAndUpdate(id, req.body, { new: true })

    if (!result) {
      return res.status(404).send({ message: "Not found" })
    }

    return res.status(200).send({ message: "Successfully updated ingredients", result: result })

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
})