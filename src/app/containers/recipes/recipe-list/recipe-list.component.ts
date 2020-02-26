import { Component, OnInit } from "@angular/core";
import { Recipe } from "../../../common/models/recipe.model";
import { RecipeService } from "src/app/common/services/recipe.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeSerivce: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeSerivce.getRecipes();
  }
}
