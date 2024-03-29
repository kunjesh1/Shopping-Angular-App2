import * as tslib_1 from "tslib";
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
let RecipeItemComponent = class RecipeItemComponent {
    constructor() {
        this.recipeSelected = new EventEmitter();
    }
    ngOnInit() {
    }
    onSelected() {
        this.recipeSelected.emit();
    }
};
tslib_1.__decorate([
    Input()
], RecipeItemComponent.prototype, "recipe", void 0);
tslib_1.__decorate([
    Output()
], RecipeItemComponent.prototype, "recipeSelected", void 0);
RecipeItemComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recipe-item',
        templateUrl: './recipe-item.component.html',
        styleUrls: ['./recipe-item.component.css']
    })
], RecipeItemComponent);
export { RecipeItemComponent };
//# sourceMappingURL=recipe-item.component.js.map