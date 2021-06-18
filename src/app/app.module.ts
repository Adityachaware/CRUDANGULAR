import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddRestroComponent } from './components/add-restro/add-restro.component';
import { UpdateRestroComponent } from './components/update-restro/update-restro.component';
import { LoginRestroComponent } from './components/login-restro/login-restro.component';
import { RegistrationRestroComponent } from './components/registration-restro/registration-restro.component';
import { ListRestroComponent } from './components/list-restro/list-restro.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddRestroComponent,
    UpdateRestroComponent,
    LoginRestroComponent,
    RegistrationRestroComponent,
    ListRestroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
