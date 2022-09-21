import { useState, useEffect } from "react";
import HomeTitle from "./HomeTitle";
import IngredientList from './ingredientList';
// import RecipeSteps from "./recipeSteps";

const Home = () => {
  const initialRecipe = {
    title: 'Mashed Potatoes',
    feedback: {
      rating: 10,
      reviews: 20
    },
    ingredients: [
      { name: '3 potatoes,cut into 1/2 pieces', prepared: false },
      { name: '4 Tbsp butter', prepared: false },
      { name: '1/8 cup heavy cream', prepared: false },
      { name: 'Salt', prepared: true },
      { name: 'Pepper', prepared: true },
    ],
    // recipesteps: [
    //   { step: 'Add cut potatoes to a pot of heavily salted water.' },
    //   { step: 'Bring pot to a boil' },
    //   { step: 'Boil the potatoes until fork tender, about 15-20 minutes.' },
    //   { step: 'Strain the potatoes.' },
    //   { step: 'Return potatoes to pot' },
    //   { step: 'Add butter, cream, salt, and pepper to taste.' },
    //   { step: 'Mash potatoes.' },
    //   { step: 'Reseason and add butter and cream as desired.' },
    // ],
  }
  const [recipe, setRecipe] = useState(initialRecipe);

  const [prepared, setPrepared] = useState(false);

  function ingredientClick(index) {
    const updatedRecipe = { ...recipe };
    updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
    setRecipe(updatedRecipe);
  }

  useEffect(() => {
    setPrepared(recipe.ingredients.every(i => i.prepared));
  }, [recipe]);

  return (
    <article>
      <h1>Recipe Manager</h1>
      <HomeTitle title={recipe.title} feedback={recipe.feedback} />
      <IngredientList ingredients={recipe.ingredients} onClick={ingredientClick} />

      {/* TODO: Add the prep work display */}
      {prepared ? <h2>Prep work done!</h2> : <h2>Just keep chopping</h2>}


    </article>
  );
}

export default Home;