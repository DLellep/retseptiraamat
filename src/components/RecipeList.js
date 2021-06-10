import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ recipe }) => {
  return (
    <div>
      {recipe.map((recipe, index) => {
        return (
            //name,tagide arv, time
          <div class="recipe-list">
            <h2>{recipe.name}</h2>
            <p>{recipe.tags[0]}</p> <p>{recipe.tags[1]}</p><p>{recipe.tags[2]}</p>
            <p>{recipe.duration} minutit</p>
            <Link to={`/recipes/${index}`}>Vaata lähemalt</Link>
            </div>
        );
      })}
    </div>
  );
};
  export default RecipeList;