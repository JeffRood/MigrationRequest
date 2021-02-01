import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';

const routerOptions: ExtraOptions = {
  useHash: true,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'

  // ...any other options you'd like to use
};


const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent,
  },

  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },

  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {path: '',
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
       },

    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
