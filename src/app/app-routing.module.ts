
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Auth Guard
import { AuthGuard } from './_guards/auth.guard';

// Routes
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListUserComponent, AddUserComponent, EditUserComponent } from './user';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'list-user', component: ListUserComponent, canActivate: [AuthGuard]},
  { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard]},
  { path: 'edit-user', component: EditUserComponent, canActivate: [AuthGuard]},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
