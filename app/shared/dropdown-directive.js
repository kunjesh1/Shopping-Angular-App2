import * as tslib_1 from "tslib";
import { Directive, HostBinding, HostListener } from "@angular/core";
let DropdownDirective = class DropdownDirective {
    constructor() {
        this.open = false;
    }
    toggleOpen() {
        this.open = !this.open;
    }
};
tslib_1.__decorate([
    HostBinding('class')
], DropdownDirective.prototype, "open", void 0);
tslib_1.__decorate([
    HostListener('click')
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = tslib_1.__decorate([
    Directive({
        selector: '[appDropDown]'
    })
], DropdownDirective);
export { DropdownDirective };
//# sourceMappingURL=dropdown-directive.js.map