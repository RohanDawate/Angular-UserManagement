import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuard } from './_guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ListUserComponent, AddUserComponent, EditUserComponent } from './user';
import { HeaderComponent, FooterComponent, NavBarComponent } from './shared';
import { NavRightComponent } from './shared/layout/nav-right/nav-right.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    NavBarComponent,
    NavRightComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
