import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { FormPageComponent } from '../app/form-page/form-page.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormPageComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client-form';
}
