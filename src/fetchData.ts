import {paramFetchData} from "../interface/stringParam"
import {arrRecipeModel} from "../interface/recipeModel"

export const getDataMeal = async({ urlEndpoint, method } : paramFetchData ) : Promise<arrRecipeModel> => {
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
        return data;
    }
    catch(error)
    {   
        throw error;
    }
}