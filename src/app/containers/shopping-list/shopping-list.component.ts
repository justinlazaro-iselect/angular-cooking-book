import { Component, OnInit } from "@angular/core";
import { Ingredient } from "src/app/common/models/ingredient.model";
import { ShoppingListService } from "src/app/common/services/shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  private ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }
}
