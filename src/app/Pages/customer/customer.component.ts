import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  pageTitle="Customer Details";
  CustomerForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.CustomerForm =this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      order:this.fb.group({
      productName: ['',[Validators.required]],
      Quantity:['',[Validators.required]],
      rate:['',[Validators.required]]
      }),
      shipping:this.fb.group({
        country: ['',[Validators.required]],
        city:['',[Validators.required]],
        pincode:['',[Validators.required]]
        })
  });
  }

  onSubmit(){
    console.log('CustomerForm  status:' +this.CustomerForm.valid);
    console.log('order Form status:' +this.CustomerForm.get('order').valid);
    console.log('shipping Form status:' +this.CustomerForm.get('shipping').valid);
  }

}
