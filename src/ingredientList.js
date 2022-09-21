import './ingredientList.css';
const IngredientList = (props) => {
  // create list for the ingredients
  const ingredientListItems = props.ingredients.map((ingredient, index) => {
    return (
      // Return the desired HTML for the ingredient
      <li key={index} className={ingredient.prepared ? 'prepared' : ''}
        onClick={() => props.onClick(index)}
      >{ingredient.name}</li>
    )
  });
  return (
    <ul>
      {ingredientListItems}
    </ul>
  );
}

export default IngredientList;