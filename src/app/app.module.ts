import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./appRoot/app.component";
import { HeaderComponent } from "./components/header/header.component";
import { RecipesComponent } from "./containers/recipes/recipes.component";
import { RecipeListComponent } from "./containers/recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./containers/recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./containers/recipes/recipe-item/recipe-item.component";
import { ShoppingListComponent } from "./containers/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./containers/shopping-list/shopping-edit/shopping-edit.component";
import { DropdownDirective } from "./components/dropdown/dropdown.directive";
import { ShoppingListService } from "./common/services/shopping-list.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [BrowserModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
