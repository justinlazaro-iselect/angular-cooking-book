import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

import { Recipe } from "../models/recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put(
        "https://ng-course-recipe-book-c5851.firebaseio.com/recipe.json",
        recipes
      )
      .subscribe(response => console.log(response));
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        "https://ng-course-recipe-book-c5851.firebaseio.com/recipe.json"
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
