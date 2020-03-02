import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "../containers/recipes/recipes.component";
import { ShoppingListComponent } from "../containers/shopping-list/shopping-list.component";
import { RecipeStartComponent } from "../containers/recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "../containers/recipes/recipe-detail/recipe-detail.component";

export const appRoutes: Routes = [
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      { path: ":id", component: RecipeDetailComponent }
    ]
  },
  {
    path: "shopping-list",
    component: ShoppingListComponent
  },
  {
    path: "",
    redirectTo: "/recipes",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
