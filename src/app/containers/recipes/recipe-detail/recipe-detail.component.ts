import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../../../common/models/recipe.model";
import { RecipeService } from "src/app/common/services/recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeSerivce: RecipeService) {}

  ngOnInit() {}

  onAddToShoppingList() {
    this.recipeSerivce.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
