import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)},
  {path:'main',canActivate:[AuthGuard],loadChildren:()=>import('./modules/main/main.module').then(m=>m.MainModule)},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
