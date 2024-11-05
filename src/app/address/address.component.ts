import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-address',
  standalone: true,
  imports: [HttpClientModule,CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  addressForm: FormGroup;
  countries: { id: number, name: string }[] = []; // countries array

  constructor(private fb: FormBuilder,private http: HttpClient) {
    this.addressForm = this.fb.group({
      addresses: this.fb.array([this.createAddressFormGroup()])
    });
    this.fetchCountries();
  }

  createAddressFormGroup(): FormGroup {
    return this.fb.group({
      name: new FormControl('', [Validators.required]),
      country: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl('', [Validators.required])
    });
  }

  addresses(): FormArray {
    return this.addressForm.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses().push(this.createAddressFormGroup());
  }

  removeAddress(index: number) {
    if (this.addresses().length > 1) { 
      this.addresses().removeAt(index);
      console.log('Address removed at index:', index); 
    } else {
      console.log('Cannot remove the last address');
    }
  }
  fetchCountries() {
    
    const countriesUrl = 'http://localhost:3000/api/countries'; 

    this.http.get<any[]>(countriesUrl)
    .subscribe(
      (data) => {
        console.log('Countries data:', data);
        this.countries = data;
      },
      (error) => {
        console.error('Error fetching countries:', error);
      });
  }
}