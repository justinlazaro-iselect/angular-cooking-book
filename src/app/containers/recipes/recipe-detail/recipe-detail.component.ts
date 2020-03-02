import { Component, OnInit } from "@angular/core";
import { Recipe } from "../../../common/models/recipe.model";
import { RecipeService } from "src/app/common/services/recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeSerivce: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipeSerivce.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeSerivce.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.route });
    // this.router.navigate(["../", this.id, "edit"], { relativeTo: this.route });
  }
}
