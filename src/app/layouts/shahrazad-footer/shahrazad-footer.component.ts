import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shahrazad-footer',
  templateUrl: './shahrazad-footer.component.html',
  styleUrls: ['./shahrazad-footer.component.scss']
})
export class ShahrazadFooterComponent implements OnInit {

  copyRightDate: number;

  constructor() {
    this.copyRightDate = new Date().getFullYear()

   }

  ngOnInit(): void {
  }

}
