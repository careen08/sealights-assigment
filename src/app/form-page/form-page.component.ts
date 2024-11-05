import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AddressComponent } from '../address/address.component';
import { FormControl,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-page',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatDatepickerModule,MatIconModule,MatDividerModule,MatButtonModule,AddressComponent],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss'
})
export class FormPageComponent implements OnInit{
  userForm: FormGroup;
  constructor(private http:HttpClient){
    this.userForm= new FormGroup({
      name : new FormControl("",[Validators.required ,Validators.minLength(5)]),
      birthdate: new FormControl("",[Validators.required])
    })
  }
  ngOnInit(): void {
      this.onSubmit();
  }
  onSubmit(){
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      console.log('Submitting form data:', formData);
  
      this.http.post('http://localhost:3000/api/person', formData).subscribe(
        (response) => {
          console.log('Data sent successfully:', response);
        },
        (error) => {
          console.error('Error sending data:', error);
        }
      );
    } else {
      console.warn('Form is invalid');
    }
  }

}
