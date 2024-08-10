/**
 *  getRandomRecipe test scenario
 *
 *  getRandomRecipe function
 *  - should return mealArray when data fetching sucsess
 *  - should return [] when data fetching failed
 */
import { getDataMeal } from '../src/fetchData';
import constants from "../interface/constant"
import {arrRecipe } from '../interface/recipeModel';
import {paramFetchData} from "../interface/stringParam"
// mock
window.alert = jest.fn();

describe('getRandmoRecipe function', () => {
    beforeEach(() => {
        (global.fetch as jest.Mock) = jest.fn();
    })
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should return mealArray when data fetching success', async () => {
		// arrange
        let fakeMealArray: arrRecipe[] = [
            {
                idMeal: '52785',
                strMeal: 'Dal fry',
                strDrinkAlternate: null,
                strCategory: 'Vegetarian',
                strArea: 'Indian',
                strInstructions: 'Fake instructions',
                strMealThumb: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
                strTags: 'Curry,Vegetarian,Cake',
                strYoutube: 'https://www.youtube.com/watch?v=J4D855Q9-jg',
                strIngredient1: 'Toor dal',
                strIngredient2: 'Water',
                strIngredient3: 'Salt',
                strIngredient4: 'Turmeric',
                strIngredient5: 'Ghee',
                strIngredient6: 'Chopped tomatoes',
                strIngredient7: 'Cumin seeds',
                strIngredient8: 'Mustard Seeds',
                strIngredient9: 'Bay Leaf',
                strIngredient10: 'Green Chili',
                strIngredient11: 'Ginger',
                strIngredient12: 'Cilantro',
                strIngredient13: 'Red Pepper',
                strIngredient14: 'Salt',
                strIngredient15: 'Sugar',
                strIngredient16: 'Garam Masala',
                strIngredient17: '',
                strIngredient18: '',
                strIngredient19: '',
                strIngredient20: '',
                strMeasure1: '1 cup',
                strMeasure2: '2-1/2 cups',
                strMeasure3: '1 tsp',
                strMeasure4: '1/4 tsp',
                strMeasure5: '3 tbs',
                strMeasure6: '1 cup',
                strMeasure7: '1/2 tsp',
                strMeasure8: '1/2 tsp',
                strMeasure9: '2',
                strMeasure10: '1 tbs chopped',
                strMeasure11: '2 tsp shredded',
                strMeasure12: '2 tbs ',
                strMeasure13: '1/2 tsp',
                strMeasure14: '1/2 tsp',
                strMeasure15: '1 tsp',
                strMeasure16: '1/4 tsp',
                strMeasure17: '',
                strMeasure18: '',
                strMeasure19: '',
                strMeasure20: '',
                strSource: 'https://www.instagram.com/p/BO21bpYD3Fu',
                strImageSource: null,
                strCreativeCommonsConfirmed: null,
                dateModified: null,
            },
        ];

  

        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: async () => ({ meals: fakeMealArray }),
          });
      
        // action
        const params : paramFetchData = {
            urlEndpoint : constants.urlParam,
            method      : 'GET'
        };
        
        const data: arrRecipe[] = await getDataMeal(params);

        // assert
        expect(data).toEqual(fakeMealArray);
	});

    it('should return [] when data fetching failed', async () => {
        // arrange
        const fakeErrorResponse: string = 'Ups, something went wrong';
        (global.fetch as jest.Mock).mockRejectedValue(new Error(fakeErrorResponse));
    
        // action
        const params : paramFetchData = {
            urlEndpoint : constants.urlParam,
            method      : 'GET'
        };
        const data: arrRecipe[] = await getDataMeal(params);

        // assert
        expect(data).toEqual([]);
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse);
    });
});
