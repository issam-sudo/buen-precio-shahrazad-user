import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shahrazad-contacts',
  templateUrl: './shahrazad-contacts.component.html',
  styleUrls: ['./shahrazad-contacts.component.scss']
})
export class ShahrazadContactsComponent implements OnInit {
  listStock: any= [];
  userForm: any;
  submitted = false;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required , Validators.email]],
      phone: ['', [Validators.required]],
      Subject: [''],
      message: ['', [Validators.required]],

    })  
    this.getStockList()
  }
  get f() { return this.userForm.controls; }
  getStockList(){
    
    for (let index = 1; index < 3; index++) {

      var stock = { imageUrl: 'assets/images/stores/img-' + index + '.jpg', title: 'Wall Street Plaza' , adress : '88 Pine St, New York, NY 10005, USA' , telphone : '+1 987-876-6543'}
      this.listStock.push(stock)
 
    }
    console.log(this.listStock)
  }
  get getControl(){
    return this.userForm.controls;
  }
  
  onSubmit(){
    this.submitted = true;
 

    console.log(this.userForm.value);
  }
}
