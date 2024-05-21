import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import RecipeList from './RecipeList';  

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("/react-recipe-finder/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const InputField = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AddButton = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  border: none;
  margin-bottom: 3px;
  border-radius: 5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgb(42, 40, 85);
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  text-shadow: 0 0 3px red, 0 0 5px blueviolet;
  color: aquamarine;
`;

const AddIngredientForm = () => {
  const navigate = useNavigate();

  const [ingredient, setIngredient] = useState('');
  const [ingredientN, setIngredientN] = useState('');
  const [ingredientW, setIngredientW] = useState('');

  const handleInputChange = (e) => {
    setIngredient(e.target.value);
    console.log("Added Dish: ", ingredient);
  };

  const handleInputN = (e) => {
    setIngredientN(e.target.value);
  };

  const handleInputW = (e) => {
    setIngredientW(e.target.value);
  };

  const home = () => {
    navigate('/');
  };
 
  const Viewrecipes=()=>{
    navigate('/RecipeList')
   }

  const handleAddIngredient = async () => {
    try {
      if (ingredientW.trim() !== '') {
        const response = await axios.post('http://localhost:5000/Addingredient', {
          name: ingredient,
          ingredients: ingredientN,
          weight: parseFloat(ingredientW),
        });
        console.log('Ingredient added:', response.data);
        setIngredient('');
        setIngredientN('');
        setIngredientW('');
        navigate('/'); // Navigate back to the main page
      }
    } catch (error) {
      console.error('Error adding ingredient:', error);
    }
  };
 
  
  return (
    
    <FormContainer>
      <FormLabel>Dish Name:</FormLabel>
      <InputField
        type="text"
        placeholder="Dish want to add.."
        value={ingredient}
        onChange={handleInputChange}
      />

      <FormLabel>Ingredients Needed:</FormLabel>
      <InputField
        type="text"
        placeholder="Enter ingredients"
        value={ingredientN}
        onChange={handleInputN}
      />
      <FormLabel>Ingredient Weights:</FormLabel>
      <InputField
        type="text"
        placeholder="Ingredient Qty"
        value={ingredientW}
        onChange={handleInputW}
      />

      <AddButton onClick={handleAddIngredient}>Add</AddButton>

      <AddButton onClick={Viewrecipes}>Shared Recipes</AddButton>
      
    </FormContainer>
  );
};

export default AddIngredientForm;
