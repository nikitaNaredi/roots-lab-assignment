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
  math = Math;
  icon = ['arrow_upward', 'arrow_downward', ''];
  headerJson = [
    {
      label: 'First Name',
      name: 'first',
      order : 2
    },
    {
      label: 'Last Name',
      name: 'last',
      order: 2
    },
    {
      label: 'Email ID',
      name: 'email',
      order: 2
    },
    {
      label: 'Address',
      name: 'address',
      order: 2
    },
    {
      label: 'Created',
      name: 'created',
      order: 2
    },
    {
      label: 'Balance',
      name: 'balance',
      order: 2
    }
  ];

  constructor(private service: DataService, private http: HttpClient) {
  }

  ngOnInit() {
    this.service.getData()
    .subscribe((data) => {
      this.tableData = data;
      this.tableLength = this.tableData.length;
      this.tableFilter = this.tableData ;
      this.tablePages = Math.ceil(this.tableLength / 10);
      this.currentPage = 0;
     });
  }
  paginationNext() {
    this.currentPage += 1;
  }
  paginationPrev() {
    this.currentPage -= 1;
  }

  updateOrderBy(index) {
    if (this.headerJson[index].order === 0) {
      for (let i in this.headerJson) {
        this.headerJson[i].order = 2;
      }
      this.headerJson[index].order = 1;
    } else {
      for (let i in this.headerJson) {
        this.headerJson[i].order = 2;
      }
      this.headerJson[index].order = 0;
    }
  }

  sort(sortBy: string, orderBy: number) {
    this.tableFilter = this.tableData.sort( (a, b ) => {
      let val;
      let first: any;
      let second: any;
      if (sortBy === 'created') {
        first = new Date(a[sortBy]);
        second = new Date(b[sortBy]);
      } else if (sortBy === 'balance') {
        first = parseFloat(a[sortBy].slice(1, a[sortBy].length).replace(/,/g, ''));
        second = parseFloat(b[sortBy].slice(1, b[sortBy].length).replace(/,/g, ''));
      } else {
        first = a[sortBy];
        second = b[sortBy];
      }
      if (first > second) {
        val = (orderBy === 0) ? -1 : 1;
      } else if (first < second) {
        val = (orderBy === 0) ? 1 : -1;
      } else {
        val = 0;
      }
      return val;
    });
  }

  disablePrevious() {

    if (this.currentPage <= 0) {
      return true;
    }
    return false;
  }

  disableNext() {
    if (this.currentPage >= (this.tablePages - 1)) {
      return true;
    }
    return false;
  }

  paginationFirst() {
    this.currentPage = 0;
  }

  paginationLast() {
    this.currentPage = this.tablePages - 1;
  }

  updateTable() {
    this.tableFilter = this.tableData.filter((value: string, index: number, arr: object) => {
      for (let i in this.headerJson) {
        if ((arr[index][this.headerJson[i].name]).toLowerCase().includes(this.myFilter.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
    this.currentPage = 0;
    this.tableLength = this.tableFilter.length;
    this.tablePages = Math.ceil(this.tableLength / 10);
  }
}
