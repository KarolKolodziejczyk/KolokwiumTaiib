import { Routes } from '@angular/router';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { MousesComponent } from './mouses/mouses.component';

export const routes: Routes = [

  { path: 'keyboards', component: KeyboardsComponent },
  { path: 'mouses', component: MousesComponent },
  { path: '', redirectTo: '/keyboards', pathMatch: 'full' }
];
