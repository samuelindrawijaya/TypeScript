const urlParam : string = 'https://www.themealdb.com/api/json/v1/1/random.php';
const strIngredients: string = 'strIngredient';
const strMeasure: string     = 'strMeasure';


const recipeBtn             = document.getElementById("getRecipeBtn")        as HTMLButtonElement | null ;
const recipeImg             = document.getElementById("recipeImg")           as HTMLImageElement | null;
const recipeInstruction     = document.getElementById("recipe-ins")          as HTMLElement | null;
const recipeId              = document.getElementById("recipeId")            as HTMLElement | null;
const recipeTitle           = document.getElementById("recipe-title")        as HTMLElement | null;
const recipeTags            = document.getElementById("recipe-tags")         as HTMLElement | null;

export default { 
    urlParam,
    recipeBtn,
    recipeImg,
    recipeInstruction,
    recipeId,
    strIngredients,
    strMeasure,
    recipeTitle,
    recipeTags
}