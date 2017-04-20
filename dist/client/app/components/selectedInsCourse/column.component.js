"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var datatable_component_1 = require('./datatable.component');
var ColumnComponent = (function () {
    function ColumnComponent(table) {
        table.addColumn(this);
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ColumnComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ColumnComponent.prototype, "header", void 0);
    ColumnComponent = __decorate([
        core_1.Component({
            selector: 'column',
            template: "",
        }), 
        __metadata('design:paramtypes', [datatable_component_1.DatatableComponent])
    ], ColumnComponent);
    return ColumnComponent;
}());
exports.ColumnComponent = ColumnComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NlbGVjdGVkSW5zQ291cnNlL2NvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxvQ0FBaUMsdUJBQXVCLENBQUMsQ0FBQTtBQU16RDtJQUlDLHlCQUFZLEtBQXlCO1FBQzlCLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUxIO1FBQUMsWUFBSyxFQUFFOztrREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzttREFBQTtJQU5UO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQzs7dUJBQUE7SUFRRixzQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksdUJBQWUsa0JBTzNCLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvc2VsZWN0ZWRJbnNDb3Vyc2UvY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGF0YXRhYmxlQ29tcG9uZW50fSBmcm9tICcuL2RhdGF0YWJsZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2x1bW4nLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbHVtbkNvbXBvbmVudCB7XHJcblx0QElucHV0KCkgdmFsdWU7XHJcblx0QElucHV0KCkgaGVhZGVyO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50KSB7XHJcbiAgICBcdCAgIHRhYmxlLmFkZENvbHVtbih0aGlzKTtcclxuICBcdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
