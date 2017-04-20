import {Http, Response} from '@angular/http';
import {Injectable, Component, Input} from '@angular/core';
import {ColumnComponent} from './column.component';

@Component({
  selector: 'datatable',

  template: `
            <input type="text" class="form-control" *ngIf=enableFilter [(ngModel)]=query 
                  (keyup)=filter() placeholder="Filter" />
            <table class="table">
                <thead>
                  <tr>
                    <th *ngFor="let column of columns">{{column.header}}</th>
                  </tr>
                </thead>
                <tbody *ngFor="let row of getData()">
                  <tr>
                    <td *ngFor="let column of columns">{{row[column.value]}}</td>
                  </tr>
                </tbody>
            </table>
  `
})
export class DatatableComponent {

  @Input() dataset;
  @Input() enableFilter = false;
  columns: ColumnComponent[] = [];
  query = "";
  filteredList;

  addColumn(column) {
    this.columns.push(column);
  }

  getData() {
    if (this.query !== "") {
      return this.filteredList;
    }else {
      return this.dataset;
    }
  }

  filter() {
    this.filteredList = this.dataset.filter(function(el){
      var result = "";
        for (var key in el) {
          if (el.hasOwnProperty(key)) {
            result += el[key];
          }
        }
        return result.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
    }.bind(this));
  }
}