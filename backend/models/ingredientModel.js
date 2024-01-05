import mongoose from 'mongoose';

const ingredientSchema = mongoose.Schema({
  pizzaBases: {
    type: Map,
    of: {
      type: Number,
      default: 20,
      
    },
  },
  sauces: {
    type: Map,
    of: {
      type: Number,
      default: 20,
      
    },
  },
  cheese: {
    type: Map,
    of: {
      type: Number,
      default: 20,
      
    },
  },
  veggies: {
    type: Map,
    of: {
      type: Number,
      default: 20,
      
    },
  },
  meat: {
    weight: {
      type: Number,
      default: 20,
      
    },
  },
});

export default mongoose.model('Ingredient', ingredientSchema);
