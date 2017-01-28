import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthGuard } from './app.guard';

const appRoutes : Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path: 'profile',
    component : ProfileComponent,
    canActivate : [AuthGuard]
  }

];
export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
