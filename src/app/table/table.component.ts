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

  sort(sortBy: string) {
    console.log(sortBy);
    this.tableFilter = (this.tableData).sort( (a, b ) => {
      console.log("oinssdf "+a+" "+b.first);
      if (a[name] > b[name]) 
        return -1;
      else if(a[sortBy] < b[sortBy]) 
        return 1;
      return 0;
    });
  }
}
