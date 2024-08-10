import {paramFetchData} from "../interface/stringParam"
import constants from "../interface/constant"
import {getDataMeal} from "../src/fetchData"
import {arrRecipe} from "../interface/recipeModel"
import { setDomDocument } from "../src/setRecipe"

const params : paramFetchData = {
    urlEndpoint : constants.urlParam,
    method      : 'GET'
};

const btnGetRecipe = document.getElementById('getRecipeBtn');
btnGetRecipe?.addEventListener("click", () =>{
    getDataMeal(params)
    .then(function(data){
        const mealData : arrRecipe[] | null = data;
        setDomDocument(mealData);

    })
    .catch(function(error){
        console.log('connection timeout, retry maybe ?')
    })
});


