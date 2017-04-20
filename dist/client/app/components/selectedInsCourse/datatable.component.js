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
var DatatableComponent = (function () {
    function DatatableComponent() {
        this.enableFilter = false;
        this.columns = [];
        this.query = "";
    }
    DatatableComponent.prototype.addColumn = function (column) {
        this.columns.push(column);
    };
    DatatableComponent.prototype.getData = function () {
        if (this.query !== "") {
            return this.filteredList;
        }
        else {
            return this.dataset;
        }
    };
    DatatableComponent.prototype.filter = function () {
        this.filteredList = this.dataset.filter(function (el) {
            var result = "";
            for (var key in el) {
                if (el.hasOwnProperty(key)) {
                    result += el[key];
                }
            }
            return result.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "dataset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "enableFilter", void 0);
    DatatableComponent = __decorate([
        core_1.Component({
            selector: 'datatable',
            template: "\n            <input type=\"text\" class=\"form-control\" *ngIf=enableFilter [(ngModel)]=query \n                  (keyup)=filter() placeholder=\"Filter\" />\n            <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th *ngFor=\"let column of columns\">{{column.header}}</th>\n                  </tr>\n                </thead>\n                <tbody *ngFor=\"let row of getData()\">\n                  <tr>\n                    <td *ngFor=\"let column of columns\">{{row[column.value]}}</td>\n                  </tr>\n                </tbody>\n            </table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DatatableComponent);
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NlbGVjdGVkSW5zQ291cnNlL2RhdGF0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQXVCM0Q7SUFBQTtRQUdXLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLFlBQU8sR0FBc0IsRUFBRSxDQUFDO1FBQ2hDLFVBQUssR0FBRyxFQUFFLENBQUM7SUEwQmIsQ0FBQztJQXZCQyxzQ0FBUyxHQUFULFVBQVUsTUFBTTtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxvQ0FBTyxHQUFQO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7UUFBQSxJQUFJLENBQUMsQ0FBQztZQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBUyxFQUFFO1lBQ2pELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNkLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixDQUFDO1lBQ0gsQ0FBQztZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQTVCRDtRQUFDLFlBQUssRUFBRTs7dURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NERBQUE7SUF2QlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFFckIsUUFBUSxFQUFFLDRtQkFlVDtTQUNGLENBQUM7OzBCQUFBO0lBZ0NGLHlCQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSwwQkFBa0IscUJBK0I5QixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3NlbGVjdGVkSW5zQ291cnNlL2RhdGF0YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtJbmplY3RhYmxlLCBDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb2x1bW5Db21wb25lbnR9IGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RhdGF0YWJsZScsXHJcblxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgKm5nSWY9ZW5hYmxlRmlsdGVyIFsobmdNb2RlbCldPXF1ZXJ5IFxyXG4gICAgICAgICAgICAgICAgICAoa2V5dXApPWZpbHRlcigpIHBsYWNlaG9sZGVyPVwiRmlsdGVyXCIgLz5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIj57e2NvbHVtbi5oZWFkZXJ9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5ICpuZ0Zvcj1cImxldCByb3cgb2YgZ2V0RGF0YSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCI+e3tyb3dbY29sdW1uLnZhbHVlXX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YXRhYmxlQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgZGF0YXNldDtcclxuICBASW5wdXQoKSBlbmFibGVGaWx0ZXIgPSBmYWxzZTtcclxuICBjb2x1bW5zOiBDb2x1bW5Db21wb25lbnRbXSA9IFtdO1xyXG4gIHF1ZXJ5ID0gXCJcIjtcclxuICBmaWx0ZXJlZExpc3Q7XHJcblxyXG4gIGFkZENvbHVtbihjb2x1bW4pIHtcclxuICAgIHRoaXMuY29sdW1ucy5wdXNoKGNvbHVtbik7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCkge1xyXG4gICAgaWYgKHRoaXMucXVlcnkgIT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRMaXN0O1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5kYXRhc2V0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmlsdGVyKCkge1xyXG4gICAgdGhpcy5maWx0ZXJlZExpc3QgPSB0aGlzLmRhdGFzZXQuZmlsdGVyKGZ1bmN0aW9uKGVsKXtcclxuICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGVsKSB7XHJcbiAgICAgICAgICBpZiAoZWwuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gZWxba2V5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5xdWVyeS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
