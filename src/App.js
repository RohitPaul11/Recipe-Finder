import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppComponent from './components/appcomponent';
import AddIngredientForm from './components/Addingredient'; 
import RecipeList from './components/RecipeList';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<AppComponent />} />
        <Route path="/Addingredient" element={<AddIngredientForm />} />
        <Route path="/RecipeList" element={<RecipeList />} />
       
      </Routes>
    </Router>
    
  );
};

export default App;