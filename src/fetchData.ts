import {paramFetchData} from "../interface/stringParam"
import {arrRecipeModel, arrRecipe} from "../interface/recipeModel"

export const getDataMeal = async({ urlEndpoint, method } : paramFetchData ) : Promise<arrRecipe[]> => {
    try
    {
    
            const response = await fetch(urlEndpoint,
                {
                    method : method ?? 'GET'
                }
            );
            if(!response.ok)
            {
                throw new Error("Could not fetch resource");
            }
    
            //convert to json
            let data : arrRecipeModel = await response.json();
            let datas : arrRecipe[] = data.meals;
           
            return datas;
        
       
    }
    catch (error: unknown) 
    {   
        if (error instanceof Error) {
            alert(error.message);
        } else {
            alert('An unknown error occurred');
        }
        return [];	
    }

}