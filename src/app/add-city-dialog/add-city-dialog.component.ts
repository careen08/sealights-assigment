import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-add-city-dialog',
  standalone: true,
  imports: [FormsModule,MatDialogActions,CommonModule, MatDialogContent,MatFormFieldModule], 
  templateUrl: './add-city-dialog.component.html',
  styleUrls: ['./add-city-dialog.component.scss'] 
})
export class AddCityDialogComponent {
  cityName: string = '';

  constructor(
    private dialogRef: MatDialogRef<AddCityDialogComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: { countryId: number; countryName: string }
  ) {}

  onAddCity() {
    const payload = {
      name: this.cityName,
      countryId: this.data.countryId,
    };

    this.http.post('/api/city', payload).subscribe(
      (response) => {
        console.log('City added:', response);
        this.dialogRef.close(this.cityName); 
      },
      (error) => {
        console.error('Error adding city:', error);
      }
    );
  }

  onCancel() {
    this.dialogRef.close();
  }
}
