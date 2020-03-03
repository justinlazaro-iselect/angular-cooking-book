import { Recipe } from "../models/recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     "Tasty Schnitzel",
  //     "This is a test maybe",
  //     "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
  //     [new Ingredient("Meat", 1), new Ingredient("French fries", 20)]
  //   ),
  //   new Recipe(
  //     "Big Fat Burger",
  //     "This is a test another",
  //     "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
  //     [new Ingredient("Buns", 2), new Ingredient("Meat", 20)]
  //   )
  // ];
  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
