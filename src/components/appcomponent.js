import React, { useState } from 'react';
import Axios from 'axios';
import styled , {keyframes}from 'styled-components';
 import Modal from 'react-modal'; 
import { useNavigate } from 'react-router-dom'; 

const APP_KEY = '9738c53f72msh5f9f8af71bc4240p1b184cjsn34dd100895e7';

Modal.setAppElement('#root'); 

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

const CoverImage = styled.img`
  object-fit: cover;
  height: 200px;
  border-radius: 10px;
  transition: transform .3s;  
  &:hover{
    transform: scale(0.9);
  }

`;

const RecipeName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SeeMoreText = styled.span`
  /* color: rgb(194, 47, 98); */
  font-size: 18px;
  text-align: center;
  border: dotted 2px #eb3300;
  border-radius: 6px;
  margin-right: 20px;
  text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
  cursor: pointer;
  &:hover{
    color: #ff4500;
  }
`;

const IngredientsText = styled(SeeMoreText)`
  color: cyan;
  border: solid 2px green;
  margin-bottom: 12px;
`;

const SeeNewTab = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);      // Use a boolean for show state

  const { label, image, ingredients, url } = props.recipe;

  return (
    <RecipeContainer>
      <SeeMoreText onClick={() => setShow(true)}>Open Ingredients</SeeMoreText>

      <Modal             
        isOpen={show}
        onRequestClose={() => setShow(false)}
        style={{
          content: {
            width: '50%',
            margin: '0 auto',
          },
        }}
      >
        <h2>Ingredients</h2>
        <RecipeName>{label}</RecipeName>
        <table>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient, index) => (
              <tr key={index} className="ingredient-list">
                <td>{ingredient.text}</td>
                <td>{ingredient.weight}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <SeeNewTab onClick={() => window.open(url)}>See More</SeeNewTab>
          <SeeMoreText onClick={() => setShow(false)}>Close</SeeMoreText>
        </div>
      </Modal>

      <CoverImage src={image} alt={label} />
      <RecipeName>{label}</RecipeName>
    </RecipeContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-image: conic-gradient(cyan, yellow, green, magenta, blue, purple); */
  background-color: blanchedalmond;
 `;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    background-image: conic-gradient(cyan, yellow, green, magenta, blue, purple);
    border-radius: 10px;
    box-shadow: 1px 1px 8px 3px;
  }
 `;
const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  height: 30px;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative; 
  padding: 10px 10px;
  border-radius: 10px;
  margin-left: 20px;
  height: 20px;
  width: 20%;
  /* background-image: radial-gradient(red 15%, yellow 25%, azure 30%); */
  background-color: azure;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

   &:hover {
    transform: scale(1.05);
    background-color: purple;
  }
`;
const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
  position: relative;
`;
const RecipeImage = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;  
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(0.9);
  } 
  `;

const Boxcontainer = styled.div`
  position: relative;
`;

const PlaceholderImage = styled.img`
  width: 1000px;
  height: 520px;
  border-radius: 8px;
  opacity: 0.5;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1); 
    opacity: 1;
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: rgba(255, 255, 255, 0.6);  */
  background-image: url(/react-recipe-finder/bg.jpg);
  padding: 20px;
  text-align: center;
  border-radius: 15px 50px; 
  transition: width 2s, height 2s, transform 2s;
  &:hover{
    width: 300px;
  height: 200px;
  transform: rotate(180deg);
  }
`;

const OverlayText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  box-shadow: 1px 1px 8px 3px;
  text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
`;

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
  background-color: aquamarine;
  border-radius: 10%;
  overflow: hidden;
`;
const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;

const placeholderAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(7px);
  }
  100% {
    transform: translateX(0);
  }
`;

const AddButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  background-color: #2196f3;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  &:hover{
       background-image: url("/react-recipe-finder/back.jpg");
  }
`;

const PlaceholderText = styled.span`
  position: absolute;
  color: #999;
  font-size: 16px;
  font-weight: bold;
  left: 160px; 
  top: 15%;
  transform: translateY(-50%);
  pointer-events: none; 
  animation: ${placeholderAnimation} 2s infinite;
`;
const AppComponent = () => {
  
  const [searchQuery, updateSearchQuery] = useState("");
  const [recipeList, updateRecipeList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const fetchData = async (searchString) => {
    try {
      const response = await Axios.get(
        `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&q=${searchString}`,
        {  
          headers: {
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
            'X-RapidAPI-Key': APP_KEY,
          },
        }
      );

      updateRecipeList(response.data.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  const navigate = useNavigate();

  const adding = () => {                    // Navigation to AddIngredientform page
    navigate('/Addingredient');
     };
     
  const main = () => {                    
    navigate('/');
     };

  return (
    <Container>
      <Header>
        <AppName onClick={main}>
          <RecipeImage src="/react-recipe-finder/hamburger.svg" />
          Recipe Finder
        </AppName>

        <AddButton onClick={adding}>Add Recipe</AddButton>

        <SearchBox>
          <SearchIcon src="/react-recipe-finder/search-icon.svg" />
          <PlaceholderText>Search Recipe</PlaceholderText>
          <SearchInput
            placeholder=""
            value={searchQuery}
            onChange={onTextChange}
          />
          
        </SearchBox>


      </Header>
      <RecipeListContainer>
     
        {recipeList?.length ? (
          recipeList.map((recipe, index) => (
            <RecipeComponent key={index} recipe={recipe.recipe} />
          ))
        ) : (
      <Boxcontainer>
          <PlaceholderImage  src= "/react-recipe-finder/back.jpg" />
            
      <TextOverlay>
        <OverlayText>
        A recipe has no <i>soul</i>. You, As a cook, <i>bring soul</i> to the Recipe. 
        </OverlayText>
      </TextOverlay>
    </Boxcontainer>
    )}
     
      </RecipeListContainer>
    </Container>
  );
};

export default AppComponent;