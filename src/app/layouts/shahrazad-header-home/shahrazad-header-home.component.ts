import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shahrazad-header-home',
  templateUrl: './shahrazad-header-home.component.html',
  styleUrls: ['./shahrazad-header-home.component.scss']
})
export class ShahrazadHeaderHomeComponent implements OnInit {
  brandsYears : number;
  constructor() {
    this.brandsYears = new Date().getFullYear()

   }

  ngOnInit(): void {
  }

}
