import { arrRecipe } from "../interface/recipeModel";
import { showIngredients } from "../src/showIngredients";

export const createIngredientsList =  (recipeData: arrRecipe) : void =>  { 
   
    
    let count : number = 1;
    let ingredients : string[] = [];
    for (let i  in recipeData) {
      let ingredient : string | null = "";
      let measure : string | null  = "";
      if (i.startsWith("strIngredient")) {
        ingredient = recipeData[i as keyof arrRecipe];
        measure = recipeData['strMeasure' + count as keyof arrRecipe];
        count += 1;
        if((ingredient !== null && ingredient !== '' ) && (measure !== null && measure !== ''))
        {
            ingredients.push(`${measure} - ${ingredient}`);
        }
      }
    }
    showIngredients(ingredients)  
}