import { Recipe } from "../containers/recipes/recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is a test maybe",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"
    ),
    new Recipe(
      "Another Test Recipe",
      "This is a test another",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
