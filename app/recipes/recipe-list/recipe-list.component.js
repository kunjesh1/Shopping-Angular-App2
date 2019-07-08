import * as tslib_1 from "tslib";
import { Component, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';
let RecipeListComponent = class RecipeListComponent {
    constructor() {
        this.recipeWasSelected = new EventEmitter();
        this.recipes = [
            new Recipe('A test Recipe', 'This is simply a test', 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),
            new Recipe('A test Recipe', 'This is simply a test', 'https://static01.nyt.com/images/2019/01/17/dining/mc-red-lentil-soup/merlin_146234352_d7bc8486-b067-4cff-a4c0-7741f166fb60-articleLarge.jpg')
        ];
    }
    ngOnInit() {
    }
    onRecipeSelected(recipe) {
        this.recipeWasSelected.emit(recipe);
    }
};
tslib_1.__decorate([
    Output()
], RecipeListComponent.prototype, "recipeWasSelected", void 0);
RecipeListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recipe-list',
        templateUrl: './recipe-list.component.html',
        styleUrls: ['./recipe-list.component.css']
    })
], RecipeListComponent);
export { RecipeListComponent };
//# sourceMappingURL=recipe-list.component.js.map