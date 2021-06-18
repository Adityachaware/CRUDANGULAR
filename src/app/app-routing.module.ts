import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestroComponent } from './components/add-restro/add-restro.component';
import { UpdateRestroComponent } from './components/update-restro/update-restro.component';
import { LoginRestroComponent } from './components/login-restro/login-restro.component';
import { ListRestroComponent } from './components/list-restro/list-restro.component';
import { RegistrationRestroComponent } from './components/registration-restro/registration-restro.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddRestroComponent,
  },
  {
    path: 'update/:id',
    component: UpdateRestroComponent,
  },
  {
    path: 'login',
    component: LoginRestroComponent,
  },
  {
    path: 'list',
    component: ListRestroComponent,
  },
  {
    path: 'registration',
    component: RegistrationRestroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
