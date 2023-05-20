import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'view-message/:id',
    loadChildren: () =>
      import('./view-message/view-message.module').then(
        (m) => m.ViewMessagePageModule
      ),
  },
  {
    path: 'user-edit/:id',
    loadChildren: () =>
      import('./user-edit/user-edit.module').then(
        (m) => m.UserEditPageModule
      ),
  },
  {
    path: 'user-list',
    loadChildren: () =>
      import('./user-list/user-list.module').then(
        (m) => m.UserListPageModule
      ),
  },
  {
    path: 'theme-list',
    loadChildren: () =>
      import('./theme-list/theme-list.module').then(
        (m) => m.ThemeListPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'theme-edit/:id',
    loadChildren: () =>
      import('./theme-edit/theme-edit.module').then(
        (m) => m.ThemeEditPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
