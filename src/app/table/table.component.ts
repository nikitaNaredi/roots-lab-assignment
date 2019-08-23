import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { DataService } from '../data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableData: any;
  tableFilter: any;
  myFilter: string;
  tableLength: number;
  currentPage: number;
  tablePages: number;
  icon = [ "arrow_upward", "arrow_downward"];
  headerJson = [
      {
        'label':'First Name',
        'name': 'first',
        'order' : 0},
      {
        'label':'Last Name',
        'name': 'last',
        'order' : 0},
      {
        'label':'Email ID',
        'name': 'email',
        'order' : 0}, 
      {
        'label':'Address',
        'name': 'address',
        'order' : 0},
        {
          'label':'Created',
          'name': 'created',
          'order' : 0},
      {
        'label':'Balance',
        'name': 'balance',
        'order' : 0}
      ] 

  constructor(private service: DataService, private http: HttpClient){
    
  }
  ngOnInit() {
    this.service.getData()
    .subscribe((data) => {
      this.tableData = data;
      this.tableLength = this.tableData.length;
      this.tableFilter = this.tableData ;
      this.tablePages = Math.ceil( this.tableLength/10 );
      this.currentPage = 1;
     });
  }
  paginationNext() {
    this.currentPage++;
    console.log(this.currentPage);
  }
  paginationPrev() {
    this.currentPage--;
    console.log(this.currentPage);
  }

  updateOrderBy(name) {
    if(this.headerJson[name].order == 0)
      this.headerJson[name].order = 1;
    else
      this.headerJson[name].order = 0;
  }

  sort(sortBy: string, orderBy: number) {
    this.tableFilter = (this.tableData).sort( (a, b ) => {
      var val;
      if (a[sortBy] > b[sortBy]) 
        val = (orderBy == 0) ? -1 : 1;
      else if(a[sortBy] < b[sortBy]) 
        val = (orderBy == 0) ? 1 : -1;
      else 
        val = 0;
      return val;
    });
  }

  
}
