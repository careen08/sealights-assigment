import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { FormPageComponent } from './form-page/form-page.component';
export const routes: Routes = [{
    path:'',
    component:UserListComponent
},
{
    path:'adduser',
    component:FormPageComponent
}
];
