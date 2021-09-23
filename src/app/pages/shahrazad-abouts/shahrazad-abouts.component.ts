import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shahrazad-abouts',
  templateUrl: './shahrazad-abouts.component.html',
  styleUrls: ['./shahrazad-abouts.component.scss']
})
export class ShahrazadAboutsComponent implements OnInit {
  listeMarque: any= [];
   

  constructor() { }

  ngOnInit(): void {
    this.getMarque()

  }

  getMarque() {

    for (let index = 1; index < 10; index++) {

      var brand = { imageUrl: 'assets/images/brands/' + index + '.png', name: 'marque ' + index }
      this.listeMarque.push(brand)
 
    }
 
  }

}
