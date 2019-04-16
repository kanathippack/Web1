import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [


{ path: 'header', component: HeaderComponent},
{path: 'home', component: HomeComponent},
{ path: '**',   redirectTo: '/home'},

{ path: '',   redirectTo: '/home',pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
