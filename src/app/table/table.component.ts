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
      //this.tableData = [{"first":"Golden","last":"Gutkowski","email":"blackwolf20@gmail.com","address":"40163 Wyman Locks","created":"December 24, 2018","balance":"$445.14"},{"first":"Dena","last":"Osinski","email":"magentafrog26@gmail.com","address":"77314 Daija Drive","created":"December 31, 2018","balance":"$6,690.63"},{"first":"Jordi","last":"Douglas","email":"Jordi.Douglas@amara.com","address":"0937 Breanna Highway","created":"May 17, 2010","balance":"$3,679.63"},{"first":"Delores","last":"Lebsack","email":"Delores.Lebsack@marcelle.net","address":"78237 Green Cape","created":"June 30, 2019","balance":"$4,004.35"},{"first":"Micheal","last":"Jaskolski","email":"purplerabbit02@gmail.com","address":"8208 Abshire Union","created":"March 9, 2014","balance":"$2,652.09"},{"first":"Adolfo","last":"Reynolds","email":"silverturtle27@gmail.com","address":"0025 Schiller Way","created":"July 29, 2014","balance":"$7,142.87"},{"first":"Mariam","last":"Hoeger","email":"turquoiseturtle81@gmail.com","address":"058 Lulu Wells","created":"August 4, 2015","balance":"$7,350.78"},{"first":"Shaina","last":"Pacocha","email":"pinkrabbit51@gmail.com","address":"6404 Lee Courts","created":"June 10, 2016","balance":"$8,024.28"},{"first":"Sigmund","last":"Hessel","email":"lavenderrabbit82@gmail.com","address":"05144 Langosh Ferry","created":"March 17, 2015","balance":"$6,845.89"},{"first":"Giles","last":"Wehner","email":"Giles.Wehner@greta.biz","address":"4182 Padberg Terrace","created":"January 3, 2017","balance":"$8,367.63"},{"first":"Mikel","last":"Moore","email":"Mikel.Moore@deangelo.name","address":"716 Predovic Cape","created":"December 11, 2016","balance":"$9,523.11"},{"first":"Kamryn","last":"Kohler","email":"limesquirrel76@gmail.com","address":"73392 Eveline Avenue","created":"July 17, 2019","balance":"$2,270.58"},{"first":"Eino","last":"Lubowitz","email":"greygiraffe91@gmail.com","address":"4340 Annabelle Valleys","created":"August 7, 2018","balance":"$7,312.19"},{"first":"Maryse","last":"Goodwin","email":"Maryse.Goodwin@gilbert.net","address":"490 Alexa Mount","created":"October 13, 2010","balance":"$2,562.39"},{"first":"Amya","last":"Osinski","email":"purplegiraffe48@gmail.com","address":"0883 Mark Summit","created":"February 18, 2013","balance":"$3,423.64"},{"first":"Daniella","last":"Fisher","email":"Daniella.Fisher@raul.com","address":"96002 Damien Walks","created":"November 9, 2017","balance":"$9,893.80"},{"first":"Robin","last":"Hayes","email":"orchidfrog12@gmail.com","address":"484 Ashlynn Ridge","created":"January 12, 2010","balance":"$6,219.91"},{"first":"Enrique","last":"Effertz","email":"blackfrog62@gmail.com","address":"7795 Henderson Hollow","created":"September 20, 2010","balance":"$4,962.60"},{"first":"Ewald","last":"Braun","email":"azurewolf88@gmail.com","address":"8126 Mann Groves","created":"February 20, 2011","balance":"$4,928.42"},{"first":"Norma","last":"Bergstrom","email":"orchidfrog72@gmail.com","address":"721 Annie Row","created":"February 19, 2019","balance":"$7,036.94"},{"first":"Otilia","last":"Marks","email":"cyanfrog93@gmail.com","address":"9750 Simonis Corners","created":"December 19, 2014","balance":"$3,671.06"},{"first":"Otto","last":"Hahn","email":"blueturtle44@gmail.com","address":"04405 Feil Manor","created":"July 2, 2018","balance":"$844.77"},{"first":"Ahmad","last":"Heaney","email":"Ahmad.Heaney@rudolph.biz","address":"0523 Bradtke Trace","created":"January 21, 2014","balance":"$4,206.21"},{"first":"Kieran","last":"Hintz","email":"Kieran.Hintz@kenna.net","address":"10909 Langosh Crossroad","created":"October 26, 2015","balance":"$7,907.32"},{"first":"Joanne","last":"Dicki","email":"Joanne.Dicki@dominic.net","address":"680 Carolanne Row","created":"November 29, 2017","balance":"$9,967.31"},{"first":"Ashly","last":"Rogahn","email":"turquoiserabbit20@gmail.com","address":"65749 Wolf Manors","created":"August 31, 2015","balance":"$6,379.09"},{"first":"Rico","last":"Yundt","email":"violetfrog25@gmail.com","address":"3055 Dach Landing","created":"October 1, 2017","balance":"$6,985.24"},{"first":"Eldon","last":"Reilly","email":"azurerabbit61@gmail.com","address":"42598 Anastasia Club","created":"November 27, 2018","balance":"$7,761.17"},{"first":"Trystan","last":"Gleason","email":"Trystan.Gleason@rory.net","address":"433 Heathcote Branch","created":"April 23, 2013","balance":"$3,471.57"},{"first":"Benedict","last":"Hane","email":"greenwolf11@gmail.com","address":"1927 Max Fords","created":"December 29, 2016","balance":"$2,364.82"},{"first":"Dandre","last":"Hammes","email":"Dandre.Hammes@kenna.org","address":"5126 Murray Pines","created":"December 16, 2016","balance":"$4,689.87"},{"first":"Kennith","last":"Altenwerth","email":"tangiraffe33@gmail.com","address":"4687 Maurice Flat","created":"August 11, 2017","balance":"$8,932.29"}]
      this.tableLength = this.tableData.length;
      this.tableFilter = this.tableData ;
      this.tablePages = Math.ceil( this.tableLength/10 );
      this.currentPage = 0;
     });
  }
  paginationNext() {
    this.currentPage += 1;
    console.log(this.currentPage);
  }
  paginationPrev() {
    this.currentPage -= 1;
    console.log(this.currentPage);
  }

  updateOrderBy(name) {
    if(this.headerJson[name].order == 0)
      this.headerJson[name].order = 1;
    else
      this.headerJson[name].order = 0;
  }

  sort(sortBy: string, orderBy: number) {
    this.tableFilter = (this.tableFilter).sort( (a, b ) => {
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

  disablePrevious() {

    if(this.currentPage <= 0){
      return true;
    }
    console.log("before "+this.currentPage)
    return false;
  }

  disableNext() {
    console.log("tab leen "+this.tablePages);
    if(this.currentPage >= this.tablePages -1 ){
      return true;
    }
    console.log("before "+this.currentPage)
    return false;
  }

  paginationFirst() {
    this.currentPage = 0;
  }

  paginationLast() {
    this.currentPage = this.tablePages-1;
    console.log("pages "+this.currentPage)
  }

  updateTable() {
    this.tableFilter = this.tableData.filter((value: string, index: number, arr) => {
      console.log("myfilter inner "+this.myFilter);
      for(var i in this.headerJson)
      if((arr[index][this.headerJson[i].name]).toLowerCase().includes(this.myFilter.toLowerCase()))
        return true;

       return false;
    });
    this.currentPage = 0;
    this.tableLength = this.tableFilter.length;
    this.tablePages = Math.ceil( this.tableLength/10 )// this.tableFilter.length-1;
  }

}
