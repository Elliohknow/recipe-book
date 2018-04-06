import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'That goooooood schnitzel.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Zigeunerschnitzel_Jennrkaser.JPG/1920px-Zigeunerschnitzel_Jennrkaser.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Tasty Wheat',
      'Do you remember what Tasty Wheat tasted like?',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Oatmeal_food.jpg/1280px-Oatmeal_food.jpg',
      [
        new Ingredient('None, beacuse this is the Matrix', 1)
      ]
    )
  ];

  constructor(private shoppinglistService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }
}
