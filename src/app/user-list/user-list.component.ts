import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Router ,RouterModule} from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatTableModule,RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  constructor(private router:Router){

  }
  displayedColumns: string[] = ['id', 'name', 'birthdate', 'address count'];
 

}
