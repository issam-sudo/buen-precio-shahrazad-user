import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shahrazad-header',
  templateUrl: './shahrazad-header.component.html',
  styleUrls: ['./shahrazad-header.component.scss']
})
export class ShahrazadHeaderComponent implements OnInit {

  brandsYears : number;
  constructor() {
    this.brandsYears = new Date().getFullYear()

   }

  ngOnInit(): void {
  }

}
