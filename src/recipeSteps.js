const RecipeSteps = (props) => {
  const stepping = props.recipesteps.map((recipestep, index) => {
    return (
      <li key={index}> {recipestep.step} </li>
    )
  })
  return (
    <ol>
      {stepping}
    </ol>
  );
}

export default RecipeSteps;
