import {arrRecipe} from "../interface/recipeModel"
import constants from "../interface/constant"
import { showInstruction } from "../src/instructionList"
import { createIngredientsList } from "../src/ingredientsList"

export const setDomDocument =  (recipeData: arrRecipe) : void => { 
    if(recipeData){
        if(constants.recipeImg){
            constants.recipeImg.src = recipeData.strMealThumb;
            constants.recipeImg.style.width = "200px";
            constants.recipeImg.style.paddingLeft = "100px";
        }

        if(constants.recipeTitle)
        {
            constants.recipeTitle.innerHTML = recipeData.strMeal;
            constants.recipeTitle.style.textAlign = 'left';
        }

        if(constants.recipeBtn){
            constants.recipeBtn.style.visibility = "hidden";
        }
        if(constants.recipeTags){
            constants.recipeTags.innerHTML = recipeData.strYoutube ? recipeData.strYoutube : '';
            constants.recipeTags.style.textAlign = 'left';
        }
        createIngredientsList(recipeData);
        showInstruction(recipeData.strInstructions);
    }   
}