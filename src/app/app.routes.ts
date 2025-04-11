import { Routes } from '@angular/router';
import { LandingScreenComponent } from './screens/landing-screen/landing-screen.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingScreenComponent },
];
